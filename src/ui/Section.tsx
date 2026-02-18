import { PropsWithChildren } from "react"
import { motion } from "framer-motion"

type SectionProps = PropsWithChildren<{ title: string }>

export default function Section({ title, children }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl panel-surface card-lift p-5 sm:p-7"
    >
      <div className="hud-title-row">
        <h2 className="text-lg sm:text-xl font-extrabold tracking-[0.16em] text-red-400 glitch">
          {title}
        </h2>
        <span className="hud-title-rule" />
      </div>
      <div className="mt-4 text-zinc-200/90 leading-7">{children}</div>
    </motion.section>
  )
}
