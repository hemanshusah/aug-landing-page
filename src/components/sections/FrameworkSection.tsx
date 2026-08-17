"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link2, Sparkles, Zap, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";

interface FrameworkSectionProps {
  onOpenWaitlist: () => void;
}

export function FrameworkSection({ onOpenWaitlist }: FrameworkSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: "01",
      stepBadge: "STEP 01",
      headline: "Link Infrastructure",
      icon: Link2,
      copy: "Pick the piece that fits where you already are — WhatsApp, forms, CRM, email — and plug it into what you're running today. No rip-and-replace required.",
      ctaText: "See here →",
      ctaHref: "#products",
      details: [
        "Plug into existing Meta WhatsApp, form builders, and mailboxes",
        "Zero disruption to your ongoing sales pipelines",
        "Instant configuration with no custom engineering overhead",
      ],
    },
    {
      stepNumber: "02",
      stepBadge: "STEP 02",
      headline: "Activate Intelligence",
      icon: Sparkles,
      copy: "Connect the suite to your existing systems and your dashboard comes alive. Every challenge you're actually facing — and what to do about it — shows up on one screen, instead of four browser tabs.",
      ctaText: "Explore dashboard preview →",
      ctaHref: "#products",
      details: [
        "Unifies real challenges and clear solutions on one screen",
        "Eliminates tab-hopping across fragmented portals",
        "Automated lead routing with full context attached",
      ],
    },
    {
      stepNumber: "03",
      stepBadge: "STEP 03",
      headline: "Scale Without the Bottleneck",
      icon: Zap,
      copy: "From here, your outreach runs itself. Your team steps in for the conversations that need a human — everything else keeps moving on its own.",
      ctaText: "Check your growth potential →",
      ctaHref: "#contact",
      details: [
        "Autonomous sequences executed based on actual lead behaviors",
        "Human reps step in strictly when buyers need strategic closing",
        "Permanent scale free of traditional manual SDR limits",
      ],
    },
  ];

  return (
    <section id="framework" className="relative bg-[#F3F3F3] text-foreground py-20 md:py-32 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0049DB]">
            THE FRAMEWORK
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl leading-tight">
            Getting set up shouldn&apos;t be the hard part
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            Three simple steps to transition from manual friction to an automated revenue operations machine.
          </p>
        </div>

        {/* Step-by-Step Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                onClick={() => setActiveStep(idx)}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-white border-[#0049DB] shadow-xl shadow-[#0049DB]/10 ring-2 ring-[#0049DB]/20"
                    : "bg-white/80 border-neutral-200 hover:bg-white hover:border-neutral-300 shadow-sm"
                }`}
              >
                <div>
                  {/* Step Label Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#0049DB]">
                      {step.stepBadge}
                    </span>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? "bg-[#0049DB] text-white"
                          : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Headline & Body Copy */}
                  <div className="mt-6 space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
                      {step.headline}
                    </h3>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {step.copy}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 pt-6 border-t border-neutral-100 space-y-2.5">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-600">
                        <CheckCircle2 className="h-4 w-4 text-[#0049DB] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className="mt-8 pt-4">
                  {step.stepNumber === "01" ? (
                    <a
                      href={step.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#0049DB]/10 px-4 py-2 text-xs font-bold text-[#0049DB] hover:bg-[#0049DB] hover:text-white transition-all group"
                    >
                      <span>{step.ctaText}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenWaitlist();
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#0049DB]/10 px-4 py-2 text-xs font-bold text-[#0049DB] hover:bg-[#0049DB] hover:text-white transition-all group"
                    >
                      <span>{step.ctaText}</span>
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
