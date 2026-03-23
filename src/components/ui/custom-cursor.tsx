"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Outer Ring */}
      <motion.div
        className="absolute w-8 h-8 border border-primary/50 rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="absolute w-2 h-2 bg-primary rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing Aura on Hover */}
      {isHovering && (
        <motion.div
           className="absolute w-12 h-12 bg-primary/10 rounded-full blur-xl"
           style={{
             x: cursorXSpring,
             y: cursorYSpring,
             translateX: "-50%",
             translateY: "-50%",
           }}
           initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 2, opacity: 1 }}
           exit={{ scale: 0, opacity: 0 }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
