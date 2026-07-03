"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, Github, Linkedin, Twitter, Mail, BookOpen, Cpu, Globe, Brain, CheckSquare, Zap } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { BlurReveal } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import SkillConstellation from "@/components/SkillConstellation";
import SplitText from "@/components/SplitText";

const featuredProjects = [
  {
    tag: "Embedded Systems",
    title: "SOTA Controller",
    subtitle: "Jaguar Land Rover",
    description:
      "When your Jaguar downloads a software update at 2am, this is the system I built.",
    tech: ["C++", "Boost.Beast", "OpenSSL", "Linux"],
    icon: Cpu,
    gradient: "from-emerald-500 to-teal-400",
    number: "01",
  },
  {
    tag: "Blockchain",
    title: "Currency Exchange",
    subtitle: "University of Zurich",
    description:
      "Smart contracts handle the trust. Liquidity pools handle the flow. Humans handle the rest.",
    tech: ["Solidity", "React", "Ethereum", "Uniswap"],
    icon: Globe,
    gradient: "from-amber-500 to-orange-400",
    number: "02",
  },
  {
    tag: "Full-Stack",
    title: "TaskFlow",
    subtitle: "SURGE, IIT Kanpur",
    description:
      "1000+ concurrent users, 40% faster than baseline. Async task orchestration that teaches you how systems break.",
    tech: ["FastAPI", "React", "PostgreSQL", "Redis"],
    icon: CheckSquare,
    gradient: "from-pink-500 to-rose-400",
    number: "03",
  },
  {
    tag: "Embedded",
    title: "E2E Headlamp System",
    subtitle: "Jaguar Land Rover",
    description:
      "10% efficiency gain in vehicle communication — small number, massive scale across every vehicle on the road.",
    tech: ["C", "Linux", "Vehicle Comms"],
    icon: Zap,
    gradient: "from-violet-500 to-purple-400",
    number: "04",
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

        {/* Vibrant ambient orbs */}
        <motion.div
          className="absolute w-[800px] h-[800px] top-[-300px] right-[-200px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, rgba(6,214,160,0.04) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bottom-[-200px] left-[-100px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,107,107,0.08) 0%, rgba(236,72,153,0.04) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] top-[40%] left-[30%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Name — character split reveal */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-display font-bold tracking-tight leading-[0.9] mb-8">
              <span className="text-[var(--foreground)]">
                <SplitText delay={0.2} stagger={0.04}>Saloni</SplitText>
              </span>
              <br />
              <span className="gradient-text">
                <SplitText delay={0.5} stagger={0.04}>Dabgar</SplitText>
              </span>
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
              <span className="text-[var(--vivid-coral)]">people</span>.
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

            <Link href="/blog">
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
              { icon: Github, href: "https://github.com/salonidabgar", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/saloni-dabgar-695864194/", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com/salonidabgar", label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
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
                    href="/blog"
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

      {/* ===== FEATURED PROJECTS — HORIZONTAL SCROLL ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--surface)]" />

        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <BlurReveal>
              <div className="flex items-center justify-between">
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
          </div>

          {/* Horizontal scroll container */}
          <div className="overflow-x-auto scrollbar-none" data-lenis-prevent>
            <div className="flex gap-6 px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4" style={{ width: "max-content" }}>
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group w-[340px] md:w-[420px] flex-shrink-0"
                >
                  <motion.div
                    className="h-full rounded-2xl glass-card overflow-hidden hover:border-[var(--border-hover)] transition-all"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient header with number */}
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />

                      {/* Large number */}
                      <span className="absolute top-4 left-5 text-6xl font-display font-bold text-white/10">
                        {project.number}
                      </span>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center"
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                        >
                          <project.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-1 text-[10px] rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium uppercase tracking-wider">
                          {project.tag}
                        </span>
                        <span className="text-[10px] text-[var(--muted)]">{project.subtitle}</span>
                      </div>

                      <h3 className="text-xl font-display font-bold mb-3 group-hover:text-[var(--primary-light)] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[var(--muted-light)] leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* View all card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-[200px] md:w-[260px] flex-shrink-0 flex items-center justify-center"
              >
                <Link
                  href="/projects"
                  className="group flex flex-col items-center gap-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  <div className="w-14 h-14 rounded-full border border-[var(--border)] group-hover:border-[var(--primary)] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">View all</span>
                </Link>
              </motion.div>
            </div>
          </div>
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
