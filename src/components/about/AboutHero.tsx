"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, MapPin, Layers, Cpu, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AboutHeroProps {
  onOpenModal: (mode?: "waitlist" | "growth_potential" | "demo") => void;
}

export function AboutHero({ onOpenModal }: AboutHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#060D1E] text-white pt-16 pb-20 md:pt-24 md:pb-28 border-b border-white/10 bg-grid-subtle">
      {/* Background glow & subtle architectural grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#0049DB]/35 via-[#579BFF]/15 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-[#0049DB]/10 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-[#579BFF]/10 blur-[120px]" />
      </div>

      {/* Dashed Accent Geometric Rings */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full border border-dashed border-[#579BFF]/20 opacity-50" />
      <div className="pointer-events-none absolute -top-24 -right-24 w-88 h-88 rounded-full border border-dashed border-[#0049DB]/25 opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#579BFF]/30 bg-[#0049DB]/20 px-4 py-1.5 text-xs font-bold tracking-[0.22em] text-[#579BFF] uppercase shadow-[inset_0_1px_4px_rgba(255,255,255,0.15)] backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              ABOUT OBISHUB
            </span>
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white"
          >
            We&apos;re building the bridge between{" "}
            <span className="text-[#579BFF]">human strategy</span> and{" "}
            <span className="text-white">machine speed</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal"
          >
            The background, principles, and engineering philosophy behind ObisHub — the office business intelligence suite designed to eliminate operational friction and scale B2B revenue.
          </motion.p>

          {/* Key Stat Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 backdrop-blur-md hover:border-[#579BFF]/40 transition-colors">
              <MapPin className="h-4 w-4 text-[#579BFF]" />
              <span>Headquartered in India</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 backdrop-blur-md hover:border-[#579BFF]/40 transition-colors">
              <Layers className="h-4 w-4 text-[#579BFF]" />
              <span>Unified 6-Product Suite</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 backdrop-blur-md hover:border-emerald-500/40 transition-colors">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Zero Seat Tax • Meta Verified</span>
            </div>
          </motion.div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <Button
              onClick={() => onOpenModal("growth_potential")}
              className="h-12 rounded-full bg-[#0049DB] px-8 text-sm font-bold text-white shadow-lg shadow-[#0049DB]/35 hover:bg-[#003bb3] transition-all flex items-center gap-2 group"
            >
              <span>Check Growth Potential</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              onClick={() => onOpenModal("demo")}
              className="h-12 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 text-sm font-semibold transition-colors"
            >
              See What&apos;s In It For You
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
