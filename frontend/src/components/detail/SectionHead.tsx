import Reveal from "../ui/Reveal"

// Kopf eines Detailseiten-Abschnitts: Eyebrow, Überschrift, optionaler
// Einleitungssatz. Steckt hier, damit alle Abschnitte gleich aufgebaut sind.
interface SectionHeadProps {
  eyebrow: string
  title: string
  intro?: string
}

export default function SectionHead({
  eyebrow,
  title,
  intro,
}: SectionHeadProps) {
  return (
    <div className="section-head">
      <Reveal as="span" className="eyebrow">
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={1}>
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" className="section-intro" delay={2}>
          {intro}
        </Reveal>
      )}
    </div>
  )
}
