import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

const desktopLinkBase =
  "px-3 py-2 rounded-xl text-xs sm:text-sm tracking-[0.12em] transition-all duration-300 whitespace-nowrap border"
const desktopLinkInactive = "text-zinc-300 border-transparent hover:text-white hover:bg-red-600/10 hover:border-red-700/40"
const desktopLinkActive = "text-black bg-red-500 border-red-300 shadow-glow"

const mobileLinkBase =
  "w-full text-left px-4 py-3 rounded-xl text-sm tracking-[0.1em] transition-all duration-300 border"
const mobileLinkInactive = "text-zinc-200 border-red-900/25 bg-black/30 hover:bg-red-600/10 hover:border-red-700/50"
const mobileLinkActive = "text-black bg-red-500 border-red-200 shadow-glow"

const links: Array<[string, string]> = [
  ["home", "HOME"],
  ["dfir-hub", "DFIR HUB"],
  ["team", "TEAM"],
  ["sessions", "SESSIONS"],
]

export default function Navbar() {
  const nav = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const logoSrc = `${import.meta.env.BASE_URL}assets/logo.png`

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-red-900/35 shadow-[0_10px_26px_rgba(0,0,0,0.35)]">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        <motion.button
          onClick={() => nav("/app/home")}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 min-w-0"
        >
          <img src={logoSrc} className="w-9 h-9 rounded-xl shadow-glow shrink-0" alt="Team logo" />
          <div className="text-left min-w-0">
            <div className="font-extrabold tracking-[0.18em] text-red-500 text-xs sm:text-sm truncate">DARK 4RMY</div>
            <div className="text-[10px] text-zinc-400 -mt-1 tracking-[0.12em] hidden sm:block">DFIR HUB TRAINEES</div>
          </div>
        </motion.button>

        <nav className="hidden md:flex flex-1 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max justify-start rounded-2xl border border-red-900/25 bg-black/35 px-2 py-1">
            {links.map(([path, label]) => (
              <NavLink
                key={path}
                to={`/app/${path}`}
                className={({ isActive }) =>
                  [desktopLinkBase, isActive ? desktopLinkActive : desktopLinkInactive].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>

        <motion.button
          type="button"
          onClick={() => nav("/")}
          className="hidden md:inline-flex px-3 py-2 rounded-xl text-xs tracking-[0.12em] text-zinc-300 hover:text-white hover:bg-red-600/10 transition-colors"
          whileTap={{ scale: 0.98 }}
        >
          INTRO
        </motion.button>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-red-800/45 bg-black/40 text-zinc-200 hover:text-white hover:border-red-500/55 transition-colors"
        >
          <span className="sr-only">Open menu</span>
          <div className="relative w-5 h-4">
            <span
              className={[
                "absolute left-0 h-[2px] w-5 bg-current transition-all duration-300",
                mobileOpen ? "top-[7px] rotate-45" : "top-0",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-all duration-300",
                mobileOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 h-[2px] w-5 bg-current transition-all duration-300",
                mobileOpen ? "top-[7px] -rotate-45" : "top-[14px]",
              ].join(" ")}
            />
          </div>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="md:hidden overflow-hidden border-t border-red-900/35 bg-black/85 backdrop-blur-xl"
          >
            <nav className="px-3 py-3 flex flex-col gap-2">
              {links.map(([path, label]) => (
                <NavLink
                  key={`mobile-${path}`}
                  to={`/app/${path}`}
                  className={({ isActive }) =>
                    [mobileLinkBase, isActive ? mobileLinkActive : mobileLinkInactive].join(" ")
                  }
                >
                  {label}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={() => nav("/")}
                className="w-full text-left px-4 py-3 rounded-xl text-sm tracking-[0.1em] border border-red-900/25 bg-black/30 text-zinc-200 hover:bg-red-600/10 hover:border-red-700/50 transition-all"
              >
                INTRO
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
