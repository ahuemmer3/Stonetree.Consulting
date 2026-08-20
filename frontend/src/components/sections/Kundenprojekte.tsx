import Reveal from "../ui/Reveal"
import { kundenprojekte } from "../../data/kundenprojekte"

// Abschnitt "Kundenprojekte": drei anonymisierte Fälle, jeweils gleich
// aufgebaut (Ausgangslage, Vorgehen, Ergebnis, Laufzeit, Bausteine).
export default function Kundenprojekte() {
  return (
    <section className="section-pad kundenprojekte" id="kundenprojekte">
      <div className="wrap">
        <div className="pillars-intro">
          <div>
            <Reveal as="span" className="eyebrow">
              Kundenprojekte
            </Reveal>
            <Reveal as="h2" delay={1}>
              Was dabei herauskommt
            </Reveal>
          </div>
          <Reveal as="p" delay={2}>
            Drei Beispiele aus der Arbeit, anonymisiert. Sie zeigen, wie aus einer
            Ausgangslage eine laufende Lösung wird.
          </Reveal>
        </div>

        <div className="cases">
          {kundenprojekte.map((fall, index) => (
            <Reveal className="case" delay={index % 3} key={fall.id}>
              <div className="case-head">
                <h3>{fall.branche}</h3>
                <span className="case-size">{fall.groesse}</span>
              </div>
              <div className="case-body">
                <div className="case-block">
                  <span className="case-k">Ausgangslage</span>
                  <p>{fall.ausgangslage}</p>
                </div>
                <div className="case-block">
                  <span className="case-k">Vorgehen</span>
                  <p>{fall.vorgehen}</p>
                </div>
                <div className="case-block">
                  <span className="case-k">Ergebnis</span>
                  <p>{fall.ergebnis}</p>
                </div>
              </div>
              <div className="case-foot">
                <span className="case-laufzeit">Laufzeit: {fall.laufzeit}</span>
                <div className="case-tags">
                  {fall.bausteine.map((baustein) => (
                    <span className="case-tag" key={baustein}>
                      {baustein}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="cases-note">
          Beispiele anonymisiert, Kennzahlen exemplarisch.
        </p>
      </div>
    </section>
  )
}
