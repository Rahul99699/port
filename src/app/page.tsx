"use client";

import React from "react";
import { cn } from "@/lib/utils";
import NanoCanvas from "@/components/ui/nano-canvas";
import CursorTrail from "@/components/ui/cursor-trail";
import SectionWrapper from "@/components/ui/section-wrapper";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import CertificationsSection from "@/components/sections/certifications";
import AboutSection from "@/components/sections/about";

function MainPage() {
  return (
    <>
      <NanoCanvas />
      <CursorTrail />
      <main className={cn("relative z-10 bg-[#040a1c]/40")}>
        <SectionWrapper id="hero" zoneIndex="01">
          <HeroSection />
        </SectionWrapper>
        
        <SectionWrapper id="about" zoneIndex="02">
          <AboutSection />
        </SectionWrapper>

        <SectionWrapper id="skills" zoneIndex="03">
          <SkillsSection />
        </SectionWrapper>

        <SectionWrapper id="certifications" zoneIndex="04">
          <CertificationsSection />
        </SectionWrapper>

        <SectionWrapper id="projects" zoneIndex="05">
          <ProjectsSection />
        </SectionWrapper>

        <SectionWrapper id="contact" zoneIndex="06">
          <ContactSection />
        </SectionWrapper>
      </main>
    </>
  );
}

export default MainPage;
