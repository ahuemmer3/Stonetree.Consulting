// Anonymisierte Fallbeispiele. Inhalte und Kennzahlen sind exemplarisch
// (Hinweis dazu steht in der Sektion selbst).
export interface KundenprojektKennzahl {
  wert: string
  label: string
}

export interface Kundenprojekt {
  id: string
  branche: string
  groesse: string
  ausgangslage: string
  vorgehen: string
  ergebnis: string
  // wichtigste Wirkung als Zahl, damit das Ergebnis nicht im Text untergeht
  kennzahl: KundenprojektKennzahl
  laufzeit: string
  bausteine: string[]
  // Bereich, in den der Fall gehört (für den Link auf der Karte)
  bereichSlug: string
  bereichTitel: string
}

export const kundenprojekte: Kundenprojekt[] = [
  {
    id: "energie-ki-automatisierung",
    branche: "Energieversorger",
    groesse: "Energie und Telekommunikation, regional",
    ausgangslage:
      "Kundenanfragen, Zählerstände und Störungsmeldungen kamen über viele Kanäle herein und wurden von Hand gesichtet, zugeordnet und weitergegeben. Zu Spitzenzeiten stauten sich die Vorgänge.",
    vorgehen:
      "Wir haben die eingehenden Vorgänge analysiert und eine KI-gestützte Vorsortierung aufgebaut. Sie erkennt das Anliegen, liest die relevanten Angaben aus und leitet den Vorgang an das zuständige Team. Unklare Fälle gehen weiterhin an einen Menschen.",
    ergebnis:
      "Standardanfragen landen ohne manuelle Sichtung beim richtigen Team. Die Bearbeitung beginnt früher, und Spitzenzeiten lassen sich besser abfangen.",
    kennzahl: { wert: "70 %", label: "der Anfragen ohne manuelle Sichtung" },
    laufzeit: "bis 6 Monate",
    bausteine: ["KI-Automatisierung"],
    bereichSlug: "ki-automatisierung",
    bereichTitel: "KI-Automatisierung",
  },
  {
    id: "bank-digital-maturity",
    branche: "Regionalbank",
    groesse: "rund 320 Mitarbeitende",
    ausgangslage:
      "Viele Digitalisierungsvorhaben liefen parallel, ohne gemeinsames Bild davon, wo die Bank insgesamt steht und welche Vorhaben tatsächlich Wirkung zeigen.",
    vorgehen:
      "Wir haben den digitalen Reifegrad über Prozesse, Daten, Technologie und Organisation hinweg erhoben und die laufenden Vorhaben nach ihrer Wirkung auf Kosten, Qualität und Kundenerlebnis bewertet.",
    ergebnis:
      "Die Bank hat ein belastbares Reifegradprofil und eine nach Wirkung priorisierte Liste. Vorhaben mit geringem Nutzen wurden gestoppt, die frei gewordenen Mittel gebündelt.",
    kennzahl: { wert: "9 von 34", label: "Vorhaben gestoppt und Mittel gebündelt" },
    laufzeit: "bis 6 Monate",
    bausteine: ["Digital Maturity Assessment", "Impact Assessment"],
    bereichSlug: "consulting",
    bereichTitel: "Consulting",
  },
  {
    id: "kommune-it-automatisierung",
    branche: "Kommunale Verwaltung",
    groesse: "rund 90 Mitarbeitende im Fachbereich",
    ausgangslage:
      "Wiederkehrende IT-Aufgaben wie Zugänge, Anträge und Datenübertragungen liefen von Hand. Die Zuständigkeiten zwischen IT und Fachbereichen waren über Jahre gewachsen und nicht mehr eindeutig.",
    vorgehen:
      "Wir haben die wiederkehrenden IT-Abläufe automatisiert und parallel die Organisation neu geordnet: klare Rollen, feste Schnittstellen zwischen IT und Fachbereichen und eine Anlaufstelle für Anfragen.",
    ergebnis:
      "Standardaufgaben laufen ohne Handarbeit durch, Anfragen landen direkt bei der richtigen Stelle. Die IT gewinnt Zeit für Vorhaben statt für Routine.",
    kennzahl: { wert: "45 %", label: "weniger Zeit für Routineaufgaben in der IT" },
    laufzeit: "bis 6 Monate",
    bausteine: ["IT-Automatisierung", "Organisationsdesign"],
    bereichSlug: "ki-automatisierung",
    bereichTitel: "KI-Automatisierung",
  },
]
