import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

// Welcher Navigationspunkt ist gerade aktiv?
// Auf Unterseiten entscheidet die Adresse. Auf der Startseite entscheidet der
// Abschnitt, der gerade im oberen Drittel des Bildes steht.
export function useActiveNav(sectionIds: string[]): string | null {
  const { pathname } = useLocation()
  const onHome = pathname === "/"
  const [sichtbar, setSichtbar] = useState<string | null>(null)

  useEffect(() => {
    if (!onHome) return
    const elemente = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elemente.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const oberster = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0]
        if (oberster) setSichtbar(oberster.target.id)
      },
      { rootMargin: "-25% 0px -65% 0px" },
    )
    elemente.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [onHome, sectionIds])

  if (!onHome) {
    if (pathname.startsWith("/bereiche/")) return "expertise"
    if (pathname.startsWith("/karriere")) return "karriere"
    return null
  }
  return sichtbar
}
