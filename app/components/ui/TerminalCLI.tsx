'use client';

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success' | 'system';
}

export default function TerminalCLI() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: 'System initialized. Shwet-OS v1.0.4 booted successfully.', type: 'system' },
    { text: "Type 'help' to see the list of available commands.", type: 'system' },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on history change
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input when clicking terminal panel
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const trimmedInput = input.trim().toLowerCase();
    const newHistory: TerminalLine[] = [
      ...history,
      { text: `guest@shwetsingh.dev:~$ ${input}`, type: 'input' },
    ];

    if (!trimmedInput) {
      setHistory(newHistory);
      setInput('');
      return;
    }

    const command = trimmedInput.split(' ')[0];
    const args = trimmedInput.split(' ').slice(1);

    let response: TerminalLine[] = [];

    switch (command) {
      case 'help':
        response = [
          { text: 'Available commands:', type: 'system' },
          { text: '  about        - Tell me about Shwet Singh', type: 'output' },
          { text: '  skills       - View my tech stack & skill proficiencies', type: 'output' },
          { text: '  experience   - Read about my experience (Amazon SDE Intern)', type: 'output' },
          { text: '  projects     - See my featured full-stack projects', type: 'output' },
          { text: '  achievements - Competitive programming & DSA ratings', type: 'output' },
          { text: '  contact      - Get my email, phone, and social links', type: 'output' },
          { text: '  matrix       - Trigger terminal digital rain', type: 'success' },
          { text: '  clear        - Clear the terminal history', type: 'output' },
          { text: '  sudo [cmd]   - Administrative override', type: 'error' },
        ];
        break;
      case 'about':
        response = [
          { text: 'SHWET SINGH - Full Stack Developer & Competitive Programmer', type: 'success' },
          { text: 'Education:', type: 'system' },
          { text: '  - B.Tech in Electronics and Communication Engineering', type: 'output' },
          { text: '    Indian Institute of Information Technology, Jabalpur (IIITDMJ)', type: 'output' },
          { text: '    GPA: 8.4/10.0 | Class of 2026 (Nov. 2022 - Present)', type: 'output' },
          { text: '  - R.A.N. Public School (Class 12: 90.6%, Class 10: 92.6%)', type: 'output' },
          { text: 'Profile Summary:', type: 'system' },
          { text: '  Highly analytical engineer specializing in high-performance web systems', type: 'output' },
          { text: '  and complex algorithms. Experienced in cloud-scale database optimization,', type: 'output' },
          { text: '  microservices, and telemetry. Built production systems handling high-traffic', type: 'output' },
          { text: '  financial workloads during Amazon internship.', type: 'output' },
        ];
        break;
      case 'skills':
        response = [
          { text: 'Technical Skills Directory:', type: 'system' },
          { text: '  - Languages  : C++, HTML, CSS, JavaScript, TypeScript, SQL, Java, Python', type: 'output' },
          { text: '  - Frameworks : React JS, Next.js, Node.js, Express.js, Tailwind CSS, FastAPI, Bootstrap', type: 'output' },
          { text: '  - Databases  : PostgreSQL, MongoDB, Amazon DynamoDB', type: 'output' },
          { text: '  - Dev Tools  : Git, VS Code, Postman, Docker, Vercel, AWS (Lambda, DynamoDB)', type: 'output' },
          { text: '  - Core DSA   : Expert in Data Structures, Algorithms, DBMS, OOPs, Operating Systems, Networks', type: 'output' },
        ];
        break;
      case 'experience':
        response = [
          { text: 'AMAZON - Software Development Engineer Intern (July 2025 - Dec 2025)', type: 'success' },
          { text: 'Location: Bengaluru, Karnataka', type: 'system' },
          { text: 'Key Achievements:', type: 'system' },
          { text: '  - Optimized production Monthly File Processing Lambda: created new DynamoDB tables', type: 'output' },
          { text: '    and batch parallel processing, reducing execution time by 97% and eliminating timeouts.', type: 'output' },
          { text: '  - Migrated core payment workflow DynamoDB table architectures to improve lookup', type: 'output' },
          { text: '    performance, ensuring safe cleanup of legacy structures and 100% data consistency.', type: 'output' },
          { text: '  - Migrated regional PARS payment method deletion traffic (DUB to ZAZ) under controlled MCM.', type: 'output' },
          { text: '  - Integrated payment systems with AmazonTracer, yielding logging upgrades and $500K cost savings.', type: 'output' },
          { text: '  - Enhanced MetaMorph mock banking services with charge/refund support, ensuring solid CI/CD workflows.', type: 'output' },
        ];
        break;
      case 'projects':
        response = [
          { text: 'FEATURED PROJECTS:', type: 'system' },
          { text: '1. Quick Clinic | Full-Stack Telemedicine Platform', type: 'success' },
          { text: '   - Tech: Next.js, TypeScript, Prisma (PostgreSQL), Socket.IO, Zustand, Razorpay, Docker', type: 'output' },
          { text: '   - Details: Telemedicine portal featuring real-time doctor-patient chats, appointment slot booking,', type: 'output' },
          { text: '              role-based JWT auth, Razorpay payments, and fully containerized Docker deploy.', type: 'output' },
          { text: '2. Study Notion | MERN Ed-Tech Platform', type: 'success' },
          { text: '   - Tech: React, JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS, Vercel, Cloudinary', type: 'output' },
          { text: '   - Details: Educational marketplace with course creation engines for instructors, browsing/purchase', type: 'output' },
          { text: '              flows for students, OTP-verified signup, and Cloudinary media pipelines.', type: 'output' },
          { text: '3. Greeting Card App | Full-Stack Personalized Designer App', type: 'success' },
          { text: '   - Tech: Next.js, React 19, TypeScript, Tailwind CSS, NextAuth.js, PostgreSQL, Prisma, Cloudinary', type: 'output' },
          { text: '   - Details: Personalization app enabling cards creation with custom templates, HTML5 Canvas image overlays,', type: 'output' },
          { text: '              Google OAuth login, and high-quality PNG download streams.', type: 'output' },
          { text: '4. Soom Video Call App | High-Performance Web Conferencing', type: 'success' },
          { text: '   - Tech: Next.js, TypeScript, Tailwind CSS, shadcn/ui, Stream SDK, Clerk, Framer Motion', type: 'output' },
          { text: '   - Details: Real-time high-quality audio/video call service featuring in-call side chat utilities,', type: 'output' },
          { text: '              Google/Clerk user authentication, and fully fluid responsive grids.', type: 'output' },
        ];
        break;
      case 'achievements':
        response = [
          { text: 'COMPETITIVE PROGRAMMING & ALGORITHMS ACHIEVEMENTS:', type: 'success' },
          { text: '  - LeetCode  : Solved 800+ DSA problems. Global Top 4% ranking (Peak Rating: 1931)', type: 'output' },
          { text: '  - Codeforces: Specialist (Ranked among active top solvers globally)', type: 'output' },
          { text: '  - CodeChef  : Achieved 3-Star rating milestone', type: 'output' },
          { text: '  - Combined  : Solved 1500+ algorithmic problems across all testing networks', type: 'output' },
        ];
        break;
      case 'contact':
        response = [
          { text: 'CONTACT CHANNELS:', type: 'system' },
          { text: '  - Phone    : +91-9557855252', type: 'output' },
          { text: '  - Email    : shwetsingh32@gmail.com', type: 'output' },
          { text: '  - GitHub   : https://github.com/sss135790', type: 'output' },
          { text: '  - LinkedIn : https://linkedin.com/in/shwetsingh116', type: 'output' },
          { text: '  - Profiles : Codeforces: 5hwet5ingh | LeetCode: 5hwet5ingh | CodeChef: erxcoder33', type: 'output' },
        ];
        break;
      case 'matrix':
        response = [
          { text: 'Initializing digital rain stream...', type: 'system' },
          { text: '01000001 01001101 01000001 01011010 01001111 01001110 (AMAZON)', type: 'success' },
          { text: '01110011 01101000 01110111 01100101 01110100 01110011 (SHWETS)', type: 'success' },
          { text: '10010011 00101101 00100000 01001110 01000101 01011000 (NEXTJS)', type: 'success' },
          { text: '01000011 01010000 01010011 01010000 01000101 01000011 (CPSPEC)', type: 'success' },
          { text: 'Digital stream secure. Ready.', type: 'system' },
        ];
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'sudo':
        const subcommand = args[0] || '';
        response = [
          { text: `Executing administrative command: sudo ${subcommand}`, type: 'error' },
          { text: 'Permission denied. System administrator is monitoring this session.', type: 'error' },
          { text: 'Tip: Try reading without administrative overrides! :)', type: 'system' },
        ];
        break;
      default:
        response = [
          { text: `bash: command not found: ${command}`, type: 'error' },
          { text: "Type 'help' to see list of valid instructions.", type: 'system' },
        ];
    }

    setHistory([...newHistory, ...response]);
    setInput('');
  };

  return (
    <div
      onClick={handleTerminalClick}
      className="w-full max-w-2xl h-80 rounded-lg shadow-2xl overflow-hidden glass-panel flex flex-col font-mono text-sm text-zinc-300 cursor-text select-none border border-indigo-500/20"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950/80 border-b border-zinc-900 select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/70" />
          <div className="w-3 h-3 rounded-full bg-amber-500/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
        </div>
        <div className="text-zinc-500 text-xs font-semibold select-none">shwetsingh@server:~ (bash)</div>
        <div className="w-12" /> {/* spacer */}
      </div>

      {/* Terminal Display Stream */}
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-1.5 bg-black/40 scrollbar-thin scrollbar-thumb-zinc-800">
        {history.map((line, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap break-all ${
              line.type === 'input'
                ? 'text-zinc-100'
                : line.type === 'error'
                ? 'text-rose-400 font-semibold'
                : line.type === 'success'
                ? 'text-teal-300 font-semibold'
                : line.type === 'system'
                ? 'text-indigo-400'
                : 'text-zinc-400'
            }`}
          >
            {line.text}
          </div>
        ))}
        
        {/* Terminal Input Prompt */}
        <div className="flex items-center gap-2 text-zinc-100 mt-1">
          <span className="text-emerald-400 font-bold shrink-0">guest@shwetsingh.dev:~$</span>
          <div className="flex-1 relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommandSubmit}
              className="absolute inset-0 w-full bg-transparent text-transparent caret-transparent border-none outline-none focus:ring-0 p-0"
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            {/* Visual Mirror of Text to support a custom glowing cyan cursor */}
            <span className="text-zinc-200 select-all">{input}</span>
            <span className="terminal-cursor shrink-0 ml-0.5" />
          </div>
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
