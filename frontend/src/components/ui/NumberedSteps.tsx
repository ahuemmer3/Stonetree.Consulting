import type { ReactNode } from "react"
import Reveal from "./Reveal"

// Nummerierte Bausteine oder Schritte (01, 02, ...). Genutzt für Leistungen,
// Leistungsbausteine, Vorgehen und den Bewerbungsprozess.
// layout "grid": drei Spalten. "row": alle Schritte waagerecht nebeneinander.
export interface Step {
  n: string
  title: string
  text: string
  // kurze Angabe unter dem Titel, z. B. die Dauer
  meta?: string
  // Zusatz unter dem Text, z. B. das Ergebnis eines Bausteins
  extra?: ReactNode
}

interface NumberedStepsProps {
  items: Step[]
  layout?: "grid" | "row"
}

export default function NumberedSteps({
  items,
  layout = "grid",
}: NumberedStepsProps) {
  return (
    <ol className={`steps steps--${layout}`}>
      {items.map((item, index) => (
        <Reveal as="li" className="step" delay={index % 3} key={item.n}>
          <span className="step__n" aria-hidden="true">
            {item.n}
          </span>
          <h3 className="step__title">{item.title}</h3>
          {item.meta && <span className="step__meta">{item.meta}</span>}
          <p className="step__text">{item.text}</p>
          {item.extra}
        </Reveal>
      ))}
    </ol>
  )
}
