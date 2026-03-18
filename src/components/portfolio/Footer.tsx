import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-8 pb-24 md:pb-8 px-4 md:px-6 border-t border-white/10 relative z-10 mt-12 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="flex-shrink-0"
        >
          <span className="text-xl font-bold tracking-tighter text-white">Kartikey Negi<span className="text-primary">.</span></span>
        </motion.div>
        
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-muted-foreground"
        >
          &copy; {currentYear} Kartikey Negi. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;