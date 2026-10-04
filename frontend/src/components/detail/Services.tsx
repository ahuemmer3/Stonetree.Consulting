import { useEffect, useRef } from "react"
import Card from "../ui/Card"
import CardGrid from "../ui/CardGrid"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import { panelId, tabId, useTabs } from "../../features/tabs/useTabs"
import type { PillarBlock, PillarField, PillarService } from "../../data/pillars"

// Abschnitt "Leistungen": Leistungsfelder als Reiter, je Feld kompakte Karten
// mit einem Satz, Schlagworten und optionalen Eckdaten. Statt Fließtext soll
// man auf einen Blick sehen, was konkret angeboten wird.
export default function Services({ block }: { block: PillarBlock<PillarField> }) {
  const ids = block.items.map((feld) => feld.id)
  const { aktiv, waehle, handleKeyDown } = useTabs(ids, "feld")
  const feld = block.items.find((f) => f.id === aktiv) ?? block.items[0]
  const leiste = useRef<HTMLDivElement>(null)

  // Am Handy ist die Reiterleiste breiter als der Bildschirm. Den aktiven
  // Reiter waagerecht ins Bild holen, ohne die Seite senkrecht zu verschieben.
  useEffect(() => {
    const tab = document.getElementById(tabId(aktiv))
    const box = leiste.current
    if (!tab || !box) return
    const t = tab.getBoundingClientRect()
    const b = box.getBoundingClientRect()
    if (t.left < b.left || t.right > b.right) {
      box.scrollLeft += t.left + t.width / 2 - (b.left + b.width / 2)
    }
  }, [aktiv])

  return (
    <Section id="leistungen">
      <SectionHead kicker={block.eyebrow} title={block.title} intro={block.intro} />

      <div className="tabs" role="tablist" aria-label={block.title} ref={leiste}>
        {block.items.map((f) => {
          const ausgewaehlt = f.id === aktiv
          return (
            <button
              key={f.id}
              id={tabId(f.id)}
              type="button"
              role="tab"
              className="tabs__tab"
              aria-selected={ausgewaehlt}
              aria-controls={panelId(f.id)}
              // Nur der aktive Reiter ist per Tab-Taste erreichbar, der Rest per Pfeiltasten
              tabIndex={ausgewaehlt ? 0 : -1}
              onClick={() => waehle(f.id)}
              onKeyDown={handleKeyDown}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      <div
        className="tabs__panel"
        id={panelId(feld.id)}
        role="tabpanel"
        aria-labelledby={tabId(feld.id)}
      >
        <p className="tabs__intro">{feld.intro}</p>
        <CardGrid columns={3}>
          {feld.items.map((leistung, index) => (
            <ServiceCard key={leistung.title} leistung={leistung} index={index} />
          ))}
        </CardGrid>
      </div>
    </Section>
  )
}

function ServiceCard({ leistung, index }: { leistung: PillarService; index: number }) {
  return (
    <Card
      kicker={leistung.kicker}
      title={leistung.title}
      text={leistung.text}
      clampText={false}
      revealDelay={index % 3}
      highlight={
        leistung.status && (
          <span className={`status status--${leistung.status}`}>{leistung.status}</span>
        )
      }
    >
      {leistung.eckdaten && (
        <dl className="service-facts">
          {leistung.eckdaten.map((eintrag) => (
            <div key={eintrag.label}>
              <dt>{eintrag.label}</dt>
              <dd>{eintrag.wert}</dd>
            </div>
          ))}
        </dl>
      )}
      <ul className="chips" aria-label="Themen">
        {leistung.themen.map((thema) => (
          <li className="chip" key={thema}>
            {thema}
          </li>
        ))}
      </ul>
    </Card>
  )
}
