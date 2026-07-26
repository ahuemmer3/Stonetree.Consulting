import { useState } from "react"
import { Link } from "react-router-dom"
import { useScrolled } from "../../hooks/useScrolled.js"
import { navLinks, contactLink } from "../../data/navigation.js"
import { site } from "../../data/site.js"

export default function Header() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false) // Handy-Menue auf/zu

  const close = () => setOpen(false)

  return (
    <header id="site-header" className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <Link to="/" className="brand" onClick={close}>
          {site.brand}
          <span>.</span>
        </Link>

        <nav className={`nav-links${open ? " open" : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.href} to={`/${link.href}`} onClick={close}>
              {link.label}
            </Link>
          ))}
          <Link to={`/${contactLink.href}`} className="nav-cta" onClick={close}>
            {contactLink.label}
          </Link>
        </nav>

        <button
          className="menu-btn"
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          &#9776;
        </button>
      </div>
    </header>
  )
}
