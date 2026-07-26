import { useEffect, useRef, useState } from "react"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js"

// Blendet seinen Inhalt sanft ein, sobald er ins Bild scrollt.
//
// Props:
//   as        - welches HTML-Element gerendert wird (z. B. "h1", "p", "span"); Standard: div
//   delay     - 0..3, kleine Verzoegerung (gestaffeltes Einblenden)
//   immediate - true fuer Inhalte ganz oben (Hero), die sofort sichtbar sein sollen
//   className - zusaetzliche Klassen
//
// Bei aktivierter Bewegungsreduktion ist alles sofort sichtbar (siehe CSS + Hook).
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  immediate = false,
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [visible, setVisible] = useState(immediate || reduced)

  useEffect(() => {
    if (immediate || reduced) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [immediate, reduced])

  const classes = [
    "reveal",
    visible ? "in" : "",
    delay ? `d${delay}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Tag ref={ref} className={classes} {...props}>
      {children}
    </Tag>
  )
}
