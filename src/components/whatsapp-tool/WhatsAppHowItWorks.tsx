"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Link2, Users2, Rocket, Sparkles, CheckCircle2 } from "lucide-react";

interface WhatsAppHowItWorksProps {
  onOpenModal: (mode?: "waitlist" | "growth_potential" | "demo") => void;
}

export function WhatsAppHowItWorks({ onOpenModal }: WhatsAppHowItWorksProps) {
  const steps = [
    {
      number: "01",
      title: "LINK EMPIRE INFRASTRUCTURE",
      icon: Link2,
      copy: "Connect your official WhatsApp Cloud API line straight to our centralized system. View your system health tiering and approved daily message limits instantly right on your master screen.",
      badge: "Instant Meta Cloud Handshake",
    },
    {
      number: "02",
      title: "STRUCTURE AND IMPORT TARGET AUDIENCES",
      icon: Users2,
      copy: "Effortlessly drop in your client lists with our simple CSV contact manager. Sort your audience into custom, segmented outreach pools to ensure high-converting message precision.",
      badge: "Smart Segmentation",
    },
    {
      number: "03",
      title: "TRIGGER HUMAN-GUIDED SYSTEM SCALE",
      icon: Rocket,
      copy: "Design your interactive templates and launch your broadcast or automation parameters. Let your human strategy steer the system while our software suite executes non-stop in the background.",
      badge: "Autonomous Execution",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-muted/40 py-20 md:py-28 border-b border-border bg-dots-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0049DB]/20 bg-[#0049DB]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#0049DB]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The Step-by-Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From official API connection to autonomous conversational revenue in 3 seamless steps.
          </p>
        </div>

        {/* Steps Cards with Landing-01 Corner Accents */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-border bg-background/90 backdrop-blur-md p-8 flex flex-col justify-between hover:border-[#0049DB]/50 transition-all shadow-md group overflow-hidden"
            >
              {/* Landing-01 Corner Accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0049DB]/60" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#0049DB]/60" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#0049DB]/60" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0049DB]/60" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-extrabold text-[#0049DB]">
                    {step.number}
                  </span>
                  <div className="h-11 w-11 rounded-xl bg-[#0049DB]/10 text-[#0049DB] flex items-center justify-center group-hover:bg-[#0049DB] group-hover:text-white transition-colors">
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Badge variant="secondary" className="text-xs font-semibold bg-[#0049DB]/5 text-[#0049DB]">
                    {step.badge}
                  </Badge>
                  
                  <h3 className="text-lg font-extrabold text-foreground tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                    {step.copy}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-xs font-bold text-[#0049DB]">
                <button
                  type="button"
                  onClick={() => onOpenModal("demo")}
                  className="hover:underline flex items-center gap-1"
                >
                  <span>See integration live</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
