import { Link } from "react-router-dom"
import Logo from "../brand/Logo"
import { site } from "../../data/site"
import { pillars } from "../../data/pillars"
import { karriereColumns } from "../../data/navigation"

export default function Footer() {
  const { impressum } = site
  const karriereLinks = karriereColumns[0].links

  return (
    <footer className="site-footer on-dark">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label={`${site.brand}, zur Startseite`}>
              <Logo variante={site.logoVariante} />
            </Link>
            <p>{site.tagline}</p>
          </div>

          <div className="footer-col">
            <p className="footer-col__title">Expertise</p>
            {pillars.map((pillar) => (
              <Link key={pillar.id} to={`/bereiche/${pillar.slug}`}>
                {pillar.title}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <p className="footer-col__title">Unternehmen</p>
            <Link to="/#leistungen">Leistungen</Link>
            <Link to="/#kundenprojekte">Kundenprojekte</Link>
            <Link to="/#publikationen">Publikationen</Link>
            <Link to="/#ueber-uns">Über uns</Link>
            <Link to="/#kontakt">Kontakt</Link>
          </div>

          <div className="footer-col">
            <p className="footer-col__title">Karriere</p>
            <Link to="/karriere">Überblick</Link>
            {karriereLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-impressum" id="impressum">
          <p className="footer-impressum__title">Impressum</p>
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

        <div className="footer-legal">
          <span>Prototyp. Inhalte und Kennzahlen sind Platzhalter.</span>
          <span>© 2026 {site.brand} GmbH</span>
        </div>
      </div>
    </footer>
  )
}
