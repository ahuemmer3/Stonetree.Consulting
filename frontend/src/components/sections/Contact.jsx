import Reveal from "../ui/Reveal.jsx"
import ContactForm from "../../features/contact/ContactForm.jsx"

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
          Ob Strategie, Automatisierung oder eine Frage aus der Forschung:
          Erzählen Sie uns kurz, worum es geht. Ein erstes Gespräch ist
          unverbindlich – wir melden uns zeitnah zurück.
        </Reveal>

        <Reveal delay={3} className="contact-form-wrap">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
