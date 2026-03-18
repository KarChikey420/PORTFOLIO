import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white inline-block relative">
            My Skills
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full"></span>
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-10">
          <div className="flex w-[200%] animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[...skills, ...skills].map((skill, idx) => (
              <div 
                key={`${skill.name}-${idx}`} 
                className="flex-1 min-w-[150px] px-4"
              >
                <motion.div 
                  className="glass flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 transition-all duration-300 hover:border-primary/50 group"
                  style={{ boxShadow: "0 0 0 rgba(163,230,53, 0)" }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(163,230,53, 0.2)",
                  }}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-16 h-16 mb-4 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                  />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
          
          {/* Gradients to fade edges */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;