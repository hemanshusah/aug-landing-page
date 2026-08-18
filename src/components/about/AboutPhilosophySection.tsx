"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Zap,
  Users2,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface AboutPhilosophySectionProps {
  onOpenModal: (mode?: "waitlist" | "growth_potential" | "demo") => void;
}

export function AboutPhilosophySection({ onOpenModal }: AboutPhilosophySectionProps) {
  return (
    <section className="relative bg-[#060D1E] text-white w-full py-20 md:py-32 overflow-hidden border-b border-white/10 bg-grid-subtle">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0049DB]/25 blur-[150px] rounded-full" />
      </div>

      {/* Dashed Accent Geometric Rings */}
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 rounded-full border border-dashed border-[#579BFF]/20 opacity-50" />
      <div className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 rounded-full border border-dashed border-[#0049DB]/25 opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#579BFF]">
              OUR OPERATING PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]">
            Human judgment at front. Automated execution behind.
          </h2>

          <div className="space-y-4 text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl">
            <p>
              We&apos;re not trying to replace what makes your team good at their job. The strategy, the read on a client, the instinct for when to push and when to wait — that stays with your people.
            </p>
            <p className="font-medium text-white border-l-4 border-[#579BFF] pl-5 py-1">
              What we take off their plate is everything else: the repetitive send, the manual log, the status update nobody has time to write. Human judgment at the front. Automated execution behind it. That&apos;s the whole idea.
            </p>
          </div>
        </div>

        {/* 2 Big Split Feature Cards with Landing-01 Corner Accents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Human Judgment at Front */}
          <div className="relative rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-[#579BFF]/40 transition-all shadow-xl overflow-hidden group">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#579BFF]/80" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#579BFF]/80" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#579BFF]/80" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#579BFF]/80" />

            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono font-bold tracking-wider text-[#579BFF] uppercase">
                  AT THE FRONT // YOUR TEAM
                </span>
                <div className="h-10 w-10 rounded-xl bg-[#0049DB]/30 text-[#579BFF] flex items-center justify-center">
                  <Brain className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  High-Touch Human Strategy
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  The irreplaceable elements that actually win enterprise trust and close high-value contracts.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-zinc-200">
                  <CheckCircle2 className="h-4 w-4 text-[#579BFF] shrink-0 mt-0.5" />
                  <span>Nuanced prospect discovery and customized deal structuring.</span>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-zinc-200">
                  <CheckCircle2 className="h-4 w-4 text-[#579BFF] shrink-0 mt-0.5" />
                  <span>Strategic intuition on client intent, timing, and negotiation leverage.</span>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-zinc-200">
                  <CheckCircle2 className="h-4 w-4 text-[#579BFF] shrink-0 mt-0.5" />
                  <span>Executive relationship building and high-trust advisory closing.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-zinc-400 font-mono">
              Role: Strategic Direction & Closing
            </div>
          </div>

          {/* Card 2: Automated Execution Behind */}
          <div className="relative rounded-3xl border border-[#0049DB]/50 bg-gradient-to-b from-[#0049DB]/25 via-white/5 to-[#060D1E] p-8 backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-[#579BFF]/70 transition-all shadow-2xl overflow-hidden group">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-400" />

            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                  BEHIND IT // OBISHUB ENGINE
                </span>
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Relentless Machine Execution
                </h3>
                <p className="text-sm text-zinc-200 leading-relaxed">
                  The automated heavy-lifting running non-stop without human fatigue or manual data entry.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs text-zinc-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sub-second event triggers and Meta Cloud WhatsApp template broadcasts.</span>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs text-zinc-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Self-updating CRM deal boards that advance pipelines based on prospect actions.</span>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs text-zinc-200">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Cross-channel intelligence scoring to separate real buyers from cold noise.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-emerald-400 font-mono font-bold">
              Role: 24/7 Autopilot Scale
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
