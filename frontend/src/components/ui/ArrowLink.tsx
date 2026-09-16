import type { ReactNode } from "react"
import { Link } from "react-router-dom"

// Textlink mit Pfeil. Interne Seiten über to, sonst href (Anker, mailto, PDF).
interface ArrowLinkProps {
  to?: string
  href?: string
  children: ReactNode
}

export default function ArrowLink({ to, href, children }: ArrowLinkProps) {
  const content = (
    <>
      {children}
      <span className="arrow" aria-hidden="true">
        &rarr;
      </span>
    </>
  )
  return to ? (
    <Link className="arrow-link" to={to}>
      {content}
    </Link>
  ) : (
    <a className="arrow-link" href={href}>
      {content}
    </a>
  )
}
