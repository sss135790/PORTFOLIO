'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Layers, Sparkles } from 'lucide-react';
import Card3D from '../ui/Card3D';
import Magnetic from '../ui/Magnetic';

interface Project {
  title: string;
  category: 'full-stack' | 'nextjs' | 'mern';
  description: string;
  tech: string[];
  bullets: string[];
  github: string;
  demo?: string;
  glowColor: 'cyan' | 'purple';
}

const projectsData: Project[] = [
  {
    title: 'Quick Clinic',
    category: 'nextjs',
    description: 'A robust full-stack telemedicine platform enabling seamless, secure interaction between doctors and patients with real-time video/chat consultations, automated slot booking, and microservice billing.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.IO', 'Zustand', 'Razorpay', 'Docker'],
    bullets: [
      'Developed real-time doctor-patient text and session interactions powered by Socket.IO.',
      'Implemented secure role-based authentication (Patient, Doctor, Admin) utilizing JWT and email OTP verification.',
      'Built automated appointment booking calendars with active availability status states.',
      'Dockerized the entire database, socket service, and main app container stack for instant orchestration.',
    ],
    github: 'https://github.com/sss135790/Quick-Clinic',
    demo: 'https://quick-clinic-lemon.vercel.app/',
    glowColor: 'cyan',
  },
  {
    title: 'Study Notion',
    category: 'mern',
    description: 'A full-stack, scale-ready ed-tech marketplace built using the MERN architecture, empowering instructors to manage multi-media courses and students to purchase and consume lessons.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'Razorpay', 'Cloudinary'],
    bullets: [
      'Created granular course management dashboards for lecturers and learning hubs for students.',
      'Secured backend endpoints using stateful JWT authorizations, bcrypt hashing, and OTP signups.',
      'Integrated Razorpay API gateways alongside Cloudinary content delivery networks for image/video assets.',
      'Designed responsive modular components using clean semantic HTML5 and utilities.',
    ],
    github: 'https://github.com/sss135790/study_notion',
    demo: 'https://study-notion-two-iota.vercel.app/',
    glowColor: 'purple',
  },
  {
    title: 'Greeting Card App',
    category: 'nextjs',
    description: 'A full-stack personalized greeting card web application allowing users to compose, design, and overlay custom photos and typography on cards with real-time renders for multiple festivals and life milestones.',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'NextAuth.js', 'PostgreSQL', 'Prisma', 'Cloudinary'],
    bullets: [
      'Built a high-fidelity image composition engine using HTML5 Canvas supporting dynamic overlays and high-quality PNG downloads.',
      'Secured user authentication and session management using Google OAuth, NextAuth.js, and stateful JWT handling.',
      'Engineered structured schema relationships using PostgreSQL and Prisma ORM to manage card templates and user profiles.',
      'Designed ultra-fluid responsive UI shells supporting custom templates for birthdays, weddings, and festivals.',
    ],
    github: 'https://github.com/sss135790/Greeting-Card-App',
    demo: 'https://class-plus-assesment.vercel.app/',
    glowColor: 'cyan',
  },
  {
    title: 'Soom Video Call App',
    category: 'nextjs',
    description: 'A high-performance web conferencing platform enabling users to connect through high-quality video/audio streams, featuring integrated in-call text communication, screen sharing, and secure authentication.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Stream SDK', 'Clerk', 'Framer Motion'],
    bullets: [
      'Developed a reliable real-time video conferencing system supporting high-quality stream channels and instant link-based joining.',
      'Integrated active chat widgets inside call rooms for seamless side-by-side text communication.',
      'Implemented secure user authentication and route guards, ensuring strict end-to-end data protection.',
      'Crafted a fully responsive grid overlay UI with fluid desktop-to-mobile layouts powered by Tailwind and shadcn.',
    ],
    github: 'https://github.com/sss135790/soom_video_call_app',
    demo: 'https://soom-video-call-g2oaiuahz-shwets-projects-8a6358c9.vercel.app/',
    glowColor: 'purple',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'nextjs' | 'mern'>('all');

  const filteredProjects = projectsData.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section
      id="projects"
      className="relative w-full py-24 bg-gradient-to-b from-[#030305] to-[#06060c] text-white z-10"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2"
            >
              My Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-white"
            >
              Featured Projects
            </motion.h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4" />
          </div>

          {/* Project Filters */}
          <div className="flex items-center gap-2 p-1.5 rounded-full border border-zinc-800 bg-zinc-950/60 self-start select-none">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${filter === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-zinc-200'
                }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('nextjs')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${filter === 'nextjs'
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-zinc-200'
                }`}
            >
              Next.js
            </button>
            <button
              onClick={() => setFilter('mern')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${filter === 'mern'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-zinc-200'
                }`}
            >
              MERN Stack
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch select-text">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isCyan = project.glowColor === 'cyan';

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <Card3D className="flex flex-col flex-1 p-6 md:p-8 justify-between bg-zinc-950/20">

                    {/* Upper content */}
                    <div className="flex flex-col gap-5">

                      {/* Title & Badge */}
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-100 flex items-center gap-2">
                          <Layers className={`w-5.5 h-5.5 ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`} />
                          <span>{project.title}</span>
                        </h3>
                        <span
                          className={`text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-full border ${project.category === 'nextjs'
                              ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                              : 'border-purple-500/30 bg-purple-500/10 text-purple-400'
                            }`}
                        >
                          {project.category === 'nextjs' ? 'Next.js' : 'MERN Stack'}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* Technical Bullets */}
                      <div className="flex flex-col gap-2 border-t border-zinc-900/60 pt-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
                          <span>Core Features</span>
                        </h4>
                        <ul className="flex flex-col gap-1.5 pl-1.5">
                          {project.bullets.map((bullet, bulletIdx) => (
                            <li
                              key={bulletIdx}
                              className="text-xs text-zinc-500 list-disc list-inside leading-relaxed"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Lower content: Tech tags & Action Links */}
                    <div className="flex flex-col gap-6 mt-8 border-t border-zinc-900/80 pt-4">

                      {/* Tech stack pill tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((techItem) => (
                          <span
                            key={techItem}
                            className="text-[9px] font-bold font-mono tracking-wide text-zinc-400 bg-zinc-900/50 px-2 py-0.5 rounded-md border border-zinc-800/40"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>

                      {/* Code / Demo Links */}
                      <div className="flex items-center gap-4 shrink-0 select-none">

                        <Magnetic range={25}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
                          >
                            <svg
                              className="w-4 h-4"
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
                            <span>Source</span>
                          </a>
                        </Magnetic>

                        {project.demo && (
                          <Magnetic range={25}>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-1.5 text-xs font-semibold hover:underline cursor-pointer ${isCyan ? 'text-cyan-400 hover:text-cyan-300' : 'text-purple-400 hover:text-purple-300'
                                }`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Live Demo</span>
                            </a>
                          </Magnetic>
                        )}
                      </div>

                    </div>

                  </Card3D>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
