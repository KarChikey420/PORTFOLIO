import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Code2, LayoutGrid, Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home", href: "#" },
  { id: "experience", icon: Briefcase, label: "Professional Summary", href: "#experience" },
  { id: "skills", icon: Code2, label: "Skills", href: "#skills" },
  { id: "projects", icon: LayoutGrid, label: "Projects", href: "#projects" },
];

const socialItems = [
  { id: "github", icon: Github, href: "https://github.com/KarChikey420", label: "GitHub" },
  { id: "linkedin", icon: Linkedin, href: "http://www.linkedin.com/in/kartikey-negi-51116a217", label: "LinkedIn" },
  { id: "twitter", icon: Twitter, href: "https://x.com/KartikeyN86226", label: "Twitter" },
  { id: "email", icon: Mail, href: "mailto:kartikeynegi2002@gmail.com", label: "Email" },
  { id: "resume", icon: FileText, href: "https://drive.google.com/file/d/1M0qEwYzHX39ZMldokYxO346zU_SzcUh5/view?usp=sharing", label: "Resume" },
];

const Navigation = () => {
  const [activeId, setActiveId] = useState("home");

  return (
    <div className="fixed top-4 md:top-8 left-0 right-0 z-50 mx-auto w-full max-w-7xl px-4 pointer-events-auto">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass rounded-full px-4 py-3 md:px-6 md:py-4 flex flex-row items-center justify-between gap-4 md:gap-6 border border-white/10 shadow-lg"
      >
        {/* Left side: navigation items */}
        <div className="flex items-center gap-2 md:gap-4">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveId(item.id)}
                className="relative p-2 group transition-all duration-300"
                aria-label={item.label}
              >
                <Icon
                  size={24}
                  className={`transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`}
                />
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
        {/* Right side: social icons */}
        <div className="flex items-center gap-2 md:gap-4">
          {socialItems.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navigation;