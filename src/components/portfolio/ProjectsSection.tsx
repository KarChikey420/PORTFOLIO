import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "CSV Agent",
    status: "Deployed",
    tech_stack: ["React", "FastAPI", "LangChain", "Pandas"],
    description:
      "AI-powered CSV analysis tool that allows users to query and analyze CSV data using natural language processing.",
    deploy_link: "https://csv-agent-ugpl.vercel.app/",
    repo_link: "https://github.com/KarChikey420/csv_agent.git",
  },
  {
    title: "Slide Flow AI",
    status: "Deployed",
    tech_stack: ["React", "FastAPI", "LangChain", "GenAI"],
    description:
      "Automated slide-generation platform converting text into professional presentations using GenAI and FastAPI backend.",
    deploy_link: "https://slide-flow-ai.vercel.app/",
    repo_link: "https://github.com/KarChikey420/SlideFlow-AI",
  },
  {
    title: "HireCraft-AI",
    status: "Deployed",
    tech_stack: ["React", "Google GenAI", "ChromaDB", "FastAPI"],
    description:
      "AI-powered resume and cover-letter generator utilizing vector-based retrieval for high-quality refinements.",
    deploy_link: "https://hire-craft-ai-i2yp.vercel.app/",
    repo_link: "https://github.com/KarChikey420/HireCraft-AI",
  },
  {
    title: "Weather Analyser",
    status: "Production Ready",
    tech_stack: ["Python", "AWS S3", "Redshift", "Streamlit"],
    description:
      "Scalable ETL pipeline ingesting real-time weather data into Amazon Redshift for dashboards.",
    repo_link: "https://github.com/KarChikey420/weather_analyser",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border card-hover flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Deployed"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <CheckCircle className="w-3 h-3" />
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech_stack.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {project.deploy_link && (
                  <a
                    href={project.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.repo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;