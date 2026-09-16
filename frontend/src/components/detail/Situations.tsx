import PointGrid from "../ui/PointGrid"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import type { PillarBlock, PillarSituation } from "../../data/pillars"

// Abschnitt "Ausgangslage": typische Situationen, in denen Unternehmen auf
// uns zukommen. Zweispaltig, ohne Bilder, damit der Text trägt.
export default function Situations({
  block,
}: {
  block: PillarBlock<PillarSituation>
}) {
  return (
    <Section id="ausgangslage" tone="muted">
      <SectionHead
        kicker={block.eyebrow}
        title={block.title}
        intro={block.intro}
      />
      <PointGrid items={block.items} columns={2} />
    </Section>
  )
}
