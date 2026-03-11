"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowUpRight, BookOpen, Mail } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { BlurReveal } from "@/components/TextReveal";

export default function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <BlurReveal>
            <span className="inline-block text-xs font-mono text-[var(--accent)] mb-4 tracking-wider">
              THOUGHTS
            </span>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
              My <span className="text-accent-serif">blog</span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <p className="text-[var(--muted-light)] text-xl leading-relaxed max-w-2xl">
              Reflections on life, technology, personal growth, and the journey of becoming
              a better version of myself.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    className="group relative rounded-2xl glass-card overflow-hidden hover:border-[var(--border-hover)] transition-all"
                    whileHover={{ y: -4 }}
                  >
                    {/* Gradient header */}
                    <div className={`h-44 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          className="text-7xl"
                          animate={{ y: [0, -5, 0], rotate: [0, 3, -3, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                        >
                          {post.emoji}
                        </motion.span>
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/15 backdrop-blur-sm text-white">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-[var(--muted)] mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[var(--muted)]" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-[var(--primary-light)] transition-colors leading-tight">
                        {post.title}
                      </h2>

                      <p className="text-[var(--muted-light)] mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-[var(--primary-light)] font-medium text-sm group-hover:gap-3 transition-all">
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-[var(--muted)]" />
              <h3 className="text-xl font-display font-semibold mb-2">Coming Soon</h3>
              <p className="text-[var(--muted)]">New articles are on the way. Check back soon!</p>
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
                Get notified when I publish new articles on life, technology, and personal growth.
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
