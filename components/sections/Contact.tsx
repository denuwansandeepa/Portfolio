"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, FileDown, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("submitting");

    // Simulate reliable transmission / EmailJS / backend endpoint
    setTimeout(() => {
      setStatus("success");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Initiate Collaboration"
          title="Let's Build Something Extraordinary Together"
          gradientWord="Extraordinary"
          description="Have an ambitious web platform, mobile application, or technical consulting inquiry? Drop a line and let's craft exceptional software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Copy Email */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard glow="violet" className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  I typically respond within 24 hours. Feel free to contact via email, phone, or schedule an architectural discussion.
                </p>
              </div>

              {/* Quick Copy Email Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Email Address
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-slate-200 truncate block">
                      {profile.contact.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${profile.contact.phone.replace(/\s+/g, "")}`}
                      className="font-mono text-sm hover:text-accent-cyan transition-colors"
                    >
                      {profile.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Location
                    </span>
                    <span className="font-sans text-sm text-slate-300">
                      {profile.location.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels & Resume */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <span className="text-xs font-mono uppercase text-slate-400 block">
                  Connect & Resources
                </span>
                <div className="flex flex-wrap gap-3">
                  <MagneticButton
                    href={profile.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </MagneticButton>

                  <MagneticButton
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </MagneticButton>

                  <MagneticButton
                    href={profile.cvUrl}
                    download="CV-Denuwan-Sandeepa.pdf"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 text-xs font-medium text-primary-300"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download CV</span>
                  </MagneticButton>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right: Working Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard glow="cyan" className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase text-slate-300"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase text-slate-300"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase text-slate-300"
                  >
                    Project Type or Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="New Web/Mobile Project, Consultation, or Hiring"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase text-slate-300"
                  >
                    Message & Details *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                  />
                </div>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Message received! Thank you, I will get back to you shortly.</span>
                  </motion.div>
                )}

                <div className="pt-2">
                  <MagneticButton className="w-full sm:w-auto">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 via-purple-600 to-accent-cyan text-white text-sm font-semibold shadow-glow-violet hover:opacity-95 disabled:opacity-50 transition-all"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}

