// Die drei Punkte "Wie wir arbeiten" im Abschnitt "Über uns".
export interface ApproachItem {
  k: string
  title: string
  text: string
}

export const approachItems: ApproachItem[] = [
  {
    k: "01 · Verstehen",
    title: "Erst zuhören, dann handeln",
    text: "Wir beginnen mit dem Geschäft, nicht mit der Technik. Bevor wir Lösungen vorschlagen, wollen wir verstehen, woran es wirklich hakt, im Gespräch mit denen, die es täglich betrifft.",
  },
  {
    k: "02 · Bauen",
    title: "Schnell zu etwas Greifbarem",
    text: "Statt langer Konzeptphasen bauen wir früh erste funktionierende Stände. An etwas Sichtbarem lassen sich Entscheidungen besser treffen als an einer Präsentation.",
  },
  {
    k: "03 · Lernen",
    title: "Messen und nachschärfen",
    text: "Was wir umsetzen, prüfen wir an echten Ergebnissen. Was funktioniert, bleibt. Was nicht, wird angepasst, ehrlich und ohne Umwege.",
  },
]
