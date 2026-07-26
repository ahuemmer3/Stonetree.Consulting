import Hero from "../components/sections/Hero.jsx"
import Pillars from "../components/sections/Pillars.jsx"
import Publications from "../components/sections/Publications.jsx"
import About from "../components/sections/About.jsx"
import Contact from "../components/sections/Contact.jsx"

// Die Startseite: setzt die Abschnitte von oben nach unten zusammen.
// Reihenfolge passend zur Navigation: Übersicht (Hero) · Expertise ·
// Publikationen · Über uns · Kontakt.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Publications />
      <About />
      <Contact />
    </>
  )
}
