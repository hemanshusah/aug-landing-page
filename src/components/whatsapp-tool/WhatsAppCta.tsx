"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

interface WhatsAppCtaProps {
  onOpenModal: (mode?: "waitlist" | "growth_potential" | "demo") => void;
}

export function WhatsAppCta({ onOpenModal }: WhatsAppCtaProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#060D1E] py-20 md:py-28 text-white border-t border-white/10">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-[#0049DB]/30 via-[#579BFF]/20 to-transparent blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#579BFF] backdrop-blur-md">
          <IoLogoWhatsapp className="h-4 w-4 text-[#25D366]" />
          <span>Meta Approved Cloud Platform</span>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to scale 98% open-rate outreach on autopilot?
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            Connect your official WhatsApp Cloud API line and unlock multi-agent collaborative workflows today.
          </p>
        </div>

        {/* Input & Form */}
        <div className="max-w-md mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                required
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-zinc-400 px-5 text-sm focus-visible:ring-[#579BFF]"
              />
              <Button
                type="submit"
                className="h-12 rounded-full bg-[#0049DB] hover:bg-[#003bb3] text-white px-7 text-sm font-bold shadow-lg shadow-[#0049DB]/40 transition-all flex items-center justify-center gap-2 shrink-0 group"
              >
                <span>Try it for free!</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          ) : (
            <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-300 text-sm flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>Priority access requested! Our architects will reach out shortly.</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 pt-2">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Zero Setup Fee
          </span>
          <span>•</span>
          <span>Unlimited Team Seats</span>
          <span>•</span>
          <span>No Credit Card Required</span>
        </div>

      </div>
    </section>
  );
}
