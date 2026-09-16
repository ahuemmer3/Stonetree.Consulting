import { useState } from "react"
import { Link } from "react-router-dom"
import {
  contactLink,
  expertiseColumns,
  karriereColumns,
  mainNav,
  serviceLinks,
} from "../../data/navigation"
import type { MegaColumn, MegaId } from "../../data/navigation"

// Vollbildmenü für schmale Bildschirme. Die Ausklappbereiche aus der
// Hauptnavigation werden hier zu Akkordeons.
const spalten: Record<MegaId, MegaColumn[]> = {
  expertise: expertiseColumns,
  karriere: karriereColumns,
}

export default function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const [offen, setOffen] = useState<MegaId | null>(null)

  return (
    <div className="mobile-menu" id="handymenue">
      <nav aria-label="Hauptnavigation (Handy)">
        <ul>
          {mainNav.map((item) => (
            <li className="mobile-menu__item" key={item.id}>
              {item.mega ? (
                <>
                  <button
                    type="button"
                    className="mobile-menu__trigger"
                    aria-expanded={offen === item.mega}
                    onClick={() =>
                      setOffen((current) =>
                        current === item.mega ? null : item.mega!,
                      )
                    }
                  >
                    {item.label}
                    <span className="nav__caret" aria-hidden="true">
                      &#9660;
                    </span>
                  </button>
                  {offen === item.mega && (
                    <div className="mobile-menu__panel">
                      {spalten[item.mega].map((column) => (
                        <div key={column.title}>
                          <Link
                            className="mega__head"
                            to={column.href}
                            onClick={onNavigate}
                          >
                            {column.title}
                            <span className="arrow" aria-hidden="true">
                              &rarr;
                            </span>
                          </Link>
                          <div className="mega__links">
                            {column.links.map((link) => (
                              <Link
                                key={link.href}
                                to={link.href}
                                onClick={onNavigate}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  className="mobile-menu__link"
                  to={item.href}
                  onClick={onNavigate}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mobile-menu__cta">
        <Link className="btn btn--primary" to={contactLink.href} onClick={onNavigate}>
          {contactLink.label}
        </Link>
      </div>

      <div className="mobile-menu__service">
        {serviceLinks.map((link) => (
          <Link key={link.href} to={link.href} onClick={onNavigate}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
