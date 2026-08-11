import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProcessSection } from "@/components/home/process-section";
import { ServicesSection } from "@/components/home/services-section";
import { SkillsSection } from "@/components/home/skills-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectsSection } from "@/components/projects/projects-section";

export default function Home() {
  return (
    <div>
      <SiteHeader />

      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}