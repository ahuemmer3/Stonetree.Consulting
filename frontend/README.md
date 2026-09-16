# Frontend – stonetree

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
      pillars.js              Die drei Bereiche (Expertise)
      approach.js             Die drei "Wie wir arbeiten"-Punkte
      publications.js         Publikationen (Platzhalter)
      about.js                Text + Kennzahlen fuer "Ueber uns"
    hooks/                    Wiederverwendbare Logik
      useScrolled.js          Header-Hintergrund beim Scrollen
      usePrefersReducedMotion.js   Animationen abschaltbar (Barrierefreiheit)
    components/
      layout/                 Rahmen der Seite
        Header.jsx            Navigation inkl. Handy-Menue
        Footer.jsx            Footer + Impressum
      sections/               Die Inhaltsabschnitte (von oben nach unten)
        Hero.jsx              Grosser Kopfbereich (Uebersicht)
        Pillars.jsx           Expertise – die drei Bereiche
        Publications.jsx      Publikationen
        About.jsx             Ueber uns
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

Die Seite ist **monochrom** gehalten (angelehnt an Roland Berger): weisse Schrift
auf dunklen Flaechen, dunkle Schrift auf hellgrauen. Die Abschnitte wechseln sich
ab (Hero dunkel, Expertise hell, Publikationen dunkel, Ueber uns hell, Kontakt
dunkel). Schrift ist **Ubuntu** (ueber Google Fonts in `index.html` geladen).

Alle Design-Tokens (Farben, Schriften) stehen zentral in `src/styles/index.css`
im `@theme`-Block – z. B. `--color-dark` (dunkle Flaeche), `--color-soft` (helle
Flaeche), `--color-heading`. Eine Farbe dort geaendert wirkt sich ueberall aus.

### Bilder

Alle Fotos liegen in `public/images/` und sind **Platzhalter von Unsplash**
(lizenzfrei nutzbar). Zum Austauschen einfach die Datei mit gleichem Namen
ersetzen – der Code bleibt unveraendert:

- `expertise-*.jpg` – je Bereich ein Foto (siehe `data/pillars.js`, Feld `image`)
- `pub-*.jpg` – je Publikation ein Foto (siehe `data/publications.js`)

Fuer die spaetere Live-Seite empfiehlt sich, eigene Fotos zu verwenden.
Bildnachweis: siehe `public/images/BILDNACHWEIS.txt`.

### Hero-Video

Das Hintergrundvideo im Hero liegt in `public/media/`. Es wird nicht ueber den
Bundler importiert. Je Clip gibt es drei Dateien:

| Datei | Format |
| --- | --- |
| `<name>.mp4` | H.264, 1920 breit, 25 fps, ohne Tonspur, faststart, unter 6 MB |
| `<name>.webm` | VP9, gleiche Groesse, ohne Tonspur, kleiner als die mp4 |
| `<name>-poster.jpg` | erstes Bild des Clips |

Clips sind 12 bis 25 Sekunden lang und stammen nur aus frei lizenzierten
Quellen (Pexels, Coverr, Mixkit). Quelle und Lizenz in `BILDNACHWEIS.txt`
und `UMSETZUNG.md` eintragen.

Neuen Clip aufbereiten (braucht ffmpeg):

```bash
cd frontend
scripts/prepare-hero-video.sh ~/Downloads/quelle.mp4 hero-3 0 16
```

Danach den Clip in `src/data/heroClips.ts` eintragen. Die Reihenfolge dort ist
die Abspielreihenfolge. Ein einzelner Clip laeuft in Schleife.

## Naechste Schritte (laut Arbeitsplan)

- Echtes Hintergrundbild im Hero einsetzen (`.hero-media`)
- Publikationen mit echten Beitraegen/PDFs fuellen (`data/publications.js`)
- Woche 7: Framer Motion fuer feinere Animationen
- Woche 8/9: Anbindung an das FastAPI-Backend (zentrale API-Adresse in `src/`)
