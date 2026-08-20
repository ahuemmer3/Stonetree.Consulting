import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"

// Blendet seinen Inhalt sanft ein, sobald er ins Bild scrollt.
//   as        - welches HTML-Element gerendert wird (Standard: div)
//   delay     - 0..3, kleine Verzoegerung (gestaffeltes Einblenden)
//   immediate - true fuer Inhalte ganz oben (Hero), sofort sichtbar
// Bei aktivierter Bewegungsreduktion ist alles sofort sichtbar.
interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  delay?: number
  immediate?: boolean
  className?: string
  children?: ReactNode
}

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  immediate = false,
  className = "",
  children,
  ...props
}: RevealProps) {
  // ref auf einem polymorphen Element: bewusst lose getypt.
  const ref = useRef<any>(null)
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
