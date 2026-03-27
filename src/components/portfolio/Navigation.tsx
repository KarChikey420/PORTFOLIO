import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

const socialItems = [
  { id: "github", icon: Github, href: "https://github.com/KarChikey420", label: "GitHub" },
  { id: "linkedin", icon: Linkedin, href: "http://www.linkedin.com/in/kartikey-negi-51116a217", label: "LinkedIn" },
  { id: "twitter", icon: Twitter, href: "https://x.com/KartikeyN86226", label: "Twitter" },
  { id: "email", icon: Mail, href: "mailto:kartikeynegi2002@gmail.com", label: "Email" },
  { id: "resume", icon: FileText, href: "https://drive.google.com/file/d/1M0qEwYzHX39ZMldokYxO346zU_SzcUh5/view?usp=sharing", label: "Resume" },
];

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-6 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1400px] mx-auto flex items-center justify-between pointer-events-auto"
      >
        {/* Left Side: Name & Role */}
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight">
            Kartikey Negi
          </span>
          <span className="text-xs md:text-sm font-medium text-muted-foreground/80 tracking-wide uppercase">
            Software Engineer
          </span>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-2 md:gap-4 p-1 rounded-full border border-white/5 glass bg-black/20">
          {socialItems.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 md:p-2.5 rounded-full text-muted-foreground hover:text-white transition-all duration-300 hover:bg-white/5"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} className="md:w-5 md:h-5" />
              </motion.a>
            );
          })}
        </div>
      </motion.nav>
    </header>
  );
};

export default Navigation;