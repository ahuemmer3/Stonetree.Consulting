import type { CSSProperties, ReactNode } from "react"
import { Link } from "react-router-dom"

// Kopfbereich von Unterseiten: dunkle Fläche, optional mit abgedunkeltem Bild.
// Neben dem Footer die einzige dunkle Fläche einer Seite.
interface PageHeroProps {
  kicker: string
  title: string
  lead?: string
  image?: string
  back?: { to: string; label: string }
  // z. B. ein Button unter dem Lead-Text
  children?: ReactNode
}

export default function PageHero({
  kicker,
  title,
  lead,
  image,
  back,
  children,
}: PageHeroProps) {
  const style = image
    ? ({ "--page-hero-image": `url(${image})` } as CSSProperties)
    : undefined

  return (
    <section
      className={`page-hero on-dark${image ? " page-hero--image" : ""}`}
      style={style}
    >
      <div className="wrap">
        {back && (
          <Link className="page-hero__back" to={back.to}>
            <span aria-hidden="true">&larr;</span> {back.label}
          </Link>
        )}
        <span className="kicker">{kicker}</span>
        <h1 className="page-hero__title">{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
        {children && <div className="page-hero__actions">{children}</div>}
      </div>
    </section>
  )
}
