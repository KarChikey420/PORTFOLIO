import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "Javascript","SQL", "Java", "C"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Code,
    skills: ["Pandas", "NumPy", "Streamlit", "FastAPI", "Flask", "Matplotlib", "React","Talwind", "LangChain"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Redis", "PostgreSQL (PostGIS)", "MongoDB", "MS SQL"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Apache Airflow", "Kafka", "CronTab", "Dialogflow", "Apache Superset", "Postman"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["GCP", "AWS (S3, EC2, IAM, Lambda, Redshift)"],
  },
  {
    title: "Concepts",
    icon: Brain,
    skills: ["Data Warehousing", "Data Modeling", "ETL Pipelines", "DSA", "RAG", "Generative AI", "Backend Development"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;