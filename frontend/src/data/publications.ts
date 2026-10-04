// Publikationen aus dem Research Lab. Neueste zuerst.
// pdfUrl ist optional: sobald gesetzt, wird aus dem Badge "PDF folgt" ein
// Download-Link. Inhalte sind Platzhalter, aber fachlich stimmig.

import { publicUrl } from "../utils/publicUrl"

export type PublicationType =
  | "PAPER"
  | "RESEARCH NOTE"
  | "PRAXISBERICHT"
  | "WHITEPAPER"

export interface Publication {
  id: string
  type: PublicationType
  title: string
  teaser: string
  date: string
  topics: string[]
  image: string
  // beschreibt das Motiv für Vorlesesoftware
  imageAlt: string
  pdfUrl?: string
}

export const publications: Publication[] = [
  {
    id: "pub-rechnet-sich",
    pdfUrl: publicUrl("pdf/pub-rechnet-sich.pdf"),
    type: "PAPER",
    title:
      "Wann sich end-to-end-Automatisierung im Mittelstand rechnet, und wann nicht",
    teaser:
      "Eine Kosten-Nutzen-Betrachtung anhand von Durchlaufzeiten, Fehlerquoten und Wartungsaufwand. Mit Kriterien, wann sich der durchgängige Ansatz lohnt und wann eine Teillösung genügt.",
    date: "August 2026",
    topics: ["KI-Automatisierung", "Prozesse"],
    image: publicUrl("images/pub-1.jpg"),
    imageAlt: "Zwei Personen besprechen Zahlen an einem Laptop",
  },
  {
    id: "pub-llm-freigabe",
    type: "RESEARCH NOTE",
    title: "Grenzen von Large Language Models in regulierten Freigabeprozessen",
    teaser:
      "Wo Sprachmodelle in Prüf- und Freigabeprozessen an Grenzen stoßen, welche Fehlerarten auftreten und wie sich Nachvollziehbarkeit sicherstellen lässt.",
    date: "Juli 2026",
    topics: ["KI", "Regulatorik", "EU AI Act"],
    image: publicUrl("images/pub-3.jpg"),
    imageAlt: "Team schaut gemeinsam auf einen Bildschirm und diskutiert",
  },
  {
    id: "pub-prozessdaten",
    pdfUrl: publicUrl("pdf/pub-prozessdaten.pdf"),
    type: "PAPER",
    title:
      "Prozessdaten als Grundlage für KI-gestützte Entscheidungen in kleinen Organisationen",
    teaser:
      "Wie kleine Organisationen aus vorhandenen Prozessdaten belastbare Entscheidungsgrundlagen gewinnen, auch ohne großes Datenteam.",
    date: "Juni 2026",
    topics: ["Daten", "KI-Automatisierung"],
    image: publicUrl("images/pub-2.jpg"),
    imageAlt: "Frau erklärt Notizen auf Haftzetteln an einer Wand",
  },
  {
    id: "pub-wirkung-2026",
    type: "WHITEPAPER",
    title: "KI im Mittelstand: Wo Automatisierung 2026 wirklich Wirkung zeigt",
    teaser:
      "Eine nüchterne Bestandsaufnahme, welche Anwendungsfälle heute schon Zeit und Geld sparen und welche man besser noch abwartet.",
    date: "Mai 2026",
    topics: ["KI-Automatisierung", "Mittelstand"],
    image: publicUrl("images/pub-4.jpg"),
    imageAlt: "Mehrere Personen arbeiten an einem langen Tisch im Büro",
  },
  {
    id: "pub-insellösung",
    type: "PRAXISBERICHT",
    title: "Von der Insellösung zum durchgängigen Ablauf",
    teaser:
      "Ein anonymisierter Einblick, wie aus mehreren Einzeltools ein durchgängiger Ablauf wurde, inklusive der Stolpersteine unterwegs.",
    date: "April 2026",
    topics: ["Automatisierung", "Prozesse"],
    image: publicUrl("images/pub-1.jpg"),
    imageAlt: "Zwei Personen besprechen Zahlen an einem Laptop",
  },
  {
    id: "pub-datenqualitaet",
    type: "RESEARCH NOTE",
    title:
      "Datenqualität zuerst: Warum Automatisierung ohne saubere Prozessdaten scheitert",
    teaser:
      "Warum Datenqualität die eigentliche Voraussetzung für Automatisierung ist und wie man sie mit überschaubarem Aufwand verbessert.",
    date: "März 2026",
    topics: ["Daten", "Prozesse"],
    image: publicUrl("images/pub-3.jpg"),
    imageAlt: "Team schaut gemeinsam auf einen Bildschirm und diskutiert",
  },
]
