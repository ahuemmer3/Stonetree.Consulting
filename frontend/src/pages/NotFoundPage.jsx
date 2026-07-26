import { Link } from "react-router-dom"

// Wird angezeigt, wenn eine Adresse nicht existiert.
export default function NotFoundPage() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1>Seite nicht gefunden</h1>
        <p className="lead">Die gewünschte Seite existiert nicht.</p>
        <Link className="back" to="/">
          &larr; Zur Startseite
        </Link>
      </div>
    </section>
  )
}
