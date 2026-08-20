import Reveal from "../ui/Reveal"
import SectionHead from "./SectionHead"
import type { PillarBlock, PillarFormat } from "../../data/pillars"

// Abschnitt "Einstieg": drei Formate mit Dauer und Leistungsumfang,
// vom kurzen Gespräch bis zum vollen Projekt.
export default function Formats({
  block,
}: {
  block: PillarBlock<PillarFormat>
}) {
  return (
    <section className="section-pad formats">
      <div className="wrap">
        <SectionHead
          eyebrow={block.eyebrow}
          title={block.title}
          intro={block.intro}
        />

        <div className="format-grid">
          {block.items.map((item, index) => (
            <Reveal className="format" delay={index} key={item.title}>
              <span className="format-dauer">{item.dauer}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul className="format-list">
                {item.enthalten.map((eintrag) => (
                  <li key={eintrag}>{eintrag}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
