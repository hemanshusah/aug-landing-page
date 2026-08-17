"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, CheckCircle2, Lock, Server, Sparkles, Activity } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

export function WhatsAppCompliance() {
  const metrics = [
    {
      icon: Activity,
      metric: "100%",
      title: "100% Verified API Uptime",
      description: "Direct redundant server gateways ensuring every outgoing broadcast & inbound response is delivered with zero latency.",
      badge: "Zero Downtime SLA",
    },
    {
      icon: ShieldCheck,
      metric: "Green Tier",
      title: "Official Green Label Rating Security",
      description: "Automated quality rating protection keeps your phone number in highest-standing tiering with proactive spam prevention.",
      badge: "Meta Verified",
    },
    {
      icon: Server,
      metric: "Cloud API",
      title: "Compliant Meta Cloud Infrastructure Integration",
      description: "Direct integration via Meta Graph & Cloud APIs. No unofficial reverse-engineered wrappers, no risk of sudden account bans.",
      badge: "100% Enterprise Safe",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28 border-b border-border bg-grid-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-emerald-600">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Trust & Operational Compliance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Engineered for High-Scale Enterprise Reliability
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Strict compliance with Meta Cloud API standards guarantees your brand deliverability and data sovereignty.
          </p>
        </div>

        {/* 3 Metrics Cards with Landing-01 Corner Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((item) => (
            <div
              key={item.title}
              className="relative rounded-3xl border border-border bg-background/90 backdrop-blur-md p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-md group overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-emerald-500/60" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-emerald-500/60" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-emerald-500/60" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-emerald-500/60" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs font-semibold border-emerald-500/30 text-emerald-600 bg-emerald-500/5">
                    {item.badge}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {item.metric}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
                <span>Active Enterprise Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
