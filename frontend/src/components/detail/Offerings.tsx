import NumberedSteps from "../ui/NumberedSteps"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import type { PillarBlock, PillarOffering } from "../../data/pillars"

// Abschnitt "Leistungsbausteine": nummerierte Bausteine, jeder mit dem
// Ergebnis, das am Ende beim Auftraggeber bleibt.
export default function Offerings({
  block,
}: {
  block: PillarBlock<PillarOffering>
}) {
  return (
    <Section id="leistungsbausteine">
      <SectionHead
        kicker={block.eyebrow}
        title={block.title}
        intro={block.intro}
      />
      <NumberedSteps
        items={block.items.map((item) => ({
          n: item.n,
          title: item.title,
          text: item.text,
          extra: (
            <p className="step__result">
              <span>Ergebnis</span>
              {item.ergebnis}
            </p>
          ),
        }))}
      />
    </Section>
  )
}
