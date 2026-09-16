#!/usr/bin/env bash
# Bereitet einen Clip für das Hintergrundvideo im Hero auf.
#
# Aufruf im Ordner frontend/:
#   scripts/prepare-hero-video.sh <quelle> <name> [start in s] [dauer in s]
#
# Beispiel:
#   scripts/prepare-hero-video.sh ~/Downloads/fabrik.mp4 hero 0.5 16
#
# Ergebnis in public/media/:
#   <name>.mp4, <name>.webm, <name>-poster.jpg, <name>-poster-960.jpg
# Danach den Clip in src/data/heroClips.ts eintragen.
#
# Anderes ffmpeg verwenden:   FFMPEG=/pfad/zu/ffmpeg scripts/prepare-hero-video.sh ...
# mp4 zu groß (über 6 MB):    MP4_CRF=28 scripts/prepare-hero-video.sh ...
# Nur Standbilder erneuern:   POSTER_ONLY=1 scripts/prepare-hero-video.sh - <name>
#                             (liest das vorhandene public/media/<name>.mp4)
set -euo pipefail

if [ $# -lt 2 ]; then
  echo "Aufruf: $0 <quelle> <name> [start in s] [dauer in s]" >&2
  exit 1
fi

SRC="$1"
NAME="$2"
START="${3:-0}"
DURATION="${4:-16}"
FFMPEG="${FFMPEG:-ffmpeg}"
MP4_CRF="${MP4_CRF:-26}"
WEBM_CRF="${WEBM_CRF:-34}"
POSTER_Q="${POSTER_Q:-16}"
POSTER_ONLY="${POSTER_ONLY:-0}"
OUT="public/media"
MAX_MP4_BYTES=6000000

# Im Hintergrund bringt mehr als Full HD nichts, 25 Bilder pro Sekunde reichen.
FILTER="scale=1920:-2,fps=25"

mkdir -p "$OUT"

if [ "$POSTER_ONLY" != "1" ]; then
  # mp4, H.264, ohne Ton (-an). Eine stumme Tonspur kostet nur Bytes und
  # blockiert auf manchen Geräten das Autoplay. faststart legt den Index an den
  # Anfang der Datei, sonst startet das Video erst nach dem kompletten Download.
  "$FFMPEG" -hide_banner -y -ss "$START" -t "$DURATION" -i "$SRC" -an -vf "$FILTER" \
    -c:v libx264 -crf "$MP4_CRF" -preset slow -profile:v high -pix_fmt yuv420p \
    -movflags +faststart "$OUT/$NAME.mp4"

  # webm, VP9, ohne Ton. Kleiner als die mp4, wird im Browser zuerst versucht.
  "$FFMPEG" -hide_banner -y -ss "$START" -t "$DURATION" -i "$SRC" -an -vf "$FILTER" \
    -c:v libvpx-vp9 -crf "$WEBM_CRF" -b:v 0 -row-mt 1 -deadline good -cpu-used 2 \
    "$OUT/$NAME.webm"
fi

# Standbild aus dem ersten Frame, einmal in voller Breite und einmal mit 960
# Pixeln für schmale Bildschirme. Es ist das LCP-Element und liegt unter der
# Abdunklung, deshalb stärker komprimiert (2 = beste Qualität, 31 = kleinste Datei).
"$FFMPEG" -hide_banner -y -i "$OUT/$NAME.mp4" -vframes 1 -update 1 -q:v "$POSTER_Q" \
  "$OUT/$NAME-poster.jpg"
"$FFMPEG" -hide_banner -y -i "$OUT/$NAME.mp4" -vframes 1 -update 1 -vf "scale=960:-2" -q:v "$POSTER_Q" \
  "$OUT/$NAME-poster-960.jpg"

ls -l "$OUT/$NAME".* "$OUT/$NAME"-poster*.jpg

MP4_BYTES=$(wc -c < "$OUT/$NAME.mp4")
if [ "$MP4_BYTES" -gt "$MAX_MP4_BYTES" ]; then
  echo "Achtung: $NAME.mp4 hat $MP4_BYTES Bytes, Ziel sind unter 6 MB." >&2
  echo "Mit höherem MP4_CRF (z. B. 28) oder kürzerer Dauer neu erzeugen." >&2
  exit 2
fi
