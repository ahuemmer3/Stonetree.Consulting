// Offene Stellen für die Karriereseite. Alle Stellen sind fiktiv (Prototyp).
// Die Auswahlfelder im Filter werden aus diesen Listen gebaut. Neue Werte also
// hier in den Typ und in die Liste eintragen, dann erscheinen sie im Filter.
export const jobBereiche = ["Consulting", "KI-Automatisierung", "Research Lab"] as const
export const jobStandorte = ["Hof", "Nürnberg", "München", "Remote"] as const
export const jobArten = [
  "Praktikum",
  "Werkstudium",
  "Abschlussarbeit",
  "Berufseinstieg",
  "Berufserfahren",
] as const

export type JobBereich = (typeof jobBereiche)[number]
export type JobStandort = (typeof jobStandorte)[number]
export type JobArt = (typeof jobArten)[number]

export interface Job {
  id: string
  title: string
  bereich: JobBereich
  standort: JobStandort
  art: JobArt
}

export const jobs: Job[] = [
  {
    id: "consultant-strategie",
    title: "Consultant Strategie und Transformation (m/w/d)",
    bereich: "Consulting",
    standort: "Nürnberg",
    art: "Berufserfahren",
  },
  {
    id: "junior-consultant",
    title: "Junior Consultant Mittelstand (m/w/d)",
    bereich: "Consulting",
    standort: "Hof",
    art: "Berufseinstieg",
  },
  {
    id: "praktikum-consulting",
    title: "Praktikum Consulting (m/w/d)",
    bereich: "Consulting",
    standort: "München",
    art: "Praktikum",
  },
  {
    id: "ki-engineer",
    title: "KI-Engineer Automatisierung (m/w/d)",
    bereich: "KI-Automatisierung",
    standort: "Nürnberg",
    art: "Berufserfahren",
  },
  {
    id: "junior-data-engineer",
    title: "Junior Data Engineer (m/w/d)",
    bereich: "KI-Automatisierung",
    standort: "Remote",
    art: "Berufseinstieg",
  },
  {
    id: "werkstudium-automatisierung",
    title: "Werkstudium KI-Automatisierung (m/w/d)",
    bereich: "KI-Automatisierung",
    standort: "Hof",
    art: "Werkstudium",
  },
  {
    id: "research-associate",
    title: "Research Associate Angewandte KI (m/w/d)",
    bereich: "Research Lab",
    standort: "Hof",
    art: "Berufseinstieg",
  },
  {
    id: "abschlussarbeit-research",
    title: "Bachelor- oder Masterarbeit im Research Lab",
    bereich: "Research Lab",
    standort: "Hof",
    art: "Abschlussarbeit",
  },
]
