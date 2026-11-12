import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS, COMPANY_INFO } from "@/lib/data";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

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
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A]">
      {/* Header */}
      <section className="pt-24 pb-10 max-w-4xl mx-auto px-6 sm:px-12">
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#64748B] hover:text-[#2554D7] mb-6 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Insights</span>
        </Link>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <span className="text-[#2554D7] font-bold uppercase">{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-[#0F172A] leading-[1.15]">
            {post.title}
          </h1>

          <div className="text-xs font-mono text-[#64748B] pt-1">
            By {post.author}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-4xl mx-auto px-6 sm:px-12 pb-10">
        <div className="relative rounded-2xl overflow-hidden shadow-md h-[280px] sm:h-[380px] w-full border border-[#E2E8F0]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${post.image}')` }}
          />
        </div>
      </section>

      {/* Body */}
      <article className="max-w-4xl mx-auto px-6 sm:px-12 pb-20">
        <div className="space-y-4 text-sm sm:text-base text-[#0F172A] font-light leading-relaxed">
          {paragraphs.map((para, i) => {
            if (para.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A] pt-4 pb-1">
                  {para.replace("### ", "")}
                </h3>
              );
            }
            if (para.startsWith("1. ") || para.startsWith("- ")) {
              const lines = para.split("\n");
              return (
                <ul key={i} className="space-y-1.5 pl-5 my-2 list-disc text-sm text-[#64748B]">
                  {lines.map((line, li) => (
                    <li key={li} className="text-[#0F172A]">
                      {line.replace(/^[0-9]+\.\s+/, "").replace(/^-\s+/, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-[#64748B]">
                {para}
              </p>
            );
          })}
        </div>

        {/* Footer Scoping Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2554D7] font-bold">
            Strategic Implementation
          </span>
          <h4 className="text-xl font-bold font-heading text-[#0F172A]">
            Need this architecture deployed for your enterprise?
          </h4>
          <div className="pt-1">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2554D7] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#1D4ED8] transition-all"
            >
              <span>Consult With Leadership</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
