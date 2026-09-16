import { useEffect, useRef, useState } from "react"

// Liefert die aktuelle Breite eines Elements in Pixeln.
// Damit rechnet das Diagramm in echten Pixeln statt zu skalieren. So bleibt
// die Schrift auf schmalen Bildschirmen gleich groß.
export function useElementWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [breite, setBreite] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver(([eintrag]) => {
      setBreite(eintrag.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, breite }
}
