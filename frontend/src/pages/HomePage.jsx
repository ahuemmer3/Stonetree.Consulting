import Hero from "../components/sections/Hero.jsx"
import Pillars from "../components/sections/Pillars.jsx"
import Approach from "../components/sections/Approach.jsx"
import Contact from "../components/sections/Contact.jsx"

// Die Startseite: setzt die Abschnitte von oben nach unten zusammen.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Approach />
      <Contact />
    </>
  )
}
