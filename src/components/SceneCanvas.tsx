"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function SceneCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let pointer = { x: -999, y: -999 };
    let particles: Particle[] = [];
    const reduced = prefersReducedMotion();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(120, Math.max(46, Math.floor((width * height) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.18,
        size: Math.random() * 1.7 + 0.35,
        hue: 24 + Math.random() * 26
      }));
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const scroll = window.scrollY || 0;
      const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 460);
      gradient.addColorStop(0, "rgba(255, 102, 0, .16)");
      gradient.addColorStop(0.42, "rgba(255, 102, 0, .035)");
      gradient.addColorStop(1, "rgba(255, 102, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        if (!reduced) {
          p.x += p.vx * (0.45 + p.z * 1.4);
          p.y += p.vy * (0.45 + p.z * 1.4) + Math.sin((scroll * 0.002 + i) * 0.5) * 0.025;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = Math.max(0, 1 - dist / 220);
        const alpha = 0.16 + p.z * 0.32 + near * 0.5;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, ${58 + p.z * 16}%, ${alpha})`;
        ctx.arc(p.x, p.y, p.size + near * 2.5, 0, Math.PI * 2);
        ctx.fill();

        if (near > 0.13) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 98, 0, ${near * 0.18})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="scene-canvas" aria-hidden="true" />;
}
