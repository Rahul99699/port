"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const NanoDivider = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex items-center justify-center gap-4 my-12 opacity-80">
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: "120px", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-[1px] bg-[linear-gradient(90deg,transparent,rgba(0,212,255,0.4))]" 
      />
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-[6px] h-[6px] rounded-full bg-[#00d4ff] shadow-[0_0_10px_#00d4ff]" 
      />
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: "120px", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-[1px] bg-[linear-gradient(90deg,rgba(0,212,255,0.4),transparent)]" 
      />
    </div>
  );
};

export default NanoDivider;
