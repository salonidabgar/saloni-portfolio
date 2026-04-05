"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, Github, Linkedin, Twitter, Mail, BookOpen, Cpu, Globe, Brain } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { BlurReveal } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import SkillConstellation from "@/components/SkillConstellation";

const featuredProjects = [
  {
    tag: "Embedded Systems",
    title: "Software Over-The-Air (SOTA) Controller",
    description:
      "When your Jaguar downloads a software update at 2am, this is the system I built. State-machine architecture for secure vehicle software updates with encrypted communication over Boost.Beast and OpenSSL.",
    tech: ["C++", "Boost.Beast", "OpenSSL", "SSL/TLS", "Linux"],
    icon: Cpu,
    accent: "from-[var(--primary)] to-[var(--primary-dark)]",
  },
  {
    tag: "Full-Stack",
    title: "Blockchain-Based Document Verification",
    description:
      "A decentralized platform for tamper-proof document verification. Smart contracts handle the trust; the web app handles the humans.",
    tech: ["Solidity", "React", "Node.js", "PostgreSQL", "Docker"],
    icon: Globe,
    accent: "from-[var(--accent)] to-[var(--accent-warm)]",
  },
];

const currentlyReading = [
  { title: "Sapiens", author: "Yuval Noah Harari" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
  { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className="relative">
      {/* ===== HERO — CINEMATIC STATEMENT ===== */}
      <section ref={heroRef} className="min-h-screen relative overflow-hidden flex items-center">
        <div className="absolute inset-0 mesh-gradient-strong" />

        {/* Slow organic ambient */}
        <motion.div
          className="absolute w-[800px] h-[800px] top-[-300px] right-[-200px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(61,122,90,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bottom-[-200px] left-[-100px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,168,83,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-display font-bold tracking-tight leading-[0.9] mb-8">
              <span className="text-[var(--foreground)]">Saloni</span>
              <br />
              <span className="gradient-text">Dabgar</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* The one-liner that stops scrolling */}
            <p className="text-xl md:text-2xl lg:text-[1.65rem] text-[var(--muted-light)] max-w-2xl leading-relaxed mb-12">
              I write software that runs inside{" "}
              <span className="text-[var(--foreground)] font-medium">Jaguar Land Rover</span> vehicles.
              <br className="hidden md:block" />{" "}
              I study the systems that run inside{" "}
              <span className="text-[var(--accent-warm)]">people</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/projects">
              <MagneticButton
                className="group px-7 py-3.5 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-full text-sm flex items-center gap-2 hover:shadow-xl transition-shadow"
                data-cursor="View"
              >
                View My Work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </Link>

            <Link href="/thinking">
              <MagneticButton
                className="px-7 py-3.5 rounded-full font-medium text-sm border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary-light)] transition-all"
                data-cursor="Read"
              >
                Read My Thinking
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Minimal social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3 mt-12"
          >
            {[
              { icon: Github, href: "https://github.com/salonidabgar" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/saloni-dabgar-695864194/" },
              { icon: Twitter, href: "https://twitter.com/salonidabgar" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary-light)] transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[var(--muted)]"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== "WHY I BUILD" — FULL-WIDTH STATEMENT ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--surface)]" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <BlurReveal>
            <blockquote className="text-2xl md:text-4xl lg:text-[2.5rem] font-serif italic text-[var(--foreground)] leading-snug tracking-tight">
              &ldquo;Software is the only medium where you can simulate nature, model minds,
              and move metal&thinsp;&mdash;&thinsp;sometimes all at once.&rdquo;
            </blockquote>
          </BlurReveal>
        </div>
      </section>

      {/* ===== ABOUT — NARRATIVE, NOT RESUME ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="absolute inset-0 pattern-dots" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Narrative — 3 cols */}
            <div className="lg:col-span-3">
              <BlurReveal>
                <span className="inline-block text-xs font-mono text-[var(--accent)] mb-4 tracking-wider">
                  ABOUT
                </span>
              </BlurReveal>

              <BlurReveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-10 leading-[1.05] tracking-tight">
                  Systems<br />
                  <span className="text-accent-serif">thinker</span>
                </h2>
              </BlurReveal>

              <div className="space-y-6 text-[var(--muted-light)] text-lg leading-[1.8]">
                <BlurReveal delay={0.2}>
                  <p>
                    There&apos;s something deeply satisfying about code that lives in physical objects&thinsp;&mdash;&thinsp;firmware
                    that executes thousands of times a second inside a moving vehicle, silent and invisible. At{" "}
                    <span className="text-[var(--foreground)] font-medium">Jaguar Land Rover</span>, I build the
                    embedded systems that make that happen. Before that,{" "}
                    <span className="text-[var(--foreground)] font-medium">IIT Kanpur</span> taught me to think
                    in first principles.
                  </p>
                </BlurReveal>

                <BlurReveal delay={0.3}>
                  <p>
                    But I don&apos;t just build software. I think about <em>why</em> we build things at all.
                    I read philosophy, study how evolution shaped the human mind, and find that the same
                    patterns appear everywhere&thinsp;&mdash;&thinsp;in natural selection, in neural networks, in the way
                    a well-designed state machine converges on the right answer.
                  </p>
                </BlurReveal>

                <BlurReveal delay={0.4}>
                  <p>
                    I train my body the way I train systems: deliberately. Gym for strength.
                    Yoga for stillness. Calisthenics for control. Badminton for play.
                    I find that the same principles apply&thinsp;&mdash;&thinsp;progressive overload,
                    consistency, and knowing when to rest.
                  </p>
                </BlurReveal>
              </div>

              <BlurReveal delay={0.5}>
                <div className="flex items-center gap-6 mt-10">
                  <Link
                    href="/experience"
                    className="inline-flex items-center gap-2 text-[var(--primary-light)] font-medium link-underline"
                  >
                    View my journey <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/thinking"
                    className="inline-flex items-center gap-2 text-[var(--muted-light)] font-medium hover:text-[var(--foreground)] transition-colors"
                  >
                    Read my thinking <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </BlurReveal>
            </div>

            {/* Right column — reading shelf + signals */}
            <div className="lg:col-span-2">
              <BlurReveal delay={0.2}>
                <div className="glass-card rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-2 mb-5">
                    <BookOpen className="w-4 h-4 text-[var(--accent)]" />
                    <span className="text-xs font-mono text-[var(--accent)] tracking-wider">CURRENTLY READING</span>
                  </div>
                  <div className="space-y-4">
                    {currentlyReading.map((book) => (
                      <div key={book.title} className="group">
                        <p className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--primary-light)] transition-colors">
                          {book.title}
                        </p>
                        <p className="text-xs text-[var(--muted)]">{book.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurReveal>

              <BlurReveal delay={0.3}>
                <div className="glass-card rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-2 mb-5">
                    <Brain className="w-4 h-4 text-[var(--primary-light)]" />
                    <span className="text-xs font-mono text-[var(--primary-light)] tracking-wider">INTERESTS</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Philosophy", "Evolution", "Psychology",
                      "Nature", "Yoga", "Calisthenics",
                      "Embedded Systems", "AI", "Blockchain",
                    ].map((interest) => (
                      <span key={interest} className="tag">{interest}</span>
                    ))}
                  </div>
                </div>
              </BlurReveal>

              <BlurReveal delay={0.4}>
                <div className="glass-card rounded-2xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-display font-bold gradient-text">2+</div>
                      <div className="text-[10px] text-[var(--muted)] mt-0.5">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold gradient-text">IIT</div>
                      <div className="text-[10px] text-[var(--muted)] mt-0.5">Kanpur</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold gradient-text">JLR</div>
                      <div className="text-[10px] text-[var(--muted)] mt-0.5">On-Board SW</div>
                    </div>
                  </div>
                </div>
              </BlurReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS CONSTELLATION ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--surface)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <BlurReveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono text-[var(--accent)] tracking-wider block mb-3">SKILLS</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                  How it all <span className="text-accent-serif">connects</span>
                </h2>
              </div>
              <p className="hidden md:block text-sm text-[var(--muted)] max-w-xs text-right">
                Hover to explore. Each node is a skill, each line a project that used them together.
              </p>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <div className="glass-card rounded-2xl overflow-hidden">
              <SkillConstellation />
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />

      {/* ===== FEATURED PROJECTS — CASE STUDIES ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--surface)]" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <BlurReveal>
            <div className="flex items-center justify-between mb-14">
              <div>
                <span className="text-xs font-mono text-[var(--accent)] tracking-wider block mb-3">FEATURED WORK</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                  Projects that <span className="text-accent-serif">matter</span>
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                View all <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BlurReveal>

          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <BlurReveal key={project.title} delay={index * 0.15}>
                <motion.div
                  className="group rounded-2xl glass-card overflow-hidden hover:border-[var(--border-hover)] transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="grid md:grid-cols-2">
                    {/* Project visual */}
                    <div className={`h-64 md:h-auto bg-gradient-to-br ${project.accent} relative overflow-hidden min-h-[280px]`}>
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <project.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                        </motion.div>
                      </div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                    </div>

                    {/* Project info */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <span className="px-2.5 py-1 text-[11px] rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium w-fit mb-4">
                        {project.tag}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-[var(--primary-light)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[var(--muted-light)] leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </BlurReveal>
            ))}
          </div>

          <BlurReveal delay={0.3}>
            <div className="mt-10 text-center sm:hidden">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                View all projects <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BlurReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />

      {/* ===== CTA — "LET'S THINK TOGETHER" ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />

        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <BlurReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight tracking-tight">
              Let&apos;s think<br />
              <span className="text-accent-serif">together</span>
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <p className="text-[var(--muted-light)] text-lg mb-10 max-w-xl mx-auto">
              Building something ambitious? Exploring an idea at the intersection of
              technology and human experience? I&apos;d love to hear from you.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                as="a"
                href="mailto:dabgarsaloni11@gmail.com"
                className="group px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-full flex items-center gap-2 text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-shadow"
                data-cursor="Email"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>

              <MagneticButton
                as="a"
                href="https://calendly.com/dabgarsaloni11/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-medium text-sm border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary-light)] transition-all"
                data-cursor="Book"
              >
                Book a Call
              </MagneticButton>
            </div>
          </BlurReveal>

          {/* Social row */}
          <BlurReveal delay={0.3}>
            <div className="flex items-center justify-center gap-3 mt-12">
              {[
                { icon: Github, href: "https://github.com/salonidabgar", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/saloni-dabgar-695864194/", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/salonidabgar", label: "Twitter" },
                { icon: Mail, href: "mailto:dabgarsaloni11@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary-light)] hover:border-[var(--primary)]/30 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </BlurReveal>
        </div>
      </section>
    </div>
  );
}
