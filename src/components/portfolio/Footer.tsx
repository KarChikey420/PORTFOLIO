import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-32 px-4 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
            Let's <span className="text-primary italic">Connect.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="mailto:kartikeynegi2002@gmail.com"
            className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
          <a
            href="https://github.com/KarChikey420"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-5 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>

        <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold tracking-widest text-muted-foreground/30 uppercase">
          <p>© {new Date().getFullYear()} KARTIKEY NEGI. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">BACK TO TOP</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;