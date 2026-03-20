import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

const socialItems = [
  { id: "github", icon: Github, href: "https://github.com/KarChikey420", label: "GitHub" },
  { id: "linkedin", icon: Linkedin, href: "http://www.linkedin.com/in/kartikey-negi-51116a217", label: "LinkedIn" },
  { id: "twitter", icon: Twitter, href: "https://x.com/KartikeyN86226", label: "Twitter" },
  { id: "email", icon: Mail, href: "mailto:kartikeynegi2002@gmail.com", label: "Email" },
  { id: "resume", icon: FileText, href: "https://drive.google.com/file/d/1M0qEwYzHX39ZMldokYxO346zU_SzcUh5/view?usp=sharing", label: "Resume" },
];

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-auto">
      <motion.nav
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center justify-center gap-3 md:gap-5 px-6 py-3 mx-auto max-w-fit mb-4 rounded-full border border-white/[0.06] shadow-lg"
        style={{
          background: "rgba(10, 10, 14, 0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {socialItems.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 rounded-full transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.45)" }}
              whileHover={{ y: -3, scale: 1.15, color: "hsl(83, 77%, 55%)" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Icon size={18} />
            </motion.a>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default BottomNav;
