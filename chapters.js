const chapters = [
  {
    title: "Firewall Breach",
    intro: "A firewall has blocked external communication. Decode the correct security path to bypass it.",
    questions: [
      {
        type: "MCQ",
        question: "What does a firewall primarily protect against?",
        options: ["Physical theft", "Unauthorized access", "Disk failure", "Power outage"],
        answer: "Unauthorized access"
      },
      {
        type: "MCQ",
        question: "Which port is commonly used for HTTP?",
        options: ["22", "443", "80", "3306"],
        answer: "80"
      }
    ]
  },
  {
    title: "Terminal Trace",
    intro: "A suspicious trace was detected in the terminal logs. Track it down before it’s too late.",
    questions: [
      {
        type: "MCQ",
        question: "Which Linux command shows running processes?",
        options: ["ls", "cd", "ps", "mkdir"],
        answer: "ps"
      },
      {
        type: "MCQ",
        question: "What symbol is used to reference the home directory?",
        options: ["/", "~", "$", "#"],
        answer: "~"
      }
    ]
  },
  {
    title: "Encryption Chaos",
    intro: "Critical files have been encrypted. Identify the algorithm before total lockout.",
    questions: [
      {
        type: "MCQ",
        question: "Which is a symmetric encryption algorithm?",
        options: ["RSA", "DES", "ECC", "Diffie-Hellman"],
        answer: "DES"
      },
      {
        type: "MCQ",
        question: "What does AES stand for?",
        options: ["Advanced Encryption Standard", "Automated Encoding System", "Access Encryption Service", "Array Encoding Standard"],
        answer: "Advanced Encryption Standard"
      }
    ]
  },
  {
    title: "Database Leak",
    intro: "Sensitive customer data is leaking. Pinpoint the injection point.",
    questions: [
      {
        type: "MCQ",
        question: "Which attack targets SQL databases?",
        options: ["Phishing", "Brute Force", "SQL Injection", "Ransomware"],
        answer: "SQL Injection"
      },
      {
        type: "MCQ",
        question: "Which keyword is commonly used in SQL injection attacks?",
        options: ["DELETE", "SELECT", "DROP", "' OR '1'='1"],
        answer: "' OR '1'='1"
      }
    ]
  },
  {
    title: "Code Injection",
    intro: "Malicious scripts have been found in your form inputs. Secure the backend!",
    questions: [
      {
        type: "MCQ",
        question: "What is the best way to prevent code injection?",
        options: ["Encrypt passwords", "Use antivirus", "Input validation", "Restart server"],
        answer: "Input validation"
      },
      {
        type: "MCQ",
        question: "What type of attack uses `<script>` tags in inputs?",
        options: ["XSS", "SQLi", "MITM", "DoS"],
        answer: "XSS"
      }
    ]
  },
  {
    title: "Packet Sniffed",
    intro: "Network packets are being monitored. Mask your traffic before it’s exposed.",
    questions: [
      {
        type: "MCQ",
        question: "Which tool is used for packet sniffing?",
        options: ["Wireshark", "FileZilla", "PuTTY", "Notepad++"],
        answer: "Wireshark"
      },
      {
        type: "MCQ",
        question: "Which protocol is secure?",
        options: ["HTTP", "FTP", "HTTPS", "Telnet"],
        answer: "HTTPS"
      }
    ]
  },
  {
    title: "Logic Lock",
    intro: "The digital lock requires solving a logic-based circuit puzzle.",
    questions: [
      {
        type: "MCQ",
        question: "What does a NAND gate return when both inputs are 1?",
        options: ["0", "1", "Error", "Undefined"],
        answer: "0"
      },
      {
        type: "MCQ",
        question: "Which gate gives true only if inputs differ?",
        options: ["AND", "XOR", "OR", "NOR"],
        answer: "XOR"
      }
    ]
  },
  {
    title: "Rooted Secrets",
    intro: "Root access was compromised. Re-secure administrative privileges.",
    questions: [
      {
        type: "MCQ",
        question: "What is the root user in Linux?",
        options: ["Guest", "Admin", "Superuser", "Rootkit"],
        answer: "Superuser"
      },
      {
        type: "MCQ",
        question: "Which file stores user accounts in Linux?",
        options: ["/etc/shadow", "/usr/bin", "/etc/passwd", "/home"],
        answer: "/etc/passwd"
      }
    ]
  },
  {
    title: "Server Heatwave",
    intro: "Temperature sensors show abnormal heat levels. Act fast to prevent meltdown!",
    questions: [
      {
        type: "MCQ",
        question: "What can cause a server to overheat?",
        options: ["Excess RAM", "Dust buildup", "HTTPS traffic", "Low disk usage"],
        answer: "Dust buildup"
      },
      {
        type: "MCQ",
        question: "Which tool monitors CPU temperature?",
        options: ["htop", "ping", "lm-sensors", "scp"],
        answer: "lm-sensors"
      }
    ]
  },
  {
    title: "The Final Override",
    intro: "You've reached the final control console. One last puzzle stands in your way.",
    questions: [
      {
        type: "MCQ",
        question: "Which key combination forces a system reboot?",
        options: ["Ctrl+C", "Ctrl+Z", "Ctrl+Alt+Del", "Alt+F4"],
        answer: "Ctrl+Alt+Del"
      },
      {
        type: "MCQ",
        question: "What does BIOS stand for?",
        options: ["Basic Input Output System", "Binary Integrated Operating System", "Boot Internal Output Standard", "Basic Integrated OS"],
        answer: "Basic Input Output System"
      }
    ]
  }
];
