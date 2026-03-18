import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-8 px-6 border-t border-white/10 relative z-10 mt-12 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-xl font-bold tracking-tighter text-white">Arnab Ray<span className="text-primary">.</span></span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-muted-foreground"
        >
          &copy; {currentYear} Arnab Ray. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;