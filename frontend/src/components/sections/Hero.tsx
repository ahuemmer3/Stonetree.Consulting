import Button from "../ui/Button"
import Reveal from "../ui/Reveal"

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
    </section>
  )
}
