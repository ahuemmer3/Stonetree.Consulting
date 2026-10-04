import type { KeyboardEvent } from "react"
import { useSearchParams } from "react-router-dom"

// Logik für Reiter (Tabs) nach dem WAI-ARIA-Muster: Pfeiltasten wechseln den
// Reiter, Pos1 und Ende springen an den Anfang und das Ende.
// Der aktive Reiter steht in der Adresse (z. B. ?feld=sap), damit ein Link
// direkt auf ihn zeigen kann. Der erste Reiter ist der Standard und braucht
// keinen Parameter.

const TASTEN_SCHRITT: Record<string, number> = {
  ArrowRight: 1,
  ArrowDown: 1,
  ArrowLeft: -1,
  ArrowUp: -1,
}

export function tabId(id: string): string {
  return `tab-${id}`
}

export function panelId(id: string): string {
  return `panel-${id}`
}

export function useTabs(ids: string[], parameter: string) {
  const [params, setParams] = useSearchParams()
  const ausAdresse = params.get(parameter)
  const aktiv = ausAdresse && ids.includes(ausAdresse) ? ausAdresse : ids[0]

  function waehle(id: string) {
    setParams(
      (vorher) => {
        const neu = new URLSearchParams(vorher)
        if (id === ids[0]) neu.delete(parameter)
        else neu.set(parameter, id)
        return neu
      },
      // Reiterwechsel soll weder den Verlauf füllen noch die Seite verschieben
      { replace: true, preventScrollReset: true },
    )
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const index = ids.indexOf(aktiv)
    let ziel: number | null = null
    if (event.key in TASTEN_SCHRITT) {
      ziel = (index + TASTEN_SCHRITT[event.key] + ids.length) % ids.length
    } else if (event.key === "Home") {
      ziel = 0
    } else if (event.key === "End") {
      ziel = ids.length - 1
    }
    if (ziel === null) return

    event.preventDefault()
    waehle(ids[ziel])
    document.getElementById(tabId(ids[ziel]))?.focus()
  }

  return { aktiv, waehle, handleKeyDown }
}
