"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Users,
  FileCheck2,
  Mail,
  GitPullRequest,
  CheckSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

interface BentoSectionProps {
  onOpenWaitlist: () => void;
}

export function BentoSection({ onOpenWaitlist }: BentoSectionProps) {
  const products = [
    {
      id: "product-01",
      number: "PRODUCT 01",
      name: "WhatsApp Systems",
      icon: IoLogoWhatsapp,
      iconBg: "bg-emerald-500/20 text-emerald-400",
      description:
        "Run WhatsApp like a channel, not a chore. Broadcasts, automated replies, and a shared inbox your whole team can work from — built on the official Meta Cloud API, so your number stays safe and your messages actually land.",
      tag: "Official Meta Cloud API",
      colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
      id: "product-02",
      number: "PRODUCT 02",
      name: "Lead Generation & Management",
      icon: Users,
      iconBg: "bg-[#0049DB]/30 text-[#579BFF]",
      description:
        "Capture leads from every source and route them automatically to the right person, at the right time, with the right context already attached. No more \"who's following up on this?\" threads.",
      tag: "Smart Routing",
      colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
      id: "product-03",
      number: "PRODUCT 03",
      name: "Smart Forms",
      icon: FileCheck2,
      iconBg: "bg-amber-500/20 text-amber-400",
      description:
        "Build forms that don't just collect data — they kick off the next step the second someone hits submit. A new lead, a support request, a demo booking; the form decides what happens next so your team doesn't have to.",
      tag: "Instant Trigger Action",
      colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
      id: "product-04",
      number: "PRODUCT 04",
      name: "Email Marketing",
      icon: Mail,
      iconBg: "bg-purple-500/20 text-purple-400",
      description:
        "Segment your list, send campaigns, and track who actually opens what — synced with the same lead data your WhatsApp and CRM tools already use, so nothing gets sent twice or missed entirely.",
      tag: "Synced Deliverability",
      colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
      id: "product-05",
      number: "PRODUCT 05",
      name: "CRM & Pipeline",
      icon: GitPullRequest,
      iconBg: "bg-indigo-500/20 text-indigo-400",
      description:
        "A pipeline view that updates itself. Track every deal from first touch to close, without asking your team to fill in a status field they'll forget about by Friday.",
      tag: "Self-Updating",
      colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
      id: "product-06",
      number: "PRODUCT 06",
      name: "Project & Task Tracking",
      icon: CheckSquare,
      iconBg: "bg-cyan-500/20 text-cyan-400",
      description:
        "Once a deal closes, the handoff to delivery doesn't have to be a Slack message and a prayer. Turn a closed-won deal into a live project with the context still attached.",
      tag: "Deal-to-Delivery Handoff",
      colSpan: "md:col-span-1 lg:col-span-1",
    },
  ];

  return (
    <section id="products" className="relative bg-[#060D1E] text-white py-20 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0049DB]/20 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#579BFF]">
            THE SUITE
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white leading-tight">
            One dashboard. Every product your growth team touches.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Structured around your actual revenue operations — WhatsApp, lead management, forms, email, CRM, and project delivery.
          </p>
        </div>

        {/* 6-Product Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between backdrop-blur-xl group hover:border-[#0049DB]/60 transition-all duration-300 ${prod.colSpan}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${prod.iconBg}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge className="bg-white/10 text-zinc-300 border-white/15 text-[11px] font-mono font-medium">
                      {prod.tag}
                    </Badge>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-mono font-bold tracking-wider text-[#579BFF] uppercase">
                      {prod.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                      {prod.name}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Included in ObisHub Suite</span>
                  <button
                    onClick={onOpenWaitlist}
                    className="text-xs font-semibold text-[#579BFF] group-hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Request demo</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
