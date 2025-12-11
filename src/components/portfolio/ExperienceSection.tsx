import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Yatra Online Ltd.",
    role: "Data Engineer / Data Analyst",
    period: "Feb 2025 - Sep 2025",
    highlights: [
      "Architected and maintained scalable data systems for Hotel Ranking and Dynamic Pricing, processing 5M+ records daily to ensure real-time accuracy.",
      "Developed the CCR Dashboard and a comprehensive Travel Chatbot using FastAPI and Redis, achieving a 30% improvement in API response times.",
      "Optimized Hotel Ranking algorithms using PostGIS for precise geospatial analytics, and automated partner workflows to reduce manual reporting efforts by 40%.",
      "Technologies: Python, FastAPI, Redis, PostGIS, SQL, AWS (Lambda, S3), Data Pipelines involved in high-volume traffic processing.",
    ],
  },
  {
    company: "Prash Enterprises",
    role: "Cloud Computing Intern",
    period: "Sep 2024 - Dec 2024",
    highlights: [
      "Gained hands-on experience with core AWS services including EC2, S3, IAM, and Lambda.",
      "Configured cloud environments and automated workflows while maintaining security best practices.",
      "Developed foundational understanding of virtualization and scalable architecture design.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                  </div>
                  <p className="text-primary font-medium">{exp.role}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;