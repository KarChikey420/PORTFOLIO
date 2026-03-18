import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Restored the user's actual project data
const projects = [
  {
    title: "CSV Agent",
    tech_stack: ["React", "FastAPI", "LangChain", "Pandas"],
    description: "AI-powered CSV analysis tool that allows users to query and analyze CSV data using natural language processing.",
    deploy_link: "https://csv-agent-ugpl.vercel.app/",
    repo_link: "https://github.com/KarChikey420/csv_agent",
    preview_image: "/csv-agent.png", // Just drop your screenshot in the public folder!
  },
  {
    title: "Slide Flow AI",
    tech_stack: ["React", "FastAPI", "LangChain", "GenAI"],
    description: "Automated slide-generation platform converting text into professional presentations using GenAI and FastAPI backend.",
    deploy_link: "https://slide-flow-ai.vercel.app/",
    repo_link: "https://github.com/KarChikey420/SlideFlow-AI",
    preview_image: "/slideflow.png",
  },
  {
    title: "HireCraft-AI",
    tech_stack: ["React", "Google GenAI", "ChromaDB", "FastAPI"],
    description: "AI-powered resume and cover-letter generator utilizing vector-based retrieval for high-quality refinements.",
    deploy_link: "https://hire-craft-ai-i2yp.vercel.app/",
    repo_link: "https://github.com/KarChikey420/HireCraft-AI",
    preview_image: "/resume-refiner.png",
  },
  {
    title: "Save Me Daddy Astro",
    tech_stack: ["Next.js", "AI", "Vedic Astrology"],
    description: "An AI-powered Jyotish reading platform providing exact birth chart mappings and interactive interpretations.",
    deploy_link: "https://www.savemedaddyastro.app/",
    repo_link: "#",
    preview_image: "/daddy-astro.png",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 relative z-10 overflow-hidden" id="projects">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white inline-block relative">
            Featured Projects
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
          </h2>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="flex overflow-x-auto gap-8 pb-10 pt-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           <style>{`
             .scrollbar-hide::-webkit-scrollbar {
                 display: none;
             }
           `}</style>
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] lg:max-w-[600px] group glass rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(163,230,53,0.15)] flex flex-col h-[500px]"
            >
              {/* Top 60%: Image Container */}
              <div className="relative h-[60%] w-full overflow-hidden bg-black/50 shrink-0">
                <img
                  src={project.preview_image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 transform translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {project.deploy_link && project.deploy_link !== "#" && (
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
                  {project.repo_link && project.repo_link !== "#" && (
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
              
              {/* Bottom 40%: Content */}
              <div className="p-6 md:p-8 flex flex-col h-[40%] bg-[#0a0a0a]/40 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors truncate">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base line-clamp-2 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto overflow-hidden h-[34px]">
                  {project.tech_stack.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 tracking-wide whitespace-nowrap"
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