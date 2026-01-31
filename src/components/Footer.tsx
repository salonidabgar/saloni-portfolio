"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/salonidabgar", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/salonidabgar", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/salonidabgar", icon: Twitter },
  { name: "Email", href: "mailto:dabgarsaloni11@gmail.com", icon: Mail },
];

const navLinks = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />

      <div className="bg-[var(--card)]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] p-[2px]">
                    <div className="w-full h-full rounded-[10px] bg-[var(--card)] flex items-center justify-center">
                      <span className="font-display text-lg font-semibold gradient-text">S</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-display text-lg">Saloni Dabgar</span>
                </div>
              </Link>

              <p className="text-[var(--muted)] mb-6 max-w-sm leading-relaxed">
                Software Developer crafting embedded systems, full-stack applications, and blockchain solutions. Always learning, always building.
              </p>

              <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Connect</h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm group"
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

          {/* Bottom bar */}
          <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--muted)]">
              &copy; {new Date().getFullYear()} Saloni Dabgar. All rights reserved.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
