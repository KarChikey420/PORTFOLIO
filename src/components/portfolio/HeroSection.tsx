import { motion } from "framer-motion";
import { MapPin, Sparkles, Github, Linkedin, Twitter, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Kartikey Negi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
        >
          Data Engineer • Data Analyst • Backend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8"
        >
          Building scalable ETL pipelines, AI-driven backends, and actionable analytics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-3 text-muted-foreground mb-10"
        >
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:kartikeynegi2002@gmail.com" className="hover:text-primary transition-colors">
              kartikeynegi2002@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/kartikey-negi-51116a217/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/KarChikey420"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/KartikeyN86226"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://drive.google.com/file/d/1SGhy8NyMDmYSQyNa6SZpr7VVi68WI0CN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;