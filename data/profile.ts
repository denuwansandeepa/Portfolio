export interface ProfileData {
  name: string;
  displayName: string;
  tagline: string;
  titles: string[];
  bio: string;
  aboutStory: string[];
  location: {
    city: string;
    country: string;
    label: string;
  };
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  stats: {
    label: string;
    value: string;
    numeric: number;
    suffix: string;
  }[];
  services: {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: string;
  }[];
  cvUrl: string;
  avatarUrl: string;
}

export const profile: ProfileData = {
  name: "R. M. Denuwan Sandeepa",
  displayName: "Denuwan Sandeepa",
  tagline: "Full-Stack Web & Mobile Developer crafting resilient enterprise systems and immersive digital experiences.",
  titles: [
    "Full-Stack Web Developer",
    "Mobile App Engineer (Flutter)",
    "Next.js & React Specialist",
    "Creative UI/UX Designer"
  ],
  bio: "Software Engineering undergraduate and Associate Software Engineer with 1.8+ years of production experience building high-scale fintech solutions, healthcare platforms, and dynamic web applications.",
  aboutStory: [
    "I am a passionate Full-Stack Web and Mobile Developer based in Bandarawela, Sri Lanka, currently pursuing Software Engineering (HNDIT / NVQ Level 6) at SLIATE.",
    "My professional journey began at Dearo Investment Limited / Dearo IT Solutions, where I evolved from a Software Engineer Intern into a Core Project Contributor on an enterprise-grade core banking system over 15 months.",
    "Currently, I serve as an Associate Software Engineer at Bright Solutions, delivering robust, high-performance web and mobile solutions with clean architecture and delightful user interactions."
  ],
  location: {
    city: "Bandarawela",
    country: "Sri Lanka",
    label: "Bandarawela, Sri Lanka"
  },
  contact: {
    email: "sandeepadenuwan980@gmail.com",
    phone: "+94 71 255 8968",
    github: "https://github.com/denuwansandeepa",
    linkedin: "https://www.linkedin.com/in/denuwansandeepa"
  },
  stats: [
    { label: "Years Experience", value: "1.8+", numeric: 1.8, suffix: "+" },
    { label: "GitHub Repositories", value: "30+", numeric: 30, suffix: "+" },
    { label: "Core Technologies", value: "15+", numeric: 15, suffix: "+" },
    { label: "Commitment & Quality", value: "100%", numeric: 100, suffix: "%" }
  ],
  services: [
    {
      id: "web-dev",
      title: "Web Design & Frontend",
      description: "Awwwards-level interactive web interfaces built with Next.js 14, React, TypeScript, and fluid animations.",
      features: ["Next.js 14 App Router & SSR", "Responsive Design Systems", "Framer Motion & Micro-interactions", "Accessible Semantic Standards"],
      icon: "Layers"
    },
    {
      id: "fullstack-dev",
      title: "Full-Stack Development",
      description: "End-to-end web architectures powered by Node.js, PHP, MySQL, Firebase, and high-throughput REST APIs.",
      features: ["Enterprise Relational Modeling", "ACID Compliance & Security", "REST & GraphQL API Endpoints", "Performance & Query Optimization"],
      icon: "Code2"
    },
    {
      id: "mobile-dev",
      title: "Mobile Apps (Flutter)",
      description: "Cross-platform iOS and Android applications with silky-smooth 60fps animations and offline-first workflows.",
      features: ["Flutter & Dart Mastery", "Clean Architecture & State Management", "Hardware & Push Notifications", "Custom Painters & Touch Polish"],
      icon: "Smartphone"
    },
    {
      id: "launch-devops",
      title: "Launch & Maintenance",
      description: "Zero-downtime deployment pipelines, cloud hosting, security hardening, and continuous support.",
      features: ["Vercel & Cloud Provisioning", "Domain, DNS & SSL Configuration", "CI/CD & Code Quality Audits", "Long-term Maintenance"],
      icon: "Rocket"
    }
  ],
  cvUrl: "/cv-denuwan-sandeepa.pdf",
  avatarUrl: "/images/hero.jpeg"
};
