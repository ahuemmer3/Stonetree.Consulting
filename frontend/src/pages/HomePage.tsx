import Hero from "../components/sections/Hero"
import Pillars from "../components/sections/Pillars"
import Leistungen from "../components/sections/Leistungen"
import Kundenprojekte from "../components/sections/Kundenprojekte"
import Publications from "../components/sections/Publications"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import { usePageMeta } from "../hooks/usePageMeta"

// Die Startseite: setzt die Abschnitte von oben nach unten zusammen.
// Reihenfolge: Hero, Expertise, Leistungen, Kundenprojekte,
// Publikationen, Über uns, Kontakt.
export default function HomePage() {
  usePageMeta(
    "stonetree · Consulting, KI-Automatisierung & Research",
    "stonetree bringt Erkenntnisse aus eigener Forschung in den Mittelstand und setzt sie um: Consulting, KI-Automatisierung und Research Lab. Von der Strategie bis zur laufenden Lösung.",
  )

  return (
    <>
      <Hero />
      <Pillars />
      <Leistungen />
      <Kundenprojekte />
      <Publications />
      <About />
      <Contact />
    </>
  )
}
