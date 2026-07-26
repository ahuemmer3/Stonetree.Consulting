import { useState } from "react"

// Reine Formular-Logik: Zustand, Validierung und Absenden – bewusst getrennt
// von der Darstellung (ContactForm.jsx). So bleibt die Komponente schlank und
// die Regeln lassen sich isoliert testen und wiederverwenden.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_MESSAGE_LENGTH = 10
const EMPTY = { name: "", email: "", message: "" }

// Validiert ein einzelnes Feld und liefert eine Fehlermeldung (leer = ok).
function validateField(field, value) {
  const v = value.trim()
  switch (field) {
    case "name":
      return v ? "" : "Bitte geben Sie Ihren Namen ein."
    case "email":
      if (!v) return "Bitte geben Sie Ihre E-Mail-Adresse ein."
      return EMAIL_REGEX.test(v)
        ? ""
        : "Bitte geben Sie eine gültige E-Mail-Adresse ein."
    case "message":
      if (!v) return "Bitte schreiben Sie uns eine kurze Nachricht."
      return v.length >= MIN_MESSAGE_LENGTH
        ? ""
        : `Ihre Nachricht ist etwas kurz (mind. ${MIN_MESSAGE_LENGTH} Zeichen).`
    default:
      return ""
  }
}

function validateAll(values) {
  const errors = {}
  for (const field of Object.keys(EMPTY)) {
    const error = validateField(field, values[field])
    if (error) errors[field] = error
  }
  return errors
}

// Baut die Nachricht als mailto-Link. Bis das FastAPI-Backend steht
// (Woche 8/9), ist das der funktionierende Versandweg über das
// E-Mail-Programm des Nutzers. Später hier stattdessen fetch(POST /api/...).
function buildMailto(recipient, { name, email, message }) {
  const subject = encodeURIComponent(`Anfrage von ${name.trim()}`)
  const body = encodeURIComponent(
    `${message.trim()}\n\n—\n${name.trim()}\n${email.trim()}`,
  )
  return `mailto:${recipient}?subject=${subject}&body=${body}`
}

export function useContactForm({ recipient }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Fehler live entfernen, sobald ein bereits berührtes Feld korrigiert wird.
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  function handleBlur(event) {
    const { name, value } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateAll(values)
    setErrors(nextErrors)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(nextErrors).length > 0) return

    window.location.href = buildMailto(recipient, values)
    setSubmitted(true)
  }

  function reset() {
    setValues(EMPTY)
    setErrors({})
    setTouched({})
    setSubmitted(false)
  }

  return {
    values,
    errors,
    submitted,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  }
}
