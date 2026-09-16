import Card from "../ui/Card"
import CardGrid from "../ui/CardGrid"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import type { PillarBlock, PillarFormat } from "../../data/pillars"

// Abschnitt "Einstieg": Formate mit Dauer und Leistungsumfang,
// vom kurzen Gespräch bis zum vollen Projekt.
export default function Formats({
  block,
}: {
  block: PillarBlock<PillarFormat>
}) {
  return (
    <Section id="einstieg" tone="muted">
      <SectionHead
        kicker={block.eyebrow}
        title={block.title}
        intro={block.intro}
      />
      <CardGrid columns={3}>
        {block.items.map((item, index) => (
          <Card
            key={item.title}
            kicker={item.dauer}
            title={item.title}
            text={item.text}
            revealDelay={index % 3}
          >
            <ul className="card__list">
              {item.enthalten.map((eintrag) => (
                <li key={eintrag}>{eintrag}</li>
              ))}
            </ul>
          </Card>
        ))}
      </CardGrid>
    </Section>
  )
}
