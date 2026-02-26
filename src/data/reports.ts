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
    taskTitle: "Session 1 Task",
    taskDetails: `Main Task
- Packet Life Cycle - tracing data from creation to transmission across
network layers.
- Network Devices - roles of Routers, Switches, and Hubs in packet flow
and investigation.
- Data Encapsulation - how headers and trailers are added and removed
across layers.
- Essential Services - behavior and forensic relevance of DNS and ARP.

Bonus Task
- Difference between TCP vs UDP in investigations
- Packet fragmentation analysis
- Port scanning detection techniques
- DHCP logs analysis
- NAT and its forensic impact`,
    driveUrl: "https://drive.google.com/file/d/1OUDwfE8_by3zrn4jyoToqKTneHk_yhRc/view?usp=sharing",
  },
  {
    sessionId: "s2",
    taskTitle: "No Data",
    taskDetails: "No Data",
    driveUrl: "https://medium.com/@w7dee/team-dark-4rmy-laps-b1aab7b0dbe7",
  },
  {
    sessionId: "s3",
    taskTitle: "No Data",
    taskDetails: "No Data",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s4",
    taskTitle: "No Data",
    taskDetails: "No Data",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s5",
    taskTitle: "No Data",
    taskDetails: "No Data",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s6",
    taskTitle: "No Data",
    taskDetails: "No Data",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s7",
    taskTitle: "No Data",
    taskDetails: "No Data",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s8",
    taskTitle: "No Data",
    taskDetails: "No Data",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s9",
    taskTitle: "No Data",
    taskDetails: "No Data",
    driveUrl: "https://drive.google.com/",
  },
  {
    sessionId: "s10",
    taskTitle: "No Data",
    taskDetails: "No Data",
    driveUrl: "https://drive.google.com/",
  },
]
