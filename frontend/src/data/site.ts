// Globale Angaben zur Firma (Marke, Impressum).
// Impressum ist aktuell Platzhalter. Sobald die echten Firmendaten vorliegen,
// hier eintragen.
export interface Impressum {
  company: string
  person: string
  street: string
  city: string
  phone: string
  email: string
  responsible: string
}

export interface Site {
  brand: string
  tagline: string
  contactEmail: string
  impressum: Impressum
}

export const site: Site = {
  brand: "stonetree",
  tagline:
    "Eigene Forschung, im Mittelstand umgesetzt. Von der Strategie bis zur laufenden Lösung.",
  // Ziel-Adresse des Kontaktformulars (Empfänger der Anfragen).
  contactEmail: "aaron.huemmer@hof-university.de",
  impressum: {
    company: "stonetree GmbH",
    person: "vertreten durch: noch offen",
    street: "Musterstraße 1",
    city: "00000 Musterstadt",
    phone: "noch offen",
    email: "noch offen",
    responsible: "noch offen",
  },
}
