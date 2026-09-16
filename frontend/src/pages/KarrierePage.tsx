import ArrowLink from "../components/ui/ArrowLink"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import CardGrid from "../components/ui/CardGrid"
import Faq from "../components/detail/Faq"
import NumberedSteps from "../components/ui/NumberedSteps"
import PageHero from "../components/ui/PageHero"
import PointGrid from "../components/ui/PointGrid"
import Quote from "../components/ui/Quote"
import Reveal from "../components/ui/Reveal"
import Section from "../components/ui/Section"
import SectionHead from "../components/ui/SectionHead"
import JobList from "../features/jobs/JobList"
import {
  ansprechperson,
  bewerbungsSchritte,
  einblicke,
  einstiegswege,
  karriereFragen,
  karriereHero,
  researchArgument,
  warumPunkte,
} from "../data/karriere"
import { usePageMeta } from "../hooks/usePageMeta"

// Karriereseite. Aufbau wie bei großen Beratungshäusern: Einstiegswege,
// Argument Research Lab, Bewerbungsprozess, Stellenliste mit Filter,
// Einblicke, Fragen, Ansprechperson. Alle Bausteine sind die der übrigen Seite.
export default function KarrierePage() {
  usePageMeta(
    "Karriere · stonetree",
    "Offene Stellen, Einstiegswege und Bewerbungsprozess bei stonetree: Consulting, KI-Automatisierung und Research Lab.",
  )

  return (
    <>
      <PageHero
        kicker={karriereHero.kicker}
        title={karriereHero.title}
        lead={karriereHero.lead}
      >
        <Button href="#stellen">Offene Stellen</Button>
      </PageHero>

      <Section id="warum">
        <SectionHead
          kicker="Warum stonetree"
          title="Was die Arbeit bei uns ausmacht"
          intro="Kleine Teams, echte Projekte und ein eigenes Research Lab. Vier Punkte, die unsere Arbeit von klassischer Beratung unterscheiden."
          split
        />
        <PointGrid items={warumPunkte} columns={4} />
      </Section>

      <Section id="einstieg" tone="muted">
        <SectionHead
          kicker="Einstiegswege"
          title="Vier Wege zu uns"
          intro="Jeder Weg führt in echte Projekte. Der Unterschied liegt im Umfang und in der Verantwortung."
          split
        />
        <CardGrid columns={2}>
          {einstiegswege.map((weg, index) => (
            <Card
              key={weg.title}
              kicker={weg.kicker}
              title={weg.title}
              text={weg.text}
              image={{ src: weg.image, alt: weg.alt }}
              link={{
                label: "Passende Stellen",
                to: `/karriere?art=${encodeURIComponent(weg.art)}#stellen`,
              }}
              revealDelay={index % 3}
            />
          ))}
        </CardGrid>
      </Section>

      <Section id="research">
        <SectionHead
          kicker={researchArgument.kicker}
          title={researchArgument.title}
          intro={researchArgument.text}
          split
        />
        <PointGrid items={researchArgument.punkte} columns={3} />
        <p className="section-action">
          <ArrowLink to="/bereiche/research-lab">Zum Research Lab</ArrowLink>
        </p>
      </Section>

      <Section id="bewerbung" tone="muted">
        <SectionHead
          kicker="Bewerbung"
          title="Wie es nach Ihrer Bewerbung weitergeht"
          intro="Fünf Schritte, meist in drei bis vier Wochen. Nach jedem Schritt hören Sie von uns."
        />
        <NumberedSteps
          layout="row"
          items={bewerbungsSchritte.map((schritt) => ({
            n: schritt.n,
            title: schritt.title,
            text: schritt.text,
            meta: schritt.dauer,
          }))}
        />
      </Section>

      <Section id="stellen">
        <SectionHead
          kicker="Offene Stellen"
          title="Diese Stellen sind gerade frei"
          intro="Filtern Sie nach Bereich, Standort und Art der Stelle. Die Stellen sind Platzhalter für den Prototyp."
          split
        />
        <JobList />
      </Section>

      <Section id="einblicke" tone="muted">
        <SectionHead
          kicker="Einblicke"
          title="Drei Stimmen aus dem Team"
          intro="Was Kolleginnen und Kollegen über ihre Arbeit sagen."
        />
        <div className="quote-grid">
          {einblicke.map((person) => (
            <Reveal key={person.name}>
              <Quote
                zitat={person.zitat}
                name={person.name}
                rolle={person.rolle}
                image={{ src: person.image, alt: person.alt }}
              />
            </Reveal>
          ))}
        </div>
        <p className="note">
          Personen und Zitate sind Platzhalter für den Prototyp.
        </p>
      </Section>

      <Faq
        kicker="Häufige Fragen"
        title="Was Bewerberinnen und Bewerber oft fragen"
        items={karriereFragen}
      />

      <Section id="kontakt-karriere" tone="muted">
        <SectionHead
          kicker="Ansprechperson"
          title="Fragen zur Bewerbung?"
        />
        <Reveal className="karriere-kontakt">
          <img
            src={ansprechperson.image}
            alt={ansprechperson.alt}
            loading="lazy"
          />
          <div>
            <p className="karriere-kontakt__name">{ansprechperson.name}</p>
            <p className="karriere-kontakt__rolle">{ansprechperson.rolle}</p>
            <p className="karriere-kontakt__text">{ansprechperson.text}</p>
            <p className="karriere-kontakt__actions">
              <a
                className="btn btn--primary"
                href={`mailto:${ansprechperson.email}`}
              >
                {ansprechperson.email}
              </a>
            </p>
            <p className="note">E-Mail-Adresse ist ein Platzhalter.</p>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
