# Frontend: stonetree

React-Umsetzung der stonetree-Website mit Vite, TypeScript und Tailwind CSS.
Überblick und Veröffentlichung: siehe `../README.md` und `../docs/hosting.md`.

## Starten

```bash
cd frontend
npm install      # einmalig, holt alle Abhaengigkeiten
npm run dev      # Entwicklungsserver, dann http://localhost:5173 oeffnen
```

Weitere Befehle:

```bash
npm run build    # Typprüfung und fertige Seite im Ordner dist/
npm run preview  # Zeigt den Build lokal an
```

## Ordnerstruktur

```
src/
  main.tsx            Einstieg, Router mit basename für Unterordner
  App.tsx             Routen und Seitenrahmen
  data/               alle Inhalte als typisierte Daten (Texte hier ändern)
  features/           Logik mit Zustand (Kontakt, Hero-Video, Karussell, Stellen, Navigation)
  components/
    layout/           Header, Footer, Menüs
    sections/         Abschnitte der Startseite
    detail/           Abschnitte der Bereichsseiten
    ui/               kleine wiederverwendbare Bausteine
  pages/              Seiten (Start, Bereich, Karriere, Impressum, Marke, 404)
  hooks/              kleine Hilfs-Hooks
  utils/publicUrl.ts  Pfade zu Dateien aus public/, berücksichtigt den Unterordner
  styles/             Stile nach Aufgabe getrennt, Farben nur in tokens.css
```

Dateien aus `public/` (Bilder, Videos, PDFs) immer über
`publicUrl("images/datei.jpg")` einbinden, nie mit festem `/images/...`.
Sonst fehlen sie auf GitHub Pages, wo die Seite in einem Unterordner liegt.

## Design / Theme

Hell und ruhig, angelehnt an Roland Berger: Weiß als Standard, jede zweite
Sektion hellgrau, dunkel sind nur Kopf- und Fußbereich. Eine einzige
Akzentfarbe (Tannengrün) an sechs festgelegten Stellen. Schrift ist **Ubuntu**
(über Google Fonts in `index.html` geladen).

Alle Farben und Maße stehen in `src/styles/tokens.css` und nur dort. Eine Farbe
dort geändert wirkt sich überall aus. Regeln und Begründungen:
`../docs/Projektdokumentation-stonetree.pdf`, Kapitel Gestaltung.

### Bilder

Alle Fotos liegen in `public/images/` und sind **Platzhalter von Unsplash**
(lizenzfrei nutzbar). Zum Austauschen einfach die Datei mit gleichem Namen
ersetzen – der Code bleibt unveraendert:

- `expertise-*.jpg` – je Bereich ein Foto (siehe `data/pillars.js`, Feld `image`)
- `pub-*.jpg` – je Publikation ein Foto (siehe `data/publications.js`)

Fuer die spaetere Live-Seite empfiehlt sich, eigene Fotos zu verwenden.
Bildnachweis: siehe `public/images/BILDNACHWEIS.txt`.

### Einheitliche Bildbehandlung

Alle Fotos laufen durch ein Skript, damit die Seite nicht zusammengewuerfelt
wirkt: mittig zugeschnitten, leicht entsaettigt, kuehler Weissabgleich und
gleiche mittlere Helligkeit.

```bash
cd frontend
scripts/prepare-image.sh ~/Downloads/quelle.jpg public/images/pub-1.jpg          # 3:2, 1200x800
scripts/prepare-image.sh ~/Downloads/person.jpg public/images/team-1.jpg portrait # 4:5, schwarzweiss
```

Motive zeigen echte Arbeitssituationen (Whiteboard, Bildschirm, Werkstatt,
Besprechung). Symbolbilder wie Handschlag oder Dashboard werden nicht mehr
verwendet. Quellen nur von Unsplash oder Pexels, Nachweis in
`public/images/BILDNACHWEIS.txt`.

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
