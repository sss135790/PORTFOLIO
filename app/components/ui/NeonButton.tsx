'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'cyan' | 'purple';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function NeonButton({
  children,
  onClick,
  className = '',
  variant = 'cyan',
  type = 'button',
  disabled = false,
}: NeonButtonProps) {
  const isCyan = variant === 'cyan';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`relative group px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 overflow-hidden select-none shrink-0 ${
        disabled
          ? 'opacity-50 cursor-not-allowed bg-zinc-900 border border-zinc-800 text-zinc-500'
          : isCyan
          ? 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 neon-glow-teal cursor-pointer'
          : 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-400/60 neon-glow-purple cursor-pointer'
      } ${className}`}
    >
      {/* Glare Gradient Layer */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      
      {/* Glow dot that orbits behind/around the button on hover */}
      <span
        className={`absolute -inset-1 rounded-full opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300 ${
          isCyan
            ? 'bg-gradient-to-r from-cyan-400 to-indigo-500'
            : 'bg-gradient-to-r from-purple-400 to-pink-500'
        }`}
      />
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.button>
  );
}
