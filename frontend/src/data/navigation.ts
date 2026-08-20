// Links der Hauptnavigation (Aufbau wie bei Roland Berger).
// Reihenfolge = Reihenfolge im Header. Kontakt ist der hervorgehobene Button.
export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "Übersicht", href: "#top" },
  { label: "Expertise", href: "#expertise" },
  { label: "Publikationen", href: "#publikationen" },
  { label: "Über uns", href: "#ueber-uns" },
]

// Der hervorgehobene Kontakt-Button (separat, weil er anders aussieht).
export const contactLink: NavLink = { label: "Kontakt", href: "#kontakt" }
