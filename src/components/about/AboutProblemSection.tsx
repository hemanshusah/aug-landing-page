"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  FileSpreadsheet,
  MessageSquareOff,
  DatabaseZap,
  ArrowRight,
  Sparkles,
  Layers,
  XCircle,
} from "lucide-react";

interface AboutProblemSectionProps {
  onOpenModal: (mode?: "waitlist" | "growth_potential" | "demo") => void;
}

export function AboutProblemSection({ onOpenModal }: AboutProblemSectionProps) {
  return (
    <section className="relative bg-background w-full py-20 md:py-32 border-b border-border bg-dots-pattern overflow-hidden">
      
      {/* Dashed background ring */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-dashed border-[#0049DB]/15 opacity-60" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-12 relative z-10">
        
        {/* Left Column: Problem Narrative (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-red-600 dark:text-red-400">
              THE PROBLEM WE SOLVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Good teams bottlenecked by bad plumbing
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Somewhere in most companies, a genuinely good sales team is losing hours to genuinely bad plumbing. A lead comes in through a form. It gets copied into a spreadsheet — manually, if someone remembers. Follow-up happens over WhatsApp, from someone&apos;s personal number, because that&apos;s what actually gets replies. By the time it&apos;s &ldquo;in the CRM,&rdquo; half the context is already gone.
            </p>
            <p className="font-medium text-foreground border-l-4 border-red-500 pl-5 py-1">
              None of that is a talent problem. It&apos;s a tooling problem. And it puts a hard ceiling on how big a team can grow before things start slipping — the missed follow-up, the duplicate outreach, the lead that goes cold because nobody was sure whose job it was.
            </p>
          </div>

          {/* 3 Issue Breakdown Rows with Corner Accents (Feature-5 Pattern) */}
          <div className="space-y-4 pt-2">
            <div className="group relative flex items-start gap-3.5 p-4 rounded-2xl bg-card border border-border hover:border-red-500/40 transition-all shadow-sm">
              <div className="bg-red-500/10 text-red-600 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold group-hover:bg-red-500 group-hover:text-white transition-colors">
                <FileSpreadsheet className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Spreadsheet Fragmentation</div>
                <div className="text-muted-foreground text-xs leading-relaxed mt-0.5">
                  Manual copy-pasting between website forms, ad channels, and personal sheets creates invisible silos.
                </div>
              </div>
            </div>

            <div className="group relative flex items-start gap-3.5 p-4 rounded-2xl bg-card border border-border hover:border-red-500/40 transition-all shadow-sm">
              <div className="bg-red-500/10 text-red-600 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold group-hover:bg-red-500 group-hover:text-white transition-colors">
                <MessageSquareOff className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Isolated Outreach & No Audit Trail</div>
                <div className="text-muted-foreground text-xs leading-relaxed mt-0.5">
                  Personal WhatsApp numbers operated in isolation with zero central oversight or organizational history.
                </div>
              </div>
            </div>

            <div className="group relative flex items-start gap-3.5 p-4 rounded-2xl bg-card border border-border hover:border-red-500/40 transition-all shadow-sm">
              <div className="bg-red-500/10 text-red-600 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold group-hover:bg-red-500 group-hover:text-white transition-colors">
                <DatabaseZap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Context Evaporation in CRMs</div>
                <div className="text-muted-foreground text-xs leading-relaxed mt-0.5">
                  CRMs sit empty because nobody has the bandwidth to manually log calls and routine touches.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenModal("growth_potential")}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0049DB] hover:underline"
            >
              <span>See how ObisHub repairs this plumbing</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Watermelon UI Feature-5 Floating Cards with Corner Accents (5 Cols) */}
        <div className="lg:col-span-5 bg-muted/40 dark:bg-card/50 relative flex justify-center rounded-3xl p-6 sm:p-8 border border-border shadow-inner overflow-hidden">
          
          {/* Container Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500/60" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500/60" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500/60" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500/60" />

          <div className="relative h-[430px] w-full max-w-md">
            
            {/* Top Card: Incoming Disconnected Lead */}
            <Card className="bg-background/95 ring-border/50 border-border/80 absolute top-0 left-0 w-[270px] rounded-2xl border p-0 shadow-xl backdrop-blur-md">
              <CardContent className="space-y-2.5 p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono text-red-500 font-bold">DISCONNECTED FLOW</span>
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                </div>

                <div className="text-sm font-bold text-foreground">Web Form Submission</div>

                <div className="flex gap-2 text-[10px]">
                  <span className="bg-red-500/10 text-red-600 rounded-md px-2 py-0.5 font-semibold">
                    Manual Sync
                  </span>
                  <span className="bg-muted text-muted-foreground rounded-md px-2 py-0.5">
                    Spreadsheet
                  </span>
                </div>

                <div className="text-muted-foreground space-y-1 text-xs pt-1 border-t border-border/60">
                  <div>Lead: Enterprise Buyer</div>
                  <div>Channel: Google Ad Landing</div>
                  <div className="text-red-500 font-medium">Status: Unassigned (24h)</div>
                </div>
              </CardContent>
            </Card>

            {/* Middle Card: Context Bottleneck */}
            <Card className="bg-background/95 ring-border/50 border-border/80 absolute top-32 right-0 z-20 w-[260px] rounded-2xl border p-0 shadow-2xl backdrop-blur-md">
              <CardContent className="space-y-3 p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono font-bold text-amber-500">BOTTLENECK DETECTED</span>
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                </div>

                <div className="text-foreground text-sm font-bold">
                  Context Drop & Duplicate Call
                </div>

                <div className="flex h-2 w-full gap-1 overflow-hidden rounded-full bg-muted">
                  <div className="bg-red-500 w-[60%]" />
                  <div className="bg-amber-400 w-[25%]" />
                  <div className="bg-zinc-300 w-[15%]" />
                </div>

                <div className="text-muted-foreground flex justify-between text-[10px]">
                  <span>Lost History</span>
                  <span>Duplicate Send</span>
                  <span>Cold</span>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Card: The Human Limit */}
            <Card className="bg-background/95 ring-border/50 border-border/80 absolute bottom-4 left-4 w-[280px] rounded-2xl border p-0 shadow-2xl backdrop-blur-md">
              <CardContent className="space-y-3 p-4">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-foreground font-mono">GROWTH CEILING</span>
                  <span className="text-red-500 text-[10px] bg-red-500/10 px-2 py-0.5 rounded-full">
                    Slipping Deals
                  </span>
                </div>

                <div className="text-muted-foreground text-xs leading-relaxed">
                  Rep capacity maxed out on routine copy-pasting instead of closing qualified opportunities.
                </div>

                <div className="flex gap-2 text-[10px] font-semibold">
                  <span className="rounded-md bg-red-500/10 px-2 py-0.5 text-red-600">
                    High Rep Fatigue
                  </span>
                  <span className="rounded-md bg-muted px-2 py-0.5 text-muted-foreground">
                    Empty CRM
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
