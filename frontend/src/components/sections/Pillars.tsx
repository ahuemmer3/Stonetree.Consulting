import { Link } from "react-router-dom"
import Reveal from "../ui/Reveal"
import { pillars } from "../../data/pillars"

export default function Pillars() {
  return (
    <section className="section-pad expertise" id="expertise">
      <div className="wrap">
        <div className="pillars-intro">
          <div>
            <Reveal as="span" className="eyebrow">
              Unsere Expertise
            </Reveal>
            <Reveal as="h2" delay={1}>
              Drei Bereiche, ein Anspruch
            </Reveal>
          </div>
          <Reveal as="p" delay={2}>
            Wählen Sie einen Bereich, um mehr zu erfahren. Jeder Bereich steht
            für sich, gemeinsam ergeben sie unsere Arbeitsweise.
          </Reveal>
        </div>

        <Reveal className="pillars" delay={1}>
          {pillars.map((pillar) => (
            <Link
              className="pillar"
              id={pillar.anchor}
              to={`/bereiche/${pillar.slug}`}
              key={pillar.id}
            >
              <div className="pillar-media">
                <img src={pillar.image} alt="" loading="lazy" />
              </div>
              <span className="tag">{pillar.tag}</span>
              <h3>{pillar.title}</h3>
              <p className="desc">{pillar.desc}</p>
              <div className="more">
                Mehr erfahren <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
