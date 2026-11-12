"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function TechnologySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const techServices = [
    { title: "Website Development", slug: "website-development", desc: "Headless Next.js & SSR platforms" },
    { title: "Web & Mobile Applications", slug: "web-mobile-applications", desc: "Enterprise iOS & Android apps" },
    { title: "System Integrations", slug: "system-integrations", desc: "API middleware & ERP/CRM sync" },
    { title: "AI Solutions", slug: "ai-solutions", desc: "Intelligent autonomous agents" },
    { title: "Maintenance & Support", slug: "maintenance-support", desc: "24/7 proactive security & SLA" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      if (bgImageRef.current) {
        gsap.fromTo(
          bgImageRef.current,
          { scale: 1.08, yPercent: -4 },
          {
            scale: 1.02,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      }

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.04,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 95%",
            },
          }
        );
      }

      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.035,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-10 sm:py-16 bg-[#0F172A] text-[#F8FAFC] overflow-hidden">
      {/* 80% Full-Width Cinematic Background Image with Scroll Scrub Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={bgImageRef}
          className="w-full h-full bg-cover bg-center opacity-30 will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-[#0F172A]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div ref={headingRef} className="max-w-3xl space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[#FFFFFF] leading-[1.08]">
            Technology That Moves <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] to-[#3B82F6]">
              Business Forward.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#CBD5E1] font-light max-w-xl leading-relaxed">
            Scalable, secure, and future-proof digital architectures designed for zero downtime and sub-second global performance.
          </p>
        </div>

        {/* Hover-Slide Services Matrix */}
        <div ref={listRef} className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {techServices.map((srv, idx) => (
            <Link
              key={srv.slug}
              href={`/services/${srv.slug}`}
              className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-[#3B82F6] hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-mono font-bold text-[#93C5FD] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#94A3B8] group-hover:text-[#3B82F6] group-hover:bg-white/10 transition-all">
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-sm font-bold font-heading text-[#FFFFFF] group-hover:text-[#93C5FD] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-[11px] text-[#94A3B8] font-light mt-1 line-clamp-2 transition-all group-hover:text-[#CBD5E1]">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-white/5 text-[10px] font-mono text-[#93C5FD] opacity-0 group-hover:opacity-100 transition-all">
                View Specifications →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
