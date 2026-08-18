"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap, Building2, MessageSquare, TrendingUp, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  onOpenWaitlist: (mode?: "waitlist" | "growth_potential" | "demo") => void;
  variant?: "A" | "B";
}

export function HeroSection({ onOpenWaitlist, variant = "A" }: HeroSectionProps) {
  const [leadInput, setLeadInput] = useState("");

  const handleQuickStart = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenWaitlist("growth_potential");
  };

  const titleWordsA = [
    "The",
    "only",
    "intelligence",
    "layer",
    "you",
    "need",
    "to",
    "grow",
    "without",
    "limits",
  ];

  const statStrip = [
    { value: "[500+]", label: "businesses running on ObisHub", highlight: "Verified B2B" },
    { value: "[2M+]", label: "messages automated monthly", highlight: "Meta Cloud API" },
    { value: "[38%]", label: "average lift in lead response rate", highlight: "Conversion Lift" },
    { value: "[99.9%]", label: "platform uptime SLA", highlight: "Enterprise SLA" },
  ];

  const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const titleWordVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="overview" className="relative overflow-hidden bg-[#060D1E] text-white pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background glow & subtle architectural grid */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#0049DB]/35 via-[#579BFF]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#0049DB]/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid-subtle opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#579BFF]/30 bg-[#0049DB]/20 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-[#579BFF] uppercase shadow-[inset_0_1px_4px_rgba(255,255,255,0.15)]">
              <Sparkles className="h-3.5 w-3.5" />
              OFFICE BUSINESS INTELLIGENCE SUITE
            </span>
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            animate="show"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-balance text-white"
          >
            {titleWordsA.map((word, i) => (
              <motion.span
                key={i}
                variants={titleWordVariants}
                className={
                  word === "intelligence" || word === "grow" || word === "limits"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8ec0ff] to-[#579BFF] mr-[0.24em] inline-block last:mr-0 font-black"
                    : "mr-[0.24em] inline-block last:mr-0"
                }
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline Body Copy */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.35 }}
            className="max-w-3xl text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal"
          >
            Automate complex sales outreach, unify fragmented communication channels, and scale your revenue operations entirely beyond human operational limits. All in one, easy to use, and easy to navigate
          </motion.p>

          {/* Primary & Secondary CTA with Quick Email Input */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
            className="w-full max-w-xl pt-2 space-y-4"
          >
            <form
              onSubmit={handleQuickStart}
              className="glass-panel-dark rounded-2xl p-2 sm:p-2.5 flex flex-col sm:flex-row items-center gap-2 shadow-2xl shadow-black/50"
            >
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Enter your enterprise work email..."
                  value={leadInput}
                  onChange={(e) => setLeadInput(e.target.value)}
                  className="h-12 w-full rounded-xl border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-400 focus-visible:ring-1 focus-visible:ring-[#579BFF]"
                />
              </div>
              <Button
                type="submit"
                className="w-full sm:w-auto h-12 px-6 rounded-xl bg-[#0049DB] text-white font-semibold hover:bg-[#003bb3] shadow-lg shadow-[#0049DB]/40 whitespace-nowrap flex items-center justify-center gap-2 group shrink-0"
              >
                <span>Check potential</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              <Button
                variant="outline"
                onClick={() => onOpenWaitlist("growth_potential")}
                className="h-11 rounded-full border-white/20 bg-white/10 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 hover:text-white px-6"
              >
                Check your growth potential
              </Button>
              <Button
                variant="ghost"
                onClick={() => onOpenWaitlist("demo")}
                className="h-11 rounded-full text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/10 px-6"
              >
                See what&apos;s in it for you →
              </Button>
            </div>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.65 }}
            className="pt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 font-medium"
          >
            <ShieldCheck className="h-4 w-4 text-[#579BFF]" />
            <span>Trusted by revenue teams who&apos;d rather close deals than manage spreadsheets.</span>
          </motion.div>

        </div>

        {/* Watermelon Stat Strip */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {statStrip.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between group hover:border-[#579BFF]/40 transition-all"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>{stat.highlight}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#579BFF]" />
              </div>
              <div className="mt-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                  {stat.value}
                </span>
                <p className="mt-1 text-xs sm:text-sm text-zinc-300 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
