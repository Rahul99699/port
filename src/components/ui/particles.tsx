"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const Particles = ({ count = 30 }: { count?: number }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            opacity: 0, 
            x: `${p.x}vw`, 
            y: `${p.y}vh` 
          }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [`${p.y}vh`, `${p.y - 10}vh`],
            x: [`${p.x}vw`, `${p.x + (Math.random() * 4 - 2)}vw`]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          className="absolute rounded-full bg-primary/20 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
};
