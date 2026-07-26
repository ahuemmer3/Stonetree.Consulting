import { Link } from "react-router-dom"
import { site } from "../../data/site.js"
import { pillars } from "../../data/pillars.js"

export default function Footer() {
  const { impressum } = site

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              {site.brand}
              <span>.</span>
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
          <span>Prototyp, Stand Juni 2026. Alle Inhalte sind Platzhalter.</span>
          <span>© 2026 {site.brand} Consulting</span>
        </div>
      </div>
    </footer>
  )
}
