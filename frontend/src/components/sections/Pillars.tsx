import Card from "../ui/Card"
import CardGrid from "../ui/CardGrid"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import { pillars } from "../../data/pillars"

// Die drei Bereiche als Karten, in hellen Grautönen abgestuft (weiß, hell,
// etwas dunkler). Jede Karte führt auf ihre Detailseite.
export default function Pillars() {
  return (
    <Section id="expertise">
      <SectionHead
        kicker="Unsere Expertise"
        title="Drei Bereiche, ein Anspruch"
        intro="Wählen Sie einen Bereich, um mehr zu erfahren. Jeder Bereich steht für sich, gemeinsam ergeben sie unsere Arbeitsweise."
        split
      />

      <CardGrid columns={3}>
        {pillars.map((pillar, index) => (
          <Card
            key={pillar.id}
            kicker={pillar.tag}
            title={pillar.title}
            text={pillar.desc}
            image={{ src: pillar.image, alt: pillar.imageAlt }}
            link={{ label: "Mehr erfahren", to: `/bereiche/${pillar.slug}` }}
            ton={(index + 1) as 1 | 2 | 3}
            revealDelay={index % 3}
          />
        ))}
      </CardGrid>
    </Section>
  )
}
