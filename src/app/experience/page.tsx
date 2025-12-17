"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description: "Leading development of cloud-native applications, mentoring junior developers, and implementing best practices for scalable architecture.",
    achievements: [
      "Led migration to microservices architecture, improving system reliability by 40%",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored team of 5 junior developers",
      "Architected real-time data processing system handling 1M+ events/day",
    ],
    technologies: ["React", "Node.js", "AWS", "Kubernetes", "PostgreSQL"],
  },
  {
    title: "Software Engineer",
    company: "Digital Solutions Co.",
    location: "Austin, TX",
    period: "2020 - 2022",
    type: "Full-time",
    description: "Developed and maintained full-stack web applications, collaborated with cross-functional teams to deliver high-quality products.",
    achievements: [
      "Built customer-facing dashboard serving 100K+ daily users",
      "Reduced API response time by 50% through optimization",
      "Implemented automated testing increasing code coverage to 85%",
      "Contributed to open-source projects used by the community",
    ],
    technologies: ["TypeScript", "React", "Python", "Django", "MongoDB"],
  },
  {
    title: "Junior Developer",
    company: "StartUp Labs",
    location: "Remote",
    period: "2019 - 2020",
    type: "Full-time",
    description: "Started my professional journey building MVPs and learning industry best practices in a fast-paced startup environment.",
    achievements: [
      "Developed MVP that helped secure $2M seed funding",
      "Built responsive web applications from scratch",
      "Participated in agile development processes",
      "Collaborated with designers to implement pixel-perfect UIs",
    ],
    technologies: ["JavaScript", "React", "Node.js", "MySQL", "Git"],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    period: "2017 - 2019",
    description: "Specialized in Distributed Systems and Machine Learning",
    achievements: ["GPA: 3.9/4.0", "Research Assistant in AI Lab", "Published 2 research papers"],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2013 - 2017",
    description: "Foundation in computer science fundamentals and software engineering",
    achievements: ["Dean's List", "Programming Club President", "Hackathon Winner 2016"],
  },
];

const certifications = [
  { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2023" },
  { name: "Google Cloud Professional Developer", issuer: "Google Cloud", year: "2022" },
  { name: "Kubernetes Application Developer", issuer: "CNCF", year: "2022" },
  { name: "MongoDB Developer Certification", issuer: "MongoDB Inc.", year: "2021" },
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
