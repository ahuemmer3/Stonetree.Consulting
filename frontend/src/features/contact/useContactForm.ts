import { useState, type ChangeEvent, type FormEvent } from "react"

// Reine Formular-Logik: Zustand, Validierung und Absenden – bewusst getrennt
// von der Darstellung (ContactForm.tsx). So bleibt die Komponente schlank und
// die Regeln lassen sich isoliert testen und wiederverwenden.

export interface ContactValues {
  name: string
  email: string
  message: string
}

type FieldName = keyof ContactValues
type ContactErrors = Partial<Record<FieldName, string>>
type Touched = Partial<Record<FieldName, boolean>>

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_MESSAGE_LENGTH = 10
const EMPTY: ContactValues = { name: "", email: "", message: "" }

// Validiert ein einzelnes Feld und liefert eine Fehlermeldung (leer = ok).
function validateField(field: FieldName, value: string): string {
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

function validateAll(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  for (const field of Object.keys(values) as FieldName[]) {
    const error = validateField(field, values[field])
    if (error) errors[field] = error
  }
  return errors
}

// Baut die Nachricht als mailto-Link. Bis das FastAPI-Backend steht
// (Woche 8/9), ist das der funktionierende Versandweg über das
// E-Mail-Programm des Nutzers. Später hier stattdessen fetch(POST /api/...).
function buildMailto(
  recipient: string,
  { name, email, message }: ContactValues,
): string {
  const subject = encodeURIComponent(`Anfrage von ${name.trim()}`)
  const body = encodeURIComponent(
    `${message.trim()}\n\nName: ${name.trim()}\nE-Mail: ${email.trim()}`,
  )
  return `mailto:${recipient}?subject=${subject}&body=${body}`
}

interface UseContactFormOptions {
  recipient: string
}

export function useContactForm({ recipient }: UseContactFormOptions) {
  const [values, setValues] = useState<ContactValues>(EMPTY)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [touched, setTouched] = useState<Touched>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const name = event.target.name as FieldName
    const value = event.target.value
    setValues((prev) => ({ ...prev, [name]: value }))
    // Fehler live entfernen, sobald ein bereits berührtes Feld korrigiert wird.
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  function handleBlur(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const name = event.target.name as FieldName
    const value = event.target.value
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
