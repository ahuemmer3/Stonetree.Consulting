import { Link } from "react-router-dom"
import Logo from "../brand/Logo"
import MegaPanel from "./MegaPanel"
import MobileMenu from "./MobileMenu"
import Quote from "../ui/Quote"
import { site } from "../../data/site"
import {
  contactLink,
  expertiseColumns,
  homeSectionIds,
  karriereColumns,
  mainNav,
  serviceLinks,
} from "../../data/navigation"
import { publications } from "../../data/publications"
import { einblicke } from "../../data/karriere"
import { useHeaderMenus } from "../../features/navigation/useHeaderMenus"
import { useActiveNav } from "../../features/navigation/useActiveNav"
import { useScrolled } from "../../hooks/useScrolled"

// Kopfbereich: Servicezeile, Hauptnavigation mit zwei Ausklappmenüs,
// Suche (Platzhalter), Kontakt-Button und Handymenü.
// Beim Scrollen fährt die Servicezeile weg und die Navigation wird flacher.
// Der Header steht fest, deshalb verschiebt sich der Inhalt dabei nicht.
export default function Header() {
  const menus = useHeaderMenus()
  const aktiv = useActiveNav(homeSectionIds)
  const scrolled = useScrolled(60)
  const neuestePublikation = publications[0]
  const zitat = einblicke[0]

  return (
    <header
      ref={menus.headerRef}
      id="site-header"
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
      onMouseLeave={() => menus.setOpenMega(null)}
    >
      <div className="service-bar">
        <div className="wrap service-bar__inner">
          <nav aria-label="Servicelinks" className="service-bar__links">
            {serviceLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Sprachumschaltung ist noch ein Platzhalter */}
          <div className="service-bar__lang">
            <span aria-current="true">DE</span>
            <span aria-hidden="true">·</span>
            <span title="Englische Fassung folgt">EN</span>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="wrap main-nav__inner">
          <Link
            to="/"
            className="brand"
            aria-label={`${site.brand}, zur Startseite`}
          >
            <Logo variante={site.logoVariante} />
          </Link>

          <nav className="nav" aria-label="Hauptnavigation">
            <ul className="nav__list">
              {mainNav.map((item) => (
                <li
                  className={`nav__item${aktiv === item.id ? " nav__item--active" : ""}`}
                  key={item.id}
                  onMouseEnter={
                    item.mega ? () => menus.setOpenMega(item.mega!) : undefined
                  }
                >
                  {item.mega ? (
                    <button
                      type="button"
                      className="nav__trigger"
                      ref={menus.registerTrigger(item.mega)}
                      aria-expanded={menus.openMega === item.mega}
                      aria-controls={`mega-${item.mega}`}
                      onClick={() => menus.toggleMega(item.mega!)}
                    >
                      {item.label}
                      <span className="nav__caret" aria-hidden="true">
                        &#9660;
                      </span>
                    </button>
                  ) : (
                    <Link className="nav__link" to={item.href}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__actions">
            {/* Suche ist gestalterisch vorbereitet, die Funktion folgt */}
            <button
              type="button"
              className="icon-btn"
              aria-label="Suche (folgt)"
              aria-disabled="true"
            >
              <SucheIcon />
            </button>
            <Link className="btn btn--primary nav__cta" to={contactLink.href}>
              {contactLink.label}
            </Link>
            <button
              type="button"
              className="icon-btn nav__menu-btn"
              aria-label="Menü"
              aria-expanded={menus.mobileOpen}
              aria-controls="handymenue"
              onClick={menus.toggleMobile}
            >
              <span aria-hidden="true">{menus.mobileOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {menus.openMega === "expertise" && (
        <MegaPanel
          id="mega-expertise"
          columns={expertiseColumns}
          preview={
            <Link to="/bereiche/research-lab#publikationen">
              <img
                className="mega__preview-img"
                src={neuestePublikation.image}
                alt={neuestePublikation.imageAlt}
                loading="lazy"
              />
              <div className="mega__preview-body">
                <span className="kicker">{neuestePublikation.type}</span>
                <p className="mega__preview-title">
                  {neuestePublikation.title}
                </p>
                <span className="mega__preview-link">
                  Zur Publikation
                  <span className="arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          }
        />
      )}

      {menus.openMega === "karriere" && (
        <MegaPanel
          id="mega-karriere"
          columns={karriereColumns}
          preview={
            <Quote
              zitat={zitat.zitat}
              name={zitat.name}
              rolle={zitat.rolle}
              image={{ src: zitat.image, alt: zitat.alt }}
            />
          }
        />
      )}

      {menus.mobileOpen && <MobileMenu onNavigate={menus.closeAll} />}
    </header>
  )
}

function SucheIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" strokeLinecap="round" />
    </svg>
  )
}
