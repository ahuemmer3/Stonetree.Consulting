import Button from "../ui/Button.jsx"
import Reveal from "../ui/Reveal.jsx"

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Grosses Foto mit dunkler Abdunklung, damit die weisse Schrift lesbar
          bleibt. Bild austauschen: public/images/hero.jpg ersetzen. */}
      <div className="hero-media" aria-hidden="true">
        <img className="hero-img" src="/images/hero.jpg" alt="" />
      </div>

      <div className="wrap hero-wrap">
        <Reveal className="hero-card" immediate>
          <span className="eyebrow">
            Beratung, KI-Automatisierung &amp; Forschung
          </span>
          <h1>
            Klare Strategien.
            <br />
            Intelligente Prozesse.
            <br />
            <em>Echte Forschung.</em>
          </h1>
          <p className="hero-sub">
            Wir begleiten mittelständische Unternehmen an der Schnittstelle von
            Beratung, KI-Automatisierung und angewandter Forschung – mit
            Lösungen, die im Alltag tragen.
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
    </section>
  )
}
