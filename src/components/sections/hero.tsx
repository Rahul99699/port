import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMounted } from "@/hooks/use-mounted";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin, Brain, Sparkles, ExternalLink } from "lucide-react";
import { config } from "@/data/config";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import NanoAssemblyText from "../ui/nano-assembly-text";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const HeroSection = () => {
  const mounted = useMounted();
  // 3D Quote Parallax
  const quoteRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!quoteRef.current) return;
    const rect = quoteRef.current.getBoundingClientRect();
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
    <div className="relative w-full min-h-[80vh] flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[10px] text-[#00d4ff]/60 uppercase tracking-[0.3em]">
              SYSTEM_INIT // Welcome
            </span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles size={14} className="text-[#00d4ff]" />
            </motion.div>
          </div>

          <NanoAssemblyText 
            text="Rahul" 
            as="h1" 
            className="text-7xl md:text-8xl lg:text-9xl font-display text-white mb-2 tracking-tighter"
          />

          <NanoAssemblyText 
            text="AI/ML DEVELOPER" 
            as="h2" 
            delay={0.5}
            className="font-mono text-sm md:text-lg text-[#00d4ff] tracking-[0.4em] mb-12 opacity-80"
          />

          <motion.div
            ref={quoteRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative max-w-lg group mb-12"
          >
            <div className="nano-glass p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />
              <p className="font-sans text-[#e5e7eb] text-lg leading-relaxed italic">
                "I don’t just write code —  
                <br />
                I create <span className="text-[#00d4ff] nano-text-glow">intelligence</span> that interacts, learns, and evolves."
              </p>
              <div className="absolute -top-3 -right-3 p-3 nano-glass border-[#00d4ff]/20 bg-[#040a1c]">
                <Brain size={20} className="text-[#00d4ff]" />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <Link href={config.resume} target="_blank">
              <button className="nano-button flex items-center gap-2">
                <File size={18} />
                <span>RESUME.pdf</span>
              </button>
            </Link>
            
            <Link href="#projects">
              <button className="nano-button flex items-center gap-2 border-white/20 text-white/80 hover:border-[#00d4ff]">
                <span>VIEW_PROJECTS</span>
                <ExternalLink size={16} />
              </button>
            </Link>
          </div>
          
          <div className="mt-12 flex gap-4">
            {[config.social.github, config.social.linkedin, config.social.twitter].map((link, i) => {
              const Icon = [SiGithub, SiLinkedin, SiX][i];
              return (
                <Link key={i} href={link} target="_blank">
                  <Button variant="ghost" size="icon" className="text-[#9ca3af] hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all">
                    <Icon size={20} />
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center relative">
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-96 h-96 rounded-full bg-[#00d4ff]/5 blur-[100px] absolute"
          />
          {/* Placeholder for future 3D element if needed, but keeping it clean for Nano theme */}
          <div className="font-mono text-[8px] text-[#00d4ff]/20 leading-none select-none overflow-hidden h-96 w-full flex items-center justify-center mask-fade-edges">
            {mounted && Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {Array.from({ length: 20 }).map((_, j) => (
                  <span key={j} className="mx-2">
                    {Math.random() > 0.5 ? "01" : "10"}
                    {Math.random() > 0.8 ? " // EXEC" : ""}
                    {Math.random() > 0.9 ? " // CORE" : ""}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
