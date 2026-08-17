"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  Clock,
  TrendingUp,
  MessageSquare,
  Users,
  Send,
  Lock,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

interface WhatsAppHeroProps {
  onOpenModal: (mode?: "waitlist" | "growth_potential" | "demo") => void;
}

export function WhatsAppHero({ onOpenModal }: WhatsAppHeroProps) {
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenModal("demo");
  };

  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-20 md:pt-18 md:pb-32 border-b border-border bg-grid-subtle">
      {/* Background Gradients & Glow matching main root page */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[950px] rounded-full bg-gradient-to-tr from-[#0049DB]/25 via-[#579BFF]/15 to-transparent blur-[140px]" />
        <div className="absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-[#0049DB]/10 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-[#579BFF]/10 blur-[120px]" />
      </div>

      {/* Decorative Dashed Rings (Landing-01 signature CSS element) */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full border border-dashed border-[#0049DB]/15 opacity-60" />
      <div className="pointer-events-none absolute -top-40 -right-20 w-96 h-96 rounded-full border border-dashed border-[#0049DB]/15 opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0049DB]/30 bg-[#0049DB]/5 px-4 py-1.5 text-xs font-bold text-[#0049DB] shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <IoLogoWhatsapp className="h-4 w-4 text-[#25D366]" />
            <span>Direct, Uninterrupted Access to customers, Approved by Meta</span>
          </div>
        </div>

        {/* Main H1 Headline */}
        <div className="mt-8 text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1]">
            98% open rates on autopilot.{" "}
            <span className="text-[#0049DB]">
              Execute your entire sales outreach
            </span>{" "}
            without the manual
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
            Transform how your business communicates. Launch high-converting marketing campaigns, automate conversational workflows, and manage customer interactions with a multi-agent team inbox, powered securely with us.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Enter work email for instant access"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="h-12 w-full sm:w-80 rounded-full px-5 text-sm bg-background/90 border-border shadow-sm focus-visible:ring-[#0049DB]"
              />
              <Button
                type="submit"
                className="h-12 w-full sm:w-auto rounded-full bg-[#0049DB] hover:bg-[#003bb3] text-white px-7 text-sm font-bold shadow-lg shadow-[#0049DB]/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Try it for free!</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenModal("demo")}
              className="h-12 w-full sm:w-auto rounded-full px-6 text-sm font-bold border-border hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <Play className="h-4 w-4 fill-current text-[#0049DB]" />
              <span>Watch Live Demo</span>
            </Button>
          </div>

          {/* Sub-text Anchor */}
          <p className="text-xs font-semibold text-muted-foreground flex items-center justify-center gap-2 pt-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>No credit card required. 100% API uptime guaranteed.</span>
          </p>
        </div>

        {/* Interactive Platform Mockup with Landing-01 Corner Accents */}
        <div className="mt-14 relative mx-auto max-w-5xl rounded-3xl border border-white/15 bg-[#060D1E] p-4 sm:p-6 lg:p-8 shadow-2xl text-white overflow-hidden landing-card-dark">
          
          {/* Landing-01 Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#579BFF]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#579BFF]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#579BFF]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#579BFF]" />

          {/* Top Bar inside mockup */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-zinc-400 pl-2">obishub.app/whatsapp-tool</span>
            </div>

            <div className="flex items-center gap-3">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs px-3 py-1 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Meta Cloud API: Connected</span>
              </Badge>
              <span className="text-xs font-semibold text-zinc-400 hidden sm:inline">Tier: High Volume (100k/day)</span>
            </div>
          </div>

          {/* Mockup Body: 3-column live simulation */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left: Chat List & Custom Tags */}
            <div className="md:col-span-4 rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider pb-2 border-b border-white/10">
                <span>Multi-Agent Inbox</span>
                <span className="text-[#579BFF]">3 Active Reps</span>
              </div>

              {/* Chat items */}
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-[#0049DB]/20 border border-[#579BFF]/30 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Rahul Verma</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Just now</span>
                  </div>
                  <p className="text-zinc-300 line-clamp-1">Approved the commercial proposal. Send payment link.</p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="text-[9px] bg-[#0049DB] px-2 py-0.5 rounded text-white font-semibold">Rep: Sarah</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">Stage: Ready to Close</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs space-y-1 opacity-80">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Enterprise Procurement</span>
                    <span className="text-[10px] text-zinc-400 font-mono">4m ago</span>
                  </div>
                  <p className="text-zinc-400 line-clamp-1">Can we whitelist our dedicated IP address?</p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="text-[9px] bg-zinc-700 px-2 py-0.5 rounded text-zinc-300">Bot Triggered</span>
                    <span className="text-[9px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">Security Tier</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs space-y-1 opacity-70">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Aditi Sen (FinTech)</span>
                    <span className="text-[10px] text-zinc-400 font-mono">12m ago</span>
                  </div>
                  <p className="text-zinc-400 line-clamp-1">Broadcast opened. Schedule calendar link clicked.</p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="text-[9px] bg-[#579BFF]/20 text-[#579BFF] px-2 py-0.5 rounded">Inbound Web</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Active Conversation Screen */}
            <div className="md:col-span-5 rounded-2xl bg-white/5 border border-white/10 p-4 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#0049DB] flex items-center justify-center text-xs font-bold">RV</div>
                  <div>
                    <div className="text-xs font-bold text-white">Rahul Verma • Growth Lead</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>Live on WhatsApp Cloud API</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px] border-zinc-700 text-zinc-300">
                  Template #OB-902
                </Badge>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-3 text-xs">
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-zinc-200">
                  Hi Rahul! Here is your custom intelligence workspace blueprint and tiering allocation.
                  <div className="mt-2 p-2 rounded-xl bg-[#0049DB]/30 border border-[#579BFF]/30 text-white font-medium flex items-center justify-between">
                    <span>📄 Commercial_Schedule_ObisHub.pdf</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>

                <div className="bg-[#0049DB] p-3 rounded-2xl rounded-tr-sm max-w-[85%] ml-auto text-white">
                  Approved the commercial proposal. Send payment link.
                  <div className="text-[9px] text-blue-200 text-right mt-1">11:42 AM ✓✓</div>
                </div>

                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-zinc-200">
                  <span className="text-[10px] text-amber-300 font-bold block mb-1">⚡ Automated Trigger Fired</span>
                  Generated invoice #INV-8841. Payment gateway active.
                </div>
              </div>

              {/* Message Composer */}
              <div className="pt-2">
                <div className="flex items-center gap-2 rounded-xl bg-black/40 border border-white/10 p-2">
                  <input
                    type="text"
                    readOnly
                    value="Type /template or message..."
                    className="bg-transparent text-xs text-zinc-400 flex-1 outline-none px-2"
                  />
                  <button className="h-7 w-7 rounded-lg bg-[#0049DB] flex items-center justify-center text-white">
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Live Metrics & Velocity */}
            <div className="md:col-span-3 space-y-3">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Broadcast Delivery</span>
                <div className="text-2xl font-extrabold text-emerald-400">99.4%</div>
                <p className="text-[11px] text-zinc-400 leading-tight">42,800 messages sent today via Meta Cloud</p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Avg First Response</span>
                <div className="text-2xl font-extrabold text-[#579BFF]">18 sec</div>
                <p className="text-[11px] text-zinc-400 leading-tight">Zero-code flow builder auto-qualification</p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Green Label Security</span>
                <div className="text-xs font-bold text-white flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>100% Compliant</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
