import { motion } from "framer-motion"
import Section from "../ui/Section"

const tracks = [
  "Digital Forensics Fundamentals",
  "Malware Analysis Basics",
  "Network Forensics",
  "Digital Investigations and Case Handling",
  "Incident Response Workflow",
  "Memory and Disk Analysis",
  "Evidence Collection and Documentation",
  "Threat Hunting Foundations",
  "Log Analysis and Timeline Reconstruction",
  "SOC Fundamentals and Analyst Mindset",
]

export default function Home() {
  const logoSrc = `${import.meta.env.BASE_URL}assets/logo.png`

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="rounded-3xl panel-surface card-lift p-6 sm:p-8"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <img src={logoSrc} className="w-20 h-20 rounded-3xl shadow-glow" alt="Team logo" />
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-[0.18em] text-red-500 glitch">
              DARK-4RMY
            </div>
            <div className="mt-1 text-zinc-300 tracking-wide">
              A team inside DFIR HUB doing its best to learn cybersecurity, with a special focus on Digital
              Forensics.
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <Section title="Who We Are">
          We are a team inside DFIR HUB trying our best to learn cybersecurity, especially the Digital Forensics
          field. We keep improving both our theoretical and practical skills so we can become ready for real-world
          career opportunities.
        </Section>

        <Section title="Learning Tracks">
          <ul className="space-y-2">
            {tracks.map((track) => (
              <li key={track} className="rounded-xl border border-red-900/25 bg-black/35 px-3 py-2 card-lift">
                {track}
              </li>
            ))}
          </ul>
        </Section>
      </div>

    </div>
  )
}
