import { useParams, Link } from "react-router-dom"
import { pillars } from "../data/pillars.js"
import Contact from "../components/sections/Contact.jsx"
import Reveal from "../components/ui/Reveal.jsx"

// Detailseite eines Bereichs, z. B. /bereiche/ai-automation
// Der Bereich wird anhand des "slug" in der Adresse gesucht.
export default function PillarPage() {
  const { slug } = useParams()
  const pillar = pillars.find((p) => p.slug === slug)

  // Unbekannter Bereich -> freundlicher Hinweis statt leerer Seite.
  if (!pillar) {
    return (
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Hinweis</span>
          <h1>Bereich nicht gefunden</h1>
          <p className="lead">Diesen Bereich gibt es nicht.</p>
          <Link className="back" to="/#expertise">
            &larr; Alle Bereiche
          </Link>
        </div>
      </section>
    )
  }

  const { detail } = pillar

  return (
    <>
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20,20,20,0.9), rgba(20,20,20,0.74)), url(${pillar.image})`,
        }}
      >
        <div className="wrap">
          <Link className="back" to="/#expertise">
            &larr; Alle Bereiche
          </Link>
          <span className="eyebrow">{pillar.tag}</span>
          <h1>{pillar.title}</h1>
          <p className="lead">{detail.lead}</p>
        </div>
      </section>

      <section className="page-body">
        <div className="wrap">
          <Reveal className="body-text">
            {detail.body.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </Reveal>

          <div className="page-points">
            {detail.points.map((point, index) => (
              <Reveal className="pt" delay={index} key={point.title}>
                <div className="k">{point.k}</div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kontaktaufruf am Seitenende (gleiche Komponente wie auf der Startseite) */}
      <Contact />
    </>
  )
}
