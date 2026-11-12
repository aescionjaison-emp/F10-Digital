import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS, COMPANY_INFO } from "@/lib/data";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((b) => ({
    slug: b.slug,
  }));
}

export default async function InsightDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content.split("\n\n");

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#202522]">
      {/* Header */}
      <section className="pt-36 pb-16 max-w-4xl mx-auto px-6 sm:px-12">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#777A75] hover:text-[#202522] mb-8 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Insights</span>
        </Link>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono text-[#777A75]">
            <span className="text-[#B69A72] font-semibold uppercase">{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#202522] leading-[1.15]">
            {post.title}
          </h1>

          <div className="text-xs font-mono text-[#777A75] pt-2">
            By {post.author}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-4xl mx-auto px-6 sm:px-12 pb-16">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[360px] sm:h-[480px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${post.image}')` }}
          />
        </div>
      </section>

      {/* Body */}
      <article className="max-w-4xl mx-auto px-6 sm:px-12 pb-32">
        <div className="space-y-6 text-base sm:text-lg text-[#202522] font-light leading-relaxed">
          {paragraphs.map((para, i) => {
            if (para.startsWith("### ")) {
              return (
                <h3 key={i} className="text-2xl font-bold font-heading text-[#202522] pt-6 pb-2">
                  {para.replace("### ", "")}
                </h3>
              );
            }
            if (para.startsWith("1. ") || para.startsWith("- ")) {
              const lines = para.split("\n");
              return (
                <ul key={i} className="space-y-2 pl-6 my-4 list-disc text-base text-[#777A75]">
                  {lines.map((line, li) => (
                    <li key={li} className="text-[#202522]">
                      {line.replace(/^[0-9]+\.\s+/, "").replace(/^-\s+/, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-[#777A75]">
                {para}
              </p>
            );
          })}
        </div>

        {/* Footer Scoping Box */}
        <div className="mt-16 p-8 rounded-2xl bg-[#E8E4DC] border border-[#DCD7CD] space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B69A72]">
            Strategic Implementation
          </span>
          <h4 className="text-2xl font-bold font-heading text-[#202522]">
            Need this architecture deployed for your enterprise?
          </h4>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#202522] text-[#F7F5F0] text-xs font-bold uppercase tracking-wider"
            >
              <span>Consult With Leadership</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
