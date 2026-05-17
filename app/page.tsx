import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030305] text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* Visual Ambient Foundation: Global Cyber Grid & Glowing Spots */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full cyber-grid" />
        
        {/* Ambient Spots in background that create depth behind all sections */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] opacity-70" />
        <div className="absolute top-[50%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] opacity-70" />
        <div className="absolute bottom-[10%] right-[-5%] w-[650px] h-[650px] bg-purple-500/5 rounded-full blur-[140px] opacity-70" />
      </div>

      {/* Floating Glass Navbar with active indicator & progress tracking */}
      <Navbar />

      {/* Main sections container */}
      <main className="flex-1 flex flex-col w-full relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Modern High-End Developer Footer */}
      <footer className="relative py-10 bg-[#020204] border-t border-zinc-950 text-center select-none text-[10px] font-bold text-zinc-600 tracking-widest z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; {new Date().getFullYear()} SHWET SINGH. ALL RIGHTS RESERVED.</span>
          <span className="text-[9px] text-zinc-700 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-900/50">
            DESIGNED &amp; ENGINEERED BY SHWET SINGH
          </span>
        </div>
      </footer>

    </div>
  );
}
