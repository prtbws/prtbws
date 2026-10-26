/**
 * ============================================================================
 * PARTHA BISWAS — PERSONAL PORTFOLIO DATA & SCRIPT
 * ============================================================================
 * To edit your portfolio, simply modify the 'portfolioData' object below.
 * All sections (skills, projects, achievements, timeline, links) are rendered
 * dynamically from this data. No HTML modifications are required.
 */

const portfolioData = {
  // 1. Personal Information
  personal: {
    name: "Partha Biswas",
    role: "AI & Data Science Undergraduate",
    badge: "Undergraduate at IIIT Kurnool",
    avatar: "images/profile.jpg",
    email: "prtbws@zohomail.in",
    intro:
      "I am an Artificial Intelligence and Data Science undergraduate at IIIT Kurnool with a strong interest in competitive programming, machine learning, Data Science, and practical software development.",
    location: "Kurnool, Andhra Pradesh, India",
    resumeUrl: "resume.pdf"
  },

  // 2. Verified Social & Developer Profiles
  socials: [
    { name: "GitHub", url: "https://github.com/prtbws" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prtbws/" },
    { name: "Codeforces", url: "https://codeforces.com/profile/prtbws" },
    { name: "Codolio", url: "https://codolio.com/profile/prtbws" }
  ],

  // 3. About Me Details
  about: {
    paragraphs: [
      "I am currently pursuing a B.Tech in Artificial Intelligence and Data Science at the Indian Institute of Information Technology, Design and Manufacturing (IIITDM) Kurnool (2025–2029).",
      "My work focuses on bridging theoretical problem solving with real-world engineering. I regularly practice competitive programming, design automated equity screening tools, and build robust software in C++ and Python.",
      "I enjoy working across different layers of computing—from low-level memory management in C and embedded IoT microcontrollers to applied machine learning and data analysis."
    ],
    cards: [
      {
        title: "Education",
        description: "B.Tech in Artificial Intelligence & Data Science, IIITDM Kurnool (2025–2029 Expected)"
      },
      {
        title: "Competitive Programming",
        description: "700+ algorithmic problems solved across Codeforces, LeetCode, CSES, and CodeChef"
      },
      {
        title: "Quantitative Finance",
        description: "Technical momentum screening, multi-indicator confluence, and strategy backtesting"
      },
      {
        title: "Systems & IoT",
        description: "Firmware architecture in C++, memory management, and ESP32 embedded hardware"
      }
    ]
  },

  // 4. Technical Skills by Category
  skills: [
    {
      category: "Programming Languages",
      description: "Core languages used for competitive programming and application engineering",
      items: ["C++", "C", "Python", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Data Science & Machine Learning",
      description: "Libraries for numerical computing, data analysis, and predictive modeling",
      items: ["NumPy", "Pandas", "PyTorch", "Scikit-Learn", "yfinance", "Matplotlib", "Plotly"]
    },
    {
      category: "Computer Science & Systems",
      description: "Core principles of algorithms, data structures, and embedded hardware",
      items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Memory Management", "ESP32 Firmware"]
    },
    {
      category: "Development Tools & Platforms",
      description: "Daily developer tooling, version control, and cloud logging",
      items: ["Git", "GitHub", "Linux / Bash", "Jupyter Notebook", "Firebase RTDB", "Sinric Pro"]
    }
  ],

  // 5. Real GitHub Projects
  projects: [
    {
      title: "Stock Market Analysis & Trading Strategy",
      status: "Completed",
      description:
        "A Python-based quantitative stock screening and market analysis system. Ingests historical pricing data across NIFTY 500 equities, computes technical indicator confluences (SMA, EMA, Bollinger Bands, RSI, MACD, ADX, SuperTrend), and backtests momentum rules over 5 years of market data.",
      tech: ["Python", "Pandas", "NumPy", "yfinance", "Plotly", "Matplotlib", "Jupyter"],
      repoUrl: "https://github.com/prtbws/stock-market-analysis"
    },
    {
      title: "SyncSwitch v4.1.0 – IoT Smart Switchboard",
      status: "Completed",
      description:
        "A triple-redundant smart switchboard engineered on ESP32 to eliminate single-point network failure. Provides seamless control via tactile switches, TSOP 38kHz IR remote, and Sinric Pro voice/app integrations, combined with real-time MQ-2 gas/smoke detection and Firebase RTDB telemetry.",
      tech: ["C++", "ESP32", "Arduino", "Sinric Pro", "Firebase RTDB", "Sensors"],
      repoUrl: "https://github.com/ashwinjain825/syncswitch"
    },
    {
      title: "BankSys – Banking Management System in C",
      status: "Completed",
      description:
        "A modular, memory-safe command-line banking application developed in C. Emphasizes low-level pointer discipline, persistent file storage for account ledgers, atomic deposit/withdrawal routines, and structured audit logs.",
      tech: ["C", "GCC Compiler", "File I/O", "Memory Management", "CLI"],
      repoUrl: "https://github.com/prtbws/banking"
    },
    {
      title: "DSA & CP Solutions Ecosystem",
      status: "Active",
      description:
        "Continuous automated repository tracking 700+ competitive programming solutions across Codeforces, LeetCode, CSES, and CodeChef, accompanied by curated Python Jupyter notebooks on trees, graphs, dynamic programming, and constraint analysis.",
      tech: ["C++", "Python", "Algorithms", "Data Structures", "SolveBase"],
      repoUrl: "https://github.com/prtbws/dsa-solutions"
    },
    {
      title: "IPO AI – Machine Learning Valuation Engine",
      status: "In Development",
      description:
        "An experimental machine learning project exploring the automated parsing of Draft Red Herring Prospectus (DRHP) filings, financial ratios, and subscription metrics to forecast first-day listing momentum.",
      tech: ["Python", "Machine Learning", "Scikit-Learn", "Financial NLP", "Pandas"],
      repoUrl: "https://github.com/prtbws/ipoai"
    },
    {
      title: "AGG Store – Full-Stack Web Platform",
      status: "Completed",
      description:
        "Foundational client-server web application demonstrating semantic HTML5, CSS3, dynamic DOM interactions, and an Express.js backend server for order logging.",
      tech: ["JavaScript", "Node.js", "Express", "HTML5", "CSS3"],
      repoUrl: "https://github.com/prtbws/aggstore"
    }
  ],

  // 6. Verified Competitive Programming Achievements
  achievements: [
    {
      platform: "Problem Solving",
      value: "700+",
      label: "Problems Solved",
      detail: "Verified algorithmic solutions across Codeforces, LeetCode, CSES, and CodeChef.",
      url: "https://codolio.com/profile/prtbws"
    },
    {
      platform: "Codeforces",
      value: "1402",
      label: "Max Contest Rating",
      detail: "Division rank: Pupil (Specialist peak). Official handle: prtbws (IIITDM Kurnool).",
      url: "https://codeforces.com/profile/prtbws"
    },
    {
      platform: "LeetCode",
      value: "1750+",
      label: "Peak Contest Rating",
      detail: "Consistent contest participation across dynamic programming, segment trees, and graphs.",
      url: "https://codolio.com/profile/prtbws"
    },
    {
      platform: "CodeChef",
      value: "2-Star",
      label: "Verified Division Status",
      detail: "Earned 2-Star division ranking through multi-hour competitive programming contests.",
      url: "https://codolio.com/profile/prtbws"
    }
  ],

  // 7. Verified Education & Experience Timeline
  timeline: [
    {
      period: "2025 — 2029 (Expected)",
      title: "B.Tech in Artificial Intelligence & Data Science",
      organization: "IIITDM Kurnool (Indian Institute of Information Technology)",
      description:
        "Undergraduate degree focusing on Computer Science foundations, Data Science, and Machine Learning. Cumulative GPA: 7.3.",
      bullets: [
        "Core Coursework: Data Structures, Analysis of Algorithms, Object-Oriented Programming, Data Science Foundations.",
        "Active member of campus technical circles and algorithmic programming groups."
      ]
    },
    {
      period: "February 2026",
      title: "Developer & Participant — Solasta 2026 GDG Hackathon",
      organization: "Google Developer Groups on Campus · IIITDM Kurnool",
      description:
        "Collaborated in a team sprint to build a Community Event Discovery Platform to simplify event discovery for campus students.",
      bullets: [
        "Developed responsive user interface presentation layers using HTML, CSS, and JavaScript.",
        "Coordinated team Git branching, commits, and pull requests under a 24-hour hackathon deadline."
      ]
    },
    {
      period: "2025",
      title: "Firmware & Hardware Developer — SyncSwitch Project",
      organization: "Group 4 Systems Project · IIITDM Kurnool",
      description:
        "Developed a triple-redundant IoT smart switchboard system equipped with an ESP32 microcontroller and gas safety sensor.",
      bullets: [
        "Authored non-blocking C++ state machine routines for sub-150ms local switching response.",
        "Integrated Sinric Pro WebSocket handlers and Firebase Realtime Database cloud event telemetry."
      ]
    }
  ]
};

/**
 * ============================================================================
 * DOM RENDERING FUNCTIONS
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  renderPersonalDetails();
  renderAboutSection();
  renderSkills();
  renderProjects();
  renderAchievements();
  renderTimeline();
  renderContactAndFooter();

  setupScrollProgress();
  setupSmoothScrollAndNav();
  setupScrollObserver();
  setupBackToTop();
  setupMobileMenu();
  setupCopyEmail();
});

// Render Hero and Personal Elements
function renderPersonalDetails() {
  const { name, role, badge, intro, avatar } = portfolioData.personal;

  const nameEl = document.getElementById("hero-name");
  const roleEl = document.getElementById("hero-role");
  const badgeEl = document.getElementById("hero-badge");
  const introEl = document.getElementById("hero-intro");
  const avatarEl = document.getElementById("hero-avatar");

  if (nameEl) nameEl.textContent = name;
  if (roleEl) roleEl.textContent = role;
  if (badgeEl) badgeEl.textContent = badge;
  if (introEl) introEl.textContent = intro;
  if (avatarEl && avatar) {
    avatarEl.src = avatar;
    avatarEl.alt = name;
  }

  // Hero socials
  const socialsContainer = document.getElementById("hero-socials");
  if (socialsContainer) {
    socialsContainer.innerHTML = portfolioData.socials
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link">
          <span>${s.name}</span> &nearr;
        </a>`
      )
      .join("");
  }
}

// Render About Section Text and Highlight Cards
function renderAboutSection() {
  const textContainer = document.getElementById("about-text");
  const cardsContainer = document.getElementById("about-cards");

  if (textContainer) {
    textContainer.innerHTML = portfolioData.about.paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("");
  }

  if (cardsContainer) {
    cardsContainer.innerHTML = portfolioData.about.cards
      .map(
        (c) => `
        <div class="about-card">
          <h3 class="about-card-title">${c.title}</h3>
          <p class="about-card-desc">${c.description}</p>
        </div>`
      )
      .join("");
  }
}

// Render Skills Grid
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = portfolioData.skills
    .map(
      (cat) => `
      <div class="skill-category-card">
        <h3 class="skill-category-title">${cat.category}</h3>
        <p class="skill-category-desc">${cat.description}</p>
        <div class="skill-pills">
          ${cat.items.map((item) => `<span class="skill-pill">${item}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");
}

// Render Projects Cards
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = portfolioData.projects
    .map((p) => {
      const statusBadge =
        p.status === "Completed"
          ? `<span class="badge badge-success">Completed</span>`
          : p.status === "In Development"
          ? `<span class="badge badge-warning">In Development</span>`
          : `<span class="badge badge-accent">${p.status}</span>`;

      return `
      <article class="project-card">
        <div class="project-header">
          <h3 class="project-title">${p.title}</h3>
          ${statusBadge}
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer">
            View on GitHub &nearr;
          </a>
        </div>
      </article>`;
    })
    .join("");
}

// Render Competitive Programming Achievements
function renderAchievements() {
  const grid = document.getElementById("achievements-grid");
  const note = document.getElementById("unified-profile-note");

  if (grid) {
    grid.innerHTML = portfolioData.achievements
      .map(
        (a) => `
        <div class="achievement-card">
          <span class="achievement-platform">${a.platform}</span>
          <div class="achievement-value">${a.value}</div>
          <div class="achievement-label">${a.label}</div>
          <p class="achievement-detail">${a.detail}</p>
        </div>`
      )
      .join("");
  }

  if (note) {
    note.innerHTML = `
      <div class="unified-text">
        <strong>Unified Coding Profile:</strong> View verified ratings, problem counters, and contest histories consolidated on Codolio.
      </div>
      <a href="https://codolio.com/profile/prtbws" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.45rem 1rem;">
        codolio.com/profile/prtbws &nearr;
      </a>`;
  }
}

// Render Education and Experience Timeline
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = portfolioData.timeline
    .map(
      (item) => `
      <div class="timeline-item">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-header">
          <h3 class="timeline-title">${item.title}</h3>
          <span class="timeline-period">${item.period}</span>
        </div>
        <div class="timeline-org">${item.organization}</div>
        <p class="timeline-desc">${item.description}</p>
        ${
          item.bullets && item.bullets.length
            ? `<ul class="timeline-bullets">
                ${item.bullets.map((b) => `<li>${b}</li>`).join("")}
               </ul>`
            : ""
        }
      </div>`
    )
    .join("");
}

// Render Contact Links & Footer
function renderContactAndFooter() {
  const email = portfolioData.personal.email;
  const emailLink = document.getElementById("contact-email-link");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = `Send Email (${email})`;
  }

  // Contact links
  const contactLinks = document.getElementById("contact-links");
  if (contactLinks) {
    contactLinks.innerHTML = portfolioData.socials
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link">
          <span>${s.name}</span> &nearr;
        </a>`
      )
      .join("");
  }

  // Footer links and year
  const footerLinks = document.getElementById("footer-links");
  if (footerLinks) {
    footerLinks.innerHTML = portfolioData.socials
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer">
          ${s.name}
        </a>`
      )
      .join("");
  }

  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * ============================================================================
 * INTERACTIVE BEHAVIORS & ACCESSIBILITY
 * ============================================================================
 */

// Scroll Progress Bar Indicator
function setupScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

// Smooth Scrolling & Navbar Active State
function setupSmoothScrollAndNav() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Update active nav link on scroll
  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });

  // Close mobile menu when clicking nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("nav-links");
      const toggle = document.getElementById("mobile-toggle");
      if (menu) menu.classList.remove("open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Gentle Scroll Reveal using IntersectionObserver
function setupScrollObserver() {
  const sections = document.querySelectorAll(".section");

  if (!("IntersectionObserver" in window)) {
    sections.forEach((sec) => sec.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
  );

  sections.forEach((section) => {
    section.classList.add("fade-in-section");
    observer.observe(section);
  });
}

// Back to Top Button
function setupBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const toggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

// One-Click Copy Email to Clipboard with Accessible Status Feedback
function setupCopyEmail() {
  const copyBtn = document.getElementById("copy-email-btn");
  const statusEl = document.getElementById("copy-status");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    const email = portfolioData.personal.email;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers
        const tempInput = document.createElement("input");
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }

      if (statusEl) {
        statusEl.textContent = `✓ Copied ${email} to clipboard!`;
        statusEl.style.color = "var(--success)";
        setTimeout(() => {
          statusEl.textContent = "";
        }, 3000);
      }
    } catch (err) {
      if (statusEl) {
        statusEl.textContent = `Could not copy. Please email: ${email}`;
        statusEl.style.color = "var(--text-muted)";
      }
    }
  });
}
