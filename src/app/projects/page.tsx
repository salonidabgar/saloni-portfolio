"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Sparkles, Car, Link2, CheckSquare, Radio, Brain, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BlurReveal } from "@/components/TextReveal";

const projects: {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github: string | null;
  live: string | null;
  featured: boolean;
  gradient: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Software Over-The-Air (SOTA) Controller",
    description: "Built automotive SOTA controller with state-machine architecture for secure vehicle software updates with pause/resume/cancel functionality.",
    technologies: ["C++", "Boost.Beast", "OpenSSL", "SSL/TLS", "Linux"],
    category: "Embedded Systems",
    github: null,
    live: null,
    featured: true,
    gradient: "from-orange-500 to-red-500",
    icon: Car,
  },
  {
    title: "Blockchain Currency Exchange Platform",
    description: "Decentralized currency exchange platform with smart contracts, liquidity pools, and ERC-20 token implementation on Ethereum.",
    technologies: ["Solidity", "Next.js", "Ethereum", "Uniswap V3", "Remix"],
    category: "Blockchain",
    github: "https://github.com/salonidabgar",
    live: null,
    featured: true,
    gradient: "from-purple-500 to-pink-500",
    icon: Link2,
  },
  {
    title: "TaskFlow - Async Task Management",
    description: "Production-ready task management system with real-time notifications, achieving 40% better performance with 1000+ concurrent users.",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
    category: "Full Stack",
    github: "https://github.com/salonidabgar",
    live: null,
    featured: true,
    gradient: "from-emerald-500 to-teal-500",
    icon: CheckSquare,
  },
  {
    title: "UDP Serializer-Deserializer",
    description: "Modular communication interface between Vehicle Stability Control and Automatic Braking System for real-time acceleration data flow.",
    technologies: ["C++", "FreeRTOS", "Socket Programming", "IPC"],
    category: "Embedded Systems",
    github: null,
    live: null,
    featured: false,
    gradient: "from-blue-500 to-indigo-500",
    icon: Radio,
  },
  {
    title: "Deep into CNNs",
    description: "Implemented state-of-art ResNet101 and VGG16 architectures using PyTorch, achieving 92.2% accuracy on 275 bird species classification.",
    technologies: ["Python", "PyTorch", "CNN", "ResNet101", "VGG16"],
    category: "AI/ML",
    github: "https://github.com/salonidabgar",
    live: null,
    featured: false,
    gradient: "from-violet-500 to-purple-500",
    icon: Brain,
  },
  {
    title: "E2E Headlamp Communication System",
    description: "Integrated E2B communication layer for CCMA-zonal-headlamp actuator communication, increasing vehicle communication efficiency by 10%.",
    technologies: ["C", "Linux", "Embedded Systems", "Vehicle Communication"],
    category: "Embedded Systems",
    github: null,
    live: null,
    featured: false,
    gradient: "from-amber-500 to-orange-500",
    icon: Lightbulb,
  },
];

const categories = ["All", "Full Stack", "Embedded Systems", "AI/ML", "Blockchain"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <BlurReveal>
            <span className="inline-block text-xs font-mono text-[var(--accent)] mb-4 tracking-wider">
              PORTFOLIO
            </span>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
              Selected <span className="text-accent-serif">work</span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <p className="text-[var(--muted-light)] text-xl max-w-2xl leading-relaxed">
              A collection of projects spanning embedded systems, blockchain platforms,
              and full-stack applications.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* Featured Projects - Bento Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <BlurReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm font-medium text-[var(--accent)]">Featured</span>
              </div>
            </div>
          </BlurReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="group relative h-full rounded-2xl glass-card overflow-hidden"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient header */}
                  <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <project.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-2.5 py-1 text-[11px] rounded-full bg-[var(--primary)]/10 text-[var(--primary-light)] font-medium">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-4 h-4 text-[var(--muted)]" />
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-4 h-4 text-[var(--muted)]" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-[var(--primary-light)] transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-[var(--muted)] text-sm mb-5 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tag">+{project.technologies.length - 4}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <BlurReveal>
              <h2 className="text-2xl font-display font-semibold">All Projects</h2>
            </BlurReveal>

            {/* Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-[var(--foreground)] text-[var(--background)]"
                      : "border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--border-hover)]"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-3 md:gap-4"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.div
                    className="group h-full p-6 rounded-2xl glass-card hover:border-[var(--border-hover)] transition-all"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <project.icon className="w-5 h-5 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="font-display font-semibold group-hover:text-[var(--primary-light)] transition-colors line-clamp-1">
                              {project.title}
                            </h3>
                            <span className="text-xs text-[var(--muted)]">{project.category}</span>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <Github className="w-4 h-4 text-[var(--muted)]" />
                              </a>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="tag">{tech}</span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="tag">+{project.technologies.length - 4}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <p className="text-[var(--muted)]">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--surface)]" />
        <div className="absolute inset-0 pattern-dots" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <BlurReveal>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[var(--foreground)] text-[var(--background)] mb-8">
              <Github className="w-10 h-10" />
            </div>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              More on <span className="text-accent-serif">GitHub</span>
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
              Explore more projects, contributions, and open-source work on my GitHub profile.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <motion.a
              href="https://github.com/salonidabgar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-full text-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View GitHub Profile
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </BlurReveal>
        </div>
      </section>
    </div>
  );
}
