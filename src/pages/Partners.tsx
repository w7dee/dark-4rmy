import { motion } from "framer-motion"
import Section from "../ui/Section"
import { partners } from "../data/partners"

const rules = [
  "Partnership is based on respect and mutual cooperation.",
  "The partner team must be fully committed.",
  "All members must be respected, and conflicts must be avoided.",
  "The team must show clear activity inside the community.",
]

const leaderPhone = "01080841930"
const leaderWhatsApp = "201080841930"
const fallbackLogo = `${import.meta.env.BASE_URL}assets/logo.png`

function resolveLogoSrc(logo?: string) {
  if (!logo) return fallbackLogo
  if (logo.startsWith("http://") || logo.startsWith("https://")) return logo
  return `${import.meta.env.BASE_URL}${logo.replace(/^\/+/, "")}`
}

export default function Partners() {
  return (
    <div className="space-y-6">
      <Section title="Partners">
        <div className="space-y-3 text-zinc-300">
          <p>
            We are a team that truly values collaboration and believes that working together is one of the most
            powerful ways to grow and achieve better results.
          </p>
          <p>
            Because of that, we decided to launch our Partnership Program, which is designed to help our team continue
            evolving while also creating real value and opportunities for other teams as well.
          </p>
          <p>
            Through this program, we aim to build strong connections, share knowledge, and create a supportive
            environment where everyone benefits and moves forward together.
          </p>
        </div>

        <div className="mt-5 rounded-2xl border border-red-900/35 bg-black/35 px-4 py-4">
          <div className="text-sm font-semibold tracking-[0.08em] text-zinc-100 uppercase">Partnership Rules</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {rules.map((rule) => (
              <li key={rule} className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 rounded-2xl border border-red-900/35 bg-black/35 px-4 py-4 text-sm text-zinc-300">
          <div className="font-semibold text-zinc-100">Important Note</div>
          <div className="mt-2">We reserve the right to terminate any partnership in case of violations.</div>
        </div>

        <div className="mt-4 rounded-2xl border border-red-900/35 bg-black/35 px-4 py-4 text-sm text-zinc-300">
          <div className="font-semibold text-zinc-100">Communication</div>
          <div className="mt-2">Communication is handled through the team leader via WhatsApp.</div>
          <div className="mt-2">Phone Number: {leaderPhone}</div>
          <a
            href={`https://wa.me/${leaderWhatsApp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-xl border border-red-800/45 bg-black/40 px-4 py-2 text-sm text-red-300 hover:text-red-200 hover:border-red-500/60 transition-all"
          >
            Open WhatsApp
          </a>
        </div>
      </Section>

      <Section title="Partner Teams">
        {partners.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-red-900/45 bg-black/30 p-5 text-sm text-zinc-400">
            No partner teams have been added yet.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl panel-surface card-lift p-5"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={resolveLogoSrc(partner.logo)}
                    alt={`${partner.name} logo`}
                    className="w-16 h-16 rounded-full object-cover border border-red-800/45 shadow-glow shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs tracking-[0.12em] text-zinc-400 uppercase">Partner Team</div>
                    <div className="mt-1 text-base font-extrabold text-red-400 break-words">{partner.name}</div>
                  </div>
                </div>

                <div className="mt-4 text-xs tracking-[0.12em] text-zinc-500 uppercase">Support Report</div>
                <div className="mt-2 text-sm text-zinc-300">{partner.supportReport}</div>
              </motion.div>
            ))}
          </div>
        )}
      </Section>
    </div>
  )
}
