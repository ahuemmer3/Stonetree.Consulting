# Arbeitsplan Schritt für Schritt

Projekt: Unternehmenswebsite mit drei Bereichen (Global Business Strategy, AI Automation, Research Lab)
Stack: React, Tailwind CSS, FastAPI, MariaDB, Docker
Zeitraum: 1. Juli bis 1. Oktober, etwa 4 Stunden pro Woche

Dieser Plan ist so geschrieben, dass du jede Woche genau weißt, was zu tun ist. Hak die Punkte einfach ab. Wenn du in einer Woche schneller bist, arbeite ruhig vor, dann hast du am Ende mehr Luft.

---

## Diese Woche: bis Freitag (Abgabe Requirement-Analyse und Prototyp)

Ziel: Du gibst die Anforderungsanalyse und den geklickten Prototyp ab. Beides ist fertig, du musst es nur noch durchsehen und vorzeigbar machen.

1. Anforderungsanalyse öffnen und einmal komplett durchlesen.
2. Im Word-Dokument das Inhaltsverzeichnis aktualisieren: reinklicken, F9 drücken, "Gesamtes Verzeichnis aktualisieren" wählen.
3. Die gelb markierten Annahmen prüfen. Wo du es besser weißt, anpassen (Firmenname, Kontaktformular ja oder nein, Impressumsdaten).
4. Prototyp im Browser öffnen (Doppelklick auf die HTML-Datei). Einmal durchscrollen, mit der Maus über die drei Bereiche fahren, prüfen ob alles läuft.
5. Prototyp am Handy ansehen, falls möglich, oder im Browser das Fenster schmal ziehen, damit du die mobile Ansicht siehst.
6. Für die Abgabe: kurz notieren, was der Prototyp zeigt und was bewusst noch fehlt (echtes Video, echte Inhalte, Registrierung kommt später).

Wenn du das hast, bist du für Freitag fertig.

---

## Woche 1 (1. bis 7. Juli): Werkzeuge einrichten

Ziel: Alles ist installiert und ein leeres React-Projekt läuft bei dir lokal.

1. Node.js installieren (Version 20 oder neuer), falls noch nicht vorhanden. Prüfen mit `node -v` im Terminal.
2. Docker Desktop installieren und einmal starten.
3. Einen Code-Editor einrichten, am besten VS Code.
4. Ein neues React-Projekt anlegen:
   ```
   npm create vite@latest frontend -- --template react
   cd frontend
   npm install
   npm run dev
   ```
5. Im Browser `http://localhost:5173` öffnen. Wenn die Vite-Startseite erscheint, läuft es.
6. Tailwind einrichten. Im `frontend`-Ordner:
   ```
   npm install tailwindcss @tailwindcss/vite
   ```
   Dann in der `vite.config.js` das Tailwind-Plugin eintragen und in der Haupt-CSS-Datei `@import "tailwindcss";` an den Anfang setzen. (Die genauen Schritte stehen in der Tailwind-Doku unter "Vite", einmal nachschlagen und übernehmen.)
7. Test: Schreib in eine Komponente ein `<h1 className="text-3xl font-bold underline">Test</h1>` und prüf, ob es im Browser groß und unterstrichen erscheint. Wenn ja, ist Tailwind aktiv.

Am Ende von Woche 1: leeres Projekt läuft, Tailwind funktioniert.

---

## Woche 2 (8. bis 14. Juli): Grundgerüst und Struktur

Ziel: Die Seite hat eine saubere Struktur aus einzelnen Komponenten.

Hinweis: Dieses Grundgerüst ist bereits ausgearbeitet und liegt im Ordner `frontend/`. Der Prototyp wurde dort vollständig in React überführt (gleiches Aussehen, gleiche Animationen). Diese Woche dient also vor allem dazu, die Struktur zu verstehen und nachzuvollziehen. Eine ausführliche Erklärung steht in `frontend/README.md`.

1. Den vorhandenen Prototyp (die HTML-Datei) als Vorlage danebenlegen und mit der React-Umsetzung vergleichen.
2. Die (differenzierte) Ordnerstruktur in `frontend/src` ansehen und verstehen:
   ```
   src/
     main.jsx                Einstiegspunkt
     App.jsx                 setzt die Abschnitte zusammen
     styles/
       index.css             Design-Tokens (Farben, Schriften) + Stile
     data/                   Inhalte (Texte, Bereiche, Impressum)
       site.js
       navigation.js
       pillars.js
       approach.js
     hooks/                  wiederverwendbare Logik
       useScrolled.js
       usePrefersReducedMotion.js
     components/
       layout/               Header.jsx, Footer.jsx
       sections/             Hero.jsx, Pillars.jsx, Approach.jsx, Contact.jsx
       ui/                   Button.jsx, Reveal.jsx
   ```
   Die Aufteilung ist bewusst gewählt: `layout/` für den Rahmen, `sections/` für die Inhaltsabschnitte, `ui/` für kleine wiederverwendbare Bausteine, `data/` für die Texte (so kannst du Inhalte ändern, ohne im Code zu suchen).
3. Im Ordner `frontend` einmal `npm install` und dann `npm run dev` ausführen und die Seite unter `http://localhost:5173` ansehen.
4. Probieren: In `data/pillars.js` einen Text ändern und im Browser prüfen, dass sich die Seite anpasst. So verstehst du, wie Inhalt und Darstellung getrennt sind.
5. Die Farben und Schriftarten sind in `styles/index.css` im `@theme`-Block als Tailwind-Einstellungen hinterlegt (Akzentfarbe, Schriftfamilien). Einmal anschauen.

Am Ende von Woche 2: du verstehst die Struktur, die Seite läuft lokal, Inhalte und Design sind sauber getrennt.

---

## Woche 3 (15. bis 21. Juli): Hero und Navigation

Ziel: Der obere Bereich sieht fertig aus.

1. Header bauen: Logo links, Navigationslinks rechts, Kontakt als Button. Beim Scrollen soll der Header einen dunklen Hintergrund bekommen.
2. Hover-Effekt auf die Navigationslinks legen (Linie wächst unter dem Link).
3. Hero-Bereich bauen: große Überschrift, Untertitel, zwei Buttons.
4. Den animierten Hintergrund aus dem Prototyp übernehmen (das Canvas-Skript) oder, falls schon vorhanden, ein echtes Video einbauen.
5. Prüfen, dass der Hero den ganzen Bildschirm füllt und der Text gut lesbar ist.

Am Ende von Woche 3: Header und Hero sehen fertig und hochwertig aus.

---

## Woche 4 (22. bis 28. Juli): Die drei Bereiche

Ziel: Das Herzstück der Seite steht, die drei Bereiche mit Interaktion.

1. Die drei Bereiche als Komponente bauen (Strategie, Automatisierung, Forschung).
2. Den Effekt umsetzen: Fährt man mit der Maus über einen Bereich, wird er größer und heller, die anderen treten zurück.
3. Jeder Bereich zeigt Titel, kurze Beschreibung und einen "Mehr erfahren"-Hinweis.
4. Auf dem Smartphone sollen die drei Bereiche untereinander stehen und immer offen sein.

Am Ende von Woche 4: die drei Bereiche sehen gut aus und reagieren auf die Maus.

---

## Woche 5 (29. Juli bis 4. August): Ansatz und Kontakt

Ziel: Die mittleren und unteren Abschnitte sind fertig.

1. Ansatz-Bereich bauen (heller Abschnitt mit einer großen Aussage und drei kurzen Punkten).
2. Kontakt-Bereich bauen (Überschrift, kurzer Text, Button).
3. Footer mit Impressum bauen. Die Daten von Herrn Huchs eintragen, sobald du sie hast.
4. Alle Abschnitte auf gleiche Abstände und saubere Ausrichtung prüfen.

Am Ende von Woche 5: die ganze Seite ist inhaltlich komplett.

---

## Woche 6 (5. bis 11. August): Responsive machen

Ziel: Die Seite sieht auf Handy, Tablet und Desktop gut aus.

1. Die Seite im Browser schmal und breit ziehen und jeden Abschnitt prüfen.
2. Schriftgrößen und Abstände für kleine Bildschirme anpassen.
3. Auf dem Handy ein einfaches Menü einbauen (Button, der die Navigation auf- und zuklappt).
4. Prüfen, dass nichts über den rechten Rand hinausläuft und alle Buttons gut tippbar sind.

Am Ende von Woche 6: die Seite funktioniert auf allen Bildschirmgrößen.

---

## Woche 7 (12. bis 18. August): Animationen und Feinschliff

Ziel: Die Seite fühlt sich lebendig und rund an.

1. Framer Motion installieren:
   ```
   npm install framer-motion
   ```
2. Beim Scrollen sollen sich Abschnitte sanft einblenden.
3. Hover-Effekte überall prüfen und vereinheitlichen (Buttons, Links, Bereiche).
4. Darauf achten, dass die Effekte dezent bleiben und die Seite nicht langsam machen.
5. Reduzierte Bewegung berücksichtigen: Wer im System Animationen abgeschaltet hat, soll die Seite trotzdem ruhig sehen.

Am Ende von Woche 7: das Design wirkt fertig.

---

## Woche 8 (19. bis 25. August): Backend vorbereiten

Ziel: Das Backend läuft lokal und ist für die spätere Registrierung vorbereitet.

1. Das fertige Backend-Grundgerüst nehmen (FastAPI, MariaDB, Docker), das du schon hast.
2. Mit Docker Desktop starten:
   ```
   docker compose up --build
   ```
3. Prüfen, dass die API unter `http://localhost:8000/docs` erreichbar ist.
4. Die Routen für Registrierung und Login einmal über die automatische Doku durchtesten.
5. Noch nichts ins Frontend einbauen. Es reicht, dass das Backend bereit ist.

Am Ende von Woche 8: Backend und Datenbank laufen lokal, die Registrierung ist vorbereitet.

---

## Woche 9 (26. August bis 1. September): Frontend und Backend verbinden

Ziel: Das Frontend kann das Backend erreichen, als Vorbereitung für später.

1. Im Frontend eine zentrale Stelle für die Backend-Adresse anlegen.
2. Eine einfache Testanfrage ans Backend schicken (zum Beispiel die Startroute) und das Ergebnis in der Konsole ausgeben.
3. CORS prüfen: Wenn der Browser die Anfrage blockt, im Backend die erlaubten Adressen anpassen.
4. Das Kontaktformular, falls gewünscht, an die Formular-Route des Backends anbinden.

Am Ende von Woche 9: Frontend und Backend reden miteinander.

---

## Woche 10 (2. bis 8. September): Server einrichten

Ziel: Du hast einen Server und eine Domäne, die Seite ist aber noch nicht live.

1. Server mieten (zum Beispiel Hetzner, kleinste Stufe, Ubuntu).
2. Domäne kaufen.
3. Beim Domain-Anbieter einen A-Record anlegen, der auf die Server-IP zeigt.
4. Per SSH auf den Server verbinden.
5. Docker auf dem Server installieren:
   ```
   curl -fsSL https://get.docker.com | sh
   ```

Am Ende von Woche 10: Server läuft, Domäne zeigt darauf, Docker ist installiert.

---

## Woche 11 (9. bis 15. September): Live schalten

Ziel: Die Seite ist unter deiner Domäne erreichbar, mit HTTPS.

1. Den React-Build erzeugen:
   ```
   npm run build
   ```
2. Projekt per Git auf den Server holen.
3. Einen Reverse Proxy einrichten (Caddy ist am einfachsten, weil er HTTPS automatisch besorgt).
4. Alles starten:
   ```
   docker compose up -d --build
   ```
5. Im Browser die Domäne aufrufen und prüfen, dass die Seite mit `https` lädt.

Am Ende von Woche 11: die Seite ist online.

---

## Woche 12 (16. bis 22. September): Testen und Fehler beheben

Ziel: Die Seite läuft stabil und sieht überall richtig aus.

1. Die Seite in verschiedenen Browsern öffnen (Chrome, Firefox, Safari falls möglich).
2. Auf dem Handy testen.
3. Alle Links und Buttons durchklicken.
4. Ladezeit prüfen, vor allem den Hero-Bereich mit dem Video.
5. Gefundene Fehler notieren und beheben.

Am Ende von Woche 12: keine offensichtlichen Fehler mehr.

---

## Woche 13 (23. September bis 1. Oktober): Puffer und Abschluss

Ziel: Letzte Anpassungen, alles übergeben.

1. Restliche Kleinigkeiten beheben.
2. Inhalte final prüfen (Texte, Impressum, Kontaktdaten).
3. Eine kurze Übergabe schreiben: wie man den Server erreicht, wie man neuen Code einspielt, wo welche Datei liegt.
4. Projekt abschließen.

---

## Allgemeine Tipps

- Speichere deinen Code regelmäßig in Git, am besten nach jeder Sitzung.
- Wenn etwas nicht klappt, lies die Fehlermeldung genau, sie sagt meist klar, was fehlt.
- Häufige Stolpersteine: CORS-Fehler (Backend blockt das Frontend), Datenbankverbindung klemmt beim ersten Start (kurz warten, bis MariaDB hochgefahren ist), DNS braucht nach dem Eintrag etwas Zeit.
- Plane den Server-Teil nicht auf die letzte Woche, da hängt am meisten Wartezeit drin.
- Die Registrierung mit Datenbank ist als spätere Stufe gedacht. Das Backend ist schon dafür vorbereitet, du schaltest sie ein, wenn die Seite steht.
