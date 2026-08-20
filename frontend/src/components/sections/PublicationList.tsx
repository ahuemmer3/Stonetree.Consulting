import Reveal from "../ui/Reveal"
import { publications } from "../../data/publications"

// Vollständige Publikationsliste, gebündelt im Research Lab.
// Wird auf der Research-Lab-Detailseite eingebunden.
export default function PublicationList() {
  return (
    <section className="section-pad publications-list" id="publikationen">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Publikationen
        </Reveal>
        <Reveal as="h2" delay={1}>
          Alle Beiträge aus dem Research Lab
        </Reveal>

        <div className="pub-rows">
          {publications.map((item, index) => (
            <Reveal as="article" className="pub-row" delay={index % 3} key={item.id}>
              <div className="pub-row-meta">
                <span className="type">{item.type}</span>
                {item.date}
              </div>
              <div className="pub-row-body">
                <h3>{item.title}</h3>
                <p>{item.teaser}</p>
                <div className="pub-row-foot">
                  {item.pdfUrl ? (
                    <a className="pub-download" href={item.pdfUrl}>
                      PDF ansehen &rarr;
                    </a>
                  ) : (
                    <span className="pub-badge">PDF folgt</span>
                  )}
                  <div className="pub-topics">
                    {item.topics.map((topic) => (
                      <span className="pub-topic" key={topic}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
