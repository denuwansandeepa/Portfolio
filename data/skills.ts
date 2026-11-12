export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    highlight?: boolean;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Architecting responsive, SEO-friendly web applications with modern component frameworks and fluid motion.",
    icon: "Layout",
    skills: [
      { name: "React & Next.js", level: 92, experience: "1.5+ yrs", highlight: true, description: "App Router, SSR, SSG, Hooks, Dynamic Routing, SEO Optimization" },
      { name: "TypeScript & JavaScript", level: 90, experience: "1.5+ yrs", highlight: true, description: "Strict typing, ES6+, Asynchronous workflows, Interface design" },
      { name: "Vue.js", level: 86, experience: "1.2+ yrs", highlight: true, description: "Enterprise Core Banking frontend modules, reactive state & form workflows" },
      { name: "Tailwind CSS & Bootstrap", level: 95, experience: "1.5+ yrs", highlight: true, description: "Custom design systems, responsive multi-page layouts, utility styling" },
      { name: "Framer Motion", level: 86, experience: "1.2+ yrs", highlight: false, description: "Layout animations, smooth transitions, interactive UI polish" }
    ]
  },
  {
    title: "Backend, APIs & Databases",
    description: "Designing robust backend services, relational data models, and enterprise core banking API pipelines.",
    icon: "Server",
    skills: [
      { name: "PHP & Laravel", level: 90, experience: "1.5+ yrs", highlight: true, description: "Enterprise Core Banking backend services, MVC architecture, Eloquent ORM" },
      { name: "CodeIgniter & Node.js", level: 85, experience: "1.5+ yrs", highlight: true, description: "RESTful API microservices, Express, CRUD systems, session auth" },
      { name: "MySQL & phpMyAdmin", level: 89, experience: "1.5+ yrs", highlight: true, description: "Relational schema design, complex queries, indexing & data management" },
      { name: "Firebase", level: 84, experience: "1.5+ yrs", highlight: false, description: "Firestore, Realtime Database, User Authentication & Cloud Storage" },
      { name: "REST API Integration", level: 92, experience: "1.5+ yrs", highlight: true, description: "Frontend-to-backend communication, token auth, JSON payload validation" }
    ]
  },
  {
    title: "Mobile App Development",
    description: "Crafting cross-platform mobile applications for Android and iOS integrated with PHP/MySQL REST APIs.",
    icon: "Smartphone",
    skills: [
      { name: "Flutter & Dart", level: 90, experience: "1.5+ yrs", highlight: true, description: "Cross-platform mobile apps, state management, REST API & MySQL integration" },
      { name: "Android App Deployment", level: 88, experience: "1.5+ yrs", highlight: true, description: "End-to-end build signing, release testing, and Google Play Store publication" },
      { name: "Responsive Mobile UI", level: 89, experience: "1.5+ yrs", highlight: false, description: "Material 3, adaptive layouts, digital prescription & e-learning interfaces" }
    ]
  },
  {
    title: "Design, Tools & Practices",
    description: "Bridging product design, version control, software testing, and production deployment support.",
    icon: "Wrench",
    skills: [
      { name: "Figma & Canva", level: 88, experience: "2.0+ yrs", highlight: true, description: "UI/UX wireframing, interactive prototypes, visual assets" },
      { name: "Git & GitHub", level: 90, experience: "2.0+ yrs", highlight: true, description: "Version control, collaborative branching, code reviews" },
      { name: "Testing & Deployment", level: 88, experience: "1.5+ yrs", highlight: false, description: "Module testing, bug resolution, production release & Play Store support" },
      { name: "VS Code & NetBeans", level: 92, experience: "2.0+ yrs", highlight: false, description: "Debugging, extensions, workflow automation, Data Science with Python" }
    ]
  }
];

export const allSkillsList = [
  "Next.js", "React", "Vue.js", "TypeScript", "JavaScript", "Flutter", "Dart",
  "Laravel", "PHP", "CodeIgniter", "Node.js", "MySQL", "Firebase",
  "Tailwind CSS", "Framer Motion", "REST APIs", "Figma", "Git & GitHub"
];
