import Reveal from "./Reveal"

// Kurze Punkte im Raster, ohne Bilder: optionaler Kicker, Titel, Text.
// Genutzt für "Wie wir arbeiten", die Dreispalter der Bereichsseiten und
// "Warum stonetree" auf der Karriereseite.
export interface Point {
  kicker?: string
  title: string
  text: string
}

interface PointGridProps {
  items: Point[]
  columns?: 2 | 3 | 4
}

export default function PointGrid({ items, columns = 3 }: PointGridProps) {
  return (
    <div className={`points points--${columns}`}>
      {items.map((item, index) => (
        <Reveal className="point" delay={index % 3} key={item.title}>
          {item.kicker && <span className="kicker">{item.kicker}</span>}
          <h3 className="point__title">{item.title}</h3>
          <p className="point__text">{item.text}</p>
        </Reveal>
      ))}
    </div>
  )
}
