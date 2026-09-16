#!/usr/bin/env bash
# Einheitliche Bildbehandlung für alle Fotos der Seite.
#
# Aufruf im Ordner frontend/:
#   scripts/prepare-image.sh <quelle> <ziel.jpg> [foto|portrait]
#
# Beispiel:
#   scripts/prepare-image.sh ~/Downloads/whiteboard.jpg public/images/expertise-beratung.jpg
#   scripts/prepare-image.sh ~/Downloads/person.jpg public/images/team-1.jpg portrait
#
# foto:     3:2, 1200 x 800 Pixel, leicht entsättigt
# portrait: 4:5, 640 x 800 Pixel, schwarzweiß
#
# Für alle Bilder gleich: mittig zuschneiden, kühler Weißabgleich, gleiche
# mittlere Helligkeit. So wirkt die Seite nicht zusammengewürfelt.
# Anderes ffmpeg verwenden: FFMPEG=/pfad/zu/ffmpeg scripts/prepare-image.sh ...
set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Aufruf: $0 <quelle> <ziel.jpg> [foto|portrait]" >&2
  exit 1
fi

SRC="$1"
OUT="$2"
FORMAT="${3:-foto}"
FFMPEG="${FFMPEG:-ffmpeg}"
# Mittlere Helligkeit, auf die jedes Bild gebracht wird (0 bis 255)
TARGET_LUMA=118

case "$FORMAT" in
  foto)
    CROP="scale=1200:800:force_original_aspect_ratio=increase,crop=1200:800"
    COLOR="eq=saturation=0.72"
    ;;
  portrait)
    CROP="scale=640:800:force_original_aspect_ratio=increase,crop=640:800"
    COLOR="hue=s=0"
    ;;
  *)
    echo "Unbekanntes Format: $FORMAT (foto oder portrait)" >&2
    exit 1
    ;;
esac

# Schritt 1: mittlere Helligkeit des zugeschnittenen Bildes messen
AVG=$("$FFMPEG" -hide_banner -i "$SRC" -vf "$CROP,signalstats,metadata=print:key=lavfi.signalstats.YAVG" \
  -frames:v 1 -f null - 2>&1 | sed -n 's/.*YAVG=\([0-9.]*\).*/\1/p' | tail -1)

# Schritt 2: Gamma so wählen, dass das Mittel beim Zielwert landet.
# Begrenzt auf 0,75 bis 1,35, damit kein Bild kippt.
GAMMA=$(awk -v a="$AVG" -v t="$TARGET_LUMA" 'BEGIN {
  g = log(a / 255) / log(t / 255)
  if (g < 0.75) g = 0.75
  if (g > 1.35) g = 1.35
  printf "%.3f", g
}')

# Schritt 3: Farbe, kühler Weißabgleich (Rot etwas raus, Blau etwas rein), Helligkeit
FILTER="$CROP,$COLOR,colorbalance=rs=-0.03:bs=0.03:rm=-0.03:bm=0.03,eq=gamma=$GAMMA"

"$FFMPEG" -hide_banner -loglevel error -y -i "$SRC" -vf "$FILTER" \
  -frames:v 1 -update 1 -q:v 4 "$OUT"

echo "$OUT  Helligkeit vorher $AVG, Gamma $GAMMA, $(wc -c < "$OUT") Bytes"
