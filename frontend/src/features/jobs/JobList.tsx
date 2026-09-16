import { site } from "../../data/site"
import { useJobFilter } from "./useJobFilter"
import type { JobFilterFeld } from "./useJobFilter"

// Stellenliste mit drei Auswahlfeldern. Die Filterung läuft im Browser,
// die Treffer stehen als Zeilen darunter.
const FELDER: { feld: JobFilterFeld; label: string }[] = [
  { feld: "bereich", label: "Bereich" },
  { feld: "standort", label: "Standort" },
  { feld: "art", label: "Art der Stelle" },
]

export default function JobList() {
  const { filter, treffer, setzeFeld, zuruecksetzen, istGefiltert, optionen } =
    useJobFilter()

  return (
    <div>
      <div className="job-filters">
        {FELDER.map(({ feld, label }) => (
          <div className="job-filter" key={feld}>
            <label htmlFor={`filter-${feld}`}>{label}</label>
            <select
              id={`filter-${feld}`}
              value={filter[feld]}
              onChange={(event) => setzeFeld(feld, event.target.value)}
            >
              <option value="">Alle</option>
              {optionen[feld].map((wert) => (
                <option value={wert} key={wert}>
                  {wert}
                </option>
              ))}
            </select>
          </div>
        ))}
        {istGefiltert && (
          <button type="button" className="btn btn--secondary" onClick={zuruecksetzen}>
            Filter zurücksetzen
          </button>
        )}
      </div>

      <p className="job-count" aria-live="polite">
        {treffer.length === 1
          ? "1 offene Stelle"
          : `${treffer.length} offene Stellen`}
      </p>

      {treffer.length > 0 ? (
        <ul className="job-list">
          {treffer.map((job) => (
            <li className="job-row" key={job.id}>
              <a
                href={`mailto:${site.karriereEmail}?subject=${encodeURIComponent(
                  `Bewerbung: ${job.title}`,
                )}`}
              >
                <span>
                  <span className="job-row__title">{job.title}</span>
                  <span className="job-row__meta">
                    {job.bereich} · {job.standort} · {job.art}
                  </span>
                </span>
                <span className="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="job-empty">
          <p>
            Zu dieser Auswahl gibt es gerade keine Stelle. Das heißt nicht, dass
            wir niemanden suchen.
          </p>
          <p>
            Schreiben Sie uns, was Sie mitbringen und was Sie suchen. Wir melden
            uns auch auf eine Initiativbewerbung.
          </p>
          <p className="job-empty__actions">
            <a
              className="btn btn--primary"
              href={`mailto:${site.karriereEmail}?subject=${encodeURIComponent(
                "Initiativbewerbung",
              )}`}
            >
              Initiativ bewerben
            </a>
            <button type="button" className="btn btn--secondary" onClick={zuruecksetzen}>
              Filter zurücksetzen
            </button>
          </p>
        </div>
      )}
    </div>
  )
}
