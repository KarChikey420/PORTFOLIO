import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Code2, LayoutGrid } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home", href: "#" },
  { id: "experience", icon: Briefcase, label: "Professional Experience", href: "#experience" },
  { id: "skills", icon: Code2, label: "My Skills", href: "#skills" },
  { id: "projects", icon: LayoutGrid, label: "Featured Projects", href: "#projects" },
];

const BottomNav = () => {
  const [activeId, setActiveId] = useState("home");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-auto">
      <motion.nav
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center gap-4 md:gap-6 px-6 py-3 mx-auto max-w-fit mb-4 rounded-full border border-white/[0.06] shadow-lg"
        style={{
          background: "rgba(10, 10, 14, 0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
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
                size={26}
                className={`transition-colors duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              />
              {isActive && (
                <motion.div
                  layoutId="bottomnav-pill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: "hsla(83, 77%, 55%, 0.1)" }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default BottomNav;
