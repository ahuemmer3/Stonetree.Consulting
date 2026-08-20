# Kontaktformular an das FastAPI-Backend anbinden (Woche 8/9)

Aktuell verschickt das Formular über `mailto` (öffnet das Mailprogramm des
Besuchers). Sobald das Backend steht, soll die Nachricht stattdessen **direkt an
euer Postfach** gehen. Diese Anleitung zeigt genau die dafür nötigen Schritte.

## Überblick

```
Formular (Browser)  ──POST /api/contact──▶  FastAPI  ──SMTP──▶  euer Postfach
```

Ihr braucht dreierlei:
1. einen **Endpoint** `POST /api/contact` im FastAPI-Backend,
2. **SMTP-Zugangsdaten** eines E-Mail-Anbieters (verschickt die Mail),
3. eine **kleine Änderung im Frontend** (mailto → fetch), an genau einer Stelle.

---

## 1. Backend-Endpoint (FastAPI)

Pakete: `pip install fastapi "uvicorn[standard]" "pydantic[email]"`
(`pydantic[email]` liefert die E-Mail-Validierung.)

```python
# app/routers/contact.py
import os
import smtplib
from email.message import EmailMessage

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, constr

router = APIRouter()


class ContactRequest(BaseModel):
    name: constr(strip_whitespace=True, min_length=1, max_length=100)
    email: EmailStr
    message: constr(strip_whitespace=True, min_length=10, max_length=5000)


@router.post("/api/contact")
def send_contact(data: ContactRequest):
    # Zugangsdaten NIE hart in den Code – aus Umgebungsvariablen laden.
    host = os.environ["SMTP_HOST"]
    port = int(os.environ.get("SMTP_PORT", 587))
    user = os.environ["SMTP_USER"]
    password = os.environ["SMTP_PASSWORD"]
    recipient = os.environ["CONTACT_RECIPIENT"]  # euer Postfach

    msg = EmailMessage()
    msg["Subject"] = f"Anfrage von {data.name}"
    msg["From"] = user
    msg["To"] = recipient
    msg["Reply-To"] = data.email  # "Antworten" geht direkt an den Absender
    msg.set_content(f"{data.message}\n\n—\n{data.name}\n{data.email}")

    try:
        with smtplib.SMTP(host, port) as server:
            server.starttls()
            server.login(user, password)
            server.send_message(msg)
    except Exception:
        raise HTTPException(status_code=502, detail="Versand fehlgeschlagen.")

    return {"ok": True}
```

Router einbinden (in `main.py`):

```python
from fastapi import FastAPI
from app.routers import contact

app = FastAPI()
app.include_router(contact.router)
```

---

## 2. SMTP einrichten (der Versandweg)

Die SMTP-Daten bekommt ihr **von eurem E-Mail-Anbieter** – ihr müsst keinen
eigenen Mailserver bauen. Beispiele:

| Anbieter | SMTP-Host | Port |
|---|---|---|
| Gmail / Google Workspace | `smtp.gmail.com` | 587 |
| IONOS | `smtp.ionos.de` | 587 |
| Strato | `smtp.strato.de` | 587 |
| Brevo (Transactional, gratis-Tier) | `smtp-relay.brevo.com` | 587 |

Als Umgebungsvariablen setzen (z. B. in einer `.env`, **nicht** committen):

```
SMTP_HOST=smtp.euer-anbieter.de
SMTP_PORT=587
SMTP_USER=kontakt@eure-domain.de
SMTP_PASSWORD=…
CONTACT_RECIPIENT=kontakt@eure-domain.de
```

> Hinweis: `SMTP_USER` muss eine Adresse sein, von der ihr senden **dürft**.
> Bei Gmail braucht es ein „App-Passwort" (nicht das normale Login-Passwort).

---

## 3. CORS erlauben

Damit der Browser von der Website aus zugreifen darf:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://eure-domain.de"],  # in der Entwicklung: http://localhost:5173
    allow_methods=["POST"],
    allow_headers=["*"],
)
```

---

## 4. Frontend umstellen (eine Stelle)

In `frontend/src/features/contact/useContactForm.js` nur `handleSubmit`
ersetzen – `mailto` raus, `fetch` rein:

```js
async function handleSubmit(event) {
  event.preventDefault()
  const nextErrors = validateAll(values)
  setErrors(nextErrors)
  setTouched({ name: true, email: true, message: true })
  if (Object.keys(nextErrors).length > 0) return

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    if (!res.ok) throw new Error("Request fehlgeschlagen")
    setSubmitted(true)
  } catch {
    // Optional: einen Fehlerzustand ergänzen und dem Nutzer anzeigen.
  }
}
```

Die Funktion `buildMailto` kann dann entfernt werden.

Für die Entwicklung `/api` an das Backend weiterleiten – in
`frontend/vite.config.js`:

```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: { "/api": "http://localhost:8000" },
  },
})
```

---

## 5. Für die Live-Seite beachten

- **Spam-Schutz:** ein verstecktes „Honeypot"-Feld (Bots füllen es aus → Anfrage
  verwerfen) oder ein Rate-Limit. Günstig und ohne Captcha-Nervfaktor.
- **Zustellbarkeit:** SPF- und DKIM-Einträge für die Domain setzen, sonst landen
  die Mails evtl. im Spam.
- **DSGVO:** Datenschutzhinweis am Formular (wozu die Daten genutzt werden),
  Verschlüsselung (HTTPS) – da selbst gehostet, bleibt ihr ohne Drittanbieter.
