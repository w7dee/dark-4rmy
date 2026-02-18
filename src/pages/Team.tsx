import { motion } from "framer-motion"
import Section from "../ui/Section"
import { team } from "../data/team"

export default function Team() {
  return (
    <div className="space-y-6">
      <Section title="Team Members">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.35 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl panel-surface card-lift p-4"
            >
              <div className="text-xs tracking-[0.14em] text-zinc-400 uppercase">
                {member.role ?? "Member"}
              </div>
              <div className="mt-1 font-bold text-zinc-100">{member.name}</div>
              <div className="mt-3 inline-flex items-center gap-2 text-xs text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                DFIR HUB
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}
