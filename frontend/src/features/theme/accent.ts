// Akzentfarbe umschalten, um beide Varianten zu vergleichen.
// Grün ist der Standard. Blau über die Adresse: ?akzent=blau
// Die Wahl bleibt für die Sitzung erhalten (sessionStorage).
const SPEICHER = "stonetree-akzent"
const ERLAUBT = ["gruen", "blau"] as const

export type Akzent = (typeof ERLAUBT)[number]

function lesen(): Akzent {
  const ausAdresse = new URLSearchParams(window.location.search).get("akzent")
  if (ausAdresse && ERLAUBT.includes(ausAdresse as Akzent)) {
    return ausAdresse as Akzent
  }
  try {
    const gespeichert = sessionStorage.getItem(SPEICHER)
    if (gespeichert && ERLAUBT.includes(gespeichert as Akzent)) {
      return gespeichert as Akzent
    }
  } catch {
    // Speicher gesperrt (z. B. privates Fenster): dann eben der Standard
  }
  return "gruen"
}

export function akzentAnwenden() {
  const akzent = lesen()
  document.documentElement.dataset.accent = akzent
  try {
    sessionStorage.setItem(SPEICHER, akzent)
  } catch {
    // ohne Speicher gilt die Wahl nur für diese Seite
  }
}
