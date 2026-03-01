export type TaskEntry = {
  title: string
  details: string
  url: string
}

export type SessionReport = {
  sessionId: string
  tasks: TaskEntry[]
}

// Edit tasks from this file only.
export const sessionReports: SessionReport[] = [
  {
    sessionId: "s1",
    tasks: [
      {
        title: "Session 1 Task",
        details: `Main Task
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
        url: "https://drive.google.com/file/d/1OUDwfE8_by3zrn4jyoToqKTneHk_yhRc/view?usp=sharing",
      },
    ],
  },
  {
    sessionId: "s2",
    tasks: [
      {
        title: "Session 2 Task 1",
        details: `3 labs in the Network Forensics section

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
        url: "https://medium.com/@w7dee/team-dark-4rmy-laps-b1aab7b0dbe7",
      },
      {
        title: "Session 2 Task 2",
        details: `Case Study: Operation "Silent Exit"
Case Background: During a routine network audit at "Tech-Safe Solutions," the SOC team
flagged suspicious outbound traffic originating from a workstation belonging to an
employee named "Ahmed" (Workstation-01). The traffic was captured in a PCAP file. As a
forensic analyst at the Digital Forensics HUB, your task is to analyze the capture and
answer the following investigative questions to determine the nature of this activity.

Level 1: Basic Network Identification
1. Source IP Address: Identify the IP address of the victim's machine that initiated the connection.
2. Destination IP Address: Identify the IP address of the suspicious external receiver (the attacker).
3. Source Port: What was the ephemeral port opened by the victim's machine?
4. Destination Port: What specific port number was the attacker listening on?
5. Protocol: What transport layer protocol was used for this data transfer?

Level 2: Data & Packet Analysis
6. Handshake Analysis: Was the connection successfully established? Provide the relative sequence numbers for the SYN, SYN-ACK, and ACK packets.
7. Data Volume: Calculate the total volume of data (in Kilobytes) exfiltrated during this specific TCP stream.
8. File Signature (Magic Bytes): Analyze the TCP Stream. What are the first two bytes (Hex/ASCII) of the data payload? What file type does this signature represent?
9. Embedded Artifacts: Within the stream, can you find any clear-text strings? List at least three filenames that were contained inside the exfiltrated archive.
10. Timing: How long did the entire exfiltration process take, from the initial handshake to the connection termination (FIN/RST)?

Level 3: Forensic Reasoning & Logic
11. Attack Vector: Based on the destination port and the behavior, do you believe this was standard web browsing (HTTP/S) or a custom script? Justify your answer.
12. Detection Evasion: If the attacker had used port 443 instead of 4444, how would you distinguish this malicious traffic from legitimate HTTPS traffic?
13. Data Integrity: If you attempted to recover the file but it appeared "corrupted," what network-level events (e.g., packet loss, retransmissions) could explain this?
14. Fileless Context: If no files were found on the hard drive, but the network capture shows data leaving the machine, what does this suggest about the execution method? (Think about memory-resident scripts).
15. The "Smoking Gun": What is the most critical piece of evidence in this PCAP that proves "Data Theft" occurred`,
        url: "https://medium.com/@w7dee/team-dark-4rmy-task-2-fa904e8d9467",
      },
    ],
  },
  {
    sessionId: "s3",
    tasks: [{ title: "No Data", details: "No Data", url: "" }],
  },
  {
    sessionId: "s4",
    tasks: [{ title: "No Data", details: "No Data", url: "" }],
  },
  {
    sessionId: "s5",
    tasks: [{ title: "No Data", details: "No Data", url: "" }],
  },
  {
    sessionId: "s6",
    tasks: [{ title: "No Data", details: "No Data", url: "" }],
  },
  {
    sessionId: "s7",
    tasks: [{ title: "No Data", details: "No Data", url: "" }],
  },
  {
    sessionId: "s8",
    tasks: [{ title: "No Data", details: "No Data", url: "" }],
  },
  {
    sessionId: "s9",
    tasks: [{ title: "No Data", details: "No Data", url: "" }],
  },
  {
    sessionId: "s10",
    tasks: [{ title: "No Data", details: "No Data", url: "" }],
  },
]

