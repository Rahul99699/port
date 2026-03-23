"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} color={"#fff"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />,
  },
  {
    name: "Twitter",
    href: config.social.twitter,
    icon: <SiX size={"24"} color={"#fff"} />,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    icon: <SiInstagram size={"24"} color={"#fff"} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10 flex gap-4">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl nano-glass border-[#00d4ff]/10 hover:border-[#00d4ff]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300 group/social"
            >
              <div className="text-white/70 group-hover/social:text-[#00d4ff] transition-colors">
                {button.icon}
              </div>
            </motion.div>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
