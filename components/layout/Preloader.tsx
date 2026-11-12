"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        // Accelerate smoothly
        const step = Math.max(1, Math.floor((100 - prev) / 6));
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#06080d] text-white select-none overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-[120px] pointer-events-none" />

          {/* Center Brand & Counter */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8 font-mono text-xs uppercase tracking-widest text-primary-400"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-primary-400 animate-ping" />
              <span>Denuwan Sandeepa // Portfolio System</span>
            </motion.div>

            {/* Giant Counter */}
            <div className="flex items-baseline font-display font-extrabold text-7xl sm:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">
              <span>{progress}</span>
              <span className="text-3xl sm:text-5xl text-primary-400 font-mono ml-2">%</span>
            </div>

            {/* Progress Track */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full mt-8 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 via-accent-cyan to-primary-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Status indicator */}
            <p className="mt-4 font-mono text-xs text-slate-500 tracking-wider">
              {progress < 40
                ? "INITIALIZING THREE.JS CORE..."
                : progress < 80
                ? "LOADING INTERACTIVE SYSTEMS..."
                : "READY TO LAUNCH"}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

