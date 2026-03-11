"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowUpRight, BookOpen, Mail, Search, Tag, Code2, Heart, Sprout, type LucideIcon } from "lucide-react";

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
import { BlurReveal } from "@/components/TextReveal";

const CATEGORIES = [
  { id: "all", label: "All Posts" },
  { id: "Software Engineering", label: "Software Engineering" },
  { id: "Career", label: "Career" },
  { id: "Health & Fitness", label: "Health & Fitness" },
  { id: "Personal Growth", label: "Personal Growth" },
  { id: "Code", label: "Code" },
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
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  const availableCategories = useMemo(() => {
    const cats = new Set(posts.map((p) => p.category));
    return CATEGORIES.filter((c) => c.id === "all" || cats.has(c.id));
  }, [posts]);

  const postCount = filteredPosts.length;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <BlurReveal>
            <span className="inline-block text-xs font-mono text-[var(--accent)] mb-4 tracking-wider">
              THOUGHTS & IDEAS
            </span>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-5 tracking-tight">
              The <span className="text-accent-serif">Blog</span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <p className="text-[var(--muted-light)] text-lg leading-relaxed max-w-2xl">
              Writing about software engineering, career growth, health, and the pursuit of a meaningful life.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="relative py-4 border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Search bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted)]" />
            <input
              type="text"
              placeholder="Search articles by title, tag, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors text-sm placeholder:text-[var(--muted)]"
            />
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <Tag className="w-3.5 h-3.5 text-[var(--muted)] flex-shrink-0" />
            {availableCategories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[var(--primary)] text-white"
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

      {/* Results count */}
      <section className="pt-6 pb-2">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm text-[var(--muted)]">
            {searchQuery || activeCategory !== "all"
              ? `${postCount} article${postCount !== 1 ? "s" : ""} found`
              : `${postCount} article${postCount !== 1 ? "s" : ""}`}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-6 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                  className={filteredPosts.length % 2 === 1 && index === filteredPosts.length - 1 ? "md:col-span-2" : ""}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <motion.div
                      className="group h-full flex flex-col rounded-2xl glass-card overflow-hidden hover:border-[var(--border-hover)] transition-all"
                      whileHover={{ y: -4 }}
                    >
                      {/* Card header with gradient */}
                      <div className={`h-40 bg-gradient-to-br ${post.color} relative overflow-hidden flex-shrink-0`}>
                        <div className="absolute inset-0 bg-black/15" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          {(() => { const Icon = getCategoryIcon(post.category); return (
                            <motion.div
                              className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </motion.div>
                          ); })()}
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />

                        {/* Category badge */}
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-black/30 backdrop-blur-sm text-white uppercase tracking-wider">
                            {post.category}
                          </span>
                        </div>

                        {/* Read time badge */}
                        <div className="absolute top-3 right-3">
                          <span className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-black/30 backdrop-blur-sm text-white/80 flex items-center gap-1">
                            <Clock className="w-2.5 h-2.5" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-1.5 text-xs text-[var(--muted)] mb-3">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </div>

                        <h2 className="text-xl font-display font-bold mb-3 group-hover:text-[var(--primary-light)] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-[var(--muted-light)] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-[10px] rounded-md bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)]">
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="px-2 py-0.5 text-[10px] rounded-md text-[var(--muted)]">
                              +{post.tags.length - 3}
                            </span>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-2 text-[var(--primary-light)] font-medium text-sm mt-auto group-hover:gap-3 transition-all">
                          Read Article
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <BookOpen className="w-14 h-14 mx-auto mb-5 text-[var(--muted)]" />
              <h3 className="text-xl font-display font-semibold mb-2">
                {searchQuery ? "No articles found" : "No posts in this category yet"}
              </h3>
              <p className="text-[var(--muted)] text-sm mb-6">
                {searchQuery
                  ? `No results for "${searchQuery}". Try a different search.`
                  : "Check back soon or explore other categories."}
              </p>
              <button
                onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                className="px-5 py-2.5 rounded-full text-sm font-medium border border-[var(--border)] hover:border-[var(--primary)] text-[var(--muted-light)] hover:text-[var(--foreground)] transition-all"
              >
                View All Posts
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--surface)]" />
        <div className="absolute inset-0 pattern-dots" />

        <div className="max-w-4xl mx-auto px-6 relative">
          <BlurReveal>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] mb-6">
                <Mail className="w-7 h-7 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Stay <span className="text-accent-serif">updated</span>
              </h2>
              <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
                Get notified when I publish new articles on engineering, wellness, and personal growth.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors text-sm"
                />
                <motion.button
                  type="submit"
                  className="px-7 py-3.5 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-full flex items-center justify-center gap-2 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </form>

              <p className="text-[11px] text-[var(--muted)] mt-4">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </BlurReveal>
        </div>
      </section>
    </div>
  );
}
