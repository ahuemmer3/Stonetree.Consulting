import { useState } from "react"
import { aufwand } from "../../data/aufwand"
import { site } from "../../data/site"
import {
  achsenTextSichtbar,
  balkenPfad,
  berechneGeometrie,
} from "../../features/chart/geometry"
import { useElementWidth } from "../../hooks/useElementWidth"

// Säulendiagramm mit genau einer hervorgehobenen Säule. Alle anderen Werte
// bleiben grau. Jeder Wert ist auch ohne Maus erreichbar: über die Tabelle
// unter dem Diagramm und über den Fokus auf einer Säule.
const HOEHE = 280

export default function AufwandChart() {
  const { ref, breite } = useElementWidth<HTMLDivElement>()
  const [aktiv, setAktiv] = useState<number | null>(null)
  const geo = berechneGeometrie(aufwand.punkte, Math.max(breite, 280), HOEHE)
  const markerX =
    geo.balken[aufwand.marker.nachIndex + 1]?.x ?? geo.plot.links + geo.plot.breite
  const aktiverBalken = aktiv === null ? null : geo.balken[aktiv]

  return (
    <figure className="chart-figure">
      <figcaption>
        <h3 className="chart-title">{aufwand.titel}</h3>
        <p className="chart-subtitle">{aufwand.untertitel}</p>
      </figcaption>

      <div className="chart-plot" ref={ref}>
        <svg
          width="100%"
          height={HOEHE}
          role="group"
          aria-label={`${aufwand.titel}. ${aufwand.untertitel}. Werte in der Tabelle unter dem Diagramm.`}
        >
          {/* Hilfslinien und Beschriftung der Y-Achse */}
          {geo.ticks.map((tick) => (
            <g key={tick.wert}>
              <line
                className="chart-grid"
                x1={geo.plot.links}
                x2={geo.plot.links + geo.plot.breite}
                y1={tick.y}
                y2={tick.y}
              />
              <text
                className="chart-axis-text"
                x={geo.plot.links - 10}
                y={tick.y + 4}
                textAnchor="end"
              >
                {tick.wert}
              </text>
            </g>
          ))}

          {/* Zeitpunkt, ab dem automatisiert wird */}
          <line
            className="chart-marker"
            x1={markerX - 6}
            x2={markerX - 6}
            y1={geo.plot.oben - 8}
            y2={geo.plot.oben + geo.plot.hoehe}
          />
          <text
            className="chart-marker-text"
            x={markerX}
            y={geo.plot.oben - 12}
          >
            {aufwand.marker.label}
          </text>

          {geo.balken.map((balken) => {
            const hervorgehoben = balken.index === aufwand.hervorgehoben
            const zeigeWert = balken.index === 0 || hervorgehoben
            return (
              <g
                key={balken.punkt.label}
                tabIndex={0}
                role="img"
                aria-label={`${balken.punkt.label}: ${balken.punkt.wert} ${aufwand.achseY}`}
                onMouseEnter={() => setAktiv(balken.index)}
                onMouseLeave={() => setAktiv(null)}
                onFocus={() => setAktiv(balken.index)}
                onBlur={() => setAktiv(null)}
              >
                {/* größere, unsichtbare Fläche, damit man sie leicht trifft */}
                <rect
                  className="chart-hit"
                  x={balken.x - 8}
                  y={geo.plot.oben}
                  width={balken.breite + 16}
                  height={geo.plot.hoehe}
                />
                <path
                  className={`chart-bar${hervorgehoben ? " chart-bar--accent" : ""}`}
                  d={balkenPfad(balken)}
                />
                {zeigeWert && (
                  <text
                    className="chart-value-label"
                    x={balken.x + balken.breite / 2}
                    y={balken.y - 8}
                    textAnchor="middle"
                  >
                    {balken.punkt.wert}
                  </text>
                )}
                {achsenTextSichtbar(balken.index, geo.balken.length, geo.plot.breite) && (
                  <text
                    className="chart-axis-text"
                    x={balken.x + balken.breite / 2}
                    y={geo.plot.oben + geo.plot.hoehe + 20}
                    textAnchor="middle"
                  >
                    {balken.punkt.label}
                  </text>
                )}
              </g>
            )
          })}
        </svg>

        {aktiverBalken && (
          <div
            className="chart-tooltip"
            style={{
              left: aktiverBalken.x + aktiverBalken.breite / 2,
              top: aktiverBalken.y - 12,
            }}
          >
            <span className="chart-tooltip__value">
              {aktiverBalken.punkt.wert} {aufwand.achseY}
            </span>
            <span className="chart-tooltip__label">
              {aktiverBalken.punkt.label}
            </span>
          </div>
        )}
      </div>

      <p className="chart-axis-caption">
        {aufwand.achseX} · {aufwand.achseY}
      </p>

      <details className="chart-table">
        <summary>Werte als Tabelle</summary>
        <table>
          <caption className="sr-only">
            {aufwand.titel}, {aufwand.achseY}
          </caption>
          <thead>
            <tr>
              <th scope="col">{aufwand.achseX}</th>
              <th scope="col">{aufwand.achseY}</th>
            </tr>
          </thead>
          <tbody>
            {aufwand.punkte.map((punkt) => (
              <tr key={punkt.label}>
                <th scope="row">{punkt.label}</th>
                <td>{punkt.wert}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>

      <p className="chart-source">
        <span>{aufwand.quelle}</span>
        <span className="chart-brand">{site.brand}</span>
      </p>
    </figure>
  )
}
