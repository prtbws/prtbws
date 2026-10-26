/**
 * ============================================================================
 * PARTHA BISWAS — ADVANCED ANIMATED DARK PORTFOLIO SCRIPT
 * ============================================================================
 * Centralized portfolio data & interactive animation engine.
 * Edit 'portfolioData' below to update projects, skills, achievements, or bio.
 */

const portfolioData = {
  // 1. Personal Information
  personal: {
    name: "Partha Biswas",
    preferredName: "prtbws",
    badge: "Available for Internships & Research",
    avatar: "images/profile.jpg",
    email: "prtbws@zohomail.in",
    intro:
      "Artificial Intelligence and Data Science undergraduate at IIITDM Kurnool. I engineer intelligent software systems, design quantitative stock screening algorithms, and tackle complex algorithmic challenges in competitive programming.",
    location: "IIITDM Kurnool, Andhra Pradesh, India",
    resumeUrl: "resume.pdf"
  },

  // 2. Dynamic Typing Headline Roles
  roles: [
    "AI & Data Science Undergrad",
    "Competitive Programmer (700+ Solved)",
    "Quantitative Strategy Builder",
    "C++ & Low-Level Systems Dev",
  ],

  // 3. Verified Developer & Contest Profiles
  socials: [
    { name: "GitHub", url: "https://github.com/prtbws", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prtbws/", icon: "linkedin" },
    { name: "Codeforces", url: "https://codeforces.com/profile/prtbws", icon: "codeforces" },
    { name: "Codolio", url: "https://codolio.com/profile/prtbws", icon: "codolio" }
  ],

  // 4. About Narrative & Highlight Pillars
  about: {
    paragraphs: [
      "I am an Artificial Intelligence and Data Science undergraduate at the Indian Institute of Information Technology, Design and Manufacturing (IIITDM) Kurnool (2025–2029).",
      "My passion lives at the intersection of mathematical problem-solving and systems software: engineering quantitative equity screeners with multi-indicator confluence in Python, writing low-latency non-blocking firmware in C++ for ESP32 microcontrollers, and rigorously practicing competitive programming.",
      "With over 700+ algorithmic problems solved across Codeforces, LeetCode, CSES, and CodeChef, I thrive on optimizing asymptotic complexity, cache locality, and architecting real-world applications with high reliability."
    ],
    cards: [
      {
        icon: "grad",
        title: "IIITDM Kurnool '29",
        desc: "B.Tech in Artificial Intelligence & Data Science (Cumulative GPA: 7.3)"
      },
      {
        icon: "code",
        title: "Competitive Programmer",
        desc: "700+ problems solved across Codeforces (Pupil 1402), LeetCode (1750+), CSES & CodeChef"
      },
      {
        icon: "trend",
        title: "Quantitative Finance",
        desc: "Technical momentum screening, multi-indicator confluence, and 5-year historical backtesting"
      },
      {
        icon: "cpu",
        title: "Firmware & Systems",
        desc: "Low-level memory management in C and triple-redundant IoT hardware on ESP32"
      }
    ]
  },

  // 5. Technical Competencies Matrix
  skills: [
    {
      category: "languages",
      title: "Programming Languages",
      desc: "Core languages for high-performance computing & problem solving",
      items: ["C++", "C", "Python", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "data_ml",
      title: "Data Science & Machine Learning",
      desc: "Libraries for mathematical modeling & quantitative analysis",
      items: ["NumPy", "Pandas", "PyTorch", "Scikit-Learn", "yfinance", "Matplotlib", "Plotly"]
    },
    {
      category: "systems",
      title: "Computer Science & Systems",
      desc: "Foundational pillars of algorithms, architecture, and hardware",
      items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Memory Management", "ESP32 Embedded Systems"]
    },
    {
      category: "tools",
      title: "Development Tools & Platforms",
      desc: "Version control, shell automation, and cloud integrations",
      items: ["Git", "GitHub", "Linux / Bash", "Jupyter Notebook", "Firebase RTDB", "Sinric Pro"]
    }
  ],

  // 6. Real Verified GitHub Projects
  projects: [
    {
      id: "stock-market-analysis",
      title: "Stock Market Analysis & Trading Strategy",
      category: "Fintech & Quant",
      status: "Completed",
      description:
        "A Python-based quantitative stock screening and market analysis system. Ingests historical pricing data across NIFTY 500 equities, computes technical indicator confluences (SMA, EMA, Bollinger Bands, RSI, MACD, ADX, SuperTrend), and backtests momentum rules over 5 years of historical market data yielding ~60% accuracy with strict risk caps.",
      tech: ["Python", "Pandas", "NumPy", "yfinance", "Plotly", "Matplotlib", "Jupyter"],
      repoUrl: "https://github.com/prtbws/stock-market-analysis"
    },
    {
      id: "syncswitch",
      title: "SyncSwitch v4.1.0 – IoT Smart Switchboard",
      category: "IoT & Embedded",
      status: "Completed",
      description:
        "An advanced IoT-based home automation and environmental safety hardware system built on ESP32 to eliminate single-point failure. Implements triple-redundant switching across physical tactile switches, TSOP 38kHz IR remote, and Sinric Pro voice/app integrations with real-time MQ-2 gas/smoke detection and Firebase RTDB telemetry.",
      tech: ["C++", "ESP32", "Arduino", "Sinric Pro", "Firebase RTDB", "Sensors"],
      repoUrl: "https://github.com/ashwinjain825/syncswitch"
    },
    {
      id: "banking",
      title: "BankSys – Banking Management System in C",
      category: "Systems & C++",
      status: "Completed",
      description:
        "A modular, memory-safe command-line banking application written in pure C. Prioritizes strict pointer arithmetic discipline, persistent binary file records for balance ledgers, atomic deposit/withdrawal routines, and structured audit logs with clean separation of data and presentation layers.",
      tech: ["C", "GCC Compiler", "File I/O", "Memory Management", "CLI"],
      repoUrl: "https://github.com/prtbws/banking"
    },
    {
      id: "dsa-solutions",
      title: "DSA & CP Solutions Ecosystem",
      category: "Systems & C++",
      status: "Active",
      description:
        "Continuous automated repository tracking 700+ competitive programming solutions across Codeforces, LeetCode, CSES, and CodeChef synced via SolveBase. Accompanied by handcrafted Python Jupyter notebooks on trees, graphs, dynamic programming, and constraint analysis.",
      tech: ["C++", "Python", "Algorithms", "Data Structures", "SolveBase"],
      repoUrl: "https://github.com/prtbws/dsa-solutions"
    },
    {
      id: "ipoai",
      title: "IPO AI – Machine Learning Valuation Engine",
      category: "AI & ML",
      status: "In Development",
      description:
        "An experimental machine learning project exploring automated parsing of Draft Red Herring Prospectus (DRHP) filings, balance sheet financial ratios, and subscription metrics to forecast first-day listing momentum.",
      tech: ["Python", "Machine Learning", "Scikit-Learn", "Financial NLP", "Pandas"],
      repoUrl: "https://github.com/prtbws/ipoai"
    },
    {
      id: "aggstore",
      title: "AGG Store – Full-Stack Web Platform",
      category: "Systems & C++",
      status: "Completed",
      description:
        "Inaugural full-stack web project demonstrating client-server HTTP communication, semantic HTML5, CSS3 layout, dynamic DOM operations, and an Express.js backend for order routing.",
      tech: ["JavaScript", "Node.js", "Express", "HTML5", "CSS3"],
      repoUrl: "https://github.com/prtbws/aggstore"
    }
  ],

  // 7. Verified Competitive Programming Metrics
  achievements: [
    {
      platform: "Problem Solving",
      targetNumber: 700,
      suffix: "+",
      label: "Problems Solved",
      detail: "Verified algorithmic solutions across Codeforces, LeetCode, CSES, and CodeChef.",
      url: "https://codolio.com/profile/prtbws"
    },
    {
      platform: "Codeforces",
      targetNumber: 1402,
      suffix: "",
      label: "Max Contest Rating",
      detail: "Division rank: Pupil (Specialist peak). Official handle: prtbws (IIITDM Kurnool).",
      url: "https://codeforces.com/profile/prtbws"
    },
    {
      platform: "LeetCode",
      targetNumber: 1750,
      suffix: "+",
      label: "Peak Contest Rating",
      detail: "Contest efficiency across dynamic programming, segment trees, binary search, and graphs.",
      url: "https://codolio.com/profile/prtbws"
    },
    {
      platform: "CodeChef",
      targetNumber: null,
      customDisplay: "2-Star",
      label: "Verified Division Status",
      detail: "Consistent contest performance in multi-hour competitive programming challenges.",
      url: "https://codolio.com/profile/prtbws"
    }
  ],

  // 8. Education & Journey Timeline
  timeline: [
    {
      period: "2025 — 2029 (Expected)",
      title: "B.Tech in Artificial Intelligence & Data Science",
      organization: "IIITDM Kurnool (Indian Institute of Information Technology)",
      description:
        "Undergraduate degree focusing on Computer Science foundations, Data Science, and Machine Learning. Cumulative GPA: 7.3.",
      bullets: [
        "Core Coursework: Data Structures, Analysis of Algorithms, Object-Oriented Programming, Data Science Foundations.",
        "Active member of campus technical communities and competitive programming circles."
      ]
    },
    {
      period: "February 2026",
      title: "Developer & Participant — Solasta 2026 GDG Hackathon",
      organization: "Google Developer Groups on Campus · IIITDM Kurnool",
      description:
        "Collaborated in a fast-paced sprint to build a Community Event Discovery Platform to simplify event discovery for campus students.",
      bullets: [
        "Developed responsive user interface presentation layers using HTML, custom CSS, and interactive JavaScript.",
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
 * INITIALIZATION ON DOM LOAD
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  renderPersonal();
  initTypingEffect();
  renderAbout();
  renderSkills("all");
  renderProjects("all");
  renderAchievements();
  renderTimeline();
  renderFooter();

  initParticleCanvas();
  initCursorSpotlight();
  init3DTilt();
  initFilterBars();
  initScrollObserver();
  initScrollProgress();
  initBackToTop();
  initMobileMenu();
  initCopyEmail();
});

/* ==========================================================================
   DOM RENDERING ROUTINES
   ========================================================================== */

function renderPersonal() {
  const { name, badge, intro, avatar, email } = portfolioData.personal;

  const nameEl = document.getElementById("hero-name");
  const badgeEl = document.getElementById("hero-badge-text");
  const introEl = document.getElementById("hero-intro");
  const avatarEl = document.getElementById("hero-avatar");
  const emailLink = document.getElementById("contact-email-link");
  const emailText = document.getElementById("contact-email-text");

  if (nameEl) nameEl.textContent = name;
  if (badgeEl) badgeEl.textContent = badge;
  if (introEl) introEl.textContent = intro;
  if (avatarEl && avatar) {
    avatarEl.src = avatar;
    avatarEl.alt = name;
  }
  if (emailLink) emailLink.href = `mailto:${email}`;
  if (emailText) emailText.textContent = `Send Email (${email})`;

  // Hero Socials
  const socialsContainer = document.getElementById("hero-socials");
  if (socialsContainer) {
    socialsContainer.innerHTML = portfolioData.socials
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-pill">
          <span>${s.name}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>`
      )
      .join("");
  }

  // Contact Socials
  const contactLinks = document.getElementById("contact-links");
  if (contactLinks) {
    contactLinks.innerHTML = portfolioData.socials
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-pill">
          <span>${s.name}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>`
      )
      .join("");
  }
}

// Typing Effect in Hero
function initTypingEffect() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  const roles = portfolioData.roles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      el.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// Render About Narrative & Highlights
function renderAbout() {
  const textEl = document.getElementById("about-text");
  const cardsEl = document.getElementById("about-cards");

  if (textEl) {
    const pHTML = portfolioData.about.paragraphs.map((p) => `<p>${p}</p>`).join("");
    // Keep the CTA bar at the bottom
    const existingCta = textEl.querySelector(".about-cta-bar");
    textEl.innerHTML = pHTML;
    if (existingCta) textEl.appendChild(existingCta);
  }

  if (cardsEl) {
    cardsEl.innerHTML = portfolioData.about.cards
      .map(
        (c) => `
        <div class="about-highlight-card glass-card">
          <div class="highlight-header">
            <div class="highlight-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 class="highlight-title">${c.title}</h3>
          </div>
          <p class="highlight-desc">${c.desc}</p>
        </div>`
      )
      .join("");
  }
}

// Render Skills (filterable)
function renderSkills(categoryFilter = "all") {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  const filtered =
    categoryFilter === "all"
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === categoryFilter);

  container.innerHTML = filtered
    .map(
      (cat) => `
      <div class="skill-card glass-card">
        <h3 class="skill-category-title">${cat.title}</h3>
        <p class="skill-category-desc">${cat.desc}</p>
        <div class="skill-pills-wrap">
          ${cat.items.map((item) => `<span class="skill-pill">${item}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");
}

// Render Projects (filterable with 3D tilt)
function renderProjects(filter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered =
    filter === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  container.innerHTML = filtered
    .map((p) => {
      const statusClass =
        p.status === "Completed"
          ? "badge-success"
          : p.status === "In Development"
          ? "badge-warning"
          : "badge-accent";

      return `
      <article class="project-card glass-card" data-tilt>
        <div class="project-top-meta">
          <span class="project-category-tag">${p.category}</span>
          <span class="badge ${statusClass}">
            <span class="beacon-dot"></span>
            <span>${p.status}</span>
          </span>
        </div>

        <h3 class="project-title">${p.title}</h3>
        <p class="project-description">${p.description}</p>

        <div class="project-tech-tags">
          ${p.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
        </div>

        <div class="project-action-bar">
          <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="repo-link">
            <span>Inspect GitHub Repository</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </article>`;
    })
    .join("");

  // Re-attach 3D tilt handlers to freshly rendered project cards
  init3DTilt();
}

// Render Achievements (Animated Stat Cards)
function renderAchievements() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;

  container.innerHTML = portfolioData.achievements
    .map((a, idx) => {
      const isCounter = a.targetNumber !== null;
      return `
      <div class="achievement-card glass-card" data-index="${idx}">
        <span class="achievement-platform">${a.platform}</span>
        <div class="achievement-number-wrap">
          <span class="achievement-number" ${
            isCounter
              ? `data-target="${a.targetNumber}" data-suffix="${a.suffix}"`
              : ""
          }>
            ${isCounter ? "0" + a.suffix : a.customDisplay}
          </span>
        </div>
        <div class="achievement-label">${a.label}</div>
        <p class="achievement-detail">${a.detail}</p>
        <div class="achievement-bottom-glow"></div>
      </div>`;
    })
    .join("");
}

// Render Journey Timeline
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = portfolioData.timeline
    .map(
      (item) => `
      <div class="timeline-item">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-card glass-card">
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
        </div>
      </div>`
    )
    .join("");
}

// Render Footer
function renderFooter() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const footerLinks = document.getElementById("footer-links");
  if (footerLinks) {
    footerLinks.innerHTML = portfolioData.socials
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="footer-link">
          ${s.name}
        </a>`
      )
      .join("");
  }
}

/* ==========================================================================
   ANIMATION ENGINES
   ========================================================================== */

// 1. Interactive Background Canvas (Constellation & Connected Particles)
function initParticleCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor(width / 24), 65);
  const particles = [];
  const mouse = { x: -1000, y: -1000, radius: 140 };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 1.6 + 0.6,
      baseAlpha: Math.random() * 0.45 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Distance to mouse
      const dxm = p.x - mouse.x;
      const dym = p.y - mouse.y;
      const distMouse = Math.sqrt(dxm * dxm + dym * dym);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(165, 180, 252, ${p.baseAlpha})`;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          const alpha = (1 - dist / 115) * 0.22;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      // Connect to mouse
      if (distMouse < mouse.radius) {
        const alpha = (1 - distMouse / mouse.radius) * 0.35;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// 2. Cursor Spotlight Tracker
function initCursorSpotlight() {
  const spotlight = document.getElementById("cursor-spotlight");
  if (!spotlight) return;

  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function update() {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;
    spotlight.style.left = `${currentX}px`;
    spotlight.style.top = `${currentY}px`;
    requestAnimationFrame(update);
  }

  update();
}

// 3. Interactive 3D Card Tilt
function init3DTilt() {
  const cards = document.querySelectorAll("[data-tilt], #avatar-card");

  cards.forEach((card) => {
    // Avoid double attaching
    if (card._hasTiltListener) return;
    card._hasTiltListener = true;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(
        2
      )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}

// 4. Interactive Category Filter Buttons
function initFilterBars() {
  // Skills Filter
  const skillBtns = document.querySelectorAll("#skills-filter-bar .filter-btn");
  skillBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      skillBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderSkills(category);
    });
  });

  // Projects Filter
  const projectBtns = document.querySelectorAll("#projects-filter-bar .filter-btn");
  projectBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });
}

// 5. Scroll Observer & Number Counter Trigger
function initScrollObserver() {
  const sections = document.querySelectorAll(".section");
  let countersAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          // Trigger number counter animation when Achievements scrolls in
          if (entry.target.id === "achievements" && !countersAnimated) {
            countersAnimated = true;
            animateNumbers();
          }
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  sections.forEach((sec) => {
    sec.classList.add("fade-in-section");
    observer.observe(sec);
  });
}

// Animated Stat Counters
function animateNumbers() {
  const numberElements = document.querySelectorAll(".achievement-number[data-target]");

  numberElements.forEach((el) => {
    const target = parseInt(el.getAttribute("data-target"), 10);
    const suffix = el.getAttribute("data-suffix") || "";
    if (isNaN(target)) return;

    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out exponential
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);

      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(step);
  });
}

// 6. Top Scroll Progress Bar & Navbar Active States
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      if (progressBar) progressBar.style.width = `${progress}%`;

      if (navbar) {
        if (scrollTop > 50) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
      }

      // Active Section Highlighting
      let currentSection = "";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 140;
        const height = sec.offsetHeight;
        if (scrollTop >= top && scrollTop < top + height) {
          currentSection = sec.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    },
    { passive: true }
  );
}

// 7. Back to Top Button
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 400) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    },
    { passive: true }
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 8. Mobile Menu Toggle
function initMobileMenu() {
  const toggle = document.getElementById("mobile-toggle");
  const nav = document.getElementById("nav-links");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// 9. Copy Email Address with Confetti Burst
function initCopyEmail() {
  const btn = document.getElementById("copy-email-btn");
  const statusEl = document.getElementById("copy-status");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const email = portfolioData.personal.email;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const temp = document.createElement("input");
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }

      if (statusEl) {
        statusEl.textContent = `✓ Copied ${email} to clipboard!`;
        statusEl.style.color = "#34d399";
        setTimeout(() => {
          statusEl.textContent = "";
        }, 3200);
      }

      // Trigger Confetti Celebration!
      launchConfetti();
    } catch (e) {
      if (statusEl) {
        statusEl.textContent = `Please email: ${email}`;
        statusEl.style.color = "#a5b4fc";
      }
    }
  });
}

// Pure Vanilla JS Confetti Animation
function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#6366f1", "#06b6d4", "#a855f7", "#3b82f6", "#10b981", "#f59e0b"];
  const pieces = [];

  for (let i = 0; i < 90; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height * 0.75,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 4,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 1) * 16 - 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      gravity: 0.35,
      alpha: 1
    });
  }

  let animationFrame;
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let aliveCount = 0;

    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRot;
      p.alpha -= 0.009;

      if (p.alpha > 0) {
        aliveCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (aliveCount > 0) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  render();
}
