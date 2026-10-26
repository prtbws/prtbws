import { PortfolioData } from "@/types/portfolio";

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "Partha Biswas",
    preferredName: "prtbws",
    roleTitle: "AI & Data Science Undergrad · Competitive Programmer · Quant & Systems Builder",
    headline: "I build intelligent systems and engineer ideas into reality.",
    shortBio:
      "Artificial Intelligence and Data Science undergraduate at IIITDM Kurnool. I combine deep curiosity in algorithmic problem-solving, quantitative finance, and low-level C++ systems with modern machine learning and product engineering.",
    fullBio: [
      "Currently pursuing my B.Tech in Artificial Intelligence & Data Science at the Indian Institute of Information Technology, Design & Manufacturing (IIITDM) Kurnool (2025–2029).",
      "My passion lies at the intersection of mathematical reasoning and practical software development: designing quantitative stock screening algorithms, building resilient IoT firmware with ESP32, and writing clean, high-performance C/C++ code.",
      "Beyond building projects, I am a dedicated competitive programmer with over 700+ problems solved across Codeforces, LeetCode, CSES, and CodeChef, and a participant in developer hackathons like Solasta 2026 (GDG IIITDM Kurnool).",
    ],
    avatarUrl: "/images/profile.jpg",
    location: "IIITDM Kurnool, Andhra Pradesh, India",
    email: "prtbws@zohomail.in",
    phone: "+91-6262969231",
    resumeUrl: "/resume.pdf",
    hireable: true,
    statusBadge: "Open to Internships & Research Collaborations",
  },

  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/prtbws",
      username: "prtbws",
      icon: "Github",
      enabled: true,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/prtbws/",
      username: "in/prtbws",
      icon: "Linkedin",
      enabled: true,
    },
    {
      platform: "Codeforces",
      url: "https://codeforces.com/profile/prtbws",
      username: "prtbws",
      icon: "Terminal",
      enabled: true,
    },
    {
      platform: "Codolio",
      url: "https://codolio.com/profile/prtbws",
      username: "prtbws",
      icon: "Award",
      enabled: true,
    },
    {
      platform: "Email",
      url: "mailto:prtbws@zohomail.in",
      username: "prtbws@zohomail.in",
      icon: "Mail",
      enabled: true,
    },
  ],

  sections: {
    about: true,
    skills: true,
    projects: true,
    achievements: true,
    journey: true,
    interests: true,
    contact: true,
  },

  skillCategories: [
    {
      id: "languages",
      title: "Programming Languages",
      description: "Core languages for high-performance computing, problem solving, and backend automation.",
      icon: "Code",
    },
    {
      id: "data_ml",
      title: "Data Science & Machine Learning",
      description: "Libraries and frameworks for statistical modeling, quantitative analysis, and tensor operations.",
      icon: "LineChart",
    },
    {
      id: "systems_cs",
      title: "Systems & Computer Science",
      description: "Theoretical computer science pillars, low-level architecture, and hardware control.",
      icon: "Cpu",
    },
    {
      id: "tools_dev",
      title: "Tools, Platforms & Workflows",
      description: "Modern developer tooling, version control, and real-time backend integrations.",
      icon: "Wrench",
    },
  ],

  skills: [
    // Languages
    { name: "C++", category: "languages", proficiency: "Proficient", highlight: true, enabled: true },
    { name: "C", category: "languages", proficiency: "Proficient", highlight: true, enabled: true },
    { name: "Python", category: "languages", proficiency: "Proficient", highlight: true, enabled: true },
    { name: "JavaScript", category: "languages", proficiency: "Familiar", highlight: false, enabled: true },
    { name: "HTML5 & CSS3", category: "languages", proficiency: "Familiar", highlight: false, enabled: true },

    // Data Science & ML
    { name: "NumPy", category: "data_ml", proficiency: "Proficient", highlight: true, enabled: true },
    { name: "Pandas", category: "data_ml", proficiency: "Proficient", highlight: true, enabled: true },
    { name: "PyTorch", category: "data_ml", proficiency: "Familiar", highlight: true, enabled: true },
    { name: "Scikit-Learn", category: "data_ml", proficiency: "Familiar", highlight: false, enabled: true },
    { name: "yfinance", category: "data_ml", proficiency: "Proficient", highlight: false, enabled: true },
    { name: "Plotly & Matplotlib", category: "data_ml", proficiency: "Proficient", highlight: false, enabled: true },

    // Systems & CS
    { name: "Data Structures & Algorithms", category: "systems_cs", proficiency: "Advanced", highlight: true, enabled: true },
    { name: "Competitive Programming", category: "systems_cs", proficiency: "Advanced", highlight: true, enabled: true },
    { name: "Object-Oriented Programming (OOP)", category: "systems_cs", proficiency: "Proficient", highlight: false, enabled: true },
    { name: "Memory Management & Pointers", category: "systems_cs", proficiency: "Proficient", highlight: false, enabled: true },
    { name: "ESP32 & Embedded IoT", category: "systems_cs", proficiency: "Proficient", highlight: true, enabled: true },

    // Tools & Dev
    { name: "Git & GitHub", category: "tools_dev", proficiency: "Proficient", highlight: true, enabled: true },
    { name: "Linux & Bash CLI", category: "tools_dev", proficiency: "Proficient", highlight: false, enabled: true },
    { name: "Jupyter Notebooks", category: "tools_dev", proficiency: "Proficient", highlight: false, enabled: true },
    { name: "Firebase RTDB", category: "tools_dev", proficiency: "Familiar", highlight: false, enabled: true },
    { name: "Sinric Pro IoT", category: "tools_dev", proficiency: "Familiar", highlight: false, enabled: true },
  ],

  projects: [
    {
      id: "stock-market-analysis",
      title: "Quantitative Stock Selector & Market Analysis",
      tagline: "Automated equity screening engine & technical momentum strategy backtester for NIFTY 500.",
      category: "Fintech & Quant",
      status: "Completed",
      featured: true,
      description:
        "A Python-based algorithmic stock analysis system utilizing historical equity data, multi-indicator confluence, sector rotation models (RRG), and systematic quantitative trading strategies.",
      problemSolved:
        "Discretionary trading is vulnerable to emotional bias and delayed signal detection. This system automatically pulls daily pricing data for Indian equities (e.g. Reliance, Mankind Pharma), calculates volatility bands and trend confluence, and backtests risk-managed entry/exit rules.",
      features: [
        "Automated historical data ingestion and cleaning pipeline for equities via yfinance",
        "Technical indicators: SMA, EMA, Bollinger Bands, RSI, MACD, HMA, SuperTrend & ADX",
        "Relative Rotation Graph (RRG) modeling for identifying sector leadership and momentum shifts",
        "Backtested trading strategies across 5 years of historical data yielding ~60% accuracy with 20% weekly profit targets capped at 5% maximum weekly risk",
      ],
      techStack: ["Python", "Pandas", "NumPy", "yfinance", "Plotly", "Matplotlib", "Jupyter Notebook"],
      githubUrl: "https://github.com/prtbws/stock-market-analysis",
      fallbackIcon: "TrendingUp",
      highlights: ["60% Backtest Accuracy", "NIFTY 500 Equities", "5 Years Data"],
      enabled: true,
    },
    {
      id: "syncswitch",
      title: "SyncSwitch v4.1.0 – Smart Switch Board",
      tagline: "Triple-redundant IoT smart switchboard system with MQ-2 gas hazard monitoring.",
      category: "IoT & Embedded",
      status: "Completed",
      featured: true,
      description:
        "An advanced IoT-based home automation and environmental safety hardware system developed for Group 4 at IIITDM Kurnool, solving single-point network failure using triple-redundant control channels.",
      problemSolved:
        "Standard smart home switches become inoperable when local Wi-Fi or cloud servers drop. SyncSwitch guarantees 100% operational uptime through seamless fallback between physical switches, infrared remotes, and cloud integrations, while simultaneously safeguarding lives with gas leakage alerts.",
      features: [
        "Triple-redundant control: physical tactile switches, TSOP 38kHz IR remote, and cloud voice/mobile triggers",
        "ESP32 non-blocking state machine utilizing millis() for sub-150ms local switching response",
        "Continuous ambient air safety monitoring via calibrated MQ-2 gas and smoke sensor with real-time buzzer alarm",
        "Hybrid dual-cloud architecture: Sinric Pro for sub-500ms voice control (Alexa/Google Assistant) and Firebase RTDB for persistent telemetry",
      ],
      techStack: ["C++", "ESP32", "Arduino", "Sinric Pro", "Firebase RTDB", "Sensors & Relays"],
      githubUrl: "https://github.com/ashwinjain825/syncswitch",
      fallbackIcon: "Cpu",
      highlights: ["Triple Redundant", "<150ms Latency", "Gas & Smoke Detection"],
      enabled: true,
    },
    {
      id: "banking",
      title: "BankSys – Banking Management System in C",
      tagline: "Modular CLI banking application engineered in C with low-level memory isolation.",
      category: "Systems & C++",
      status: "Completed",
      featured: true,
      description:
        "A structured command-line banking and account management application engineered in pure C, prioritizing strict pointer arithmetic safety, modular code encapsulation, and persistent record auditing.",
      problemSolved:
        "Simulates transactional banking workflows at the bare-metal level, ensuring accurate balance ledgers, data file persistence, and robust input validation without depending on high-level runtime runtimes.",
      features: [
        "Automated account provisioning with unique account numbering and credential verification",
        "Transactional operations for authenticated deposits, withdrawals, and balance verification",
        "Structured audit logging to maintain transactional histories in permanent record files",
        "Clean separation between memory-safe data structures (`data.h`, `data.c`) and CLI presentation (`main.c`)",
      ],
      techStack: ["C", "GCC Compiler", "File I/O", "Memory Management", "CLI Architecture"],
      githubUrl: "https://github.com/prtbws/banking",
      fallbackIcon: "ShieldCheck",
      highlights: ["Low-Level Memory Safety", "Modular Architecture", "Persistent Audit Trail"],
      enabled: true,
    },
    {
      id: "dsa-solutions",
      title: "DSA & CP Continuous Solving Ecosystem",
      tagline: "Automated tracking pipeline of 700+ competitive programming solutions & Python revision notes.",
      category: "Systems & C++",
      status: "Completed",
      featured: true,
      description:
        "A continuously maintained repository of competitive programming solutions across Codeforces, LeetCode, CSES, and CodeChef, synced via SolveBase and complemented by in-depth Python algorithmic notebooks.",
      problemSolved:
        "Systematizes hundreds of algorithmic problems into structured, searchable repositories categorized by rating and data structure, providing revision-ready templates for contests and technical interviews.",
      features: [
        "Automated SolveBase synchronization pipeline capturing problem solutions with submission timestamps",
        "Coverage of 700+ solved problems across dynamic programming, segment trees, binary search, stacks, and graphs",
        "Handcrafted Python Jupyter notebooks for binary trees, linked lists, queues, stacks, and complexity analysis",
        "Repository guide covering competitive programming time/memory constraint analysis",
      ],
      techStack: ["C++", "Python", "Algorithms", "Data Structures", "SolveBase", "Jupyter"],
      githubUrl: "https://github.com/prtbws/dsa-solutions",
      fallbackIcon: "Code2",
      highlights: ["700+ Problems Tracked", "4 Major Platforms", "Python Study Guides"],
      enabled: true,
    },
    {
      id: "ipoai",
      title: "IPO AI – Machine Learning Equity Prospectus Engine",
      tagline: "Predictive intelligence for Indian initial public offerings and listing gain forecasting.",
      category: "AI & ML",
      status: "In Development",
      featured: false,
      description:
        "An experimental machine learning project exploring algorithmic evaluation of company financial statements, IPO pricing metrics, and GMP (Grey Market Premium) indicators to forecast listing performance.",
      problemSolved:
        "Retail investors frequently struggle to digest lengthy Draft Red Herring Prospectus (DRHP) documents to gauge company health and fair valuation before bidding on an IPO.",
      features: [
        "Research project laying the groundwork for automated IPO prospectus document parsing",
        "Exploration of feature extraction from balance sheets, P/E ratios, and institutional subscription rates",
        "Targeting predictive modeling for first-day listing pops and market momentum",
      ],
      techStack: ["Python", "Scikit-Learn", "Machine Learning", "Financial NLP", "Pandas"],
      githubUrl: "https://github.com/prtbws/ipoai",
      fallbackIcon: "Sparkles",
      highlights: ["In Development", "Financial ML", "Listing Gain Models"],
      enabled: true,
    },
    {
      id: "aggstore",
      title: "AGG Store – Full-Stack Web Platform",
      tagline: "Foundational client-server web application with Node.js backend dedicated to AGG United.",
      category: "Web Applications",
      status: "Completed",
      featured: false,
      description:
        "Partha's inaugural web engineering project, building an interactive merchandise store front-end connected to a Node.js and Express server with file-based order logging.",
      problemSolved:
        "Served as the cornerstone milestone for mastering client-server HTTP communication, DOM events, semantic styling, and Express routing.",
      features: [
        "Interactive product catalog with cart calculation and dynamic DOM updates",
        "Node.js server with Express routing for order logging and file-based data records",
        "Clean responsive user interface built using modern CSS layout patterns",
      ],
      techStack: ["Node.js", "Express", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/prtbws/aggstore",
      fallbackIcon: "Globe",
      highlights: ["Inaugural Web Project", "Full-Stack Node.js", "Express Backend"],
      enabled: true,
    },
  ],

  competitiveMetrics: [
    {
      id: "total-solved",
      platform: "Overall Problem Solving",
      metricLabel: "Problems Solved",
      value: "700+",
      numericTarget: 700,
      suffix: "+",
      detail: "Algorithmic & data structure tracking problems resolved across global platforms.",
      profileUrl: "https://codolio.com/profile/prtbws",
      iconName: "CheckCircle2",
      accentColor: "#10b981", // Emerald
      verified: true,
      enabled: true,
    },
    {
      id: "codeforces",
      platform: "Codeforces",
      metricLabel: "Max Contest Rating",
      value: "1402",
      numericTarget: 1402,
      suffix: "",
      detail: "Division rank: Pupil (Specialist peak). Official Handle: prtbws (IIITDM Kurnool).",
      rank: "Pupil / Specialist Peak",
      rating: 1303,
      maxRating: 1402,
      profileUrl: "https://codeforces.com/profile/prtbws",
      iconName: "Terminal",
      accentColor: "#6366f1", // Indigo
      verified: true,
      enabled: true,
    },
    {
      id: "leetcode",
      platform: "LeetCode",
      metricLabel: "Peak Contest Rating",
      value: "1750+",
      numericTarget: 1750,
      suffix: "+",
      detail: "Top-tier contest efficiency across dynamic programming, segment trees, and graphs.",
      profileUrl: "https://codolio.com/profile/prtbws",
      iconName: "Code2",
      accentColor: "#f59e0b", // Amber
      verified: true,
      enabled: true,
    },
    {
      id: "codechef",
      platform: "CodeChef",
      metricLabel: "Verified Division Status",
      value: "2-Star",
      detail: "Earned verified 2-Star status via consistent multi-hour contest performances.",
      profileUrl: "https://codolio.com/profile/prtbws",
      iconName: "Award",
      accentColor: "#ec4899", // Pink
      verified: true,
      enabled: true,
    },
  ],

  timeline: [
    {
      id: "iiitdm-btech",
      type: "education",
      title: "B.Tech in Artificial Intelligence & Data Science",
      organization: "IIITDM Kurnool (Indian Institute of Information Technology, Design & Manufacturing)",
      period: "2025 — 2029 (Expected)",
      location: "Kurnool, Andhra Pradesh, India",
      description:
        "Undergraduate engineering curriculum focused on foundational Computer Science, Applied Machine Learning, and Big Data Architecture. Cumulative GPA: 7.3.",
      highlights: [
        "Relevant Coursework: Data Structures, Analysis of Algorithms, Object-Oriented Programming, Data Science Foundations",
        "Active member of campus technical communities and competitive programming circles",
      ],
      tags: ["AI & Data Science", "Algorithms", "Linear Algebra", "Data Mining"],
      link: "https://iiitk.ac.in",
      enabled: true,
    },
    {
      id: "solasta-hackathon",
      type: "hackathon",
      title: "Developer & Participant — Solasta 2026 GDG Hackathon",
      organization: "Google Developer Groups on Campus · IIITDM Kurnool",
      period: "February 2026",
      location: "IIITDM Kurnool, India",
      description:
        "Collaborated in a fast-paced team sprint to develop a Community Event Discovery Platform designed to streamline local campus events and bolster student engagement.",
      highlights: [
        "Engineered the frontend presentation layers and responsive interface components using modern web technologies",
        "Orchestrated team Git & GitHub branch workflows under tight 24-hour hackathon deadlines",
      ],
      tags: ["Hackathon", "Frontend Architecture", "Team Collaboration", "Git Workflows"],
      enabled: true,
    },
    {
      id: "syncswitch-iot",
      type: "experience",
      title: "Core Hardware & Firmware Developer — SyncSwitch Project",
      organization: "Group 4 Systems Project · IIITDM Kurnool",
      period: "2025",
      location: "Kurnool, India",
      description:
        "Architected an IoT-enabled smart switchboard equipped with ESP32 microcontroller, MQ-2 gas/smoke hazard detection, and triple-redundant control channels.",
      highlights: [
        "Wrote low-latency non-blocking C++ firmware with sub-150ms tactile response",
        "Integrated Sinric Pro WebSocket handlers and Firebase Realtime Database cloud logging",
      ],
      tags: ["ESP32", "C++ Firmware", "IoT Safety", "Firebase RTDB"],
      link: "https://github.com/ashwinjain825/syncswitch",
      enabled: true,
    },
    {
      id: "competitive-journey",
      type: "leadership",
      title: "Competitive Programmer & Algorithmic Researcher",
      organization: "Codeforces · LeetCode · CSES · CodeChef",
      period: "2024 — Present",
      location: "Global",
      description:
        "Active algorithmic competitor solving complex mathematical and algorithmic challenges under timed contest environments. Unified tracking verified on Codolio.",
      highlights: [
        "Over 700+ verified solved problems spanning graph theory, dynamic programming, segment trees, and greedy methods",
        "Pupil rank on Codeforces (Max Rating 1402) and 1750+ peak contest rating on LeetCode",
      ],
      tags: ["Competitive Programming", "C++", "Data Structures", "Problem Solving"],
      link: "https://codolio.com/profile/prtbws",
      enabled: true,
    },
  ],

  interests: [
    {
      id: "algo-trading",
      title: "Algorithmic Trading & Quantitative Finance",
      description:
        "Designing mathematical models, volatility filters, and momentum backtesting frameworks for equities using Python, statistical confluence, and risk-adjusted position sizing.",
      icon: "LineChart",
      tags: ["Backtesting", "Momentum Strategy", "NIFTY 500", "Risk Management"],
      status: "Active Exploration",
      enabled: true,
    },
    {
      id: "machine-learning",
      title: "Artificial Intelligence & Predictive Modeling",
      description:
        "Applying deep learning and statistical modeling to real-world datasets — from financial prospectuses to computer vision and time-series forecasting.",
      icon: "Brain",
      tags: ["PyTorch", "Scikit-Learn", "Feature Engineering", "Data Analytics"],
      status: "Core Academic Focus",
      enabled: true,
    },
    {
      id: "competitive-programming",
      title: "Competitive Programming & Graph Theory",
      description:
        "Tackling timed algorithmic problems with optimal asymptotic complexities, mastering segment trees, dynamic programming, and combinatorial mathematics.",
      icon: "Binary",
      tags: ["Time Complexity O(log N)", "Segment Trees", "Codeforces", "CSES"],
      status: "Daily Pursuit",
      enabled: true,
    },
    {
      id: "systems-cpp",
      title: "High-Performance Systems & C/C++",
      description:
        "Appreciating bare-metal control, efficient cache utilization, pointer discipline, and building robust firmware and command-line tooling.",
      icon: "Layers",
      tags: ["C++20", "Memory Safety", "Low Latency", "Embedded Systems"],
      status: "Continuous Craft",
      enabled: true,
    },
  ],

  theme: {
    accentColor: "#6366f1", // Electric Indigo
    highlightColor: "#06b6d4", // Electric Cyan
    borderRadius: "1rem",
    enableCustomCursor: true,
    enableBackgroundParticles: true,
    enableGridGlow: true,
    animationIntensity: "normal",
  },
};
