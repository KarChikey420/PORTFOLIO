import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CSV Agent",
    tech_stack: ["React", "FastAPI", "LangChain", "Pandas"],
    description: "AI-powered CSV analysis tool that allows users to query and analyze CSV data using natural language processing.",
    deploy_link: "https://csv-agent-ugpl.vercel.app/",
    repo_link: "https://github.com/KarChikey/csv_agent",
    preview_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Slide Flow AI",
    tech_stack: ["React", "FastAPI", "LangChain", "GenAI"],
    description: "Automated slide-generation platform converting text into professional presentations using GenAI and FastAPI backend.",
    deploy_link: "https://slide-flow-ai.vercel.app/",
    repo_link: "https://github.com/KarChikey/SlideFlow-AI",
    preview_image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "HireCraft-AI",
    tech_stack: ["React", "GenAI", "ChromaDB", "FastAPI"],
    description: "AI-powered resume and cover-letter generator utilizing vector-based retrieval for high-quality refinements.",
    deploy_link: "https://hire-craft-ai-i2yp.vercel.app/",
    repo_link: "https://github.com/KarChikey/HireCraft-AI",
    preview_image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Weather Analyser",
    tech_stack: ["Python", "AWS S3", "Redshift", "Streamlit"],
    description: "Scalable ETL pipeline ingesting real-time weather data into Amazon Redshift for dashboards.",
    deploy_link: "",
    repo_link: "https://github.com/KarChikey/weather_analyser",
    preview_image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1965&auto=format&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 relative z-10" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] flex flex-col h-full"
            >
              {/* Top Half: Image */}
              <div className="relative h-64 overflow-hidden bg-black/50">
                <img
                  src={project.preview_image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 transform translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {project.deploy_link && (
                    <a
                      href={project.deploy_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-primary hover:text-black transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.repo_link && (
                    <a
                      href={project.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-primary hover:text-black transition-colors"
                      aria-label="Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Bottom Half: Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech_stack.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;