import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Code2, 
  TrendingUp, 
  Film, 
  Check, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";

export function ServicesOverviewSection() {
  const divisions = [
    {
      id: "digital-tech",
      title: "Digital & Technology",
      subtitle: "Build for the Future",
      tagline: "Scalable and secure technology solutions.",
      icon: Code2,
      accent: "from-blue-600 via-indigo-600 to-cyan-500",
      items: SERVICES_DATA.filter((s) => s.division === "digital-tech"),
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "growth-marketing",
      title: "Growth & Marketing",
      subtitle: "Accelerate Your Reach",
      tagline: "Data-driven marketing for measurable growth.",
      icon: TrendingUp,
      accent: "from-indigo-600 via-violet-600 to-purple-500",
      items: SERVICES_DATA.filter((s) => s.division === "growth-marketing"),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "media-production",
      title: "Media & Production",
      subtitle: "Bring Your Brand to Life",
      tagline: "High-impact content for every platform.",
      icon: Film,
      accent: "from-purple-600 via-pink-600 to-rose-500",
      items: SERVICES_DATA.filter((s) => s.division === "media-production"),
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#080B2B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
              05 · Service Divisions
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Capabilities That Move
              <br />
              <span className="text-gradient-accent">Businesses Forward.</span>
            </h2>
            <p className="text-lg text-[#CCD2F0] mt-4 leading-relaxed">
              End-to-end capabilities engineered to build digital infrastructure, drive qualified customer acquisition, and produce cinema-grade brand narratives.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <span>View All Capabilities</span>
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

        {/* 3 Distinct Division Cards */}
        <div className="space-y-12">
          {divisions.map((div, idx) => {
            const Icon = div.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={div.id}
                className="rounded-3xl glass-panel border border-white/10 p-8 sm:p-12 hover:border-violet/40 transition-all duration-300 relative overflow-hidden group shadow-2xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Division Info & List */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${div.accent} flex items-center justify-center text-white shadow-lg`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                          {div.subtitle}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                          {div.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-[#CCD2F0] font-medium leading-relaxed">
                      {div.tagline}
                    </p>

                    {/* Services Sub-list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {div.items.map((srv) => (
                        <Link
                          key={srv.id}
                          href={`/services/${srv.slug}`}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/15 transition-colors group/item"
                        >
                          <div className="w-5 h-5 rounded-md bg-violet/20 flex items-center justify-center shrink-0 mt-0.5 text-purple-300">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white group-hover/item:text-cyan-300 transition-colors">
                              {srv.title}
                            </span>
                            <p className="text-[11px] text-[#777C94] line-clamp-1 mt-0.5">
                              {srv.shortDesc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/services#${div.id}`}
                        className="inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold hover:text-white transition-colors group/link"
                      >
                        <span>Explore all {div.title} deliverables</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Division Visual Imagery */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-72 sm:h-80 group/img">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/img:scale-105"
                        style={{ backgroundImage: `url('${div.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080B2B] via-[#080B2B]/30 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10">
                        <div className="text-xs font-semibold text-white flex items-center justify-between">
                          <span>Division Standard</span>
                          <span className="text-cyan-300 font-mono text-[11px]">Enterprise Grade</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

