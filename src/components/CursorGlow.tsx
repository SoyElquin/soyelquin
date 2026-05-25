"use client";

import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CursorGlow() {
  const { x, y } = useMousePosition();
  const sx = useSpring(x, { stiffness: 90, damping: 25, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 90, damping: 25, mass: 0.4 });

  return (
    <motion.div
      className="cursor-glow"
      style={{ x: sx, y: sy }}
      aria-hidden="true"
    />
  );
}
