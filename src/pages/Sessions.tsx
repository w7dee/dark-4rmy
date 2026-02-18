import { useMemo, useState } from "react"
import Section from "../ui/Section"
import { team } from "../data/team"
import { sessions } from "../data/sessions"
import { attendance } from "../data/attendance"

export default function Sessions() {
  const [selectedSessionId, setSelectedSessionId] = useState(sessions[0]?.id ?? "")

  const selectedSession = useMemo(
    () => sessions.find((session) => session.id === selectedSessionId) ?? sessions[0],
    [selectedSessionId]
  )

  const selectedTotals = useMemo(() => {
    if (!selectedSession) return { present: 0, absent: team.length }

    let present = 0
    for (const member of team) {
      if ((attendance[member.id]?.[selectedSession.id] ?? 0) === 1) present++
    }

    return { present, absent: team.length - present }
  }, [selectedSession])

  return (
    <div className="space-y-6">
      <Section title="Sessions Attendance">
        <div className="grid sm:grid-cols-[1fr_auto] gap-4 sm:items-end">
          <label className="block">
            <div className="text-xs text-zinc-400 tracking-[0.12em] mb-2">SELECT SESSION</div>
            <select
              value={selectedSession?.id ?? ""}
              onChange={(event) => setSelectedSessionId(event.target.value)}
              className="w-full sm:max-w-sm rounded-xl border border-red-800/45 bg-black/50 px-4 py-3 text-zinc-100 outline-none focus:border-red-400 transition-colors"
            >
              {sessions.map((session) => (
                <option key={session.id} value={session.id} className="bg-[#0b0b0f]">
                  {session.title}
                </option>
              ))}
            </select>
          </label>

          <div className="rounded-xl border border-red-900/35 bg-black/35 px-4 py-3 text-sm text-zinc-300 shadow-glow">
            <div className="font-semibold text-zinc-100">{selectedSession?.title ?? "Session"}</div>
            {selectedSession?.date && <div className="text-xs text-zinc-500 mt-1">{selectedSession.date}</div>}
            <div className="mt-2">
              Present {selectedTotals.present} | Absent {selectedTotals.absent}
            </div>
          </div>
        </div>

        <div className="mt-5 overflow-auto rounded-2xl panel-surface">
          <div className="sm:hidden divide-y divide-red-900/20">
            {team.map((member) => {
              const value = selectedSession ? (attendance[member.id]?.[selectedSession.id] ?? 0) : 0
              const present = value === 1

              return (
                <div key={`mobile-${member.id}`} className="p-3 flex items-center justify-between gap-3">
                  <div className="font-semibold text-zinc-200 leading-snug break-words">{member.name}</div>
                  <div
                    className={[
                      "w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 select-none",
                      present
                        ? "bg-red-500 border-red-200 text-black shadow-[0_0_16px_rgba(248,113,113,0.45)]"
                        : "bg-zinc-950 border-zinc-700 text-zinc-400",
                    ].join(" ")}
                    title={`${present ? "Present" : "Absent"} (${value})`}
                    aria-label={`${present ? "Present" : "Absent"} (${value})`}
                  >
                    <span className="text-xl font-black leading-none">{present ? "\u2713" : "\u2715"}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <table className="hidden sm:table w-full text-sm">
            <thead className="sticky top-0 bg-black/75 backdrop-blur">
              <tr>
                <th className="p-3 text-left text-zinc-200">Member</th>
                <th className="p-3 text-left text-zinc-200">Status</th>
              </tr>
            </thead>

            <tbody>
              {team.map((member) => {
                const value = selectedSession ? (attendance[member.id]?.[selectedSession.id] ?? 0) : 0
                const present = value === 1

                return (
                  <tr key={member.id} className="border-t border-red-900/20 table-row-hover">
                    <td className="p-3 font-semibold text-zinc-200">{member.name}</td>
                    <td className="p-3">
                      <div
                        className={[
                          "w-12 h-12 rounded-xl border flex items-center justify-center select-none",
                          present
                            ? "bg-red-500 border-red-200 text-black shadow-[0_0_16px_rgba(248,113,113,0.45)]"
                            : "bg-zinc-950 border-zinc-700 text-zinc-400",
                        ].join(" ")}
                        title={`${present ? "Present" : "Absent"} (${value})`}
                        aria-label={`${present ? "Present" : "Absent"} (${value})`}
                      >
                        <span className="text-xl font-black leading-none">{present ? "\u2713" : "\u2715"}</span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  )
}
