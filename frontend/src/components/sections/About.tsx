import Reveal from "../ui/Reveal"
import { about } from "../../data/about"
import { approachItems } from "../../data/approach"

// Abschnitt "Über uns": kurze Vorstellung + wie wir arbeiten.
export default function About() {
  return (
    <section className="section-pad about" id="ueber-uns">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Über uns
        </Reveal>
        <Reveal as="h2" delay={1}>
          {about.title}
        </Reveal>

        <Reveal className="about-intro" delay={2}>
          {about.intro.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </Reveal>

        <Reveal className="about-facts" delay={2}>
          {about.facts.map((fact) => (
            <div className="fact" key={fact.l}>
              <div className="n">{fact.n}</div>
              <div className="l">{fact.l}</div>
            </div>
          ))}
        </Reveal>

        <Reveal as="p" delay={1} className="statement">
          Wir verbinden <b>Erfahrung aus echten Kundenprojekten</b> mit der
          Neugier unseres Research Labs.
        </Reveal>

        <div className="approach-grid">
          {approachItems.map((item, index) => (
            <Reveal className="item" delay={index} key={item.k}>
              <div className="k">{item.k}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
