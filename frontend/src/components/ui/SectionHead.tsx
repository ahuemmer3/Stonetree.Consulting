import Reveal from "./Reveal"

// Kopf einer Sektion: Kicker, Überschrift, optionaler Einleitungssatz.
// split setzt den Einleitungssatz auf breiten Bildschirmen rechts daneben.
interface SectionHeadProps {
  kicker: string
  title: string
  intro?: string
  split?: boolean
}

export default function SectionHead({
  kicker,
  title,
  intro,
  split = false,
}: SectionHeadProps) {
  return (
    <div className={`section-head${split ? " section-head--split" : ""}`}>
      <Reveal as="span" className="kicker">
        {kicker}
      </Reveal>
      <Reveal as="h2" className="section-head__title" delay={1}>
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" className="section-head__intro" delay={2}>
          {intro}
        </Reveal>
      )}
    </div>
  )
}
