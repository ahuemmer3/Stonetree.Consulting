import Button from "../ui/Button"
import Reveal from "../ui/Reveal"
import { heroClips } from "../../data/heroClips"
import HeroMedia from "../../features/hero-video/HeroMedia"
import { useHeroVideo } from "../../features/hero-video/useHeroVideo"

// Hintergrund: stumme Clips, die nacheinander überblenden. Das Standbild des
// ersten Clips steht sofort da und bleibt, wenn kein Video laden soll.
// Clips pflegen: src/data/heroClips.ts, Dateien in public/media/.
export default function Hero() {
  const video = useHeroVideo(heroClips)

  return (
    <section className="hero" id="top">
      <HeroMedia video={video} />

      <div className="wrap hero-wrap">
        <Reveal className="hero-card" immediate>
          <span className="eyebrow">
            Consulting, KI-Automatisierung &amp; Research
          </span>
          <h1>
            Aus eigener Forschung.
            <br />
            In die Praxis gebracht.
            <br />
            <em>Bis zur laufenden Lösung.</em>
          </h1>
          <p className="hero-sub">
            Wir bringen Erkenntnisse aus eigener Forschung in den Mittelstand
            und setzen sie dort um. Von der Strategie bis zur laufenden Lösung,
            die im Alltag trägt.
          </p>
          <div className="hero-actions">
            <Button href="#expertise" variant="primary">
              Unsere Expertise
            </Button>
            <Button href="#ueber-uns" variant="ghost">
              Über uns
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Bewegte Inhalte müssen sich anhalten lassen (WCAG 2.2.2) */}
      {video.enabled && (
        <button
          type="button"
          className="hero-video-toggle"
          onClick={video.toggle}
          aria-label={video.playing ? "Hintergrundvideo anhalten" : "Hintergrundvideo abspielen"}
        >
          <span aria-hidden="true">{video.playing ? "❚❚" : "▶"}</span>
        </button>
      )}
    </section>
  )
}
