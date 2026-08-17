"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function FaqSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "Is ObisHub just a messaging tool, or something bigger?",
      answer:
        "Bigger. WhatsApp automation is one part of it — but ObisHub also runs your lead generation, keeps your CRM data centralized, and handles email marketing across the same customer journey. Think of WhatsApp as one channel inside a much wider system, not the whole product.",
    },
    {
      id: "faq-2",
      question: "Can we bring over our existing customer data?",
      answer:
        "Yes. Import your contacts from whatever you're using now — legacy CRM, spreadsheets, CSV exports — and they'll be ready to segment across both email and WhatsApp right away. You won't be starting from zero.",
    },
    {
      id: "faq-3",
      question: "Will this get our number or domain flagged for spam?",
      answer:
        "Not if you're sending the way you're supposed to. We run strictly on the official Meta WhatsApp Cloud API and verified SMTP servers, which keeps your sender reputation intact. Follow standard permission-based practices and deliverability stays healthy.",
    },
    {
      id: "faq-4",
      question: "Do we pay more every time we add a team member?",
      answer:
        "No. We don't charge per seat. Your whole marketing and sales team can log in, work, and track results together without the bill going up every time someone new joins.",
    },
  ];

  return (
    <section id="faq" className="relative bg-[#F3F3F3] text-foreground py-20 md:py-32 border-b border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0049DB]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl leading-tight">
            Clear answers to common questions
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about our multi-channel system, Meta Cloud API compliance, and pricing.
          </p>
        </div>

        {/* Accordion */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-neutral-100 pb-2 last:border-b-0 last:pb-0"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-neutral-900 hover:text-[#0049DB] transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-neutral-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
