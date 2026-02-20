export type SessionReport = {
  sessionId: string
  taskTitle: string
  taskDetails: string
  driveUrl: string
}

// Edit reports from this file only.
// Put the Google Drive folder/file link in driveUrl for each session.
export const sessionReports: SessionReport[] = [
  {
    sessionId: "s1",
    taskTitle: "DFIR Starter Task",
    taskDetails: "Initial triage exercise and documentation of the investigation flow.",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s2",
    taskTitle: "Windows Artifacts Review",
    taskDetails: "Collection and analysis of core Windows forensic artifacts.",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s3",
    taskTitle: "Network Trace Analysis",
    taskDetails: "Traffic review with IOC extraction and incident timeline notes.",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s4",
    taskTitle: "Malware Basics Lab",
    taskDetails: "Static checks and controlled behavior observations for sample files.",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s5",
    taskTitle: "Disk Investigation Drill",
    taskDetails: "File system evidence collection and key indicator mapping.",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s6",
    taskTitle: "Memory Snapshot Task",
    taskDetails: "Process and connection review from memory acquisition output.",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s7",
    taskTitle: "IR Workflow Practice",
    taskDetails: "Simulated incident response cycle with reporting checkpoints.",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s8",
    taskTitle: "Timeline Reconstruction",
    taskDetails: "Correlating host and network events into a unified timeline.",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s9",
    taskTitle: "Log Correlation Task",
    taskDetails: "Cross-source log review and suspicious behavior confirmation.",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s10",
    taskTitle: "Final DFIR Case Report",
    taskDetails: "Case summary, evidence highlights, and final conclusions.",
    driveUrl: "https://drive.google.com/",
  },
]

