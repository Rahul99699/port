"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import projects, { Project } from "@/data/projects";
import NanoAssemblyText from "../ui/nano-assembly-text";
import NanoDivider from "../ui/nano-divider";
import { useMotionValue, useSpring, useTransform, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";

const ProjectsSection = () => {
  return (
    <div className="relative py-24">
      <div className="flex flex-col items-center text-center mb-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[10px] text-[#00d4ff]/60 uppercase tracking-[0.3em]">
            SYSTEM_OUTPUT // Case Studies
          </span>
        </div>
        <NanoAssemblyText 
          text="Featured Projects"
          as="h2"
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-display"
        />
        <NanoAssemblyText 
          text="Showcasing high-impact AI and intelligent systems."
          as="p"
          delay={0.3}
          className="text-[#9ca3af] max-w-2xl text-lg font-light leading-relaxed"
        />
      </div>

      <NanoDivider />

      <div className="mt-20 relative z-10 flex justify-center items-center h-[600px]">
        <ProjectStack projects={projects} />
      </div>
    </div>
  );
};

const ProjectStack = ({ projects }: { projects: Project[] }) => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full max-w-4xl h-full flex justify-center items-center perspective-1000">
      <AnimatePresence mode="popLayout">
        {projects.map((project, i) => {
          // Only render current and next 2 for performance/visuals
          const isVisible = i === index || i === (index + 1) % projects.length || i === (index + 2) % projects.length;
          if (!isVisible) return null;

          const offset = (i - index + projects.length) % projects.length;
          
          return (
            <motion.div
              key={project.id}
              style={{
                zIndex: projects.length - offset,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.8, x: 200, z: -200 }}
              animate={{ 
                opacity: 1 - offset * 0.3, 
                scale: 1 - offset * 0.1, 
                x: offset * 40,
                z: -offset * 100,
                rotateY: offset * -10,
              }}
              exit={{ opacity: 0, scale: 0.5, x: -400, rotate: -20 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) nextCard();
                if (info.offset.x > 100) prevCard();
              }}
              className="absolute w-full aspect-[16/10] md:aspect-[21/9] cursor-grab active:cursor-grabbing"
            >
              <ProjectCard project={project} isLarge />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute -bottom-16 flex gap-8 z-50">
        <button 
          onClick={prevCard}
          className="nano-button px-4 py-2 text-[10px] border-[#00d4ff]/20 hover:border-[#00d4ff]"
        >
          PREV //
        </button>
        <div className="flex gap-2 items-center">
          {projects.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                i === index ? "bg-[#00d4ff] w-4 shadow-[0_0_8px_#00d4ff]" : "bg-[#00d4ff]/20"
              )}
            />
          ))}
        </div>
        <button 
          onClick={nextCard}
          className="nano-button px-4 py-2 text-[10px] border-[#00d4ff]/20 hover:border-[#00d4ff]"
        >
          // NEXT
        </button>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, isLarge }: { project: Project; isLarge?: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent group/modal-btn block w-full">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className={cn(
              "nano-glass relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden group border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-all duration-500",
              isLarge && "border-[#00d4ff]/20"
            )}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
              style={{
                background: "radial-gradient(circle at center, rgba(0, 212, 255, 0.15) 0%, transparent 70%)"
              }}
            />
            
            <Image
              className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100 transition-opacity"
              src={project.src}
              alt={project.title}
              width={600}
              height={400}
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#040a1c] via-[#040a1c]/80 to-transparent p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.skills.backend.map((skill, i) => (
                  <Badge key={i} variant="outline" className="text-[10px] py-0 border-[#00d4ff]/20 bg-[#00d4ff]/5 text-[#00d4ff] backdrop-blur-md font-mono">
                    {skill.title}
                  </Badge>
                ))}
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
                {project.title}
              </h3>
              <p className="text-[10px] font-mono text-[#9ca3af] uppercase tracking-wider">
                CATEGORY // {project.category}
              </p>
              
              <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] font-mono text-[#00d4ff] flex items-center gap-2 uppercase tracking-widest">
                  ACCESS_CASE_STUDY <ExternalLink size={12} />
                </span>
                <div className="flex gap-2 text-[#9ca3af]">
                   {project.github && <Github size={16} className="hover:text-[#00d4ff] transition-colors" />}
                </div>
              </div>
            </div>
            
            {/* Nano Shine Effect on Hover */}
            <div className="absolute -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-[#00d4ff]/10 to-transparent opacity-0 group-hover:animate-shine" />
          </motion.div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[85%] overflow-hidden flex flex-col bg-[#040a1c] border-[#00d4ff]/20">
           <div className="flex-1 overflow-y-auto nano-scrollbar">
              <ModalContent>
                <ProjectContents project={project} />
              </ModalContent>
           </div>
          <ModalFooter className="gap-4 bg-[#040a1c]/80 backdrop-blur-md border-t border-[#00d4ff]/10 p-6 flex justify-end">
            <button className="px-6 py-2 font-mono text-[10px] text-[#9ca3af] hover:text-white transition-colors uppercase tracking-widest">
              DISMISS
            </button>
            <Link href={project.live} target="_blank">
              <button className="nano-button">
                LIVE_DEMO.exe
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {/* <div className="flex justify-center items-center">
        {project.screenshots.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${project.src.split("1.png")[0]}${image}`}
              alt="screenshots"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}
      {project.content}
    </>
  );
};
