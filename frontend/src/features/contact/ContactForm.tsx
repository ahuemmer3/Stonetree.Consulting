import { site } from "../../data/site"
import { useContactForm } from "./useContactForm"
import Field from "./Field"

// Darstellung des Kontaktformulars. Die gesamte Logik steckt in
// useContactForm, das einzelne Feld in Field – diese Komponente beschreibt
// nur noch, was angezeigt wird.
export default function ContactForm() {
  const {
    values,
    errors,
    submitted,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  } = useContactForm({ recipient: site.contactEmail })

  if (submitted) {
    return (
      <div className="contact-done" role="status">
        <h3>Vielen Dank!</h3>
        <p>
          Ihr E-Mail-Programm öffnet sich mit Ihrer Nachricht. Wir melden uns
          zeitnah bei Ihnen zurück.
        </p>
        <button type="button" className="btn-ghost" onClick={reset}>
          Weitere Nachricht schreiben
        </button>
      </div>
    )
  }

  // Gemeinsame Handler für alle Felder – hält das Markup frei von Wiederholung.
  const shared = { onChange: handleChange, onBlur: handleBlur }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <Field
        id="cf-name"
        name="name"
        label="Name"
        value={values.name}
        error={errors.name}
        autoComplete="name"
        {...shared}
      />
      <Field
        id="cf-email"
        name="email"
        type="email"
        label="E-Mail"
        value={values.email}
        error={errors.email}
        autoComplete="email"
        {...shared}
      />
      <Field
        id="cf-message"
        name="message"
        as="textarea"
        rows={5}
        label="Nachricht"
        value={values.message}
        error={errors.message}
        {...shared}
      />
      <button type="submit" className="btn-primary">
        Nachricht senden
      </button>
    </form>
  )
}
