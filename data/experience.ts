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
    period: "Present (3 Months & Ongoing)",
    isCurrent: true,
    type: "Associate",
    summary: "Currently working as an Associate Software Engineer (3 months & ongoing), driving modern full-stack web and mobile engineering across client deliverables with Next.js 14, Flutter, and scalable API integrations.",
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
    role: "Software Engineer Intern → Software Project Contributor (Core Banking)",
    company: "Dearo Investment Limited / Dearo IT Solutions",
    location: "Sri Lanka",
    period: "1 Year & 3 Months",
    isCurrent: false,
    type: "Internship to Core Role",
    summary: "Worked for 1 year and 3 months at Dearo Investment Limited / Dearo IT Solutions. Started as a Software Engineer Intern and progressed into a Software Project Contributor on a full enterprise core banking system.",
    responsibilities: [
      "Core Banking System Contributor: Built frontend modules with Vue.js and backend services with Laravel; managed relational data using MySQL and phpMyAdmin.",
      "Implemented responsive UIs, complex form workflows, and seamless REST API communication between frontend and backend.",
      "Delivered corporate websites (DVCCL, Dearo Investment, Dearo Venture Capital, Marine Consultation, Secretary & Audit Services) using Next.js, React, TypeScript, and Tailwind CSS.",
      "Built cross-platform Flutter mobile apps (Dearo Digital, Doctor Prescription System, Dearo Education) integrated with PHP/MySQL REST APIs, including Google Play Store publication support."
    ],
    techStack: ["Vue.js", "Laravel", "Next.js", "React", "TypeScript", "Flutter", "PHP", "MySQL", "REST APIs"]
  },
  {
    id: "sliate-education",
    role: "HNDIT / NVQ Level 6 – Software Engineering Undergraduate",
    company: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    location: "Bandarawela / Badulla, Sri Lanka",
    period: "Undergraduate (Ongoing)",
    isCurrent: false,
    type: "Education",
    summary: "Pursuing Higher National Diploma in Information Technology (HNDIT / NVQ Level 6) specialized in Software Engineering, complemented by certifications in Data Science with Python and Mathematics.",
    responsibilities: [
      "Core curriculum in Software Engineering, Object-Oriented Programming, Relational Database Management Systems, and Web & Mobile Architecture.",
      "Certifications: Data Science with Python Workshop (Southern IRAA, 2023) & Short Course in Listening and Speech (Open University of Sri Lanka, 2023).",
      "Completed Certificate Course in Short Method of Mathematics (A Grade, SNIT Campus) & Computer Awareness / English (Nanasala).",
      "Secondary Education: GCE Advanced Level (Commerce Stream, 2021) & GCE Ordinary Level (2017) at B/Diyathawa M.M.V."
    ],
    techStack: ["Software Engineering", "Python", "DBMS", "Full-Stack Web", "Mobile Development", "Agile"]
  }
];
