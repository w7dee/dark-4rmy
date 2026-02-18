import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import IntroCanvas2D from "../ui/IntroCanvas2D"

export default function Intro() {
  const nav = useNavigate()
  const [isEntering, setIsEntering] = useState(false)
  const enterTimerRef = useRef<number | null>(null)
  const enterStartedRef = useRef(false)
  const logoSrc = `${import.meta.env.BASE_URL}assets/logo.png`

  const startEnter = useCallback(() => {
    if (enterStartedRef.current) return

    enterStartedRef.current = true
    setIsEntering(true)
    enterTimerRef.current = window.setTimeout(() => {
      nav("/app/home")
      enterTimerRef.current = null
    }, 620)
  }, [nav])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") startEnter()
    }

    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      if (enterTimerRef.current !== null) {
        window.clearTimeout(enterTimerRef.current)
      }
    }
  }, [startEnter])

  return (
    <div className="min-h-[100dvh] h-[100dvh] w-full relative overflow-hidden">
      <IntroCanvas2D />

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/5 via-black/45 to-black" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 hud-bg opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.2),transparent_58%),radial-gradient(circle_at_10%_90%,rgba(150,0,0,0.22),transparent_40%)]" />
        <div className="absolute inset-0 noise opacity-80" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-14 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isEntering ? { opacity: 0, y: 8, scale: 0.98 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.86, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mx-auto mb-5 sm:mb-6 w-20 h-20 sm:w-28 sm:h-28 rounded-3xl logo-shell p-2"
          >
            <motion.img
              src={logoSrc}
              alt="DARK 4RMY logo"
              className="w-full h-full rounded-2xl object-cover"
              animate={{ y: [0, -4, 0], rotate: [0, 1.4, 0, -1.2, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="text-3xl sm:text-5xl font-extrabold tracking-[0.12em] sm:tracking-[0.24em] text-red-500 glitch">
            DARK 4RMY
          </div>
          <div className="mt-2 text-xs sm:text-sm text-zinc-300 tracking-[0.16em] sm:tracking-[0.22em]">DFIR HUB</div>

          <motion.button
            onClick={startEnter}
            whileHover={{ scale: isEntering ? 1 : 1.02 }}
            whileTap={{ scale: isEntering ? 1 : 0.98 }}
            disabled={isEntering}
            className="pointer-events-auto mt-6 sm:mt-7 px-6 sm:px-8 py-3 rounded-2xl hud-btn text-black text-sm sm:text-base font-extrabold tracking-[0.14em] sm:tracking-[0.2em] shadow-glow disabled:opacity-80"
          >
            Enter
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isEntering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,80,80,0.22),rgba(0,0,0,0.92)_58%)]"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.38, 0] }}
                transition={{ duration: 0.42, times: [0, 0.35, 1], ease: "easeOut" }}
                className="absolute inset-0 bg-white/20"
              />

              <div className="relative w-[min(54vw,250px)] aspect-square flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.54, rotate: -8, opacity: 0 }}
                  animate={{ scale: 4.8, rotate: 0, opacity: [0, 1, 0.98] }}
                  transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1], times: [0, 0.25, 1] }}
                  className="logo-shell rounded-3xl p-3 w-[54%] h-[54%]"
                >
                  <img
                    src={logoSrc}
                    alt="Transition logo"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  )
}
