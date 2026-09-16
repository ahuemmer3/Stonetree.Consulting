import PointGrid from "../ui/PointGrid"
import Reveal from "../ui/Reveal"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import StatRow from "../ui/StatRow"
import { about } from "../../data/about"
import { approachItems } from "../../data/approach"

// Abschnitt "Über uns": kurze Vorstellung, Kennzahlen, Arbeitsweise.
export default function About() {
  return (
    <Section id="ueber-uns">
      <SectionHead kicker="Über uns" title={about.title} />

      <Reveal className="prose">
        {about.intro.map((absatz, index) => (
          <p key={index}>{absatz}</p>
        ))}
      </Reveal>

      <StatRow items={about.facts} />
      <p className="note">{about.factsHinweis}</p>

      <Reveal as="p" className="statement">
        Wir verbinden <b>Erfahrung aus echten Kundenprojekten</b> mit der
        Neugier unseres Research Labs.
      </Reveal>

      <div className="about-approach">
        <PointGrid items={approachItems.map(toPoint)} columns={3} />
      </div>
    </Section>
  )
}

// Die Arbeitsweise-Punkte haben eigene Feldnamen, hier auf das Raster gemappt.
function toPoint(item: { k: string; title: string; text: string }) {
  return { kicker: item.k, title: item.title, text: item.text }
}
