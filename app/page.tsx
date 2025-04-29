import AboutMe from "@/components/about-me";
import BrandShowcase from "@/components/brand-showcase";
import ContactForm from "@/components/contact-form";
import HeroSection from "@/components/hero-section";
// import { IconCloudDemo } from "@/components/icon-cloud";
import PortfolioSection from "@/components/Portfolio-section";
import SkillsSection from "@/components/skills-section";
import { SonnerProvider } from "@/components/sonner-provder";
// import TestimonialCarouselDemo from "@/components/testimonial-carousel";
// import { Timeline } from "@/components/timeline";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandShowcase />
      <PortfolioSection />
      <AboutMe />
      <SkillsSection />
      {/* <div className="md:flex gap-2 container mx-auto px-4 py-8 items-center justify-around">
        <div>
          <TestimonialCarouselDemo />
        </div>
        <div>
          <IconCloudDemo />
        </div>
      </div> */}
      {/* <Timeline /> */}
      <ContactForm />
      <SonnerProvider />
    </>
  );
}
