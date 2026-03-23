"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-300",
        scrolled ? "bg-[#040a1c]/85 backdrop-blur-[20px] border-bottom border-[#00d4ff]/10" : "bg-transparent"
      )}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-lg font-bold text-[#00d4ff] nano-text-glow">
          RAHUL.exe
        </Link>

        <div className="flex items-center gap-6">
          <FunnyThemeToggle className="w-6 h-6 hidden md:flex" />
          
          <Button
            variant={"ghost"}
            onClick={() => setIsActive(!isActive)}
            className="font-mono text-[10px] text-[#00d4ff]/60 uppercase tracking-widest flex items-center gap-2 hover:text-[#00d4ff] transition-colors"
          >
            <span>{isActive ? "CLOSE" : "MENU"}</span>
            <div className={`w-4 h-[1px] bg-current transition-all ${isActive ? "rotate-45" : ""}`} />
          </Button>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
