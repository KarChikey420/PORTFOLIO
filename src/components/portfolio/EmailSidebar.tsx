import React from "react";
import { motion } from "framer-motion";

const EmailSidebar = () => {
  return (
    <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center justify-end h-screen z-40 pointer-events-auto pb-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.a
          href="mailto:kartikeynegi2002@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-sm tracking-widest [writing-mode:vertical-rl]"
          whileHover={{ y: -4 }}
        >
          kartikeynegi2002@gmail.com
        </motion.a>
        {/* Vertical line */}
        <div className="w-[1px] h-24 bg-muted-foreground/30 mt-4 rounded-full" />
      </motion.div>
    </div>
  );
};

export default EmailSidebar;
