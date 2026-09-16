import type { ReactNode } from "react"

// Raster für Karten. Alle Karten einer Reihe sind gleich hoch (Grid).
// Bleibt in einer Reihe nur eine Karte übrig, läuft sie über die volle Breite
// und wird waagerecht dargestellt (Regeln in ui.css, .card-grid).
interface CardGridProps {
  columns?: 2 | 3 | 4
  children: ReactNode
}

export default function CardGrid({ columns = 3, children }: CardGridProps) {
  return <div className={`card-grid card-grid--${columns}`}>{children}</div>
}
