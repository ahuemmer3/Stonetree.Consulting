import Reveal from "../ui/Reveal"
import SectionHead from "./SectionHead"
import type { PillarBlock, PillarOffering } from "../../data/pillars"

// Abschnitt "Leistungsbausteine": sechs nummerierte Bausteine auf dunkler
// Fläche, jeder mit dem Ergebnis, das am Ende beim Auftraggeber bleibt.
export default function Offerings({
  block,
}: {
  block: PillarBlock<PillarOffering>
}) {
  return (
    <section className="section-pad offerings">
      <div className="wrap">
        <SectionHead
          eyebrow={block.eyebrow}
          title={block.title}
          intro={block.intro}
        />

        <div className="offering-grid">
          {block.items.map((item, index) => (
            <Reveal className="offering" delay={index % 3} key={item.n}>
              <div className="offering-n">{item.n}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <p className="offering-ergebnis">
                <span>Ergebnis</span>
                {item.ergebnis}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
