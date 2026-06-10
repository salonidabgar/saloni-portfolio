"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import Link from "next/link";
import type { BlogPostWithContent, BlogPost } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPostClient({
  post,
  allPosts,
}: {
  post: BlogPostWithContent;
  allPosts?: BlogPost[];
}) {
  const [copied, setCopied] = useState(false);
  const [readPercent, setReadPercent] = useState(0);
  const articleRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Hero parallax
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0]);

  // Reading progress
  const { scrollYProgress } = useScroll({ target: articleRef, offset: ["start start", "end end"] });
  const progressSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setReadPercent(Math.round(v * 100));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Share
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

  // Find next post
  const currentIndex = allPosts?.findIndex((p) => p.slug === post.slug) ?? -1;
  const nextPost = allPosts && currentIndex >= 0 ? allPosts[(currentIndex + 1) % allPosts.length] : null;

  // Drop cap: inject into first <p> of contentHtml
  const contentWithDropCap = post.contentHtml.replace(
    /^(<p>)(\s*)(\w)/,
    '$1$2<span class="drop-cap">$3</span>'
  );

  return (
    <div className="min-h-screen" ref={articleRef}>
      {/* ===== VERTICAL READING PROGRESS LINE ===== */}
      <motion.div
        className="fixed left-0 top-0 w-[3px] z-50 origin-top"
        style={{
          scaleY: progressSpring,
          background: "linear-gradient(180deg, #06d6a0, #f59e0b, #ff6b6b, #a855f7)",
          height: "100vh",
        }}
      />

      {/* ===== FLOATING PROGRESS INDICATOR ===== */}
      <motion.div
        className="fixed top-6 left-6 z-50 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: readPercent > 5 ? 1 : 0, x: readPercent > 5 ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
          <span className="text-[10px] font-mono font-bold gradient-text">{readPercent}%</span>
        </div>
      </motion.div>

      {/* ===== CINEMATIC HERO ===== */}
      <div ref={heroRef} className={`relative h-[70vh] md:h-[80vh] overflow-hidden bg-gradient-to-br ${post.color}`}>
        {post.heroImage && (
          <motion.img
            src={post.heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
            style={{ y: heroY }}
          />
        )}
        <motion.div className="absolute inset-0 bg-black/40" style={{ y: heroY }} />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium uppercase tracking-wider mb-6">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto mb-6">
              {post.title}
            </h1>

            <p className="text-white/70 text-lg max-w-2xl mx-auto text-center leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 rounded-full bg-white/60"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </div>

      {/* ===== ARTICLE BODY ===== */}
      <article className="max-w-3xl mx-auto px-6 py-16 relative">
        {/* Back + Share bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12 pb-8 border-b border-[var(--border)]"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All essays
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider mr-2">Share</span>
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
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </motion.div>

        {/* ===== THE PROSE ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: contentWithDropCap }}
        />

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl glass-card mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--vivid-teal)] to-[var(--vivid-coral)] flex items-center justify-center flex-shrink-0">
              <span className="font-display text-xl font-bold text-white">S</span>
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg">Saloni Dabgar</h3>
              <p className="text-[var(--muted)] text-sm mb-3">Engineer, Builder, Thinker</p>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                I write about systems — in code, in nature, in people. Software developer at Jaguar Land Rover,
                IIT Kanpur alumna, fitness enthusiast, and lifelong student of philosophy and the human mind.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===== NEXT ESSAY TEASER ===== */}
        {nextPost && (
          <Link href={`/blog/${nextPost.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl overflow-hidden h-48 md:h-56 bg-gradient-to-br ${nextPost.color}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-between px-8">
                <div>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-2">Next essay</p>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-white/90 transition-colors max-w-lg">
                    {nextPost.title}
                  </h3>
                </div>
                <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          </Link>
        )}
      </article>
    </div>
  );
}
