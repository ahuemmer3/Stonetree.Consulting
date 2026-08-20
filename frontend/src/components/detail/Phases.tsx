import Reveal from "../ui/Reveal"
import SectionHead from "./SectionHead"
import type { PillarBlock, PillarPhase } from "../../data/pillars"

// Abschnitt "Vorgehen": die Schritte eines Projekts als Zeitstrahl,
// jeder Schritt mit grober Dauer.
export default function Phases({
  block,
}: {
  block: PillarBlock<PillarPhase>
}) {
  return (
    <section className="section-pad phases">
      <div className="wrap">
        <SectionHead
          eyebrow={block.eyebrow}
          title={block.title}
          intro={block.intro}
        />

        <ol className="phase-row">
          {block.items.map((item, index) => (
            <Reveal as="li" className="phase" delay={index % 3} key={item.n}>
              <div className="phase-n">{item.n}</div>
              <h3>{item.title}</h3>
              <span className="phase-dauer">{item.dauer}</span>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
