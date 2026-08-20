import Reveal from "../ui/Reveal"
import SectionHead from "./SectionHead"
import type { PillarBlock, PillarFaq } from "../../data/pillars"

// Abschnitt "Häufige Fragen": aufklappbare Fragen über das native
// details-Element. Kein zusätzliches JavaScript, funktioniert auch mit
// Tastatur und Vorlesesoftware.
export default function Faq({ block }: { block: PillarBlock<PillarFaq> }) {
  return (
    <section className="section-pad faq">
      <div className="wrap">
        <SectionHead
          eyebrow={block.eyebrow}
          title={block.title}
          intro={block.intro}
        />

        <div className="faq-list">
          {block.items.map((item, index) => (
            <Reveal as="details" className="faq-item" delay={index % 3} key={item.frage}>
              <summary>{item.frage}</summary>
              <p>{item.antwort}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
