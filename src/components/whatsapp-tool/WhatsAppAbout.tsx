"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, Network, Zap, Sparkles, Layers } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

export function WhatsAppAbout() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-20 md:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Eyebrow, H2, and Body Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0049DB]/20 bg-[#0049DB]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#0049DB]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>The Enterprise Revenue Stream</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
              Move past manual broadcasting. Meet an intelligent customer communication ecosystem.
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Traditional messaging apps isolate your conversations, resulting in missed leads and fragmented tracking. This tool serves as an all-in-one platform built directly over your official WhatsApp Cloud API infrastructure. It bridges human strategy with algorithmic execution, giving your sales and support teams the ultimate environment to manage contacts, launch interactive templates, and monitor conversation metrics from a single source of truth.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-background border border-border">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0049DB]/10 text-[#0049DB]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">No Disconnected Tabs</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Every lead, chat, and deal stage syncs directly with central operations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-background border border-border">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0049DB]/10 text-[#0049DB]">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">100% Number Safety</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Built on official Meta Cloud API protocols with built-in quality health monitoring.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architecture Architecture Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-[#0049DB] flex items-center justify-center text-white">
                    <IoLogoWhatsapp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Architecture Layer</h3>
                    <p className="text-xs text-muted-foreground">Official WhatsApp Cloud Engine</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-600 bg-emerald-50">
                  Active Sync
                </Badge>
              </div>

              {/* Stack items */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/60 border border-border">
                  <span className="font-semibold text-foreground">1. Meta WhatsApp Cloud API</span>
                  <span className="font-mono text-emerald-600 font-bold">Connected ✓</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/60 border border-border">
                  <span className="font-semibold text-foreground">2. Multi-Agent Team Router</span>
                  <span className="font-mono text-[#0049DB] font-bold">Auto-Load Balancing</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/60 border border-border">
                  <span className="font-semibold text-foreground">3. Interactive Flow & Bot Engine</span>
                  <span className="font-mono text-foreground font-bold">24/7 Live</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-muted/60 border border-border">
                  <span className="font-semibold text-foreground">4. Centralized CRM & Analytics</span>
                  <span className="font-mono text-foreground font-bold">Real-Time</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0049DB]/5 border border-[#0049DB]/20 text-xs text-muted-foreground">
                <span className="font-bold text-[#0049DB] block mb-1">Algorithmic Execution:</span>
                Your sales and support reps only intervene when a high-intent conversation requires human closure.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
