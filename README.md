# ⚡ Partha Biswas — Personal Portfolio Website

A modern, highly animated, single-page personal portfolio for **Partha Biswas**, Artificial Intelligence and Data Science undergraduate at **IIITDM Kurnool**.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Highlights & Architecture

- **Single Route Architecture**: One continuous, fluid scrolling experience across `/`.
- **100% Verified Profile Data**: Grounded in authentic projects, Codeforces metrics, GitHub repositories, and hackathon participation.
- **Aesthetic**: Deep space/near-black theme (`#07070a`), electric indigo (`#6366f1`) and cyber cyan (`#06b6d4`) accents, subtle ambient glows, fine geometric grid, and restrained glassmorphism.
- **Centralized Content Configuration**: Every single piece of content (bio, headline, skills, projects, achievements, journey, contact) is maintained in `src/data/portfolio.ts`. You never need to touch React components or animation code to update your site!
- **Interactive Visual Customizer**: Click the **Customize** button in the header (or open via mobile menu) to test live theme toggles, hide/enable sections, and export updated configuration code directly to your clipboard.
- **Accessible & Responsive**: Fully optimized across desktop, tablet, and mobile devices, with full support for `prefers-reduced-motion` and keyboard navigation.

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- Node.js (v18.18+ or v20+ recommended)
- npm or pnpm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 🛠️ How to Customize Your Portfolio

All your content is cleanly isolated in **`src/data/portfolio.ts`**. You do not need to hunt across component files!

```text
src/
├── data/
│   ├── portfolio.ts   <-- 🎯 ALL EDITABLE CONTENT LIVES HERE
│   └── theme.ts       <-- Central theme colors & animation settings
├── types/
│   └── portfolio.ts   <-- TypeScript interfaces for type safety
└── public/
    └── images/        <-- 🖼️ Put profile photo & project images here
```

---

### 1. Changing Name, Headline, Bio, and Email

Open [`src/data/portfolio.ts`](file:///c:/IIITDMK/Projects/Protfolio/src/data/portfolio.ts) and edit the `personal` object:

```typescript
export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "Partha Biswas",
    preferredName: "prtbws",
    roleTitle: "AI & Data Science Undergrad · Competitive Programmer",
    headline: "I build intelligent systems and engineer ideas into reality.",
    shortBio: "Artificial Intelligence and Data Science undergraduate at IIITDM Kurnool...",
    fullBio: [
      "Currently pursuing my B.Tech in AI & Data Science at IIITDM Kurnool...",
      "My passion lies at the intersection of mathematical reasoning and practical software...",
    ],
    avatarUrl: "/images/profile.jpg", // Location of your picture
    location: "IIITDM Kurnool, Andhra Pradesh, India",
    email: "prtbws@zohomail.in",
    resumeUrl: "https://github.com/prtbws/prtbws/blob/main/resume.pdf",
    hireable: true,
    statusBadge: "Open to Internships & Research Collaborations",
  },
  // ...
};
```

---

### 2. Replacing Your Profile Picture

1. Place your new photo in [`public/images/`](file:///c:/IIITDMK/Projects/Protfolio/public/images/), e.g., `public/images/profile.jpg`.
2. Ensure `personal.avatarUrl` in [`src/data/portfolio.ts`](file:///c:/IIITDMK/Projects/Protfolio/src/data/portfolio.ts) points to `"/images/profile.jpg"`.
3. Save the file. The website updates automatically!

---

### 3. Adding, Editing, or Reordering Projects

Projects are stored as an array of objects under `projects` in [`src/data/portfolio.ts`](file:///c:/IIITDMK/Projects/Protfolio/src/data/portfolio.ts).

#### To Add a New Project:
Copy and paste this template into the `projects` array:

```typescript
{
  id: "my-new-project",
  title: "Neural Network Vision Engine",
  tagline: "Real-time edge object classification using PyTorch & OpenCV",
  category: "AI & ML", // Options: "Fintech & Quant" | "IoT & Embedded" | "Systems & C++" | "AI & ML" | "Web Applications"
  status: "Completed", // Options: "Completed" | "In Development" | "Production" | "Prototype" | "Research"
  featured: true,
  description: "Detailed description of what the project does and why it was built.",
  problemSolved: "The core technical challenge or bottleneck solved by this application.",
  features: [
    "Sub-15ms inference latency on low-power devices",
    "Quantized 8-bit model architecture",
  ],
  techStack: ["Python", "PyTorch", "OpenCV", "C++"],
  githubUrl: "https://github.com/prtbws/my-repo",
  liveUrl: "https://my-demo-link.com", // Optional, omit if none exists
  highlights: ["15ms Latency", "Edge AI", "PyTorch"],
  enabled: true, // Set to false to temporarily hide it without deleting!
},
```

#### To Temporarily Hide a Project:
Change `enabled: false`. The project card and filters will automatically exclude it.

#### To Reorder Projects:
Simply move the project object higher or lower in the array. The first items appear first on the page.

---

### 4. Updating Competitive Programming & Achievements

Update the `competitiveMetrics` array in [`src/data/portfolio.ts`](file:///c:/IIITDMK/Projects/Protfolio/src/data/portfolio.ts):

```typescript
competitiveMetrics: [
  {
    id: "total-solved",
    platform: "Overall Problem Solving",
    metricLabel: "Problems Solved",
    value: "700+",
    numericTarget: 700, // Number for the animated counter
    suffix: "+",
    detail: "Algorithmic & data structure tracking problems resolved across global platforms.",
    profileUrl: "https://codolio.com/profile/prtbws",
    iconName: "CheckCircle2",
    accentColor: "#10b981",
    verified: true,
    enabled: true,
  },
  {
    id: "codeforces",
    platform: "Codeforces",
    metricLabel: "Max Contest Rating",
    value: "1402",
    numericTarget: 1402,
    detail: "Division rank: Pupil (Specialist peak). Official Handle: prtbws.",
    profileUrl: "https://codeforces.com/profile/prtbws",
    iconName: "Terminal",
    accentColor: "#6366f1",
    verified: true,
    enabled: true,
  },
  // ...
]
```

---

### 5. Managing Skills

Add or adjust skills in the `skills` array in [`src/data/portfolio.ts`](file:///c:/IIITDMK/Projects/Protfolio/src/data/portfolio.ts):

```typescript
{
  name: "C++",
  category: "languages", // "languages" | "data_ml" | "systems_cs" | "tools_dev"
  proficiency: "Proficient", // "Familiar" | "Proficient" | "Advanced" | "Core"
  highlight: true, // Displays glowing accent dot
  enabled: true,
}
```

---

### 6. Managing Timeline & Journey

Add or update milestones under `timeline` in [`src/data/portfolio.ts`](file:///c:/IIITDMK/Projects/Protfolio/src/data/portfolio.ts):

```typescript
{
  id: "my-internship",
  type: "experience", // "education" | "experience" | "hackathon" | "leadership"
  title: "Software Engineer Intern",
  organization: "Tech Company",
  period: "Summer 2026",
  location: "Bangalore, India",
  description: "Engineered scalable distributed backend services...",
  highlights: ["Designed RESTful APIs", "Optimized database queries by 40%"],
  tags: ["Go", "Docker", "PostgreSQL"],
  enabled: true,
}
```

---

### 7. Changing Theme Colors & Animations

Open [`src/data/theme.ts`](file:///c:/IIITDMK/Projects/Protfolio/src/data/theme.ts) or [`src/data/portfolio.ts`](file:///c:/IIITDMK/Projects/Protfolio/src/data/portfolio.ts) under `theme`:

```typescript
theme: {
  accentColor: "#6366f1",     // Primary electric violet / indigo
  highlightColor: "#06b6d4",  // Cyan highlight
  borderRadius: "1rem",
  enableCustomCursor: true,
  enableBackgroundParticles: true, // Toggle ambient star particles
  enableGridGlow: true,            // Toggle radial gradient halos
  animationIntensity: "normal",
}
```

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub: `git push origin main`.
2. Visit [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **Add New Project** and select your `Protfolio` repo.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**. Your portfolio will be live on a custom `.vercel.app` domain or custom domain with automatic SSL and continuous deployment!

### Deploying to Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish directory: `.next`
4. Click Deploy.

---

## 📜 Verified Authenticity

All portfolio content is verified against:
- GitHub: [github.com/prtbws](https://github.com/prtbws)
- LinkedIn: [linkedin.com/in/prtbws](https://www.linkedin.com/in/prtbws/)
- Codeforces: [codeforces.com/profile/prtbws](https://codeforces.com/profile/prtbws)
- Codolio: [codolio.com/profile/prtbws](https://codolio.com/profile/prtbws)
- Solasta 2026 Hackathon (GDG IIITDM Kurnool)
- SyncSwitch ESP32 Triple-Redundant Smart Switchboard (Group 4 IoT project)
- Quantitative Stock Selector & Market Analysis (NIFTY 500 Python screener)
