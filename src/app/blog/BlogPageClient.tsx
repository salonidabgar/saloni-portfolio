"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowUpRight, BookOpen, Search, Tag, Code2, Heart, Sprout, type LucideIcon } from "lucide-react";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Software Engineering": Code2,
  "Health & Fitness": Heart,
  "Personal Growth": Sprout,
  "Career": ArrowUpRight,
  "Code": Code2,
};

function getCategoryIcon(category: string): LucideIcon {
  return CATEGORY_ICONS[category] || BookOpen;
}
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import SplitText from "@/components/SplitText";
import { BlurReveal } from "@/components/TextReveal";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "Software Engineering", label: "Engineering" },
  { id: "Career", label: "Career" },
  { id: "Health & Fitness", label: "Fitness" },
  { id: "Personal Growth", label: "Growth" },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "all" || post.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen">
      {/* ===== EDITORIAL HERO ===== */}
      <section className="pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <BlurReveal>
            <span className="inline-block text-xs font-mono text-[var(--accent)] mb-4 tracking-wider">
              ESSAYS & IDEAS
            </span>
          </BlurReveal>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-5 tracking-tight">
            <SplitText delay={0.2} stagger={0.03}>Thinking</SplitText>
          </h1>
          <BlurReveal delay={0.4}>
            <p className="text-[var(--muted-light)] text-lg leading-relaxed max-w-2xl">
              What I think. How I think. Why I think. Essays at the intersection of
              engineering, philosophy, fitness, and the human experience.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* ===== SEARCH + FILTERS ===== */}
      <section className="relative py-4 border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
            <input
              type="text"
              placeholder="Search essays..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors text-sm placeholder:text-[var(--muted)]"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <Tag className="w-3.5 h-3.5 text-[var(--muted)] flex-shrink-0" />
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[var(--foreground)] text-[var(--background)]"
                    : "bg-[var(--surface)] text-[var(--muted-light)] border border-[var(--border)] hover:border-[var(--primary)]/40 hover:text-[var(--foreground)]"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED ESSAY — FULL WIDTH HERO ===== */}
      {featuredPost && (
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-6">
            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl overflow-hidden h-[360px] md:h-[420px] bg-gradient-to-br ${featuredPost.color}`}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-[10px] font-semibold rounded-full bg-white/15 backdrop-blur-sm text-white uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span className="text-white/50 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.1] mb-4 max-w-3xl group-hover:translate-x-1 transition-transform duration-500">
                    {featuredPost.title}
                  </h2>

                  <p className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed mb-6 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="text-white/40 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="inline-flex items-center gap-2 text-white/80 font-medium text-sm group-hover:gap-3 transition-all">
                      Read essay <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer" />
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* ===== REMAINING ESSAYS — EDITORIAL GRID ===== */}
      <section className="py-8 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {remainingPosts.map((post, index) => {
                const Icon = getCategoryIcon(post.category);
                return (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.5 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <motion.div
                        className="group flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-2xl glass-card hover:border-[var(--border-hover)] transition-all"
                        whileHover={{ x: 4 }}
                      >
                        {/* Icon / visual */}
                        <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-medium text-[var(--accent)] uppercase tracking-wider">
                              {post.category}
                            </span>
                            <span className="text-[var(--muted)] text-[10px]">{formatDate(post.date)}</span>
                            <span className="text-[var(--muted)] text-[10px] flex items-center gap-0.5">
                              <Clock className="w-2.5 h-2.5" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-lg md:text-xl font-display font-bold group-hover:text-[var(--primary-light)] transition-colors leading-snug mb-2">
                            {post.title}
                          </h3>

                          <p className="text-sm text-[var(--muted-light)] leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="hidden md:block w-5 h-5 text-[var(--muted)] group-hover:text-[var(--primary-light)] group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </motion.div>
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <BookOpen className="w-14 h-14 mx-auto mb-5 text-[var(--muted)]" />
              <h3 className="text-xl font-display font-semibold mb-2">No essays found</h3>
              <p className="text-[var(--muted)] text-sm mb-6">
                {searchQuery
                  ? `No results for "${searchQuery}".`
                  : "Check back soon."}
              </p>
              <button
                onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                className="px-5 py-2.5 rounded-full text-sm font-medium border border-[var(--border)] hover:border-[var(--primary)] text-[var(--muted-light)] hover:text-[var(--foreground)] transition-all"
              >
                View All
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
