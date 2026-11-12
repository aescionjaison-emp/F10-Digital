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
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#B69A72] font-semibold">
              Perspectives & Intelligence
            </span>
            <div className="h-[1px] w-12 bg-[#B69A72]/40" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight leading-[1.08]">
            Insights & Strategic <br />
            <span className="text-[#B69A72]">Perspectives.</span>
          </h1>

          <p className="text-base text-[#777A75] font-light max-w-xl leading-relaxed">
            Dissecting technology shifts, AI automation workflows, high-yield digital acquisition models, and cinema-grade brand strategy.
          </p>
        </div>
      </section>

      {/* Editorial Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E2DED6] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
                <div className="absolute top-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#202522]">
                  {post.category}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#777A75] mb-2">
                    {post.date} · {post.readTime}
                  </div>
                  <h2 className="text-xl font-bold font-heading text-[#202522] leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs text-[#777A75] font-light line-clamp-3 mt-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DED6]/60 flex items-center justify-between text-xs">
                  <span className="text-[#777A75] font-mono">{post.author}</span>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-[#202522] hover:text-[#B69A72] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
