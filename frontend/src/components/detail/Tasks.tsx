import Reveal from "../ui/Reveal"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"

// Abschnitt "Typische Aufgaben": kurze Stichpunkte, was wir in diesem
// Bereich tatsächlich tun. Bewusst knapp, als Ergänzung zu den Bausteinen.
export default function Tasks({ items }: { items: string[] }) {
  if (items.length === 0) return null

  return (
    <Section id="aufgaben" tone="muted">
      <SectionHead
        kicker="Typische Aufgaben"
        title="Was wir in diesem Bereich tun"
      />
      <Reveal as="ul" className="tasks-list">
        {items.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </Reveal>
    </Section>
  )
}
