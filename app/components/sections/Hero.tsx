'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Terminal, Code2 } from 'lucide-react';
import ParticleCanvas from '../3d/ParticleCanvas';
import NeonButton from '../ui/NeonButton';

const roles = [
  'Software Development Engineer',
  'Amazon SDE Intern',
  'Competitive Programmer',
  'Full Stack Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through sub-headings
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#030305] pt-16 z-10"
    >
      {/* 3D WebGL Particle constallation background */}
      <ParticleCanvas />

      {/* Decorative Top and Bottom Ambient Neon Spotlight Glows */}
      <div className="spotlight top-1/4 left-1/4 bg-cyan-500/20" />
      <div className="spotlight bottom-1/4 right-1/4 bg-purple-500/20" />

      {/* Hero Content Container */}
      <div className="relative z-10 text-center px-4 max-w-4xl flex flex-col items-center gap-6 mt-10 md:mt-4">
        {/* Amazon Badge / Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-xs font-semibold text-cyan-300 uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.15)] select-none"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Former SDE Intern @ Amazon | B.Tech @ IIIT Jabalpur</span>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight text-white select-text"
        >
          Hi, I am <br />
          <span className="text-gradient-cyan-blue font-black drop-shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            SHWET SINGH
          </span>
        </motion.h1>

        {/* Rotating Roles Taglines */}
        <div className="h-8 md:h-12 flex items-center justify-center select-none">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="text-base md:text-2xl font-mono text-zinc-400 flex items-center gap-2"
            >
              <Code2 className="w-4 h-4 md:w-6 md:h-6 text-indigo-400 shrink-0" />
              <span>{roles[roleIndex]}</span>
              <span className="text-cyan-400">|</span>
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Brief Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-zinc-500 max-w-lg leading-relaxed select-text"
        >
          Building high-performance, robust full-stack applications with elegant software
          architectures and highly optimized database schemas. Algorithmic problem solver with
          1500+ solved queries.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        >
          <NeonButton onClick={() => handleScrollTo('projects')} variant="cyan">
            <span>Explore Projects</span>
          </NeonButton>

          <NeonButton onClick={() => handleScrollTo('about')} variant="purple">
            <Terminal className="w-4 h-4" />
            <span>Open Terminal CLI</span>
          </NeonButton>
        </motion.div>
      </div>

      {/* Downward Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 select-none z-10 cursor-pointer"
        onClick={() => handleScrollTo('about')}
      >
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-zinc-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
