import AboutMe from "@/components/about-me";
import BrandShowcase from "@/components/brand-showcase";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/Portfolio-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandShowcase />
      <AboutMe />
      <SkillsSection />
      <PortfolioSection />
    </>
  );
}
