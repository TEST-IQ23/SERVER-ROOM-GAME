const questions = {
  1: [ /* Chapter 1 Questions */ 
    { type: "MCQ", question: "What is the primary function of a server?", options: ["To store websites", "To play games", "To display images", "To send emails"], answer: "To store websites" },
    { type: "MCQ", question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "High Task Tracking Protocol", "HyperTime Text Program", "Home Transfer Text Page"], answer: "HyperText Transfer Protocol" },
    { type: "MCQ", question: "What is a firewall used for?", options: ["Burning data", "Cooling systems", "Protecting networks", "Creating websites"], answer: "Protecting networks" },
    { type: "MCQ", question: "Which language is used to structure web content?", options: ["CSS", "Python", "HTML", "Java"], answer: "HTML" },
    { type: "MCQ", question: "Which of the following is NOT a server OS?", options: ["Windows Server", "Ubuntu Server", "Android", "Red Hat Enterprise Linux"], answer: "Android" },
    { type: "MCQ", question: "What does DNS translate?", options: ["IP to MAC", "URL to IP", "HTML to CSS", "Port to Hostname"], answer: "URL to IP" },
    { type: "MCQ", question: "Where are server files typically stored?", options: ["RAM", "Hard Drive", "Monitor", "GPU"], answer: "Hard Drive" },
    { type: "MCQ", question: "Which port is used for HTTP?", options: ["21", "80", "443", "22"], answer: "80" },
    { type: "MCQ", question: "Which protocol secures data over the web?", options: ["FTP", "HTTP", "SMTP", "HTTPS"], answer: "HTTPS" },
    { type: "MCQ", question: "Which of the following is a backend language?", options: ["HTML", "CSS", "Python", "Photoshop"], answer: "Python" }
  ],
  2: [ /* Chapter 2 Questions */ 
    { type: "MCQ", question: "Which device routes data between networks?", options: ["Switch", "Hub", "Router", "Bridge"], answer: "Router" },
    { type: "MCQ", question: "Which cable is used for internet connection?", options: ["HDMI", "Ethernet", "VGA", "USB"], answer: "Ethernet" },
    { type: "MCQ", question: "Which layer does IP operate in OSI model?", options: ["Application", "Transport", "Network", "Data Link"], answer: "Network" },
    { type: "MCQ", question: "Which address is unique to every device?", options: ["IP Address", "MAC Address", "URL", "Hostname"], answer: "MAC Address" },
    { type: "MCQ", question: "What does LAN stand for?", options: ["Local Area Network", "Long Access Network", "Linear Array Node", "Local Advanced Node"], answer: "Local Area Network" },
    { type: "MCQ", question: "Which protocol is used for sending emails?", options: ["FTP", "SMTP", "HTTP", "IMAP"], answer: "SMTP" },
    { type: "MCQ", question: "What is the function of a switch?", options: ["Connects networks", "Stores data", "Displays output", "Connects devices within a network"], answer: "Connects devices within a network" },
    { type: "MCQ", question: "Which network device amplifies signal?", options: ["Router", "Repeater", "Switch", "Hub"], answer: "Repeater" },
    { type: "MCQ", question: "What is bandwidth measured in?", options: ["Hz", "Bits per second", "Volts", "Amps"], answer: "Bits per second" },
    { type: "MCQ", question: "What does ISP stand for?", options: ["Internet Service Provider", "Internal Server Protocol", "Instant Service Port", "Internet Secured Protocol"], answer: "Internet Service Provider" }
  ],
  3: [ /* Chapter 3 Questions */ 
    { type: "MCQ", question: "What does CPU stand for?", options: ["Central Performance Unit", "Central Processing Unit", "Core Programming Unit", "Computer Power Unit"], answer: "Central Processing Unit" },
    { type: "MCQ", question: "Which component is responsible for memory storage?", options: ["GPU", "RAM", "CPU", "NIC"], answer: "RAM" },
    { type: "MCQ", question: "What is the full form of SSD?", options: ["Solid State Drive", "Super Speed Device", "Storage Server Data", "System Signal Drive"], answer: "Solid State Drive" },
    { type: "MCQ", question: "Which unit manages logical operations?", options: ["CU", "RAM", "ALU", "ROM"], answer: "ALU" },
    { type: "MCQ", question: "What is the main function of the motherboard?", options: ["Store Data", "Connect Components", "Run OS", "Display Video"], answer: "Connect Components" },
    { type: "MCQ", question: "What does ROM stand for?", options: ["Read Only Memory", "Random Online Memory", "Run Once Mode", "Read Open Module"], answer: "Read Only Memory" },
    { type: "MCQ", question: "Which one is volatile memory?", options: ["ROM", "SSD", "RAM", "HDD"], answer: "RAM" },
    { type: "MCQ", question: "Which bus carries data inside the computer?", options: ["Control Bus", "Data Bus", "Address Bus", "Power Bus"], answer: "Data Bus" },
    { type: "MCQ", question: "Which component handles graphics?", options: ["CPU", "NIC", "GPU", "RAM"], answer: "GPU" },
    { type: "MCQ", question: "What is BIOS used for?", options: ["Data Backup", "Operating System", "Boot Process", "Network Setup"], answer: "Boot Process" }
  ],
  // ... Chapters 4 to 10 included the same way (too long to paste all at once)
  // You can keep using the same structure.
};
  4: [ /* Chapter 4 Questions */ 
    { type: "MCQ", question: "What does OS stand for?", options: ["Online System", "Operating System", "Open Software", "Optical Setup"], answer: "Operating System" },
    { type: "MCQ", question: "Which OS is open-source?", options: ["Windows", "macOS", "Linux", "iOS"], answer: "Linux" },
    { type: "MCQ", question: "Which OS is used for Apple computers?", options: ["Linux", "Windows", "macOS", "Android"], answer: "macOS" },
    { type: "MCQ", question: "Which is a mobile operating system?", options: ["Ubuntu", "iOS", "Fedora", "Debian"], answer: "iOS" },
    { type: "MCQ", question: "What is multitasking in OS?", options: ["Running one task", "Running background music", "Running multiple tasks at once", "Running BIOS"], answer: "Running multiple tasks at once" },
    { type: "MCQ", question: "Which OS uses Terminal for commands?", options: ["Windows", "Linux", "Android", "macOS"], answer: "Linux" },
    { type: "MCQ", question: "What is GUI?", options: ["Global User Interface", "Graphical User Interface", "General Unit Interface", "Graph Usage Integration"], answer: "Graphical User Interface" },
    { type: "MCQ", question: "Which OS runs on most servers?", options: ["Windows", "Linux", "iOS", "Android"], answer: "Linux" },
    { type: "MCQ", question: "What is the kernel in OS?", options: ["Shell", "Main memory", "Core of OS", "GUI"], answer: "Core of OS" },
    { type: "MCQ", question: "Which OS was created by Microsoft?", options: ["Linux", "macOS", "Windows", "Chrome OS"], answer: "Windows" }
  ],
  5: [ /* Chapter 5 Questions */ 
    { type: "MCQ", question: "What is cybersecurity?", options: ["Installing apps", "Sharing files", "Protecting digital systems", "Coding games"], answer: "Protecting digital systems" },
    { type: "MCQ", question: "What is malware?", options: ["Game software", "Music tool", "Malicious software", "Antivirus tool"], answer: "Malicious software" },
    { type: "MCQ", question: "What is phishing?", options: ["Catching fish", "Hacking servers", "Fake messages to steal info", "Antivirus program"], answer: "Fake messages to steal info" },
    { type: "MCQ", question: "What does VPN do?", options: ["Slows down PC", "Increases volume", "Encrypts internet traffic", "Deletes cookies"], answer: "Encrypts internet traffic" },
    { type: "MCQ", question: "Which of these is a strong password?", options: ["password123", "123456", "P@ssW0rd!2025", "qwerty"], answer: "P@ssW0rd!2025" },
    { type: "MCQ", question: "What does 2FA stand for?", options: ["Two-Factor Authentication", "File Analysis", "Fast Access", "Firewall Application"], answer: "Two-Factor Authentication" },
    { type: "MCQ", question: "Which one is an antivirus software?", options: ["Adobe", "Norton", "Chrome", "Zoom"], answer: "Norton" },
    { type: "MCQ", question: "What is ransomware?", options: ["Software update", "Malware that demands payment", "Email service", "Firewall"], answer: "Malware that demands payment" },
    { type: "MCQ", question: "Which one is not a threat?", options: ["Spyware", "Firewall", "Trojan", "Phishing"], answer: "Firewall" },
    { type: "MCQ", question: "What’s the best protection method?", options: ["Open emails from anyone", "Use same password", "Regular updates and strong passwords", "Avoid websites"], answer: "Regular updates and strong passwords" }
  ],
  6: [ /* Chapter 6 Questions */ 
    { type: "MCQ", question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Machine Logic", "Host Transfer Model Layout"], answer: "HyperText Markup Language" },
    { type: "MCQ", question: "Which tag is used for links?", options: ["<div>", "<a>", "<img>", "<link>"], answer: "<a>" },
    { type: "MCQ", question: "Which property in CSS changes text color?", options: ["font", "text-style", "color", "align"], answer: "color" },
    { type: "MCQ", question: "What does JS stand for?", options: ["JavaSoft", "JustScript", "JavaScript", "JoinSyntax"], answer: "JavaScript" },
    { type: "MCQ", question: "Which one is NOT a programming language?", options: ["HTML", "Python", "Java", "C++"], answer: "HTML" },
    { type: "MCQ", question: "Which function displays output in JS?", options: ["print()", "echo()", "console.log()", "show()"], answer: "console.log()" },
    { type: "MCQ", question: "What is a variable?", options: ["Fixed number", "Changing storage", "Loop", "Tag"], answer: "Changing storage" },
    { type: "MCQ", question: "Which tag displays headings?", options: ["<h1>", "<p>", "<div>", "<br>"], answer: "<h1>" },
    { type: "MCQ", question: "Which CSS unit is relative?", options: ["px", "em", "cm", "inch"], answer: "em" },
    { type: "MCQ", question: "Which attribute is used for images?", options: ["href", "src", "alt", "link"], answer: "src" }
  ],
  7: [ /* Chapter 7 Questions */ 
    { type: "MCQ", question: "What is an IP address?", options: ["Internet Page", "Internal Protocol", "Unique device address", "Image Property"], answer: "Unique device address" },
    { type: "MCQ", question: "IPv4 has how many bits?", options: ["64", "16", "32", "128"], answer: "32" },
    { type: "MCQ", question: "Which is a valid IP format?", options: ["192.168.1.1", "http://server", "ABC.DEF.GHI", "256.256.256.256"], answer: "192.168.1.1" },
    { type: "MCQ", question: "What does DNS resolve?", options: ["MAC to URL", "IP to User", "Domain to IP", "RAM to CPU"], answer: "Domain to IP" },
    { type: "MCQ", question: "Which tool checks IP connectivity?", options: ["ping", "mkdir", "dir", "open"], answer: "ping" },
    { type: "MCQ", question: "Which command shows your IP?", options: ["ipconfig", "run", "cmd", "netstat"], answer: "ipconfig" },
    { type: "MCQ", question: "What is localhost IP?", options: ["0.0.0.0", "192.0.0.1", "127.0.0.1", "1.1.1.1"], answer: "127.0.0.1" },
    { type: "MCQ", question: "Which IP is reserved for private use?", options: ["8.8.8.8", "192.168.x.x", "255.255.255.255", "123.45.67.89"], answer: "192.168.x.x" },
    { type: "MCQ", question: "What is subnetting?", options: ["Dividing OS", "Partitioning disk", "Segmenting networks", "Encrypting IP"], answer: "Segmenting networks" },
    { type: "MCQ", question: "Which protocol gets IP automatically?", options: ["DNS", "IPX", "DHCP", "TCP"], answer: "DHCP" }
  ],
  8: [ /* Chapter 8 Questions */ 
    { type: "MCQ", question: "Which is a cloud platform?", options: ["Photoshop", "Windows", "Azure", "Linux"], answer: "Azure" },
    { type: "MCQ", question: "What does SaaS mean?", options: ["Software as a Service", "Security as a System", "Storage access app", "System as a Software"], answer: "Software as a Service" },
    { type: "MCQ", question: "Which is not a cloud storage?", options: ["Dropbox", "Google Drive", "OneDrive", "Notepad"], answer: "Notepad" },
    { type: "MCQ", question: "Cloud computing provides?", options: ["Only storage", "Only emails", "Resources over internet", "Cables"], answer: "Resources over internet" },
    { type: "MCQ", question: "Which is IaaS?", options: ["AWS EC2", "Google Docs", "Spotify", "Instagram"], answer: "AWS EC2" },
    { type: "MCQ", question: "Which is PaaS?", options: ["AWS Lambda", "Google App Engine", "Slack", "Zoom"], answer: "Google App Engine" },
    { type: "MCQ", question: "Which cloud model is public?", options: ["Localhost", "AWS", "Internal LAN", "Desktop"], answer: "AWS" },
    { type: "MCQ", question: "What is cloud scalability?", options: ["Stretching screen", "Increasing resources", "Connecting printer", "Opening app"], answer: "Increasing resources" },
    { type: "MCQ", question: "Cloud backups help in?", options: ["Losing data", "Sharing emails", "Disaster recovery", "Game speed"], answer: "Disaster recovery" },
    { type: "MCQ", question: "Which is NOT a cloud benefit?", options: ["Flexibility", "Scalability", "Accessibility", "Offline only"], answer: "Offline only" }
  ],
  9: [ /* Chapter 9 Questions */ 
    { type: "MCQ", question: "Which device converts digital to audio?", options: ["Monitor", "Microphone", "Speaker", "Camera"], answer: "Speaker" },
    { type: "MCQ", question: "What is the use of GPU?", options: ["Sound", "Graphics", "Data backup", "Cooling"], answer: "Graphics" },
    { type: "MCQ", question: "Which one is input device?", options: ["Mouse", "Printer", "Speaker", "Monitor"], answer: "Mouse" },
    { type: "MCQ", question: "Which one is output?", options: ["Scanner", "Camera", "Monitor", "Keyboard"], answer: "Monitor" },
    { type: "MCQ", question: "Webcam is?", options: ["Output", "Storage", "Input", "Battery"], answer: "Input" },
    { type: "MCQ", question: "Which is biometric input?", options: ["Barcode", "Fingerprint", "Keyboard", "Stylus"], answer: "Fingerprint" },
    { type: "MCQ", question: "Which device prints data?", options: ["Scanner", "Projector", "Printer", "Modem"], answer: "Printer" },
    { type: "MCQ", question: "Which one is portable input?", options: ["Mouse", "Touchpad", "Keyboard", "All of these"], answer: "All of these" },
    { type: "MCQ", question: "Which one stores temporary input?", options: ["ROM", "RAM", "CPU", "SSD"], answer: "RAM" },
    { type: "MCQ", question: "What is output of 2 + 2 in computer?", options: ["22", "4", "Error", "0"], answer: "4" }
  ],
  10: [ /* Chapter 10 Questions */ 
    { type: "MCQ", question: "What is coding?", options: ["Typing text", "Writing instructions for computers", "Drawing", "Copying books"], answer: "Writing instructions for computers" },
    { type: "MCQ", question: "Which language is beginner-friendly?", options: ["Python", "C++", "Assembly", "Machine code"], answer: "Python" },
    { type: "MCQ", question: "Which of these is a loop?", options: ["for", "print", "if", "else"], answer: "for" },
    { type: "MCQ", question: "Which symbol is used in JS for comments?", options: ["//", "**", "<!--", "##"], answer: "//" },
    { type: "MCQ", question: "What is a function?", options: ["Equation", "Block of code", "Image", "Command"], answer: "Block of code" },
    { type: "MCQ", question: "Which operator adds values?", options: ["-", "*", "+", "="], answer: "+" },
    { type: "MCQ", question: "What is IDE?", options: ["Internet Development", "Code Editor", "Software Toolkit", "Integrated Development Environment"], answer: "Integrated Development Environment" },
    { type: "MCQ", question: "Which is not a coding language?", options: ["Python", "Ruby", "HTML", "Excel"], answer: "Excel" },
    { type: "MCQ", question: "Which symbol denotes string?", options: ["{ }", "()", "''", "++"], answer: "''" },
    { type: "MCQ", question: "Which one runs in browser?", options: ["Python", "Java", "JavaScript", "C#"], answer: "JavaScript" }
  ]
};
