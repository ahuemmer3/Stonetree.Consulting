import { useCallback, useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import type { MegaId } from "../../data/navigation"

// Steuert die Ausklappmenüs und das Handymenü im Header.
// Regeln: Escape schließt und setzt den Fokus zurück, ein Klick außerhalb
// schließt, ein Seitenwechsel schließt, bei offenem Handymenü scrollt die
// Seite dahinter nicht.
export function useHeaderMenus() {
  const [openMega, setOpenMega] = useState<MegaId | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const triggers = useRef(new Map<MegaId, HTMLButtonElement | null>())
  const location = useLocation()

  const closeAll = useCallback(() => {
    setOpenMega(null)
    setMobileOpen(false)
  }, [])

  const toggleMega = useCallback((id: MegaId) => {
    setOpenMega((current) => (current === id ? null : id))
  }, [])

  const registerTrigger = useCallback(
    (id: MegaId) => (el: HTMLButtonElement | null) => {
      triggers.current.set(id, el)
    },
    [],
  )

  // Seitenwechsel: Menü zu. Auch bei gleichem Pfad mit anderem Anker.
  useEffect(() => {
    closeAll()
  }, [location.pathname, location.hash, location.search, closeAll])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return
      if (openMega) triggers.current.get(openMega)?.focus()
      closeAll()
    }
    function onPointerDown(event: PointerEvent) {
      const header = headerRef.current
      if (header && !header.contains(event.target as Node)) closeAll()
    }
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [openMega, closeAll])

  // Hintergrund nicht mitscrollen lassen, solange das Handymenü offen ist
  useEffect(() => {
    if (!mobileOpen) return
    const vorher = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = vorher
    }
  }, [mobileOpen])

  return {
    headerRef,
    openMega,
    toggleMega,
    setOpenMega,
    registerTrigger,
    mobileOpen,
    toggleMobile: () => setMobileOpen((open) => !open),
    closeAll,
  }
}
