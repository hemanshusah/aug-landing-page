"use client";

import React, { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Activity,
  Zap,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

function GlowingBorderCard({
  children,
  className,
  glowColor,
  repeatingGradient,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor: string;
  repeatingGradient: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`bg-border/40 relative rounded-3xl p-[2px] transition-all duration-300 ${className || ""}`}
    >
      {/* Mouse Tracked Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 50%)`,
        }}
      />

      <div className="bg-background relative z-10 h-full overflow-hidden rounded-[22px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-40"
          style={{ background: repeatingGradient }}
        />

        <div className="to-background/90 pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent" />

        <div className="relative z-20 flex h-full flex-col justify-between p-6 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

interface StatsSectionProps {
  onOpenWaitlist?: (mode?: "waitlist" | "growth_potential" | "demo") => void;
}

export function StatsSection({ onOpenWaitlist }: StatsSectionProps) {
  return (
    <section id="stats" className="relative w-full bg-background px-4 py-20 md:px-8 md:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column (5 Cols) */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="inline-flex">
              <Badge
                variant="secondary"
                className="flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0049DB] bg-[#0049DB]/10 border border-[#0049DB]/20"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Enterprise Scale & Metrics</span>
              </Badge>
            </div>

            <h2 className="text-foreground text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
              Numbers that drive enterprise revenue certainty
            </h2>

            <p className="text-muted-foreground max-w-md text-base sm:text-lg leading-relaxed font-normal">
              Engineered for high-volume enterprise organizations demanding relentless execution without the manual overhead of fragmented spreadsheets and disconnected tools.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                onClick={() => onOpenWaitlist?.("growth_potential")}
                className="h-12 rounded-full bg-[#0049DB] hover:bg-[#003bb3] text-white px-7 text-sm font-bold shadow-lg shadow-[#0049DB]/25 transition-all flex items-center gap-2 group"
              >
                <span>Check growth potential</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                onClick={() => onOpenWaitlist?.("demo")}
                className="h-12 rounded-full border-border hover:bg-muted text-foreground px-6 text-sm font-bold transition-colors flex items-center gap-2"
              >
                <span>See what&apos;s in it for you</span>
                <ArrowUpRight className="h-4 w-4 text-[#0049DB]" />
              </Button>
            </div>
          </div>

          {/* Right Column (7 Cols) - stats-4 GlowingBorderCard Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            
            {/* Stat Card 1: 38% */}
            <GlowingBorderCard
              glowColor="rgba(0, 73, 219, 0.75)"
              repeatingGradient="repeating-linear-gradient(45deg, rgba(0, 73, 219, 0.12), rgba(0, 73, 219, 0.12) 15px, transparent 15px, transparent 30px)"
            >
              <div>
                <div className="bg-background text-foreground border border-border/60 mb-6 flex h-10 w-10 items-center justify-center rounded-xl shadow-sm">
                  <Activity className="h-5 w-5 text-[#0049DB]" />
                </div>
                <div className="text-foreground mb-2 text-5xl font-extrabold tracking-tight font-mono">
                  [38%]
                </div>
                <h3 className="text-foreground mb-1 text-base font-bold">
                  Lead Response Lift
                </h3>
              </div>
              <p className="text-muted-foreground mt-4 text-xs sm:text-sm leading-relaxed">
                Average conversion speed increase as outreach sequences trigger immediately upon inbound prospect actions.
              </p>
            </GlowingBorderCard>

            {/* Stat Card 2: 2M+ */}
            <GlowingBorderCard
              glowColor="rgba(87, 155, 255, 0.75)"
              repeatingGradient="repeating-linear-gradient(-45deg, rgba(87, 155, 255, 0.12), rgba(87, 155, 255, 0.12) 15px, transparent 15px, transparent 30px)"
            >
              <div>
                <div className="bg-background text-foreground border border-border/60 mb-6 flex h-10 w-10 items-center justify-center rounded-xl shadow-sm">
                  <Zap className="h-5 w-5 text-[#579BFF]" />
                </div>
                <div className="text-foreground mb-2 text-5xl font-extrabold tracking-tight font-mono">
                  [2M+]
                </div>
                <h3 className="text-foreground mb-1 text-base font-bold">
                  Monthly Automated Messages
                </h3>
              </div>
              <p className="text-muted-foreground mt-4 text-xs sm:text-sm leading-relaxed">
                High-throughput conversational touchpoints executed across verified Meta Cloud API connections with zero human fatigue.
              </p>
            </GlowingBorderCard>

            {/* Stat Card 3 (Span 2): 99.9% Uptime & 500+ Businesses */}
            <GlowingBorderCard
              className="sm:col-span-2"
              glowColor="rgba(16, 185, 129, 0.75)"
              repeatingGradient="repeating-linear-gradient(90deg, rgba(16, 185, 129, 0.12), rgba(16, 185, 129, 0.12) 15px, transparent 15px, transparent 30px)"
            >
              <div className="flex w-full flex-col items-start gap-8 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <div className="bg-background text-foreground border border-border/60 mb-6 flex h-10 w-10 items-center justify-center rounded-xl shadow-sm">
                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div className="text-foreground mb-2 text-5xl font-extrabold tracking-tight font-mono">
                    [99.9%]
                  </div>
                  <h3 className="text-foreground text-base font-bold">
                    Platform SLA & [500+] Active Businesses
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    By eliminating manual CRM updating, integrating verified Meta WhatsApp Cloud routing, and synchronizing customer journeys across channels, teams operate past what human staffing alone could sustain.
                  </p>

                  <a
                    href="#framework"
                    className="text-[#0049DB] mt-5 inline-flex cursor-pointer items-center gap-1.5 text-xs sm:text-sm font-bold hover:underline"
                  >
                    <span>Explore system architecture</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </GlowingBorderCard>

          </div>

        </div>
      </div>
    </section>
  );
}
