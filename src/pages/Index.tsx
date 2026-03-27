import Navigation from "@/components/portfolio/Navigation";

import ExperienceSkillsLayout from "@/components/portfolio/ExperienceSkillsLayout";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30 selection:text-primary">
      <Navigation />
      <div className="relative z-10 w-full pt-20">
        <ProjectsSection />

        <ExperienceSkillsLayout />
        <Footer />
      </div>
    </main>
  );
};

export default Index;