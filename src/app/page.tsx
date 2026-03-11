"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Server, Cpu, Wrench, Sparkles, MapPin, ArrowDown, Github, Linkedin, Twitter, Mail, GraduationCap, Car, Terminal } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { BlurReveal } from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

const allTech = ["C", "C++", "Python", "TypeScript", "React", "FastAPI", "FreeRTOS", "Linux", "Docker", "PostgreSQL", "Redis", "Solidity", "OpenSSL", "AWS", "Git", "Node.js"];

const skills = [
  {
    name: "Languages",
    icon: Code2,
    items: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    gradient: "from-violet-500/20 to-purple-600/20",
    iconGradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Backend & Web",
    icon: Server,
    items: ["FastAPI", "React", "PostgreSQL", "Redis", "Node.js"],
    gradient: "from-emerald-500/20 to-teal-600/20",
    iconGradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Embedded Systems",
    icon: Cpu,
    items: ["FreeRTOS", "Linux", "CMake", "NGINX", "Sockets"],
    gradient: "from-orange-500/20 to-red-500/20",
    iconGradient: "from-orange-500 to-red-500",
  },
  {
    name: "DevOps & Tools",
    icon: Wrench,
    items: ["Git", "Docker", "GitLab CI/CD", "GenAI", "AWS"],
    gradient: "from-blue-500/20 to-indigo-600/20",
    iconGradient: "from-blue-500 to-indigo-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const cellVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="relative">
      {/* ===== HERO / BENTO SECTION ===== */}
      <section ref={heroRef} className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-strong" />

        {/* Animated orbs */}
        <motion.div
          className="orb w-[600px] h-[600px] top-[-200px] left-[-200px] bg-[var(--primary)]"
          style={{ opacity: 0.12 }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="orb w-[500px] h-[500px] bottom-[-100px] right-[-150px] bg-[var(--accent)]"
          style={{ opacity: 0.08 }}
          animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-4 md:grid-cols-12 gap-3 md:gap-4"
          >
            {/* === ROW 1: Name & Title (8 cols) + Visual (4 cols) === */}
            <motion.div
              variants={cellVariants}
              className="col-span-4 md:col-span-8 rounded-[24px] glass-card p-5 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[var(--primary)]/5 to-transparent rounded-full blur-3xl" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="status-available mb-6 w-fit"
              >
                <span>Open to opportunities</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold tracking-tight leading-[0.95] mb-5">
                <span className="text-[var(--foreground)]">Saloni</span>{" "}
                <span className="gradient-text">Dabgar</span>
              </h1>

              <p className="text-base md:text-lg text-[var(--muted-light)] max-w-lg leading-relaxed mb-8">
                Software Developer crafting{" "}
                <span className="text-[var(--foreground)] font-medium">embedded systems</span>,{" "}
                <span className="text-[var(--foreground)] font-medium">full-stack apps</span>, and{" "}
                <span className="text-[var(--foreground)] font-medium">blockchain solutions</span>.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link href="/projects">
                  <MagneticButton
                    className="group px-6 py-3 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-full text-sm flex items-center gap-2 hover:shadow-xl transition-shadow"
                    data-cursor="View"
                  >
                    View My Work
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </MagneticButton>
                </Link>
              </div>
            </motion.div>

            {/* Visual / Abstract art cell */}
            <motion.div
              variants={cellVariants}
              className="col-span-4 md:col-span-4 rounded-[24px] glass-card overflow-hidden relative min-h-[280px] md:min-h-0"
            >
              {/* Animated gradient mesh as visual */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full bg-[conic-gradient(from_0deg,var(--primary)_0%,var(--secondary)_25%,var(--accent)_50%,var(--primary)_75%,var(--secondary)_100%)] opacity-[0.15]" />
                </motion.div>
                <div className="absolute inset-0 bg-[var(--card)]/60 backdrop-blur-xl" />
              </div>

              {/* Content overlay */}
              <div className="relative h-full flex flex-col items-center justify-center p-6">
                <motion.div
                  className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] flex items-center justify-center mb-4"
                  animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Terminal className="w-10 h-10 md:w-14 md:h-14 text-white" />
                </motion.div>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1.5 glass rounded-full text-[11px] font-medium flex items-center gap-1.5">
                    <GraduationCap className="w-3 h-3" /> IIT Kanpur
                  </span>
                  <span className="px-3 py-1.5 glass rounded-full text-[11px] font-medium flex items-center gap-1.5">
                    <Car className="w-3 h-3" /> JLR
                  </span>
                </div>
              </div>
            </motion.div>

            {/* === ROW 2: Stats + Currently At + Socials === */}
            <motion.div
              variants={cellVariants}
              className="col-span-4 md:col-span-3 rounded-[24px] glass-card p-6 flex flex-col justify-center hover:border-[var(--border-hover)] transition-colors"
            >
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "2+", label: "Years" },
                  { value: "50+", label: "Projects" },
                  { value: "IIT", label: "Kanpur" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl md:text-2xl font-display font-bold gradient-text">{stat.value}</div>
                    <div className="text-[10px] text-[var(--muted)] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={cellVariants}
              className="col-span-4 md:col-span-5 rounded-[24px] glass-card p-6 flex items-center gap-5 hover:border-[var(--border-hover)] transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-[var(--muted)] uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] animate-pulse" />
                  Currently at
                </div>
                <p className="font-display text-lg font-semibold truncate">Jaguar Land Rover</p>
                <p className="text-[var(--muted)] text-xs">On-Board Software Team</p>
              </div>
            </motion.div>

            <motion.div
              variants={cellVariants}
              className="col-span-4 md:col-span-4 rounded-[24px] glass-card p-6 flex items-center justify-between hover:border-[var(--border-hover)] transition-colors"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--primary-light)]" />
                <div>
                  <p className="font-display font-semibold text-sm">India</p>
                  <p className="text-[var(--muted)] text-[11px]">Remote-friendly</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
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
                    className="p-2 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary-light)] hover:border-[var(--primary)]/30 transition-all"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center mt-10 md:mt-14"
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
        </motion.div>
      </section>

      {/* ===== TECH MARQUEE ===== */}
      <div className="relative py-6 overflow-hidden border-y border-[var(--border)]">
        <div className="absolute inset-0 bg-[var(--surface)]" />
        <div className="relative flex">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...allTech, ...allTech].map((tech, i) => (
              <span key={i} className="text-sm text-[var(--muted)] font-mono flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--primary)]/50" />
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===== ABOUT + SKILLS SECTION ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--background)]" />
        <div className="absolute inset-0 pattern-dots" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* About text - 3 cols */}
            <div className="lg:col-span-3">
              <BlurReveal>
                <span className="inline-block text-xs font-mono text-[var(--accent)] mb-4 tracking-wider">
                  01 / ABOUT
                </span>
              </BlurReveal>

              <BlurReveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-[1.05] tracking-tight">
                  Building software<br />
                  that <span className="text-accent-serif">matters</span>
                </h2>
              </BlurReveal>

              <BlurReveal delay={0.2}>
                <div className="space-y-5 text-[var(--muted-light)] text-lg leading-relaxed">
                  <p>
                    I&apos;m a Software Developer at <span className="text-[var(--foreground)] font-medium">Jaguar Land Rover</span>,
                    working on embedded automotive systems that power the vehicles of tomorrow.
                  </p>
                  <p>
                    With a B.Tech from <span className="text-[var(--foreground)] font-medium">IIT Kanpur</span>,
                    I bridge the gap between low-level embedded programming in C/C++ and modern full-stack development.
                    From SOTA controllers to blockchain platforms, I tackle complex technical challenges.
                  </p>
                  <p>
                    Beyond code, I&apos;m passionate about <span className="text-[var(--foreground)] font-medium">yoga</span> and
                    personal growth &mdash; believing that a balanced mind creates better software.
                  </p>
                </div>
              </BlurReveal>

              <BlurReveal delay={0.3}>
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
                    Read my blog <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </BlurReveal>
            </div>

            {/* Skills - 2 cols */}
            <div className="lg:col-span-2">
              <BlurReveal delay={0.15}>
                <span className="inline-block text-xs font-mono text-[var(--accent)] mb-6 tracking-wider">
                  02 / SKILLS
                </span>
              </BlurReveal>

              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <BlurReveal key={skill.name} delay={0.2 + index * 0.08}>
                    <motion.div
                      className="group p-5 rounded-2xl glass-card hover:border-[var(--border-hover)] transition-all relative overflow-hidden"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      <div className="relative flex items-start gap-4">
                        <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${skill.iconGradient} flex items-center justify-center`}>
                          <skill.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold mb-2">{skill.name}</h3>
                          <div className="flex flex-wrap gap-1.5">
                            {skill.items.map((item) => (
                              <span
                                key={item}
                                className="px-2 py-0.5 text-[11px] rounded-md bg-white/[0.03] text-[var(--muted)] border border-[var(--border)] hover:border-[var(--primary)]/30 hover:text-[var(--primary-light)] transition-colors"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </BlurReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECT TEASER ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--surface)]" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <BlurReveal>
            <div className="flex items-center justify-between mb-10">
              <span className="text-xs font-mono text-[var(--accent)] tracking-wider">03 / FEATURED WORK</span>
              <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                View all <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <motion.div
              className="group rounded-2xl glass-card overflow-hidden hover:border-[var(--border-hover)] transition-all"
              whileHover={{ y: -4 }}
            >
              <div className="grid md:grid-cols-2">
                {/* Project visual */}
                <div className="h-64 md:h-auto bg-gradient-to-br from-orange-500 to-red-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Car className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                </div>

                {/* Project info */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="px-2.5 py-1 text-[11px] rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium w-fit mb-4">
                    Embedded Systems
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-[var(--primary-light)] transition-colors">
                    Software Over-The-Air (SOTA) Controller
                  </h3>
                  <p className="text-[var(--muted-light)] leading-relaxed mb-6">
                    Built automotive SOTA controller with state-machine architecture for secure vehicle software updates.
                    Implemented with Boost.Beast and OpenSSL for encrypted communication.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["C++", "Boost.Beast", "OpenSSL", "SSL/TLS", "Linux"].map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <Link href="/projects" className="inline-flex items-center gap-2 text-[var(--primary-light)] font-medium text-sm group-hover:gap-3 transition-all">
                    View all projects <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </BlurReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />

      {/* ===== CTA SECTION ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />

        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <BlurReveal>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-sm mb-8"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              Let&apos;s connect
            </motion.div>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight tracking-tight">
              Let&apos;s build something<br />
              <span className="text-accent-serif">amazing</span> together
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <p className="text-[var(--muted-light)] text-lg mb-10 max-w-xl mx-auto">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.3}>
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

              <Link href="/blog">
                <MagneticButton
                  className="px-8 py-4 rounded-full font-medium text-sm border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary-light)] transition-all"
                  data-cursor="Read"
                >
                  Read My Blog
                </MagneticButton>
              </Link>
            </div>
          </BlurReveal>

          {/* Social row */}
          <BlurReveal delay={0.4}>
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
