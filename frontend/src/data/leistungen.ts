// Leistungsbausteine, bewusst in der Reihenfolge von Strategie bis Umsetzung.
export interface Leistung {
  n: string
  title: string
  text: string
}

export const leistungen: Leistung[] = [
  {
    n: "01",
    title: "Digitalisierungsstrategie",
    text: "Standortbestimmung, Zielbild und eine Priorisierung nach Nutzen und Aufwand. So wird klar, was zuerst kommt.",
  },
  {
    n: "02",
    title: "Umsetzungsfahrplan",
    text: "Eine Roadmap mit Paketen, Reihenfolge, Verantwortlichkeiten und Meilensteinen. Aus dem Zielbild wird ein Plan.",
  },
  {
    n: "03",
    title: "Automatisierung",
    text: "Prozesse end-to-end automatisieren, statt punktuell Werkzeuge einzuführen. Der ganze Ablauf zählt, nicht das einzelne Tool.",
  },
  {
    n: "04",
    title: "Prozessoptimierung",
    text: "Durchlaufzeiten, Wartezeiten, Doppelarbeit und Fehlerquellen reduzieren. Wir setzen dort an, wo es wirklich klemmt.",
  },
  {
    n: "05",
    title: "Organisation",
    text: "Rollen, Schnittstellen und Zusammenarbeit an die neuen Abläufe anpassen. Technik allein trägt nicht.",
  },
  {
    n: "06",
    title: "Target Operating Model",
    text: "Ein Zielbild für Struktur, Prozesse, Steuerung und Technologie, das sich auch wirklich betreiben lässt.",
  },
]
