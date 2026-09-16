import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { akzentAnwenden } from "./features/theme/accent"
import "./styles/index.css"

// Akzentfarbe setzen, bevor die Seite gezeichnet wird (Standard: Grün)
akzentAnwenden()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
