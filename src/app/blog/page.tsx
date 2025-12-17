"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, Search, BookOpen, TrendingUp } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "building-scalable-microservices",
    title: "Building Scalable Microservices: A Practical Guide",
    excerpt: "Learn how to design and implement microservices architecture that can scale with your business needs. Covering service discovery, load balancing, and fault tolerance.",
    content: "Full article content here...",
    date: "2024-12-10",
    readTime: "12 min read",
    category: "Architecture",
    tags: ["Microservices", "Docker", "Kubernetes", "Node.js"],
    featured: true,
    image: "/blog/microservices.png",
  },
  {
    slug: "mastering-typescript-generics",
    title: "Mastering TypeScript Generics for Better Code",
    excerpt: "Deep dive into TypeScript generics and how they can help you write more reusable, type-safe code. With practical examples and best practices.",
    content: "Full article content here...",
    date: "2024-11-28",
    readTime: "8 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Programming"],
    featured: true,
    image: "/blog/typescript.png",
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    excerpt: "Discover proven techniques to optimize your React applications for better performance. From memoization to code splitting and beyond.",
    content: "Full article content here...",
    date: "2024-11-15",
    readTime: "10 min read",
    category: "React",
    tags: ["React", "Performance", "JavaScript", "Frontend"],
    featured: true,
    image: "/blog/react-perf.png",
  },
  {
    slug: "introduction-to-system-design",
    title: "Introduction to System Design: Core Concepts",
    excerpt: "A beginner-friendly introduction to system design covering scalability, availability, and the fundamental concepts every developer should know.",
    content: "Full article content here...",
    date: "2024-10-30",
    readTime: "15 min read",
    category: "System Design",
    tags: ["System Design", "Architecture", "Interview Prep"],
    featured: false,
    image: "/blog/system-design.png",
  },
  {
    slug: "ci-cd-best-practices",
    title: "CI/CD Best Practices for Modern Teams",
    excerpt: "Implement robust CI/CD pipelines with these battle-tested best practices. Learn about testing strategies, deployment automation, and monitoring.",
    content: "Full article content here...",
    date: "2024-10-15",
    readTime: "9 min read",
    category: "DevOps",
    tags: ["CI/CD", "DevOps", "GitHub Actions", "Automation"],
    featured: false,
    image: "/blog/cicd.png",
  },
  {
    slug: "aws-serverless-patterns",
    title: "AWS Serverless Patterns for Real-World Applications",
    excerpt: "Explore common serverless patterns on AWS and learn how to build cost-effective, scalable applications without managing servers.",
    content: "Full article content here...",
    date: "2024-09-28",
    readTime: "11 min read",
    category: "Cloud",
    tags: ["AWS", "Serverless", "Lambda", "Cloud"],
    featured: false,
    image: "/blog/serverless.png",
  },
  {
    slug: "database-indexing-strategies",
    title: "Database Indexing Strategies for Optimal Performance",
    excerpt: "Understanding database indexes and how to use them effectively to improve query performance in your applications.",
    content: "Full article content here...",
    date: "2024-09-10",
    readTime: "7 min read",
    category: "Database",
    tags: ["PostgreSQL", "Database", "Performance", "SQL"],
    featured: false,
    image: "/blog/database.png",
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques You Should Know in 2024",
    excerpt: "Stay up to date with the latest CSS features including container queries, cascade layers, and new color functions.",
    content: "Full article content here...",
    date: "2024-08-25",
    readTime: "6 min read",
    category: "CSS",
    tags: ["CSS", "Frontend", "Web Development"],
    featured: false,
    image: "/blog/css.png",
  },
];

const categories = ["All", "Architecture", "TypeScript", "React", "System Design", "DevOps", "Cloud", "Database", "CSS"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((p) => p.featured);

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
            <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg mb-8">
              Thoughts, tutorials, and insights on software development, system design, and technology
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-[var(--card)] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-8"
          >
            <TrendingUp className="w-6 h-6 text-[var(--accent)]" />
            <h2 className="text-2xl font-bold">Featured Articles</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden hover:border-[var(--primary)]/50 transition-all"
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-[var(--primary)]/50" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-[var(--muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary)] mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[var(--muted)] text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--primary)] text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with Categories */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Categories
                </h3>
                <div className="flex lg:flex-col gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm text-left transition-all ${
                        activeCategory === category
                          ? "bg-[var(--primary)] text-white"
                          : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">
                  {activeCategory === "All" ? "All Articles" : activeCategory}
                </h2>
                <span className="text-sm text-[var(--muted)]">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + searchQuery}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="group p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)] mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-xs bg-[var(--primary)]/10 text-[var(--primary)]">
                              {post.category}
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-[var(--muted)] text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 text-xs rounded-md bg-[var(--background)] text-[var(--muted)] border border-[var(--border)]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <Link
                              href={`/blog/${post.slug}`}
                              className="inline-flex items-center gap-2 text-[var(--primary)] text-sm font-medium group-hover:gap-3 transition-all"
                            >
                              Read
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-[var(--muted)]" />
                  <p className="text-[var(--muted)]">No articles found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
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
              Subscribe to my newsletter to get the latest articles, tutorials, and insights delivered to your inbox.
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
