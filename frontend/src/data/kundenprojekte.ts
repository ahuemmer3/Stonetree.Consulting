// Anonymisierte Fallbeispiele. Zahlen sind fiktiv und exemplarisch
// (Hinweis dazu steht in der Sektion selbst).
export interface Kundenprojekt {
  id: string
  branche: string
  groesse: string
  ausgangslage: string
  vorgehen: string
  ergebnis: string
  laufzeit: string
  bausteine: string[]
}

export const kundenprojekte: Kundenprojekt[] = [
  {
    id: "automotive-reklamation",
    branche: "Automotive-Zulieferer",
    groesse: "rund 180 Mitarbeitende",
    ausgangslage:
      "Reklamationen liefen über Papier und Excel. Vorgänge blieben liegen, der Status war für niemanden auf einen Blick sichtbar, und dieselben Daten wurden mehrfach erfasst.",
    vorgehen:
      "Wir haben den Reklamationsprozess aufgenommen und auf einen durchgängigen digitalen Ablauf umgestellt. Eine automatische Vorprüfung sortiert einfache Fälle vor, der Rest geht strukturiert an die richtige Stelle.",
    ergebnis:
      "Die Durchlaufzeit je Reklamation sank von rund zwölf auf vier Tage. Doppelte Dateneingaben entfielen, die Fehlerquote in der Erfassung ging deutlich zurück.",
    laufzeit: "4 Monate",
    bausteine: ["Prozessoptimierung", "Automatisierung"],
  },
  {
    id: "banking-reporting",
    branche: "Regionalbank",
    groesse: "rund 320 Mitarbeitende",
    ausgangslage:
      "Ein monatliches Reporting wurde von Hand aus mehreren Quellen zusammengetragen. Das kostete zwei Arbeitstage und war anfällig für Übertragungsfehler.",
    vorgehen:
      "Wir haben Datenaufbereitung und Prüfschritte zusammengeführt und die wiederkehrende Strecke automatisiert. Die Fachleute prüfen jetzt Ergebnisse, statt Daten zu kopieren.",
    ergebnis:
      "Der Aufwand je Berichtszyklus fiel von zwei Tagen auf rund zwei Stunden. Die Zahlen sind früher verfügbar und besser nachvollziehbar.",
    laufzeit: "3 Monate",
    bausteine: ["Automatisierung", "Umsetzungsfahrplan"],
  },
  {
    id: "public-antrag",
    branche: "Kommunale Verwaltung",
    groesse: "rund 90 Mitarbeitende im Fachbereich",
    ausgangslage:
      "Eine Antragsstrecke lief überwiegend auf Papier. Antragstellende wussten nicht, wie weit ihr Vorgang war, und die Bearbeitung war schwer planbar.",
    vorgehen:
      "Wir haben die Antragsstrecke digitalisiert und den Bearbeitungsstatus für Antragstellende sichtbar gemacht. Barrierefreiheit war von Anfang an Teil der Lösung.",
    ergebnis:
      "Rückfragen zum Bearbeitungsstand gingen spürbar zurück, die durchschnittliche Bearbeitungszeit wurde kürzer und besser vorhersehbar.",
    laufzeit: "6 Monate",
    bausteine: ["Digitalisierungsstrategie", "Prozessoptimierung"],
  },
]
