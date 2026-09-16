import { useEffect, useState } from "react"

// Entscheidet, ob das Hintergrundvideo überhaupt geladen wird. Ohne Video
// bleibt das Standbild stehen. Das ist ein gültiger Endzustand, kein Fehler.

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)"
// Unter 768 Pixeln bringt das Video wenig und kostet mobiles Datenvolumen.
const NARROW = "(max-width: 767.98px)"
const SLOW_CONNECTIONS = ["slow-2g", "2g", "3g"]

// Network Information API, gibt es nur in Chromium-Browsern.
interface NetworkInformation extends EventTarget {
  saveData?: boolean
  effectiveType?: string
}

function getConnection(): NetworkInformation | undefined {
  return (navigator as Navigator & { connection?: NetworkInformation })
    .connection
}

export function canLoadBackgroundVideo(): boolean {
  if (window.matchMedia(REDUCED_MOTION).matches) return false
  if (window.matchMedia(NARROW).matches) return false

  const connection = getConnection()
  if (connection?.saveData === true) return false
  if (
    connection?.effectiveType &&
    SLOW_CONNECTIONS.includes(connection.effectiveType)
  ) {
    return false
  }
  return true
}

// Beim ersten Render immer false. So lädt zuerst nur das Standbild und bleibt
// das LCP-Element. Geprüft wird erst, wenn die Seite fertig geladen ist, und
// erneut, wenn sich Fensterbreite, Systemeinstellung oder Verbindung ändern.
export function useVideoAllowed(): boolean {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    const update = () => setAllowed(canLoadBackgroundVideo())
    const queries = [REDUCED_MOTION, NARROW].map((q) => window.matchMedia(q))
    const connection = getConnection()

    function start() {
      update()
      queries.forEach((mq) => mq.addEventListener("change", update))
      connection?.addEventListener("change", update)
    }

    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })

    return () => {
      window.removeEventListener("load", start)
      queries.forEach((mq) => mq.removeEventListener("change", update))
      connection?.removeEventListener("change", update)
    }
  }, [])

  return allowed
}
