import Reveal from "../ui/Reveal.jsx"
import { approachItems } from "../../data/approach.js"

export default function Approach() {
  return (
    <section className="section-pad approach" id="ansatz">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Unser Ansatz
        </Reveal>
        <Reveal as="p" delay={1} className="statement">
          Wir verbinden <b>Erfahrung aus dem Beratungsalltag</b> mit der Neugier
          eines Forschungslabors.
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
