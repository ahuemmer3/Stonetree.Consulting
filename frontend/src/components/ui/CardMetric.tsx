// Kennzahl in einer Karte: großer Wert, darunter eine kurze Beschriftung.
// Steht zwischen Titel und Text (Card-Prop highlight).
export interface Metric {
  wert: string
  label: string
}

export default function CardMetric({ wert, label }: Metric) {
  return (
    <p className="card__metric">
      <span className="card__metric-value">{wert}</span>
      <span className="card__metric-label">{label}</span>
    </p>
  )
}
