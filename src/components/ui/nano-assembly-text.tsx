"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface NanoAssemblyTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
}

const NanoAssemblyText = ({ text, as: Tag = "h2", className, delay = 0 }: NanoAssemblyTextProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const words = text.split(" ");
  const highlightWords = ["intelligence", "learn", "systems", "ai/ml", "developer"];

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => {
        const isHighlighted = highlightWords.includes(word.toLowerCase().replace(/[.,!?;:]/g, ""));
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`inline-block mr-[0.25em] ${isHighlighted ? "text-[#00d4ff] nano-text-glow" : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </Tag>
  );
};

export default NanoAssemblyText;
