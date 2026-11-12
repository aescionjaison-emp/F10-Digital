"use client";

import React, { useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import { gsap, ScrollTrigger, EASE_PRIMARY } from "@/lib/gsap";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Leo Antony",
      role: "CEO",
      company: "MindParcs Inc., Pennsylvania, USA",
      quote:
        "F10 Digital transformed our vision into a website that truly reflects our brand identity. The new website is clean, intuitive, lightning-fast, and visually exceptional. We experienced a 55% improvement in page speed, a 42% increase in user engagement, and a noticeable improvement in visitor retention within the first few months. Their attention to detail and commitment to quality exceeded our expectations.",
      highlight: "+55% Page Speed · +42% Engagement",
    },
    {
      name: "Liam Rodriguez",
      role: "Founder",
      company: "BlueWave Retail, Canada",
      quote:
        "Our previous website wasn't generating the results we needed. F10 Digital completely reimagined it into a modern, high-converting digital platform that delivers an outstanding user experience. Since launch, we've seen a 68% increase in conversion rate, a 47% reduction in bounce rate, and a 2.4x growth in qualified enquiries. Their strategic thinking and execution made a remarkable difference to our business.",
      highlight: "+68% Conversion Rate · 2.4x Growth",
    },
    {
      name: "Priya Raman",
      role: "Head of Growth",
      company: "Apex Healthcare Network, UAE",
      quote:
        "F10 Digital delivered an omni-channel acquisition and patient booking funnel that exceeded our expectations. Lead response time dropped under 45 seconds with their WhatsApp AI flow, and our consultation volume jumped significantly in the first quarter.",
      highlight: "< 45s Response · Record Booking Volume",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.05,
            ease: EASE_PRIMARY,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 95%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] font-heading tracking-tight leading-[1.08]">
            What Our Clients <br />
            <span className="text-[#2554D7]">Say About Us.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] font-light max-w-lg leading-relaxed">
            Real experiences and verified outcomes from enterprise brands we've helped scale across the UAE, North America, and globally.
          </p>
        </div>

        {/* 3 Editorial Testimonial Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-4 group hover:border-[#2554D7]/50"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#2554D7]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#2554D7]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E2E8F0] group-hover:text-[#2554D7] transition-colors" />
                </div>

                <p className="text-xs text-[#64748B] font-light leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] space-y-1">
                <div className="text-[11px] font-mono text-[#2554D7] font-bold">
                  {t.highlight}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] font-heading">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#64748B]">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
