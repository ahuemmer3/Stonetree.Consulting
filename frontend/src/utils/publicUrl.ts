// Adresse einer Datei aus public/ (Bilder, Videos, PDFs).
// Läuft die Seite in einem Unterordner, etwa auf GitHub Pages unter
// /h2h-consulting/, steht dieser Ordner in BASE_URL und wird vorangestellt.
// Pfade deshalb ohne führenden Schrägstrich übergeben: publicUrl("images/a.jpg")
export function publicUrl(pfad: string): string {
  return import.meta.env.BASE_URL + pfad
}
