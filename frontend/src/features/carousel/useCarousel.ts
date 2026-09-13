import { useCallback, useEffect, useState } from "react"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"

// Reine Karussell-Logik: aktuelle Position, Weiterschalten, automatischer
// Durchlauf und Pause. Die Darstellung liegt in der jeweiligen Sektion.

// Wie viele Karten nebeneinander sichtbar sind. Die Grenzen müssen zu den
// Breakpoints in index.css passen (980 und 860 Pixel).
function readSlidesPerView(): number {
  if (window.matchMedia("(max-width: 860px)").matches) return 1
  if (window.matchMedia("(max-width: 980px)").matches) return 2
  return 3
}

export function useSlidesPerView() {
  const [perView, setPerView] = useState(readSlidesPerView)

  useEffect(() => {
    const onResize = () => setPerView(readSlidesPerView())
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return perView
}

interface UseCarouselOptions {
  count: number
  perView: number
  interval?: number
}

export function useCarousel({
  count,
  perView,
  interval = 6000,
}: UseCarouselOptions) {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const maxIndex = Math.max(0, count - perView)
  // Wird das Fenster breiter, darf die Position nicht über das Ende hinaus.
  const current = Math.min(index, maxIndex)

  const next = useCallback(() => {
    setIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : i + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setIndex((i) => (Math.min(i, maxIndex) <= 0 ? maxIndex : i - 1))
  }, [maxIndex])

  const goTo = useCallback(
    (target: number) => setIndex(Math.max(0, Math.min(target, maxIndex))),
    [maxIndex],
  )

  // Automatischer Durchlauf. Aus bei "Animationen reduzieren", bei Hover
  // oder Fokus im Karussell und wenn ohnehin alles sichtbar ist.
  useEffect(() => {
    if (reduced || paused || maxIndex === 0) return
    const id = window.setInterval(next, interval)
    return () => window.clearInterval(id)
  }, [reduced, paused, maxIndex, next, interval])

  return {
    index: current,
    maxIndex,
    next,
    prev,
    goTo,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  }
}
