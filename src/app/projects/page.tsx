"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Folder, Star, GitFork, Filter } from "lucide-react";

const projects = [
  {
    title: "CloudSync Platform",
    description: "A real-time collaborative workspace platform with advanced file synchronization, team management, and integrated chat functionality.",
    longDescription: "Built a comprehensive cloud platform enabling seamless team collaboration with real-time document editing, intelligent file syncing, and secure data management.",
    image: "/projects/cloudsync.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "WebSocket"],
    category: "Full Stack",
    github: "https://github.com/salonidabgar/cloudsync",
    live: "https://cloudsync.demo.com",
    featured: true,
    stars: 245,
    forks: 38,
  },
  {
    title: "AI Code Assistant",
    description: "An intelligent VS Code extension that provides context-aware code suggestions, automated refactoring, and documentation generation.",
    longDescription: "Developed an AI-powered coding assistant that learns from your codebase patterns to provide intelligent suggestions and automate repetitive tasks.",
    image: "/projects/ai-assistant.png",
    technologies: ["TypeScript", "Python", "OpenAI", "VS Code API", "Machine Learning"],
    category: "AI/ML",
    github: "https://github.com/salonidabgar/ai-code-assistant",
    live: "https://marketplace.visualstudio.com/items?itemName=ai-assistant",
    featured: true,
    stars: 1203,
    forks: 156,
  },
  {
    title: "FinTrack Dashboard",
    description: "Personal finance tracking application with beautiful visualizations, expense categorization, and budget planning tools.",
    longDescription: "A comprehensive personal finance tool that helps users track spending, set budgets, and visualize their financial health with interactive charts.",
    image: "/projects/fintrack.png",
    technologies: ["Next.js", "Tailwind CSS", "Chart.js", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    github: "https://github.com/salonidabgar/fintrack",
    live: "https://fintrack.demo.com",
    featured: true,
    stars: 567,
    forks: 89,
  },
  {
    title: "DevOps Pipeline Builder",
    description: "Visual CI/CD pipeline builder with drag-and-drop interface, supporting multiple cloud providers and deployment strategies.",
    longDescription: "Created a visual tool for building CI/CD pipelines with support for GitHub Actions, GitLab CI, and AWS CodePipeline configurations.",
    image: "/projects/devops.png",
    technologies: ["React", "Go", "Docker", "Kubernetes", "Terraform"],
    category: "DevOps",
    github: "https://github.com/salonidabgar/pipeline-builder",
    live: "https://pipeline-builder.demo.com",
    featured: false,
    stars: 334,
    forks: 45,
  },
  {
    title: "E-Commerce Microservices",
    description: "Scalable e-commerce platform built with microservices architecture, featuring cart management, payment processing, and order tracking.",
    longDescription: "Architected a production-ready e-commerce system with separate microservices for user management, inventory, payments, and shipping.",
    image: "/projects/ecommerce.png",
    technologies: ["Node.js", "React", "MongoDB", "RabbitMQ", "Docker", "Stripe"],
    category: "Full Stack",
    github: "https://github.com/salonidabgar/ecommerce-ms",
    live: null,
    featured: false,
    stars: 189,
    forks: 34,
  },
  {
    title: "Real-time Analytics Engine",
    description: "High-performance analytics engine processing millions of events per second with real-time dashboards and alerting.",
    longDescription: "Built a streaming analytics platform using Apache Kafka and Flink for processing high-volume event data with sub-second latency.",
    image: "/projects/analytics.png",
    technologies: ["Scala", "Apache Kafka", "Apache Flink", "ClickHouse", "Grafana"],
    category: "Data Engineering",
    github: "https://github.com/salonidabgar/analytics-engine",
    live: null,
    featured: false,
    stars: 421,
    forks: 67,
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features for motivation.",
    longDescription: "Developed a fitness companion app with personalized workout recommendations, progress analytics, and community challenges.",
    image: "/projects/fitness.png",
    technologies: ["React Native", "Firebase", "Node.js", "TensorFlow Lite"],
    category: "Mobile",
    github: "https://github.com/salonidabgar/fitness-app",
    live: "https://apps.apple.com/fitness-app",
    featured: false,
    stars: 156,
    forks: 23,
  },
  {
    title: "API Gateway Service",
    description: "Custom API gateway with rate limiting, authentication, request transformation, and comprehensive monitoring.",
    longDescription: "Built an enterprise-grade API gateway handling authentication, rate limiting, and request routing with detailed analytics.",
    image: "/projects/api-gateway.png",
    technologies: ["Go", "Redis", "PostgreSQL", "Prometheus", "gRPC"],
    category: "Backend",
    github: "https://github.com/salonidabgar/api-gateway",
    live: null,
    featured: false,
    stars: 278,
    forks: 41,
  },
];

const categories = ["All", "Full Stack", "AI/ML", "DevOps", "Data Engineering", "Mobile", "Backend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
              A collection of projects that showcase my skills and passion for building great software
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <Star className="w-6 h-6 text-[var(--accent)]" />
            Featured Projects
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden hover:border-[var(--primary)]/50 transition-all"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                      <Folder className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-[var(--background)] transition-colors"
                        >
                          <Github className="w-5 h-5 text-[var(--muted)] hover:text-[var(--foreground)]" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-[var(--background)] transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-[var(--muted)] hover:text-[var(--foreground)]" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-[var(--muted)] mb-4">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-[var(--background)] text-[var(--muted)] border border-[var(--border)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-[var(--background)] text-[var(--muted)] border border-[var(--border)]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold">All Projects</h2>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm"
              >
                <Filter className="w-4 h-4" />
                Filter
              </button>

              <div className={`${showFilters ? 'flex' : 'hidden'} sm:flex flex-wrap gap-2`}>
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? "bg-[var(--primary)] text-white"
                        : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Folder className="w-8 h-8 text-[var(--primary)]" />
                      <div>
                        <h3 className="font-semibold group-hover:text-[var(--primary)] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs text-[var(--muted)]">{project.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg hover:bg-[var(--background)] transition-colors"
                        >
                          <Github className="w-4 h-4 text-[var(--muted)] hover:text-[var(--foreground)]" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg hover:bg-[var(--background)] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-[var(--muted)] hover:text-[var(--foreground)]" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-md bg-[var(--background)] text-[var(--muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 text-xs rounded-md bg-[var(--background)] text-[var(--muted)]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        {project.forks}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--muted)]">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-16 bg-[var(--card)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Github className="w-16 h-16 mx-auto mb-6 text-[var(--muted)]" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want to see more?
            </h2>
            <p className="text-[var(--muted)] mb-8">
              Check out my GitHub profile for more projects and contributions to open source.
            </p>
            <motion.a
              href="https://github.com/salonidabgar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
