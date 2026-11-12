"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function MediaProductionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryItems = [
    {
      title: "Cinema Brand Films",
      category: "Direction & Filming",
      desc: "4K/6K cinema camera aerials & corporate brand narratives",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Commercial Sets",
      category: "Lighting & Grip",
      desc: "Full studio staging & multi-camera commercial choreography",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Post-Production Suites",
      category: "Color & Mastering",
      desc: "DaVinci Resolve HDR grading & spatial audio mixing",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "3D CGI & Motion Graphics",
      category: "Digital Visuals",
      desc: "Architectural renders, kinetic type, and visual effects",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (galleryRef.current) {
        gsap.fromTo(
          galleryRef.current.children,
          { opacity: 0, y: 20, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.08]">
              Ideas Deserve <br />
              <span className="text-[#2554D7]">Extraordinary Execution.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] font-light max-w-sm leading-relaxed">
            From 4K/6K cinema camera shoots in Dubai to high-end post-production and 3D visual effects that establish immediate market authority.
          </p>
        </div>

        {/* Immersive Cinematic Image Gallery with Hover-Slide Content */}
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden h-[280px] sm:h-[340px] shadow-md cursor-pointer will-change-transform border border-[#E2E8F0] hover:border-[#2554D7] transition-colors"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-108"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-200 group-hover:opacity-90" />

              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1 transition-transform duration-200 group-hover:-translate-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#93C5FD] block font-bold">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E2E8F0]/80 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-150 line-clamp-2 pt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer CTA */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#E2E8F0] text-xs font-mono text-[#64748B]">
          <span>Full Cinema & Commercial Production Pipeline</span>
          <Link
            href="/services/corporate-films"
            className="inline-flex items-center gap-1.5 text-[#0F172A] hover:text-[#2554D7] font-bold uppercase tracking-wider transition-colors group"
          >
            <span>Explore Media Capabilities</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
