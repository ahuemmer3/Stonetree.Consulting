import Reveal from "../ui/Reveal"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import ContactForm from "../../features/contact/ContactForm"
import { site } from "../../data/site"

// Kontakt: links die Ansprache, rechts das Formular. Helle Fläche, weiße
// Felder. Der Senden-Button ist der primäre Button dieser Ansicht.
export default function Contact({
  tone = "muted",
}: {
  tone?: "default" | "muted"
}) {
  return (
    <Section id="kontakt" tone={tone}>
      <div className="contact-layout">
        <div>
          <SectionHead
            kicker="Kontakt"
            title="Sprechen wir über Ihr Vorhaben."
            intro="Ob Strategie, Automatisierung oder eine Frage aus dem Research Lab: Erzählen Sie uns kurz, worum es geht. Ein erstes Gespräch ist unverbindlich, wir melden uns zeitnah zurück."
          />
          <p className="contact-direct">
            Lieber direkt schreiben?{" "}
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          </p>
        </div>

        <Reveal className="contact-form-wrap" delay={1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
