import PageHero from "../components/ui/PageHero"
import { usePageMeta } from "../hooks/usePageMeta"

// Wird angezeigt, wenn eine Adresse nicht existiert.
export default function NotFoundPage() {
  usePageMeta("Seite nicht gefunden · stonetree")

  return (
    <PageHero
      kicker="404"
      title="Seite nicht gefunden"
      lead="Die gewünschte Seite existiert nicht."
      back={{ to: "/", label: "Zur Startseite" }}
    />
  )
}
