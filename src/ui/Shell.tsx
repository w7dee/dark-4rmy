import { AnimatePresence, motion } from "framer-motion"
import { useLocation, useOutlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Shell() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <div className="min-h-[100dvh] relative overflow-x-clip">
      <div className="fixed inset-0 hud-bg" />
      <div className="fixed inset-0 noise pointer-events-none" />
      <div className="fixed inset-0 hud-lines pointer-events-none" />

      <div className="relative min-h-[100dvh] flex flex-col">
        <Navbar />
        <main className="flex-1 w-full px-3 sm:px-6 lg:px-8 py-5 sm:py-8 max-w-6xl mx-auto relative overflow-hidden">
          <AnimatePresence>
            <div key={`scan-${location.pathname}`} className="route-scan" />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20, scale: 0.992, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -14, scale: 1.004, filter: "blur(6px)" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  )
}
