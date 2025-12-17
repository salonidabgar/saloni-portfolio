"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--card)]/80 backdrop-blur-lg border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center"
              >
                <Code2 className="w-5 h-5 text-white" />
              </motion.div>
              <span className="font-bold text-lg">Saloni</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "text-[var(--primary)]"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-[var(--primary)]/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
              <motion.a
                href="mailto:hello@salonidabgar.com"
                className="ml-4 px-5 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-medium rounded-full"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-[var(--card-hover)]"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--background)] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-2xl font-semibold py-3 border-b border-[var(--border)] ${
                      pathname === item.href
                        ? "text-[var(--primary)]"
                        : "text-[var(--foreground)]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="mailto:hello@salonidabgar.com"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-center font-medium rounded-full"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
