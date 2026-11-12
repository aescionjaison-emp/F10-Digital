"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

interface ExhibitionPanel {
  id: string;
  number: string;
  title: string;
  tagline: string;
  image: string;
  link: string;
}

export function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const displayPanelRef = useRef<HTMLDivElement>(null);

  const panels: ExhibitionPanel[] = [
    {
      id: "strategy",
      number: "01",
      title: "Strategy & Advisory",
      tagline: "Commercial alignment, executive audits, and scalable roadmaps.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      link: "/services#digital-tech",
    },
    {
      id: "technology",
      number: "02",
      title: "Enterprise Technology",
      tagline: "Next.js web systems, headless infrastructure, and bi-directional API bridges.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
      link: "/services/website-development",
    },
    {
      id: "growth",
      number: "03",
      title: "Digital Growth & Performance",
      tagline: "High-intent regional SEO, targeted paid acquisition, and conversion funnels.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
      link: "/services/paid-media-campaigns",
    },
    {
      id: "automation",
      number: "04",
      title: "AI & Business Automation",
      tagline: "Autonomous WhatsApp sales concierge, CRM dispatch, and operational bots.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
      link: "/services/ai-solutions",
    },
    {
      id: "media",
      number: "05",
      title: "Content & Media Production",
      tagline: "Cinema-grade brand films, commercials, and 3D architectural CGI.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=85",
      link: "/services/corporate-films",
    },
  ];

  const [activePanel, setActivePanel] = useState(panels[0]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 95%",
            },
          }
        );
      }

      if (displayPanelRef.current) {
        gsap.fromTo(
          displayPanelRef.current,
          { opacity: 0, scale: 0.97 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: displayPanelRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ecosystem" className="py-10 sm:py-16 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.08]">
              One Vision.
              <br />
              <span className="text-[#2554D7]">Connected Capabilities.</span>
            </h2>
          </div>

          <p className="text-sm text-[#64748B] font-light max-w-md leading-relaxed">
            Five core disciplines united under one synchronized delivery model. Hover or select a capability to inspect its visual space.
          </p>
        </div>

        {/* Interactive Digital Exhibition Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Interactive Capability Selector List with Hover-Slide */}
          <div ref={listRef} className="lg:col-span-5 flex flex-col justify-between space-y-2">
            {panels.map((p) => {
              const isSelected = activePanel.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePanel(p)}
                  onMouseEnter={() => setActivePanel(p)}
                  className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 border flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#F8FAFC] border-[#2554D7] shadow-sm translate-x-1.5"
                      : "bg-[#FFFFFF] border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] hover:translate-x-1"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold transition-colors ${isSelected ? "text-[#2554D7]" : "text-[#64748B] group-hover:text-[#0F172A]"}`}>
                        {p.number}
                      </span>
                      <h3 className={`text-sm sm:text-base font-bold font-heading transition-colors ${isSelected ? "text-[#0F172A]" : "text-[#0F172A]/80 group-hover:text-[#0F172A]"}`}>
                        {p.title}
                      </h3>
                    </div>
                    {isSelected && (
                      <p className="text-xs text-[#64748B] font-light mt-1 max-w-sm leading-relaxed">
                        {p.tagline}
                      </p>
                    )}
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected ? "text-[#2554D7] translate-x-0.5 -translate-y-0.5" : "text-[#94A3B8] group-hover:text-[#0F172A]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Dynamic Exhibition Visual Panel */}
          <div ref={displayPanelRef} className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px]">
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg group border border-[#E2E8F0]">
              <div
                key={activePanel.id}
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out scale-100 hover:scale-105"
                style={{ backgroundImage: `url('${activePanel.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Panel Caption & Direct Link */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                <div>
                  <span className="text-[11px] uppercase font-mono tracking-widest text-[#93C5FD] block">
                    CAPABILITY {activePanel.number} / 05
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-heading mt-0.5">
                    {activePanel.title}
                  </h4>
                </div>

                <Link
                  href={activePanel.link}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFFFFF] text-[#0F172A] hover:bg-[#2554D7] hover:text-white text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-105 active:scale-95"
                >
                  <span>Explore Division</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
