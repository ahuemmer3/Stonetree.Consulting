import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Kontaktformular in der Entwicklung an das lokale Backend weiterleiten
    // (uvicorn app.main:app --port 8000 im Ordner backend).
    proxy: { '/api': 'http://localhost:8000' },
  },
})
