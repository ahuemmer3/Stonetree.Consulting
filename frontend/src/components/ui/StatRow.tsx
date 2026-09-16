import Reveal from "./Reveal"

// Leiste mit wenigen Kennzahlen: großer Wert, kurze Beschriftung.
export interface Stat {
  wert: string
  label: string
}

export default function StatRow({ items }: { items: Stat[] }) {
  return (
    <dl className="stats">
      {items.map((item, index) => (
        <Reveal className="stat" delay={index % 3} key={item.label}>
          <dt className="stat__label">{item.label}</dt>
          <dd className="stat__value">{item.wert}</dd>
        </Reveal>
      ))}
    </dl>
  )
}
