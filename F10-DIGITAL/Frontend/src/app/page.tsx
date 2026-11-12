import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandIntroSection } from "@/components/home/BrandIntroSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { MarketingSection } from "@/components/home/MarketingSection";
import { AIAutomationSection } from "@/components/home/AIAutomationSection";
import { MediaProductionSection } from "@/components/home/MediaProductionSection";
import { MethodologySection } from "@/components/home/MethodologySection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { SuccessStoriesSection } from "@/components/home/SuccessStoriesSection";
import { FounderSection } from "@/components/home/FounderSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { RegionalPresenceSection } from "@/components/home/RegionalPresenceSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#F7F5F0]">
      {/* 01. Full-Screen Cinematic Dubai Video Hero */}
      <HeroSection />

      {/* 02. About F10 — 65% Dominant Architectural Visual */}
      <BrandIntroSection />

      {/* 03. Globally Recognized Certifications with Glowing Border Hover (Image 2) */}
      <CertificationsSection />

      {/* 04. The F10 Ecosystem — Interactive Digital Exhibition */}
      <EcosystemSection />

      {/* 05. Digital & Technology — Full-Width Photographic Composition */}
      <TechnologySection />

      {/* 06. Growth & Marketing — Asymmetrical Campaign Visual */}
      <MarketingSection />

      {/* 07. AI & Automation — Refined Technical Flow */}
      <AIAutomationSection />

      {/* 08. Media & Production — Immersive Cinema Gallery */}
      <MediaProductionSection />

      {/* 09. Delivery Methodology — Minimal Split Timeline */}
      <MethodologySection />

      {/* 10. Industry Specialization — Large Visual Gallery */}
      <IndustriesSection />

      {/* 11. Success Stories — Asymmetric Portfolio */}
      <SuccessStoriesSection />

      {/* 12. Meet The Founder — Daniel Vincent (Image 1) */}
      <FounderSection />

      {/* 13. What Our Clients Say About Us — Real Experiences (Image 1) */}
      <TestimonialsSection />

      {/* 14. FAQs — Everything You Need to Know (Image 1) */}
      <FAQSection />

      {/* 15. Global Presence — UAE & India City Visuals */}
      <RegionalPresenceSection />

      {/* 16. Final Cinematic Closing CTA */}
      <FinalCTASection />
    </div>
  );
}
