"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Cpu, Check, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative bg-[#F3F3F3] text-foreground py-20 md:py-32 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Heavy Typography */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#0049DB]">
              OUR PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]">
            Replacing manual friction with operational ease
          </h2>

          <div className="space-y-6 text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed max-w-3xl">
            <p>
              Most growth stacks weren&apos;t built — they were duct-taped together. A lead form here, a spreadsheet there, a WhatsApp number one person on your team quietly manages from their own phone. It works, until it doesn&apos;t. Until a lead falls through, or nobody remembers to follow up, or your best salesperson leaves and takes the entire process in their head with them.
            </p>
            <p className="font-medium text-neutral-900 border-l-4 border-[#0049DB] pl-5 py-1">
              We built ObisHub because we got tired of watching good teams get bottlenecked by bad plumbing. Not because they lacked ambition — because their tools couldn&apos;t keep pace with it. So we put lead capture, CRM, WhatsApp, and email into a single system that talks to itself, so your team doesn&apos;t have to keep translating between five different tools just to follow up on one lead.
            </p>
          </div>
        </div>

        {/* Visual Comparison: The Duct-Taped Stack vs The ObisHub System */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Box 1: The Duct-Taped Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-red-200/80 bg-red-50/40 p-8 space-y-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono tracking-wider text-red-600 uppercase">
                THE DUCT-TAPED STACK
              </span>
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>

            <h3 className="text-xl font-bold text-neutral-900">
              Disconnected tools & human bottlenecks
            </h3>

            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold">✕</span>
                <span>Manual copy-pasting between spreadsheets and disconnected form plugins.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold">✕</span>
                <span>Personal WhatsApp numbers managed in isolation with zero central oversight.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold">✕</span>
                <span>CRMs that sit empty because nobody has the time to log routine touches.</span>
              </li>
            </ul>
          </motion.div>

          {/* Box 2: The ObisHub Unified System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl border border-[#0049DB]/30 bg-white p-8 space-y-5 shadow-lg shadow-[#0049DB]/5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono tracking-wider text-[#0049DB] uppercase">
                THE OBISHUB SYSTEM
              </span>
              <ShieldCheck className="h-5 w-5 text-[#0049DB]" />
            </div>

            <h3 className="text-xl font-bold text-neutral-900">
              Single architecture that talks to itself
            </h3>

            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="text-[#0049DB] font-bold">✓</span>
                <span>Lead capture, WhatsApp, email, and CRM unified on one live screen.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#0049DB] font-bold">✓</span>
                <span>Official Meta Cloud API ensuring protected numbers and 99.9% delivery.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#0049DB] font-bold">✓</span>
                <span>Self-correcting pipeline updates that advance stages automatically.</span>
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
