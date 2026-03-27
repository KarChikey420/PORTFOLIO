import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Data Engineer Intern (Backend & Infrastructure Focus)",
    company: "Yatra Online Ltd.",
    location: "Gurugram, India",
    period: "Feb 2025 – Sep 2025",
    highlights: [
      "Engineered scalable backend services for Dynamic Pricing and Hotel Ranking.",
      "Developed the Yatra Travel Chatbot using FastAPI, Redis, and Dialogflow.",
      "Built the CCR internal dashboard using Streamlit and REST APIs.",
      "Optimized database interactions with PostGIS and Flask.",
      "Designed robust ETL pipelines using Python, Airflow, and SQL.",
      "Automated business reporting workflows using Cron jobs and SMTP.",
      "Collaborated on integrating data insights into the core application."
    ],
  },
];

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
  },
  {
    name: "Frameworks & Tools",
    skills: ["FastAPI", "React", "Next.js", "Airflow", "Docker", "AWS", "Kafka"]
  },
  {
    name: "AI & Data",
    skills: ["LangChain", "GenAI", "Pandas", "PostgreSQL", "Redis", "ChromaDB"]
  }
];

export const ExperienceSkillsLayout = () => {
  return (
    <section id="experience" className="py-32 px-4 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
        
        {/* Left Column: Skills (1/3) */}
        <div className="lg:col-span-1 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Technical Stack</h2>
            <div className="space-y-8">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-muted-foreground hover:text-white hover:border-primary/30 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Experience (2/3) */}
        <div className="lg:col-span-2 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Professional Journey</h2>
            <div className="space-y-12 relative before:absolute before:inset-0 before:left-[19px] before:w-[1px] before:bg-white/10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full border border-white/10 bg-black flex items-center justify-center z-10 group-hover:border-primary/50 transition-colors duration-500">
                    <Briefcase className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5 font-bold text-white/80">
                         {exp.company}
                      </span>
                    </div>

                    <ul className="space-y-3 pt-4">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-primary/40 shrink-0 mt-0.5" />
                          <span className="text-[15px]">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSkillsLayout;
