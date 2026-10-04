// Globale Angaben zur Firma (Marke, Impressum).
// Die Website ist fiktiv (Hochschulprojekt). Das Impressum nutzt deshalb
// bewusst Musterdaten, der Hinweis darauf steht auf der Seite /impressum und
// in der Fußzeile.

// Welche Logo-Variante der Header zeigt. Beide Varianten stehen unter /marke
// nebeneinander, umgestellt wird hier an einer Stelle.
export type LogoVariante = "wortmarke" | "zeichen"

export interface Impressum {
  company: string
  representative: string
  street: string
  city: string
  phone: string
  email: string
  registerCourt: string
  registerNumber: string
  vatId: string
  // Inhaltlich verantwortlich nach § 18 Abs. 2 MStV
  responsible: string
  // Erklärt, dass Unternehmen und Angaben erfunden sind
  fictionNotice: string[]
}

export interface Site {
  brand: string
  tagline: string
  contactEmail: string
  karriereEmail: string
  logoVariante: LogoVariante
  impressum: Impressum
}

export const site: Site = {
  brand: "stonetree",
  tagline:
    "Eigene Forschung, im Mittelstand umgesetzt. Von der Strategie bis zur laufenden Lösung.",
  // Ziel-Adresse des Kontaktformulars (Empfänger der Anfragen).
  contactEmail: "aaron.huemmer@hof-university.de",
  // Platzhalter bis zur echten Bewerbungsadresse
  karriereEmail: "karriere@stonetree.example",
  logoVariante: "wortmarke",
  impressum: {
    company: "stonetree GmbH",
    representative: "Max Mustermann",
    street: "Musterstraße 1",
    city: "12345 Musterstadt",
    phone: "+49 123 456789",
    email: "info@stonetree.example",
    registerCourt: "Amtsgericht Musterstadt",
    registerNumber: "HRB 12345",
    vatId: "DE123456789",
    responsible: "Max Mustermann, Musterstraße 1, 12345 Musterstadt",
    fictionNotice: [
      "Diese Website ist ein fiktives Projekt. Sie ist im Rahmen eines Hochschulprojekts entstanden und dient nur der Lehre.",
      "Die stonetree GmbH existiert nicht. Alle Namen, Anschriften, Kennzahlen, Personen, Stellen und Kundenprojekte sind erfunden. Ähnlichkeiten mit echten Unternehmen oder Personen sind zufällig.",
      "Es werden keine Leistungen angeboten und keine Verträge geschlossen.",
    ],
  },
}
