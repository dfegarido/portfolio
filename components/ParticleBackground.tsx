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
    let logicalWidth = 0;
    let logicalHeight = 0;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      logicalWidth = window.innerWidth;
      logicalHeight = window.innerHeight;
      
      // Set actual size in memory (scaled to account for extra pixel density)
      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      
      // Make it look the same size on screen
      canvas.style.width = `${logicalWidth}px`;
      canvas.style.height = `${logicalHeight}px`;

      // Normalize coordinate system to use logical pixels
      ctx.scale(dpr, dpr);
      
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * logicalWidth;
        this.y = Math.random() * logicalHeight;
        // Reduced velocity for smoother, more elegant floating effect
        this.vx = (Math.random() - 0.5) * 0.2; 
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 1.5 + 0.5; // Slightly smaller, sharper dots
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > logicalWidth) this.vx *= -1;
        if (this.y < 0 || this.y > logicalHeight) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.7)'; // Cyan-400
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      // Adjust count for performance vs density
      const particleCount = Math.min(Math.floor(logicalWidth / 10), 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Connect particles to each other
        for (let j = i; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const connectDistance = 150;

          if (distance < connectDistance) {
            ctx.beginPath();
            const opacity = 0.15 * (1 - distance / connectDistance);
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`; // Slate-400
            ctx.lineWidth = 0.5; // Thinner lines for elegance
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect particles to mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const mouseDistance = 200;

        if (distance < mouseDistance) {
           ctx.beginPath();
           const opacity = 0.3 * (1 - distance / mouseDistance);
           ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`; // Cyan-400
           ctx.lineWidth = 0.6;
           ctx.moveTo(particle.x, particle.y);
           ctx.lineTo(mouse.x, mouse.y);
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