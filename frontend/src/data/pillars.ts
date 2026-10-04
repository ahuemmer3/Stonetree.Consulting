// Die drei Bereiche.
//   slug   -> Adresse der Detailseite (/bereiche/<slug>)
//   anchor -> optionale id fuer die Navigation auf der Startseite (#research)
//   detail -> Inhalte der jeweiligen Detailseite

import { publicUrl } from "../utils/publicUrl"

export interface PillarPoint {
  k: string
  title: string
  text: string
}

// Ein Abschnitt der Detailseite: eigene Überschrift plus Liste von Einträgen.
// Die Überschriften stehen bewusst in den Daten, weil sie je Bereich anders
// heißen ("Was wir liefern" passt nicht zum Research Lab).
export interface PillarBlock<T> {
  eyebrow: string
  title: string
  intro?: string
  items: T[]
}

// Typische Ausgangslage: kurzer Titel, zwei Sätze Beschreibung.
export interface PillarSituation {
  title: string
  text: string
}

// Leistungsbaustein: nummeriert, mit dem Ergebnis, das dabei herauskommt.
export interface PillarOffering {
  n: string
  title: string
  text: string
  ergebnis: string
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
  body: string[]
  points: PillarPoint[]
  tasks?: string[]
  situations: PillarBlock<PillarSituation>
  offerings: PillarBlock<PillarOffering>
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
    desc: "Wir begleiten mittelständische Unternehmen bei Strategie und Ausrichtung, mit Entscheidungen, die über einzelne Quartale hinaus tragen. Von der Marktanalyse über die Positionierung bis zur Umsetzung, immer nah an den Zahlen und am Geschäft.",
    detail: {
      lead: "Strategie und Ausrichtung für den Mittelstand. Von der ersten Analyse bis zur Umsetzung im Betrieb.",
      body: [
        "Viele gute Unternehmen wissen genau, was sie können. Nur nicht immer, wohin der Weg führen soll. Genau hier setzen wir an. Wir arbeiten nah an den Zahlen und am Markt und liefern statt allgemeiner Empfehlungen einen klaren Weg: Wo steht Ihr Unternehmen heute, wohin soll es, und welche Schritte führen dorthin.",
        "Dabei verbinden wir Marktanalyse, Wettbewerbsbeobachtung und die eigenen Stärken zu einer Positionierung, die belastbar ist und sich tatsächlich umsetzen lässt. Wir denken in Entscheidungen, nicht in Foliensätzen, und machen jeden Vorschlag an konkreten Zahlen fest.",
        "Weil Strategie erst im Alltag zählt, hört unsere Arbeit nicht beim Konzept auf. Wir begleiten die Umsetzung, priorisieren gemeinsam und sorgen dafür, dass aus dem Plan messbare Fortschritte werden.",
      ],
      points: [
        {
          k: "Analyse",
          title: "Markt & Wettbewerb",
          text: "Wir verschaffen uns ein klares Bild von Markt, Wettbewerb und den eigenen Stärken. Auf Basis von Daten, nicht von Bauchgefühl.",
        },
        {
          k: "Positionierung",
          title: "Klare Ausrichtung",
          text: "Aus der Analyse leiten wir eine eindeutige Positionierung und messbare Ziele ab, die zum Unternehmen passen.",
        },
        {
          k: "Umsetzung",
          title: "Vom Plan zur Tat",
          text: "Wir begleiten die Umsetzung Schritt für Schritt und machen Fortschritt an konkreten Kennzahlen fest.",
        },
      ],
      tasks: [
        "Markt, Wettbewerb und eigene Stärken nüchtern einordnen",
        "Ein Zielbild entwickeln, das zum Unternehmen passt",
        "Vorhaben nach Nutzen und Aufwand priorisieren",
        "Einen Fahrplan mit Schritten und Verantwortlichkeiten aufsetzen",
        "Die Umsetzung begleiten und an Kennzahlen ausrichten",
        "Entscheidungen vorbereiten, damit sie belastbar sind",
      ],
      situations: {
        eyebrow: "Ausgangslage",
        title: "Wann Unternehmen auf uns zukommen",
        intro:
          "Die Anlässe ähneln sich, quer durch Branchen und Größen. Vier davon begegnen uns besonders oft.",
        items: [
          {
            title: "Das Geschäft läuft, die Richtung fehlt",
            text: "Die Auftragsbücher sind voll. Trotzdem kann niemand im Haus in zwei Sätzen sagen, womit das Unternehmen in fünf Jahren sein Geld verdient.",
          },
          {
            title: "Zu viele Vorhaben auf einmal",
            text: "Auf der Liste stehen zwanzig Themen. Was zuerst kommt, entscheidet am Ende die Dringlichkeit statt der Nutzen.",
          },
          {
            title: "Eine große Entscheidung steht an",
            text: "Ein Standort, eine Investition, ein neuer Markt. Die Entscheidung ist absehbar, die Zahlengrundlage dafür ist dünn.",
          },
          {
            title: "Die Strategie kommt im Alltag nicht an",
            text: "Das Zielbild ist beschlossen und sauber dokumentiert. Im Tagesgeschäft merkt davon niemand etwas.",
          },
        ],
      },
      offerings: {
        eyebrow: "Leistungsbausteine",
        title: "Was wir konkret liefern",
        intro:
          "Die Bausteine lassen sich einzeln beauftragen oder zu einem Projekt verbinden. Jeder endet mit einem Ergebnis, das im Haus bleibt.",
        items: [
          {
            n: "01",
            title: "Standortbestimmung",
            text: "Wir sehen uns Zahlen, Kunden, Kostenstruktur und Abläufe an und sprechen mit den Menschen, die das Geschäft täglich machen.",
            ergebnis: "Ein nüchternes Bild der Ausgangslage, das intern trägt.",
          },
          {
            n: "02",
            title: "Markt und Wettbewerb",
            text: "Wer bewegt sich in Ihrem Markt, mit welchem Angebot, zu welchem Preis? Wir werten aus, was verfügbar ist, und ergänzen es um Gespräche.",
            ergebnis: "Eine Einordnung Ihrer Position und der freien Felder.",
          },
          {
            n: "03",
            title: "Zielbild und Positionierung",
            text: "Aus der Analyse wird eine Aussage: wofür Sie stehen, für wen, und wogegen Sie sich abgrenzen.",
            ergebnis:
              "Ein Zielbild in Sätzen, die jede Führungskraft wiedergeben kann.",
          },
          {
            n: "04",
            title: "Priorisierung und Business Case",
            text: "Jedes Vorhaben wird nach Nutzen, Aufwand und Risiko bewertet und durchgerechnet, auch das, was besser liegen bleibt.",
            ergebnis: "Eine begründete Reihenfolge statt einer Wunschliste.",
          },
          {
            n: "05",
            title: "Umsetzungsfahrplan",
            text: "Pakete, Reihenfolge, Meilensteine und Verantwortliche. So genau, dass am Montag jemand anfangen kann.",
            ergebnis: "Ein Fahrplan mit Terminen und Namen.",
          },
          {
            n: "06",
            title: "Umsetzungsbegleitung",
            text: "Wir bleiben im festen Takt dabei, bereiten Entscheidungen vor und steuern nach, wenn sich Annahmen als falsch erweisen.",
            ergebnis: "Fortschritt, der an Kennzahlen sichtbar wird.",
          },
        ],
      },
      phases: {
        eyebrow: "Vorgehen",
        title: "Wie ein Projekt abläuft",
        intro:
          "Vier Schritte, die aufeinander aufbauen. Nach jedem Schritt entscheiden Sie, ob es weitergeht.",
        items: [
          {
            n: "01",
            title: "Erstgespräch",
            dauer: "90 Minuten, kostenfrei",
            text: "Wir hören zu und schärfen die Frage. Wenn wir nicht die Richtigen dafür sind, sagen wir das.",
          },
          {
            n: "02",
            title: "Analyse",
            dauer: "3 bis 5 Wochen",
            text: "Zahlen, Markt und Gespräche im Haus. Am Ende steht ein Bild der Lage, dem alle Beteiligten zustimmen.",
          },
          {
            n: "03",
            title: "Zielbild und Fahrplan",
            dauer: "3 bis 4 Wochen",
            text: "In Arbeitsterminen mit Ihrem Team statt im stillen Kämmerlein. Was wir vorschlagen, wird gemeinsam geprüft.",
          },
          {
            n: "04",
            title: "Umsetzung und Nachsteuern",
            dauer: "meist 6 bis 12 Monate",
            text: "Wir begleiten die ersten Pakete, bis Ihr Team den Takt selbst hält.",
          },
        ],
      },
      formats: {
        eyebrow: "Einstieg",
        title: "Womit Sie anfangen können",
        intro:
          "Nicht jede Frage braucht gleich ein Projekt. Drei Formate, je nachdem wie weit die Frage gereift ist.",
        items: [
          {
            title: "Sparring",
            dauer: "ein halber Tag",
            text: "Ein strukturiertes Gespräch zu einer konkreten Frage, mit Vorbereitung und schriftlicher Einschätzung.",
            enthalten: [
              "Vorbereitung anhand Ihrer Unterlagen",
              "Halbtägige Arbeitssitzung",
              "Notiz mit Einschätzung und Optionen",
            ],
          },
          {
            title: "Standortbestimmung",
            dauer: "4 bis 6 Wochen",
            text: "Der kompakte Einstieg: Wo steht das Unternehmen, wo liegt der größte Hebel, was kommt zuerst.",
            enthalten: [
              "Analyse von Zahlen und Markt",
              "Gespräche im Haus",
              "Priorisierte Themenliste",
              "Abschlusspräsentation für die Geschäftsführung",
            ],
          },
          {
            title: "Strategie und Umsetzung",
            dauer: "ab 3 Monaten",
            text: "Das vollständige Vorgehen von der Analyse bis zur begleiteten Umsetzung.",
            enthalten: [
              "Alle vier Schritte des Vorgehens",
              "Zielbild und Umsetzungsfahrplan",
              "Begleitung der ersten Pakete",
              "Fester Ansprechpartner über die Laufzeit",
            ],
          },
        ],
      },
      faq: {
        eyebrow: "Häufige Fragen",
        title: "Was Auftraggeber vorab wissen wollen",
        items: [
          {
            frage: "Wer arbeitet bei Ihnen tatsächlich am Projekt?",
            antwort:
              "Wer im Erstgespräch sitzt, arbeitet auch im Projekt. Wir setzen niemanden ein, der sich erst in Ihr Geschäft einarbeiten muss, während Sie dafür zahlen.",
          },
          {
            frage: "Bekommen wir am Ende nur einen Foliensatz?",
            antwort:
              "Sie bekommen eine Entscheidungsgrundlage und einen Fahrplan. Uns ist lieber, wir begleiten die ersten Pakete der Umsetzung, als dass wir einen Abschlussbericht übergeben.",
          },
          {
            frage: "Ab welcher Unternehmensgröße lohnt sich das?",
            antwort:
              "Unsere Auftraggeber haben meist zwischen 50 und 500 Mitarbeitende. Darunter arbeiten wir eher in den kurzen Formaten, weil ein großes Projekt selten passt.",
          },
          {
            frage: "Wie viel Zeit kostet das unser Team?",
            antwort:
              "In der Analyse ein bis zwei Stunden je Gesprächspartner, dazu halbtägige Arbeitstermine für die Kernrunde. Mehr brauchen wir nicht.",
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
    imageAlt:
      "Blick über die Schulter auf einen Bildschirm mit Programmcode",
    desc: "Wir bringen Künstliche Intelligenz dort zum Einsatz, wo sie messbaren Nutzen bringt. Wir automatisieren Abläufe gezielt, ohne unnötige Komplexität und ohne Technik um ihrer selbst willen.",
    detail: {
      lead: "Künstliche Intelligenz und Automatisierung dort, wo sie im Mittelstand messbaren Nutzen bringen.",
      body: [
        "Nicht jedes Problem braucht KI. Aber viele Abläufe im Mittelstand kosten unnötig Zeit und Geld. Wir schauen zuerst genau hin: Wo entstehen Wartezeiten, Doppelarbeit und Fehler? Erst dann setzen wir Automatisierung und KI genau an diesen Stellen ein. Am besten eignen sich Abläufe, die sich oft wiederholen, klaren Regeln folgen und auf einer digitalen Datenbasis stehen.",
        "Technik ist für uns Mittel zum Zweck. Jede Lösung muss sich an einem klaren Ergebnis messen lassen: schneller, günstiger oder zuverlässiger. Wir wählen Werkzeuge nach Nutzen aus, nicht nach Trend, und achten darauf, dass sie zu den vorhandenen Systemen passen. Ein beeindruckender Prototyp reicht uns nicht. Entscheidend ist, ob eine Lösung im täglichen Betrieb verlässlich läuft.",
        "Damit die Lösung nicht mit dem Projekt endet, denken wir den Betrieb von Anfang an mit: verständlich dokumentiert, wartbar und so gebaut, dass Ihr Team damit arbeiten kann. Wo KI mitentscheidet, achten wir auf Nachvollziehbarkeit. Seit August 2026 verlangt der EU AI Act dafür eine belastbare Dokumentation, gerade bei Systemen, die eigenständig handeln.",
      ],
      points: [
        {
          k: "Potenzial",
          title: "Aufwand sichtbar machen",
          text: "Wir finden die Abläufe, in denen Automatisierung den größten Hebel hat, und rechnen den Nutzen vorher durch.",
        },
        {
          k: "Umsetzung",
          title: "Passende Werkzeuge",
          text: "Wir wählen die Technik nach Nutzen aus und binden sie sauber in die bestehende Systemlandschaft ein.",
        },
        {
          k: "Betrieb",
          title: "Verlässlich im Alltag",
          text: "Lösungen, die im täglichen Betrieb stabil laufen, wartbar bleiben und vom Team getragen werden.",
        },
      ],
      tasks: [
        "Abläufe aufnehmen und Engpässe sichtbar machen",
        "Prüfen, wo Automatisierung den größten Hebel hat",
        "Passende Werkzeuge auswählen und sauber einbinden",
        "Prozesse end-to-end automatisieren statt einzelner Tools",
        "Lösungen wartbar und nachvollziehbar aufbauen",
        "Den Betrieb übergeben, sodass das Team damit arbeiten kann",
      ],
      situations: {
        eyebrow: "Ausgangslage",
        title: "Wann Automatisierung ein Thema wird",
        intro:
          "Vier Situationen, in denen sich ein genauerer Blick lohnt. Sie kommen selten allein.",
        items: [
          {
            title: "Dieselbe Handarbeit, jeden Monat",
            text: "Daten aus einem System holen, prüfen, in ein anderes übertragen. Der Ablauf ist allen bekannt, er kostet nur jedes Mal wieder Zeit.",
          },
          {
            title: "Der Pilot überzeugt, den Betrieb erreicht er nie",
            text: "Ein Prototyp lief beeindruckend. Für den Schritt in den Alltag fehlten Anbindung, Zuständigkeit und Wartung.",
          },
          {
            title: "KI-Werkzeuge ohne Plan",
            text: "Mehrere Abteilungen nutzen jeweils eigene Tools. Niemand kann sagen, was das bringt und wo die Daten landen.",
          },
          {
            title: "Unsicherheit bei Datenschutz und Regulierung",
            text: "Der Nutzen wäre klar. Aber niemand will die Verantwortung für Datenschutz und EU AI Act übernehmen.",
          },
        ],
      },
      offerings: {
        eyebrow: "Leistungsbausteine",
        title: "Was wir konkret liefern",
        intro:
          "Aufeinander aufbauend, aber einzeln beauftragbar. Nach jedem Baustein können Sie aussteigen und haben trotzdem ein Ergebnis in der Hand.",
        items: [
          {
            n: "01",
            title: "Potenzialanalyse",
            text: "Wir nehmen die Abläufe eines Bereichs auf und schätzen je Kandidat Zeitaufwand, Fehlerquote und möglichen Automatisierungsgrad.",
            ergebnis:
              "Eine bewertete Liste von Anwendungsfällen, sortiert nach Hebel.",
          },
          {
            n: "02",
            title: "Machbarkeit und Datencheck",
            text: "Bevor gebaut wird, prüfen wir die Datenlage: Sind die Daten vorhanden, vollständig, zugänglich und dürfen sie so genutzt werden?",
            ergebnis:
              "Eine belastbare Aussage, ob der Fall trägt, und zu welchen Kosten.",
          },
          {
            n: "03",
            title: "Pilot",
            text: "Ein Anwendungsfall wird klein, aber echt gebaut und an echten Vorgängen gemessen, nicht an einer vorbereiteten Demo.",
            ergebnis: "Ein laufender Fall mit Messwerten als Entscheidungsgrundlage.",
          },
          {
            n: "04",
            title: "Automatisierung end-to-end",
            text: "Wir automatisieren den ganzen Ablauf vom Auslöser bis zur Ablage, statt einzelne Schritte mit Werkzeugen zu bestücken.",
            ergebnis: "Ein Prozess, der ohne Zwischenhände durchläuft.",
          },
          {
            n: "05",
            title: "Integration in Ihre Systeme",
            text: "Anbindung an ERP, Dokumentenablage, Fachanwendungen und Postfächer, über die Schnittstellen, die es bereits gibt.",
            ergebnis: "Die Lösung sitzt in Ihrer Systemlandschaft, nicht daneben.",
          },
          {
            n: "06",
            title: "Betrieb, Dokumentation und Nachweise",
            text: "Übergabe an Ihr Team mit Betriebsanleitung, Überwachung und der Dokumentation, die der EU AI Act für den Fall verlangt.",
            ergebnis: "Eine Lösung, die Ihr Team ohne uns weiterbetreiben kann.",
          },
        ],
      },
      phases: {
        eyebrow: "Vorgehen",
        title: "Wie ein Vorhaben abläuft",
        intro:
          "Erst der Nutzen, dann die Technik. Vor dem Pilot fällt keine Entscheidung über Werkzeuge.",
        items: [
          {
            n: "01",
            title: "Screening",
            dauer: "2 Wochen",
            text: "Wir sehen uns die Abläufe an und sammeln Kandidaten. Noch ohne Technikentscheidung, erst zählt der Hebel.",
          },
          {
            n: "02",
            title: "Machbarkeit",
            dauer: "2 bis 3 Wochen",
            text: "Datenlage, Schnittstellen, Rechtsrahmen und Aufwand für die zwei bis drei aussichtsreichsten Fälle.",
          },
          {
            n: "03",
            title: "Pilot",
            dauer: "6 bis 10 Wochen",
            text: "Ein Fall wird gebaut und im echten Betrieb gemessen. Danach entscheiden Zahlen, nicht Bauchgefühl.",
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
        intro: "Drei Einstiege, je nachdem wie klar der Anwendungsfall schon ist.",
        items: [
          {
            title: "KI-Potenzialanalyse",
            dauer: "3 Wochen",
            text: "Der Einstieg ohne Technikbindung: Wo lohnt sich Automatisierung bei Ihnen überhaupt?",
            enthalten: [
              "Aufnahme der Abläufe eines Bereichs",
              "Bewertete Liste der Anwendungsfälle",
              "Aufwand und Nutzen je Fall überschlagen",
              "Empfehlung für den ersten Fall",
            ],
          },
          {
            title: "Pilot",
            dauer: "6 bis 10 Wochen",
            text: "Ein Anwendungsfall, echt gebaut und im Betrieb gemessen. Fester Umfang, fester Preis.",
            enthalten: [
              "Datencheck und Aufbau",
              "Lauffähige Lösung für einen Fall",
              "Messung an echten Vorgängen",
              "Entscheidungsvorlage für den Rollout",
            ],
          },
          {
            title: "Umsetzung und Betrieb",
            dauer: "ab 3 Monaten",
            text: "Vom bestätigten Fall zur Lösung, die im Alltag trägt, inklusive Übergabe an Ihr Team.",
            enthalten: [
              "Automatisierung end-to-end",
              "Integration in bestehende Systeme",
              "Dokumentation und Nachweise zum AI Act",
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
              "In Rechenzentren in Deutschland oder der EU. Wo es nötig ist, arbeiten wir mit Modellen, die in Ihrer eigenen Umgebung laufen. Was mit welchen Daten passiert, halten wir vorher schriftlich fest.",
          },
          {
            frage: "Was passiert, wenn die KI einen Fehler macht?",
            antwort:
              "Wir bauen Abläufe so, dass unklare Fälle an einen Menschen gehen, statt durchzurutschen. Jeder Vorgang ist protokolliert und im Nachhinein nachvollziehbar.",
          },
          {
            frage: "Muss unsere IT-Landschaft dafür modern sein?",
            antwort:
              "Nein. Wir arbeiten regelmäßig mit gewachsenen Systemen. Entscheidend ist, ob die Daten digital vorliegen und zugänglich sind, nicht ob die Software neu ist.",
          },
          {
            frage: "Was verlangt der EU AI Act von uns?",
            antwort:
              "Das hängt vom Anwendungsfall ab. Für die meisten Automatisierungen im Mittelstand genügen eine saubere Einstufung, eine nachvollziehbare Dokumentation und benannte Verantwortliche. Diese Unterlagen entstehen bei uns im Projekt mit.",
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
    imageAlt:
      "Drei Personen besprechen etwas an einem Tisch mit Laptop und Notizen",
    desc: "In unserem Labor erproben wir neue Methoden, bevor sie zum Standard werden. Was sich bewährt, fließt zurück in unsere Projekte und wird offen geteilt.",
    detail: {
      lead: "Neue Methoden erproben, bevor sie zum Standard werden, und das Gelernte in die Praxis bringen.",
      body: [
        "Das Research Lab ist unser Ort zum Ausprobieren. Hier testen wir Ansätze, die noch nicht etabliert sind, von neuen KI-Verfahren bis zu Methoden der Entscheidungsfindung, ohne dass ein Kundenprojekt das Versuchsfeld sein muss.",
        "Was sich bewährt, wird Teil unserer Projekte und kommt so direkt im Mittelstand an. Damit bleiben unsere Empfehlungen aktuell, ohne jedem Hype hinterherzulaufen.",
        "Unsere Erkenntnisse teilen wir offen, weil gute Ideen durch Austausch besser werden. Ausgewählte Ergebnisse veröffentlichen wir als Studien, Whitepaper und kurze Notizen (siehe Publikationen).",
      ],
      points: [
        {
          k: "Erproben",
          title: "Früh ausprobieren",
          text: "Wir testen neue Methoden an echten Fragestellungen, nicht nur in der Theorie.",
        },
        {
          k: "Übertragen",
          title: "Zurück in die Praxis",
          text: "Bewährtes wird Teil unserer Projekte und kommt Kundenprojekten unmittelbar zugute.",
        },
        {
          k: "Teilen",
          title: "Offen kommunizieren",
          text: "Ergebnisse machen wir zugänglich, damit andere darauf aufbauen können.",
        },
      ],
      tasks: [
        "Neue Methoden an echten Fragestellungen testen",
        "Substanz von Hype trennen",
        "Bewährtes in unsere Projekte übertragen",
        "Erkenntnisse als Paper, Notes und Praxisberichte teilen",
        "Themen aus der Praxis aufgreifen",
        "Vertrauliches vertraulich behandeln",
      ],
      situations: {
        eyebrow: "Anlässe",
        title: "Womit eine Untersuchung beginnt",
        intro:
          "Das Lab arbeitet an Fragen, für die im Projektalltag kein Platz ist. Vier typische Anlässe.",
        items: [
          {
            title: "Eine Methode ist neu, ihr Nutzen unklar",
            text: "Ein Ansatz wird auf Konferenzen gefeiert. Ob er unter realen Bedingungen trägt, hat noch niemand nachgerechnet.",
          },
          {
            title: "Zwischen Hype und Substanz entscheiden",
            text: "Bevor wir einem Auftraggeber etwas empfehlen, wollen wir es selbst gesehen und gemessen haben.",
          },
          {
            title: "Eine Frage, die kein Projekt tragen kann",
            text: "Manche Fragen sind zu offen für ein bezahltes Projekt und zu wichtig, um sie liegen zu lassen.",
          },
          {
            title: "Anstoß aus der Lehre",
            text: "Aus Hochschulen kommen Fragestellungen, denen ein Praxisbezug guttut. Umgekehrt profitieren unsere Projekte von wissenschaftlicher Sorgfalt.",
          },
        ],
      },
      offerings: {
        eyebrow: "Formate",
        title: "Was im Lab entsteht",
        intro:
          "Sechs Arbeitsformen, je nachdem wie weit eine Frage schon geklärt ist.",
        items: [
          {
            n: "01",
            title: "Methodenvergleich",
            text: "Mehrere Ansätze für dieselbe Aufgabe, unter gleichen Bedingungen gemessen und gegenübergestellt.",
            ergebnis: "Eine Empfehlung, die auf Messwerten beruht.",
          },
          {
            n: "02",
            title: "Machbarkeitsstudie",
            text: "Eine offene Frage wird so weit untersucht, bis eine belastbare Antwort möglich ist, auch wenn sie Nein lautet.",
            ergebnis: "Eine Antwort mit dokumentiertem Weg dorthin.",
          },
          {
            n: "03",
            title: "Prototyp",
            text: "Ein kleiner, lauffähiger Aufbau, an dem sich ein Ansatz beurteilen lässt, statt über ihn zu diskutieren.",
            ergebnis: "Etwas Anfassbares statt einer Diskussion über Folien.",
          },
          {
            n: "04",
            title: "Whitepaper und Studien",
            text: "Ergebnisse, die über den Einzelfall hinausgehen, schreiben wir auf und machen sie zugänglich.",
            ergebnis: "Ein Text, auf dem andere aufbauen können.",
          },
          {
            n: "05",
            title: "Hochschulkooperation",
            text: "Gemeinsame Fragestellungen mit Lehrstühlen, betreute Abschlussarbeiten und Daten aus der Praxis.",
            ergebnis: "Wissenschaftliche Tiefe mit Bezug zum Betrieb.",
          },
          {
            n: "06",
            title: "Impuls und Workshop",
            text: "Was wir gelernt haben, geben wir kompakt weiter, im eigenen Haus wie bei Auftraggebern.",
            ergebnis: "Ein Team, das den Stand der Dinge einordnen kann.",
          },
        ],
      },
      phases: {
        eyebrow: "Vorgehen",
        title: "Wie wir im Lab arbeiten",
        intro:
          "Bewusst schlank gehalten. Der Maßstab für die Antwort steht vorher fest, damit am Ende niemand die Frage nachträglich ändert.",
        items: [
          {
            n: "01",
            title: "Frage schärfen",
            dauer: "1 Woche",
            text: "Aus einem Thema wird eine Frage, die sich beantworten lässt, mit einem vorab festgelegten Maßstab.",
          },
          {
            n: "02",
            title: "Aufbau",
            dauer: "2 bis 4 Wochen",
            text: "Wir bauen den kleinstmöglichen Versuchsaufbau, der die Frage beantworten kann.",
          },
          {
            n: "03",
            title: "Messen und auswerten",
            dauer: "2 Wochen",
            text: "Ergebnisse werden gemessen und eingeordnet, mitsamt den Grenzen des Aufbaus.",
          },
          {
            n: "04",
            title: "Übertragen und teilen",
            dauer: "laufend",
            text: "Was trägt, geht in unsere Projekte. Was allgemein interessant ist, veröffentlichen wir.",
          },
        ],
      },
      formats: {
        eyebrow: "Mitarbeit",
        title: "Wie Sie daran teilhaben können",
        intro:
          "Das Lab ist keine geschlossene Abteilung. Drei Wege, um mitzuarbeiten.",
        items: [
          {
            title: "Frage einbringen",
            dauer: "kostenfrei",
            text: "Sie schildern uns eine offene Frage aus Ihrer Praxis. Passt sie ins Lab, nehmen wir sie auf.",
            enthalten: [
              "Kurzes Gespräch zur Fragestellung",
              "Rückmeldung, ob und wann wir sie aufgreifen",
              "Ergebnis vorab, bevor es veröffentlicht wird",
            ],
          },
          {
            title: "Gemeinsames Vorprojekt",
            dauer: "4 bis 8 Wochen",
            text: "Wir untersuchen eine Frage zusammen mit Ihrem Team und Ihren Daten, unter Vertraulichkeit.",
            enthalten: [
              "Gemeinsam festgelegte Fragestellung",
              "Versuchsaufbau und Auswertung",
              "Veröffentlichung nur nach Ihrer Freigabe",
              "Übergang in ein Projekt, falls der Ansatz trägt",
            ],
          },
          {
            title: "Kooperation",
            dauer: "ab einem Semester",
            text: "Längerfristige Zusammenarbeit, auch mit Hochschulen, Abschlussarbeiten und gemeinsamen Veröffentlichungen.",
            enthalten: [
              "Gemeinsame Forschungsfrage",
              "Betreuung von Abschlussarbeiten",
              "Zugang zu Zwischenergebnissen",
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
              "Ja. Wenn die Frage über den Einzelfall hinausgeht und wir eine Antwort für erreichbar halten, nehmen wir sie auf. Das Ergebnis bekommen Sie, bevor es veröffentlicht wird.",
          },
          {
            frage: "Was passiert mit unseren Daten?",
            antwort:
              "Daten aus Kooperationen bleiben vertraulich. Veröffentlicht wird nur, was Sie freigegeben haben, und nur in anonymisierter Form.",
          },
          {
            frage: "Kostet die Mitarbeit etwas?",
            antwort:
              "Eine Frage einzubringen kostet nichts. Ein gemeinsames Vorprojekt mit Ihren Daten und Ihrem Team rechnen wir als Projekt zum Festpreis ab.",
          },
          {
            frage: "Was passiert mit Versuchen, die nicht funktionieren?",
            antwort:
              "Auch die schreiben wir auf. Zu wissen, was nicht trägt, spart in Projekten oft mehr Geld als der nächste gelungene Versuch.",
          },
          {
            frage: "Wie kommen die Ergebnisse bei uns an?",
            antwort:
              "Was sich bewährt, wird Teil unseres Vorgehens in Consulting und KI-Automatisierung. Auftraggeber profitieren davon, ohne selbst Forschung zu bezahlen.",
          },
        ],
      },
    },
  },
]
