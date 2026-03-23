"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface NanoSkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const NanoSkillBar = ({ name, percentage, delay = 0 }: NanoSkillBarProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-[11px] text-[#9ca3af] uppercase tracking-wider">{name}</span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 1.2, duration: 0.5 }}
          className="font-mono text-[11px] text-[#00d4ff]"
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{
            delay,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full bg-gradient-to-r from-[#0070ff] to-[#00d4ff] shadow-[0_0_8px_rgba(0,212,255,0.6)]"
        />
      </div>
    </div>
  );
};

export default NanoSkillBar;
