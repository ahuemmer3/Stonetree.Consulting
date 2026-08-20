import { useEffect } from "react"

// Setzt Seitentitel und Meta-Beschreibung je Route, ohne zusätzliche Bibliothek.
export function usePageMeta(title: string, description?: string): void {
  useEffect(() => {
    document.title = title
    if (description) {
      const tag = document.querySelector('meta[name="description"]')
      if (tag) tag.setAttribute("content", description)
    }
  }, [title, description])
}
