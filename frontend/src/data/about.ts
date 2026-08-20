// Inhalte des Abschnitts "Über uns".
// Die drei Punkte "Wie wir arbeiten" stehen in approach.js.
export interface AboutFact {
  n: string
  l: string
}

export interface About {
  title: string
  intro: string[]
  facts: AboutFact[]
}

export const about: About = {
  title: "Consulting, das versteht, bevor es handelt.",
  intro: [
    "stonetree ist mehr als reines Consulting. Wir betreiben eigene angewandte Forschung und bringen die Ergebnisse direkt in Kundenprojekte, vor allem im Mittelstand, dort, wo Entscheidungen schnell fallen und unmittelbar wirken.",
    "Unser Anspruch ist einfach: Ergebnisse, die sich messen lassen, nicht Folien, die gut aussehen. Aus einem kleinen, erfahrenen Team heraus arbeiten wir eng mit unseren Kundinnen und Kunden zusammen: kurze Wege, klare Sprache und ein Vorgehen, das das Geschäft in den Mittelpunkt stellt.",
    "Unser Alleinstellungsmerkmal ist das eigene Research Lab. Dort erproben wir neue Methoden und KI-Verfahren zuerst selbst. Nur was sich bewährt, bringen wir in Kundenprojekte. So bleiben unsere Empfehlungen aktuell und praxiserprobt, statt nur dem nächsten Trend zu folgen.",
  ],
  facts: [
    { n: "2026", l: "Gegründet" },
    { n: "3", l: "Kernbereiche" },
    { n: "Mittelstand", l: "Im Fokus" },
    { n: "Hands-on", l: "Arbeitsweise" },
  ],
}
