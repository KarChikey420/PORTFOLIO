import React from "react";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const SocialSidebar = () => {
  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/arnabray", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/arnabray", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/arnabray", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "https://twitter.com/arnabray", label: "Twitter" },
  ];

  return (
    <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center justify-end h-screen z-40 pointer-events-auto pb-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        {socials.map((social, idx) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            whileHover={{ y: -4, scale: 1.1 }}
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
        {/* Vertical line */}
        <div className="w-[1px] h-24 bg-muted-foreground/30 mt-4 rounded-full" />
      </motion.div>
    </div>
  );
};

export default SocialSidebar;
