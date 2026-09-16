import type { HeroVideo } from "./useHeroVideo"

// Hintergrundebene des Hero, von hinten nach vorn: Standbild, die beiden
// Videoelemente, Abdunklung (.hero-media::after in index.css).
// Das Standbild steht immer da. Die Videos kommen erst dazu, wenn sie laden dürfen.
export default function HeroMedia({ video }: { video: HeroVideo }) {
  return (
    <div className="hero-media" ref={video.mediaRef} aria-hidden="true">
      {video.poster && (
        <img
          className="hero-poster"
          src={video.poster.src}
          srcSet={`${video.poster.small} 960w, ${video.poster.src} 1920w`}
          sizes="100vw"
          alt=""
        />
      )}

      {video.enabled &&
        video.slots.map((slot) => (
          <video
            key={slot.key}
            ref={slot.ref}
            className={slot.active ? "hero-clip is-active" : "hero-clip"}
            // Das wartende Element braucht sein Standbild erst kurz vor dem Wechsel
            poster={slot.preload === "none" ? undefined : slot.clip.poster}
            autoPlay={slot.active}
            muted
            playsInline
            preload={slot.preload}
            disablePictureInPicture
            tabIndex={-1}
            aria-hidden="true"
            onTimeUpdate={slot.onTimeUpdate}
            onEnded={slot.onEnded}
          >
            <source src={slot.clip.webm} type="video/webm" />
            <source
              src={slot.clip.mp4}
              type="video/mp4"
              onError={video.onSourceError}
            />
          </video>
        ))}
    </div>
  )
}
