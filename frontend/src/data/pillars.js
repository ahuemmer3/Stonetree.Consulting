// Die drei Bereiche.
//   slug   -> Adresse der Detailseite (/bereiche/<slug>)
//   anchor -> optionale id fuer die Navigation auf der Startseite (#research)
//   detail -> Inhalte der jeweiligen Detailseite
export const pillars = [
  {
    id: "beratung",
    slug: "beratung",
    tag: "Beratung",
    title: "Beratung",
    image: "/images/expertise-beratung.jpg",
    desc: "Wir beraten mittelständische Unternehmen zu Strategie und Ausrichtung – mit Entscheidungen, die über einzelne Quartale hinaus tragen. Von der Marktanalyse über die Positionierung bis zur Umsetzung, immer nah an den Zahlen und am Geschäft.",
    detail: {
      lead: "Strategie und Ausrichtung für den Mittelstand – von der ersten Analyse bis zur Umsetzung im Betrieb.",
      body: [
        "Viele gute Unternehmen wissen genau, was sie können – aber nicht immer, wohin der Weg führen soll. Genau hier setzen wir an. Wir beraten nah an den Zahlen und am Markt und liefern statt allgemeiner Empfehlungen einen klaren Weg: Wo steht Ihr Unternehmen heute, wohin soll es, und welche Schritte führen dorthin.",
        "Dabei verbinden wir Marktanalyse, Wettbewerbsbeobachtung und die eigenen Stärken zu einer Positionierung, die belastbar ist und sich tatsächlich umsetzen lässt. Wir denken in Entscheidungen, nicht in Foliensätzen – und machen jeden Vorschlag an konkreten Zahlen fest.",
        "Weil Strategie erst im Alltag zählt, hört unsere Arbeit nicht beim Konzept auf. Wir begleiten die Umsetzung, priorisieren gemeinsam und sorgen dafür, dass aus dem Plan messbare Fortschritte werden.",
      ],
      points: [
        {
          k: "Analyse",
          title: "Markt & Wettbewerb",
          text: "Wir verschaffen uns ein klares Bild von Markt, Wettbewerb und den eigenen Stärken – auf Basis von Daten, nicht von Bauchgefühl.",
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
    },
  },
  {
    id: "automatisierung",
    slug: "ai-automation",
    tag: "Automatisierung",
    title: "AI Automation",
    image: "/images/expertise-ai.jpg",
    desc: "Wir bringen Künstliche Intelligenz dort zum Einsatz, wo sie messbaren Nutzen bringt. Wir automatisieren Abläufe gezielt – ohne unnötige Komplexität und ohne Technik um ihrer selbst willen.",
    detail: {
      lead: "Künstliche Intelligenz und Automatisierung dort, wo sie im Mittelstand messbaren Nutzen bringen.",
      body: [
        "Nicht jedes Problem braucht KI – aber viele Abläufe im Mittelstand kosten unnötig Zeit und Geld. Wir schauen zuerst genau hin: Wo entstehen Wartezeiten, Doppelarbeit und Fehler? Erst dann setzen wir Automatisierung und KI genau an diesen Stellen ein.",
        "Technik ist für uns Mittel zum Zweck. Jede Lösung muss sich an einem klaren Ergebnis messen lassen – schneller, günstiger oder zuverlässiger. Wir wählen Werkzeuge nach Nutzen aus, nicht nach Trend, und achten darauf, dass sie zu den vorhandenen Systemen passen.",
        "Damit die Lösung nicht mit dem Projekt endet, denken wir den Betrieb von Anfang an mit: verständlich dokumentiert, wartbar und so gebaut, dass Ihr Team damit arbeiten kann.",
      ],
      points: [
        {
          k: "Potenzial",
          title: "Aufwand sichtbar machen",
          text: "Wir finden die Abläufe, in denen Automatisierung den größten Hebel hat – und rechnen den Nutzen vorher durch.",
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
    },
  },
  {
    id: "forschung",
    slug: "research-lab",
    anchor: "research",
    tag: "Forschung",
    title: "Research Lab",
    image: "/images/expertise-research.jpg",
    desc: "In unserem Labor erproben wir neue Methoden, bevor sie zum Standard werden. Was sich bewährt, fließt zurück in die Beratung – und wird offen geteilt.",
    detail: {
      lead: "Neue Methoden erproben, bevor sie zum Standard werden – und das Gelernte in die Praxis bringen.",
      body: [
        "Das Research Lab ist unser Ort zum Ausprobieren. Hier testen wir Ansätze, die noch nicht etabliert sind – von neuen KI-Verfahren bis zu Methoden der Entscheidungsfindung –, ohne dass ein Kundenprojekt das Versuchsfeld sein muss.",
        "Was sich bewährt, wird Teil unserer Beratung und kommt so direkt im Mittelstand an. Damit bleiben unsere Empfehlungen aktuell, ohne jedem Hype hinterherzulaufen.",
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
          text: "Bewährtes wird Teil unserer Beratung und kommt Kundenprojekten unmittelbar zugute.",
        },
        {
          k: "Teilen",
          title: "Offen kommunizieren",
          text: "Ergebnisse machen wir zugänglich, damit andere darauf aufbauen können.",
        },
      ],
    },
  },
]
