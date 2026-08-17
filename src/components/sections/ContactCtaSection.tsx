"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, ShieldCheck, CheckCircle2, Sparkles, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface ContactCtaSectionProps {
  onOpenWaitlist: (mode?: "waitlist" | "growth_potential" | "demo") => void;
}

export function ContactCtaSection({ onOpenWaitlist }: ContactCtaSectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp Enterprise Channel",
      description: "Direct instant chat with our technical architecture team.",
      details: "+1 (800) 555-OBISS / Live Chat",
    },
    {
      icon: Mail,
      title: "Solutions & Inquiries",
      description: "Send your pipeline requirements & architecture specs.",
      details: "enterprise@obishub.com",
    },
    {
      icon: Globe,
      title: "Global Headquarters",
      description: "Smart Office Architecture & Distributed Cloud Ops.",
      details: "Silicon Valley, CA & Singapore",
    },
  ];

  return (
    <section id="contact" className="relative bg-[#060D1E] text-white py-20 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#0049DB]/25 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Block */}
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-8 sm:p-12 md:p-16 backdrop-blur-2xl text-center max-w-5xl mx-auto shadow-2xl">
          
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge className="bg-[#0049DB]/40 text-[#579BFF] border-[#579BFF]/30 px-3.5 py-1 text-xs uppercase tracking-widest font-bold">
              <Sparkles className="mr-1.5 h-3.5 w-3.5 inline" /> READY FOR SCALE
            </Badge>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl mx-auto leading-[1.12]">
            Build the permanent, automated infrastructure for your B2B revenue
          </h2>

          <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Join the waitlist today. Stop fighting broken CRM updates and siloed outreach—switch on the intelligence layer that runs autonomously.
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                required
                placeholder="Enter work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-full border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-zinc-400 focus-visible:ring-1 focus-visible:ring-[#579BFF]"
              />
              <Button
                type="submit"
                className="h-12 px-7 rounded-full bg-[#0049DB] font-semibold text-white hover:bg-[#003bb3] shadow-lg shadow-[#0049DB]/40 flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Join Priority List</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          ) : (
            <div className="mt-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 max-w-md mx-auto flex items-center justify-center gap-3 text-emerald-300 text-sm">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>Thank you! Your spot is reserved. We&apos;ll be in touch soon.</span>
            </div>
          )}

          {/* Micro badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#579BFF]" />
              Enterprise GDPR & SOC-2 Ready
            </span>
            <span>•</span>
            <span>Zero Setup Fee</span>
            <span>•</span>
            <span>24/7 Dedicated Architecture Support</span>
          </div>

        </div>

        {/* 3 Contact Method Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-[#0049DB]/50 transition-all text-center space-y-3"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0049DB]/30 text-[#579BFF]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-white">{m.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{m.description}</p>
                <p className="text-xs font-mono font-semibold text-[#579BFF] pt-1">{m.details}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
