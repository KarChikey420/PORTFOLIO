import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Top Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8"></div>

      {/* Bottom Glow Effect (Subtle) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-primary/10 blur-[100px] rounded-full translate-y-1/2 pointer-events-none" />
    </section>
  );
};

export default HeroSection;