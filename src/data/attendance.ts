import { team } from "./team"
import { sessions } from "./sessions"

export type AttendanceValue = 0 | 1
export type AttendanceMap = Record<string, Record<string, AttendanceValue>>
type AttendanceOverrides = Partial<Record<string, Partial<Record<string, AttendanceValue>>>>

const sessionOneAllPresentExceptAhmedHany: AttendanceOverrides = Object.fromEntries(
  team.map((member) => [member.id, { s1: member.id === "m7" ? 0 : 1 }])
)

const attendanceOverrides: AttendanceOverrides = {
  ...sessionOneAllPresentExceptAhmedHany,
}

export const attendance: AttendanceMap = Object.fromEntries(
  team.map((member) => [
    member.id,
    Object.fromEntries(
      sessions.map((session) => [
        session.id,
        attendanceOverrides[member.id]?.[session.id] ?? 0,
      ])
    ),
  ])
)
