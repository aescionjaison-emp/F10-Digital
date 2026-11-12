import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export const metadata = {
  title: "Insights | F10 DIGITAL",
  description: "Strategic perspectives, technology blueprints, and performance marketing architecture.",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* Header */}
      <section className="pt-24 pb-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-2.5">
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.08]">
            Insights & Strategic <br />
            <span className="text-[#2554D7]">Perspectives.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] font-light max-w-xl leading-relaxed">
            Dissecting technology shifts, AI automation workflows, high-yield digital acquisition models, and cinema-grade brand strategy.
          </p>
        </div>
      </section>

      {/* Editorial Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all flex flex-col justify-between hover:border-[#2554D7]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-[#0F172A]">
                  {post.category}
                </div>
              </div>

              <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#64748B] mb-1.5">
                    {post.date} · {post.readTime}
                  </div>
                  <h2 className="text-base sm:text-lg font-bold font-heading text-[#0F172A] leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs text-[#64748B] font-light line-clamp-2 mt-1.5 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs">
                  <span className="text-[#64748B] font-mono text-[11px]">{post.author}</span>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-[#0F172A] hover:text-[#2554D7] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#2554D7]" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
