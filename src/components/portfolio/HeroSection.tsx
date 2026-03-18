import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Software Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Typography & CTA */}
        <div className="flex flex-col items-start gap-6 z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            <span className="text-primary">Hello,</span><br />
            I'm Kartikey Negi
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-mono text-muted-foreground h-8"
          >
            {text}<span className="text-primary animate-pulse w-3 inline-block">_</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-stretch bg-primary text-black rounded-full overflow-hidden font-medium shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:shadow-[0_0_40px_rgba(163,230,53,0.5)] transition-shadow"
            >
              <span className="px-6 py-3 flex items-center">View My Portfolio</span>
              <div className="w-[1px] bg-black/20 my-2" />
              <span className="px-4 py-3 flex items-center justify-center">
                <ArrowRight size={20} />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side: Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center z-10 h-[500px]"
        >
          {/* Abstract Fluid Blob Background */}
          <div className="absolute inset-0 z-0 flex justify-center items-center">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-[120%] text-white/5 opacity-50 absolute">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18,97,-2.9C96.1,12.2,87.7,26.9,77.5,39.4C67.3,51.9,55.3,62.2,41.9,70.5C28.5,78.8,13.7,85.1,-2.1,88.7C-17.9,92.3,-34.7,93.2,-48.7,86.5C-62.7,79.8,-74,65.5,-82.9,49.8C-91.8,34.1,-98.3,17.1,-98.2,0C-98,-17.1,-91.2,-34.2,-81.4,-48.6C-71.6,-63,-58.8,-74.7,-44.3,-81.4C-29.8,-88.1,-14.9,-89.8,-0.2,-89.5C14.5,-89.2,29.1,-86.9,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white absolute">
              <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18,97,-2.9C96.1,12.2,87.7,26.9,77.5,39.4C67.3,51.9,55.3,62.2,41.9,70.5C28.5,78.8,13.7,85.1,-2.1,88.7C-17.9,92.3,-34.7,93.2,-48.7,86.5C-62.7,79.8,-74,65.5,-82.9,49.8C-91.8,34.1,-98.3,17.1,-98.2,0C-98,-17.1,-91.2,-34.2,-81.4,-48.6C-71.6,-63,-58.8,-74.7,-44.3,-81.4C-29.8,-88.1,-14.9,-89.8,-0.2,-89.5C14.5,-89.2,29.1,-86.9,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          {/* Speech Bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute top-12 right-12 z-20 bg-primary text-black font-bold text-sm px-4 py-2 rounded-2xl rounded-bl-sm"
          >
            HELLO
          </motion.div>

          {/* Developer Illustration (Using a stylish representation + actual image overlay for an illustration) */}
          <div className="relative z-10 w-full h-full flex justify-center items-end pb-8">
            <img 
              src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4506461-3738664.png" 
              alt="Developer Waving" 
              className="object-contain h-[90%] w-auto filter drop-shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;