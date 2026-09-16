import Reveal from "../ui/Reveal"
import Section from "../ui/Section"
import SectionHead from "../ui/SectionHead"
import { publications } from "../../data/publications"

// Vollständige Publikationsliste, gebündelt im Research Lab.
export default function PublicationList() {
  return (
    <Section id="publikationen">
      <SectionHead
        kicker="Publikationen"
        title="Alle Beiträge aus dem Research Lab"
      />

      <div className="pub-rows">
        {publications.map((item, index) => (
          <Reveal
            as="article"
            className="pub-row"
            delay={index % 3}
            key={item.id}
          >
            <div className="pub-row-meta">
              <span className="kicker">{item.type}</span>
              {item.date}
            </div>
            <div className="pub-row-body">
              <h3 className="pub-row-title">{item.title}</h3>
              <p>{item.teaser}</p>
              <div className="pub-row-foot">
                {item.pdfUrl ? (
                  <a className="pub-download" href={item.pdfUrl}>
                    PDF ansehen
                    <span className="arrow" aria-hidden="true">
                      &rarr;
                    </span>
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
    </Section>
  )
}
