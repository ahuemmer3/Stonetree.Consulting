import Logo, { LogoZeichen } from "../components/brand/Logo"
import PageHero from "../components/ui/PageHero"
import Section from "../components/ui/Section"
import SectionHead from "../components/ui/SectionHead"
import { usePageMeta } from "../hooks/usePageMeta"

// Interne Vorschau der beiden Logo-Varianten, zum Vergleichen und Entscheiden.
// Die Variante für den Header steht in src/data/site.ts.
const GROESSEN = [24, 32, 48]

export default function MarkePage() {
  usePageMeta("Logo-Varianten · stonetree")

  return (
    <>
      <PageHero
        kicker="Marke"
        title="Zwei Logo-Varianten"
        lead="Das bisherige Zeichen im Kreis ist bei kleinen Größen nicht mehr lesbar. Hier stehen beide Vorschläge nebeneinander."
      />

      <Section>
        <SectionHead
          kicker="Variante 1"
          title="Nur die Wortmarke"
          intro="Ohne Zeichen. Ruhig, gut lesbar in jeder Größe und einfach zu drucken."
        />
        <div className="marke-probe">
          <Logo variante="wortmarke" />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead
          kicker="Variante 2"
          title="Vereinfachtes Zeichen mit Wortmarke"
          intro="Baumkrone, Stamm und Fels als eine Fläche, ohne Innenzeichnung und ohne Kreis. Das Zeichen bleibt auch bei 24 Pixeln erkennbar."
        />
        <div className="marke-probe">
          <Logo variante="zeichen" />
        </div>

        <div className="marke-groessen">
          {GROESSEN.map((groesse) => (
            <div className="marke-groesse" key={groesse}>
              <LogoZeichen size={groesse} />
              <span>{groesse} px</span>
            </div>
          ))}
          <div className="marke-groesse marke-groesse--dunkel">
            <LogoZeichen size={32} />
            <span>32 px auf dunkel</span>
          </div>
        </div>
      </Section>
    </>
  )
}
