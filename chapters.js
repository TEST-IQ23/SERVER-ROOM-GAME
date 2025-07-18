// chapters.js
const chapters = [
  {
    title: "Chapter 1: The Wake-Up Call",
    questions: [
      { q: "What caused the server room alert?", type: "mcq", options: ["Power failure", "Overheating", "Network attack", "Water leak"], answer: "Overheating" },
      { q: "Which component is most sensitive to temperature?", type: "mcq", options: ["CPU", "RAM", "SSD", "NIC"], answer: "CPU" },
      { q: "What’s the best response to an overheating server?", type: "mcq", options: ["Ignore it", "Reboot server", "Shut down", "Increase cooling"], answer: "Shut down" },
      { q: "What sensor alerts about temperature?", type: "mcq", options: ["Gyroscope", "Thermal", "Infrared", "Motion"], answer: "Thermal" },
      { q: "How can high heat affect storage?", type: "mcq", options: ["Faster read", "Corruption", "Speed boost", "Compression"], answer: "Corruption" },
      { q: "What tool can monitor server temp?", type: "mcq", options: ["ping", "htop", "sensors", "lsblk"], answer: "sensors" },
      { q: "What is a threshold temperature?", type: "mcq", options: ["25°C", "45°C", "70°C", "110°C"], answer: "70°C" },
      { q: "Which backup is fastest in emergencies?", type: "mcq", options: ["Cloud", "Incremental", "Full", "Differential"], answer: "Incremental" },
      { q: "How do you notify staff quickly?", type: "mcq", options: ["SMS", "Slack", "PagerDuty", "Email"], answer: "PagerDuty" },
      { q: "Objective: Server room temperature reaches 85°C. What is your first step?", type: "mcq", options: ["Open doors", "Shut off AC", "Evacuate", "Shut down critical machines"], answer: "Shut down critical machines" }
    ]
  },
  {
    title: "Chapter 2: The Firewall Breach",
    questions: [
      { q: "What does a firewall do?", type: "mcq", options: ["Monitor power", "Block traffic", "Store files", "Send emails"], answer: "Block traffic" },
      { q: "Which port does HTTP use?", type: "mcq", options: ["21", "22", "80", "443"], answer: "80" },
      { q: "What’s a sign of a firewall breach?", type: "mcq", options: ["Fast speeds", "Unauthorized access", "No traffic", "Silent fans"], answer: "Unauthorized access" },
      { q: "What tool scans for open ports?", type: "mcq", options: ["nmap", "whois", "scp", "diff"], answer: "nmap" },
      { q: "What protocol is secure?", type: "mcq", options: ["FTP", "Telnet", "HTTPS", "SMTP"], answer: "HTTPS" },
      { q: "What’s a DMZ?", type: "mcq", options: ["Attack zone", "Secure network", "Public-facing area", "VPN tunnel"], answer: "Public-facing area" },
      { q: "What’s IDS used for?", type: "mcq", options: ["Logins", "Temperature", "Intrusion detection", "SSH"], answer: "Intrusion detection" },
      { q: "What is a common firewall rule action?", type: "mcq", options: ["Pause", "Ignore", "Allow", "Format"], answer: "Allow" },
      { q: "Which OSI layer does a firewall mostly operate on?", type: "mcq", options: ["2", "3", "4", "7"], answer: "3" },
      { q: "Objective: An attacker is bypassing port filtering. What’s your action?", type: "mcq", options: ["Add logging", "Shut down switch", "Create VPN", "Block IP range"], answer: "Block IP range" }
    ]
  },
  {
    title: "Chapter 3: Protocol Override",
    questions: [
      { q: "What does the HTTP 403 error indicate?", type: "mcq", options: ["Success", "Forbidden", "Not found", "Timeout"], answer: "Forbidden" },
      { q: "Which port does HTTPS typically use?", type: "mcq", options: ["20", "21", "80", "443"], answer: "443" },
      { q: "Name the common protocol used to retrieve emails from a server.", type: "mcq", options: ["SMTP", "POP3", "IMAP", "FTP"], answer: "IMAP" },
      { q: "In server config, what does 'deny all;' inside a location block do?", type: "mcq", options: ["Allow access", "Redirect", "Block access", "Log access"], answer: "Block access" },
      { q: "What is the role of a reverse proxy server?", type: "mcq", options: ["Store data", "Forward requests", "Encrypt data", "Decode traffic"], answer: "Forward requests" },
      { q: "Which OSI model layer does TCP operate on?", type: "mcq", options: ["Network", "Transport", "Session", "Application"], answer: "Transport" },
      { q: "A script changes DNS settings. What’s the risk?", type: "mcq", options: ["Faster speeds", "Data loss", "Man-in-the-middle attack", "Load balancing"], answer: "Man-in-the-middle attack" },
      { q: "What tool can simulate packet loss?", type: "mcq", options: ["ls", "cd", "tc", "df"], answer: "tc" },
      { q: "How to check active IP connections on Linux?", type: "mcq", options: ["lsblk", "netstat", "echo", "ps"], answer: "netstat" },
      { q: "Your override failed. What’s a safe Apache directive?", type: "mcq", options: ["LoadModule", "FallbackResource", "ErrorDocument", "AllowOverride"], answer: "FallbackResource" }
    ]
  },
  {
    title: "Chapter 4: Password Crackdown",
    questions: [
      { q: "What is a common method for cracking passwords?", type: "mcq", options: ["Phishing", "Brute force", "VPN", "Firewall"], answer: "Brute force" },
      { q: "What does MFA stand for?", type: "mcq", options: ["Multi-Factor Authentication", "Multi-File Access", "Mobile File Auth", "Mandatory Firewall Alert"], answer: "Multi-Factor Authentication" },
      { q: "Which tool is commonly used for password cracking?", type: "mcq", options: ["Wireshark", "John the Ripper", "nmap", "ps"], answer: "John the Ripper" },
      { q: "What does hashing do to a password?", type: "mcq", options: ["Encrypts it", "Converts to fixed string", "Deletes it", "Masks it"], answer: "Converts to fixed string" },
      { q: "What is the most secure type of password?", type: "mcq", options: ["Short and easy", "Long and random", "Name and date", "123456"], answer: "Long and random" },
      { q: "What’s a rainbow table used for?", type: "mcq", options: ["Testing network", "Password cracking", "Sending files", "Email lookup"], answer: "Password cracking" },
      { q: "Why should passwords be salted?", type: "mcq", options: ["For flavor", "Prevent rainbow table attacks", "Speed hashing", "Save memory"], answer: "Prevent rainbow table attacks" },
      { q: "What’s a passphrase?", type: "mcq", options: ["Username", "Short code", "Long sentence as password", "Encryption key"], answer: "Long sentence as password" },
      { q: "Minimum recommended password length?", type: "mcq", options: ["6", "8", "10", "12"], answer: "12" },
      { q: "Which hashing algorithm is secure today?", type: "mcq", options: ["md5", "sha1", "bcrypt", "crc32"], answer: "bcrypt" }
    ]
  },
  {
    title: "Chapter 5: The Backup Blackout",
    questions: [
      { q: "What is the primary purpose of a backup?", type: "mcq", options: ["Speed up system", "Reduce electricity", "Data recovery", "Increase storage"], answer: "Data recovery" },
      { q: "Which is NOT a type of backup?", type: "mcq", options: ["Full", "Partial", "Differential", "Incremental"], answer: "Partial" },
      { q: "What’s a good schedule for backups?", type: "mcq", options: ["Monthly", "Weekly", "Daily", "Never"], answer: "Daily" },
      { q: "Which storage is most reliable for backups?", type: "mcq", options: ["HDD", "SSD", "Flash Drive", "Tape"], answer: "Tape" },
      { q: "What is the 3-2-1 rule in backups?", type: "mcq", options: ["3 backups, 2 local, 1 email", "3 copies, 2 media, 1 offsite", "3 files, 2 drives, 1 password", "None"], answer: "3 copies, 2 media, 1 offsite" },
      { q: "Why use cloud backup?", type: "mcq", options: ["Cheap bandwidth", "Remote safety", "Fast printing", "High temperature"], answer: "Remote safety" },
      { q: "Which software automates backups?", type: "mcq", options: ["VLC", "Photoshop", "rsync", "notepad++"], answer: "rsync" },
      { q: "What can corrupt a backup?", type: "mcq", options: ["Proper shutdown", "Checksum verification", "Malware", "Compression"], answer: "Malware" },
      { q: "Best time for backups?", type: "mcq", options: ["Peak hours", "Lunch", "Night", "Random"], answer: "Night" },
      { q: "You lost power mid-backup. What’s next?", type: "mcq", options: ["Ignore it", "Restore anyway", "Re-run backup", "Shut down server"], answer: "Re-run backup" }
    ]
  },
  {
    title: "Chapter 6: Rogue Device Detected",
    questions: [
      { q: "What’s a rogue device?", type: "mcq", options: ["Registered printer", "Malicious unauthorized device", "Firewall", "Server fan"], answer: "Malicious unauthorized device" },
      { q: "Which tool finds unknown devices?", type: "mcq", options: ["netstat", "top", "nmap", "chmod"], answer: "nmap" },
      { q: "What’s MAC address filtering?", type: "mcq", options: ["Email sorting", "Device control by MAC", "Speed limit", "Data encryption"], answer: "Device control by MAC" },
      { q: "What’s the safest network config?", type: "mcq", options: ["Open Wi-Fi", "Static IPs", "Unsecured VLAN", "Public DNS"], answer: "Static IPs" },
      { q: "Why isolate rogue devices?", type: "mcq", options: ["For backup", "For maintenance", "To prevent damage", "For speed"], answer: "To prevent damage" },
      { q: "Which port security feature disables a port with a rogue MAC?", type: "mcq", options: ["PoE", "DHCP Snooping", "Sticky MAC", "PortFast"], answer: "Sticky MAC" },
      { q: "Where do you see MAC addresses on Linux?", type: "mcq", options: ["ip a", "df", "ps aux", "du -h"], answer: "ip a" },
      { q: "What’s a VLAN?", type: "mcq", options: ["Video LAN", "Virtual LAN", "Verified LAN", "Very Loud Adapter"], answer: "Virtual LAN" },
      { q: "How do you block rogue Wi-Fi devices?", type: "mcq", options: ["Turn off router", "MAC filtering", "Assign dynamic IPs", "Disable DNS"], answer: "MAC filtering" },
      { q: "You found a rogue laptop. What next?", type: "mcq", options: ["Give network access", "Unplug and report", "Restart system", "Install software"], answer: "Unplug and report" }
    ]
  },
  {
    title: "Chapter 7: Data Decryption Duel",
    questions: [
      { q: "What is decryption?", type: "mcq", options: ["Data loss", "Password creation", "Making data readable", "Removing storage"], answer: "Making data readable" },
      { q: "Which is symmetric encryption?", type: "mcq", options: ["RSA", "AES", "SHA", "MD5"], answer: "AES" },
      { q: "Public key is used in?", type: "mcq", options: ["Symmetric", "Hashing", "Asymmetric encryption", "Compression"], answer: "Asymmetric encryption" },
      { q: "Which is an encryption algorithm?", type: "mcq", options: ["ls", "grep", "RSA", "cd"], answer: "RSA" },
      { q: "What does SSL secure?", type: "mcq", options: ["Local disk", "Web traffic", "CPU", "RAM"], answer: "Web traffic" },
      { q: "What’s a cipher?", type: "mcq", options: ["A lock", "Keylogger", "Encryption technique", "Error code"], answer: "Encryption technique" },
      { q: "Which is more secure?", type: "mcq", options: ["ECB", "CBC", "FTP", "POP3"], answer: "CBC" },
      { q: "What is a digital certificate?", type: "mcq", options: ["Image file", "Server config", "Authentication document", "Backup"], answer: "Authentication document" },
      { q: "How are passwords stored securely?", type: "mcq", options: ["Plain text", "Hashed & salted", "PDF", "CSV"], answer: "Hashed & salted" },
      { q: "You receive encrypted logs. What do you need?", type: "mcq", options: ["Scanner", "Private key", "Firewall", "BIOS"], answer: "Private key" }
    ]
  },
  {
    title: "Chapter 8: The Malware Maze",
    questions: [
      { q: "What is malware?", type: "mcq", options: ["Useful software", "Malicious software", "Encrypted file", "Backup system"], answer: "Malicious software" },
      { q: "Which is a type of malware?", type: "mcq", options: ["CSV", "Worm", "PDF", "HTML"], answer: "Worm" },
      { q: "Which tool scans for malware?", type: "mcq", options: ["top", "malwarebytes", "ping", "nano"], answer: "malwarebytes" },
      { q: "What does ransomware do?", type: "mcq", options: ["Fix files", "Encrypt and demand ransom", "Deletes logs", "Upgrades RAM"], answer: "Encrypt and demand ransom" },
      { q: "What prevents malware spread?", type: "mcq", options: ["Shared folders", "Antivirus", "Remote login", "FTP"], answer: "Antivirus" },
      { q: "What’s sandboxing?", type: "mcq", options: ["Malware hiding", "Safe environment testing", "Encryption", "Auto backup"], answer: "Safe environment testing" },
      { q: "What is a Trojan?", type: "mcq", options: ["Backup format", "Hidden malicious software", "Network cable", "BIOS error"], answer: "Hidden malicious software" },
      { q: "How is malware commonly spread?", type: "mcq", options: ["CDs", "Phishing emails", "Air-gapped PCs", "Routers"], answer: "Phishing emails" },
      { q: "Which OS command lists running processes?", type: "mcq", options: ["ls", "ps", "cd", "touch"], answer: "ps" },
      { q: "You find malware on a server. First step?", type: "mcq", options: ["Restart", "Patch system", "Isolate server", "Ignore it"], answer: "Isolate server" }
    ]
  },
  {
    title: "Chapter 9: The Final Firewall",
    questions: [
      { q: "What does a firewall filter?", type: "mcq", options: ["Emails", "Websites", "Network traffic", "Print jobs"], answer: "Network traffic" },
      { q: "What’s the default policy if no rule matches?", type: "mcq", options: ["Allow", "Block", "Drop or Reject", "Log only"], answer: "Drop or Reject" },
      { q: "Which firewall type inspects packet contents?", type: "mcq", options: ["Stateless", "Packet filter", "Application-level", "Proxy"], answer: "Application-level" },
      { q: "Best practice for unused ports?", type: "mcq", options: ["Open all", "Log only", "Close them", "Redirect them"], answer: "Close them" },
      { q: "Which is not a valid protocol?", type: "mcq", options: ["TCP", "UDP", "FTP", "JSON"], answer: "JSON" },
      { q: "What’s the difference between stateful and stateless firewall?", type: "mcq", options: ["Logging", "Connection tracking", "Port range", "Power usage"], answer: "Connection tracking" },
      { q: "What command shows firewall rules?", type: "mcq", options: ["iptables -L", "ls -l", "cd /etc", "ping"], answer: "iptables -L" },
      { q: "What’s a common mistake in firewall setup?", type: "mcq", options: ["Too many rules", "No logging", "Default allow all", "Verbose output"], answer: "Default allow all" },
      { q: "How often should firewall rules be reviewed?", type: "mcq", options: ["Once", "Annually", "Monthly", "Never"], answer: "Monthly" },
      { q: "What’s the last step in firewall hardening?", type: "mcq", options: ["Testing rules", "Reboot", "Install antivirus", "Open all ports"], answer: "Testing rules" }
    ]
  },
  {
    title: "Chapter 10: System Escape",
    questions: [
      { q: "What command shuts down a Linux system?", type: "mcq", options: ["exit", "poweroff", "logout", "clear"], answer: "poweroff" },
      { q: "Which command checks disk usage?", type: "mcq", options: ["ls", "df -h", "du", "top"], answer: "df -h" },
      { q: "You suspect a security breach. What’s your first step?", type: "mcq", options: ["Run updates", "Log off", "Check logs", "Reboot"], answer: "Check logs" },
      { q: "Which log file contains authentication messages?", type: "mcq", options: ["/var/log/syslog", "/var/log/auth.log", "/etc/passwd", "/home/user/logs"], answer: "/var/log/auth.log" },
      { q: "How do you switch users?", type: "mcq", options: ["cd user", "login", "su", "chmod"], answer: "su" },
      { q: "Which user has full privileges?", type: "mcq", options: ["guest", "admin", "sudo", "root"], answer: "root" },
      { q: "What is a secure file permission setting?", type: "mcq", options: ["777", "000", "644", "444"], answer: "644" },
      { q: "You completed your tasks. What’s next?", type: "mcq", options: ["Check social media", "Lock system", "Open ports", "Ignore logs"], answer: "Lock system" },
      { q: "Where can you check cron jobs?", type: "mcq", options: ["/etc/crontab", "/var/www", "/boot/grub", "/home/logs"], answer: "/etc/crontab" },
      { q: "Escape successful. Final action?", type: "mcq", options: ["Take backup", "Open terminal", "Reboot server", "Report incident"], answer: "Report incident" }
    ]
  }
];
