import { Link } from "react-router-dom"
import Reveal from "../ui/Reveal"
import { publications } from "../../data/publications"

// Startseite: nur die neuesten Beiträge als Teaser. Die vollständige Liste
// liegt gebündelt im Research Lab.
export default function Publications() {
  const neueste = publications.slice(0, 3)

  return (
    <section className="section-pad publications" id="publikationen">
      <div className="wrap">
        <div className="pub-head">
          <Reveal as="span" className="eyebrow">
            Publikationen
          </Reveal>
          <Reveal as="h2" delay={1}>
            Was wir denken und teilen
          </Reveal>
          <Reveal as="p" delay={2}>
            Ausgewählte Beiträge aus dem Research Lab. Schwerpunkt Automatisierung
            und KI im Mittelstand.
          </Reveal>
        </div>

        <div className="pub-grid">
          {neueste.map((item, index) => (
            <Reveal as="article" className="pub-card" delay={index % 3} key={item.id}>
              <div className="pub-thumb">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="pub-content">
                <div className="pub-meta">
                  <span className="cat">{item.type}</span>
                  <span className="dot">·</span>
                  {item.date}
                </div>
                <h3>{item.title}</h3>
                <p>{item.teaser}</p>
                {item.pdfUrl ? (
                  <a className="pub-tag pub-tag--link" href={item.pdfUrl}>
                    PDF ansehen
                  </a>
                ) : (
                  <span className="pub-tag">PDF folgt</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="pub-more" delay={1}>
          <Link to="/bereiche/research-lab#publikationen">
            Alle Publikationen im Research Lab <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
