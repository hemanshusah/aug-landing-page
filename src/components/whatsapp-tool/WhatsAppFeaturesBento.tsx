"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  GitFork,
  Send,
  BarChart3,
  MessageCircle,
  CheckCircle2,
  Tag,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  SlidersHorizontal,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

export function WhatsAppFeaturesBento() {
  const [selectedTimeline, setSelectedTimeline] = useState<"7d" | "30d" | "90d">("30d");

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28 border-b border-border bg-grid-subtle">
      
      {/* Dashed Accent Circle */}
      <div className="pointer-events-none absolute top-1/2 -left-24 h-72 w-72 rounded-full border border-dashed border-[#0049DB]/15 opacity-60" />
      <div className="pointer-events-none absolute bottom-10 -right-24 h-80 w-80 rounded-full border border-dashed border-[#579BFF]/15 opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0049DB]/20 bg-[#0049DB]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#0049DB]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Platform Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Core Features Built for Revenue Operations
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Everything your team needs to broadcast, qualify, and close deals directly on WhatsApp.
          </p>
        </div>

        {/* Bento Grid with Landing-01 Styling */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 01: Centralized Shared Team Inbox (7 Cols) */}
          <div className="md:col-span-7 relative rounded-3xl border border-border bg-background/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#0049DB]/40 transition-all shadow-md group overflow-hidden">
            {/* Landing-01 Corner Accents */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0049DB]/60" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#0049DB]/60" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#0049DB]/60" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0049DB]/60" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0049DB] text-white shadow-md">
                  <Users className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="text-xs font-semibold border-zinc-300">
                  Feature Card 01
                </Badge>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0049DB]">
                  Centralized Shared Team Inbox
                </span>
                <h3 className="text-2xl font-bold text-foreground">
                  Multi-Agent Collaborative Workspace
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
                  Assign, filter, and track chats instantly across your entire support or sales department. Keep conversations neatly organized with dedicated custom tags for assigned, unassigned, and platform widget traffic.
                </p>
              </div>
            </div>

            {/* Visual simulation of tags & routing */}
            <div className="mt-6 p-4 rounded-2xl bg-muted/50 border border-border space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-muted-foreground border-b border-border pb-2">
                <span>Live Filter View</span>
                <span className="text-emerald-600">● 14 Unassigned Inbound</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0049DB]/10 text-[#0049DB] text-xs font-semibold">
                  <Tag className="h-3 w-3" /> #VIP_Client
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold">
                  <Tag className="h-3 w-3" /> #Widget_Inbound
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 text-xs font-semibold">
                  <Tag className="h-3 w-3" /> #Demo_Scheduled
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-semibold">
                  <Tag className="h-3 w-3" /> #Requires_Escalation
                </span>
              </div>
            </div>
          </div>

          {/* Card 02: Intelligent Workflow Automation (5 Cols) */}
          <div className="md:col-span-5 relative rounded-3xl border border-white/15 bg-[#060D1E] text-white p-6 sm:p-8 flex flex-col justify-between hover:border-[#579BFF]/50 transition-all shadow-xl overflow-hidden landing-card-dark">
            {/* Landing-01 Corner Accents */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#579BFF]" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#579BFF]" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#579BFF]" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#579BFF]" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#579BFF] text-[#060D1E] shadow-md">
                  <GitFork className="h-6 w-6" />
                </div>
                <Badge className="bg-white/10 text-zinc-300 border-white/15 text-xs font-semibold">
                  Feature Card 02
                </Badge>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#579BFF]">
                  Intelligent Workflow Automation
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Zero-Code Conversational Flow Builder
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  Set up instant automated triggers to instantly respond to incoming messages or new conversations. Scale customer engagement 24/7 without growing your internal headcount.
                </p>
              </div>
            </div>

            {/* Flow visualization */}
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#579BFF]">
                <span>⚡ Trigger: Inbound Keyword &quot;PRICING&quot;</span>
              </div>
              <div className="pl-4 border-l border-[#579BFF]/40 space-y-1.5 text-zinc-300">
                <div>↳ Step 1: Send Interactive Catalog Template</div>
                <div>↳ Step 2: Auto-Score Lead Sentiment (Score: 85)</div>
                <div>↳ Step 3: Route to Senior Sales Rep Sarah</div>
              </div>
            </div>
          </div>

          {/* Card 03: Broadcast Campaigns & Approved Templates (4 Cols) */}
          <div className="md:col-span-4 relative rounded-3xl border border-border bg-background/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#0049DB]/40 transition-all shadow-md overflow-hidden">
            {/* Landing-01 Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#0049DB]/50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#0049DB]/50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#0049DB]/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#0049DB]/50" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0049DB] text-white shadow-md">
                  <Send className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="text-xs font-semibold">
                  Feature Card 03
                </Badge>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0049DB]">
                  Broadcast Campaigns & Approved Templates
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  Scalable Marketing Campaigns That Deliver
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Build, synchronize, and distribute official interactive templates directly within the dashboard. Track your exact broadcast delivery, read, and failure metrics in real time.
                </p>
              </div>
            </div>

            <div className="mt-6 p-3.5 rounded-2xl bg-muted/50 border border-border flex items-center justify-between text-xs font-semibold">
              <span className="text-muted-foreground">Broadcast Success Rate:</span>
              <span className="text-emerald-600 font-bold">99.8% Landed</span>
            </div>
          </div>

          {/* Card 04: Real-Time Performance Analytics (4 Cols) */}
          <div className="md:col-span-4 relative rounded-3xl border border-border bg-background/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#0049DB]/40 transition-all shadow-md overflow-hidden">
            {/* Landing-01 Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#0049DB]/50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#0049DB]/50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#0049DB]/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#0049DB]/50" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0049DB] text-white shadow-md">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="text-xs font-semibold">
                  Feature Card 04
                </Badge>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0049DB]">
                  Real-Time Performance Analytics
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  Granular Reporting & Metric Overviews
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Keep a close eye on your customer engagement with automated logs tracking response speeds, message status distributions, and complete conversation success parameters over 7, 30, or 90 days.
                </p>
              </div>
            </div>

            {/* Timeline selector */}
            <div className="mt-6 flex items-center justify-between gap-1 p-1 bg-muted/60 border border-border rounded-xl">
              {(["7d", "30d", "90d"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTimeline(t)}
                  className={`flex-1 py-1 text-xs font-bold rounded-lg transition-all ${
                    selectedTimeline === t
                      ? "bg-[#0049DB] text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Card 05: Customizable Chat Widget Builder (4 Cols) */}
          <div className="md:col-span-4 relative rounded-3xl border border-border bg-background/80 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-[#0049DB]/40 transition-all shadow-md overflow-hidden">
            {/* Landing-01 Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#0049DB]/50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#0049DB]/50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#0049DB]/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#0049DB]/50" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0049DB] text-white shadow-md">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="text-xs font-semibold">
                  Feature Card 05
                </Badge>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0049DB]">
                  Customizable Chat Widget Builder
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  Convert Cold Visitors Instantly
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Create a custom WhatsApp chat button for your web domain. Craft custom welcome messages, design interactive layouts, and train background responses to guide prospects right into your pipeline.
                </p>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300">
              <IoLogoWhatsapp className="h-4 w-4 text-[#25D366]" />
              <span>1-Click Embed Snippet Ready</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
