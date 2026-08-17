"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus Vance",
      role: "VP of Global Revenue",
      company: "Apex Enterprise Cloud",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      text: "ObisHub unified our fractured outbound teams into a single synchronized machine. Our WhatsApp outreach conversion spiked by 310% in the first quarter alone.",
      stats: "310% Conversion Lift",
    },
    {
      name: "Elena Rostova",
      role: "Head of Revenue Operations",
      company: "DataScale Global",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      text: "The zero manual data logging promise is 100% real. Our Salesforce hygiene is flawless without our reps having to manually type meeting notes or deal updates.",
      stats: "15+ Hrs Saved / Rep / Wk",
    },
    {
      name: "Devon Chen",
      role: "Chief Commercial Officer",
      company: "Nexus B2B Network",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      text: "We tested every outreach automation tool on the market. ObisHub is the only system built from the ground up as an enterprise intelligence suite.",
      stats: "99.9% Delivery Guarantee",
    },
  ];

  return (
    <section id="testimonials" className="relative bg-[#060D1E] text-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#579BFF]">
            ENTERPRISE VALIDATION
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
            Trusted by the fastest-growing revenue teams
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            See how enterprise leaders scale outbound communication without adding operational overhead.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-[#0049DB]/50 transition-all shadow-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11 border border-white/20">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback className="bg-[#0049DB] text-white text-xs">
                      {t.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {t.name}
                      <CheckCircle className="h-3.5 w-3.5 text-[#579BFF]" />
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block rounded-full bg-[#0049DB]/30 px-2.5 py-1 text-[11px] font-mono text-[#579BFF] border border-[#579BFF]/20">
                  {t.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
