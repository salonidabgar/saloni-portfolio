"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Jaguar Land Rover",
    location: "India",
    period: "Jul 2023 - Present",
    type: "Full-time",
    description: "On-Board Software Team - Working on embedded automotive software including vehicle communication systems, SOTA updates, and real-time data processing.",
    achievements: [
      "E2E Headlamp usecase: Integrated E2B communication layer increasing vehicle communication by 10%",
      "Built SOTA controller with state-machine architecture in C++ using Boost.Beast",
      "Implemented secure HTTPS server with OpenSSL and SSL/TLS for automotive software updates",
      "Developed UDP serializer/deserializer for VSC-ABS communication using C++ on FreeRTOS",
      "Designed multi-threaded DataReceiver, DataExtractor and DataAssembler modules",
      "Created shared memory IPC mechanism optimizing real-time data flow",
    ],
    technologies: ["C", "C++", "FreeRTOS", "Linux", "Boost.Beast", "OpenSSL"],
    color: "from-emerald-500 to-teal-500",
    emoji: "🚗",
  },
  {
    title: "Blockchain Developer Intern",
    company: "University of Zurich, Switzerland",
    location: "Zurich, Switzerland",
    period: "Jun 2022 - Jul 2022",
    type: "Internship",
    description: "Blockchain Center, UZH - Worked on Application of Blockchain in Currency Exchange Platform.",
    achievements: [
      "Implemented asset smart contract in Solidity, deployed on UZHETH test network using Remix",
      "Created a liquidity pool on Uniswap V3 with Ethereum and self-created token",
      "Devised ERC-20 tokens using Solidity for token exchange facilitation",
      "Built front-end application using Next.js for buying, selling and redemption",
      "Implemented user authentication using web hooks from ThirdWebProvider",
      "Prepared thorough report on business, legal and market analysis",
    ],
    technologies: ["Solidity", "Next.js", "Ethereum", "Uniswap V3", "Remix", "Marlowe"],
    color: "from-purple-500 to-pink-500",
    emoji: "⛓️",
  },
  {
    title: "Research Intern",
    company: "SURGE, IIT Kanpur",
    location: "Kanpur, India",
    period: "Jun 2021 - Aug 2021",
    type: "Internship",
    description: "TaskFlow: Async Task Management Platform - Developed a production-ready task management system.",
    achievements: [
      "Developed task management system using FastAPI (Python) & React",
      "Implemented async/await RESTful APIs achieving 40% better performance with 1000+ concurrent users",
      "Created real-time notification system using WebSocket with Python's asyncio",
      "Achieved 90% test coverage using pytest and React Testing Library with 200+ test cases",
      "Implemented Redis caching strategy, reducing API response times by 45%",
      "Integrated CI/CD pipeline using GitHub Actions for automated testing and deployment",
    ],
    technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker", "WebSocket"],
    color: "from-blue-500 to-indigo-500",
    emoji: "📋",
  },
];

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Indian Institute of Technology Kanpur",
    period: "2019 - 2023",
    description: "Material Science and Engineering",
    achievements: ["CPI: 8/10", "SURGE Research", "Programming Club"],
    emoji: "🎓",
    color: "from-violet-500 to-purple-500",
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Delhi Public School, Eldeco, Lucknow",
    period: "2018",
    description: "Higher Secondary Education - Science Stream",
    achievements: ["93.6%"],
    emoji: "📚",
    color: "from-amber-500 to-orange-500",
  },
  {
    degree: "Class X (CBSE)",
    institution: "Delhi Public School, Eldeco, Lucknow",
    period: "2016",
    description: "Secondary Education",
    achievements: ["9.8 CGPA"],
    emoji: "🏫",
    color: "from-emerald-500 to-green-500",
  },
];

const certifications = [
  { name: "Deep Learning", issuer: "Coursera", year: "2023", emoji: "🧠" },
  { name: "Machine Learning Applications", issuer: "Coursera", year: "2023", emoji: "🤖" },
  { name: "Natural Language Processing", issuer: "Coursera", year: "2022", emoji: "💬" },
  { name: "Data Structures & Algorithms", issuer: "Coursera", year: "2021", emoji: "📊" },
];

export default function Experience() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 pattern-grid opacity-40" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-mono text-[var(--accent)] mb-4">
              CAREER
            </span>
            <h1 className="text-5xl md:text-6xl font-display mb-6">
              My <span className="text-accent-serif">journey</span>
            </h1>
            <p className="text-[var(--muted)] text-xl leading-relaxed">
              From IIT Kanpur to Jaguar Land Rover — a path through embedded systems,
              blockchain, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)]">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display">Work Experience</h2>
              <p className="text-[var(--muted)] text-sm">Professional roles & internships</p>
            </div>
          </motion.div>

          <div className="relative">
            {/* Timeline line - gradient */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-8 w-5 h-5 rounded-full bg-[var(--background)] border-4 border-[var(--primary)] hidden md:flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                  </div>

                  <motion.div
                    className="md:ml-20 p-6 md:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all group"
                    whileHover={{ y: -4 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl`}>
                          {exp.emoji}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-[var(--primary)] font-medium">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-[var(--muted)]">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)]">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-[var(--muted)] mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        Key Achievements
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-[var(--muted)] flex items-start gap-2">
                            <ArrowUpRight className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-[var(--primary)]" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs rounded-lg bg-[var(--background)] text-[var(--muted)] border border-[var(--border-light)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--card)]" />
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)]">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display">Education</h2>
              <p className="text-[var(--muted)] text-sm">Academic background</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="group h-full p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--secondary)]/40 transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl mb-4`}>
                    {edu.emoji}
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold group-hover:text-[var(--secondary)] transition-colors">
                      {edu.degree}
                    </h3>
                  </div>

                  <p className="text-[var(--primary)] text-sm font-medium mb-1">{edu.institution}</p>
                  <p className="text-xs text-[var(--muted)] mb-3">{edu.period}</p>
                  <p className="text-sm text-[var(--muted)] mb-4">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--primary)]">
              <Award className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display">Certifications</h2>
              <p className="text-[var(--muted)] text-sm">Continuous learning</p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="group p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all h-full"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{cert.emoji}</span>
                    <span className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-[var(--accent)] transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)]">{cert.issuer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Want to know more?
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
              Download my resume for a complete overview of my experience, skills, and achievements.
            </p>

            <motion.a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-xl"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
