import type { FocusEvent } from "react"
import { Link } from "react-router-dom"
import Reveal from "../ui/Reveal"
import { publications } from "../../data/publications"
import {
  useCarousel,
  useSlidesPerView,
} from "../../features/carousel/useCarousel"

// Startseite: alle Beiträge als Bild-Karussell, das von selbst weiterläuft.
// Die vollständige Liste liegt gebündelt im Research Lab.
export default function Publications() {
  const perView = useSlidesPerView()
  const { index, maxIndex, next, prev, goTo, pause, resume } = useCarousel({
    count: publications.length,
    perView,
  })

  // Pause nur beenden, wenn der Fokus das Karussell wirklich verlässt.
  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      resume()
    }
  }

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

        <Reveal delay={1}>
          <div
            className="pub-carousel"
            role="region"
            aria-roledescription="Karussell"
            aria-label="Publikationen"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onFocus={pause}
            onBlur={handleBlur}
          >
            <div className="pub-viewport">
              <div
                className="pub-track"
                style={{
                  transform: `translateX(calc(${-index} * (100% + var(--pub-gap)) / ${perView}))`,
                }}
              >
                {publications.map((item, i) => {
                  const visible = i >= index && i < index + perView
                  return (
                    <div
                      className="pub-slide"
                      key={item.id}
                      aria-hidden={!visible}
                    >
                      <article className="pub-card">
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
                            <a
                              className="pub-tag pub-tag--link"
                              href={item.pdfUrl}
                              tabIndex={visible ? undefined : -1}
                            >
                              PDF ansehen
                            </a>
                          ) : (
                            <span className="pub-tag">PDF folgt</span>
                          )}
                        </div>
                      </article>
                    </div>
                  )
                })}
              </div>
            </div>

            {maxIndex > 0 && (
              <div className="pub-controls">
                <div className="pub-dots">
                  {Array.from({ length: maxIndex + 1 }, (_, i) => (
                    <button
                      type="button"
                      key={i}
                      className={`pub-dot${i === index ? " active" : ""}`}
                      aria-label={`Position ${i + 1} von ${maxIndex + 1}`}
                      aria-current={i === index}
                      onClick={() => goTo(i)}
                    />
                  ))}
                </div>
                <div className="pub-arrows">
                  <button
                    type="button"
                    className="pub-nav"
                    aria-label="Vorherige Publikationen"
                    onClick={prev}
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    className="pub-nav"
                    aria-label="Nächste Publikationen"
                    onClick={next}
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal className="pub-more" delay={1}>
          <Link to="/bereiche/research-lab#publikationen">
            Alle Publikationen im Research Lab <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
