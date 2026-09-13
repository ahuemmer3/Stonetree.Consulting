/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Optional: andere Adresse für den Formularversand (Standard: /api/contact)
  readonly VITE_CONTACT_ENDPOINT?: string
}
