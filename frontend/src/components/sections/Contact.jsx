import Reveal from "../ui/Reveal.jsx"

export default function Contact() {
  return (
    <section className="section-pad contact" id="kontakt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Kontakt
        </Reveal>
        <Reveal as="h2" delay={1}>
          Sprechen wir über Ihr Vorhaben.
        </Reveal>
        <Reveal as="p" delay={2}>
          Egal ob Strategie, Automatisierung oder ein Thema aus der Forschung.
          Schreiben Sie uns, wir melden uns zurück.
        </Reveal>
        <Reveal as="a" href="#kontakt" delay={3} className="btn-primary">
          Nachricht schreiben
        </Reveal>
      </div>
    </section>
  )
}
