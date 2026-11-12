export interface LiveDeployment {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  url: string;
  type: "web" | "playstore";
  category: string;
  tech: string[];
  accentColor: string;
  badgeText: string;
}

export const liveDeployments: LiveDeployment[] = [
  {
    id: "dvccl",
    title: "DVCCL — Development Venture Capital Corporation",
    subtitle:
      "Official corporate web platform for a Sri Lankan venture capital & investment institution with interactive financial storytelling.",
    domain: "www.dvccorporation.lk",
    url: "https://www.dvccorporation.lk/",
    type: "web",
    category: "Corporate Fintech Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accentColor: "from-violet-500/20 via-purple-500/10 to-cyan-500/20",
    badgeText: "Live Domain",
  },
  {
    id: "dearo-investment",
    title: "Dearo Investment Limited",
    subtitle:
      "Flagship corporate financial services & investment portal showcasing financial products, branch networks, and investor relations.",
    domain: "dearoinvestment.com",
    url: "https://dearoinvestment.com/",
    type: "web",
    category: "Enterprise Investment Portal",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    accentColor: "from-cyan-500/20 via-sky-500/10 to-blue-500/20",
    badgeText: "Live Domain",
  },
  {
    id: "dearo-venture-capital",
    title: "Dearo Venture Capital",
    subtitle:
      "Modern venture capital digital presence engineered for investment portfolio presentation, capital growth services, and corporate trust.",
    domain: "dearoventurecapital.com",
    url: "https://dearoventurecapital.com/",
    type: "web",
    category: "Venture Capital Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Modern UI"],
    accentColor: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    badgeText: "Live Domain",
  },
  {
    id: "constellation-marine",
    title: "Constellation Marine — Independent Marine Expertise",
    subtitle:
      "International marine consultancy, vessel inspection & maritime survey portal built for global maritime clients and ship owners.",
    domain: "constmarine.com",
    url: "https://constmarine.com/",
    type: "web",
    category: "Global Maritime Portal",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Optimized"],
    accentColor: "from-blue-500/20 via-indigo-500/10 to-cyan-500/20",
    badgeText: "Live Domain",
  },
  {
    id: "dearo-digital-playstore",
    title: "Dearo Digital — Official Mobile Application",
    subtitle:
      "Production cross-platform financial & customer service mobile app published on Google Play Store, powered by Flutter and a secure PHP REST backend.",
    domain: "play.google.com • com.dearodigital.dearo_frontend",
    url: "https://play.google.com/store/apps/details?id=com.dearodigital.dearo_frontend",
    type: "playstore",
    category: "Google Play Store Release",
    tech: ["Flutter", "Dart", "PHP Backend", "REST APIs", "Android Production"],
    accentColor: "from-emerald-500/25 via-cyan-500/15 to-violet-500/20",
    badgeText: "Google Play Store",
  },
];

