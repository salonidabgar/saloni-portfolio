"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Code2, Server, Cpu, Wrench, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const skills = [
  {
    name: "Languages",
    icon: Code2,
    items: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    color: "from-violet-500 to-purple-600",
    description: "Core programming expertise"
  },
  {
    name: "Backend",
    icon: Server,
    items: ["FastAPI", "React", "PostgreSQL", "Redis", "Node.js"],
    color: "from-emerald-500 to-teal-600",
    description: "Server & database systems"
  },
  {
    name: "Embedded",
    icon: Cpu,
    items: ["FreeRTOS", "Linux", "CMake", "NGINX", "Socket Programming"],
    color: "from-orange-500 to-red-500",
    description: "Low-level & systems"
  },
  {
    name: "Tools",
    icon: Wrench,
    items: ["Git", "Docker", "GitLab CI/CD", "GenAI", "AWS"],
    color: "from-blue-500 to-indigo-600",
    description: "DevOps & productivity"
  },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "50+", label: "Projects Built" },
  { value: "IIT", label: "Kanpur Alumni" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-[100vh] flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 pattern-grid opacity-40" />

          {/* Gradient orbs */}
          <motion.div
            className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[var(--primary)]/30 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[var(--secondary)]/10 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 status-available mb-8"
            >
              <span>Available for opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-normal mb-6 tracking-tight">
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="gradient-text font-semibold">Saloni</span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <motion.path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="var(--accent)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </motion.svg>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-[var(--muted)] mb-6 max-w-2xl mx-auto leading-relaxed"
            >
              Software Developer crafting{" "}
              <span className="text-[var(--foreground)] font-medium">embedded systems</span>,{" "}
              <span className="text-[var(--foreground)] font-medium">full-stack apps</span>, and{" "}
              <span className="text-[var(--foreground)] font-medium">blockchain solutions</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-[var(--muted)] mb-10 flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Currently at Jaguar Land Rover
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link href="/projects">
                <motion.button
                  className="group px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-xl flex items-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
              </Link>
              <motion.a
                href="/resume.pdf"
                className="group px-8 py-4 border-2 border-[var(--border)] rounded-xl font-medium flex items-center gap-2 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-8 md:gap-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-semibold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 text-[var(--muted)]"
              >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--card)]" />
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-mono text-[var(--accent)] mb-4"
              >
                01 — ABOUT
              </motion.span>

              <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight">
                Building software that{" "}
                <span className="text-accent-serif">matters</span>
              </h2>

              <div className="space-y-5 text-[var(--muted)] text-lg leading-relaxed">
                <p>
                  I&apos;m a Software Developer at <span className="text-[var(--foreground)] font-medium">Jaguar Land Rover</span>,
                  working on embedded automotive systems that power the vehicles of tomorrow.
                </p>
                <p>
                  With a B.Tech from <span className="text-[var(--foreground)] font-medium">IIT Kanpur</span>,
                  I bridge the gap between low-level embedded programming in C/C++ and modern full-stack development.
                  From SOTA controllers to blockchain platforms, I enjoy tackling complex technical challenges.
                </p>
                <p>
                  Beyond code, I&apos;m passionate about <span className="text-[var(--foreground)] font-medium">yoga</span> and
                  personal growth — believing that a balanced mind creates better software.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8"
              >
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 text-[var(--primary)] font-medium link-underline"
                >
                  View my journey
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square relative">
                {/* Decorative frame */}
                <div className="absolute inset-4 rounded-3xl border-2 border-[var(--border)] border-dashed" />

                {/* Main visual */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 via-[var(--secondary)]/5 to-[var(--accent)]/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <motion.div
                      className="text-[120px] leading-none mb-4"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      👩‍💻
                    </motion.div>
                    <p className="text-[var(--muted)] text-sm">Your photo here</p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 px-4 py-2 bg-[var(--background)] rounded-full border border-[var(--border)] shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <span className="text-sm font-medium flex items-center gap-2">
                    <span className="text-lg">🎓</span> IIT Kanpur
                  </span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-[var(--background)] rounded-full border border-[var(--border)] shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                >
                  <span className="text-sm font-medium flex items-center gap-2">
                    <span className="text-lg">🚗</span> JLR
                  </span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 px-4 py-2 bg-[var(--primary)] text-white rounded-full shadow-lg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                >
                  <span className="text-sm font-medium">50+ Projects</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-sm font-mono text-[var(--accent)] mb-4">
              02 — SKILLS
            </span>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Technical <span className="text-accent-serif">expertise</span>
            </h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto text-lg">
              From bare-metal embedded systems to cloud-native applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="group relative p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} mb-4`}>
                          <skill.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
                        <p className="text-sm text-[var(--muted)]">{skill.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                          className="px-3 py-1.5 text-sm rounded-lg bg-[var(--background)] text-[var(--muted)] border border-[var(--border-light)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-default"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5" />
        <div className="absolute inset-0 pattern-diagonal opacity-30" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-sm mb-8"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              Open to new opportunities
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 leading-tight">
              Let&apos;s build something{" "}
              <span className="text-accent-serif">amazing</span> together
            </h2>

            <p className="text-[var(--muted)] text-lg mb-10 max-w-xl mx-auto">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:dabgarsaloni11@gmail.com"
                className="group px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-xl flex items-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <Link href="/blog">
                <motion.button
                  className="px-8 py-4 border-2 border-[var(--border)] rounded-xl font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read My Blog
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
