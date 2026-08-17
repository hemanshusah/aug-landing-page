"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Globe, ArrowRight, ShieldCheck, Cpu, Sparkles } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      title: "Strategy & Growth Lead",
      role: "Venture Partnerships & Strategic Frameworks",
      focus:
        "Building outreach systems that connect what leadership wants with what the software can actually deliver.",
      tag: "STRATEGY & ARCHITECTURE",
    },
    {
      title: "Infrastructure & Core Engineering",
      role: "Cloud Architecture & Multi-API Integration",
      focus:
        "Keeping the handshake between our database, Meta's servers, and your communication channels secure and always online.",
      tag: "INFRASTRUCTURE & META API",
    },
    {
      title: "Client Success & Integration",
      role: "Onboarding, CRM Migration & Operations",
      focus:
        "Getting your leads, automations, and team workflows moved over without the usual chaos of switching platforms.",
      tag: "DEDICATED ARCHITECTS",
    },
  ];

  return (
    <section id="team" className="relative bg-background py-20 md:py-32 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0049DB]">
            OUR TEAM
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
            The people behind the system
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Engineers, distributed systems architects, and revenue operators building the intelligent future of smart office commerce.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group relative rounded-3xl border border-border bg-card p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0049DB]/50 hover:shadow-xl space-y-6"
            >
              <div className="space-y-4">
                <span className="rounded-full bg-muted px-3 py-1 font-mono text-[11px] font-bold text-[#0049DB]">
                  {member.tag}
                </span>

                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-[#0049DB] transition-colors">
                  {member.title}
                </h3>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0049DB]">
                    Role: {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Focus: </span>
                    {member.focus}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>ObisHub Core Architecture</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
