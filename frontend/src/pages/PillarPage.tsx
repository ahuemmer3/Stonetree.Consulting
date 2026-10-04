import { useParams } from "react-router-dom"
import { pillars } from "../data/pillars"
import DetailPage from "../components/detail/DetailPage"
import Services from "../components/detail/Services"
import Cases from "../components/detail/Cases"
import Phases from "../components/detail/Phases"
import Formats from "../components/detail/Formats"
import Faq from "../components/detail/Faq"
import PageHero from "../components/ui/PageHero"
import PublicationList from "../components/sections/PublicationList"
import { usePageMeta } from "../hooks/usePageMeta"

// Detailseite eines Bereichs, z. B. /bereiche/ki-automatisierung
// Der Bereich wird anhand des "slug" in der Adresse gesucht.
// Reihenfolge der Abschnitte: Leistungen (Reiter), Projektbeispiele,
// Vorgehen, Einstiegsformate, häufige Fragen.
export default function PillarPage() {
  const { slug } = useParams()
  const pillar = pillars.find((p) => p.slug === slug)

  usePageMeta(
    pillar ? `${pillar.title} · stonetree` : "Bereich nicht gefunden · stonetree",
    pillar?.detail.lead,
  )

  // Unbekannter Bereich: freundlicher Hinweis statt leerer Seite.
  if (!pillar) {
    return (
      <PageHero
        kicker="Hinweis"
        title="Bereich nicht gefunden"
        lead="Diesen Bereich gibt es nicht."
        back={{ to: "/#expertise", label: "Alle Bereiche" }}
      />
    )
  }

  const { detail } = pillar

  return (
    <DetailPage
      tag={pillar.tag}
      title={pillar.title}
      image={pillar.image}
      lead={detail.lead}
      intro={detail.intro}
      facts={detail.facts}
      backHref="/#expertise"
      backLabel="Alle Bereiche"
    >
      <Services block={detail.services} />
      <Cases block={detail.cases} />
      <Phases block={detail.phases} />
      <Formats block={detail.formats} />
      <Faq
        kicker={detail.faq.eyebrow}
        title={detail.faq.title}
        intro={detail.faq.intro}
        items={detail.faq.items}
      />
      {/* Vollständige Publikationsliste nur im Research Lab */}
      {pillar.slug === "research-lab" && <PublicationList />}
    </DetailPage>
  )
}
