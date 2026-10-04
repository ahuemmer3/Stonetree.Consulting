import type { ReactNode } from "react"
import Contact from "../sections/Contact"
import PageHero from "../ui/PageHero"
import Reveal from "../ui/Reveal"
import Section from "../ui/Section"
import StatRow, { type Stat } from "../ui/StatRow"

interface DetailPageProps {
  tag: string
  title: string
  image: string
  lead: string
  intro: string
  facts: Stat[]
  backHref: string
  backLabel: string
  children?: ReactNode
}

// Vorlage für die Bereichsseiten: Seitenkopf mit Bild, ein kurzer Absatz,
// drei Eckdaten und der Kontaktaufruf. Alles dazwischen kommt über children
// von der jeweiligen Seite, damit die Reihenfolge dort bestimmt wird.
export default function DetailPage({
  tag,
  title,
  image,
  lead,
  intro,
  facts,
  backHref,
  backLabel,
  children,
}: DetailPageProps) {
  return (
    <>
      <PageHero
        kicker={tag}
        title={title}
        lead={lead}
        image={image}
        back={{ to: backHref, label: backLabel }}
      />

      <Section>
        <Reveal as="p" className="detail-intro">
          {intro}
        </Reveal>
        <StatRow items={facts} />
      </Section>

      {children}

      <Contact />
    </>
  )
}
