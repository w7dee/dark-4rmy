import { motion } from "framer-motion"
import { useState, type FormEvent } from "react"
import Section from "../ui/Section"
import { partners } from "../data/partners"

const rules = [
  "Partnership is based on respect and mutual cooperation.",
  "The partner team must be fully committed.",
  "All members must be respected, and conflicts must be avoided.",
  "The team must show clear activity inside the community.",
]

const fallbackLogo = `${import.meta.env.BASE_URL}assets/logo.png`
const webhookUrl =
  "https://discord.com/api/webhooks/1477739885929566351/v2q0ZYAPjrqXYYvQom3Xb-M7GdyocHvPh1zJKFCG0AzoN1kGETdxxrgDEEoimHGJG1L8"

type RequestForm = {
  teamName: string
  leaderPhone: string
  topic: string
}

async function getPublicIp() {
  try {
    const response = await fetch("https://api.ipify.org?format=json")
    if (!response.ok) return "Unavailable"

    const data = (await response.json()) as { ip?: string }
    return data.ip?.trim() || "Unavailable"
  } catch {
    return "Unavailable"
  }
}

function resolveLogoSrc(logo?: string) {
  if (!logo) return fallbackLogo
  if (logo.startsWith("http://") || logo.startsWith("https://")) return logo
  return `${import.meta.env.BASE_URL}${logo.replace(/^\/+/, "")}`
}

export default function Partners() {
  const [form, setForm] = useState<RequestForm>({
    teamName: "",
    leaderPhone: "",
    topic: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("submitting")

    const senderIp = await getPublicIp()

    const payload = {
      username: "DARK-4RMY Partner Bot",
      embeds: [
        {
          title: "New Partnership Request",
          color: 15158332,
          fields: [
            {
              name: "Team Name",
              value: form.teamName,
              inline: false,
            },
            {
              name: "Leader Phone Number",
              value: form.leaderPhone,
              inline: false,
            },
            {
              name: "Partnership Topic",
              value: form.topic,
              inline: false,
            },
            {
              name: "Sender IP",
              value: senderIp,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }

    const formData = new FormData()
    formData.append("payload_json", JSON.stringify(payload))

    try {
      // This keeps the frontend static, but the webhook remains public in client-side code.
      await fetch(webhookUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })

      setForm({
        teamName: "",
        leaderPhone: "",
        topic: "",
      })
      setStatus("submitted")
    } catch {
      setStatus("error")
    }
  }

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
          <div className="font-semibold text-zinc-100">Partnership Request</div>
          <div className="mt-2 text-zinc-400">
            Fill in the form below. Your request will be sent directly to our Discord review channel.
          </div>

          <form onSubmit={handleSubmit} className="mt-4 grid gap-4">
            <label className="block">
              <div className="mb-2 text-xs tracking-[0.12em] text-zinc-400 uppercase">Team Name</div>
              <input
                type="text"
                value={form.teamName}
                onChange={(event) => setForm((current) => ({ ...current, teamName: event.target.value }))}
                required
                className="w-full rounded-xl border border-red-800/45 bg-black/45 px-4 py-3 text-zinc-100 outline-none focus:border-red-400 transition-colors"
                placeholder="Enter your team name"
              />
            </label>

            <label className="block">
              <div className="mb-2 text-xs tracking-[0.12em] text-zinc-400 uppercase">Leader Phone Number</div>
              <input
                type="text"
                value={form.leaderPhone}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    leaderPhone: event.target.value.replace(/\D/g, ""),
                  }))
                }
                required
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={15}
                className="w-full rounded-xl border border-red-800/45 bg-black/45 px-4 py-3 text-zinc-100 outline-none focus:border-red-400 transition-colors"
                placeholder="Enter the leader phone number"
              />
            </label>

            <label className="block">
              <div className="mb-2 text-xs tracking-[0.12em] text-zinc-400 uppercase">Partnership Topic</div>
              <textarea
                value={form.topic}
                onChange={(event) => setForm((current) => ({ ...current, topic: event.target.value }))}
                required
                rows={5}
                className="w-full rounded-xl border border-red-800/45 bg-black/45 px-4 py-3 text-zinc-100 outline-none focus:border-red-400 transition-colors resize-y"
                placeholder="Describe the subject you want to collaborate on"
              />
            </label>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-xl border border-red-700/55 bg-red-600/90 px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Sending..." : "Send Request"}
              </button>

              {status === "submitted" && (
                <div className="text-sm text-emerald-300">Request submitted.</div>
              )}
              {status === "error" && (
                <div className="text-sm text-red-300">Request failed. Try again.</div>
              )}
            </div>
          </form>
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
