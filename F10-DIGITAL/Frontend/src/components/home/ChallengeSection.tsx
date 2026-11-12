import React from "react";
import { 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Filter, 
  Cpu, 
  BarChart3,
  Clock
} from "lucide-react";
import { CHALLENGES, STATUS_QUO_COMPARISON } from "@/lib/data";

export function ChallengeSection() {
  const challengeIcons = [Layers, Filter, Clock, Cpu, BarChart3];

  return (
    <section className="py-24 bg-[#080B2B] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-royal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-rose-300 uppercase tracking-wider mb-4">
            03 · The Market Reality
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Complex Challenges.
            <br />
            <span className="text-gradient-accent">Clearer Possibilities.</span>
          </h2>
          <p className="text-lg text-[#CCD2F0] mt-4 leading-relaxed">
            Businesses today face multiple operational bottlenecks and fragmented digital systems that throttle growth, inflate overhead, and cloud visibility.
          </p>
        </div>

        {/* 5 Core Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {CHALLENGES.map((item, idx) => {
            const Icon = challengeIcons[idx % challengeIcons.length];
            return (
              <div
                key={item.number}
                className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-violet/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-violet group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-purple-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#777C94] leading-relaxed mb-6">
                    {item.symptom}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-1">
                    The F10 Resolution:
                  </div>
                  <div className="text-xs text-[#CCD2F0] font-medium">
                    {item.solution}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-royal/30 via-violet/20 to-purple/30 border border-violet/30 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded-md">
                THE VERDICT
              </span>
              <h3 className="text-2xl font-bold text-white font-heading leading-snug">
                Fragmented tools compound costs. Integrated systems accelerate revenue.
              </h3>
              <p className="text-xs text-[#CCD2F0] leading-relaxed">
                When your strategy, application architecture, lead pipelines, and video storytelling work as one synchronized machine, friction drops and conversions spike.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-2 text-white font-bold text-sm bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl border border-white/20 transition-colors"
              >
                <span>View The F10 Ecosystem</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* The Cost of the Status Quo — Comparison Table (Slide 5 of Deck) */}
        <div className="rounded-3xl glass-panel border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="mb-8">
            <div className="text-xs uppercase font-mono tracking-wider text-purple-400 font-semibold mb-2">
              Strategic Impact Analysis
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              The Cost of the Status Quo vs. The Transformed State
            </h3>
            <p className="text-sm text-[#777C94] mt-1">
              Inefficient digital strategies and outdated systems create persistent commercial drag.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-[#777C94]">
                  <th className="pb-4 font-semibold w-1/3">Current State (Friction)</th>
                  <th className="pb-4 font-semibold w-1/3 text-rose-300">Commercial Impact</th>
                  <th className="pb-4 font-semibold w-1/3 text-emerald-300">Desired State (F10 Powered)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {STATUS_QUO_COMPARISON.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 pr-4 font-medium text-[#CCD2F0]">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#777C94]" />
                        {row.current}
                      </div>
                    </td>
                    <td className="py-4 pr-4 font-medium text-rose-200">
                      <div className="flex items-center gap-2">
                        <span className="text-rose-400 font-bold">→</span>
                        {row.impact}
                      </div>
                    </td>
                    <td className="py-4 font-semibold text-emerald-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        {row.desired}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

