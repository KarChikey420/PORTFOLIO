import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home", href: "#" },
  { id: "experience", label: "Professional Experience", href: "#experience" },
  { id: "skills", label: "My Skills", href: "#skills" },
  { id: "projects", label: "Featured Projects", href: "#projects" },
];

const Navigation = () => {
  const [activeId, setActiveId] = useState("home");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-center gap-1 md:gap-2 px-4 py-3 mx-auto max-w-fit mt-4 rounded-full border border-white/[0.06] shadow-lg"
        style={{
          background: "rgba(10, 10, 14, 0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveId(item.id)}
              className="relative px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium tracking-wide transition-colors duration-200 rounded-full whitespace-nowrap"
              style={{
                color: isActive
                  ? "hsl(83, 77%, 55%)"
                  : "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.85)";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.5)";
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="topnav-pill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: "hsla(83, 77%, 55%, 0.1)" }}
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Navigation;