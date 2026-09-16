// Zitat einer Person mit Porträt, Name und Rolle.
// Porträts sind schwarzweiß (Bildbehandlung "portrait").
interface QuoteProps {
  zitat: string
  name: string
  rolle: string
  image?: { src: string; alt: string }
}

export default function Quote({ zitat, name, rolle, image }: QuoteProps) {
  return (
    <figure className="quote">
      {image && (
        <img
          className="quote__img"
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
        />
      )}
      <blockquote className="quote__text">
        <p>„{zitat}“</p>
      </blockquote>
      <figcaption className="quote__caption">
        <span className="quote__name">{name}</span>
        <span className="quote__role">{rolle}</span>
      </figcaption>
    </figure>
  )
}
