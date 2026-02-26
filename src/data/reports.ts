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
    taskTitle: "Session 2 Task",
    taskDetails: `3 labs in the Network Forensics section

Lab1
1 - What is the name of this attack ?
2 - What is the Attacker's IP address ?
3 - What is the web server's IP address ?
4 - When did the first TCP connection between the attacker and the server start ?
5 - Which destination port was targeted during the attack ?
6 - How many ( attack-name ) attempts were made during the session ?
7 - What is the version of this database ?
8 - How many users in this DB ?
9 - What is the username and password used by the attacker ?
10 - When did the attacker access the admin page?
11 - What text is displayed on the image in the admin page ? (in Arabic)

Lab2
1 - What is the name of this attack ?
2 - What is the Attacker's IP address ?
3 - What is the server's IP address ?
4 - How many unsuccessful login attempts did the attacker make ?
5 - When did the attacker obtain the correct password?
6 - What Wireshark display filter would you use to show all FTP change directory commands?
7 - How many times was the FTP change directory ?
8 - What is the username and password used by the attacker ?
9 - How many files did the attacker steal ?
10 - what is the Attacker's MAC ?

Lab3
1 - What is the Attacker's IP address ?
2 - What is the Victem's IP address ?
3 - When did the victim send the HTTP request to download the malware from the suspicious website ?
4 - What is the domain name of the suspicious website ?
5 - What is the name of the malware file ?
6 - What destination port was used by the attacker to exfiltrate data from the victim's machine?
7 - What is the name of the folder that was stolen?
8 - How many files were inside that folder?
9 - Which network protocol was used by the attacker to exfiltrate the data?
10 - When did the last communication between the attacker and the victim occur?`,
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
