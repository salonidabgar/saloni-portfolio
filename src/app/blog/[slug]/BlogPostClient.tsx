"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import Link from "next/link";
import type { BlogPostWithContent } from "@/lib/blog";

export default function BlogPostClient({ post }: { post: BlogPostWithContent }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `${post.title} by @salonidabgar`;

  const handleShare = (platform: string) => {
    if (platform === "Twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
    } else if (platform === "LinkedIn") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
    } else if (platform === "Copy link") {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <div className="min-h-screen py-12">
      <article className="max-w-3xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)] mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="px-2.5 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary-light)] text-xs hover:bg-[var(--primary)]/20 transition-colors"
            >
              {post.category}
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 pb-8 border-b border-[var(--border)]">
            <span className="text-xs text-[var(--muted)] uppercase tracking-wider">Share</span>
            <div className="flex items-center gap-2">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: copied ? Check : LinkIcon, label: "Copy link" },
              ].map(({ icon: Icon, label }) => (
                <motion.button
                  key={label}
                  onClick={() => handleShare(label)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-lg border transition-all ${
                    label === "Copy link" && copied
                      ? "border-emerald-500/30 text-emerald-400"
                      : "border-[var(--border)] hover:border-[var(--primary)]/30 hover:text-[var(--primary-light)] text-[var(--muted)]"
                  }`}
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl glass-card"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
              <span className="font-display text-xl font-bold text-white">S</span>
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg">Saloni Dabgar</h3>
              <p className="text-[var(--muted)] text-sm mb-3">Software Developer & Seeker</p>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                Writing about life, technology, yoga, and the journey of becoming.
                Follow along as I explore the intersection of code and consciousness.
              </p>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
