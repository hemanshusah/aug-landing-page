"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Cpu, RefreshCw, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CapabilitiesSectionProps {
  onOpenWaitlist: () => void;
}

export function CapabilitiesSection({ onOpenWaitlist }: CapabilitiesSectionProps) {
  const capabilities = [
    {
      icon: MessageSquare,
      number: "01",
      badge: "TRIGGER-BASED OUTREACH",
      title: "Autonomous Multi-Channel Outreach",
      description:
        "Set up a WhatsApp or email sequence once, and let it fire on its own — triggered by what a lead actually does, not a date on a calendar. Someone fills a form, clicks a link, or goes quiet for a week; ObisHub already knows what message to send next.",
      highlights: [
        "Dynamic event-triggered execution",
        "Meta Cloud WhatsApp & verified SMTP sync",
        "Intelligent quiet-period re-engagement",
      ],
    },
    {
      icon: Cpu,
      number: "02",
      badge: "NOISE REDUCTION",
      title: "Cross-Channel Business Intelligence",
      description:
        "Every lead, from every channel, lands in one place. ObisHub sorts through the noise and tells you which conversations are actually worth your time — instead of leaving your team to guess which of the 200 new leads this week are real.",
      highlights: [
        "Real-time intent & qualification scoring",
        "Unified inbox for WhatsApp, email & web",
        "Instant filtering of high-value opportunities",
      ],
    },
    {
      icon: RefreshCw,
      number: "03",
      badge: "ZERO MANUAL BABYSITTING",
      title: "Frictionless CRM Workflows",
      description:
        "No more \"did anyone log that call?\" The system tracks engagement on its own and moves prospects down the pipeline as they act — so your CRM stays accurate without anyone babysitting it.",
      highlights: [
        "Self-updating pipeline stages",
        "Automatic interaction & response logging",
        "Zero duplicate contact entries",
      ],
    },
  ];

  return (
    <section id="capabilities" className="relative bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-16 border-b border-border">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0049DB]">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
              Built for the way modern revenue teams actually work
            </h2>
          </div>

          <Button
            onClick={onOpenWaitlist}
            className="w-fit rounded-full bg-[#0049DB] px-6 h-11 text-sm font-semibold text-white shadow-md hover:bg-[#003bb3] flex items-center gap-2 group"
          >
            <span>Explore all features</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* 3-Column Capability Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-[#0049DB]/50 hover:shadow-2xl"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0049DB]/10 text-[#0049DB] group-hover:bg-[#0049DB] group-hover:text-white transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs font-bold text-muted-foreground">
                      FEATURE {cap.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-6 space-y-3">
                    <span className="text-[11px] font-bold tracking-wider text-[#0049DB] uppercase">
                      {cap.badge}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-card-foreground group-hover:text-[#0049DB] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="mt-6 pt-6 border-t border-border space-y-2.5">
                    {cap.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-[#0049DB] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenWaitlist}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0049DB] group-hover:underline"
                  >
                    <span>Learn how this works</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
