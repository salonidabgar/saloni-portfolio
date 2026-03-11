"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/salonidabgar", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/saloni-dabgar-695864194/", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/salonidabgar", icon: Twitter },
  { name: "Email", href: "mailto:dabgarsaloni11@gmail.com", icon: Mail },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />

      <div className="bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-flex items-center gap-3 mb-4">
                <div className="relative w-9 h-9">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] opacity-80" />
                  <div className="absolute inset-[2px] rounded-[6px] bg-[var(--surface)] flex items-center justify-center">
                    <span className="font-display text-sm font-bold gradient-text">S</span>
                  </div>
                </div>
                <span className="font-display text-sm font-medium tracking-wide">SALONI DABGAR</span>
              </Link>

              <p className="text-[var(--muted)] text-sm mb-6 max-w-xs sm:max-w-sm leading-relaxed">
                Software Developer crafting embedded systems, full-stack applications, and blockchain solutions.
                Always learning, always building.
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">Pages</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[var(--muted-light)] hover:text-[var(--foreground)] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">Connect</h4>
              <ul className="space-y-2.5">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--muted-light)] hover:text-[var(--foreground)] transition-colors text-sm group"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--muted)]">
              &copy; {new Date().getFullYear()} Saloni Dabgar
            </p>

            <div className="flex items-center gap-1.5">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary-light)] hover:border-[var(--primary)]/30 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
