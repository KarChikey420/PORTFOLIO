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
    <section className="py-32 px-4 md:px-12 relative overflow-hidden" id="projects">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Featured <span className="text-muted-foreground/40 italic">Projects</span>
          </h2>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="flex overflow-x-auto gap-12 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:-mx-12 md:px-12" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           <style>{`
             .scrollbar-hide::-webkit-scrollbar {
                 display: none;
             }
           `}</style>
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] lg:max-w-[650px] group relative rounded-[2rem] overflow-hidden border border-white/5 bg-white/5 hover:border-primary/20 transition-all duration-700 shadow-2xl hover:shadow-primary/5 h-[550px] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-[65%] w-full overflow-hidden shrink-0">
                <img
                  src={project.preview_image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                
                {/* Overlay Links */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 transform translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 italic font-mono text-xs">
                  {project.deploy_link && project.deploy_link !== "#" && (
                    <a
                      href={project.deploy_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-primary transition-colors"
                    >
                      LIVE <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.repo_link && project.repo_link !== "#" && (
                    <a
                      href={project.repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white font-bold flex items-center gap-2 hover:border-primary transition-colors"
                    >
                      CODE <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col h-[35%] bg-black/40 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-500 truncate">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm md:text-[15px] line-clamp-2 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2 overflow-hidden h-[34px]">
                  {project.tech_stack.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-[11px] font-bold text-muted-foreground/80 tracking-widest uppercase hover:text-white transition-colors"
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