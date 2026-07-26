// Die drei Bereiche.
//   slug   -> Adresse der Detailseite (/bereiche/<slug>)
//   anchor -> optionale id fuer die Navigation auf der Startseite (#research)
//   detail -> Inhalte der jeweiligen Detailseite
export const pillars = [
  {
    id: "strategie",
    slug: "global-business-strategy",
    tag: "Strategie",
    title: "Global Business Strategy",
    desc: "Wir entwickeln Strategien, die über einzelne Quartale hinaus tragen. Von der Marktanalyse über die Positionierung bis zur konkreten Umsetzung, immer nah an den Zahlen und am Geschäft.",
    detail: {
      lead: "Strategien, die über einzelne Quartale hinaus tragen – von der Analyse bis zur Umsetzung.",
      body: [
        "Wir entwickeln Geschäftsstrategien nah an den Zahlen und am Markt. Statt allgemeiner Empfehlungen liefern wir einen klaren Weg: Wo steht Ihr Unternehmen, wohin soll es, und welche Schritte führen dorthin.",
        "Dabei verbinden wir Marktanalyse, Wettbewerbsbeobachtung und die eigenen Stärken zu einer Positionierung, die belastbar ist und sich tatsächlich umsetzen lässt.",
      ],
      points: [
        {
          k: "Analyse",
          title: "Markt & Wettbewerb",
          text: "Wir verschaffen uns ein klares Bild von Markt, Wettbewerb und den eigenen Stärken.",
        },
        {
          k: "Positionierung",
          title: "Klare Ausrichtung",
          text: "Aus der Analyse leiten wir eine eindeutige Positionierung und messbare Ziele ab.",
        },
        {
          k: "Umsetzung",
          title: "Vom Plan zur Tat",
          text: "Wir begleiten die Umsetzung und machen Fortschritt an konkreten Kennzahlen fest.",
        },
      ],
    },
  },
  {
    id: "automatisierung",
    slug: "ai-automation",
    tag: "Automatisierung",
    title: "AI Automation",
    desc: "Wir bringen Künstliche Intelligenz dort zum Einsatz, wo sie messbaren Nutzen bringt. Wir automatisieren Abläufe gezielt, ohne unnötige Komplexität und ohne Technik um ihrer selbst willen.",
    detail: {
      lead: "Künstliche Intelligenz dort, wo sie messbaren Nutzen bringt – ohne unnötige Komplexität.",
      body: [
        "Wir automatisieren Abläufe gezielt. Zuerst schauen wir, wo Zeit und Geld verloren gehen, dann setzen wir KI und Automatisierung genau an diesen Stellen ein.",
        "Technik ist für uns Mittel zum Zweck. Jede Lösung muss sich an einem klaren Ergebnis messen lassen: schneller, günstiger oder zuverlässiger.",
      ],
      points: [
        {
          k: "Potenzial",
          title: "Aufwand sichtbar machen",
          text: "Wir finden die Abläufe, in denen Automatisierung den größten Hebel hat.",
        },
        {
          k: "Umsetzung",
          title: "Passende Werkzeuge",
          text: "Wir wählen die Technik nach Nutzen aus, nicht nach Trend.",
        },
        {
          k: "Betrieb",
          title: "Verlässlich im Alltag",
          text: "Lösungen, die im täglichen Betrieb stabil laufen und wartbar bleiben.",
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
    desc: "In unserem Labor erproben wir neue Methoden, bevor sie zum Standard werden. Was wir lernen, fließt zurück in die Beratung und wird offen geteilt.",
    detail: {
      lead: "Neue Methoden erproben, bevor sie zum Standard werden – und das Gelernte teilen.",
      body: [
        "In unserem Labor testen wir Ansätze, die noch nicht etabliert sind. Was sich bewährt, fließt zurück in die Beratung.",
        "Wir teilen unsere Erkenntnisse offen, weil gute Ideen durch Austausch besser werden.",
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
          text: "Bewährtes wird Teil unserer Beratung und kommt Kundenprojekten zugute.",
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
