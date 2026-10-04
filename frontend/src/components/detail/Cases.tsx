import Card from "../ui/Card"
import CardGrid from "../ui/CardGrid"
import CardMetric from "../ui/CardMetric"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import type { PillarBlock, PillarCase } from "../../data/pillars"

// Abschnitt "Projektbeispiele": je Fall eine Kennzahl, ein Satz zum Ergebnis
// und aufklappbar Ausgangslage, Vorgehen und Umfang.
export default function Cases({ block }: { block: PillarBlock<PillarCase> }) {
  return (
    <Section id="projekte" tone="muted">
      <SectionHead
        kicker={block.eyebrow}
        title={block.title}
        intro={block.intro}
        split
      />
      <CardGrid columns={3}>
        {block.items.map((fall, index) => (
          <Card
            key={fall.title}
            kicker={fall.kicker}
            title={fall.title}
            text={fall.text}
            clampText={false}
            revealDelay={index % 3}
            highlight={<CardMetric {...fall.kennzahl} />}
          >
            <details className="card__details">
              <summary>Ausgangslage und Vorgehen</summary>
              <h4>Ausgangslage</h4>
              <p>{fall.ausgangslage}</p>
              <h4>Vorgehen</h4>
              <p>{fall.vorgehen}</p>
              <h4>Umfang</h4>
              <p>{fall.umfang}</p>
            </details>
          </Card>
        ))}
      </CardGrid>
      <p className="note">
        Beispiele anonymisiert. Unternehmen und Kennzahlen sind Platzhalter für
        den Prototyp.
      </p>
    </Section>
  )
}
