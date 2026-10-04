// Clips für das Hintergrundvideo im Hero. Sie laufen in dieser Reihenfolge und
// blenden ineinander über. Ein einzelner Clip reicht, er läuft dann in Schleife.
//
// Dateien liegen in public/media/ und werden mit
// scripts/prepare-hero-video.sh erzeugt. Quellen und Lizenzen: UMSETZUNG.md.
// Das Standbild des ersten Clips ist das, was beim Laden sofort zu sehen ist.

import { publicUrl } from "../utils/publicUrl"

export interface HeroClip {
  mp4: string
  webm: string
  poster: string
  // Standbild mit 960 Pixeln Breite für schmale Bildschirme
  posterSmall: string
  // Beschreibt das Motiv für die Pflege. Auf der Seite wird es nicht
  // ausgegeben, weil das Video reine Dekoration ist.
  alt: string
}

export const heroClips: HeroClip[] = [
  {
    mp4: publicUrl("media/hero.mp4"),
    webm: publicUrl("media/hero.webm"),
    poster: publicUrl("media/hero-poster.jpg"),
    posterSmall: publicUrl("media/hero-poster-960.jpg"),
    alt: "Luftaufnahme einer großen Fabrikhalle mit Außengelände",
  },
  {
    mp4: publicUrl("media/hero-2.mp4"),
    webm: publicUrl("media/hero-2.webm"),
    poster: publicUrl("media/hero-2-poster.jpg"),
    posterSmall: publicUrl("media/hero-2-poster-960.jpg"),
    alt: "Drohnenflug entlang der Fassade eines Bürohochhauses",
  },
]
