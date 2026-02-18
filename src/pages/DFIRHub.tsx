import { motion } from "framer-motion"
import Section from "../ui/Section"

const hubWebsite = "https://nimble-creponne-21f876.netlify.app/"

const mentors = [
  {
    name: "Dr. Ahmed El Khatib",
    title: "IT Researcher and Digital Forensics Expert",
    details: "Teaching Assistant at FCI LUXOR.",
  },
  {
    name: "Eng. Mostafa Mahmoud",
    title: "Digital Forensics Expert",
    details: "Fourth-year student at FCI LUXOR.",
  },
]

export default function DFIRHub() {
  return (
    <div className="space-y-6">
      <Section title="DFIR HUB">
        <div className="text-zinc-300">
          This page highlights the mentors supporting the training journey of the DARK-4RMY team inside DFIR HUB.
        </div>

        <motion.a
          href={hubWebsite}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2 }}
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-red-800/45 bg-black/40 px-4 py-2 text-sm text-red-300 hover:text-red-200 hover:border-red-500/60 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(248,113,113,0.9)]" />
          Official DFIR HUB Website
        </motion.a>

        <div className="mt-5 grid md:grid-cols-2 gap-4">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl panel-surface card-lift p-5"
            >
              <div className="text-xs tracking-[0.14em] text-zinc-400 uppercase">Mentor</div>
              <div className="mt-1 text-lg font-extrabold text-red-400">{mentor.name}</div>
              <div className="mt-3 text-sm text-zinc-200">{mentor.title}</div>
              <div className="mt-2 text-sm text-zinc-400">{mentor.details}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-red-900/35 bg-black/35 px-4 py-4 text-sm text-zinc-300">
          We Thank you for your continuous support, guidance, and effort. Your mentorship has a direct impact on our
          growth and progress.
        </div>
      </Section>
    </div>
  )
}
