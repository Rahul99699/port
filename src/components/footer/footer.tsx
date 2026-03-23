import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative w-full py-12 px-6 md:px-12 border-t border-[#00d4ff]/10 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#040a1c]/80 backdrop-blur-md">
      <div className="flex flex-col items-center md:items-start gap-2">
        <p className="font-mono text-[10px] text-[#00d4ff]/40 uppercase tracking-[0.2em]">
          SYSTEM_STATUS // ONLINE
        </p>
        <p className="font-mono text-xs text-[#9ca3af]">
          © {year} {config.author.toUpperCase()} // ALL_RIGHTS_RESERVED
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <SocialMediaButtons />
        <div className="h-px w-12 bg-[#00d4ff]/20" />
      </div>

      <nav className="flex items-center gap-6 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="font-mono text-[10px] text-[#9ca3af] hover:text-[#00d4ff] transition-colors uppercase tracking-widest"
              href={href}
              key={`l_${index}`}
            >
              {title}
            </Link>
          );
        })}
      </nav>
      
      {/* Decorative pulse */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent animate-pulse" />
    </footer>
  );
}

export default Footer;
