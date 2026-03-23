"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const TypingText = ({ text, className, delay = 0, speed = 0.05 }: TypingTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!start) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [start, text, speed]);

  return (
    <p className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
      />
    </p>
  );
};
