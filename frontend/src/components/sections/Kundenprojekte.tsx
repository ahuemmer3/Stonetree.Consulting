import AufwandChart from "../charts/AufwandChart"
import Card from "../ui/Card"
import CardGrid from "../ui/CardGrid"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import { kundenprojekte } from "../../data/kundenprojekte"

// Drei anonymisierte Fälle. Das Ergebnis steht als Kennzahl über dem Text,
// Ausgangslage und Vorgehen lassen sich aufklappen.
export default function Kundenprojekte() {
  return (
    <Section id="kundenprojekte">
      <SectionHead
        kicker="Kundenprojekte"
        title="Was dabei herauskommt"
        intro="Drei Beispiele aus der Arbeit, anonymisiert. Sie zeigen, wie aus einer Ausgangslage eine laufende Lösung wird."
        split
      />

      <CardGrid columns={3}>
        {kundenprojekte.map((fall, index) => (
          <Card
            key={fall.id}
            kicker={fall.bausteine.join(" · ")}
            title={fall.branche}
            text={fall.ergebnis}
            revealDelay={index % 3}
            stretchLink={false}
            link={{
              label: `Zum Bereich ${fall.bereichTitel}`,
              to: `/bereiche/${fall.bereichSlug}`,
            }}
            highlight={
              <p className="card__metric">
                <span className="card__metric-value">{fall.kennzahl.wert}</span>
                <span className="card__metric-label">{fall.kennzahl.label}</span>
              </p>
            }
          >
            <details className="card__details">
              <summary>Ausgangslage und Vorgehen</summary>
              <h4>Ausgangslage</h4>
              <p>{fall.ausgangslage}</p>
              <h4>Vorgehen</h4>
              <p>{fall.vorgehen}</p>
              <h4>Umfang</h4>
              <p>
                {fall.groesse}, Laufzeit {fall.laufzeit}
              </p>
            </details>
          </Card>
        ))}
      </CardGrid>

      <p className="note">
        Beispiele anonymisiert und vereinfacht dargestellt. Die Kennzahlen sind
        Platzhalter für den Prototyp.
      </p>

      <AufwandChart />
    </Section>
  )
}
