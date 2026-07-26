import { useEffect, useState } from "react"

// Liefert true, sobald die Seite weiter als `threshold` Pixel gescrollt ist.
// Damit bekommt der Header beim Scrollen seinen dunklen Hintergrund.
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll() // einmal direkt pruefen (falls die Seite schon gescrollt geladen wird)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return scrolled
}
