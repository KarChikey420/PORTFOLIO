import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Code2, LayoutGrid } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home", href: "#" },
  { id: "experience", icon: Briefcase, label: "Professional Summary", href: "#experience" },
  { id: "skills", icon: Code2, label: "Skills", href: "#skills" },
  { id: "projects", icon: LayoutGrid, label: "Projects", href: "#projects" },
];

const Navigation = () => {
  const [activeId, setActiveId] = useState("home");

  // Optional: Add scroll spy logic here to update activeId based on scroll position

  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-max">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass rounded-full px-4 py-3 md:px-6 md:py-4 flex flex-row items-center gap-4 md:gap-6 border border-white/10 shadow-lg"
      >
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
      </motion.nav>
    </div>
  );
};

export default Navigation;