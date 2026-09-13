import Button from "../ui/Button"
import Reveal from "../ui/Reveal"
import { useBackgroundVideo } from "../../features/hero-video/useBackgroundVideo"

// Hintergrund: stummes Video in Dauerschleife, darunter das Foto als
// Vorschaubild und Rückfall. Video austauschen: public/videos/hero.mp4
// ersetzen, Foto: public/images/hero.jpg.
export default function Hero() {
  const { enabled, videoRef, playing, toggle, onError } = useBackgroundVideo()

  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        {enabled ? (
          <video
            ref={videoRef}
            className="hero-video"
            poster="/images/hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={onError}
          >
            <source src="/videos/hero.mp4" type="video/mp4" onError={onError} />
          </video>
        ) : (
          <img className="hero-img" src="/images/hero.jpg" alt="" />
        )}
      </div>

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
      {enabled && (
        <button
          type="button"
          className="hero-video-toggle"
          onClick={toggle}
          aria-label={playing ? "Hintergrundvideo anhalten" : "Hintergrundvideo abspielen"}
        >
          <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
        </button>
      )}
    </section>
  )
}
