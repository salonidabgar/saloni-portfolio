"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/salonidabgar", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/salonidabgar", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/salonidabgar", icon: Twitter },
  { name: "Email", href: "mailto:hello@salonidabgar.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[var(--muted)]">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>by Saloni Dabgar</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted)]">
          <p>&copy; {new Date().getFullYear()} salonidabgar.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
