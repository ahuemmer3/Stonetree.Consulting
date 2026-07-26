# Frontend – NOVA Consulting

React-Umsetzung des Prototyps (`../prototyp.html`) mit Vite und Tailwind CSS.
Gleiches Aussehen, gleiche Animationen – nur sauber in einzelne Komponenten
aufgeteilt, damit man problemlos weiterbauen kann.

## Starten

```bash
cd frontend
npm install      # einmalig, holt alle Abhaengigkeiten
npm run dev      # Entwicklungsserver, dann http://localhost:5173 oeffnen
```

Weitere Befehle:

```bash
npm run build    # Erzeugt die fertige Seite im Ordner dist/ (fuer den Server)
npm run preview  # Zeigt den Build lokal an
```

## Ordnerstruktur (differenziert)

```
frontend/
  index.html                  Einstiegspunkt, laedt die Schriften und main.jsx
  vite.config.js              Vite + React + Tailwind
  package.json                Abhaengigkeiten und Befehle
  src/
    main.jsx                  Haengt die App ans HTML
    App.jsx                   Setzt die Seite aus den Abschnitten zusammen
    styles/
      index.css               Tailwind-Import, Design-Tokens (@theme), alle Stile
    data/                     Inhalte getrennt vom Code (hier Texte aendern)
      site.js                 Marke, Tagline, Impressum
      navigation.js           Navigationslinks
      pillars.js              Die drei Bereiche
      approach.js             Die drei Ansatz-Punkte
    hooks/                    Wiederverwendbare Logik
      useScrolled.js          Header-Hintergrund beim Scrollen
      usePrefersReducedMotion.js   Animationen abschaltbar (Barrierefreiheit)
    components/
      layout/                 Rahmen der Seite
        Header.jsx            Navigation inkl. Handy-Menue
        Footer.jsx            Footer + Impressum
      sections/               Die Inhaltsabschnitte (von oben nach unten)
        Hero.jsx              Grosser Kopfbereich
        Pillars.jsx           Die drei Bereiche
        Approach.jsx          Unser Ansatz
        Contact.jsx           Kontakt
      ui/                     Kleine, wiederverwendbare Bausteine
        Button.jsx            Link im Button-Look (primary / ghost)
        Reveal.jsx            Sanftes Einblenden beim Scrollen
```

### Warum so aufgeteilt?

- **`data/` getrennt vom Code:** Texte, Bereiche und Impressum aendert man hier,
  ohne in den Komponenten suchen zu muessen.
- **`layout/` vs. `sections/` vs. `ui/`:** Rahmen (Header/Footer), inhaltliche
  Abschnitte und kleine Bausteine sind klar getrennt. Jede Datei hat eine Aufgabe.
- **`hooks/`:** Logik (Scroll, Bewegungsreduktion) liegt fuer sich und ist mehrfach
  nutzbar.

## Design / Theme

Die Seite ist im **Capgemini-Stil** gehalten: heller Hintergrund, Capgemini-Blau
(`#0070AD`) als Akzent, Schrift **Ubuntu** (Capgeminis Markenschrift, ueber
Google Fonts in `index.html` geladen).

Alle Design-Tokens (Farben, Schriften) stehen zentral in `src/styles/index.css`
im `@theme`-Block. Eine Farbe dort geaendert wirkt sich ueberall aus – und ist
gleichzeitig als Tailwind-Utility verfuegbar (z. B. `text-blue`, `bg-soft`).

Der Hero zeigt aktuell einen **Platzhalter-Hintergrund** (heller Verlauf) mit
der typischen halbtransparenten blauen Karte. Fuer ein echtes Foto in
`src/styles/index.css` bei `.hero-media` ein `background-image: url(...)` setzen.

## Naechste Schritte (laut Arbeitsplan)

- Echtes Hintergrundbild im Hero einsetzen (`.hero-media`)
- Woche 7: Framer Motion fuer feinere Animationen
- Woche 8/9: Anbindung an das FastAPI-Backend (zentrale API-Adresse in `src/`)
