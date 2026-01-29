
import React, { useEffect, useRef } from 'react';

const FluidCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };
    let pos = { x: width / 2, y: height / 2 };
    
    // Spring physics constants for "fluid" feel
    const friction = 0.85;
    const speed = 0.15;
    let vx = 0;
    let vy = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Physics: Follow mouse with spring
      vx += (mouse.x - pos.x) * speed;
      vy += (mouse.y - pos.y) * speed;
      vx *= friction;
      vy *= friction;
      pos.x += vx;
      pos.y += vy;

      // Draw Fluid Blob
      const gradient = ctx.createRadialGradient(
        pos.x, pos.y, 0,
        pos.x, pos.y, 400
      );

      // Use the theme colors: Lime Green
      gradient.addColorStop(0, 'rgba(132, 204, 22, 0.15)'); 
      gradient.addColorStop(0.5, 'rgba(132, 204, 22, 0.05)');
      gradient.addColorStop(1, 'rgba(132, 204, 22, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 400, 0, Math.PI * 2);
      ctx.fill();

      // Secondary smaller intense "glass" core
      const coreGradient = ctx.createRadialGradient(
        pos.x, pos.y, 0,
        pos.x, pos.y, 100
      );
      coreGradient.addColorStop(0, 'rgba(132, 204, 22, 0.1)');
      coreGradient.addColorStop(1, 'rgba(132, 204, 22, 0)');
      
      ctx.fillStyle = coreGradient;
      ctx.fill();

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ filter: 'blur(40px)' }}
    />
  );
};

export default FluidCursor;
