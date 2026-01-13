import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000 };
    let lerpedMouse = { x: -1000, y: -1000 };
    let logicalWidth = 0;
    let logicalHeight = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      logicalWidth = window.innerWidth;
      logicalHeight = window.innerHeight;
      
      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      
      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;

      ctx.scale(dpr, dpr);
      
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Main foreground particles
      const foregroundCount = isMobile ? 40 : Math.min(Math.floor(logicalWidth / 10), 120);
      for (let i = 0; i < foregroundCount; i++) {
        particles.push(new Particle(0));
      }

      // Background micro-dots for depth (3D effect)
      const backgroundCount = isMobile ? 60 : Math.min(Math.floor(logicalWidth / 5), 200);
      for (let i = 0; i < backgroundCount; i++) {
        particles.push(new Particle(1));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // If it's the first move, jump lerped mouse to current pos
      if (lerpedMouse.x < 0) {
        lerpedMouse.x = mouse.x;
        lerpedMouse.y = mouse.y;
      }
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      depth: number; // 0 for foreground, 1 for background

      constructor(depth: number = 0) {
        this.x = Math.random() * logicalWidth;
        this.y = Math.random() * logicalHeight;
        this.depth = depth;
        
        // Background particles move slower and are smaller
        const speedFactor = depth === 1 ? 0.4 : 1;
        this.vx = (Math.random() - 0.5) * 0.15 * speedFactor; 
        this.vy = (Math.random() - 0.5) * 0.15 * speedFactor;
        
        this.baseSize = depth === 1 
          ? Math.random() * 0.6 + 0.4  // Micro-dots
          : Math.random() * 1.5 + 0.8; // Foreground
        this.size = this.baseSize;
      }

      update() {
        // Only foreground particles react strongly to mouse
        if (this.depth === 0) {
          const dx = lerpedMouse.x - this.x;
          const dy = lerpedMouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceRange = 150;

          if (distance < forceRange) {
            const force = (forceRange - distance) / forceRange;
            this.x += (dx / distance) * force * 0.5;
            this.y += (dy / distance) * force * 0.5;
            this.size = this.baseSize + force * 1.5;
          } else {
            this.size = this.baseSize;
          }
        }

        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges with soft reset
        if (this.x < 0) this.x = logicalWidth;
        if (this.x > logicalWidth) this.x = 0;
        if (this.y < 0) this.y = logicalHeight;
        if (this.y > logicalHeight) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (this.depth === 1) {
          // Background micro-dots are dimmer
          ctx.fillStyle = 'rgba(34, 211, 238, 0.2)'; 
        } else {
          // Foreground particles are brighter, especially near mouse
          const dMouse = distanceToMouse(this.x, this.y);
          ctx.fillStyle = dMouse < 150 
            ? `rgba(34, 211, 238, ${0.4 + (this.size - this.baseSize) / 2})` 
            : 'rgba(34, 211, 238, 0.4)'; 
        }
        ctx.fill();
      }
    }

    const distanceToMouse = (x: number, y: number) => {
      const dx = lerpedMouse.x - x;
      const dy = lerpedMouse.y - y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      // Smoothly interpolate mouse position
      lerpedMouse.x += (mouse.x - lerpedMouse.x) * 0.08;
      lerpedMouse.y += (mouse.y - lerpedMouse.y) * 0.08;

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const connectDistance = 120;

          if (distance < connectDistance) {
            ctx.beginPath();
            const opacity = 0.1 * (1 - distance / connectDistance);
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`; 
            ctx.lineWidth = 0.4;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect particles to lerped mouse
        const dMouse = distanceToMouse(particle.x, particle.y);
        const mouseDistance = 180;

        if (dMouse < mouseDistance) {
           ctx.beginPath();
           const opacity = 0.4 * (1 - dMouse / mouseDistance);
           ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`; 
           ctx.lineWidth = 0.8;
           ctx.moveTo(particle.x, particle.y);
           ctx.lineTo(lerpedMouse.x, lerpedMouse.y);
           ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial setup
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[1] bg-transparent" />;
};