import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import type { MegaColumn } from "../../data/navigation"

// Inhalt eines Ausklappmenüs: drei Spalten mit Links, rechts eine Vorschau.
interface MegaPanelProps {
  id: string
  columns: MegaColumn[]
  preview: ReactNode
}

export default function MegaPanel({ id, columns, preview }: MegaPanelProps) {
  return (
    <div className="mega" id={id}>
      <div className="wrap mega__inner">
        {columns.map((column) => (
          <div className="mega__col" key={column.title}>
            <Link className="mega__head" to={column.href}>
              {column.title}
              <span className="arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
            <div className="mega__links">
              {column.links.map((link) => (
                <Link key={link.href} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="mega__preview">{preview}</div>
      </div>
    </div>
  )
}
