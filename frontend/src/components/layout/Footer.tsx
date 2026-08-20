import { Link } from "react-router-dom"
import { site } from "../../data/site"
import { pillars } from "../../data/pillars"

export default function Footer() {
  const { impressum } = site

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img
                src="/images/logo-emblem-light.png"
                alt=""
                className="brand-mark"
              />
              {site.brand}
            </Link>
            <p>{site.tagline}</p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h5>Expertise</h5>
              {pillars.map((pillar) => (
                <Link key={pillar.id} to={`/bereiche/${pillar.slug}`}>
                  {pillar.title}
                </Link>
              ))}
            </div>
            <div className="footer-col">
              <h5>Unternehmen</h5>
              <Link to="/#kundenprojekte">Kundenprojekte</Link>
              <Link to="/#publikationen">Publikationen</Link>
              <Link to="/#ueber-uns">Über uns</Link>
              <Link to="/#kontakt">Kontakt</Link>
              <a href="#impressum">Impressum</a>
            </div>
          </div>
        </div>

        <div className="impressum" id="impressum">
          <h5>Impressum</h5>
          <div className="imp-grid">
            <div>
              <b>{impressum.company}</b>
              <br />
              {impressum.person}
              <br />
              {impressum.street}
              <br />
              {impressum.city}
            </div>
            <div>
              <b>Kontakt</b>
              <br />
              Telefon: {impressum.phone}
              <br />
              E-Mail: {impressum.email}
            </div>
            <div>
              <b>Verantwortlich für den Inhalt</b>
              <br />
              {impressum.responsible}
              <br />
              (Daten noch zu ergänzen)
            </div>
          </div>
        </div>

        <div className="legal">
          <span>Prototyp. Inhalte und Kennzahlen sind Platzhalter.</span>
          <span>© 2026 {site.brand} GmbH</span>
        </div>
      </div>
    </footer>
  )
}
