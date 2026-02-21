"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowUpRight, BookOpen, Mail } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 pattern-grid opacity-40" />
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-mono text-[var(--accent)] mb-4">
              THOUGHTS
            </span>
            <h1 className="text-5xl md:text-6xl font-display mb-6">
              My <span className="text-accent-serif">blog</span>
            </h1>
            <p className="text-[var(--muted)] text-xl leading-relaxed">
              Reflections on life, technology, personal growth, and the journey of becoming
              a better version of myself — one day at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    className="group relative rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden"
                    whileHover={{ y: -4 }}
                  >
                    {/* Gradient header */}
                    <div className={`h-48 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          className="text-8xl opacity-80"
                          animate={{ y: [0, -5, 0], rotate: [0, 3, -3, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                        >
                          {post.emoji}
                        </motion.span>
                      </div>
                      {/* Shimmer on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-sm text-[var(--muted)] mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[var(--muted)]" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-display mb-4 group-hover:text-[var(--primary)] transition-colors leading-tight">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-[var(--muted)] mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-lg bg-[var(--background)] text-[var(--muted)] border border-[var(--border-light)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read more link */}
                      <span className="inline-flex items-center gap-2 text-[var(--primary)] font-medium group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </div>

          {posts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-[var(--muted)]" />
              <h3 className="text-xl font-display mb-2">Coming Soon</h3>
              <p className="text-[var(--muted)]">New articles are on the way. Check back soon!</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--card)]" />
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Stay <span className="text-accent-serif">updated</span>
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
              Get notified when I publish new articles on life, technology, and personal growth.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </form>

            <p className="text-xs text-[var(--muted)] mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
