import AboutMe from "@/components/about-me";
import BrandShowcase from "@/components/brand-showcase";
import ContactForm from "@/components/contact-form";
import HeroSection from "@/components/hero-section";
import { IconCloud, IconCloudDemo } from "@/components/icon-cloud";
import PortfolioSection from "@/components/Portfolio-section";
import SkillsSection from "@/components/skills-section";
import { SonnerProvider } from "@/components/sonner-provder";
import TestimonialCarouselDemo from "@/components/testimonial-carousel";
import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandShowcase />
      <AboutMe />
      <SkillsSection />
      <PortfolioSection />
      <div className="md:flex gap-2">
        <TestimonialCarouselDemo />
        <IconCloudDemo />
      </div>
      <Timeline />
      <ContactForm/>
      <SonnerProvider/>
    </>
  );
}
