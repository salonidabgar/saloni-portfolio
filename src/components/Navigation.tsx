"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        {/* Background with blur */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? "bg-[var(--card)]/80 backdrop-blur-xl border-b border-[var(--border)]"
              : "bg-transparent"
          }`}
        />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className="relative w-10 h-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] p-[2px]">
                  <div className="w-full h-full rounded-[10px] bg-[var(--background)] flex items-center justify-center">
                    <span className="font-display text-xl font-semibold gradient-text">S</span>
                  </div>
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <span className="font-display text-lg tracking-tight">Saloni</span>
                <span className="text-[var(--muted)] text-sm ml-1 font-light">Dabgar</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-[var(--card)]/50 backdrop-blur-sm rounded-full p-1.5 border border-[var(--border-light)]">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                          isActive
                            ? "text-[var(--foreground)]"
                            : "text-[var(--muted)] hover:text-[var(--foreground)]"
                        }`}
                        onHoverStart={() => !isActive && setActiveSection(index)}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-pill"
                            className="absolute inset-0 bg-[var(--card)] rounded-full shadow-sm border border-[var(--border)] -z-10"
                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                          />
                        )}
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              <motion.a
                href="mailto:dabgarsaloni11@gmail.com"
                className="ml-6 group flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-full overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <motion.div
                  className="absolute inset-0 bg-[var(--primary)]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-[var(--card)] border border-[var(--border)]"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[var(--background)]/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-[var(--card)] border-l border-[var(--border)] shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-8">
                {/* Nav Links */}
                <nav className="flex-1">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between py-4 px-4 rounded-xl transition-colors ${
                            pathname === item.href
                              ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                              : "text-[var(--foreground)] hover:bg-[var(--card-hover)]"
                          }`}
                        >
                          <span className="text-xl font-medium">{item.name}</span>
                          {pathname === item.href && (
                            <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="mailto:dabgarsaloni11@gmail.com"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-xl"
                  >
                    Get in Touch
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </motion.div>

                {/* Social hint */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-sm text-[var(--muted)] mt-6"
                >
                  Based in India
                </motion.p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
