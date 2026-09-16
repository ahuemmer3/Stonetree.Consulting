// Daten für das Diagramm auf der Startseite: Aufwand in einem Beispielprozess
// vor und nach der Automatisierung. Die Werte sind fiktiv und als solche
// gekennzeichnet. Hervorgehoben wird genau ein Wert, der letzte Monat.
export interface AufwandPunkt {
  label: string
  // Stunden im Monat
  wert: number
}

export interface Aufwand {
  titel: string
  untertitel: string
  achseY: string
  achseX: string
  quelle: string
  punkte: AufwandPunkt[]
  // Index des hervorgehobenen Wertes
  hervorgehoben: number
  // senkrechte Linie zwischen zwei Monaten
  marker: { nachIndex: number; label: string }
}

export const aufwand: Aufwand = {
  titel: "Rechnungseingang: Aufwand vor und nach der Automatisierung",
  untertitel:
    "Bearbeitungszeit pro Monat bei einem mittelständischen Auftraggeber",
  achseY: "Stunden pro Monat",
  achseX: "Monat",
  quelle:
    "Quelle: stonetree Research Lab, Beispielprozess. Werte fiktiv (Prototyp).",
  hervorgehoben: 11,
  marker: { nachIndex: 3, label: "Start der Automatisierung" },
  punkte: [
    { label: "Jan", wert: 118 },
    { label: "Feb", wert: 124 },
    { label: "Mär", wert: 121 },
    { label: "Apr", wert: 116 },
    { label: "Mai", wert: 97 },
    { label: "Jun", wert: 71 },
    { label: "Jul", wert: 52 },
    { label: "Aug", wert: 44 },
    { label: "Sep", wert: 41 },
    { label: "Okt", wert: 39 },
    { label: "Nov", wert: 38 },
    { label: "Dez", wert: 38 },
  ],
}
