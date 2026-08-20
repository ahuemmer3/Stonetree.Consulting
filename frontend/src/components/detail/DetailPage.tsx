import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import Contact from "../sections/Contact"
import Reveal from "../ui/Reveal"

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

// Vorlage für die Bereichs-Detailseiten: Hero mit Bild, Fließtext,
// Dreispalter und Kontaktaufruf. Alles zwischen Dreispalter und Kontakt
// kommt über children von der jeweiligen Seite (Ausgangslage, Bausteine,
// Vorgehen und so weiter), damit die Reihenfolge dort bestimmt wird.
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
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30,28,20,0.9), rgba(30,28,20,0.72)), url(${image})`,
        }}
      >
        <div className="wrap">
          <Link className="back" to={backHref}>
            &larr; {backLabel}
          </Link>
          <span className="eyebrow">{tag}</span>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <Reveal className="body-text">
            {body.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </Reveal>

          <div className="page-points">
            {points.map((point, index) => (
              <Reveal className="pt" delay={index} key={point.title}>
                <div className="k">{point.k}</div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {children}

      <Contact />
    </>
  )
}
