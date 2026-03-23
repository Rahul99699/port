"use client";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      toast({
        title: "SIGNAL_RECEIVED",
        description: "Transmission successful. I'll get back to you soon.",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4 border-[#00d4ff]/20 bg-[#040a1c] text-white"),
      });
      setLoading(false);
      setFullName("");
      setEmail("");
      setMessage("");
      const timer = setTimeout(() => {
        router.push("/");
        clearTimeout(timer);
      }, 1000);
    } catch (err) {
      toast({
        title: "TRANSMISSION_ERROR",
        description: "Something went wrong! Please check the fields.",
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"
        ),
        variant: "destructive",
      });
    }
    setLoading(false);
  };
  return (
    <form className="w-full mx-auto sm:mt-4 space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-6">
        <LabelInputContainer>
          <Label htmlFor="fullname" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00d4ff]/60 mb-2">
            SENDER_NAME
          </Label>
          <Input
            id="fullname"
            placeholder="Identity Required"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-[#040a1c]/50 border-[#00d4ff]/10 focus:border-[#00d4ff]/40 text-white placeholder:text-[#9ca3af]/30 font-mono text-sm"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00d4ff]/60 mb-2">
            SENDER_EMAIL
          </Label>
          <Input
            id="email"
            placeholder="endpoint@network.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#040a1c]/50 border-[#00d4ff]/10 focus:border-[#00d4ff]/40 text-white placeholder:text-[#9ca3af]/30 font-mono text-sm"
          />
        </LabelInputContainer>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="content" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00d4ff]/60 mb-2">
          TRANSMISSION_CONTENT
        </Label>
        <Textarea
          placeholder="Initiate information transfer..."
          id="content"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#040a1c]/50 border-[#00d4ff]/10 focus:border-[#00d4ff]/40 text-white placeholder:text-[#9ca3af]/30 font-mono text-sm min-h-[150px]"
        />
        <p className="text-[10px] font-mono text-[#9ca3af]/50 uppercase tracking-widest mt-2 grayscale hover:grayscale-0 transition-all">
          // DATA_ENCRYPTION: ACTIVE // PRIVACY_PROTOCOL: SECURE
        </p>
      </div>
      
      <button
        disabled={loading}
        className="nano-button w-full h-12 flex items-center justify-center gap-2 group"
        type="submit"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>PROCESSING...</span>
          </>
        ) : (
          <>
            <span>SEND_TRANSMISSION.exe</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      {children}
    </div>
  );
};
