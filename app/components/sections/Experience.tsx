'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';
import Card3D from '../ui/Card3D';

interface TimelineItem {
  type: 'work' | 'education';
  role: string;
  organization: string;
  location: string;
  duration: string;
  highlights: string[];
  link?: string;
}

const timelineData: TimelineItem[] = [
  {
    type: 'work',
    role: 'Software Development Engineer Intern',
    organization: 'Amazon',
    location: 'Bengaluru, Karnataka',
    duration: 'July 2025 - Dec 2025',
    link: 'https://amazon.jobs',
    highlights: [
      'Optimized a production Monthly File Processing Lambda by creating a new DynamoDB table and implementing parallel batch reads, reducing execution time by 97% and eliminating Lambda timeout failures, which unblocked critical production workflows.',
      'Migrated core file processing workflows (Monthly Submission, Remittance, and Chargeback) to a new DynamoDB table design, improving lookup performance, ensuring data consistency across services, and enabling safe cleanup of legacy storage.',
      'Improved pre-production safety by adding comprehensive integration tests coverage and approval workflows across multiple payment services in the Beta stage.',
      'Executed a PARS region migration for payment method deletion traffic from DUB to ZAZ, coordinating code changes, testing, and a controlled MCM rollout to successfully shift 100% of production traffic.',
      'Onboarded payment services to AmazonTracer by upgrading legacy Jarvis modules for better logging and tracing, contributing to an estimated cost savings of nearly $500K.',
      'Enhanced the MetaMorph mock bank service by adding charge and refund support, accurately mirroring real partner bank behavior and enabling reliable end-to-end testing of payment systems without relying on external bank partners.',
      'Debugged and fixed multiple service stability issues, including failing integration tests, ping test failures, and Swagger issues across MetaMorph and PSXT services, restoring a healthy CI/CD pipeline.',
    ],
  },
  {
    type: 'education',
    role: 'B.Tech - Electronics and Communication Engineering',
    organization: 'Indian Institute of Information Technology, Jabalpur',
    location: 'Jabalpur, Madhya Pradesh',
    duration: 'Nov. 2022 - Present',
    link: 'https://www.iiitdmj.ac.in',
    highlights: [
      'Cumulative Grade Point Average (GPA): 8.4 / 10.0.',
      'Extensive coursework in: Data Structures and Algorithms, Object-Oriented Programming (OOPs), Database Management Systems (DBMS), Operating Systems, and Computer Networks.',
      'Active participant in competitive programming clubs and technical coding societies.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-24 bg-gradient-to-b from-[#06060c] to-[#030305] text-white z-10"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-center items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2"
          >
            My Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Experience & Education
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Timeline Line & Items */}
        <div className="relative border-l border-zinc-800 md:ml-24 pl-6 md:pl-12 flex flex-col gap-12">
          
          {timelineData.map((item, index) => {
            const isWork = item.type === 'work';

            return (
              <div key={index} className="relative group select-text">
                
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[31px] md:-left-[55px] top-6 w-4 h-4 rounded-full border-2 bg-[#030305] transition-all duration-300 z-10 ${
                    isWork
                      ? 'border-cyan-400 pulse-glow-indigo'
                      : 'border-indigo-400'
                  }`}
                />

                {/* Duration Tag (Floating desktop label, inline mobile label) */}
                <div className="hidden md:block absolute -left-[180px] top-5 w-[120px] text-right font-mono text-xs font-semibold text-zinc-500">
                  {item.duration}
                </div>

                {/* Timeline Glassmorphic Card (Wrapped inside our 3D Tilt Container for maximum wow!) */}
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card3D className="p-6 md:p-8 flex flex-col gap-4 bg-zinc-950/20">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-900 pb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-zinc-100 flex items-center gap-2">
                          {isWork ? (
                            <Briefcase className="w-5 h-5 text-cyan-400 shrink-0" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0" />
                          )}
                          <span>{item.role}</span>
                        </h3>
                        
                        <div className="text-sm font-semibold text-zinc-400 mt-1 flex items-center gap-2">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-cyan-300 hover:underline transition-colors cursor-pointer"
                            >
                              {item.organization}
                            </a>
                          ) : (
                            <span>{item.organization}</span>
                          )}
                          <span className="text-zinc-700 font-normal">|</span>
                          <span className="text-zinc-500 font-medium flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{item.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Mobile Duration display */}
                      <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-500 bg-zinc-900/50 px-2.5 py-1 rounded-full self-start">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="flex flex-col gap-2.5">
                      {item.highlights.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="flex items-start gap-3 text-xs md:text-sm text-zinc-400 leading-relaxed"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                              isWork ? 'text-cyan-500/80' : 'text-indigo-500/80'
                            }`}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </Card3D>
                </motion.div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
