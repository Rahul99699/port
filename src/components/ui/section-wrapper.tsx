"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  zoneIndex: string;
  className?: string;
}

const SectionWrapper = ({ children, id, zoneIndex, className }: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section 
      ref={ref}
      id={id}
      className={`relative min-h-[50vh] transition-all duration-[650ms] ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        filter: isInView ? "blur(0px)" : "blur(6px)",
        transform: isInView ? "translateY(0) scale(1)" : "translateY(32px) scale(0.98)",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Zone Label */}
      <div className="absolute top-8 right-8 font-mono text-[10px] text-[rgba(0,200,255,0.35)] uppercase tracking-widest select-none">
        ZONE_{zoneIndex} // {id}
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-16 relative z-10">
        {children}
      </div>

      {/* Subtle Radial Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.08)_0%,transparent_70%)] opacity-[0.08]" />
    </section>
  );
};

export default SectionWrapper;
