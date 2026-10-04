/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Optional: andere Adresse für den Formularversand (Standard: /api/contact).
  // Leer = kein Backend, das Formular öffnet das E-Mail-Programm.
  readonly VITE_CONTACT_ENDPOINT?: string
}
