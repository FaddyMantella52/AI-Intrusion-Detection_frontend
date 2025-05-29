
const recommendations = {
  "DoS Hulk": {
    description: "A flooding attack that overwhelms a system using brute force HTTP GET requests.",
    advice: "Rate-limit incoming requests and use web application firewalls (WAF).",
    link: "https://www.radware.com/security/ddos-knowledge-center/ddospedia/hulk/"
  },
  "Bot": {
    description: "Automated scripts or infected devices controlled by attackers (botnets).",
    advice: "Monitor unusual traffic, apply endpoint protection, and isolate infected machines.",
    link: "https://www.cloudflare.com/learning/bots/what-is-a-bot-attack/"
  },
  "Brute Force": {
    description: "A login attack that tries many password combinations to gain access.",
    advice: "Use account lockout policies, 2FA, and strong password requirements.",
    link: "https://owasp.org/www-community/attacks/Brute_force_attack"
  },
  "PortScan": {
    description: "Scanning for open ports to find exploitable services.",
    advice: "Block unused ports, use IDS/IPS, and restrict access with firewalls.",
    link: "https://en.wikipedia.org/wiki/Port_scanner"
  },
  "DDoS": {
    description: "Distributed Denial-of-Service aimed at overwhelming a target using multiple machines.",
    advice: "Use rate-limiting, employ a CDN/DDoS protection service, and block IPs from known attack sources.",
    link: "https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/"
  },
  "DoS GoldenEye": {
    description: "	A DoS tool that targets HTTP servers with slow requests to exhaust resources.",
    advice: "Deploy web application firewalls (WAF), monitor traffic patterns, and implement timeout policies.",
    link: "https://medium.com/@redfanatic7/guide-to-ddos-attacks-with-goldeneye-3c2444011f82"
  },
   "DoS Slowhttptest": {
    description: "Simulates application layer DoS attacks by slowly sending partial HTTP requests.",
    advice: "Implement timeout thresholds and request validation.",
    link: "https://www.vaadata.com/blog/what-is-a-slow-http-attack-types-and-security-best-practices/"
  },
    "DoS slowloris": {
    description: "Keeps many connections open to a server by sending partial requests, exhausting resources.",
    advice: "Set connection timeout limits and use reverse proxies/load balancers.",
    link: "https://www.cloudflare.com/learning/ddos/ddos-attack-tools/slowloris/"
  },
  "FTP-Patator": {
    description: "Brute-force attack tool targeting FTP authentication.",
    advice: "Use strong passwords, disable anonymous access, and monitor login attempts.",
    link: "https://github.com/lanjelot/patator"
  },
  "Heartbleed": {
    description: "A vulnerability in OpenSSL allowing attackers to read server memory.",
    advice: "Update OpenSSL versions and rotate all secrets/keys after patching.",
    link: "https://heartbleed.com/"
  },
   "Infiltration": {
    description: "Unauthorized access into internal networks to extract or manipulate data.",
    advice: "Segment internal networks, monitor lateral movement, and apply strict access control.",
    link: "https://cyberpedia.reasonlabs.com/EN/infiltration.html"
  },
  "SSH-Patator": {
    description: "Brute-force attack tool targeting SSH login credentials.",
    advice: "Disable password-based logins, use SSH keys, and limit login attempts.",
    link: "https://www.packtpub.com/en-PT/product/kali-linux-an-ethical-hackers-cookbook-9781787121829/chapter/password-attacks-the-fault-in-their-stars-7/section/cracking-hashes-online-ch07lvl1sec72?srsltid=AfmBOoqJLlpgz--mapfsWG4mG57-4xP4zzlQT8jaJ2OXSVBgsfW3U9VV"
  },
  "Web Attack – Brute Force": {
    description: "Tries multiple password combinations on web forms to gain unauthorized access.",
    advice: "Use CAPTCHA, 2FA, and lockout policies on repeated failed attempts.",
    link: "https://owasp.org/www-community/attacks/Brute_force_attack"
  },
   "Web Attack – Sql Injection": {
    description: "Injecting malicious SQL queries into application inputs.",
    advice: "Use prepared statements and input sanitization, and deploy a WAF.",
    link: "https://owasp.org/www-community/attacks/SQL_Injection"
  },
  "Web Attack – XSS": {
    description: "Injects malicious scripts into trusted websites viewed by other users.",
    advice: "Sanitize all user input and use Content Security Policies (CSP).",
    link: "https://owasp.org/www-community/attacks/xss/"
  }
};

export default recommendations;
