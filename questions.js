const question = {
  1: [
    {
      type: "MCQ",
      question: "What is the primary function of a server?",
      options: ["To store websites", "To play games", "To display images", "To send emails"],
      answer: "To store websites"
    },
    {
      type: "MCQ",
      question: "What does HTTP stand for?",
      options: ["HyperText Transfer Protocol", "High Task Tracking Protocol", "HyperTime Text Program", "Home Transfer Text Page"],
      answer: "HyperText Transfer Protocol"
    },
    {
      type: "MCQ",
      question: "What is a firewall used for?",
      options: ["Burning data", "Cooling systems", "Protecting networks", "Creating websites"],
      answer: "Protecting networks"
    },
    {
      type: "MCQ",
      question: "Which language is used to structure web content?",
      options: ["CSS", "Python", "HTML", "Java"],
      answer: "HTML"
    },
    {
      type: "MCQ",
      question: "Which of the following is NOT a server OS?",
      options: ["Windows Server", "Ubuntu Server", "Android", "Red Hat Enterprise Linux"],
      answer: "Android"
    },
    {
      type: "MCQ",
      question: "What does DNS translate?",
      options: ["IP to MAC", "URL to IP", "HTML to CSS", "Port to Hostname"],
      answer: "URL to IP"
    },
    {
      type: "MCQ",
      question: "Where are server files typically stored?",
      options: ["RAM", "Hard Drive", "Monitor", "GPU"],
      answer: "Hard Drive"
    },
    {
      type: "MCQ",
      question: "Which port is used for HTTP?",
      options: ["21", "80", "443", "22"],
      answer: "80"
    },
    {
      type: "MCQ",
      question: "Which protocol secures data over the web?",
      options: ["FTP", "HTTP", "SMTP", "HTTPS"],
      answer: "HTTPS"
    },
    {
      type: "MCQ",
      question: "Which of the following is a backend language?",
      options: ["HTML", "CSS", "Python", "Photoshop"],
      answer: "Python"
    }
  ],
  2: [
    {
      type: "MCQ",
      question: "Which device routes data between networks?",
      options: ["Switch", "Hub", "Router", "Bridge"],
      answer: "Router"
    },
    {
      type: "MCQ",
      question: "Which cable is used for internet connection?",
      options: ["HDMI", "Ethernet", "VGA", "USB"],
      answer: "Ethernet"
    },
    {
      type: "MCQ",
      question: "Which layer does IP operate in OSI model?",
      options: ["Application", "Transport", "Network", "Data Link"],
      answer: "Network"
    },
    {
      type: "MCQ",
      question: "Which address is unique to every device?",
      options: ["IP Address", "MAC Address", "URL", "Hostname"],
      answer: "MAC Address"
    },
    {
      type: "MCQ",
      question: "What does LAN stand for?",
      options: ["Local Area Network", "Long Access Network", "Linear Array Node", "Local Advanced Node"],
      answer: "Local Area Network"
    },
    {
      type: "MCQ",
      question: "Which protocol is used for sending emails?",
      options: ["FTP", "SMTP", "HTTP", "IMAP"],
      answer: "SMTP"
    },
    {
      type: "MCQ",
      question: "What is the function of a switch?",
      options: ["Connects networks", "Stores data", "Displays output", "Connects devices within a network"],
      answer: "Connects devices within a network"
    },
    {
      type: "MCQ",
      question: "Which network device amplifies signal?",
      options: ["Router", "Repeater", "Switch", "Hub"],
      answer: "Repeater"
    },
    {
      type: "MCQ",
      question: "What is bandwidth measured in?",
      options: ["Hz", "Bits per second", "Volts", "Amps"],
      answer: "Bits per second"
    },
    {
      type: "MCQ",
      question: "What does ISP stand for?",
      options: ["Internet Service Provider", "Internal Server Protocol", "Instant Service Port", "Internet Secured Protocol"],
      answer: "Internet Service Provider"
    }
  ],
  3: [
    {
      type: "MCQ",
      question: "What does CPU stand for?",
      options: ["Central Performance Unit", "Central Processing Unit", "Core Programming Unit", "Computer Power Unit"],
      answer: "Central Processing Unit"
    },
    {
      type: "MCQ",
      question: "Which component is responsible for memory storage?",
      options: ["GPU", "RAM", "CPU", "NIC"],
      answer: "RAM"
    },
    {
      type: "MCQ",
      question: "What is the full form of SSD?",
      options: ["Solid State Drive", "Super Speed Device", "Storage Server Data", "System Signal Drive"],
      answer: "Solid State Drive"
    },
    {
      type: "MCQ",
      question: "Which unit manages logical operations?",
      options: ["CU", "RAM", "ALU", "ROM"],
      answer: "ALU"
    },
    {
      type: "MCQ",
      question: "What is the main function of the motherboard?",
      options: ["Store Data", "Connect Components", "Run OS", "Display Video"],
      answer: "Connect Components"
    },
    {
      type: "MCQ",
      question: "What does ROM stand for?",
      options: ["Read Only Memory", "Random Online Memory", "Run Once Mode", "Read Open Module"],
      answer: "Read Only Memory"
    },
    {
      type: "MCQ",
      question: "Which one is volatile memory?",
      options: ["ROM", "SSD", "RAM", "HDD"],
      answer: "RAM"
    },
    {
      type: "MCQ",
      question: "Which bus carries data inside the computer?",
      options: ["Control Bus", "Data Bus", "Address Bus", "Power Bus"],
      answer: "Data Bus"
    },
    {
      type: "MCQ",
      question: "Which component handles graphics?",
      options: ["CPU", "NIC", "GPU", "RAM"],
      answer: "GPU"
    },
    {
      type: "MCQ",
      question: "What is BIOS used for?",
      options: ["Data Backup", "Operating System", "Boot Process", "Network Setup"],
      answer: "Boot Process"
    }
  ],
  // Placeholder chapters 4–10
  4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: []
};
const questions = {
  5: [
    {
      type: "MCQ",
      question: "What is RAID in server systems?",
      options: ["Random Access for Input Devices", "Redundant Array of Independent Disks", "Rapid Application Interface Design", "Root Access Internal Directory"],
      answer: "Redundant Array of Independent Disks"
    },
    {
      type: "MCQ",
      question: "Which RAID level offers mirroring?",
      options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
      answer: "RAID 1"
    },
    {
      type: "MCQ",
      question: "What is the primary purpose of a UPS in server rooms?",
      options: ["Speed up performance", "Backup internet connection", "Supply power during outages", "Boost WiFi range"],
      answer: "Supply power during outages"
    },
    {
      type: "MCQ",
      question: "Which temperature range is optimal for a server room?",
      options: ["0-10°C", "18-27°C", "30-40°C", "50-60°C"],
      answer: "18-27°C"
    },
    {
      type: "MCQ",
      question: "Which of the following helps reduce dust in a server room?",
      options: ["Adding more fans", "Using air purifiers and filters", "Removing AC", "Opening windows"],
      answer: "Using air purifiers and filters"
    },
    {
      type: "MCQ",
      question: "What does a server rack do?",
      options: ["Cool down servers", "Organize and mount servers", "Provide internet", "Manage power supply"],
      answer: "Organize and mount servers"
    },
    {
      type: "MCQ",
      question: "Which tool monitors temperature and humidity in server rooms?",
      options: ["Hygrometer", "Multimeter", "Volt meter", "Ohmmeter"],
      answer: "Hygrometer"
    },
    {
      type: "MCQ",
      question: "Hot aisle/cold aisle is a technique for:",
      options: ["Power distribution", "Cooling efficiency", "Network configuration", "Data encryption"],
      answer: "Cooling efficiency"
    },
    {
      type: "MCQ",
      question: "Which of these is a fire suppression method in server rooms?",
      options: ["CO2 systems", "Water sprinklers", "Compressed air", "Electric fences"],
      answer: "CO2 systems"
    },
    {
      type: "MCQ",
      question: "What should NOT be stored in a server room?",
      options: ["Documentation", "Spare drives", "Food and drinks", "Cables"],
      answer: "Food and drinks"
    }
  ],
  6: [
    {
      type: "MCQ",
      question: "Which protocol is commonly used for secure shell access to servers?",
      options: ["FTP", "HTTP", "SSH", "SMTP"],
      answer: "SSH"
    },
    {
      type: "MCQ",
      question: "What does DNS stand for?",
      options: ["Data Network System", "Domain Name System", "Dynamic Network Setting", "Digital Name Security"],
      answer: "Domain Name System"
    },
    {
      type: "MCQ",
      question: "Which port is used for HTTPS?",
      options: ["80", "21", "443", "22"],
      answer: "443"
    },
    {
      type: "MCQ",
      question: "Which is a strong password practice?",
      options: ["Using '123456'", "Using your birth date", "Using complex symbols and letters", "Using only your name"],
      answer: "Using complex symbols and letters"
    },
    {
      type: "MCQ",
      question: "A firewall is used to:",
      options: ["Speed up the internet", "Manage users", "Block unauthorized access", "Store backups"],
      answer: "Block unauthorized access"
    },
    {
      type: "MCQ",
      question: "Which tool is used to trace network routes?",
      options: ["Ping", "TraceRoute", "Netstat", "Whois"],
      answer: "TraceRoute"
    },
    {
      type: "MCQ",
      question: "VPN stands for:",
      options: ["Virtual Process Network", "Virtual Private Network", "Verified Public Network", "Visible Packet Network"],
      answer: "Virtual Private Network"
    },
    {
      type: "MCQ",
      question: "Which of these is a form of malware?",
      options: ["Router", "Firewall", "Ransomware", "Switch"],
      answer: "Ransomware"
    },
    {
      type: "MCQ",
      question: "What is two-factor authentication?",
      options: ["Using two usernames", "Logging in twice", "Verifying identity with two methods", "A type of firewall"],
      answer: "Verifying identity with two methods"
    },
    {
      type: "MCQ",
      question: "Which software helps manage multiple virtual machines?",
      options: ["Word Processor", "Hypervisor", "Antivirus", "File Manager"],
      answer: "Hypervisor"
    }
  ],
  7: [
    {
      type: "MCQ",
      question: "Which of these is not a backup type?",
      options: ["Full", "Incremental", "Differential", "Split"],
      answer: "Split"
    },
    {
      type: "MCQ",
      question: "What is the best backup frequency for critical data?",
      options: ["Yearly", "Monthly", "Weekly", "Daily"],
      answer: "Daily"
    },
    {
      type: "MCQ",
      question: "Where should offsite backups be stored?",
      options: ["Same building", "Cloud or different location", "On desktop", "USB on server"],
      answer: "Cloud or different location"
    },
    {
      type: "MCQ",
      question: "Which file type is commonly used for compressed backups?",
      options: [".exe", ".zip", ".bat", ".dll"],
      answer: ".zip"
    },
    {
      type: "MCQ",
      question: "Which device stores large backups?",
      options: ["Flash drive", "External SSD", "Tape drive", "SD card"],
      answer: "Tape drive"
    },
    {
      type: "MCQ",
      question: "How often should backup recovery tests be done?",
      options: ["Never", "Every 5 years", "Annually", "Regularly"],
      answer: "Regularly"
    },
    {
      type: "MCQ",
      question: "Cloud backup services are:",
      options: ["Slow", "Unreliable", "Remote and scalable", "Illegal"],
      answer: "Remote and scalable"
    },
    {
      type: "MCQ",
      question: "What does RTO stand for?",
      options: ["Recovery Time Objective", "Remote Task Operation", "Resource Test Output", "Random Transfer Option"],
      answer: "Recovery Time Objective"
    },
    {
      type: "MCQ",
      question: "RAID is helpful for:",
      options: ["Password storage", "Power backup", "Disk redundancy", "Networking"],
      answer: "Disk redundancy"
    },
    {
      type: "MCQ",
      question: "What is data retention?",
      options: ["Destroying data", "Monitoring traffic", "Keeping data for a time period", "Data collection"],
      answer: "Keeping data for a time period"
    }
  ],
  // Chapters 8–10 will be continued in the next message...
};
// Continuing from previous content...

const questions = {
  // ... Chapters 1–7 from earlier

  8: [
    {
      type: "MCQ",
      question: "Which device connects different network segments?",
      options: ["Switch", "Router", "Modem", "Repeater"],
      answer: "Router"
    },
    {
      type: "MCQ",
      question: "What does LAN stand for?",
      options: ["Local Area Network", "Large Area Network", "Light Access Network", "Logical Array Node"],
      answer: "Local Area Network"
    },
    {
      type: "MCQ",
      question: "Which IP class is used for large organizations?",
      options: ["Class A", "Class B", "Class C", "Class D"],
      answer: "Class A"
    },
    {
      type: "MCQ",
      question: "What is the function of a switch?",
      options: ["Assign IP addresses", "Transmit power", "Forward data to devices", "Encrypt emails"],
      answer: "Forward data to devices"
    },
    {
      type: "MCQ",
      question: "Which protocol assigns IP addresses automatically?",
      options: ["DNS", "DHCP", "HTTP", "FTP"],
      answer: "DHCP"
    },
    {
      type: "MCQ",
      question: "What tool checks if a host is reachable?",
      options: ["Ping", "Traceroute", "Firewall", "VPN"],
      answer: "Ping"
    },
    {
      type: "MCQ",
      question: "What is a MAC address?",
      options: ["A router name", "A server location", "A hardware identifier", "A backup type"],
      answer: "A hardware identifier"
    },
    {
      type: "MCQ",
      question: "What layer is IP located in the OSI model?",
      options: ["Application", "Transport", "Network", "Data Link"],
      answer: "Network"
    },
    {
      type: "MCQ",
      question: "Which tool monitors network traffic?",
      options: ["Wireshark", "Notepad", "Excel", "Photoshop"],
      answer: "Wireshark"
    },
    {
      type: "MCQ",
      question: "What is port forwarding?",
      options: ["Blocking ports", "Hiding IPs", "Routing requests to a specific device", "Creating new networks"],
      answer: "Routing requests to a specific device"
    }
  ],
  9: [
    {
      type: "MCQ",
      question: "Which language is commonly used for server scripting?",
      options: ["HTML", "JavaScript", "Python", "CSS"],
      answer: "Python"
    },
    {
      type: "MCQ",
      question: "What is Git used for?",
      options: ["Networking", "Power supply", "Version control", "Gaming"],
      answer: "Version control"
    },
    {
      type: "MCQ",
      question: "Which command initializes a new Git repository?",
      options: ["git start", "git new", "git init", "git begin"],
      answer: "git init"
    },
    {
      type: "MCQ",
      question: "Which tool is used to manage dependencies in JavaScript?",
      options: ["npm", "node", "python", "html"],
      answer: "npm"
    },
    {
      type: "MCQ",
      question: "Which symbol is used for comments in Python?",
      options: ["//", "#", "<!-- -->", "/* */"],
      answer: "#"
    },
    {
      type: "MCQ",
      question: "What does API stand for?",
      options: ["Advanced Programming Interface", "Application Programming Interface", "Auto Program Installer", "Application Proxy Interface"],
      answer: "Application Programming Interface"
    },
    {
      type: "MCQ",
      question: "What is a benefit of open-source software?",
      options: ["High price", "Closed development", "Community contributions", "Limited access"],
      answer: "Community contributions"
    },
    {
      type: "MCQ",
      question: "Which command lists files in Linux?",
      options: ["ls", "cd", "rm", "mkdir"],
      answer: "ls"
    },
    {
      type: "MCQ",
      question: "What is Docker used for?",
      options: ["Gaming", "Virtualization", "Containerization", "Photo editing"],
      answer: "Containerization"
    },
    {
      type: "MCQ",
      question: "Which format is common for configuration files?",
      options: [".exe", ".jpg", ".yaml", ".mp3"],
      answer: ".yaml"
    }
  ],
  10: [
    {
      type: "MCQ",
      question: "What does IT stand for?",
      options: ["Information Tracking", "Internet Telecommunication", "Information Technology", "Internal Transfer"],
      answer: "Information Technology"
    },
    {
      type: "MCQ",
      question: "Which job is focused on network security?",
      options: ["Web designer", "Cybersecurity analyst", "Photographer", "Animator"],
      answer: "Cybersecurity analyst"
    },
    {
      type: "MCQ",
      question: "Which certification is for networking professionals?",
      options: ["PMP", "CEH", "CCNA", "CPA"],
      answer: "CCNA"
    },
    {
      type: "MCQ",
      question: "Which organization defines internet standards?",
      options: ["NASA", "IEEE", "IETF", "FIFA"],
      answer: "IETF"
    },
    {
      type: "MCQ",
      question: "Which of these is a programming language?",
      options: ["TCP", "Python", "HTTPS", "Wi-Fi"],
      answer: "Python"
    },
    {
      type: "MCQ",
      question: "What is IoT?",
      options: ["Internet of Topics", "Internet of Things", "Input of Text", "Image over Text"],
      answer: "Internet of Things"
    },
    {
      type: "MCQ",
      question: "Which field involves AI and machine learning?",
      options: ["Web design", "Data science", "Office admin", "Construction"],
      answer: "Data science"
    },
    {
      type: "MCQ",
      question: "What is cloud computing?",
      options: ["Weather prediction", "Running programs on the internet", "Offline computing", "Disk repair"],
      answer: "Running programs on the internet"
    },
    {
      type: "MCQ",
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "Python", "SQL"],
      answer: "CSS"
    },
    {
      type: "MCQ",
      question: "Which of these is a mobile operating system?",
      options: ["Windows", "Linux", "Android", "Ubuntu"],
      answer: "Android"
    }
  ]
};
