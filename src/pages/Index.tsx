import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import Footer from "@/components/portfolio/Footer";
import ThreeBackground from "@/components/3d/ThreeBackground";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThreeBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </main>
  );
};

export default Index;