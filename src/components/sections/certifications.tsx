"use client";

import { CERTIFICATIONS } from "@/data/constants";
import { Badge } from "../ui/badge";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import NanoAssemblyText from "../ui/nano-assembly-text";
import NanoDivider from "../ui/nano-divider";

const CertificationsSection = () => {
  return (
    <div className="relative py-24">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[10px] text-[#00d4ff]/60 uppercase tracking-[0.3em]">
            SYSTEM_CREDENTIALS // Validated Expertise
          </span>
        </div>
        <NanoAssemblyText 
          text="Certifications"
          as="h2"
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-display"
        />
        <NanoAssemblyText 
          text="Professional recognition and specialized training in AI/ML."
          as="p"
          delay={0.3}
          className="text-[#9ca3af] max-w-2xl text-lg font-light leading-relaxed"
        />
      </div>

      <NanoDivider />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 relative z-10">
        {CERTIFICATIONS.map((cert, index) => (
          <Certification3DCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </div>
  );
};

const Certification3DCard = ({
  cert,
  index,
}: {
  cert: (typeof CERTIFICATIONS)[0];
  index: number;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group h-[480px]"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="nano-glass relative h-full w-full p-4 border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-500 overflow-hidden"
      >
        <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col">
          {/* Image Container */}
          <div className="relative w-full h-48 overflow-hidden mb-6 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-shadow">
            {cert.image && (
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040a1c] via-transparent to-transparent opacity-60" />
            
            <div className="absolute top-3 right-3">
              <Badge variant="outline" className="bg-[#040a1c]/80 backdrop-blur-md border-[#00d4ff]/20 text-[#00d4ff] text-[10px] uppercase font-mono tracking-widest px-3 py-1">
                {cert.platform}
              </Badge>
            </div>
            <Award className="absolute bottom-3 left-3 text-[#00d4ff]/80 nano-text-glow" size={28} />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col px-2">
            <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight group-hover:text-[#00d4ff] transition-colors">
              {cert.title}
            </h3>
            
            <div className="flex items-center gap-2 text-[#9ca3af] text-[10px] mb-3 font-mono uppercase tracking-wider">
              <Calendar size={12} className="text-[#00d4ff]/60" />
              <span>{cert.issued}</span>
            </div>

            <p className="text-sm text-[#9ca3af] mb-4 line-clamp-2 italic leading-relaxed font-light">
              "{cert.description}"
            </p>

            <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#00d4ff]/10">
              <div className="flex flex-wrap gap-2">
                {cert.skills.slice(0, 2).map((skill) => (
                  <span key={skill} className="text-[10px] text-[#00d4ff]/60 font-mono uppercase tracking-widest">
                    #{skill}
                  </span>
                ))}
              </div>
              
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nano-button py-2 px-4 text-[9px]"
                >
                  VERIFY_LICENSE <ExternalLink size={10} className="ml-1" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#00d4ff]/10 transition-colors" />
      </motion.div>
    </motion.div>
  );
};


export default CertificationsSection;
