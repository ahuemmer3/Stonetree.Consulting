// Link, der wie ein Button aussieht.
// variant "primary" = gefuellter Akzent-Button, "ghost" = dezenter Textlink.
export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}) {
  const base = variant === "ghost" ? "btn-ghost" : "btn-primary"
  return (
    <a href={href} className={`${base} ${className}`.trim()}>
      {children}
    </a>
  )
}
