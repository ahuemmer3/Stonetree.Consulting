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
    status,
    website,
    setWebsite,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  } = useContactForm()

  if (status === "sent") {
    return (
      <div className="contact-done" role="status">
        <h3>Vielen Dank!</h3>
        <p>
          Ihre Nachricht ist bei uns angekommen. Wir melden uns zeitnah bei
          Ihnen zurück.
        </p>
        <button type="button" className="btn btn--secondary" onClick={reset}>
          Weitere Nachricht schreiben
        </button>
      </div>
    )
  }

  // Gemeinsame Handler für alle Felder – hält das Markup frei von Wiederholung.
  const shared = { onChange: handleChange, onBlur: handleBlur }
  const sending = status === "sending"

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

      {/* Honeypot gegen Spam-Bots, für Menschen unsichtbar */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input
          id="cf-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="contact-error" role="alert">
          Die Nachricht konnte gerade nicht gesendet werden. Bitte versuchen Sie
          es später erneut oder schreiben Sie direkt an{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      )}

      <button type="submit" className="btn btn--primary" disabled={sending}>
        {sending ? "Wird gesendet …" : "Nachricht senden"}
      </button>
    </form>
  )
}
