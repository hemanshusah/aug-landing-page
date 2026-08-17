"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, UserCheck, Sparkles, Layers, DollarSign, Lock, Eye, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function DifferentiatorsSection() {
  const differentiators = [
    {
      title: "One simple price.",
      description:
        "Unlimited team seats, no-code chatbot builder included from day one — not sold back to you as an upgrade.",
      icon: DollarSign,
      badge: "NO SEAT TAX",
    },
    {
      title: "A dedicated onboarding architect.",
      description:
        "An actual person who sets this up with you. No bot loops, no ticket queue.",
      icon: UserCheck,
      badge: "REAL HUMAN ARCHITECT",
    },
    {
      title: "100% Meta Cloud API compliant.",
      description:
        "Your number stays protected with built-in safety tiering — not flagged, not banned, not a gamble.",
      icon: ShieldCheck,
      badge: "META CERTIFIED",
    },
    {
      title: "More than WhatsApp.",
      description:
        "Lead capture, CRM, email marketing, and messaging — one dashboard, not four logins.",
      icon: Layers,
      badge: "UNIFIED PLATFORM",
    },
  ];

  const callouts = [
    { text: "Nothing hidden. Pay what you see.", icon: Lock },
    { text: "A human, not a bot, resolves your problem.", icon: HeartHandshake },
    { text: "Privacy isn't a feature to us — it's a responsibility.", icon: ShieldCheck },
    { text: "You deserve to see your growth clearly, in one place.", icon: Eye },
  ];

  return (
    <section className="relative bg-background py-20 md:py-32 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0049DB]">
            THE OBISHUB DIFFERENCE
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
            We are different from what you&apos;ve seen till now
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            No dark patterns, no hidden add-ons, and no fragmented tool fatigue.
          </p>
        </div>

        {/* 4 Core Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:border-[#0049DB]/40 hover:shadow-xl transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0049DB]/10 text-[#0049DB]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 font-mono text-[11px] font-bold text-[#0049DB]">
                    {diff.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {diff.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Strip (Banners) */}
        <div className="mt-16 rounded-3xl bg-[#060D1E] text-white p-8 md:p-10 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            {callouts.map((call, i) => {
              const Icon = call.icon;
              return (
                <div key={i} className="flex items-start gap-3.5 p-2">
                  <div className="p-2 rounded-xl bg-white/10 text-[#579BFF] shrink-0 mt-0.5">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-200 leading-snug">
                    {call.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
