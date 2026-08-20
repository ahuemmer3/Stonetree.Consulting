import Reveal from "../ui/Reveal"
import SectionHead from "./SectionHead"
import type { PillarBlock, PillarSituation } from "../../data/pillars"

// Abschnitt "Ausgangslage": vier typische Situationen, in denen Unternehmen
// auf uns zukommen. Zweispaltig, ohne Bilder, damit der Text trägt.
export default function Situations({
  block,
}: {
  block: PillarBlock<PillarSituation>
}) {
  return (
    <section className="section-pad situations">
      <div className="wrap">
        <SectionHead
          eyebrow={block.eyebrow}
          title={block.title}
          intro={block.intro}
        />

        <div className="situation-grid">
          {block.items.map((item, index) => (
            <Reveal className="situation" delay={index % 2} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
