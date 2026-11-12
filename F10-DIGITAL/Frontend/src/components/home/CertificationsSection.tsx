"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

interface PartnerBadge {
  id: string;
  name: string;
  svgPath: string;
}

export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const partners: PartnerBadge[] = [
    {
      id: "meta-perf",
      name: "Meta Certified",
      svgPath: "/images/partners/meta-certified-performance.svg",
    },
    {
      id: "google-partner",
      name: "Google Partner",
      svgPath: "/images/partners/google-partner.svg",
    },
    {
      id: "meta-biz",
      name: "Meta Business Partner",
      svgPath: "/images/partners/meta-business-partner.svg",
    },
    {
      id: "clutch",
      name: "Clutch",
      svgPath: "/images/partners/clutch-top-agency.svg",
    },
    {
      id: "meta-media",
      name: "Meta Certified Media",
      svgPath: "/images/partners/meta-certified-media.svg",
    },
    {
      id: "tiktok",
      name: "TikTok Marketing Partner",
      svgPath: "/images/partners/tiktok-partner.svg",
    },
    {
      id: "snapchat",
      name: "Snapchat Ads Partner",
      svgPath: "/images/partners/snapchat-partner.svg",
    },
  ];

  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        gsap.fromTo(
          marqueeRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-1.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] font-heading tracking-tight">
            Globally Recognized. <br className="hidden sm:block" />
            <span className="text-[#2554D7]">Trusted by Industry Leaders.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] font-light max-w-xl mx-auto leading-relaxed">
            Our certified partnerships ensure superior quality, performance, and reliability across every platform.
          </p>
        </div>

        {/* Fast & Smooth Marquee Slideshow Track (ONLY LOGOS - NO BOXES, NO NAMES) */}
        <div
          ref={marqueeRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full overflow-hidden py-2"
        >
          {/* Subtle Side Vignette Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          {/* Infinite Marquee Track: Smooth Fast Slide with Hover Pause & Logo Zoom */}
          <div
            className={`flex items-center gap-12 sm:gap-16 w-max hover:[animation-play-state:paused] ${
              isPaused ? "[animation-play-state:paused]" : ""
            }`}
            style={{
              animation: "marqueeSlide 18s linear infinite",
            }}
          >
            {duplicatedPartners.map((p, idx) => (
              <div
                key={`${p.id}-${idx}`}
                className="group relative flex items-center justify-center cursor-pointer transition-all duration-200 py-2 px-4 hover:-translate-y-1 select-none"
              >
                {/* Official HD Brand Mark Only (No Card Box, No Names) */}
                <div className="relative w-40 sm:w-48 h-14 sm:h-16 flex items-center justify-center transition-all duration-200 group-hover:scale-115">
                  <img
                    src={p.svgPath}
                    alt={p.name}
                    className="max-h-12 sm:max-h-14 w-auto max-w-full object-contain filter transition-all duration-200 group-hover:drop-shadow-[0_6px_20px_rgba(37,84,215,0.35)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marqueeSlide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
