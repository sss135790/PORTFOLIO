'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import Magnetic from './ui/Magnetic';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Progress Bar Setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track scroll depth for background blur transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sections = navItems.map((item) => item.href.substring(1));
    
    // Also observe the hero/top section
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the sweet spot of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const heroEl = document.getElementById('home');
    if (heroEl) observer.observe(heroEl);

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      setIsMobileMenuOpen(false);
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full z-40 transition-all duration-500 border ${
          scrolled
            ? 'glass-panel py-3 px-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] border-indigo-500/10'
            : 'bg-transparent py-5 px-6 border-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-mono font-bold text-base shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300">
              SS
            </div>
            <span className="font-sans font-bold text-sm tracking-widest text-zinc-100 group-hover:text-cyan-400 transition-colors duration-300">
              SHWET SINGH
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Magnetic key={item.label} range={35}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs font-semibold uppercase tracking-wider relative py-1 px-2.5 transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-cyan-400'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* Connect / Resume Action Button */}
          <div className="hidden md:block shrink-0">
            <Magnetic range={30}>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="relative inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-xs font-semibold text-cyan-300 uppercase tracking-widest hover:bg-cyan-500/10 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Console</span>
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-zinc-100 transition-colors duration-300 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
        />
      )}

      {/* Mobile Drawer Panel */}
      <nav
        className={`fixed top-20 right-4 left-4 rounded-2xl glass-panel z-40 p-6 flex flex-col gap-4 md:hidden shadow-2xl transition-all duration-300 border-indigo-500/10 ${
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`py-3.5 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/40 border-l-4 border-transparent'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-center text-xs font-bold text-white uppercase tracking-widest hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(6,182,212,0.25)]"
          >
            <Terminal className="w-4 h-4" />
            <span>Open Console CLI</span>
          </a>
        </div>
      </nav>
    </>
  );
}
