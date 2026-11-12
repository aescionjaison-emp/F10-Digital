"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function MarketingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const marketingServices = [
    { title: "SEO & Content Marketing", slug: "seo-content-marketing", metric: "+120% Organic Traffic" },
    { title: "Paid Media Campaigns", slug: "paid-media-campaigns", metric: "-35% Cost per Acquisition" },
    { title: "Social Media Management", slug: "social-media-management", metric: "+60% Brand Engagement" },
    { title: "Lead Generation Funnels", slug: "lead-generation", metric: "+85% Qualified Inquiries" },
    { title: "Analytics & Attribution", slug: "analytics-reporting", metric: "100% Closed-Loop ROI" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: textColRef.current,
              start: "top 95%",
            },
          }
        );
      }

      if (imageColRef.current) {
        gsap.fromTo(
          imageColRef.current,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: imageColRef.current,
              start: "top 95%",
            },
          }
        );

        const innerImg = imageColRef.current.querySelector(".campaign-img");
        if (innerImg) {
          gsap.to(innerImg, {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Asymmetrical Campaign Photographic Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Minimal Powerful Typography & Hover-Slide List */}
          <div ref={textColRef} className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.05]">
              Make Your Brand <br />
              <span className="text-[#2554D7]">Impossible to Ignore.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed">
              Data-driven performance acquisition engineered around real customer lifetime value, strict attribution, and high-impact brand visibility.
            </p>

            <div className="space-y-1.5 pt-2 border-t border-[#E2E8F0]">
              {marketingServices.map((srv, idx) => (
                <Link
                  key={srv.slug}
                  href={`/services/${srv.slug}`}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="flex items-center justify-between py-2 text-xs sm:text-sm font-bold text-[#0F172A] hover:text-[#2554D7] transition-all duration-200 group border-b border-[#E2E8F0]/40 hover:pl-1.5"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono text-[#94A3B8] group-hover:text-[#2554D7] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {srv.title}
                    </span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#2554D7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: 65% Large Creative Campaign Photograph with Dynamic Metric */}
          <div ref={imageColRef} className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] w-full group border border-[#E2E8F0]">
              <div
                className="campaign-img absolute -top-[5%] inset-x-0 -bottom-[5%] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1800&q=85')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white text-xs font-mono tracking-wider flex items-center justify-between">
                <span>{marketingServices[activeIdx].title}</span>
                <span className="text-[#93C5FD] font-bold">{marketingServices[activeIdx].metric}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
