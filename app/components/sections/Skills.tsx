'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Wrench, Trophy, BookOpen } from 'lucide-react';
import Card3D from '../ui/Card3D';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
  color: 'teal' | 'indigo' | 'purple' | 'pink';
}

const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    color: 'teal',
    skills: [
      { name: 'C++', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'SQL', level: 88 },
      { name: 'Java', level: 82 },
      { name: 'Python', level: 80 },
    ],
  },
  {
    title: 'Frameworks & Libs',
    icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    color: 'indigo',
    skills: [
      { name: 'Next.js', level: 93 },
      { name: 'React.js', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'FastAPI', level: 78 },
    ],
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5 text-purple-400" />,
    color: 'purple',
    skills: [
      { name: 'Amazon DynamoDB', level: 90 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
    ],
  },
  {
    title: 'Developer Tools',
    icon: <Wrench className="w-5 h-5 text-pink-400" />,
    color: 'pink',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 88 },
      { name: 'AWS (Lambda, etc.)', level: 85 },
      { name: 'Vercel', level: 90 },
      { name: 'Postman', level: 92 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

export default function Skills() {
  const getGlowStyles = (color: SkillCategory['color']) => {
    switch (color) {
      case 'teal':
        return 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5 hover:border-cyan-400/50';
      case 'indigo':
        return 'border-indigo-500/20 text-indigo-400 bg-indigo-500/5 hover:border-indigo-400/50';
      case 'purple':
        return 'border-purple-500/20 text-purple-400 bg-purple-500/5 hover:border-purple-400/50';
      case 'pink':
        return 'border-pink-500/20 text-pink-400 bg-pink-500/5 hover:border-pink-400/50';
    }
  };

  const getProgressColor = (color: SkillCategory['color']) => {
    switch (color) {
      case 'teal':
        return 'bg-gradient-to-r from-cyan-400 to-cyan-500';
      case 'indigo':
        return 'bg-gradient-to-r from-indigo-400 to-indigo-500';
      case 'purple':
        return 'bg-gradient-to-r from-purple-400 to-purple-500';
      case 'pink':
        return 'bg-gradient-to-r from-pink-400 to-pink-500';
    }
  };

  return (
    <section
      id="skills"
      className="relative w-full py-24 bg-gradient-to-b from-[#06060c] to-[#030305] text-white z-10"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2"
          >
            My Abilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Skills & Expertise
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch select-text">
          {skillsData.map((category, idx) => {
            const glowStyles = getGlowStyles(category.color);
            const progressColor = getProgressColor(category.color);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <Card3D className={`flex flex-col flex-1 p-6 md:p-8 bg-zinc-950/20 border transition-colors duration-300 ${glowStyles}`}>
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-zinc-900 pb-4 mb-6">
                    <div className="p-2 rounded-lg bg-zinc-900 shrink-0">
                      {category.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-zinc-100">{category.title}</h3>
                  </div>

                  {/* Skills List with animated indicators */}
                  <div className="flex flex-col gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col gap-1.5">
                        
                        {/* Title and Numerical Tag */}
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span className="text-zinc-300 font-medium">{skill.name}</span>
                          <span className="text-zinc-500 font-mono">{skill.level}%</span>
                        </div>

                        {/* Progress Meter Bar */}
                        <div className="w-full h-1.5 bg-zinc-900/60 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className={`h-full rounded-full ${progressColor}`}
                          />
                        </div>

                      </div>
                    ))}
                  </div>

                </Card3D>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Coursework & Problem Solving Sub-deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 select-text">
          
          {/* Competitive Coding stats card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="p-6 md:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 glass-panel flex flex-col gap-5 justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-500 shrink-0 mt-0.5 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                  <Trophy className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-100">Competitive Programming</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2.5">
                    Actively competing in algorithmic coding contests. Solving multi-layered
                    problems focusing on time complexity optimization, graphs, dynamically
                    programmable structures, and mathematical proofs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-zinc-900 pt-4 mt-2">
                <div className="text-center">
                  <span className="block text-xl font-bold font-mono text-cyan-400">1931</span>
                  <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">LeetCode Peak</span>
                </div>
                <div className="text-center border-x border-zinc-900">
                  <span className="block text-xl font-bold font-mono text-indigo-400">Specialist</span>
                  <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Codeforces</span>
                </div>
                <div className="text-center">
                  <span className="block text-xl font-bold font-mono text-purple-400">3-Star</span>
                  <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">CodeChef</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic Coursework card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="p-6 md:p-8 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 glass-panel flex flex-col gap-5 justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-500 shrink-0 mt-0.5 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
                  <BookOpen className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-100">Theoretical Coursework</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2.5">
                    Rigorous foundations in engineering principles and system theories, driving my capacity to analyze complex architectural constraints and data flow networks.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {[
                  'Data Structures & Algorithms',
                  'Object Oriented Programming',
                  'Database Management System',
                  'Operating System',
                  'Computer Network',
                ].map((course) => (
                  <span
                    key={course}
                    className="text-[9px] font-bold tracking-wide text-indigo-300 bg-indigo-500/5 border border-indigo-500/25 px-2.5 py-1 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
