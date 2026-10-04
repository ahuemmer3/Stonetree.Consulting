import type { ReactNode } from "react"
import PageHero from "../components/ui/PageHero"
import Section from "../components/ui/Section"
import { site } from "../data/site"
import { usePageMeta } from "../hooks/usePageMeta"

// Ein Block des Impressums: kleine Überschrift, darunter die Angaben.
function ImpressumBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="impressum-block">
      <h2 className="impressum-block__title">{title}</h2>
      <p>{children}</p>
    </div>
  )
}

// Impressum mit Musterdaten. Der Hinweis auf die fiktive Website steht
// bewusst ganz oben, damit niemand die Angaben für echt hält.
export default function ImpressumPage() {
  const { impressum } = site
  usePageMeta("Impressum · stonetree")

  return (
    <>
      <PageHero
        kicker="Rechtliches"
        title="Impressum"
        back={{ to: "/", label: "Zur Startseite" }}
      />

      <Section>
        <aside className="impressum-notice" aria-labelledby="fiktiv-titel">
          <h2 id="fiktiv-titel" className="impressum-notice__title">
            Hinweis: fiktive Website
          </h2>
          {impressum.fictionNotice.map((satz) => (
            <p key={satz}>{satz}</p>
          ))}
        </aside>

        <div className="impressum-grid">
          <ImpressumBlock title="Angaben gemäß § 5 DDG">
            {impressum.company}
            <br />
            {impressum.street}
            <br />
            {impressum.city}
          </ImpressumBlock>

          <ImpressumBlock title="Vertreten durch">
            Geschäftsführer: {impressum.representative}
          </ImpressumBlock>

          <ImpressumBlock title="Kontakt">
            Telefon: {impressum.phone}
            <br />
            E-Mail: {impressum.email}
          </ImpressumBlock>

          <ImpressumBlock title="Registereintrag">
            Registergericht: {impressum.registerCourt}
            <br />
            Registernummer: {impressum.registerNumber}
          </ImpressumBlock>

          <ImpressumBlock title="Umsatzsteuer-ID">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {impressum.vatId}
          </ImpressumBlock>

          <ImpressumBlock title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            {impressum.responsible}
          </ImpressumBlock>
        </div>

        <p className="note">
          Alle Angaben auf dieser Seite sind Musterdaten. Die Telefonnummer und
          die E-Mail-Adresse sind nicht erreichbar.
        </p>
      </Section>
    </>
  )
}
