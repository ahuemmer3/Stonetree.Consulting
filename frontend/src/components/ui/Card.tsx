import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import Reveal from "./Reveal"

// Gemeinsame Karte für Bereiche, Kundenprojekte, Publikationen, Formate und
// Einstiegswege. Aufbau von oben: Bild (3:2), Kicker, Titel, Hervorhebung,
// Text (höchstens drei Zeilen), weitere Inhalte, Link mit Pfeil.
export interface CardLink {
  label: string
  // interne Seite (Router) oder normale Adresse, z. B. ein PDF
  to?: string
  href?: string
}

interface CardProps {
  title: string
  kicker?: string
  text?: string
  image?: { src: string; alt: string }
  link?: CardLink
  // steht zwischen Titel und Text, z. B. eine Kennzahl
  highlight?: ReactNode
  // steht unter dem Text, z. B. eine Liste oder aufklappbare Details
  children?: ReactNode
  // Die ganze Karte wird klickbar. Nur setzen, wenn children keine eigenen
  // Bedienelemente enthält.
  stretchLink?: boolean
  // Abstufung der Kartenfläche: 1 weiß, 2 helles Grau, 3 etwas dunkleres Grau.
  // Für Reihen, in denen die Karten sich voneinander abheben sollen.
  ton?: 1 | 2 | 3
  revealDelay?: number
}

export default function Card({
  title,
  kicker,
  text,
  image,
  link,
  highlight,
  children,
  stretchLink = true,
  ton,
  revealDelay = 0,
}: CardProps) {
  const classes = [
    "card",
    ton && `card--ton-${ton}`,
    link && "card--linked",
    link && stretchLink && "card--stretched",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Reveal as="article" className={classes} delay={revealDelay}>
      {image && (
        <div className="card__media">
          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        </div>
      )}
      <div className="card__body">
        {kicker && <span className="kicker card__kicker">{kicker}</span>}
        <h3 className="card__title">{title}</h3>
        {highlight}
        {text && <p className="card__text">{text}</p>}
        {children}
        {link && <CardLinkView link={link} title={title} />}
      </div>
    </Reveal>
  )
}

function CardLinkView({ link, title }: { link: CardLink; title: string }) {
  const content = (
    <>
      {link.label}
      {/* Vorlesesoftware hört, wohin der Link führt */}
      <span className="sr-only">: {title}</span>
      <span className="arrow" aria-hidden="true">
        &rarr;
      </span>
    </>
  )
  return link.to ? (
    <Link className="card__link" to={link.to}>
      {content}
    </Link>
  ) : (
    <a className="card__link" href={link.href}>
      {content}
    </a>
  )
}
