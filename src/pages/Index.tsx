import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import Footer from "@/components/portfolio/Footer";
import TopographicBackground from "@/components/portfolio/TopographicBackground";
import SocialSidebar from "@/components/portfolio/SocialSidebar";
import EmailSidebar from "@/components/portfolio/EmailSidebar";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <TopographicBackground />
      <SocialSidebar />
      <EmailSidebar />
      <Navigation />
      <div className="relative z-10 px-4 sm:px-8 lg:px-24">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;