"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Live Sites", href: "#live-links" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`flex items-center justify-between gap-6 px-5 py-3 rounded-full border border-white/10 dark:border-white/[0.08] backdrop-blur-2xl transition-all duration-300 shadow-glass-sm max-w-5xl w-full ${
            scrolled
              ? "bg-surface/85 dark:bg-slate-950/80 shadow-2xl py-2.5"
              : "bg-surface/40 dark:bg-slate-900/40"
          }`}
        >
          {/* Logo / Brand */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-glow-violet transition-transform group-hover:scale-105">
              <Image
                src="/images/denuwan.jpg"
                alt="Denuwan Sandeepa"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-foreground group-hover:text-primary-400 transition-colors">
                Denuwan
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 text-xs font-medium text-slate-300 hover:text-white transition-colors relative rounded-full hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <MagneticButton
              href={profile.cvUrl}
              download="CV-Denuwan-Sandeepa.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-primary-400" />
              <span>Resume</span>
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-600 to-accent-cyan text-white shadow-glow-violet hover:opacity-95 transition-all"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/5 border border-white/10 md:hidden text-foreground"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/70 flex flex-col items-center justify-center p-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-display text-2xl font-bold text-foreground hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
                <a
                  href={profile.cvUrl}
                  download="CV-Denuwan-Sandeepa.pdf"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/20 text-sm font-medium text-foreground bg-white/5"
                >
                  <FileDown className="w-4 h-4 text-primary-400" />
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-cyan text-sm font-semibold text-white shadow-glow-violet"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

