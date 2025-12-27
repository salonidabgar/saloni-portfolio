"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Folder, Star, GitFork, Filter } from "lucide-react";

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
    stars: 0,
    forks: 0,
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
    stars: 0,
    forks: 0,
  },
  {
    title: "TaskFlow - Async Task Management Platform",
    description: "Production-ready task management system with real-time notifications, achieving 40% better performance with 1000+ concurrent users.",
    longDescription: "Developed using FastAPI and React with async/await RESTful APIs, WebSocket notifications, Redis caching reducing response times by 45%, and 90% test coverage.",
    image: "/projects/taskflow.png",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
    category: "Full Stack",
    github: "https://github.com/salonidabgar",
    live: null,
    featured: true,
    stars: 0,
    forks: 0,
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
    stars: 0,
    forks: 0,
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
    stars: 0,
    forks: 0,
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
    stars: 0,
    forks: 0,
  },
];

const categories = ["All", "Full Stack", "Embedded Systems", "AI/ML", "Blockchain"];

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
