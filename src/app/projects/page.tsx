"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Layers, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Software Over-The-Air (SOTA) Controller",
    description: "Built automotive SOTA controller with state-machine architecture for secure vehicle software updates with pause/resume/cancel functionality.",
    longDescription: "Developed a robust SOTA controller using C++ and Boost.Beast with secure HTTPS server implementation using OpenSSL and SSL/TLS for automotive software updates.",
    image: "/projects/sota.png",
    technologies: ["C++", "Boost.Beast", "OpenSSL", "SSL/TLS", "Linux"],
    category: "Embedded Systems",
    github: null,
    live: null,
    featured: true,
    color: "from-orange-500 to-red-500",
    emoji: "🚗",
  },
  {
    title: "Blockchain Currency Exchange Platform",
    description: "Decentralized currency exchange platform with smart contracts, liquidity pools, and ERC-20 token implementation on Ethereum.",
    longDescription: "Built at University of Zurich - Implemented asset smart contracts in Solidity, created liquidity pool on Uniswap V3, and developed front-end using Next.js.",
    image: "/projects/blockchain.png",
    technologies: ["Solidity", "Next.js", "Ethereum", "Uniswap V3", "Remix"],
    category: "Blockchain",
    github: "https://github.com/salonidabgar",
    live: null,
    featured: true,
    color: "from-purple-500 to-pink-500",
    emoji: "⛓️",
  },
  {
    title: "TaskFlow - Async Task Management",
    description: "Production-ready task management system with real-time notifications, achieving 40% better performance with 1000+ concurrent users.",
    longDescription: "Developed using FastAPI and React with async/await RESTful APIs, WebSocket notifications, Redis caching reducing response times by 45%, and 90% test coverage.",
    image: "/projects/taskflow.png",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
    category: "Full Stack",
    github: "https://github.com/salonidabgar",
    live: null,
    featured: true,
    color: "from-emerald-500 to-teal-500",
    emoji: "✅",
  },
  {
    title: "UDP Serializer-Deserializer",
    description: "Modular communication interface between Vehicle Stability Control and Automatic Braking System for real-time acceleration data flow.",
    longDescription: "Developed on FreeRTOS with multi-threaded DataReceiver, DataExtractor and DataAssembler modules with shared memory IPC mechanism.",
    image: "/projects/udp.png",
    technologies: ["C++", "FreeRTOS", "Socket Programming", "IPC"],
    category: "Embedded Systems",
    github: null,
    live: null,
    featured: false,
    color: "from-blue-500 to-indigo-500",
    emoji: "📡",
  },
  {
    title: "Deep into CNNs",
    description: "Implemented state-of-art ResNet101 and VGG16 architectures using PyTorch, achieving 92.2% accuracy on 275 bird species classification.",
    longDescription: "Programming Club, IIT Kanpur project - Tested on CIFAR-10 dataset, participated in Kaggle competitions achieving 86.2% accuracy with Neural Network models.",
    image: "/projects/cnn.png",
    technologies: ["Python", "PyTorch", "CNN", "ResNet101", "VGG16"],
    category: "AI/ML",
    github: "https://github.com/salonidabgar",
    live: null,
    featured: false,
    color: "from-violet-500 to-purple-500",
    emoji: "🧠",
  },
  {
    title: "E2E Headlamp Communication System",
    description: "Integrated E2B communication layer for CCMA-zonal-headlamp actuator communication, increasing vehicle communication efficiency by 10%.",
    longDescription: "Adapted network OS layer to CCMA environment and wrote Platform Abstraction Layer (PAL) in C for Jaguar Land Rover vehicles.",
    image: "/projects/headlamp.png",
    technologies: ["C", "Linux", "Embedded Systems", "Vehicle Communication"],
    category: "Embedded Systems",
    github: null,
    live: null,
    featured: false,
    color: "from-amber-500 to-orange-500",
    emoji: "💡",
  },
];

const categories = ["All", "Full Stack", "Embedded Systems", "AI/ML", "Blockchain"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 pattern-grid opacity-40" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-mono text-[var(--accent)] mb-4">
              PORTFOLIO
            </span>
            <h1 className="text-5xl md:text-6xl font-display mb-6">
              Selected <span className="text-accent-serif">work</span>
            </h1>
            <p className="text-[var(--muted)] text-xl leading-relaxed">
              A collection of projects spanning embedded systems, blockchain platforms,
              and full-stack applications — each solving real-world challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-sm font-medium text-[var(--accent)]">Featured</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="group relative h-full rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient header */}
                  <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-6xl opacity-80"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {project.emoji}
                      </motion.span>
                    </div>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-[var(--background)] transition-colors"
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
                            className="p-2 rounded-lg hover:bg-[var(--background)] transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-4 h-4 text-[var(--muted)]" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-[var(--muted)] text-sm mb-5 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-md bg-[var(--background)] text-[var(--muted)] border border-[var(--border-light)]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 text-xs rounded-md bg-[var(--background)] text-[var(--muted)] border border-[var(--border-light)]">
                          +{project.technologies.length - 4}
                        </span>
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <Layers className="w-5 h-5 text-[var(--primary)]" />
              <h2 className="text-2xl font-display">All Projects</h2>
            </motion.div>

            {/* Category Filter */}
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-[var(--foreground)] text-[var(--background)]"
                      : "bg-[var(--card)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--primary)]"
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
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.div
                    className="group h-full p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/40 transition-all"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Emoji indicator */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl`}>
                        {project.emoji}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="font-semibold group-hover:text-[var(--primary)] transition-colors line-clamp-1">
                              {project.title}
                            </h3>
                            <span className="text-xs text-[var(--muted)]">{project.category}</span>
                          </div>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 rounded-lg hover:bg-[var(--background)] transition-colors"
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
                                className="p-1.5 rounded-lg hover:bg-[var(--background)] transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <ExternalLink className="w-4 h-4 text-[var(--muted)]" />
                              </motion.a>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs rounded-md bg-[var(--background)] text-[var(--muted)]"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-0.5 text-xs rounded-md bg-[var(--background)] text-[var(--muted)]">
                              +{project.technologies.length - 4}
                            </span>
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-[var(--muted)]">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--card)]" />
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[var(--foreground)] text-[var(--background)] mb-8">
              <Github className="w-10 h-10" />
            </div>

            <h2 className="text-3xl md:text-4xl font-display mb-4">
              More on <span className="text-accent-serif">GitHub</span>
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
              Explore more projects, contributions, and open-source work on my GitHub profile.
            </p>

            <motion.a
              href="https://github.com/salonidabgar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-xl"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View GitHub Profile
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
