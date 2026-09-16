import Reveal from "../ui/Reveal"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"

// Häufige Fragen als Akkordeon über das native details-Element.
// Kein zusätzliches JavaScript, funktioniert mit Tastatur und Vorlesesoftware.
export interface FaqItem {
  frage: string
  antwort: string
}

interface FaqProps {
  kicker: string
  title: string
  intro?: string
  items: FaqItem[]
  id?: string
  tone?: "default" | "muted"
}

export default function Faq({
  kicker,
  title,
  intro,
  items,
  id = "fragen",
  tone = "default",
}: FaqProps) {
  return (
    <Section id={id} tone={tone}>
      <SectionHead kicker={kicker} title={title} intro={intro} />
      <div className="faq-list">
        {items.map((item, index) => (
          <Reveal
            as="details"
            className="faq-item"
            delay={index % 3}
            key={item.frage}
          >
            <summary>{item.frage}</summary>
            <p>{item.antwort}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
