import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsCarousel } from "@/components/sections/skills-carousel";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { Footer } from "@/components/sections/footer";
import { DynamicBackground } from "@/components/dynamic-background";
import { Separator } from "@/components/ui/separator";
import {
  NAV_ITEMS,
  PROFILE,
  SKILLS,
  EXPERIENCES,
  PROJECTS,
  CONTACT,
} from "@/data/mock-portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-secondary/30 dark:bg-transparent text-foreground selection:bg-primary selection:text-primary-foreground font-sans antialiased flex flex-col justify-between transition-colors duration-300">
      <DynamicBackground />
      <Header navItems={NAV_ITEMS} />

      <main className="flex-1 bg-transparent">
        <HeroSection profile={PROFILE} />
        <SkillsCarousel skills={SKILLS} />
        <Separator className="bg-border/60" />
        <ExperienceSection experiences={EXPERIENCES} />
      </main>

      <Separator className="bg-border/60" />
      <ProjectsSection projects={PROJECTS} />
      <Separator className="bg-border/60" />
      <Footer contact={CONTACT} />
    </div>
  );
}
