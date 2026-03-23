"use client";

import { SkillNames, SKILLS, SKILL_CATEGORIES } from "@/data/constants";
import { motion } from "framer-motion";
import NanoAssemblyText from "../ui/nano-assembly-text";
import NanoDivider from "../ui/nano-divider";
import { TechIcon3D } from "../ui/tech-icon-3d";

const SkillsSection = () => {
  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#00d4ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#00ffb7]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[10px] text-[#00d4ff]/60 uppercase tracking-[0.3em]">
            SYSTEM_CAPABILITIES // Technical Stack
          </span>
        </div>
        <NanoAssemblyText 
          text="Expertise & Technologies"
          as="h2"
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-display"
        />
        <NanoAssemblyText 
          text="Empowering the future with advanced AI, ML, and robust engineering."
          as="p"
          delay={0.3}
          className="text-[#9ca3af] max-w-2xl text-lg font-light leading-relaxed"
        />
      </div>

      <NanoDivider />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 relative z-10">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="nano-glass p-8 group relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#00d4ff]/10 transition-colors" />
            
            <h3 className="text-xl font-mono text-white mb-8 group-hover:text-[#00d4ff] transition-colors flex items-center gap-3 uppercase tracking-wider">
               <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] nano-text-glow" />
               {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-6 justify-center md:justify-start flex-grow">
              {category.skills.map((skillName, sIdx) => {
                const skill = SKILLS[skillName as SkillNames];
                if (!skill) return null;
                return (
                  <motion.div
                    key={skillName}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20, 
                      delay: idx * 0.1 + sIdx * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="z-10"
                  >
                    <TechIcon3D 
                      name={skill.label}
                      icon={skill.icon}
                      color={skill.color}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default SkillsSection;

