import Reveal from "../ui/Reveal"
import { leistungen } from "../../data/leistungen"

// Abschnitt "Leistungen": sechs Bausteine auf dunkler Fläche.
// Die Nummern 01 bis 06 zeigen den roten Faden von Strategie bis Umsetzung.
export default function Leistungen() {
  return (
    <section className="section-pad leistungen" id="leistungen">
      <div className="wrap">
        <div className="pub-head">
          <Reveal as="span" className="eyebrow">
            Leistungen
          </Reveal>
          <Reveal as="h2" delay={1}>
            Von der Strategie bis zur Umsetzung
          </Reveal>
          <Reveal as="p" delay={2}>
            Sechs Bausteine, in der Reihenfolge, in der wir arbeiten. Vom Zielbild
            bis zum laufenden Betrieb.
          </Reveal>
        </div>

        <div className="leistungen-grid">
          {leistungen.map((leistung, index) => (
            <Reveal className="leistung" delay={index % 3} key={leistung.n}>
              <div className="leistung-n">{leistung.n}</div>
              <h3>{leistung.title}</h3>
              <p>{leistung.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
