"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface TechIcon3DProps {
  name: string;
  icon: string;
  color: string;
}

export const TechIcon3D = ({ name, icon, color }: TechIcon3DProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["30deg", "-30deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-30deg", "30deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center group cursor-pointer"
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
        style={{ backgroundColor: color }}
      />

      {/* Main Container */}
      <motion.div
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10 w-full h-full nano-glass flex flex-col items-center justify-center p-4 border-[#00d4ff]/10 group-hover:border-[#00d4ff]/40 transition-colors"
      >
        <div className="relative w-12 h-12 md:w-16 md:h-16 mb-2">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-[0_0_8px_rgba(0,212,255,0.3)]"
          />
        </div>
        <span className="font-mono text-[10px] md:text-xs text-[#9ca3af] group-hover:text-[#00d4ff] transition-colors uppercase tracking-widest text-center">
          {name}
        </span>
      </motion.div>

      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-2 bg-black/40 rounded-full blur-md opacity-40 group-hover:scale-110 transition-transform" />
    </motion.div>
  );
};
