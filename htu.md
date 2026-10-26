# 📖 How To Use (HTU) — Partha Biswas Personal Portfolio

A clean, minimal, professional personal portfolio website for **Partha Biswas**, built using **pure HTML, CSS, and vanilla JavaScript** (zero frameworks, zero build steps, zero dependencies).

---

## 🚀 Quick Start

### 1. View Directly in Any Browser
No servers or installation required! Simply double-click **`index.html`** or right-click and choose **Open with > Chrome / Edge / Firefox / Safari**.

### 2. View Using a Local Web Server (Optional)
If you prefer running a local development server:

```bash
# Using Python:
python -m http.server 8000

# Or using Node:
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 📁 Project Structure

```text
├── index.html       # Clean semantic HTML5 page structure
├── style.css        # Clean CSS design, CSS variables, responsive layouts, & smooth transitions
├── script.js        # Central portfolioData object & dynamic DOM rendering
├── images/
│   └── profile.jpg  # Your profile portrait photo
├── resume.pdf       # Your official resume PDF
├── README.md        # Your original GitHub profile README
└── htu.md           # This How-To-Use documentation guide
```

---

## ✏️ How to Customize Your Portfolio

You do **not** need to touch `index.html` to update your content! Everything is rendered dynamically from the `portfolioData` object at the top of **`script.js`**.

### 1. Updating Name, Bio, and Email
Open [`script.js`](script.js) and edit the `personal` section:

```javascript
personal: {
  name: "Partha Biswas",
  role: "AI & Data Science Undergraduate",
  badge: "Undergraduate at IIIT Kurnool",
  avatar: "images/profile.jpg",
  email: "prtbws@zohomail.in",
  intro: "I am an Artificial Intelligence and Data Science undergraduate at IIIT Kurnool...",
  location: "Kurnool, Andhra Pradesh, India",
  resumeUrl: "resume.pdf"
}
```

### 2. Replacing Your Profile Picture
1. Put your new photo in the `images/` directory, e.g., `images/profile.jpg`.
2. Make sure `personal.avatar` in `script.js` points to `"images/profile.jpg"`.
3. Refresh your browser!

### 3. Adding or Editing Projects
In [`script.js`](script.js), under `projects`, add a new object to the array:

```javascript
{
  title: "New AI Project",
  status: "Completed", // "Completed" | "In Development" | "Active"
  description: "A description of what the project does, the problem it solves, and its impact.",
  tech: ["Python", "PyTorch", "FastAPI"],
  repoUrl: "https://github.com/prtbws/my-repo"
}
```
The website will automatically generate the clean project card in the grid!

### 4. Updating Skills
In [`script.js`](script.js), under `skills`:
Add any new technologies to the appropriate category `items` array:
```javascript
{
  category: "Programming Languages",
  description: "Core languages used for competitive programming and application engineering",
  items: ["C++", "C", "Python", "JavaScript", "HTML5", "CSS3", "Rust"]
}
```

### 5. Updating Competitive Programming Stats
In [`script.js`](script.js), under `achievements`:
Update numbers, ratings, or milestones:
```javascript
{
  platform: "Codeforces",
  value: "1402",
  label: "Max Contest Rating",
  detail: "Division rank: Pupil (Specialist peak). Official handle: prtbws.",
  url: "https://codeforces.com/profile/prtbws"
}
```

### 6. Changing Theme Colors
At the top of [`style.css`](style.css), change any CSS variable:

```css
:root {
  --bg-primary: #ffffff;    /* Main background */
  --bg-secondary: #f8fafc;  /* Alternating section background */
  --text-primary: #0f172a;  /* Heading text */
  --text-secondary: #334155;/* Body text */
  --accent: #2563eb;        /* Main blue accent */
  --accent-hover: #1d4ed8;  /* Hover state */
  --border: #e2e8f0;        /* Subtle card & divider borders */
}
```

---

## 🚢 Free Hosting & Deployment

Because this website uses pure HTML, CSS, and JavaScript, it can be hosted for **free** on any static hosting platform:

### Deploying to GitHub Pages (Easiest)
1. Push your repository to GitHub (`https://github.com/prtbws/portfolio`).
2. Go to repository **Settings > Pages**.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Set branch to `main` and folder to `/ (root)`.
5. Click **Save**. Your website will be live in 60 seconds at `https://prtbws.github.io/portfolio/`!

### Deploying to Vercel or Netlify
Simply connect your GitHub repository; static detection will immediately publish your website with free SSL.
