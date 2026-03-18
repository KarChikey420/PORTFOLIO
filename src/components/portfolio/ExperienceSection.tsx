import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Data Engineer Intern (Backend & Infrastructure Focus)",
    company: "Yatra Online Ltd.",
    location: "Gurugram, India",
    period: "Feb 2025 – Sep 2025",
    highlights: [
      "Engineered scalable backend services for Dynamic Pricing and Hotel Ranking, directly impacting user search results.",
      "Developed the Yatra Travel Chatbot using FastAPI, Redis, and Dialogflow, reducing support ticket volume by 30%.",
      "Built the CCR internal dashboard using Streamlit and REST APIs to visualize competitive pricing data in real-time.",
      "Optimized database interactions by implementing geospatial queries with PostGIS and Flask, improving search latency.",
      "Designed robust ETL pipelines using Python, Airflow, and SQL to process 5M+ daily records with 99.9% system uptime.",
      "Automated business reporting workflows using Cron jobs and SMTP, saving 15+ hours of manual work weekly.",
      "Collaborated with the software team to integrate data insights into the core application using Apache Superset.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 relative z-10" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white inline-block relative">
            Professional Experience
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
          </h2>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-start gap-8 group is-active"
            >
              {/* Timeline Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card group-hover:bg-primary shadow-sm shrink-0 transition-colors duration-300 z-10 mt-1">
                 <Briefcase className="w-4 h-4 text-primary group-hover:text-black transition-colors" />
              </div>

              {/* Card content */}
              <div className="flex-1 p-6 md:p-8 rounded-2xl glass border border-white/5 group-hover:border-primary/30 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(163,230,53,0.1)]">
                <div className="flex flex-col gap-2 mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground font-medium">
                    <span className="flex items-center gap-1.5 text-white/90">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 text-muted-foreground leading-relaxed text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;