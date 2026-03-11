"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            scrolled ? "glass-strong shadow-lg" : "bg-transparent"
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" data-cursor="Home">
              <motion.div
                className="relative w-10 h-10"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-[2px] rounded-[10px] bg-[var(--background)] flex items-center justify-center">
                  <span className="font-display text-lg font-bold gradient-text">S</span>
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <span className="font-display text-sm font-medium tracking-wide">SALONI</span>
                <span className="text-[var(--muted)] text-sm font-light ml-1.5">DABGAR</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href} data-cursor="">
                    <motion.div
                      className={`relative px-5 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}

              <div className="w-px h-6 bg-[var(--border)] mx-4" />

              <motion.a
                href="https://calendly.com/dabgarsaloni11/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-[var(--border)] hover:border-[var(--primary)] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cursor="Book"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-full border border-[var(--border)]"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 md:hidden">
            <motion.div className="absolute inset-0 bg-[var(--background)]/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
            <div className="relative h-full flex flex-col items-center justify-center px-6 sm:px-8">
              <nav className="flex flex-col items-center gap-2">
                {navItems.map((item, index) => (
                  <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ delay: index * 0.08 + 0.1 }}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-3xl sm:text-4xl font-display font-medium py-3 transition-colors ${pathname === item.href ? "gradient-text" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-12">
                <a href="https://calendly.com/dabgarsaloni11/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--border)] text-sm font-medium hover:border-[var(--primary)] transition-colors">
                  Book a Call
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
