import Reveal from "../ui/Reveal.jsx"
import { publications } from "../../data/publications.js"

// Abschnitt "Publikationen": Karten mit Foto, Kategorie, Datum und Titel.
export default function Publications() {
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
            Ausgewählte Beiträge aus unserer Arbeit. Wir teilen Erkenntnisse
            offen, weil gute Ideen durch Austausch besser werden.
          </Reveal>
        </div>

        <div className="pub-grid">
          {publications.map((item, index) => (
            <Reveal as="article" className="pub-card" delay={index % 3} key={item.id}>
              <div className="pub-thumb">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="pub-content">
                <div className="pub-meta">
                  <span className="cat">{item.category}</span>
                  <span className="dot">·</span>
                  {item.date}
                </div>
                <h3>{item.title}</h3>
                <p>{item.teaser}</p>
                <span className="pub-tag">{item.status}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
