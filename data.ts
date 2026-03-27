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
  resumeUrl: "https://drive.google.com/file/d/1M0qEwYzHX39ZMldokYxO346zU_SzcUh5/view?usp=sharing",
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
    href: "mailto:hrithikkumar79@outlook.com",
    icon: EnvelopeClosedIcon,
    color: "hover:text-green-400"
  },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1M0qEwYzHX39ZMldokYxO346zU_SzcUh5/view?usp=sharing",
    icon: FileTextIcon,
    download: "https://drive.google.com/file/d/1M0qEwYzHX39ZMldokYxO346zU_SzcUh5/view?usp=sharing"
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
    role: "Data Engineer Intern",
    company: "Yatra Online Ltd.",
    duration: "feb 2025 - sep 2025",
    description: `
      Engineered scalable backend services for Dynamic Pricing and Hotel Ranking, directly influencing user search results.||
      Developed the Yatra Travel Chatbot using FastAPI, Redis, and Dialogflow, reducing support ticket volume by 30%.||
      Built the CCR internal dashboard with Streamlit and REST APIs to visualize competitive pricing data in real time.||
      Optimized geospatial data access with PostGIS and Flask to improve hotel search latency.||
      Designed ETL pipelines using Python, Airflow, and SQL to process 5M+ daily records with 99.9% uptime.||
      Automated reporting workflows with cron jobs and SMTP, saving more than 15 hours of manual work each week.
    `
  }
];

export const projects: Project[] = [

    {
    title: "Dadi Astro",
    description: "A web application for astrological insights and personalized horoscope readings.",
    tech: ["Next.js","Typescript", "React", "Prisma","PostgreSQL","Gemini LLM" ],
    github: " ",
    demo: "https://www.savemedaddyastro.app/",
    thumbnail: "/daddy-astro.png"
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
  tech: ["Python", "FastAPI", "LangChain","PostgreSQL", "React", "TypeScript"],
  github: "https://github.com/KarChikey420/SlideFlow-AI.git",
  demo: "https://slide-flow-ai.vercel.app/",
  thumbnail: "/slideflow.png"
  },
  {
    title: "CSV Agent",
    description: "CSV Agent is an AI-powered data analysis tool that enables users to query and analyze CSV files using natural language, automatically generating insights without manual coding",
    tech: ["FastAPI", "React","LangGraph","PostgreSQL","Tailwind"],
    github: "https://github.com/KarChikey420/csv_agent.git",
    demo: "https://csv-agent-five.vercel.app/",
    thumbnail: "/csv-agent.png"
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
