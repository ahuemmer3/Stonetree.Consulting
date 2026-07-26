import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/layout/Header.jsx"
import Footer from "./components/layout/Footer.jsx"
import HomePage from "./pages/HomePage.jsx"
import PillarPage from "./pages/PillarPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"

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
          <Route path="/bereiche/:slug" element={<PillarPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
