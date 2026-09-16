import type { ReactNode } from "react"

// Gemeinsamer Rahmen für alle Inhaltssektionen.
// tone "default" ist weiß, "muted" hellgrau. Dunkle Sektionen gibt es bewusst
// nicht: dunkel sind nur Hero und Footer.
interface SectionProps {
  id?: string
  tone?: "default" | "muted"
  className?: string
  children: ReactNode
}

export default function Section({
  id,
  tone = "default",
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`section section--${tone} ${className}`.trim()}>
      <div className="wrap">{children}</div>
    </section>
  )
}
