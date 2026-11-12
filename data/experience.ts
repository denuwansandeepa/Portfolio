export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: "Full-Time" | "Associate" | "Internship to Core Role" | "Education";
  summary: string;
  responsibilities: string[];
  techStack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "bright-solutions",
    role: "Associate Software Engineer",
    company: "Bright Solutions",
    location: "Sri Lanka",
    period: "2024 - Present (Ongoing 6-Month Associate Position)",
    isCurrent: true,
    type: "Associate",
    summary: "Driving modern full-stack web and mobile engineering across client deliverables, focusing on Next.js 14, Flutter, and scalable API integrations.",
    responsibilities: [
      "Architect and build client-facing web portals utilizing Next.js App Router, TypeScript, and Tailwind CSS.",
      "Develop responsive mobile applications in Flutter with robust state management and native feature hooks.",
      "Collaborate with senior technical leads and designers to translate product roadmaps into production-ready software.",
      "Enhance performance benchmarks and Core Web Vitals across critical client applications."
    ],
    techStack: ["Next.js 14", "TypeScript", "React", "Flutter", "Tailwind CSS", "Node.js", "REST APIs"]
  },
  {
    id: "dearo-it-solutions",
    role: "Software Engineer / Project Contributor (15 Months)",
    company: "Dearo Investment Limited / Dearo IT Solutions",
    location: "Sri Lanka",
    period: "2023 - 2024 (15 Months)",
    isCurrent: false,
    type: "Internship to Core Role",
    summary: "Commenced as a Software Engineer Intern and accelerated into a key Software Project Contributor on Dearo's mission-critical enterprise core banking system.",
    responsibilities: [
      "Promoted from Software Engineer Intern to Core Project Contributor on the enterprise banking solution.",
      "Contributed to core financial ledger modules, transaction validation logic, and secure database migrations.",
      "Engineered automated workflows and reports for financial compliance, safeguarding confidential business data.",
      "Integrated backend PHP and MySQL services with high-availability transaction guarantees."
    ],
    techStack: ["Core Banking Architecture", "PHP", "MySQL", "JavaScript", "REST APIs", "Fintech Security"]
  },
  {
    id: "sliate-education",
    role: "Software Engineering Undergraduate (HNDIT / NVQ Level 6)",
    company: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    location: "Sri Lanka",
    period: "Undergraduate (Ongoing)",
    isCurrent: false,
    type: "Education",
    summary: "Pursuing rigorous Higher National Diploma in Information Technology (HNDIT), NVQ Level 6 qualification specialized in Software Engineering.",
    responsibilities: [
      "Mastering core software engineering principles: Object-Oriented Analysis & Design, Data Structures & Algorithms.",
      "Executing comprehensive academic projects covering full-stack web systems, databases, and network architectures.",
      "Maintained top academic standing with emphasis on clean code, software testing methodologies, and collaborative engineering."
    ],
    techStack: ["Data Structures", "Algorithms", "Software Engineering", "DBMS", "Java", "Web Technologies"]
  }
];

