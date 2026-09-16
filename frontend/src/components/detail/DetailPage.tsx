import type { ReactNode } from "react"
import Contact from "../sections/Contact"
import PageHero from "../ui/PageHero"
import PointGrid from "../ui/PointGrid"
import Reveal from "../ui/Reveal"
import Section from "../ui/Section"

export interface DetailPoint {
  k: string
  title: string
  text: string
}

interface DetailPageProps {
  tag: string
  title: string
  image: string
  lead: string
  body: string[]
  points: DetailPoint[]
  backHref: string
  backLabel: string
  children?: ReactNode
}

// Vorlage für die Bereichsseiten: Seitenkopf mit Bild, Fließtext, Dreispalter
// und Kontaktaufruf. Alles zwischen Dreispalter und Kontakt kommt über
// children von der jeweiligen Seite, damit die Reihenfolge dort bestimmt wird.
export default function DetailPage({
  tag,
  title,
  image,
  lead,
  body,
  points,
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
        <Reveal className="prose">
          {body.map((absatz, index) => (
            <p key={index}>{absatz}</p>
          ))}
        </Reveal>

        <div className="detail-points">
          <PointGrid
            items={points.map((point) => ({
              kicker: point.k,
              title: point.title,
              text: point.text,
            }))}
            columns={3}
          />
        </div>
      </Section>

      {children}

      <Contact />
    </>
  )
}
