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

const isSmallOrTouchDevice = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(max-width: 860px)").matches || window.matchMedia("(pointer: coarse)").matches);

export default function SceneCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion() || isSmallOrTouchDevice()) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let lastFrame = 0;
    let running = true;
    let pointer = { x: -999, y: -999 };
    let particles: Particle[] = [];
    const targetFrameMs = 1000 / 24;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(64, Math.max(24, Math.floor((width * height) / 36000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.12,
        size: Math.random() * 1.4 + 0.3,
        hue: 24 + Math.random() * 26
      }));
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
    };

    const render = (time: number) => {
      if (!running) return;

      if (time - lastFrame < targetFrameMs) {
        raf = requestAnimationFrame(render);
        return;
      }

      lastFrame = time;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 380);
      gradient.addColorStop(0, "rgba(255, 102, 0, .12)");
      gradient.addColorStop(0.42, "rgba(255, 102, 0, .025)");
      gradient.addColorStop(1, "rgba(255, 102, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx * (0.4 + p.z);
        p.y += p.vy * (0.4 + p.z);

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = Math.max(0, 1 - dist / 180);
        const alpha = 0.12 + p.z * 0.24 + near * 0.32;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 100%, ${58 + p.z * 14}%, ${alpha})`;
        ctx.arc(p.x, p.y, p.size + near * 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const start = () => {
      if (running) return;
      running = true;
      lastFrame = 0;
      raf = requestAnimationFrame(render);
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    raf = requestAnimationFrame(render);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="scene-canvas" aria-hidden="true" />;
}
