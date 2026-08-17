"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Users, HeartHandshake, ArrowRight, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AboutUsSection() {
  return (
    <section id="about" className="relative bg-[#060D1E] text-white py-20 md:py-32 overflow-hidden border-b border-white/10">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-[#0049DB]/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-4xl space-y-6">
          <Badge className="bg-[#0049DB]/40 text-[#579BFF] border-[#579BFF]/30 px-3.5 py-1 text-xs uppercase tracking-widest font-bold">
            <Sparkles className="mr-1.5 h-3.5 w-3.5 inline" /> ABOUT OBISHUB
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            We&apos;re building the bridge between human strategy and machine speed
          </h2>
        </div>

        {/* 3 Main Content Blocks */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Block 1: The Problem We Solve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-[#579BFF]/40 transition-all"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-wider text-[#579BFF] uppercase">
                THE PROBLEM WE SOLVE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Good teams bottlenecked by bad plumbing
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Somewhere in most companies, a genuinely good sales team is losing hours to genuinely bad plumbing. A lead comes in through a form. It gets copied into a spreadsheet — manually, if someone remembers. Follow-up happens over WhatsApp, from someone&apos;s personal number, because that&apos;s what actually gets replies. By the time it&apos;s &quot;in the CRM,&quot; half the context is already gone.
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed font-medium text-white/90">
                None of that is a talent problem. It&apos;s a tooling problem. And it puts a hard ceiling on how big a team can grow before things start slipping — the missed follow-up, the duplicate outreach, the lead that goes cold because nobody was sure whose job it was.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-zinc-400 font-mono">
              Root Cause: Tooling Fragmentation
            </div>
          </motion.div>

          {/* Block 2: What We Are */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-[#579BFF]/40 transition-all"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-wider text-[#579BFF] uppercase">
                WHAT WE ARE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                One system that shares data automatically
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                ObisHub is a growth suite built to remove that friction entirely. Lead generation, CRM, WhatsApp automation, and email marketing — under one system that shares data instead of hoarding it in separate tools.
              </p>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MapPin className="h-4 w-4 text-[#579BFF]" />
                  <span>Headquartered in India</span>
                </div>
                <p className="leading-relaxed text-zinc-400">
                  Our team is a mix of people who&apos;ve actually run sales pipelines and people who build the software underneath them — which is a distinction that shows up in the product.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-zinc-400 font-mono">
              Core Identity: Unified Growth Suite
            </div>
          </motion.div>

          {/* Block 3: Our Operating Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-[#0049DB]/40 bg-gradient-to-b from-[#0049DB]/20 to-white/5 p-8 backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-[#579BFF]/60 transition-all shadow-xl"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-wider text-[#579BFF] uppercase">
                OUR OPERATING PHILOSOPHY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Human judgment at front. Automated execution behind.
              </h3>
              <p className="text-sm text-zinc-200 leading-relaxed">
                We&apos;re not trying to replace what makes your team good at their job. The strategy, the read on a client, the instinct for when to push and when to wait — that stays with your people.
              </p>
              <p className="text-sm text-zinc-200 leading-relaxed font-semibold text-white">
                What we take off their plate is everything else: the repetitive send, the manual log, the status update nobody has time to write. Human judgment at the front. Automated execution behind it. That&apos;s the whole idea.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-[#579BFF] font-mono font-bold">
              The Mission: Machine Speed + Human Strategy
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
