// Inhalte der Karriereseite (/karriere). Personen, Zitate und Angaben sind
// Platzhalter für den Prototyp. Ein Hinweis dazu steht auf der Seite.
import type { JobArt } from "./jobs"
import { publicUrl } from "../utils/publicUrl"

export interface KarrierePunkt {
  title: string
  text: string
}

export interface Einstiegsweg {
  kicker: string
  title: string
  text: string
  image: string
  alt: string
  // Auf diese Art wird die Stellenliste gefiltert, wenn man den Link klickt.
  art: JobArt
}

export interface BewerbungsSchritt {
  n: string
  title: string
  text: string
  dauer: string
}

export interface Einblick {
  name: string
  rolle: string
  zitat: string
  image: string
  alt: string
}

export interface KarriereFrage {
  frage: string
  antwort: string
}

export interface Ansprechperson {
  name: string
  rolle: string
  text: string
  email: string
  image: string
  alt: string
}

export const karriereHero = {
  kicker: "Karriere",
  title: "Beraten, bauen, forschen. Mit Ergebnis.",
  lead: "Bei stonetree arbeiten Sie in kleinen Teams an Projekten, die im Mittelstand tatsächlich laufen.",
}

export const warumPunkte: KarrierePunkt[] = [
  {
    title: "Kleine Teams, direkte Verantwortung",
    text: "Sie arbeiten vom ersten Tag an mit Auftraggebern. Entscheidungen fallen im Team und nicht drei Ebenen weiter oben.",
  },
  {
    title: "Arbeit mit sichtbarem Ergebnis",
    text: "Unsere Kunden sind Mittelständler, Banken und Verwaltungen. Was Sie mit aufbauen, sehen Sie wenige Wochen später im Betrieb.",
  },
  {
    title: "Ein eigenes Research Lab",
    text: "Neue Methoden probieren wir zuerst selbst aus. Wer Lust auf Forschung hat, bekommt dafür feste Zeit.",
  },
  {
    title: "Umsetzung statt nur Konzept",
    text: "Wir hören nicht beim Foliensatz auf. Sie begleiten Projekte bis zur laufenden Lösung.",
  },
]

export const einstiegswege: Einstiegsweg[] = [
  {
    kicker: "3 bis 6 Monate",
    title: "Praktikum",
    text: "Sie arbeiten in einem echten Projekt mit. Eine feste Ansprechperson begleitet Sie. Pflichtpraktikum und freiwilliges Praktikum sind möglich.",
    image: publicUrl("images/karriere-praktikum.jpg"),
    alt: "Zwei junge Menschen arbeiten an einem Versuchsaufbau in einer Werkstatt",
    art: "Praktikum",
  },
  {
    kicker: "10 bis 20 Stunden pro Woche",
    title: "Werkstudium",
    text: "Sie arbeiten neben dem Studium in einem unserer drei Bereiche. Die Stunden richten sich nach Ihrem Semesterplan. Eine Abschlussarbeit kann folgen.",
    image: publicUrl("images/karriere-werkstudium.jpg"),
    alt: "Frau arbeitet am Laptop neben einer Roboteranlage in einer Werkhalle",
    art: "Werkstudium",
  },
  {
    kicker: "Vollzeit nach dem Abschluss",
    title: "Berufseinstieg",
    text: "Sie steigen direkt in Projekte ein. In den ersten Monaten lernen Sie unsere Methoden in einem festen Programm. Beratungserfahrung brauchen Sie nicht.",
    image: publicUrl("images/karriere-einstieg.jpg"),
    alt: "Mann erklärt dem Team Notizen an einem Whiteboard",
    art: "Berufseinstieg",
  },
  {
    kicker: "Ab drei Jahren Erfahrung",
    title: "Berufserfahrene",
    text: "Sie bringen Erfahrung aus Beratung, Industrie oder IT mit. Bei uns leiten Sie Projekte und bauen Themen auf. Die Wege zur Entscheidung sind kurz.",
    image: publicUrl("images/karriere-erfahren.jpg"),
    alt: "Zwei Kollegen besprechen ein Bauteil an der Werkbank",
    art: "Berufserfahren",
  },
]

export const researchArgument = {
  kicker: "Research Lab",
  title: "Forschung gehört bei uns zum Job",
  text: "Große Beratungen trennen Forschung und Projekte meist streng. Bei uns liegen beide nah beieinander. Fragen aus Kundenprojekten gehen ins Lab, und Ergebnisse aus dem Lab kommen zurück in die Projekte.",
  punkte: [
    {
      title: "Abschlussarbeiten",
      text: "Wir betreuen Bachelor- und Masterarbeiten mit echten Daten aus der Praxis. Das Thema stimmen wir mit Ihrem Lehrstuhl ab.",
    },
    {
      title: "Kooperationen mit Hochschulen",
      text: "Mit Lehrstühlen arbeiten wir an gemeinsamen Fragen. Sie können daran mitarbeiten, auch neben einem Projekt.",
    },
    {
      title: "Gemeinsame Veröffentlichungen",
      text: "Was sich bewährt, schreiben wir auf. Wer mitgearbeitet hat, steht auch mit Namen auf dem Paper.",
    },
  ] satisfies KarrierePunkt[],
}

export const bewerbungsSchritte: BewerbungsSchritt[] = [
  {
    n: "01",
    title: "Bewerbung eingegangen",
    text: "Sie bekommen eine Bestätigung mit Ihrer Ansprechperson. Jede Bewerbung lesen wir selbst, ohne automatische Vorauswahl.",
    dauer: "innerhalb von 3 Tagen",
  },
  {
    n: "02",
    title: "Erstes Gespräch",
    text: "Wir lernen uns kennen und sprechen über Ihre Erfahrung. Sie erfahren, wie ein Projekt bei uns abläuft.",
    dauer: "45 Minuten per Video",
  },
  {
    n: "03",
    title: "Fallbeispiel oder Arbeitsprobe",
    text: "Sie bearbeiten eine kleine Aufgabe aus unserem Alltag. Uns interessiert, wie Sie vorgehen, nicht ob alles perfekt ist.",
    dauer: "1 bis 2 Stunden",
  },
  {
    n: "04",
    title: "Kennenlernen im Team",
    text: "Sie treffen die Menschen, mit denen Sie arbeiten würden. Fragen stellen dürfen Sie hier genauso wie wir.",
    dauer: "ein halber Tag vor Ort",
  },
  {
    n: "05",
    title: "Angebot",
    text: "Passt es für beide Seiten, bekommen Sie ein schriftliches Angebot. Passt es nicht, sagen wir Ihnen auch warum.",
    dauer: "innerhalb einer Woche",
  },
]

export const einblicke: Einblick[] = [
  {
    name: "Lena Hartmann",
    rolle: "Consultant, Consulting",
    zitat: "Im ersten Monat war ich schon beim Kunden in der Produktion. Danach wusste ich genau, wofür unsere Analyse gebraucht wird.",
    image: publicUrl("images/team-1.jpg"),
    alt: "Porträt von Lena Hartmann",
  },
  {
    name: "Jonas Weber",
    rolle: "KI-Engineer, KI-Automatisierung",
    zitat: "Meine Lösung zur Belegprüfung läuft seit einem halben Jahr im Betrieb. Dass ich sie bis zur Übergabe begleiten konnte, war mir wichtig.",
    image: publicUrl("images/team-2.jpg"),
    alt: "Porträt von Jonas Weber",
  },
  {
    name: "Mira Yilmaz",
    rolle: "Research Associate, Research Lab",
    zitat: "Ich schreibe an einem Paper und arbeite parallel in einem Kundenprojekt. Die Fragen aus dem Projekt landen direkt in der Forschung.",
    image: publicUrl("images/team-3.jpg"),
    alt: "Porträt von Mira Yilmaz",
  },
]

export const karriereFragen: KarriereFrage[] = [
  {
    frage: "Wie läuft die Bewerbung ab?",
    antwort: "In fünf Schritten, von der Bestätigung bis zum Angebot. Meist dauert das drei bis vier Wochen. Die Schritte stehen weiter oben auf dieser Seite.",
  },
  {
    frage: "Kann ich im Homeoffice arbeiten?",
    antwort: "Ja. Zwei bis drei Tage pro Woche sind üblich. Workshops und Termine beim Kunden finden vor Ort statt.",
  },
  {
    frage: "Wie viel bin ich unterwegs?",
    antwort: "Weniger als in großen Beratungen. Unsere Kunden sitzen meist in der Region, viele Termine sind Tagesreisen. Übernachtungen sind die Ausnahme.",
  },
  {
    frage: "Brauche ich Beratungserfahrung?",
    antwort: "Nein. Wichtiger sind analytisches Denken und Freude an konkreten Problemen. Unsere Methoden lernen Sie im Einstiegsprogramm.",
  },
  {
    frage: "Kann ich meine Abschlussarbeit bei stonetree schreiben?",
    antwort: "Ja. Im Research Lab betreuen wir Bachelor- und Masterarbeiten. Das Thema stimmen wir mit Ihrem Lehrstuhl ab, offene Themen stehen in der Stellenliste.",
  },
  {
    frage: "Kann ich mich initiativ bewerben?",
    antwort: "Gerne. Schreiben Sie uns kurz, was Sie mitbringen und was Sie suchen. Wir melden uns auch, wenn gerade keine passende Stelle offen ist.",
  },
]

export const ansprechperson: Ansprechperson = {
  name: "Sarah Brandt",
  rolle: "Recruiting und Personal",
  text: "Sie haben Fragen zu einer Stelle oder wissen noch nicht, welcher Einstieg passt? Schreiben Sie mir einfach.",
  email: "karriere@stonetree.example",
  image: publicUrl("images/team-kontakt.jpg"),
  alt: "Porträt von Sarah Brandt",
}
