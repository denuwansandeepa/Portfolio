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
    description: "Architecting responsive, high-performance web applications with modern component frameworks and fluid motion.",
    icon: "Layout",
    skills: [
      { name: "React", level: 92, experience: "1.8+ yrs", highlight: true, description: "Hooks, Context, Concurrent Mode, Virtual DOM performance" },
      { name: "Next.js", level: 90, experience: "1.5+ yrs", highlight: true, description: "App Router, SSR, SSG, Server Actions, Route Handlers" },
      { name: "TypeScript", level: 88, experience: "1.5+ yrs", highlight: true, description: "Strict typing, Generics, Discriminated Unions, Interface design" },
      { name: "Tailwind CSS", level: 95, experience: "1.8+ yrs", highlight: true, description: "Custom design systems, arbitrary variants, fluid layouts" },
      { name: "Framer Motion", level: 86, experience: "1.2+ yrs", highlight: false, description: "Layout animations, gesture tracking, physics springs" }
    ]
  },
  {
    title: "Backend & Systems",
    description: "Designing robust API services, relational data models, and enterprise transaction processing pipelines.",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 85, experience: "1.5+ yrs", highlight: true, description: "Express, Async flows, REST microservices, Middleware" },
      { name: "PHP", level: 88, experience: "1.8+ yrs", highlight: true, description: "OOP, MVC patterns, Secure core banking platform development" },
      { name: "MySQL", level: 87, experience: "1.8+ yrs", highlight: true, description: "Complex joins, indexing, query optimization, ACID transactions" },
      { name: "Firebase", level: 84, experience: "1.5+ yrs", highlight: false, description: "Firestore, Auth, Cloud Storage, Realtime Database" },
      { name: "Python", level: 80, experience: "1.0+ yr", highlight: false, description: "Data automation scripts, algorithmic logic, backend tasks" },
      { name: "REST APIs", level: 92, experience: "1.8+ yrs", highlight: true, description: "Contract design, OpenAPI, rate-limiting, secure headers" }
    ]
  },
  {
    title: "Mobile App Development",
    description: "Crafting fluid cross-platform mobile apps for iOS and Android with delightful tactile interactions.",
    icon: "Smartphone",
    skills: [
      { name: "Flutter", level: 90, experience: "1.5+ yrs", highlight: true, description: "Custom painters, complex animations, provider/bloc state management" },
      { name: "Dart", level: 88, experience: "1.5+ yrs", highlight: false, description: "Asynchronous streams, isolates, null safety, OOP architecture" },
      { name: "Mobile UI/UX", level: 89, experience: "1.5+ yrs", highlight: false, description: "Material 3, Cupertino adaptivity, haptic feedback, gestures" }
    ]
  },
  {
    title: "Design & Developer Tooling",
    description: "Bridging the gap between conceptual product design, git collaboration, and automated deployment.",
    icon: "Wrench",
    skills: [
      { name: "Figma", level: 88, experience: "2.0+ yrs", highlight: true, description: "Auto-layout, responsive design systems, interactive prototypes" },
      { name: "Git & GitHub", level: 90, experience: "2.0+ yrs", highlight: true, description: "Gitflow, pull requests, semantic commit conventions" },
      { name: "Three.js / WebGL", level: 78, experience: "1.0+ yr", highlight: false, description: "3D scene geometry, shaders, lighting, camera controls" },
      { name: "Postman & Insomnia", level: 90, experience: "1.8+ yrs", highlight: false, description: "API documentation, contract test suites, mocking" }
    ]
  }
];

export const allSkillsList = [
  "React", "Next.js", "TypeScript", "Node.js", "Firebase", "PHP", 
  "MySQL", "Python", "Flutter", "Tailwind CSS", "Framer Motion", "Figma", "REST APIs", "Three.js", "Git"
];

