export type ProjectCategory = "Web" | "Mobile" | "Full-Stack" | "Client Work" | "Academic";
export type ProjectVisibility = "public" | "private" | "confidential";
export type ProjectRole = "Owner" | "Contributor";

export interface ProjectItem {
  title: string;
  slug: string;
  category: ProjectCategory;
  year: string;
  status: string;
  description: string; // 2 lines
  tech: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  visibility: ProjectVisibility;
  role: ProjectRole;
  featured: boolean;
  highlights?: string[];
}

export const projects: ProjectItem[] = [
  // ==========================================
  // FEATURED CASE STUDIES (8 Large Cards)
  // ==========================================
  {
    title: "Core Banking System",
    slug: "core-banking-system",
    category: "Client Work",
    year: "2023 - 2024",
    status: "Production Enterprise",
    description: "Enterprise fintech core banking platform handling high-volume transaction processing and accounting.\nArchitected resilient ledger workflows, security audits, and backend modules under enterprise confidentiality.",
    tech: ["PHP", "MySQL", "Fintech", "Core Banking", "REST APIs", "Security"],
    image: "/images/code.gif",
    visibility: "confidential",
    role: "Contributor",
    featured: true,
    highlights: [
      "Contributed to core financial ledger modules and transaction validation integrity",
      "Conformed to strict banking compliance and encrypted data security standards",
      "Optimized relational MySQL queries for high-throughput enterprise operations",
      "Collaborated as a key project contributor over 15 months at Dearo IT Solutions"
    ]
  },
  {
    title: "DVCCL Corporate Portal",
    slug: "dvccl-corporation",
    category: "Client Work",
    year: "2024",
    status: "Live in Production",
    description: "High-impact corporate web portal engineered for a premier Sri Lankan venture capital firm.\nDelivers fluid staggered animations, executive presentation grid, and investor relations showcase.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/theme.png",
    liveUrl: "https://dvccorporation.lk",
    visibility: "private",
    role: "Owner",
    featured: true,
    highlights: [
      "Custom responsive 12-column grid designed for C-suite executive viewing",
      "Staggered entrance animations and smooth scroll choreography with Framer Motion",
      "Optimized SEO performance achieving high Core Web Vitals on Vercel edge",
      "Dynamic venture capital portfolio showcase with localized content"
    ]
  },
  {
    title: "Dearo Digital Ecosystem",
    slug: "dearo-digital",
    category: "Mobile",
    year: "2024",
    status: "Enterprise Mobile App",
    description: "Cross-platform mobile solution integrated with a custom PHP backend service.\nFeatures secure authentication, push updates, dynamic data caching, and 60fps Flutter UI.",
    tech: ["Flutter", "Dart", "PHP", "MySQL", "REST APIs"],
    image: "/images/vscode.png",
    visibility: "private",
    role: "Owner",
    featured: true,
    highlights: [
      "Engineered cross-platform mobile client in Flutter with smooth state management",
      "Integrated secure authentication tokens with custom PHP backend microservices",
      "Implemented local offline data caching for reliable on-the-go performance",
      "Optimized touch latency and native Cupertino/Material UI components"
    ]
  },
  {
    title: "Doctor Appointment & Admin (HC Home)",
    slug: "doctor-appointment-prescriptions",
    category: "Full-Stack",
    year: "2024",
    status: "Completed System",
    description: "Comprehensive healthcare platform uniting a patient Flutter app and medical admin panel.\nIncludes automated prescription generation, practitioner scheduling, and real-time patient queues.",
    tech: ["Flutter", "Dart", "React", "Node.js", "REST APIs", "Healthcare"],
    image: "/images/vscode.png",
    visibility: "private",
    role: "Owner",
    featured: true,
    highlights: [
      "Real-time appointment slot booking with instant confirmation workflows",
      "Interactive digital prescription generator with dosage validation",
      "Dedicated admin panel for clinical staff to manage doctor queues and records",
      "Secure client-side storage for confidential patient health data"
    ]
  },
  {
    title: "WeCare Mental Wellness",
    slug: "wecare-wellness",
    category: "Mobile",
    year: "2024",
    status: "Product Ecosystem",
    description: "Empathetic mental wellness app paired with a sleek Next.js 14 marketing landing portal.\nProvides guided mindfulness routines, mood tracking analytics, and encrypted journaling.",
    tech: ["Flutter", "Next.js 14", "TypeScript", "Tailwind CSS", "PHP", "MySQL"],
    image: "/images/code.gif",
    visibility: "private",
    role: "Owner",
    featured: true,
    highlights: [
      "Daily visual sentiment tracking and mood analytics dashboard",
      "Fluid Next.js 14 marketing site with smooth scroll storytelling",
      "Local encrypted journal storage protecting personal user reflections",
      "Responsive Flutter mobile client with tactile sound & haptic feedback"
    ]
  },
  {
    title: "Education App + Backend",
    slug: "education-app",
    category: "Full-Stack",
    year: "2024",
    status: "Open Source (MIT)",
    description: "Complete learning platform featuring a Dart/Flutter mobile frontend and modular PHP backend.\nEnables course syllabus delivery, student quiz assessments, and instructor management.",
    tech: ["Flutter", "Dart", "PHP", "MySQL", "REST APIs", "MIT License"],
    image: "/images/code.gif",
    repoUrl: "https://github.com/denuwansandeepa/Education-app",
    visibility: "public",
    role: "Owner",
    featured: true,
    highlights: [
      "Decoupled Flutter client and structured PHP/MySQL API architecture",
      "Assessment engine with timed quiz modules and grade computations",
      "Released as an open-source educational foundation under MIT License",
      "Full API documentation and database schema provided"
    ]
  },
  {
    title: "Mini Service Request Platform",
    slug: "mini-service-request",
    category: "Full-Stack",
    year: "2023",
    status: "Open Source",
    description: "Full-stack asynchronous service management platform built with modern JavaScript.\nCoordinates client service requests, status state machines, and dispatch assignment.",
    tech: ["JavaScript", "Node.js", "Express", "REST APIs", "Full-Stack"],
    image: "/images/theme.png",
    repoUrl: "https://github.com/denuwansandeepa/MiniServiceRequestFrontEnd",
    visibility: "public",
    role: "Owner",
    featured: true,
    highlights: [
      "End-to-end full-stack JavaScript architecture with decoupled services",
      "State-machine ticket tracking for requests from submission to resolution",
      "Asynchronous REST communications with optimistic UI state changes",
      "Separate repository structure for client and backend service modules"
    ]
  },
  {
    title: "Dearo Islamic Ltd Portal",
    slug: "dearo-islamic-ltd",
    category: "Client Work",
    year: "2023",
    status: "Client Deliverable",
    description: "Trust-centered web platform built for a Shariah-compliant financial investment firm.\nFeatures ethical portfolio calculators, transparent audit disclosures, and responsive styling.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Corporate Web"],
    image: "/images/vscode.png",
    visibility: "private",
    role: "Owner",
    featured: true,
    highlights: [
      "Custom ethical investment calculators and financial transparency reports",
      "Strict accessible contrast compliance and localized branding",
      "Static Site Generation on Next.js for rapid sub-second page loads",
      "Streamlined institutional inquiry workflows for prospective investors"
    ]
  },

  // ==========================================
  // MORE PROJECTS (Archive Grid)
  // ==========================================
  // Company / Client Websites (Web)
  {
    title: "Dearo Venture Canada",
    slug: "dearoventure-canada-ws",
    category: "Web",
    year: "2024",
    status: "Public Repo",
    description: "International corporate web presence for venture operations in Canada.\nEngineered with clean TypeScript components and responsive styling.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    image: "/images/theme.png",
    repoUrl: "https://github.com/denuwansandeepa/dearoventure-canada-ws",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "Dearo Venture Capital Website",
    slug: "dearoventure-capital-site",
    category: "Client Work",
    year: "2024",
    status: "Contributed",
    description: "Venture capital corporate web platform for enterprise investor showcases.\nContributed responsive frontend modules and UI enhancements.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    image: "/images/theme.png",
    visibility: "private",
    role: "Contributor",
    featured: false
  },
  {
    title: "Dearo Investment Website",
    slug: "dearo-investment-site",
    category: "Client Work",
    year: "2023",
    status: "Contributed",
    description: "Corporate investment portal delivering investor relations information.\nCollaborated on layout responsiveness and component integration.",
    tech: ["TypeScript", "React", "CSS"],
    image: "/images/vscode.png",
    visibility: "private",
    role: "Contributor",
    featured: false
  },
  {
    title: "Consultation Marine Website",
    slug: "consultation-marine",
    category: "Web",
    year: "2024",
    status: "Client Work",
    description: "Digital presence for international maritime advisory and engineering consultancy.\nFeatures service matrices, vessel inspection booking, and certification inquiries.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    image: "/images/theme.png",
    visibility: "private",
    role: "Owner",
    featured: false
  },
  {
    title: "Maleesha Portfolio Website",
    slug: "maleesha-portfolio",
    category: "Client Work",
    year: "2024",
    status: "Client Work",
    description: "Bespoke personal portfolio website crafted for a private creative professional.\nIncludes smooth micro-interactions, project galleries, and mobile responsiveness.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    image: "/images/vscode.png",
    visibility: "private",
    role: "Owner",
    featured: false
  },
  {
    title: "Art Website",
    slug: "art-website",
    category: "Web",
    year: "2024",
    status: "Public Repo",
    description: "Visual portfolio and showcase gallery for contemporary art collections.\nHighlights artwork pieces with interactive lightboxes and minimal aesthetics.",
    tech: ["TypeScript", "React", "CSS3"],
    image: "/images/theme.png",
    repoUrl: "https://github.com/denuwansandeepa/Art_website",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "FreeLancer Web Platform",
    slug: "freelancer-platform",
    category: "Web",
    year: "2024",
    status: "Public Repo",
    description: "Gig and client connection portal displaying service offerings and profiles.\nIncludes filterable categories and interactive service inquiry cards.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    image: "/images/theme.png",
    repoUrl: "https://github.com/denuwansandeepa/FreeLancer",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "CS Website",
    slug: "cs-website",
    category: "Web",
    year: "2024",
    status: "Public Repo",
    description: "Computer Science educational resource and project showcase hub.\nOrganizes technical articles, code repositories, and reference documents.",
    tech: ["TypeScript", "React", "CSS3"],
    image: "/images/code.gif",
    repoUrl: "https://github.com/denuwansandeepa/CS_website",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "Electric Item Website",
    slug: "electric-item-website",
    category: "Web",
    year: "2024",
    status: "Public Repo",
    description: "Modern electronics product showcase catalog with spec comparisons.\nFeatures category filters, dynamic product cards, and responsive grids.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    image: "/images/theme.png",
    repoUrl: "https://github.com/denuwansandeepa/Electric_Item_Website",
    visibility: "public",
    role: "Owner",
    featured: false
  },

  // Mobile (Flutter / Dart)
  {
    title: "Dearo New App",
    slug: "dearo-new-app",
    category: "Mobile",
    year: "2024",
    status: "Public Repo",
    description: "Modernized Flutter mobile utility with customized user interfaces.\nIncludes clean architecture state management and reactive layout widgets.",
    tech: ["Dart", "Flutter", "Mobile"],
    image: "/images/vscode.png",
    repoUrl: "https://github.com/denuwansandeepa/Dearo_New_App",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "Dearo Agro (Hela Agro Mobile)",
    slug: "dearo-agro-mobile",
    category: "Mobile",
    year: "2024",
    status: "Contributed",
    description: "Agricultural management mobile application for farming and logistics.\nContributed to mobile frontend workflows and data synchronization.",
    tech: ["Dart", "Flutter", "AgriTech"],
    image: "/images/vscode.png",
    visibility: "private",
    role: "Contributor",
    featured: false
  },

  // Personal / Academic
  {
    title: "Movie Website",
    slug: "movie-website",
    category: "Web",
    year: "2023",
    status: "Public Repo",
    description: "Responsive movie discovery site powered by React, Vite, and Tailwind CSS.\nIntegrates live movie ratings, trailer links, and category carousels.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    image: "/images/theme.png",
    repoUrl: "https://github.com/denuwansandeepa/Movie-Website",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "Grocery Item Order App",
    slug: "grocery-item-app",
    category: "Academic",
    year: "2023",
    status: "Academic / Public",
    description: "Full-featured shopping application integrating React with Firebase Firestore.\nSupports realtime synchronized cart updates and instant order placement.",
    tech: ["React", "Firebase", "Firestore", "Tailwind CSS"],
    image: "/images/grocery.gif",
    repoUrl: "https://github.com/denuwansandeepa/GroceryItemApp",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "To-Do List Manager",
    slug: "to-do-list",
    category: "Academic",
    year: "2023",
    status: "Academic / Public",
    description: "Task management web application built with PHP and MySQL relational schemas.\nFeatures task status cycles, priority categorization, and AJAX updates.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    image: "/images/todo.gif",
    repoUrl: "https://github.com/denuwansandeepa/To-Do-List",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "2D Arcade Platformer Game",
    slug: "2d-platformer-game",
    category: "Academic",
    year: "2023",
    status: "Academic / Public",
    description: "Interactive 2D browser engine game developed in vanilla JavaScript and Canvas.\nIncorporates gravity mechanics, collision detection, and spatial audio FX.",
    tech: ["JavaScript", "HTML5 Canvas", "Game Physics", "Audio FX"],
    image: "/images/game.gif",
    repoUrl: "https://github.com/denuwansandeepa/2D-MD-Visual-Game-Project-",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "PHP Login Form & Auth",
    slug: "php-login-form",
    category: "Academic",
    year: "2023",
    status: "Academic / Public",
    description: "Secure user authentication system implementing Bcrypt password hashing.\nIncludes server session management, input sanitization, and SQL security.",
    tech: ["PHP", "MySQL", "Security", "Auth"],
    image: "/images/code.gif",
    repoUrl: "https://github.com/denuwansandeepa/PHP-Login-Form",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "PHP Live Image Upload",
    slug: "php-image-upload-live",
    category: "Academic",
    year: "2023",
    status: "Academic / Public",
    description: "Image upload engine with MIME verification and database reference mapping.\nPrevents malicious file payloads and generates responsive thumbnails.",
    tech: ["PHP", "MySQL", "File Upload", "Security"],
    image: "/images/code.gif",
    repoUrl: "https://github.com/denuwansandeepa/PHP-Image-Upload-Live",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "PHP Arithmetic Calculator",
    slug: "php-calculator",
    category: "Academic",
    year: "2023",
    status: "Academic / Public",
    description: "Server-side arithmetic computation tool processing dynamic expressions.\nFeatures precision error handling and boundary condition checks.",
    tech: ["PHP", "HTML5", "CSS3"],
    image: "/images/code.gif",
    repoUrl: "https://github.com/denuwansandeepa/PHP-Calculator",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "SLIATE Badulla University Site",
    slug: "sliate-badulla-university-site",
    category: "Academic",
    year: "2023",
    status: "Academic / Public",
    description: "Responsive academic portal designed for university course exploration.\nContains department directories, news updates, and student campus resources.",
    tech: ["HTML5", "CSS3", "JavaScript", "Academic"],
    image: "/images/theme.png",
    repoUrl: "https://github.com/denuwansandeepa/SLIATE-Badulla-University-Website",
    visibility: "public",
    role: "Owner",
    featured: false
  },
  {
    title: "Academic Web Page Coursework",
    slug: "academic-web-page",
    category: "Academic",
    year: "2023",
    status: "Academic / Public",
    description: "Fundamental software engineering coursework demonstrating web standards.\nStructured semantic HTML, responsive CSS layouts, and DOM manipulation.",
    tech: ["HTML5", "CSS3", "JavaScript", "Coursework"],
    image: "/images/code.gif",
    repoUrl: "https://github.com/denuwansandeepa/Academic-Web-Page",
    visibility: "public",
    role: "Owner",
    featured: false
  }
];
