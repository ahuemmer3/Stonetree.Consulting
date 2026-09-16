import NumberedSteps from "../ui/NumberedSteps"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import { leistungen } from "../../data/leistungen"

// Sechs Bausteine in der Reihenfolge, in der wir arbeiten.
export default function Leistungen() {
  return (
    <Section id="leistungen" tone="muted">
      <SectionHead
        kicker="Leistungen"
        title="Von der Strategie bis zur Umsetzung"
        intro="Sechs Bausteine, in der Reihenfolge, in der wir arbeiten. Vom Zielbild bis zum laufenden Betrieb."
      />
      <NumberedSteps items={leistungen} />
    </Section>
  )
}
