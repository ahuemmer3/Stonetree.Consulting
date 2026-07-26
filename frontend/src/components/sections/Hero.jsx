import Button from "../ui/Button.jsx"
import Reveal from "../ui/Reveal.jsx"

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Platzhalter fuer ein echtes Hintergrundbild (siehe index.css: .hero-media) */}
      <div className="hero-media" aria-hidden="true" />

      <div className="wrap hero-wrap">
        <Reveal className="hero-card" immediate>
          <span className="eyebrow">
            Beratung für Strategie &amp; Künstliche Intelligenz
          </span>
          <h1>
            Klare Strategien.
            <br />
            Intelligente Systeme.
            <br />
            <em>Echte Forschung.</em>
          </h1>
          <p className="hero-sub">
            Wir arbeiten an der Schnittstelle von Geschäftsstrategie,
            KI-Automatisierung und angewandter Forschung – für Unternehmen, die
            vorausgehen wollen.
          </p>
          <div className="hero-actions">
            <Button href="#bereiche" variant="primary">
              Unsere Bereiche
            </Button>
            <Button href="#ansatz" variant="ghost">
              Wie wir arbeiten
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
