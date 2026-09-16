import type { AufwandPunkt } from "../../data/aufwand"

// Reine Rechnung für das Säulendiagramm: aus Werten und Breite werden
// Positionen. Kein DOM, keine Farben. Die Darstellung liegt in der Komponente.

export interface Balken {
  index: number
  punkt: AufwandPunkt
  x: number
  y: number
  breite: number
  hoehe: number
}

export interface Tick {
  wert: number
  y: number
}

export interface Geometrie {
  breite: number
  hoehe: number
  plot: { links: number; oben: number; breite: number; hoehe: number }
  balken: Balken[]
  ticks: Tick[]
}

const RAND = { links: 46, oben: 28, rechts: 12, unten: 40 }
const MAX_BALKEN_BREITE = 24

// Nächster runder Schritt für die Achse (1, 2, 2,5 oder 5 mal Zehnerpotenz)
export function rundeSchritt(max: number, ziel = 4): number {
  const roh = max / ziel
  const potenz = 10 ** Math.floor(Math.log10(roh))
  const rest = roh / potenz
  const faktor = rest > 5 ? 10 : rest > 2.5 ? 5 : rest > 2 ? 2.5 : rest > 1 ? 2 : 1
  return faktor * potenz
}

export function berechneGeometrie(
  punkte: AufwandPunkt[],
  breite: number,
  hoehe: number,
): Geometrie {
  const maxWert = Math.max(...punkte.map((p) => p.wert))
  const schritt = rundeSchritt(maxWert)
  const obereGrenze = Math.ceil(maxWert / schritt) * schritt

  const plot = {
    links: RAND.links,
    oben: RAND.oben,
    breite: Math.max(0, breite - RAND.links - RAND.rechts),
    hoehe: Math.max(0, hoehe - RAND.oben - RAND.unten),
  }

  const band = plot.breite / punkte.length
  const balkenBreite = Math.min(MAX_BALKEN_BREITE, band * 0.6)

  const balken = punkte.map((punkt, index) => {
    const anteil = obereGrenze === 0 ? 0 : punkt.wert / obereGrenze
    const balkenHoehe = anteil * plot.hoehe
    return {
      index,
      punkt,
      x: plot.links + band * index + (band - balkenBreite) / 2,
      y: plot.oben + plot.hoehe - balkenHoehe,
      breite: balkenBreite,
      hoehe: balkenHoehe,
    }
  })

  const ticks: Tick[] = []
  for (let wert = 0; wert <= obereGrenze; wert += schritt) {
    ticks.push({
      wert,
      y: plot.oben + plot.hoehe - (wert / obereGrenze) * plot.hoehe,
    })
  }

  return { breite, hoehe, plot, balken, ticks }
}

// Säule mit abgerundeter Oberkante und geradem Fuß auf der Grundlinie
export function balkenPfad(balken: Balken, radius = 4): string {
  const r = Math.min(radius, balken.breite / 2, Math.max(0, balken.hoehe))
  const { x, y, breite: b, hoehe: h } = balken
  return [
    `M${x} ${y + h}`,
    `V${y + r}`,
    `a${r} ${r} 0 0 1 ${r} ${-r}`,
    `h${b - 2 * r}`,
    `a${r} ${r} 0 0 1 ${r} ${r}`,
    `V${y + h}`,
    "Z",
  ].join(" ")
}
