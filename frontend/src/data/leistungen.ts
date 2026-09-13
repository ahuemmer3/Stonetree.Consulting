// Leistungsbausteine, bewusst in der Reihenfolge von Strategie bis Umsetzung.
export interface Leistung {
  n: string
  title: string
  text: string
}

export const leistungen: Leistung[] = [
  {
    n: "01",
    title: "Strategie und Management",
    text: "Standortbestimmung, Zielbild und Steuerung. Wir klären, wohin das Unternehmen will, und schaffen die Grundlage, um den Weg dorthin zu führen.",
  },
  {
    n: "02",
    title: "KI-Automatisierung",
    text: "Abläufe end-to-end automatisieren, mit KI dort, wo sie messbar Nutzen bringt. Der ganze Prozess zählt, nicht das einzelne Tool.",
  },
  {
    n: "03",
    title: "Target Operating Model",
    text: "Ein Zielbild für Struktur, Prozesse, Steuerung und Technologie, das sich im Alltag auch wirklich betreiben lässt.",
  },
  {
    n: "04",
    title: "Umsetzungsfahrplan",
    text: "Eine Roadmap mit Paketen, Reihenfolge, Verantwortlichkeiten und Meilensteinen. Aus dem Zielbild wird ein Plan.",
  },
  {
    n: "05",
    title: "Umsetzungsbegleitung",
    text: "Wir bleiben in der Umsetzung dabei, bereiten Entscheidungen vor und steuern nach, bis die neuen Abläufe im Alltag tragen.",
  },
  {
    n: "06",
    title: "Nachhaltigkeit",
    text: "Nachhaltigkeit als Teil der Strategie statt als Pflichtbericht. Wirkung messen, Berichtspflichten effizient erfüllen und dort ansetzen, wo es sich auch wirtschaftlich rechnet.",
  },
]
