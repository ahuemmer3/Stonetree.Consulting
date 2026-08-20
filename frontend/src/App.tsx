import { useEffect } from "react"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import HomePage from "./pages/HomePage"
import PillarPage from "./pages/PillarPage"
import NotFoundPage from "./pages/NotFoundPage"

// Sorgt dafuer, dass bei jedem Seitenwechsel sinnvoll gescrollt wird:
// zu einem Anker (#expertise), falls vorhanden, sonst nach ganz oben.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Alte Bereichs-Pfade weiterleiten, damit keine Links ins Leere laufen */}
          <Route
            path="/bereiche/beratung"
            element={<Navigate to="/bereiche/consulting" replace />}
          />
          <Route
            path="/bereiche/ai-automation"
            element={<Navigate to="/bereiche/ki-automatisierung" replace />}
          />
          <Route path="/bereiche/:slug" element={<PillarPage />} />
          {/* Branchen gibt es nicht mehr: alte Links landen auf der Startseite */}
          <Route path="/branchen/*" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
