import { useEffect, useRef, useState } from "react"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"

// Logik für ein stummes Hintergrundvideo: ob es überhaupt gezeigt wird,
// Anhalten und Abspielen, und Rückfall auf das Standbild bei Fehlern.
//
// Kein Video bei "Animationen reduzieren" und bei aktivem Datensparmodus,
// dann bleibt das Foto stehen.
function prefersSaveData(): boolean {
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean }
  }).connection
  return Boolean(connection?.saveData)
}

export function useBackgroundVideo() {
  const reduced = usePrefersReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  const [playing, setPlaying] = useState(true)

  const enabled = !reduced && !failed && !prefersSaveData()

  // Autoplay kann vom Browser verweigert werden; dann den Zustand angleichen.
  useEffect(() => {
    const video = videoRef.current
    if (!enabled || !video) return
    video.play().catch(() => setPlaying(false))
  }, [enabled])

  function toggle() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return {
    enabled,
    videoRef,
    playing,
    toggle,
    onError: () => setFailed(true),
  }
}
