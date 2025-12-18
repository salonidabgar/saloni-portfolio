"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "what-yoga-means-to-me",
    title: "What Yoga Means to Me",
    excerpt: "Yoga is not just physical exercise for me. It's a deep spiritual sadhana — my way of using this human body to touch a level of peak consciousness, to transcend, to become more than I was yesterday.",
    date: "2024-12-17",
    readTime: "5 min read",
    category: "Life",
    tags: ["Yoga", "Spirituality", "Mindfulness", "Personal Growth"],
    featured: true,
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
              Thoughts, reflections, and insights on life, technology, and personal growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden hover:border-[var(--primary)]/50 transition-all"
              >
                {/* Image placeholder */}
                <div className="aspect-[3/1] bg-gradient-to-br from-[var(--primary)]/20 via-[var(--secondary)]/10 to-[var(--accent)]/20 flex items-center justify-center">
                  <div className="text-6xl">🧘‍♀️</div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 text-sm text-[var(--muted)] mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] mb-4">
                    {post.category}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-[var(--muted)] mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-[var(--background)] text-[var(--muted)] border border-[var(--border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--primary)] font-medium group-hover:gap-3 transition-all"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-[var(--muted)]" />
              <p className="text-[var(--muted)]">No articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[var(--card)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto">
              Subscribe to get notified when I publish new articles on life, technology, and personal growth.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-medium rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
