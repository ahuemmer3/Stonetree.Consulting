// Die drei Bereiche.
//   slug   -> Adresse der Detailseite (/bereiche/<slug>)
//   anchor -> optionale id fuer die Navigation auf der Startseite (#research)
//   detail -> Inhalte der jeweiligen Detailseite
//
// Die Detailseiten sind bewusst knapp: ein Satz, drei Eckdaten, dann konkrete
// Leistungen als Reiter und Projektbeispiele. Unternehmen und Kennzahlen in
// den Beispielen sind Platzhalter, ein Hinweis dazu steht auf der Seite.

import type { Stat } from "../components/ui/StatRow"
import type { Metric } from "../components/ui/CardMetric"
import { publicUrl } from "../utils/publicUrl"

// Ein Abschnitt der Detailseite: eigene Überschrift plus Liste von Einträgen.
// Die Überschriften stehen bewusst in den Daten, weil sie je Bereich anders
// heißen ("Leistungen" passt nicht zum Research Lab).
export interface PillarBlock<T> {
  eyebrow: string
  title: string
  intro?: string
  items: T[]
}

// Eine konkrete Leistung, ein Anwendungsfall oder ein Forschungsvorhaben.
export interface PillarService {
  kicker: string
  title: string
  // genau ein Satz, die Karte zeigt höchstens drei Zeilen
  text: string
  themen: string[]
  // kurze Eckdaten wie Dauer, Systeme oder Ergebnis
  eckdaten?: { label: string; wert: string }[]
  // nur im Research Lab: Stand des Vorhabens
  status?: "laufend" | "abgeschlossen" | "geplant"
}

// Leistungsfeld, auf der Seite ein Reiter. Die id steht in der Adresse
// (?feld=sap) und im Ausklappmenü Expertise.
export interface PillarField {
  id: string
  label: string
  intro: string
  items: PillarService[]
}

// Projektbeispiel mit Kennzahl, Details aufklappbar.
export interface PillarCase {
  kicker: string
  title: string
  kennzahl: Metric
  text: string
  ausgangslage: string
  vorgehen: string
  umfang: string
}

// Schritt im Vorgehen, mit grober Dauer.
export interface PillarPhase {
  n: string
  title: string
  dauer: string
  text: string
}

// Einstiegsformat: Umfang, Dauer und was enthalten ist.
export interface PillarFormat {
  title: string
  dauer: string
  text: string
  enthalten: string[]
}

export interface PillarFaq {
  frage: string
  antwort: string
}

export interface PillarDetail {
  lead: string
  // ein bis zwei Sätze unter dem Seitenkopf
  intro: string
  facts: Stat[]
  services: PillarBlock<PillarField>
  cases: PillarBlock<PillarCase>
  phases: PillarBlock<PillarPhase>
  formats: PillarBlock<PillarFormat>
  faq: PillarBlock<PillarFaq>
}

export interface Pillar {
  id: string
  slug: string
  tag: string
  title: string
  image: string
  // beschreibt das Motiv für Vorlesesoftware
  imageAlt: string
  anchor?: string
  desc: string
  detail: PillarDetail
}

export const pillars: Pillar[] = [
  {
    id: "consulting",
    slug: "consulting",
    tag: "Consulting",
    title: "Consulting",
    image: publicUrl("images/expertise-beratung.jpg"),
    imageAlt:
      "Mann erklärt am Whiteboard, Kolleginnen und Kollegen hören zu und machen Notizen",
    desc: "SAP-Beratung, Logistik und Management für den Mittelstand. Wir planen den Umstieg auf S/4HANA, führen Logistik-Templates an mehreren Standorten ein und begleiten Strategie und Organisation bis in den Betrieb.",
    detail: {
      lead: "SAP, Logistik und Management aus einer Hand. Für Unternehmen, die nicht nur planen, sondern umstellen wollen.",
      intro:
        "Viele Mittelständler haben zwei Aufgaben zugleich: das Geschäft neu ausrichten und die SAP-Landschaft bis 2027 umstellen. Wir verbinden beides, mit Beraterinnen und Beratern, die Prozesse und Systeme gleichermaßen kennen.",
      facts: [
        { wert: "31.12.2027", label: "Ende der Standardwartung für SAP ECC 6.0" },
        { wert: "4", label: "Leistungsfelder, einzeln buchbar" },
        { wert: "Festpreis", label: "je Baustein statt Tagessätzen" },
      ],
      services: {
        eyebrow: "Leistungen",
        title: "Was wir konkret anbieten",
        intro:
          "Vier Leistungsfelder. Jedes lässt sich einzeln beauftragen oder zu einem Projekt verbinden.",
        items: [
          {
            id: "sap",
            label: "SAP-Beratung",
            intro:
              "Vom Umstiegsplan bis zum Go-live. Wir sind kein SAP-Partner, verkaufen keine Lizenzen und raten deshalb auch zur schlankeren Lösung.",
            items: [
              {
                kicker: "S/4HANA",
                title: "Umstieg auf S/4HANA planen",
                text: "Wir prüfen Ihr ECC-System, wählen den passenden Migrationsweg und legen einen Fahrplan mit Terminen und Budget fest.",
                eckdaten: [
                  { label: "Dauer", wert: "6 bis 8 Wochen" },
                  { label: "Ergebnis", wert: "Roadmap und Budget" },
                ],
                themen: ["Readiness Check", "Brownfield oder Greenfield", "Selektive Datenübernahme", "Business Case"],
              },
              {
                kicker: "Clean Core",
                title: "Eigenentwicklungen aufräumen",
                text: "Wir bewerten jede Eigenentwicklung: übernehmen, ersetzen oder stilllegen. Neue Erweiterungen entstehen außerhalb des SAP-Kerns.",
                eckdaten: [
                  { label: "Dauer", wert: "4 bis 6 Wochen" },
                  { label: "Ergebnis", wert: "bewertete Code-Liste" },
                ],
                themen: ["Custom-Code-Analyse", "SAP BTP", "ABAP Cloud", "Upgrade-Fähigkeit"],
              },
              {
                kicker: "Prozesse",
                title: "SAP-Prozesse verschlanken",
                text: "Wir messen Durchlaufzeiten in Einkauf, Vertrieb und Finanzen direkt in den SAP-Daten und beseitigen die größten Bremsen.",
                eckdaten: [
                  { label: "Dauer", wert: "ab 4 Wochen" },
                  { label: "Ergebnis", wert: "Maßnahmenliste" },
                ],
                themen: ["Order-to-Cash", "Procure-to-Pay", "Process Mining", "Stammdaten"],
              },
            ],
          },
          {
            id: "logistik",
            label: "Logistik und Supply Chain",
            intro:
              "Ein Standard für Lager, Versand und Transport an allen Standorten. Einmal sauber aufgebaut, dann Standort für Standort eingeführt.",
            items: [
              {
                kicker: "Template",
                title: "Logistik-Template aufbauen",
                text: "Mit Ihren Standorten entwickeln wir einen gemeinsamen Prozessstandard für Lager und Versand und bilden ihn in SAP ab.",
                eckdaten: [
                  { label: "Dauer", wert: "3 bis 4 Monate" },
                  { label: "Ergebnis", wert: "Template mit Prozessdoku" },
                ],
                themen: ["SAP EWM", "Fit-Gap-Analyse", "Prozessstandard", "Berechtigungen"],
              },
              {
                kicker: "Rollout",
                title: "Template an Standorten einführen",
                text: "Jeder weitere Standort übernimmt den Standard mit wenigen, begründeten Abweichungen. Wir planen, schulen und betreuen den Go-live vor Ort.",
                eckdaten: [
                  { label: "Dauer", wert: "6 bis 10 Wochen je Standort" },
                  { label: "Ergebnis", wert: "Go-live mit Hypercare" },
                ],
                themen: ["Rollout-Plan", "Datenmigration", "Key-User-Schulung", "Hypercare"],
              },
              {
                kicker: "Planung",
                title: "Bestände und Transporte optimieren",
                text: "Bessere Dispositionsregeln senken Bestände, eine Transportplanung mit gebündelten Touren senkt Frachtkosten.",
                eckdaten: [
                  { label: "Dauer", wert: "ab 6 Wochen" },
                  { label: "Ergebnis", wert: "neue Dispositionsregeln" },
                ],
                themen: ["Bestandsanalyse", "SAP TM", "Tourenplanung", "Sicherheitsbestände"],
              },
            ],
          },
          {
            id: "management",
            label: "Management und Strategie",
            intro:
              "Für Geschäftsführung und Beirat: klare Entscheidungen auf Basis belastbarer Zahlen.",
            items: [
              {
                kicker: "Strategie",
                title: "Strategie und Zielbild",
                text: "Wir ordnen Markt, Wettbewerb und eigene Stärken ein und formulieren ein Zielbild, das jede Führungskraft in zwei Sätzen wiedergeben kann.",
                themen: ["Marktanalyse", "Positionierung", "Zielbild", "Strategieklausur"],
              },
              {
                kicker: "Investition",
                title: "Business Case und Entscheidungsvorlage",
                text: "Standort, Maschine, neues Geschäftsfeld oder IT-Projekt: Wir rechnen die Optionen durch und bereiten die Entscheidung vor.",
                themen: ["Investitionsrechnung", "Szenarien", "Risikobewertung", "Beiratsvorlage"],
              },
              {
                kicker: "IT-Strategie",
                title: "Digital- und IT-Strategie",
                text: "Welche Systeme braucht das Unternehmen in fünf Jahren, und in welcher Reihenfolge? Wir erstellen eine Roadmap mit Budget.",
                themen: ["IT-Landschaft", "ERP-Auswahl", "Digitalisierungsroadmap", "IT-Budget"],
              },
            ],
          },
          {
            id: "organisation",
            label: "Organisation und Projekte",
            intro:
              "Damit Strategie und neue Systeme im Alltag ankommen und große Vorhaben im Plan bleiben.",
            items: [
              {
                kicker: "Organisation",
                title: "Target Operating Model",
                text: "Wir legen fest, wer was entscheidet und wie Bereiche zusammenarbeiten, passend zu den neuen Prozessen und Systemen.",
                themen: ["Aufbauorganisation", "Rollen", "Schnittstellen", "Kennzahlen"],
              },
              {
                kicker: "Projekte",
                title: "Projekt- und Programmmanagement",
                text: "Wir steuern große Vorhaben wie einen SAP-Umstieg mit festem Takt, klaren Entscheidungen und ehrlichem Statusbericht.",
                themen: ["PMO", "Steuerkreis", "Risikomanagement", "Budgetkontrolle"],
              },
              {
                kicker: "Wandel",
                title: "Change und Schulung",
                text: "Neue Abläufe scheitern selten an der Technik. Wir binden Mitarbeitende früh ein und schulen mit echten Vorgängen.",
                themen: ["Stakeholder", "Kommunikation", "Key-User-Konzept", "Schulung"],
              },
            ],
          },
        ],
      },
      cases: {
        eyebrow: "Projektbeispiele",
        title: "So sieht das in der Praxis aus",
        intro:
          "Drei Projekte, anonymisiert. Jeweils mit dem Ergebnis, das beim Auftraggeber geblieben ist.",
        items: [
          {
            kicker: "SAP EWM · Template-Rollout",
            title: "Maschinenbauer mit vier Werken",
            kennzahl: { wert: "4 Werke", label: "in 11 Monaten auf einem Logistik-Template" },
            text: "Ein Prozessstandard für Lager und Versand, Werk für Werk eingeführt, ohne Lieferstopp.",
            ausgangslage:
              "Jedes Werk hatte eigene Lagerprozesse und eigene SAP-Anpassungen. Kennzahlen ließen sich nicht vergleichen, jede Änderung kostete viermal.",
            vorgehen:
              "Template im Hauptwerk aufgebaut, Fit-Gap mit den drei weiteren Werken, danach Rollout im Abstand von zehn Wochen mit Hypercare vor Ort.",
            umfang: "Rund 900 Mitarbeitende, Laufzeit 11 Monate",
          },
          {
            kicker: "S/4HANA · Clean Core",
            title: "Automobilzulieferer",
            kennzahl: { wert: "62 %", label: "der Eigenentwicklungen stillgelegt oder ersetzt" },
            text: "Ein Umstiegsplan auf S/4HANA mit festem Budget und Termin vor dem Wartungsende.",
            ausgangslage:
              "Ein über 15 Jahre gewachsenes ECC-System mit rund 1.400 Eigenentwicklungen. Niemand wusste, welche davon noch genutzt wurden.",
            vorgehen:
              "Nutzung aller Eigenentwicklungen drei Monate lang gemessen, jede bewertet, Migrationsweg gewählt und Roadmap im Steuerkreis beschlossen.",
            umfang: "Rund 1.200 Mitarbeitende, Laufzeit 8 Wochen",
          },
          {
            kicker: "Strategie · Organisation",
            title: "Familienunternehmen im Großhandel",
            kennzahl: { wert: "3 von 9", label: "Geschäftsfeldern als Schwerpunkt festgelegt" },
            text: "Eine Strategie, die der Beirat beschlossen hat, und eine Organisation, die dazu passt.",
            ausgangslage:
              "Wachstum über viele Jahre, aber sinkende Marge. Die Geschäftsführung wollte vor der Nachfolge eine klare Richtung.",
            vorgehen:
              "Alle Geschäftsfelder nach Deckungsbeitrag und Markt bewertet, zwei Strategieklausuren, neue Organisation mit drei Sparten.",
            umfang: "Rund 350 Mitarbeitende, Laufzeit 5 Monate",
          },
        ],
      },
      phases: {
        eyebrow: "Vorgehen",
        title: "Wie ein Projekt abläuft",
        intro: "Vier Schritte. Nach jedem entscheiden Sie, ob es weitergeht.",
        items: [
          {
            n: "01",
            title: "Erstgespräch",
            dauer: "90 Minuten, kostenfrei",
            text: "Wir schärfen die Frage. Wenn wir nicht die Richtigen sind, sagen wir das.",
          },
          {
            n: "02",
            title: "Analyse",
            dauer: "2 bis 6 Wochen",
            text: "Zahlen, Prozesse und Systeme. Am Ende steht ein Lagebild, dem alle zustimmen.",
          },
          {
            n: "03",
            title: "Konzept und Fahrplan",
            dauer: "3 bis 6 Wochen",
            text: "Zielbild, Template oder Migrationsweg, gemeinsam mit Ihrem Team erarbeitet.",
          },
          {
            n: "04",
            title: "Umsetzung",
            dauer: "meist 3 bis 12 Monate",
            text: "Wir begleiten bis zum Go-live und bleiben in der Hypercare dabei.",
          },
        ],
      },
      formats: {
        eyebrow: "Einstieg",
        title: "Womit Sie anfangen können",
        items: [
          {
            title: "SAP-Check",
            dauer: "2 Wochen",
            text: "Kurze Bestandsaufnahme Ihres SAP-Systems mit klarer Empfehlung zum Umstieg.",
            enthalten: [
              "Systemanalyse mit Werkzeugen",
              "Gespräche mit Key-Usern",
              "Empfehlung zum Migrationsweg",
            ],
          },
          {
            title: "Strategie-Sparring",
            dauer: "ein halber Tag",
            text: "Ein vorbereitetes Gespräch zu einer konkreten Frage der Geschäftsführung.",
            enthalten: [
              "Vorbereitung anhand Ihrer Unterlagen",
              "Halbtägige Arbeitssitzung",
              "Notiz mit Einschätzung und Optionen",
            ],
          },
          {
            title: "Projekt",
            dauer: "ab 3 Monaten",
            text: "Von der Analyse bis zum Go-live, mit festem Ansprechpartner.",
            enthalten: [
              "Alle vier Schritte des Vorgehens",
              "Festpreis je Baustein",
              "Begleitung bis in die Hypercare",
            ],
          },
        ],
      },
      faq: {
        eyebrow: "Häufige Fragen",
        title: "Was Auftraggeber vorab wissen wollen",
        items: [
          {
            frage: "Wann sollten wir mit dem Umstieg auf S/4HANA beginnen?",
            antwort:
              "Möglichst bald. Die Standardwartung für SAP ECC 6.0 endet am 31.12.2027. Die verlängerte Wartung kostet einen Aufschlag und läuft bis Ende 2030. Ein Umstieg dauert im Mittelstand meist 12 bis 24 Monate, und erfahrene Beraterinnen und Berater werden knapper.",
          },
          {
            frage: "Sind Sie SAP-Partner?",
            antwort:
              "Nein, bewusst nicht. Wir verkaufen keine Lizenzen und können deshalb auch zu einer kleineren Lösung raten. In der Umsetzung arbeiten wir eng mit Ihrer IT und, wo nötig, mit Implementierungspartnern zusammen.",
          },
          {
            frage: "Wer arbeitet bei Ihnen tatsächlich am Projekt?",
            antwort:
              "Wer im Erstgespräch sitzt, arbeitet auch im Projekt. Wir setzen niemanden ein, der sich erst auf Ihre Kosten einarbeiten muss.",
          },
          {
            frage: "Wie wird abgerechnet?",
            antwort:
              "Zum Festpreis je Baustein, nicht über offene Tagessätze. Nach dem Erstgespräch bekommen Sie ein Angebot mit Umfang, Ergebnis und Preis.",
          },
        ],
      },
    },
  },
  {
    id: "automatisierung",
    slug: "ki-automatisierung",
    tag: "Automatisierung",
    title: "KI-Automatisierung",
    image: publicUrl("images/expertise-ai.jpg"),
    imageAlt: "Blick über die Schulter auf einen Bildschirm mit Programmcode",
    desc: "Wir automatisieren Abläufe mit KI, wo es sich rechnet: Rechnungseingang, Service-Postfach, Angebote und Prognosen. Vom ersten Pilot bis zum stabilen Betrieb in Ihren Systemen.",
    detail: {
      lead: "Konkrete Anwendungsfälle statt Experimente. Im Pilot nach wenigen Wochen, danach im täglichen Betrieb.",
      intro:
        "Wir fangen nicht bei der Technik an, sondern bei Ihren Abläufen. Am meisten bringt KI dort, wo Arbeit sich oft wiederholt, klaren Regeln folgt und die Daten schon digital vorliegen.",
      facts: [
        { wert: "4 bis 6 Wochen", label: "bis zum ersten Pilot im echten Betrieb" },
        { wert: "12", label: "Anwendungsfälle in vier Bereichen" },
        { wert: "EU", label: "Datenhaltung in Deutschland oder EU" },
      ],
      services: {
        eyebrow: "Anwendungsfälle",
        title: "Was wir automatisieren",
        intro:
          "Zwölf Anwendungsfälle, sortiert nach den Bereichen, die sie entlasten. Bei jedem Fall prüft ein Mensch, was unklar ist.",
        items: [
          {
            id: "finanzen",
            label: "Finanzen und Einkauf",
            intro:
              "Belege lesen, prüfen und buchen. Hier liegt im Mittelstand meist der schnellste Nutzen.",
            items: [
              {
                kicker: "Rechnungseingang",
                title: "Eingangsrechnungen automatisch verarbeiten",
                text: "Rechnungen aus Post und E-Mail werden gelesen, mit Bestellung und Wareneingang abgeglichen und vorkontiert ins ERP gebucht.",
                eckdaten: [
                  { label: "Pilot", wert: "4 bis 6 Wochen" },
                  { label: "Systeme", wert: "SAP, DATEV, E-Mail" },
                ],
                themen: ["Belegerkennung", "Dreiwegeabgleich", "Vorkontierung", "Freigabe"],
              },
              {
                kicker: "Bestellung",
                title: "Auftragsbestätigungen abgleichen",
                text: "Abweichungen bei Preis, Menge oder Termin fallen sofort auf, nicht erst bei der Rechnung.",
                eckdaten: [
                  { label: "Pilot", wert: "4 Wochen" },
                  { label: "Systeme", wert: "SAP MM, E-Mail" },
                ],
                themen: ["Abweichungsprüfung", "Lieferantenkontakt", "Terminüberwachung"],
              },
              {
                kicker: "Reisekosten",
                title: "Belege und Reisekosten prüfen",
                text: "Belege werden erfasst und gegen die Reiserichtlinie geprüft. Nur Auffälligkeiten landen noch bei der Buchhaltung.",
                eckdaten: [
                  { label: "Pilot", wert: "3 Wochen" },
                  { label: "Systeme", wert: "Reisekosten-Tool, DATEV" },
                ],
                themen: ["Richtlinienprüfung", "Belegerfassung", "Stichproben"],
              },
            ],
          },
          {
            id: "vertrieb",
            label: "Vertrieb und Service",
            intro:
              "Schneller antworten, ohne mehr Personal. Die KI sortiert und entwirft, Ihr Team entscheidet.",
            items: [
              {
                kicker: "Postfach",
                title: "Service-Postfach sortieren und vorbeantworten",
                text: "E-Mails werden nach Anliegen und Dringlichkeit sortiert, an die richtige Stelle geleitet und mit einem Antwortentwurf versehen.",
                eckdaten: [
                  { label: "Pilot", wert: "4 Wochen" },
                  { label: "Systeme", wert: "Outlook, CRM, Tickets" },
                ],
                themen: ["Klassifikation", "Priorisierung", "Antwortentwürfe"],
              },
              {
                kicker: "Angebot",
                title: "Angebote schneller erstellen",
                text: "Aus Anfrage, Preisliste und früheren Angeboten entsteht ein Entwurf, den der Vertrieb nur noch prüft.",
                eckdaten: [
                  { label: "Pilot", wert: "6 Wochen" },
                  { label: "Systeme", wert: "ERP, CRM" },
                ],
                themen: ["Anfrage auslesen", "Artikelzuordnung", "Kalkulation"],
              },
              {
                kicker: "Kundenservice",
                title: "Assistent für Kundenanfragen",
                text: "Ein Chat auf Ihrer Website beantwortet Fragen zu Lieferstatus, Ersatzteilen und Dokumenten und übergibt alles Weitere an Ihr Team.",
                eckdaten: [
                  { label: "Pilot", wert: "6 bis 8 Wochen" },
                  { label: "Systeme", wert: "Website, ERP" },
                ],
                themen: ["Lieferstatus", "Ersatzteile", "Übergabe an Menschen"],
              },
            ],
          },
          {
            id: "produktion",
            label: "Produktion und Logistik",
            intro:
              "Planen mit Prognosen statt Bauchgefühl, prüfen mit Kamera statt Lupe.",
            items: [
              {
                kicker: "Prognose",
                title: "Bedarf und Bestände vorhersagen",
                text: "Aus Absatzhistorie, Saison und offenen Aufträgen entsteht eine Prognose, die Disposition und Einkauf direkt nutzen.",
                eckdaten: [
                  { label: "Pilot", wert: "6 bis 8 Wochen" },
                  { label: "Systeme", wert: "SAP, Excel" },
                ],
                themen: ["Absatzprognose", "Sicherheitsbestand", "Disposition"],
              },
              {
                kicker: "Qualität",
                title: "Sichtprüfung mit Bildverarbeitung",
                text: "Eine Kamera an der Linie erkennt Oberflächenfehler und sortiert aus. Grenzfälle entscheidet weiterhin ein Mensch.",
                eckdaten: [
                  { label: "Pilot", wert: "8 bis 10 Wochen" },
                  { label: "Systeme", wert: "Kamera, MES" },
                ],
                themen: ["Fehlererkennung", "Trainingsdaten", "Prüfprotokoll"],
              },
              {
                kicker: "Wareneingang",
                title: "Lieferscheine automatisch erfassen",
                text: "Lieferscheine werden fotografiert, gelesen und gegen die Bestellung gebucht. Das Lager spart sich das Abtippen.",
                eckdaten: [
                  { label: "Pilot", wert: "4 Wochen" },
                  { label: "Systeme", wert: "SAP EWM, Scanner" },
                ],
                themen: ["Belegerkennung", "Wareneingang", "Abweichungen"],
              },
            ],
          },
          {
            id: "wissen",
            label: "Wissen und Verwaltung",
            intro:
              "Wissen, das in Dokumenten und Köpfen steckt, schnell auffindbar machen.",
            items: [
              {
                kicker: "Wissensassistent",
                title: "Firmenwissen durchsuchbar machen",
                text: "Ein Assistent beantwortet Fragen aus Handbüchern, Richtlinien und Projektunterlagen, immer mit Quellenangabe.",
                eckdaten: [
                  { label: "Pilot", wert: "4 bis 6 Wochen" },
                  { label: "Systeme", wert: "SharePoint, Laufwerke" },
                ],
                themen: ["Suche mit Quellen", "Berechtigungen", "Betrieb in der EU"],
              },
              {
                kicker: "Verträge",
                title: "Verträge prüfen",
                text: "Verträge werden gegen Ihre Vorgaben geprüft. Abweichende Klauseln, Fristen und Haftungsgrenzen stehen markiert in einer Übersicht.",
                eckdaten: [
                  { label: "Pilot", wert: "6 Wochen" },
                  { label: "Systeme", wert: "Dokumentenablage" },
                ],
                themen: ["Klauselprüfung", "Fristen", "Ampelbewertung"],
              },
              {
                kicker: "Besprechungen",
                title: "Protokolle und Aufgaben erstellen",
                text: "Aus Besprechungen entstehen Protokolle mit Aufgaben und Verantwortlichen, auf Wunsch direkt im Projekttool.",
                eckdaten: [
                  { label: "Pilot", wert: "2 bis 3 Wochen" },
                  { label: "Systeme", wert: "Teams, Projekttool" },
                ],
                themen: ["Protokoll", "Aufgabenliste", "Datenschutz"],
              },
            ],
          },
        ],
      },
      cases: {
        eyebrow: "Projektbeispiele",
        title: "Was im Betrieb herauskommt",
        intro:
          "Drei Fälle, die heute im Alltag laufen. Gemessen an echten Vorgängen, nicht an einer Vorführung.",
        items: [
          {
            kicker: "Rechnungseingang",
            title: "Technischer Großhändler",
            kennzahl: { wert: "78 %", label: "der Rechnungen ohne manuellen Eingriff gebucht" },
            text: "Rund 3.000 Eingangsrechnungen im Monat laufen größtenteils ohne Abtippen durch.",
            ausgangslage:
              "Drei Mitarbeiterinnen erfassten Rechnungen von Hand. Skonto ging verloren, weil Freigaben zu lange dauerten.",
            vorgehen:
              "Pilot mit den 20 größten Lieferanten, danach Ausweitung auf alle. Unklare Fälle gehen mit Begründung an die Buchhaltung.",
            umfang: "Rund 400 Mitarbeitende, Laufzeit 4 Monate",
          },
          {
            kicker: "Service-Postfach",
            title: "Anlagenbauer",
            kennzahl: { wert: "45 %", label: "kürzere Zeit bis zur ersten Antwort" },
            text: "Anfragen landen sofort beim richtigen Team, mit einem Antwortentwurf zum Prüfen.",
            ausgangslage:
              "Ein zentrales Postfach mit 250 E-Mails am Tag, von Hand sortiert. Dringende Störungsmeldungen gingen unter.",
            vorgehen:
              "Kategorien mit dem Service festgelegt, an 6.000 alten E-Mails getestet, erst Sortierung, danach Antwortentwürfe.",
            umfang: "Rund 600 Mitarbeitende, Laufzeit 3 Monate",
          },
          {
            kicker: "Wissensassistent",
            title: "Hersteller von Messtechnik",
            kennzahl: { wert: "2.400", label: "Dokumente für den Vertrieb durchsuchbar" },
            text: "Der technische Vertrieb findet Antworten aus Handbüchern und Datenblättern selbst, mit Quelle.",
            ausgangslage:
              "Fachfragen von Kunden gingen an zwei erfahrene Ingenieure. Die Antwort dauerte oft Tage.",
            vorgehen:
              "Dokumente bereinigt und mit Berechtigungen versehen, Assistent auf einem Server in Deutschland betrieben, Antworten nur mit Quellenangabe.",
            umfang: "Rund 250 Mitarbeitende, Laufzeit 10 Wochen",
          },
        ],
      },
      phases: {
        eyebrow: "Vorgehen",
        title: "Wie ein Vorhaben abläuft",
        intro: "Erst der Nutzen, dann die Technik.",
        items: [
          {
            n: "01",
            title: "Screening",
            dauer: "2 Wochen",
            text: "Wir sehen uns Ihre Abläufe an und sammeln Kandidaten, sortiert nach Hebel.",
          },
          {
            n: "02",
            title: "Machbarkeit",
            dauer: "2 bis 3 Wochen",
            text: "Datenlage, Schnittstellen, Rechtsrahmen und Aufwand für die besten zwei bis drei Fälle.",
          },
          {
            n: "03",
            title: "Pilot",
            dauer: "4 bis 10 Wochen",
            text: "Ein Fall wird gebaut und im echten Betrieb gemessen. Danach entscheiden Zahlen.",
          },
          {
            n: "04",
            title: "Rollout und Betrieb",
            dauer: "laufend",
            text: "Ausweiten auf weitere Fälle, Übergabe an Ihr Team, Wartung nach Absprache.",
          },
        ],
      },
      formats: {
        eyebrow: "Einstieg",
        title: "Womit Sie anfangen können",
        items: [
          {
            title: "KI-Potenzialanalyse",
            dauer: "3 Wochen",
            text: "Wo lohnt sich Automatisierung bei Ihnen überhaupt?",
            enthalten: [
              "Aufnahme der Abläufe eines Bereichs",
              "Bewertete Liste der Anwendungsfälle",
              "Empfehlung für den ersten Fall",
            ],
          },
          {
            title: "Pilot",
            dauer: "4 bis 10 Wochen",
            text: "Ein Anwendungsfall, echt gebaut und gemessen. Fester Umfang, fester Preis.",
            enthalten: [
              "Datencheck und Aufbau",
              "Messung an echten Vorgängen",
              "Entscheidungsvorlage für den Rollout",
            ],
          },
          {
            title: "Umsetzung und Betrieb",
            dauer: "ab 3 Monaten",
            text: "Vom bestätigten Fall zur Lösung, die im Alltag trägt.",
            enthalten: [
              "Integration in bestehende Systeme",
              "Dokumentation nach EU AI Act",
              "Schulung und Übergabe",
            ],
          },
        ],
      },
      faq: {
        eyebrow: "Häufige Fragen",
        title: "Was vor dem Start meistens gefragt wird",
        items: [
          {
            frage: "Brauchen wir dafür eigene KI-Fachleute?",
            antwort:
              "Nein. Sie brauchen jemanden, der den Ablauf kennt, und jemanden aus der IT für die Zugänge. Alles Weitere bringen wir mit und übergeben es dokumentiert.",
          },
          {
            frage: "Wo liegen unsere Daten?",
            antwort:
              "In Rechenzentren in Deutschland oder der EU. Wo nötig, laufen die Modelle in Ihrer eigenen Umgebung. Was mit welchen Daten passiert, halten wir vorher schriftlich fest.",
          },
          {
            frage: "Was passiert, wenn die KI einen Fehler macht?",
            antwort:
              "Unklare Fälle gehen an einen Menschen, statt durchzurutschen. Jeder Vorgang ist protokolliert und im Nachhinein nachvollziehbar.",
          },
          {
            frage: "Was verlangt der EU AI Act von uns?",
            antwort:
              "Das hängt vom Anwendungsfall ab. Für die meisten Automatisierungen genügen eine saubere Einstufung, eine nachvollziehbare Dokumentation und benannte Verantwortliche. Diese Unterlagen entstehen bei uns im Projekt mit.",
          },
        ],
      },
    },
  },
  {
    id: "research",
    slug: "research-lab",
    anchor: "research",
    tag: "Research",
    title: "Research Lab",
    image: publicUrl("images/expertise-research.jpg"),
    imageAlt: "Drei Personen besprechen etwas an einem Tisch mit Laptop und Notizen",
    desc: "Unser Labor für angewandte Forschung: KI-Entwicklung, SAP-Optimierung und Automatisierung. Was sich im Lab bewährt, setzen wir in Kundenprojekten ein.",
    detail: {
      lead: "Wir erproben neue Verfahren, bevor wir sie empfehlen. Schwerpunkte sind KI-Entwicklung und SAP-Optimierung.",
      intro:
        "Im Lab untersuchen wir Fragen, für die im Projektalltag keine Zeit bleibt. Jedes Vorhaben hat eine klare Frage, einen Maßstab und ein Ergebnis, das wir veröffentlichen oder in Projekte übernehmen.",
      facts: [
        { wert: "9", label: "Vorhaben in drei Forschungsfeldern" },
        { wert: "6", label: "Veröffentlichungen seit März 2026" },
        { wert: "offen", label: "geteilt, auch Fehlschläge" },
      ],
      services: {
        eyebrow: "Forschungsfelder",
        title: "Woran wir forschen",
        intro:
          "Drei Felder mit je drei Vorhaben. Der Stand zeigt, was läuft, was abgeschlossen ist und was als Nächstes kommt.",
        items: [
          {
            id: "ki-entwicklung",
            label: "KI-Entwicklung",
            intro:
              "Wie kommen Sprachmodelle sicher und bezahlbar in mittelständische Unternehmen?",
            items: [
              {
                status: "abgeschlossen",
                kicker: "Sprachmodelle",
                title: "Kleine Modelle für Fachaufgaben",
                text: "Klassifizieren kleine, eigens trainierte Sprachmodelle Belege so gut wie große Cloud-Modelle? Ja, bei einem Bruchteil der Kosten.",
                eckdaten: [
                  { label: "Laufzeit", wert: "Jan bis Jun 2026" },
                  { label: "Ergebnis", wert: "im Projekteinsatz" },
                ],
                themen: ["Fine-Tuning", "Belegklassifikation", "Kostenvergleich"],
              },
              {
                status: "laufend",
                kicker: "Lokaler Betrieb",
                title: "KI im eigenen Rechenzentrum",
                text: "Welche offenen Modelle laufen auf bezahlbarer Hardware im eigenen Haus, und wie gut sind sie im Vergleich?",
                eckdaten: [
                  { label: "Laufzeit", wert: "seit Mai 2026" },
                  { label: "Partner", wert: "Hochschule" },
                ],
                themen: ["Open-Source-Modelle", "On-Premise", "Benchmark"],
              },
              {
                status: "laufend",
                kicker: "Wissenssuche",
                title: "Verlässliche Antworten mit Quelle",
                text: "Wir messen, wie oft Wissensassistenten falsch antworten, und testen Verfahren, die das verringern.",
                eckdaten: [
                  { label: "Laufzeit", wert: "seit Juli 2026" },
                  { label: "Ergebnis", wert: "Testverfahren" },
                ],
                themen: ["RAG", "Halluzinationen", "Bewertungsmethodik"],
              },
            ],
          },
          {
            id: "sap-optimierung",
            label: "SAP-Optimierung",
            intro:
              "Wie lassen sich SAP-Systeme mit Daten und KI schneller verbessern und umstellen?",
            items: [
              {
                status: "abgeschlossen",
                kicker: "Process Mining",
                title: "Prozessanalyse direkt aus SAP-Daten",
                text: "Aus Belegfluss und Änderungsprotokollen rekonstruieren wir Abläufe und finden Schleifen und Wartezeiten, ohne teure Spezialsoftware.",
                eckdaten: [
                  { label: "Laufzeit", wert: "2025" },
                  { label: "Ergebnis", wert: "Werkzeug im Einsatz" },
                ],
                themen: ["Order-to-Cash", "Belegfluss", "Durchlaufzeiten"],
              },
              {
                status: "laufend",
                kicker: "Clean Core",
                title: "KI-gestützte Analyse von Eigenentwicklungen",
                text: "Ein Sprachmodell liest ABAP-Code, erklärt ihn und schlägt vor, ob er nach S/4HANA übernommen, ersetzt oder stillgelegt wird.",
                eckdaten: [
                  { label: "Laufzeit", wert: "seit März 2026" },
                  { label: "Partner", wert: "Hochschule" },
                ],
                themen: ["ABAP", "Code-Analyse", "S/4HANA-Umstieg"],
              },
              {
                status: "geplant",
                kicker: "Stammdaten",
                title: "Stammdatenqualität automatisch prüfen",
                text: "Dubletten und lückenhafte Material- und Kundenstammdaten erkennen, bevor sie in ein neues System wandern.",
                eckdaten: [{ label: "Start", wert: "Anfang 2027" }],
                themen: ["Dublettenerkennung", "Datenqualität", "Migration"],
              },
            ],
          },
          {
            id: "agenten",
            label: "Automatisierung und Agenten",
            intro:
              "Wie viel Eigenständigkeit verträgt ein automatisierter Ablauf, und wie bleibt er nachvollziehbar?",
            items: [
              {
                status: "laufend",
                kicker: "KI-Agenten",
                title: "Agenten mit festen Freigabegrenzen",
                text: "KI-Agenten erledigen mehrstufige Aufgaben selbst, bis zu einer festgelegten Grenze. Darüber entscheidet ein Mensch.",
                eckdaten: [
                  { label: "Laufzeit", wert: "seit Juni 2026" },
                  { label: "Ergebnis", wert: "Prototyp" },
                ],
                themen: ["Agenten", "Mensch in der Schleife", "Protokollierung"],
              },
              {
                status: "abgeschlossen",
                kicker: "Regulierung",
                title: "Nachweise nach dem EU AI Act",
                text: "Welche Dokumentation verlangt der AI Act für typische Automatisierungen im Mittelstand? Daraus entstand eine Vorlage für unsere Projekte.",
                eckdaten: [
                  { label: "Laufzeit", wert: "2026" },
                  { label: "Ergebnis", wert: "Vorlage" },
                ],
                themen: ["AI Act", "Risikoeinstufung", "Dokumentation"],
              },
              {
                status: "geplant",
                kicker: "Wirtschaftlichkeit",
                title: "Nutzen über zwei Jahre messen",
                text: "Aufbauend auf unserem Paper vom August 2026 prüfen wir, welche Automatisierungen ihren Nutzen auch nach zwei Jahren halten.",
                eckdaten: [{ label: "Start", wert: "Ende 2026" }],
                themen: ["Langzeitstudie", "Nutzenmessung", "Betriebskosten"],
              },
            ],
          },
        ],
      },
      cases: {
        eyebrow: "Transfer",
        title: "Was aus dem Lab in Projekte ging",
        intro:
          "Forschung zählt bei uns erst, wenn sie beim Kunden ankommt. Drei Beispiele.",
        items: [
          {
            kicker: "KI-Entwicklung · Rechnungseingang",
            title: "Kleines Modell statt Cloud-Dienst",
            kennzahl: { wert: "70 %", label: "geringere Betriebskosten als mit einem großen Cloud-Modell" },
            text: "Das im Lab trainierte Modell klassifiziert heute Belege beim Großhändler aus der KI-Automatisierung.",
            ausgangslage:
              "Ein großes Cloud-Modell lieferte gute Ergebnisse, war im Betrieb aber teuer und verarbeitete Daten außerhalb der EU.",
            vorgehen:
              "Kleines Modell im Lab mit anonymisierten Belegen trainiert, gegen das Cloud-Modell gemessen, danach in den Projektbetrieb übernommen.",
            umfang: "Lab-Vorhaben 6 Monate, Übernahme ins Projekt 4 Wochen",
          },
          {
            kicker: "SAP-Optimierung · S/4HANA",
            title: "Code-Analyse beim Zulieferer",
            kennzahl: { wert: "3 Wochen", label: "für die Bewertung von 1.400 Eigenentwicklungen" },
            text: "Der Prototyp aus dem Lab hat die Bewertung im S/4HANA-Projekt des Automobilzulieferers deutlich beschleunigt.",
            ausgangslage:
              "Jede Eigenentwicklung von Hand zu lesen und zu bewerten hätte mehrere Monate gedauert.",
            vorgehen:
              "Das Sprachmodell erstellte zu jedem Programm eine Erklärung und einen Vorschlag. Entwicklerinnen und Entwickler prüften und entschieden.",
            umfang: "Einsatz im Consulting-Projekt, 3 Wochen",
          },
          {
            kicker: "Process Mining · Consulting",
            title: "Durchlaufzeiten im Vertrieb",
            kennzahl: { wert: "5 Tage", label: "kürzere Durchlaufzeit je Auftrag" },
            text: "Die Analyse aus SAP-Daten zeigte, wo Aufträge liegen blieben, und lieferte die Grundlage für neue Freigaberegeln.",
            ausgangslage:
              "Aufträge brauchten vom Eingang bis zur Auslieferung im Schnitt 14 Tage. Wo die Zeit verloren ging, wusste niemand genau.",
            vorgehen:
              "Belegfluss aus SAP ausgewertet, drei Schleifen in der Kreditprüfung gefunden, Freigaberegeln mit dem Vertrieb angepasst.",
            umfang: "Werkzeug aus dem Lab, Einsatz im Projekt 5 Wochen",
          },
        ],
      },
      phases: {
        eyebrow: "Vorgehen",
        title: "Wie wir im Lab arbeiten",
        intro: "Der Maßstab für die Antwort steht vorher fest.",
        items: [
          {
            n: "01",
            title: "Frage schärfen",
            dauer: "1 Woche",
            text: "Aus einem Thema wird eine beantwortbare Frage mit festem Maßstab.",
          },
          {
            n: "02",
            title: "Aufbau",
            dauer: "2 bis 4 Wochen",
            text: "Der kleinstmögliche Versuchsaufbau, der die Frage beantworten kann.",
          },
          {
            n: "03",
            title: "Messen und auswerten",
            dauer: "2 Wochen",
            text: "Ergebnisse messen und einordnen, samt den Grenzen des Aufbaus.",
          },
          {
            n: "04",
            title: "Übertragen und teilen",
            dauer: "laufend",
            text: "Was trägt, geht in Projekte. Was allgemein interessant ist, veröffentlichen wir.",
          },
        ],
      },
      formats: {
        eyebrow: "Mitarbeit",
        title: "Wie Sie daran teilhaben können",
        items: [
          {
            title: "Frage einbringen",
            dauer: "kostenfrei",
            text: "Sie schildern eine offene Frage aus Ihrer Praxis. Passt sie ins Lab, nehmen wir sie auf.",
            enthalten: [
              "Kurzes Gespräch zur Fragestellung",
              "Rückmeldung, ob und wann wir sie aufgreifen",
              "Ergebnis vor der Veröffentlichung",
            ],
          },
          {
            title: "Gemeinsames Vorprojekt",
            dauer: "4 bis 8 Wochen",
            text: "Wir untersuchen eine Frage mit Ihrem Team und Ihren Daten, unter Vertraulichkeit.",
            enthalten: [
              "Versuchsaufbau und Auswertung",
              "Veröffentlichung nur mit Ihrer Freigabe",
              "Übergang in ein Projekt, falls es trägt",
            ],
          },
          {
            title: "Hochschulkooperation",
            dauer: "ab einem Semester",
            text: "Längerfristige Zusammenarbeit mit Abschlussarbeiten und gemeinsamen Veröffentlichungen.",
            enthalten: [
              "Gemeinsame Forschungsfrage",
              "Betreuung von Abschlussarbeiten",
              "Gemeinsame Veröffentlichung",
            ],
          },
        ],
      },
      faq: {
        eyebrow: "Häufige Fragen",
        title: "Was zum Lab gefragt wird",
        items: [
          {
            frage: "Können wir eine eigene Frage einbringen?",
            antwort:
              "Ja. Wenn die Frage über den Einzelfall hinausgeht und eine Antwort erreichbar scheint, nehmen wir sie auf. Das Ergebnis bekommen Sie vor der Veröffentlichung.",
          },
          {
            frage: "Was passiert mit unseren Daten?",
            antwort:
              "Daten aus Kooperationen bleiben vertraulich. Veröffentlicht wird nur, was Sie freigegeben haben, und nur anonymisiert.",
          },
          {
            frage: "Was passiert mit Versuchen, die nicht funktionieren?",
            antwort:
              "Auch die schreiben wir auf. Zu wissen, was nicht trägt, spart in Projekten oft mehr Geld als der nächste gelungene Versuch.",
          },
          {
            frage: "Wie kommen die Ergebnisse bei Kunden an?",
            antwort:
              "Was sich bewährt, wird Teil unseres Vorgehens in Consulting und KI-Automatisierung. Auftraggeber profitieren davon, ohne selbst Forschung zu bezahlen.",
          },
        ],
      },
    },
  },
]
