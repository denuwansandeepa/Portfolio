"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";

export default function Footer() {
  const [sriLankaTime, setSriLankaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setSriLankaTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Col 1: Brand & bio */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-600 to-accent-cyan flex items-center justify-center font-display font-bold text-white text-base shadow-glow-violet">
                DS
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                {profile.displayName}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-sans">
              Full-Stack Web & Mobile Developer crafting resilient enterprise systems and immersive digital experiences. Currently Associate Software Engineer at Bright Solutions.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
              <span>{profile.location.label}</span>
              <span className="text-white/20">|</span>
              <span className="text-emerald-400 font-medium">
                {sriLankaTime ? `${sriLankaTime} (GMT+5:30)` : "Sri Lanka"}
              </span>
            </div>
          </div>

          {/* Col 2: Live Production Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-semibold text-xs tracking-wider text-emerald-400 uppercase font-mono">
              Live Production Links
            </h4>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <a
                  href="https://www.dvccorporation.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent-cyan transition-colors"
                >
                  dvccorporation.lk ↗
                </a>
              </li>
              <li>
                <a
                  href="https://dearoinvestment.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent-cyan transition-colors"
                >
                  dearoinvestment.com ↗
                </a>
              </li>
              <li>
                <a
                  href="https://dearoventurecapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent-cyan transition-colors"
                >
                  dearoventurecapital.com ↗
                </a>
              </li>
              <li>
                <a
                  href="https://constmarine.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent-cyan transition-colors"
                >
                  constmarine.com ↗
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dearodigital.dearo_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Dearo Digital (Google Play) ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-display font-semibold text-xs tracking-wider text-slate-300 uppercase font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About Story
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-white transition-colors">
                  Technical Arsenal
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-white transition-colors">
                  Career Trajectory
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-xs tracking-wider text-slate-300 uppercase font-mono">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Direct: {profile.contact.email}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {profile.displayName}. Built with Next.js 14, Three.js & Tailwind CSS.</p>

          <MagneticButton
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}

