import NumberedSteps from "../ui/NumberedSteps"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import type { PillarBlock, PillarPhase } from "../../data/pillars"

// Abschnitt "Vorgehen": die Schritte eines Projekts nebeneinander,
// jeder Schritt mit grober Dauer.
export default function Phases({
  block,
}: {
  block: PillarBlock<PillarPhase>
}) {
  return (
    <Section id="vorgehen">
      <SectionHead
        kicker={block.eyebrow}
        title={block.title}
        intro={block.intro}
      />
      <NumberedSteps
        layout="row"
        items={block.items.map((item) => ({
          n: item.n,
          title: item.title,
          text: item.text,
          meta: item.dauer,
        }))}
      />
    </Section>
  )
}
