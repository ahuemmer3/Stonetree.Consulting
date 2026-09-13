# Website live schalten (Hetzner, Docker, Caddy)

Diese Anleitung bringt die Seite samt Kontaktformular auf einen eigenen Server.
Alles, was im Projekt dafür nötig ist, liegt bereits bereit. Von euch kommen
nur Server, Domain und die Zugangsdaten für den Mailversand.

## Überblick

```
Besucher ──HTTPS──▶ Caddy (web)  ──▶ Website-Dateien (React-Build)
                         │
                         └── /api/* ──▶ FastAPI (api) ──SMTP──▶ euer Postfach
```

| Datei | Zweck |
| --- | --- |
| `docker-compose.yml` | startet beide Container |
| `frontend/Dockerfile` | baut die Seite und liefert sie mit Caddy aus |
| `deploy/Caddyfile` | Domain, HTTPS, Weiterleitung von `/api` ans Backend |
| `backend/` | FastAPI mit `POST /api/contact` (Mailversand, Spam-Schutz) |
| `.env.example` | Vorlage für Domain und SMTP-Zugangsdaten |

## 1. Was ihr braucht

1. **Server:** Hetzner Cloud, kleinste Stufe (CX22 o. ä.), Ubuntu 24.04, Standort
   Deutschland. Beim Anlegen einen SSH-Schlüssel hinterlegen.
2. **Domain:** bei einem beliebigen Anbieter. Einen **A-Record** auf die IPv4
   des Servers setzen (für `eure-domain.de` und `www.eure-domain.de`).
3. **E-Mail-Versand (SMTP):** eine der beiden Varianten
   - **Postfach der eigenen Domain** (IONOS, Strato, all-inkl, Google Workspace):
     SMTP-Daten stehen in der Hilfe des Anbieters.
   - **Brevo** (Sitz in der EU, kostenloser Einstieg mit 300 Mails am Tag):
     Konto anlegen, Domain verifizieren, unter „SMTP & API" die SMTP-Daten
     erzeugen. Host `smtp-relay.brevo.com`, Port 587.

> Hetzner sperrt bei neuen Konten ausgehend die Ports 25 und 465. Deshalb
> **Port 587 mit `SMTP_SECURITY=starttls`** verwenden, der ist offen.

## 2. Server vorbereiten (einmalig)

```bash
ssh root@SERVER-IP
curl -fsSL https://get.docker.com | sh
ufw allow OpenSSH && ufw allow 80 && ufw allow 443 && ufw --force enable
```

## 3. Projekt holen und einrichten

```bash
git clone <URL-des-Repositorys> /opt/stonetree
cd /opt/stonetree
cp .env.example .env
nano .env        # DOMAIN und SMTP-Daten eintragen
```

## 4. Starten

```bash
docker compose up -d --build
```

Caddy holt beim ersten Aufruf automatisch ein HTTPS-Zertifikat. Das klappt
nur, wenn der A-Record schon auf den Server zeigt (DNS braucht manchmal
einige Stunden).

Prüfen:

```bash
curl https://eure-domain.de/api/health
# {"ok":true,"mail_configured":true}
```

Dann das Kontaktformular auf der Seite einmal selbst ausfüllen.

## 5. Neue Version einspielen

```bash
cd /opt/stonetree
git pull
docker compose up -d --build
```

## 6. Damit Mails nicht im Spam landen

Beim Domain-Anbieter die Einträge setzen, die euer Mailanbieter vorgibt:

- **SPF** (TXT-Eintrag, z. B. `v=spf1 include:spf.brevo.com ~all`)
- **DKIM** (TXT- oder CNAME-Eintrag, liefert der Anbieter)
- **DMARC** (TXT auf `_dmarc`, zum Start `v=DMARC1; p=none`)

## 7. Fehlersuche

| Problem | Nachsehen |
| --- | --- |
| Seite lädt nicht | `docker compose ps`, `docker compose logs web` |
| Kein HTTPS | A-Record prüfen, `docker compose logs web` |
| Formular meldet Fehler | `docker compose logs api` |
| `mail_configured: false` | SMTP_HOST, SMTP_USER oder CONTACT_RECIPIENT fehlt in `.env` |
| „Versand fehlgeschlagen" im Log | SMTP-Daten oder Port falsch (bei Hetzner 587 nehmen) |

## Lokal testen

Ohne Docker, zwei Terminals:

```bash
# Terminal 1: Backend
cd backend
python -m venv .venv
.venv/Scripts/activate           # macOS/Linux: source .venv/bin/activate
pip install -r requirements-dev.txt
pytest                           # Tests
uvicorn app.main:app --port 8000

# Terminal 2: Frontend (leitet /api an Port 8000 weiter)
cd frontend
npm run dev
```

Mit Docker wie auf dem Server: `.env` mit `DOMAIN=localhost` anlegen und
`docker compose up --build`. Die Seite läuft dann unter `https://localhost`
(der Browser warnt einmal wegen des lokalen Zertifikats).

## Vor dem Livegang

- Impressum und Datenschutzerklärung mit echten Daten füllen. Die
  Datenschutzerklärung muss das Kontaktformular und den Mailanbieter nennen.
- Google Fonts werden derzeit von Google geladen. Für DSGVO sauberer ist, die
  Schrift Ubuntu selbst auszuliefern.
