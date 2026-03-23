"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import NanoAssemblyText from "../ui/nano-assembly-text";
import NanoDivider from "../ui/nano-divider";

const ContactSection = () => {
  return (
    <div className="relative py-24">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[10px] text-[#00d4ff]/60 uppercase tracking-[0.3em]">
            COMM_LINK // Establish Connection
          </span>
        </div>
        <div className="flex flex-col items-center">
          <NanoAssemblyText 
            text="LET'S WORK"
            as="h2"
            className="text-4xl md:text-7xl font-bold text-white font-display"
          />
          <NanoAssemblyText 
            text="TOGETHER"
            as="h2"
            delay={0.5}
            className="text-4xl md:text-7xl font-bold text-white font-display"
          />
        </div>
        <NanoAssemblyText 
          text="Ready to build the next generation of intelligent systems?"
          as="p"
          delay={0.3}
          className="text-[#9ca3af] max-w-2xl text-lg font-light leading-relaxed"
        />
      </div>

      <NanoDivider />

      <div className="max-w-4xl mx-auto mt-20 relative z-10 px-4">
        <div className="nano-glass p-1">
          <Card className="bg-transparent border-none shadow-none text-white">
            <CardHeader className="space-y-4">
              <CardTitle className="text-3xl font-display font-bold text-white">
                CONTACT_PROTOCOL.exe
              </CardTitle>
              <CardDescription className="text-[#9ca3af] text-lg font-light">
                Please contact me directly at{" "}
                <a
                  target="_blank"
                  href={`mailto:${config.email}`}
                  className="text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors nano-text-glow font-mono"
                >
                  {config.email.replace(/@/g, "(at)")}
                </a>{" "}
                or initiate the encrypted transmission below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
