// Logo von stonetree in zwei Varianten (Auswahl in src/data/site.ts):
//   wortmarke  nur der Schriftzug, ohne Zeichen
//   zeichen    vereinfachtes Zeichen plus Schriftzug
// Das Zeichen ist einfarbig (currentColor) und ohne Innenzeichnung, damit es
// auch bei 24 Pixeln lesbar bleibt. Vorschau aller Größen: /marke
export type LogoVariante = "wortmarke" | "zeichen"

interface LogoProps {
  variante: LogoVariante
}

export default function Logo({ variante }: LogoProps) {
  return (
    <span className={`logo logo--${variante}`}>
      {variante === "zeichen" && <LogoZeichen className="logo__sign" />}
      <span className="logo__word">stonetree</span>
    </span>
  )
}

// Baumkrone aus drei Polstern, gebogener Stamm, Fels als Sockel.
// Eine einzige Fläche im 24er-Raster.
export function LogoZeichen({
  className,
  size,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="12.5" cy="4.6" rx="3.6" ry="2.1" />
      <ellipse cx="7.6" cy="8.6" rx="4.4" ry="2.3" />
      <ellipse cx="16.4" cy="8.2" rx="4.6" ry="2.4" />
      <path d="M11.1 16.5c-.2-2.3.9-3.3.6-5.1l-.5-1.9h2.2l.3 1.9c.3 2-.9 3-.6 5.1z" />
      <path d="M4.4 16h15.2l1.9 5.2c.1.4-.2.8-.6.8H3.1c-.4 0-.7-.4-.6-.8z" />
    </svg>
  )
}
