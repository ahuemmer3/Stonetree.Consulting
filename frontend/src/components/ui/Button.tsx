import type { ReactNode } from "react"
import { Link } from "react-router-dom"

// Link im Button-Look.
//   primary   gefüllter Akzent-Button, pro Ansicht die wichtigste Aktion
//   secondary Rahmen ohne Füllung
// Interne Seiten über to, Anker und andere Adressen über href.
interface ButtonProps {
  to?: string
  href?: string
  variant?: "primary" | "secondary"
  children: ReactNode
}

export default function Button({
  to,
  href,
  variant = "primary",
  children,
}: ButtonProps) {
  const className = `btn btn--${variant}`
  return to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
