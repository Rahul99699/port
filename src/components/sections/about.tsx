"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, Target, Lightbulb } from "lucide-react";
import NanoAssemblyText from "../ui/nano-assembly-text";
import NanoDivider from "../ui/nano-divider";

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative py-24">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10"
      >
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="flex flex-col items-center text-center md:items-start md:text-left"
        >
          {/* ZONE TITLE */}
          <div className="flex items-center gap-2 mb-8 md:self-start">
            <span className="font-mono text-[10px] text-[#00d4ff]/60 uppercase tracking-[0.3em]">
              LAYER_IDENTITY // About Me
            </span>
          </div>

          {/* HOOK */}
          <NanoAssemblyText 
            text="I started with curiosity — how do machines think?"
            as="h2"
            className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight tracking-tight font-display"
          />

          {/* STORY */}
          <div className="max-w-2xl space-y-8 mb-16">
            <NanoAssemblyText 
              text="That curiosity turned into code. I’m Rahul — an AI/ML developer building intelligent systems with a creative edge."
              as="p"
              delay={0.5}
              className="text-lg md:text-xl text-[#9ca3af] font-light leading-relaxed"
            />
            <NanoAssemblyText 
              text="From sentiment analysis to multi-agent environments, I focus on turning complex ideas into interactive experiences that learn and evolve."
              as="p"
              delay={0.8}
              className="text-lg md:text-xl text-[#9ca3af] font-light leading-relaxed"
            />
            <NanoAssemblyText 
              text="With a strong foundation in Data Structures, Algorithms, and industrial-grade AI training, I bridge the gap between academic theory and real-world deployment."
              as="p"
              delay={1.0}
              className="text-lg md:text-xl text-[#9ca3af] font-light leading-relaxed"
            />
          </div>

          <NanoDivider />

          {/* SIGNATURE LINE */}
          <NanoAssemblyText 
            text="I don’t just build projects. I build intelligence."
            as="h3"
            delay={1.2}
            className="text-2xl md:text-3xl font-display font-bold text-white mb-16 tracking-wide"
          />

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <AboutCard 
              index={0}
              icon={<Brain className="text-[#00d4ff]" size={28} />}
              title="What I Do"
              desc="Build intelligent systems using advanced AI & Machine Learning architectures like TensorFlow and PyTorch."
            />
            <AboutCard 
              index={1}
              icon={<Lightbulb className="text-[#00d4ff]" size={28} />}
              title="How I Think"
              desc="I combine pure logic and data-driven decisions with human-centric creativity to solve complex problems."
            />
            <AboutCard 
              index={2}
              icon={<Target className="text-[#00d4ff]" size={28} />}
              title="My Goal"
              desc="To pioneer autonomous systems that don't just function, but truly interact, adapt, and evolve with their environment."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AboutCard = ({ 
  icon, 
  title, 
  desc, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      viewport={{ once: true }}
      className="nano-glass p-8 group cursor-default h-full flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#00d4ff]/5 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-[#00d4ff]/10 transition-colors" />
      
      <div className="mb-6 p-4 nano-glass border-[#00d4ff]/10 group-hover:border-[#00d4ff]/30 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-lg font-mono text-white mb-4 group-hover:text-[#00d4ff] transition-colors uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-[#9ca3af] text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};


export default AboutSection;
