"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";

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
  },
];

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Indian Institute of Technology Kanpur",
    period: "2019 - 2023",
    description: "Material Science and Engineering",
    achievements: ["CPI: 8/10", "SURGE Research Program", "Programming Club Member"],
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Delhi Public School, Eldeco, Lucknow",
    period: "2018",
    description: "Higher Secondary Education with focus on Science stream",
    achievements: ["Score: 93.6%"],
  },
  {
    degree: "Class X (CBSE)",
    institution: "Delhi Public School, Eldeco, Lucknow",
    period: "2016",
    description: "Secondary Education",
    achievements: ["CGPA: 9.8/10"],
  },
];

const certifications = [
  { name: "Deep Learning", issuer: "Coursera", year: "2023" },
  { name: "Machine Learning Applications", issuer: "Coursera", year: "2023" },
  { name: "Natural Language Processing", issuer: "Coursera", year: "2022" },
  { name: "Data Structures and Algorithms", issuer: "Coursera", year: "2021" },
];

export default function Experience() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg">
              A journey through my professional career, education, and continuous learning
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
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-[var(--primary)] border-4 border-[var(--background)] hidden md:block" />

                  <div className="md:ml-20 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-[var(--primary)] font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-[var(--muted)] mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-[var(--muted)] flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-[var(--card)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--secondary)]/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-[var(--muted)] whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-[var(--secondary)] font-medium mb-2">{edu.institution}</p>
                <p className="text-sm text-[var(--muted)] mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)]"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <Award className="w-8 h-8 text-[var(--accent)]" />
                  <ExternalLink className="w-4 h-4 text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-sm mb-1 leading-tight">{cert.name}</h3>
                <p className="text-xs text-[var(--muted)]">{cert.issuer}</p>
                <p className="text-xs text-[var(--accent)] mt-2">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
