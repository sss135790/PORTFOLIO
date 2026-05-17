'use client';

import React, { useState, useRef, MouseEvent } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card3D({ children, className = '' }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Maximum tilt degrees
  const MAX_TILT = 12;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const el = cardRef.current;
    const rect = el.getBoundingClientRect();

    // Mouse coordinates relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates to range [-0.5, 0.5]
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    // Calculate rotate degrees (note: moving mouse right tilts card Y positively, moving up tilts X negatively)
    const tiltX = -normY * MAX_TILT;
    const tiltY = normX * MAX_TILT;

    setCoords({ x: tiltY, y: tiltX });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Dynamic styles
  const style3D = {
    transform: isHovered
      ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.02, 1.02, 1.02)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: isHovered ? 'none' : 'transform 0.5s ease-out',
  };

  // Glare effect position
  const glareStyle = {
    background: isHovered
      ? `radial-gradient(circle at ${((coords.x + MAX_TILT) / (MAX_TILT * 2)) * 100}% ${
          ((-coords.y + MAX_TILT) / (MAX_TILT * 2)) * 100
        }%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 80%)`
      : 'none',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style3D}
      className={`relative overflow-hidden rounded-2xl glass-panel glass-panel-hover transform-gpu ${className}`}
    >
      {/* Glare Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={glareStyle}
      />
      {children}
    </div>
  );
}
