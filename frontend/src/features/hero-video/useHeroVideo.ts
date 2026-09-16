import { useEffect, useMemo, useRef, useState } from "react"
import type { SyntheticEvent } from "react"
import type { HeroClip } from "../../data/heroClips"
import { useVideoAllowed } from "./videoPolicy"

// Logik für das Hintergrundvideo im Hero. Zwei Videoelemente liegen
// übereinander: eines läuft, das andere hält den nächsten Clip bereit. Kurz vor
// dem Ende wird überblendet, danach lädt das ausgeblendete Element den
// übernächsten Clip. Bei nur einem Clip blendet der Clip in sich selbst über.
// Das ergibt eine Schleife ohne harten Schnitt, ganz ohne Sonderfall.

// Muss zur Übergangsdauer von .hero-clip in index.css passen.
export const FADE_MS = 800
// So viele Sekunden vor dem Ende lädt der nächste Clip vor.
const PRELOAD_LEAD_S = 4

type Slot = 0 | 1

const other = (slot: Slot): Slot => (slot === 0 ? 1 : 0)

export function useHeroVideo(clips: HeroClip[]) {
  const allowed = useVideoAllowed()
  const [failed, setFailed] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [inView, setInView] = useState(true)
  // Autoplay vom Browser verweigert: Standbild bleibt, Knopf zeigt Abspielen.
  const [blocked, setBlocked] = useState(false)

  const [active, setActive] = useState<Slot>(0)
  // Laufende Nummer je Element. Clip = Nummer modulo Anzahl der Clips. Eine
  // neue Nummer baut das Element neu auf und lädt damit den nächsten Clip.
  const [steps, setSteps] = useState<[number, number]>([0, 1])
  const [fadingFrom, setFadingFrom] = useState<Slot | null>(null)
  const [preloadNext, setPreloadNext] = useState(false)

  const mediaRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<[HTMLVideoElement | null, HTMLVideoElement | null]>(
    [null, null],
  )
  const setRefs = useMemo(
    () =>
      ([0, 1] as const).map((slot) => (el: HTMLVideoElement | null) => {
        // React setzt muted nur als Eigenschaft. iOS braucht das Attribut.
        if (el) el.defaultMuted = true
        videoRefs.current[slot] = el
      }),
    [],
  )

  const enabled = allowed && !failed && clips.length > 0
  const shouldPlay = enabled && inView && !userPaused

  // Außerhalb des Sichtbereichs anhalten, spart Akku und CPU.
  useEffect(() => {
    const el = mediaRef.current
    if (!enabled || !el) return
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [enabled])

  // Aktiven Clip starten oder anhalten. play() wird explizit aufgerufen, weil
  // manche Browser autoplay ohne Meldung ignorieren.
  useEffect(() => {
    const video = videoRefs.current[active]
    if (!enabled || !video) return
    if (!shouldPlay) {
      video.pause()
      return
    }
    video
      .play()
      .then(() => setBlocked(false))
      .catch(() => setBlocked(true))
  }, [enabled, shouldPlay, active, steps])

  // Nächsten Clip erst kurz vor dem Wechsel laden. Von preload="none" auf
  // "auto" allein startet nicht in jedem Browser einen Download.
  useEffect(() => {
    if (!preloadNext) return
    const standby = videoRefs.current[other(active)]
    if (standby && standby.readyState === HTMLMediaElement.HAVE_NOTHING) {
      standby.load()
    }
  }, [preloadNext, active])

  // Nach dem Überblenden bekommt das ausgeblendete Element den nächsten Clip.
  useEffect(() => {
    if (fadingFrom === null) return
    const id = window.setTimeout(() => {
      setSteps((s) => {
        const next: [number, number] = [s[0], s[1]]
        next[fadingFrom] = s[other(fadingFrom)] + 1
        return next
      })
      setFadingFrom(null)
    }, FADE_MS)
    return () => window.clearTimeout(id)
  }, [fadingFrom])

  function crossfade(from: Slot) {
    if (from !== active || fadingFrom !== null) return
    setPreloadNext(false)
    setFadingFrom(from)
    setActive(other(from))
  }

  // Überblendung startet FADE_MS vor dem Ende. Würde erst bei "ended"
  // geblendet, stünde der alte Clip währenddessen auf seinem letzten Bild.
  function handleTimeUpdate(slot: Slot, video: HTMLVideoElement) {
    if (slot !== active || !Number.isFinite(video.duration)) return
    const remaining = video.duration - video.currentTime
    if (remaining <= PRELOAD_LEAD_S) setPreloadNext(true)
    if (remaining <= FADE_MS / 1000) crossfade(slot)
  }

  function toggle() {
    const video = videoRefs.current[active]
    // Nach verweigertem Autoplay zählt der Klick als Nutzeraktion.
    if (blocked && video) {
      setUserPaused(false)
      video
        .play()
        .then(() => setBlocked(false))
        .catch(() => undefined)
      return
    }
    setUserPaused((paused) => !paused)
  }

  const slots = ([0, 1] as const).map((slot) => {
    const isActive = slot === active
    return {
      key: steps[slot],
      clip: clips[steps[slot] % clips.length],
      active: isActive,
      preload: isActive ? "metadata" : preloadNext ? "auto" : "none",
      ref: setRefs[slot],
      onTimeUpdate: (e: SyntheticEvent<HTMLVideoElement>) =>
        handleTimeUpdate(slot, e.currentTarget),
      // Rückfall, falls timeupdate das Ende verpasst hat (z. B. Tab im Hintergrund)
      onEnded: () => crossfade(slot),
    }
  })

  return {
    enabled,
    mediaRef,
    poster: clips[0] && { src: clips[0].poster, small: clips[0].posterSmall },
    slots,
    playing: shouldPlay && !blocked,
    toggle,
    // Fehler an der letzten Quelle: kein Format ließ sich abspielen.
    onSourceError: () => setFailed(true),
  }
}

export type HeroVideo = ReturnType<typeof useHeroVideo>
