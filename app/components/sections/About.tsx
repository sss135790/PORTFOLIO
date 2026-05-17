'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, Code } from 'lucide-react';
import TerminalCLI from '../ui/TerminalCLI';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 bg-gradient-to-b from-[#030305] to-[#06060c] text-white overflow-hidden z-10"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2"
          >
            Introduction
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Biography details (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-zinc-100 font-sans">
              Driven by Algorithms, Focused on Scalable Systems
            </h3>

            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans select-text">
              I am a B.Tech student in **Electronics and Communication Engineering** at the{' '}
              <strong className="text-zinc-200">
                Indian Institute of Information Technology, Jabalpur
              </strong>{' '}
              (GPA 8.4). My engineering background combined with a deep passion for software design
              allows me to approach problems with a structured, analytical lens.
            </p>


            {/* Quick Stat Badges */}
            <div className="grid grid-cols-2 gap-4 mt-4">

              {/* Stat 1 */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/40 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Education</h4>
                  <p className="text-xs font-semibold text-zinc-200 mt-1">B.Tech @ IIIT Jabalpur</p>
                  <p className="text-[10px] text-zinc-500">GPA 8.4 | Grad 2026</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/40 flex items-start gap-3">
                <Brain className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wide">DSA Mastery</h4>
                  <p className="text-xs font-semibold text-zinc-200 mt-1">1500+ Algorithmic Qs</p>
                  <p className="text-[10px] text-zinc-500">LeetCode, Codeforces</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/40 flex items-start gap-3">
                <Award className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Competitive</h4>
                  <p className="text-xs font-semibold text-zinc-200 mt-1">LeetCode Peak 1931</p>
                  <p className="text-[10px] text-zinc-500">Global Top 4% | Codeforces Spec</p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/40 flex items-start gap-3">
                <Code className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Experience</h4>
                  <p className="text-xs font-semibold text-zinc-200 mt-1">Amazon SDE Intern</p>
                  <p className="text-[10px] text-zinc-500">Payments backend (6 months)</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* CLI Terminal (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <TerminalCLI />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
