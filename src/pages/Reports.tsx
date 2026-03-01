import { useMemo, useState } from "react"
import Section from "../ui/Section"
import { sessions } from "../data/sessions"
import { sessionReports } from "../data/reports"

export default function Reports() {
  const [selectedSessionId, setSelectedSessionId] = useState(sessions[0]?.id ?? "")

  const selectedSession = useMemo(
    () => sessions.find((session) => session.id === selectedSessionId) ?? sessions[0],
    [selectedSessionId]
  )

  const selectedReport = useMemo(
    () => sessionReports.find((report) => report.sessionId === selectedSession?.id),
    [selectedSession]
  )

  return (
    <div className="space-y-6">
      <Section title="Tasks">
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
            <div className="mt-2 text-zinc-400">Network Forensics</div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl panel-surface p-5 sm:p-6">
          {selectedReport ? (
            <div className="space-y-5">
              {selectedReport.tasks.map((task, index) => {
                const hasTaskUrl = Boolean(task.url)

                return (
                  <div
                    key={`${selectedReport.sessionId}-task-${index}`}
                    className="rounded-2xl border border-red-900/30 bg-black/25 p-4 sm:p-5"
                  >
                    <div className="text-xs tracking-[0.14em] text-zinc-400 uppercase">Task Information</div>
                    <div className="mt-2 text-xl font-extrabold text-red-400">{task.title}</div>
                    <div className="mt-3 text-sm text-zinc-300 leading-7 whitespace-pre-line">{task.details}</div>

                    <div className="mt-5">
                      {hasTaskUrl ? (
                        <a
                          href={task.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-red-800/45 bg-black/40 px-4 py-2 text-sm text-red-300 hover:text-red-200 hover:border-red-500/60 transition-all"
                        >
                          Open Task
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex items-center gap-2 rounded-xl border border-zinc-700/60 bg-zinc-900/45 px-4 py-2 text-sm text-zinc-500 cursor-not-allowed"
                        >
                          Task Link Not Added Yet
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-red-900/45 bg-black/30 p-4 text-sm text-zinc-400">
              No report data found for this session yet. Update <code>src/data/reports.ts</code>.
            </div>
          )}
        </div>
      </Section>
    </div>
  )
}
