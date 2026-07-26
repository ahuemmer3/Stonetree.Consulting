// Ein Formularfeld inkl. Label und Fehlermeldung, barrierefrei verknüpft
// (aria-describedby / aria-invalid). "as" wählt input (Standard) oder textarea.
// Alle übrigen Props (name, value, onChange, type, rows ...) werden
// durchgereicht.
export default function Field({ id, label, error, as = "input", ...props }) {
  const Control = as
  const errorId = error ? `${id}-error` : undefined

  return (
    <div className={`field${error ? " field-invalid" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <Control
        id={id}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={errorId}
        {...props}
      />
      {error && (
        <span className="field-msg" id={errorId} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
