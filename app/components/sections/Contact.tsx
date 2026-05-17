'use client';

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import Card3D from '../ui/Card3D';
import Magnetic from '../ui/Magnetic';
import NeonButton from '../ui/NeonButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending email api callback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger canvas-confetti rain for that stunning premium user experience!
      const end = Date.now() + 1.5 * 1000;
      const colors = ['#00f2fe', '#4facfe', '#8b5cf6', '#ec4899'];

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success alert after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shwetsingh116',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      color: 'hover:text-cyan-400 border-cyan-500/20 hover:border-cyan-400/50',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/sss135790',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      color: 'hover:text-zinc-200 border-zinc-800 hover:border-zinc-500',
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/5hwet5ingh/',
      icon: (
        <span className="font-mono font-bold text-xs shrink-0 tracking-wider">LC</span>
      ),
      color: 'hover:text-amber-400 border-amber-500/20 hover:border-amber-400/50',
    },
    {
      label: 'Codeforces',
      href: 'https://codeforces.com/profile/5hwet5ingh',
      icon: (
        <span className="font-mono font-bold text-xs shrink-0 tracking-wider">CF</span>
      ),
      color: 'hover:text-red-400 border-red-500/20 hover:border-red-400/50',
    },
    {
      label: 'CodeChef',
      href: 'https://www.codechef.com/users/erxcoder33',
      icon: (
        <span className="font-mono font-bold text-xs shrink-0 tracking-wider">CC</span>
      ),
      color: 'hover:text-purple-400 border-purple-500/20 hover:border-purple-400/50',
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-24 bg-gradient-to-b from-[#030305] to-[#010103] text-white z-10"
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
            Connection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Get In Touch
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 select-text">

          {/* Information & Channels (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-10"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl font-bold text-zinc-100">
                Let&apos;s Build Something Extraordinary Together
              </h3>

              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans">
                I am currently open to full-time Software Development Engineer (SDE) roles starting
                upon graduation. If you have an exciting backend optimization opportunity, an complex system problem, or just want to chat about competitive programming structures—don&apos;t hesitate to connect!
              </p>
            </div>

            {/* Direct Contact Handles */}
            <div className="flex flex-col gap-4">

              {/* Email link */}
              <a
                href="mailto:shwetsingh32@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
              >
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-all shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email Me</span>
                  <span className="block text-sm font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
                    shwetsingh32@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone call link */}
              <a
                href="tel:+919557855252"
                className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
              >
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-all shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Call Me</span>
                  <span className="block text-sm font-semibold text-zinc-200 group-hover:text-indigo-300 transition-colors">
                    +91-9557855252
                  </span>
                </div>
              </a>

            </div>

            {/* Social channels flex (desktop only select-none) */}
            <div className="flex flex-col gap-3 select-none">
              <span className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest">Alternative Portals</span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Magnetic key={social.label} range={25}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-zinc-950/80 border flex items-center justify-center text-zinc-400 transition-all duration-300 cursor-pointer ${social.color}`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Glowing Form (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col"
          >
            <Card3D className="p-6 md:p-8 bg-zinc-950/20 select-text">

              {/* Overlay success alert */}
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl border border-teal-500/30 bg-teal-500/10 text-teal-300 flex items-start gap-3 shadow-[0_0_15px_rgba(20,184,166,0.15)]"
                >
                  <Check className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">Message Transmitted!</h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      Thank you for reaching out, Shwet will respond to your transmission shortly. Enjoy the confetti!
                    </p>
                  </div>
                </motion.div>
              ) : null}

              {/* Form elements */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 select-none">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    Your Name *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Elon Musk"
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-cyan-500/60 focus:bg-zinc-950/60 transition-all select-text disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    Email Address *
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="E.g. elon@spacex.com"
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-cyan-500/60 focus:bg-zinc-950/60 transition-all select-text disabled:opacity-50"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-subject" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    disabled={isSubmitting}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="E.g. SDE Opportunity at SpaceX"
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-cyan-500/60 focus:bg-zinc-950/60 transition-all select-text disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-message" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    Your Message *
                  </label>
                  <textarea
                    id="form-message"
                    required
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-cyan-500/60 focus:bg-zinc-950/60 transition-all resize-none select-text disabled:opacity-50"
                  />
                </div>

                {/* Submit button */}
                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="text-[10px] text-zinc-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>* Required fields</span>
                  </span>

                  <NeonButton
                    type="submit"
                    variant="cyan"
                    className="w-[170px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin shrink-0" />
                        <span>Transmitting...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4 shrink-0" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </NeonButton>
                </div>

              </form>

            </Card3D>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
