"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  Share2,
  Workflow,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface AboutPlatformSectionProps {
  onOpenModal: (mode?: "waitlist" | "growth_potential" | "demo") => void;
}

export function AboutPlatformSection({ onOpenModal }: AboutPlatformSectionProps) {
  return (
    <section className="relative bg-[#F3F3F3] text-foreground w-full py-20 md:py-32 border-b border-border overflow-hidden">
      
      {/* Dashed Accent Geometric Ring */}
      <div className="pointer-events-none absolute -top-16 -left-16 w-80 h-80 rounded-full border border-dashed border-[#0049DB]/20 opacity-50" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-12 relative z-10">
        
        {/* Left Column: Platform Overview & Accordion (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#0049DB]">
              WHAT WE ARE
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]">
            One system that shares data automatically
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              ObisHub is a growth suite built to remove friction entirely. Lead generation, CRM, WhatsApp automation, and email marketing — under one system that shares data instead of hoarding it in separate tools.
            </p>
            <p className="font-medium text-neutral-900 border-l-4 border-[#0049DB] pl-5 py-1">
              Our team is a mix of people who&apos;ve actually run sales pipelines and people who build the software underneath them — which is a distinction that shows up in the product.
            </p>
          </div>

          {/* Feature-2 Accordion Pattern */}
          <div className="pt-2">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem
                value="item-1"
                className="bg-white rounded-2xl border border-neutral-200 px-5 shadow-sm transition-all hover:border-[#0049DB]/30"
              >
                <AccordionTrigger className="text-sm sm:text-base font-bold text-neutral-900 hover:text-[#0049DB] hover:no-underline py-4">
                  Where is ObisHub engineered and headquartered?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 text-xs sm:text-sm leading-relaxed pb-4">
                  Headquartered in India. We operate dedicated engineering and infrastructure teams focused on official Meta WhatsApp Cloud API scaling, high-deliverability email routing, and real-time CRM pipelines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-2xl border border-neutral-200 px-5 shadow-sm transition-all hover:border-[#0049DB]/30"
              >
                <AccordionTrigger className="text-sm sm:text-base font-bold text-neutral-900 hover:text-[#0049DB] hover:no-underline py-4">
                  How does automatic data sharing work across tools?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 text-xs sm:text-sm leading-relaxed pb-4">
                  The moment a prospect fills a form, clicks a link, or replies on WhatsApp, our unified intelligence layer immediately updates the CRM record, tags the user, and triggers downstream sequences with zero copy-pasting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-2xl border border-neutral-200 px-5 shadow-sm transition-all hover:border-[#0049DB]/30"
              >
                <AccordionTrigger className="text-sm sm:text-base font-bold text-neutral-900 hover:text-[#0049DB] hover:no-underline py-4">
                  Why no per-seat or headcount charges?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 text-xs sm:text-sm leading-relaxed pb-4">
                  We believe seat taxes punish expanding companies. ObisHub pricing is transparent and usage-based, allowing your entire sales, marketing, and leadership team to collaborate without inflating software overhead.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenModal("demo")}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0049DB] hover:underline"
            >
              <span>Explore all 6 connected modules</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Watermelon UI Feature-2 Telemetry Cards with Corner Accents (5 Cols) */}
        <div className="lg:col-span-5 bg-neutral-200/70 relative flex justify-center rounded-3xl p-6 sm:p-8 border border-neutral-300 shadow-inner overflow-hidden">
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#0049DB]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#0049DB]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#0049DB]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#0049DB]" />

          <div className="relative h-[430px] w-full max-w-md">
            
            {/* Top Card: Data Sync Performance */}
            <Card className="bg-white ring-border/50 border-neutral-200 absolute top-0 left-0 w-[270px] rounded-2xl border p-0 shadow-xl backdrop-blur-md">
              <CardContent className="space-y-2.5 p-4">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-mono text-[#0049DB] font-bold">UNIFIED INTELLIGENCE</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>

                <div className="text-2xl font-extrabold text-neutral-900 font-mono">
                  100<span className="text-[#0049DB] text-base">%</span>
                </div>

                <div className="flex gap-2 text-[10px] font-semibold">
                  <span className="rounded-md bg-emerald-100 text-emerald-800 px-2 py-0.5">
                    Synced Live
                  </span>
                  <span className="rounded-md bg-[#0049DB]/10 text-[#0049DB] px-2 py-0.5">
                    0 Copy-Paste
                  </span>
                </div>

                <div className="text-neutral-600 space-y-1 text-xs pt-1 border-t border-neutral-100">
                  <div>WhatsApp Line: Connected</div>
                  <div>CRM Pipeline: Auto-Advancing</div>
                  <div>Forms & Mail: Real-Time</div>
                </div>
              </CardContent>
            </Card>

            {/* Middle Card: 6 Products Live Breakdown */}
            <Card className="bg-white ring-border/50 border-neutral-200 absolute top-32 right-0 z-20 w-[260px] rounded-2xl border p-0 shadow-2xl backdrop-blur-md">
              <CardContent className="space-y-3 p-4">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-mono font-bold text-neutral-900">ACTIVE CHANNELS</span>
                  <span className="text-[10px] bg-[#0049DB]/10 text-[#0049DB] font-bold px-2 py-0.5 rounded-full">6/6 Modules</span>
                </div>

                <div className="text-neutral-900 text-sm font-bold">
                  Synchronized Revenue Operations
                </div>

                <div className="flex h-2 w-full gap-1 overflow-hidden rounded-full bg-neutral-100">
                  <div className="bg-[#0049DB] w-[35%]" />
                  <div className="bg-[#579BFF] w-[25%]" />
                  <div className="bg-emerald-500 w-[20%]" />
                  <div className="bg-purple-500 w-[20%]" />
                </div>

                <div className="text-neutral-500 flex justify-between text-[10px] font-medium">
                  <span>WhatsApp</span>
                  <span>CRM</span>
                  <span>Forms</span>
                  <span>Email</span>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Card: Operational Gain */}
            <Card className="bg-white ring-border/50 border-neutral-200 absolute bottom-4 left-4 w-[280px] rounded-2xl border p-0 shadow-2xl backdrop-blur-md">
              <CardContent className="space-y-3 p-4">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-neutral-900 font-mono">TEAM VELOCITY</span>
                  <span className="text-emerald-600 text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full">
                    No Fatigue
                  </span>
                </div>

                <div className="text-neutral-700 text-xs leading-relaxed">
                  <span className="font-bold text-neutral-900">+15 Hours Saved</span> per sales rep every week on repetitive admin tasks.
                </div>

                <div className="flex gap-2 text-[10px] font-semibold">
                  <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-emerald-800">
                    High Conversion
                  </span>
                  <span className="rounded-md bg-[#0049DB]/10 px-2 py-0.5 text-[#0049DB]">
                    Scalable
                  </span>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </section>
  );
}
