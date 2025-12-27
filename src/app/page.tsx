"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles, Code, Database, Cloud, Smartphone } from "lucide-react";
import Link from "next/link";

const skills = [
  { name: "Languages", icon: Code, items: ["C", "C++", "Python", "JavaScript"] },
  { name: "Backend", icon: Database, items: ["FastAPI", "React", "PostgreSQL", "Redis"] },
  { name: "Embedded", icon: Cloud, items: ["FreeRTOS", "Linux", "CMake", "NGINX"] },
  { name: "Tools", icon: Smartphone, items: ["Git", "Docker", "GitLab", "GenAI Tools"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)]/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-sm text-[var(--primary)] mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Available for opportunities</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Saloni Dabgar</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-[var(--muted)] mb-8 max-w-2xl mx-auto"
            >
              A passionate software developer crafting beautiful, performant, and user-centric digital experiences
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link href="/projects">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-medium rounded-full"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              <motion.a
                href="/resume.pdf"
                className="px-8 py-4 border border-[var(--border)] rounded-full font-medium flex items-center gap-2 hover:bg-[var(--card)] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="p-3 rounded-full border border-[var(--border)] text-[var(--muted)]"
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[var(--card)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                <p>
                  I&apos;m a Software Developer at Jaguar Land Rover, working on embedded automotive systems.
                  I graduated from IIT Kanpur with a B.Tech degree, where I developed a strong foundation
                  in computer science and software engineering.
                </p>
                <p>
                  My expertise spans from low-level embedded systems programming in C/C++ to building
                  full-stack web applications. I&apos;ve worked on automotive software including SOTA controllers,
                  vehicle communication systems, and real-time data processing on FreeRTOS.
                </p>
                <p>
                  I&apos;ve also explored blockchain development at the University of Zurich and built
                  production-ready applications using Python, FastAPI, and React. When I&apos;m not coding,
                  you&apos;ll find me practicing yoga or exploring new technologies.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-2xl bg-[var(--card)] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">👩‍💻</div>
                    <p className="text-[var(--muted)]">Your photo here</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-[var(--background)] rounded-full border border-[var(--border)] shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0 }}
              >
                <span className="text-sm font-medium">IIT Kanpur</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-[var(--background)] rounded-full border border-[var(--border)] shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              >
                <span className="text-sm font-medium">50+ Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              I work with a diverse set of technologies to build robust and scalable applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-[var(--muted)] text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--card)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can work together.
            </p>
            <motion.a
              href="mailto:dabgarsaloni11@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-medium rounded-full"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
