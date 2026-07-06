import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
  FileTextIcon
} from "@radix-ui/react-icons";

// Portfolio data types
export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  thumbnail: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: any; // React component type
  color?: string;
  download?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  resumeUrl: string;
  resumeFilename: string;
}

// Personal information
export const personalInfo: PersonalInfo = {
  name: "Kartikey Negi",
  title: "Software Engineer",
  email: "kartikeynegi2002@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1zVu8N786eCiHyvOb9tQUTXVzG_HB5PNo/view?usp=sharing",
  resumeFilename: "Kartikey_negi_Resume.pdf"
};

// Social links data
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/KarChikey420",
    icon: GitHubLogoIcon,
    color: "hover:text-gray-300"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kartikey-negi-51116a217",
    icon: LinkedInLogoIcon,
    color: "hover:text-blue-400"
  },
  {
    name: "Twitter",
    href: "https://x.com/KartikeyN86226",
    icon: TwitterLogoIcon,
    color: "hover:text-blue-300"
  },
  {
    name: "Email",
    href: "mailto:kartikeynegi2002@gmail.com",
    icon: EnvelopeClosedIcon,
    color: "hover:text-green-400"
  },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1zVu8N786eCiHyvOb9tQUTXVzG_HB5PNo/view?usp=sharing",
    icon: FileTextIcon,
    download: "https://drive.google.com/file/d/1zVu8N786eCiHyvOb9tQUTXVzG_HB5PNo/view?usp=sharing"
  }
];

// Portfolio data
export const skills: string[] = [
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SQL",
  "FastAPI",
  "Flask",
  "React",
  "Next.js",
  "Express.js",
  "Tailwind CSS",
  "Pandas",
  "Airflow",
  "LangChain",
  "LangGraph",
  "SQLAlchemy",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "MySQL",
  "ChromaDB",
  "PostGIS",
  "Prisma",
  "AWS",
  "Docker",
  "Git",
  "Kafka",
  "Vercel",
  "REST APIs",
  "System Design",
  "Generative AI"
];

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "MV Altios",
    duration: "May 2026 - Present",
    description: `
      Architected and delivered the Schülke Web Tool using C# and ASP.NET, streamlining client data management for 50+ internal users and cutting report generation time by 40%.||
      Engineered Python automation scripts for Microsoft Outlook, automating email triage, data extraction, and alert notifications — eliminating 10+ hours/week of repetitive manual work.||
      Designed and deployed UiPath RPA workflows automating 10+ SAP business processes, reducing manual processing time by 60% with zero critical failures across 500+ executions.
    `
  },
  {
    role: "Software Engineer",
    company: "Yatra Online Ltd.",
    duration: "Feb 2025 - Sep 2025",
    description: `
      Designed and developed back-end solutions integrating multiple components into systems processing 5M+ records/day with 99.9% uptime; performed defect fixing and QA for production systems.||
      Automated ETL pipelines using Apache Airflow and GitHub Actions CI/CD, processing 5M+ records/day and reducing manual workflow overhead by 70%.||
      Built the CCR internal dashboard with Streamlit and REST APIs to visualize competitive pricing data in real time.||
      Optimized geospatial data access with PostGIS and Flask to improve hotel search latency.||
      Collaborated cross-functionally with product, data, and business teams to define requirements; authored technical documentation and maintained change repositories using Git.
    `
  }
];

export const projects: Project[] = [

  {
    title: "Dadi Astro",
    description: "A web application for astrological insights and personalized horoscope readings.",
    tech: ["Next.js", "Typescript", "React", "Prisma", "PostgreSQL", "Gemini LLM"],
    github: " ",
    demo: "https://www.savemedaddyastro.app/",
    thumbnail: "/daddy-astro.png"
  },
  {
    title: "PrepX",
    description: "PrepX is an AI-powered interview preparation platform that helps job seekers prepare for interviews by providing personalized feedback and guidance",
    tech: ["FastAPI", "React", "Redis", "MongoDB", "Kimi-K2", "Deepgram"],
    github: "https://github.com/KarChikey420/PrepX.git",
    demo: "https://prep-x-omega.vercel.app/",
    thumbnail: "/PrepX.png"

  },
  {
    title: "CSV Agent",
    description: "CSV Agent is an AI-powered data analysis tool that enables users to query and analyze CSV files using natural language, automatically generating insights without manual coding",
    tech: ["FastAPI", "React", "LangGraph", "PostgreSQL", "Tailwind"],
    github: "https://github.com/KarChikey420/csv_agent.git",
    demo: "https://csv-agent-five.vercel.app/",
    thumbnail: "/eda_agent.png"
  },
  {
    title: "HireCraft AI",
    description: "HireCraft AI is an AI-driven resume and career preparation platform that generates ATS-optimized resume bullet points, tailored cover letters, and interview preparation materials for job seekers",
    tech: ["Python", "FastAPI", "LangChain", "PostgreSQL", "React"],
    github: "https://github.com/KarChikey420/HireCraft-AI.git",
    demo: "https://hire-craft-ai-i2yp.vercel.app/",
    thumbnail: "/resume-refiner.png"
  }
  ,
  {
    title: "SlideFlow",
    description: "SlideFlow AI is an AI-powered presentation generator that transforms user input into visually appealing slides automatically, reducing manual design effort and speeding up content creation.",
    tech: ["Python", "FastAPI", "LangChain", "PostgreSQL", "React", "TypeScript"],
    github: "https://github.com/KarChikey420/SlideFlow-AI.git",
    demo: "https://slide-flow-ai.vercel.app/",
    thumbnail: "/slideflow.png"
  }

];

// Default export for convenience
const data = {
  personalInfo,
  socialLinks,
  skills,
  experience,
  projects
};

export default data;
