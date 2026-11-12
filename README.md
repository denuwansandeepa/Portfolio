# ⚡ Denuwan Sandeepa — Awwwards-Level 3D Portfolio

A bespoke, immersive, 3D-animated personal portfolio engineered from scratch with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Three.js** (`@react-three/fiber` & `@react-three/drei`), **GSAP + ScrollTrigger**, **Framer Motion**, and **Lenis Smooth Scroll**.

Designed with a futuristic dark-first aesthetic, glowing neon violet & cyan accents, glassmorphic cards, noise grain textures, interactive WebGL shaders, categorized project filter tabs, public GitHub activity analytics, and fluid kinetic typography.

---

## 🌟 Architecture & Technical Stack

- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript
- **Design System**: Tailwind CSS with CSS Variables for Dark/Light Theming (`darkMode: "class"`)
- **3D & WebGL**: Three.js, `@react-three/fiber`, `@react-three/drei` (morphing wireframe mesh, iridescent core, mouse-reactive parallax, galaxy particle stars, low-power fallback)
- **Animation & Motion**: Framer Motion (layout spring transitions, micro-interactions, magnetic buttons), GSAP ScrollTrigger, Lenis smooth inertia scrolling
- **Quality & Performance**: Zero console errors, fully responsive across desktop, tablet, and mobile, automatic SEO metadata, dynamic sitemap and robots.txt

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css              # Custom tokens, noise overlay, glassmorphism utilities
│   ├── layout.tsx               # Root layout, Space Grotesk & Inter fonts, SEO metadata
│   ├── page.tsx                 # Main single-page application composing all sections
│   ├── robots.ts                # Auto-generated robots.txt
│   └── sitemap.ts               # Auto-generated dynamic XML sitemap
├── components/
│   ├── 3d/
│   │   ├── MorphingCore.tsx     # 3D interactive organic distorted mesh & crystal core
│   │   └── SceneContainer.tsx   # Canvas container with low-power & reduced-motion fallback
│   ├── layout/
│   │   ├── Footer.tsx           # Sri Lanka real-time clock, socials, back-to-top
│   │   ├── Navbar.tsx           # Floating blurred pill navbar with status indicator & mobile drawer
│   │   ├── Preloader.tsx        # 0 to 100 curtain reveal preloader
│   │   └── SmoothScroll.tsx     # Lenis inertia scroll engine
│   ├── sections/
│   │   ├── About.tsx            # Split layout story, bento metrics, profile visual
│   │   ├── Contact.tsx          # Direct contact info, working form, copy email, CV download
│   │   ├── Experience.tsx       # Animated vertical timeline drawing on scroll
│   │   ├── GitHubStats.tsx      # Public GitHub stats, top languages & verified profile
│   │   ├── Hero.tsx             # Interactive 3D scene, rotating roles, kinetic headline
│   │   ├── Marquee.tsx          # Infinite technical ticker
│   │   ├── Projects.tsx         # Featured Case Studies + Archive Grid with category filters
│   │   ├── Services.tsx         # 4 Core engineering offerings
│   │   └── Skills.tsx           # Categorized bento skills grid with proficiency bars
│   └── ui/
│       ├── BentoTile.tsx        # Glass bento tile with spotlight glow
│       ├── CustomCursor.tsx     # Desktop blend-mode magnetic cursor
│       ├── GlassCard.tsx        # Glassmorphic card with cursor spotlight tracking
│       ├── GradientBadge.tsx    # Pulsing status badges
│       ├── MagneticButton.tsx   # Physics-based cursor attraction
│       ├── ProjectCard.tsx      # Large immersive featured case study card
│       ├── ProjectArchiveCard.tsx # Compact archive card with 3D tilt
│       ├── SectionHeading.tsx   # Kinetic section headers with gradient highlights
│       └── ThemeToggle.tsx      # Dark / Light theme toggle
├── data/
│   ├── experience.ts            # Career history (Bright Solutions, Dearo IT, SLIATE)
│   ├── profile.ts               # Personal bio, contacts, stats, services
│   ├── projects.ts              # 28 project items with visibility, role, tech, links
│   └── skills.ts                # Categorized skill taxonomy
├── legacy/
│   └── Portfolio-main/          # Original legacy HTML/Bootstrap portfolio (preserved unmodified)
├── public/
│   ├── cv-denuwan-sandeepa.pdf  # Downloadable resume placeholder
│   ├── favicon.ico              # Website icon
│   └── images/                  # Project thumbnails, GIFs, and profile photos
├── tailwind.config.ts           # Custom color tokens, keyframes, shadows, and blur values
└── package.json
```

---

## 🔒 Project Data & Privacy Rules

All project entries adhere strictly to privacy guidelines in `data/projects.ts`:
- **Private or Confidential projects**: NEVER expose a GitHub/source button. They display a `"Private / Client Work"` or `"Confidential Enterprise"` badge.
- **Forked repositories**: Marked with `role: "Contributor"` and do not link source code.
- **Public repositories**: Only link `repoUrl` for personal public repositories (`https://github.com/denuwansandeepa/<repo-name>`).
- Excluded private repositories: `Apply_Bright_Solution` and legacy `Portfolio`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+ (tested on Node v24)
- npm, pnpm, or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🎨 How to Customize Content & Assets

All content is decoupled into TypeScript files under the `data/` directory so you can update anything without touching component logic.

### 1. Update Profile & Contact Info
Edit `data/profile.ts`:
- Change your name, bio, tagline, and titles.
- Update your email, phone, GitHub, and LinkedIn links.
- Modify the stats counters (Years of Experience, GitHub Repositories, Technologies).

### 2. Add or Edit Projects
Edit `data/projects.ts`:
- Add a new project object to the `projects` array:
  ```typescript
  {
    title: "Project Name",
    slug: "project-slug",
    category: "Web", // "Web" | "Mobile" | "Full-Stack" | "Client Work" | "Academic"
    year: "2025",
    status: "Live in Production",
    description: "Line 1 summary.\nLine 2 architecture details.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/your-screenshot.png",
    liveUrl: "https://your-site.com",
    repoUrl: "https://github.com/denuwansandeepa/your-repo", // Public repos only
    visibility: "public", // "public" | "private" | "confidential"
    role: "Owner", // "Owner" | "Contributor"
    featured: true // true for large case studies, false for archive grid
  }
  ```

### 3. Images to Replace / Add
Place real screenshots in `public/images/` to swap placeholder graphics:
- `code.gif` &rarr; Enterprise Core Banking abstract visual / Education App
- `theme.png` &rarr; DVCCL Corporate Portal screenshot ([dvccorporation.lk](https://dvccorporation.lk))
- `vscode.png` &rarr; Dearo Digital / Doctor Appointment App screenshots
- `hero.jpeg` &rarr; Your latest profile portrait photo

### 4. Swap CV / Resume PDF
1. Place your real resume PDF in `public/`.
2. Name it `cv-denuwan-sandeepa.pdf` (or update `cvUrl` in `data/profile.ts`).

---

## ☁️ Deploying to Vercel with Custom Domain

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "feat: complete Awwwards-level Next.js 3D portfolio"
git branch -M main
git remote add origin https://github.com/denuwansandeepa/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository.
4. Framework Preset will automatically detect **Next.js**. Leave default build command (`npm run build`) and output directory (`.next`).
5. Click **"Deploy"**.

### Step 3: Connect Custom Domain (`denuwansandeepa.me`)
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Enter your custom domain name (e.g. `denuwansandeepa.me` or `www.denuwansandeepa.me`) and click **Add**.
3. Configure the DNS records at your domain registrar:
   - **A Record**: `@` &rarr; `76.76.21.21`
   - **CNAME Record**: `www` &rarr; `cname.vercel-dns.com`
4. Once DNS propagates (2–15 minutes), Vercel automatically secures the domain with an SSL certificate.

---

## 📄 License
Created for **R. M. Denuwan Sandeepa**. All rights reserved.
