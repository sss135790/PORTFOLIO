'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Constellation (Outer sphere)
    const particleCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Generate random coordinates inside a sphere
    const radius = 15;
    const colorTeal = new THREE.Color('#00f2fe');
    const colorPurple = new THREE.Color('#8b5cf6');

    for (let i = 0; i < particleCount; i++) {
      // Spherical coordinates
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = radius * (0.4 + 0.6 * Math.random()); // distribute within shell

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color interpolation (gradient based on distance)
      const mixedColor = new THREE.Color().copy(colorTeal).lerp(colorPurple, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Circular Particle Texture
    const createCircleTexture = () => {
      const size = 64;
      const canvasEl = document.createElement('canvas');
      canvasEl.width = size;
      canvasEl.height = size;
      const ctx = canvasEl.getContext('2d');
      if (ctx) {
        // Create radial gradient for a soft glowing circle
        const gradient = ctx.createRadialGradient(
          size / 2, size / 2, 0,
          size / 2, size / 2, size / 2
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(0, 242, 254, 0.8)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
      }
      return new THREE.CanvasTexture(canvasEl);
    };

    const material = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      map: createCircleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Inner Glowing Core (Wireframe Mesh - Icosahedron)
    const innerGeom = new THREE.IcosahedronGeometry(4.5, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    scene.add(innerMesh);

    // Add secondary outer thin ring / orbits
    const ringGeom = new THREE.RingGeometry(8, 8.1, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.08,
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // Lights (even though meshbasic doesn't use it, particles look more vibrant with ambient hues)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Mouse movement state
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to [-1, 1]
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll state
    let scrollPercent = 0;
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // Animation loop & performance management
    let animationFrameId: number;
    let isVisible = true;

    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) return; // Stop drawing when offscreen

      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (Lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Base rotations
      particleSystem.rotation.y = elapsedTime * 0.03 + mouse.x * 0.25;
      particleSystem.rotation.x = elapsedTime * 0.01 + mouse.y * 0.25;

      innerMesh.rotation.y = -elapsedTime * 0.08 - mouse.x * 0.15;
      innerMesh.rotation.z = elapsedTime * 0.05;

      ringMesh.rotation.z = elapsedTime * 0.02 + mouse.x * 0.3;

      // Scroll reactions
      // Speed up rotation based on scroll depth
      particleSystem.rotation.y += scrollPercent * 1.5;
      innerMesh.rotation.x += scrollPercent * 1.0;

      // Zoom in camera slightly on scroll
      camera.position.z = 25 - scrollPercent * 6;

      // Pulse the scale of the inner core subtly
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
      innerMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    // IntersectionObserver to pause rendering when canvas is off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            animate();
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Initial render trigger
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();

      // Dispose of geometries & materials
      geometry.dispose();
      material.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
