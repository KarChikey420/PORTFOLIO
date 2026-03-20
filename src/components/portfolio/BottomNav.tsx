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
    <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 mx-auto w-full max-w-7xl px-4 pointer-events-auto">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass rounded-full px-4 py-3 md:px-6 md:py-4 flex flex-row items-center justify-center gap-4 md:gap-6 border border-white/10 shadow-lg"
      >
        {socialItems.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={social.label}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default BottomNav;
