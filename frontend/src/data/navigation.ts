// Navigation: Servicezeile, Hauptnavigation und die beiden Ausklappmenüs.
// Reihenfolge hier = Reihenfolge auf der Seite.
import { pillars } from "./pillars"

export interface NavLink {
  label: string
  href: string
}

export interface MegaColumn {
  title: string
  href: string
  links: NavLink[]
}

export type MegaId = "expertise" | "karriere"

export interface NavItem extends NavLink {
  // id dient auch dem aktiven Zustand (Unterstrich in der Navigation)
  id: string
  mega?: MegaId
}

// Schmale Zeile über dem Header
export const serviceLinks: NavLink[] = [
  { label: "Publikationen", href: "/#publikationen" },
  { label: "Research Lab", href: "/bereiche/research-lab" },
  { label: "Kontakt", href: "/#kontakt" },
  { label: "Karriere", href: "/karriere" },
]

export const mainNav: NavItem[] = [
  { id: "expertise", label: "Expertise", href: "/#expertise", mega: "expertise" },
  { id: "leistungen", label: "Leistungen", href: "/#leistungen" },
  { id: "kundenprojekte", label: "Kundenprojekte", href: "/#kundenprojekte" },
  { id: "publikationen", label: "Publikationen", href: "/#publikationen" },
  { id: "karriere", label: "Karriere", href: "/karriere", mega: "karriere" },
  { id: "ueber-uns", label: "Über uns", href: "/#ueber-uns" },
]

// Abschnitte der Startseite, an denen der aktive Navigationspunkt hängt
export const homeSectionIds = mainNav
  .filter((item) => item.href.startsWith("/#"))
  .map((item) => item.id)

export const contactLink: NavLink = { label: "Kontakt", href: "/#kontakt" }

// Ausklappmenü Expertise: je Bereich seine Leistungsfelder. Jeder Link öffnet
// den passenden Reiter (?feld=...), der erste Reiter braucht keinen Parameter.
export const expertiseColumns: MegaColumn[] = pillars.map((pillar) => {
  const base = `/bereiche/${pillar.slug}`
  return {
    title: pillar.title,
    href: base,
    links: pillar.detail.services.items.map((feld, index) => ({
      label: feld.label,
      href: index === 0 ? `${base}#leistungen` : `${base}?feld=${feld.id}#leistungen`,
    })),
  }
})

// Ausklappmenü Karriere. Die Einstiegswege filtern die Stellenliste vor.
export const karriereColumns: MegaColumn[] = [
  {
    title: "Einstieg",
    href: "/karriere#einstieg",
    links: [
      { label: "Praktikum", href: "/karriere?art=Praktikum#stellen" },
      { label: "Werkstudium", href: "/karriere?art=Werkstudium#stellen" },
      { label: "Berufseinstieg", href: "/karriere?art=Berufseinstieg#stellen" },
      { label: "Berufserfahrene", href: "/karriere?art=Berufserfahren#stellen" },
    ],
  },
  {
    title: "Arbeiten bei stonetree",
    href: "/karriere#warum",
    links: [
      { label: "Warum stonetree", href: "/karriere#warum" },
      { label: "Research Lab", href: "/karriere#research" },
      { label: "Einblicke", href: "/karriere#einblicke" },
    ],
  },
  {
    title: "Bewerbung",
    href: "/karriere#bewerbung",
    links: [
      { label: "Bewerbungsprozess", href: "/karriere#bewerbung" },
      { label: "Offene Stellen", href: "/karriere#stellen" },
      { label: "Häufige Fragen", href: "/karriere#fragen" },
    ],
  },
]
