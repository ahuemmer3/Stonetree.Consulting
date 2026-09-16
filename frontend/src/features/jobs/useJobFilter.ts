import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { jobArten, jobBereiche, jobStandorte, jobs } from "../../data/jobs"
import type { Job } from "../../data/jobs"

// Filterlogik der Stellenliste. Der Filter steht in der Adresse, damit ein
// Link direkt auf eine Auswahl zeigen kann (z. B. /karriere?art=Praktikum).

export interface JobFilter {
  bereich: string
  standort: string
  art: string
}

export type JobFilterFeld = keyof JobFilter

export function filtereJobs(alle: Job[], filter: JobFilter): Job[] {
  return alle.filter(
    (job) =>
      (!filter.bereich || job.bereich === filter.bereich) &&
      (!filter.standort || job.standort === filter.standort) &&
      (!filter.art || job.art === filter.art),
  )
}

// Nur bekannte Werte übernehmen, damit eine erfundene Adresse nichts kaputt macht
function erlaubterWert(wert: string | null, werte: readonly string[]): string {
  return wert && werte.includes(wert) ? wert : ""
}

export function useJobFilter() {
  const [params, setParams] = useSearchParams()

  const filter: JobFilter = {
    bereich: erlaubterWert(params.get("bereich"), jobBereiche),
    standort: erlaubterWert(params.get("standort"), jobStandorte),
    art: erlaubterWert(params.get("art"), jobArten),
  }

  const treffer = useMemo(
    () => filtereJobs(jobs, filter),
    [filter.bereich, filter.standort, filter.art],
  )

  function setzeFeld(feld: JobFilterFeld, wert: string) {
    const naechste = new URLSearchParams(params)
    if (wert) naechste.set(feld, wert)
    else naechste.delete(feld)
    // preventScrollReset: die Seite soll beim Filtern nicht springen
    setParams(naechste, { replace: true, preventScrollReset: true })
  }

  function zuruecksetzen() {
    setParams(new URLSearchParams(), { replace: true, preventScrollReset: true })
  }

  const istGefiltert = Boolean(filter.bereich || filter.standort || filter.art)

  return {
    filter,
    treffer,
    setzeFeld,
    zuruecksetzen,
    istGefiltert,
    optionen: {
      bereich: jobBereiche,
      standort: jobStandorte,
      art: jobArten,
    },
  }
}
