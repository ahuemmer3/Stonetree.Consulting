import { useParams, Link } from "react-router-dom"
import { pillars } from "../data/pillars"
import DetailPage from "../components/detail/DetailPage"
import Situations from "../components/detail/Situations"
import Offerings from "../components/detail/Offerings"
import Tasks from "../components/detail/Tasks"
import Phases from "../components/detail/Phases"
import Formats from "../components/detail/Formats"
import Faq from "../components/detail/Faq"
import PublicationList from "../components/sections/PublicationList"
import { usePageMeta } from "../hooks/usePageMeta"

// Detailseite eines Bereichs, z. B. /bereiche/ki-automatisierung
// Der Bereich wird anhand des "slug" in der Adresse gesucht.
// Reihenfolge der Abschnitte: Ausgangslage, Leistungsbausteine, typische
// Aufgaben, Vorgehen, Einstiegsformate, häufige Fragen.
export default function PillarPage() {
  const { slug } = useParams()
  const pillar = pillars.find((p) => p.slug === slug)

  usePageMeta(
    pillar ? `${pillar.title} · stonetree` : "Bereich nicht gefunden · stonetree",
    pillar?.detail.lead,
  )

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
    <DetailPage
      tag={pillar.tag}
      title={pillar.title}
      image={pillar.image}
      lead={detail.lead}
      body={detail.body}
      points={detail.points}
      backHref="/#expertise"
      backLabel="Alle Bereiche"
    >
      <Situations block={detail.situations} />
      <Offerings block={detail.offerings} />
      {detail.tasks && <Tasks items={detail.tasks} />}
      <Phases block={detail.phases} />
      <Formats block={detail.formats} />
      <Faq block={detail.faq} />
      {/* Vollständige Publikationsliste nur im Research Lab */}
      {pillar.slug === "research-lab" && <PublicationList />}
    </DetailPage>
  )
}
