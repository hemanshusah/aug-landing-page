"use client";

import React from "react";
import { ObissLogo } from "@/components/ObissLogo";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

export function FooterSection() {
  const linkGroup1 = {
    title: "Infrastructure",
    links: [
      { label: "Platform Overview", href: "/#overview" },
      { label: "Intelligence Layer (Blog)", href: "/#philosophy" },
      { label: "Automation Suite", href: "/#products" },
      { label: "The Framework", href: "/#framework" },
    ],
  };

  const linkGroup2 = {
    title: "Solutions",
    links: [
      { label: "WhatsApp Systems", href: "/products/whatsapp" },
      { label: "Lead Generation & Management", href: "/#products" },
      { label: "Email Marketing", href: "/#products" },
      { label: "CRM Auto-Sync", href: "/#products" },
    ],
  };

  const linkGroup3 = {
    title: "Resources",
    links: [
      { label: "System Architecture", href: "/#framework" },
      { label: "Documentation", href: "/#faq" },
      { label: "Developer API", href: "/#contact" },
      { label: "Changelog / What's New", href: "/#stats" },
      { label: "Help Center", href: "/#faq" },
    ],
  };

  const legalLinks = [
    {
      label: "Terms & Conditions",
      href: "https://app.notion.com/p/T-C-Policy-3842caebf746805287f4dac997d376a4?pvs=21",
    },
    {
      label: "Privacy Policy",
      href: "https://app.notion.com/p/Privacy-Policy-3842caebf746805f8e61f4ef8c436cc4?pvs=21",
    },
    {
      label: "Payment Policy",
      href: "https://app.notion.com/p/Payment-Policy-3842caebf7468041b99ddb278645a609?pvs=21",
    },
  ];

  return (
    <footer className="relative bg-background w-full border-t border-border overflow-hidden pt-12 md:pt-16">
      {/* 1. Top Header Row with Brand & Status */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href="/" aria-label="ObisHub Homepage">
              <ObissLogo variant="blue" className="h-9 sm:h-10 w-auto transition-transform hover:scale-105" />
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-[#0049DB] bg-[#0049DB]/10 px-4 py-2 rounded-full border border-[#0049DB]/20">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Official Meta WhatsApp Cloud API Infrastructure</span>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Separator className="opacity-60" />
      </div>

      {/* 2. Main Content: Contact CTA & Link Columns */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Brand Statement & Get In Touch CTA Card */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <p className="text-base text-muted-foreground leading-relaxed font-medium">
              ObisHub — building the infrastructure for B2B growth that doesn&apos;t run out of hours in the day.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-foreground text-xs font-bold uppercase tracking-wider">
                Get in touch with architects
              </h3>

              <a
                href="/#contact"
                className="group bg-muted/60 hover:bg-muted flex items-start gap-4 rounded-2xl border border-border p-5 shadow-sm transition-all hover:border-[#0049DB]/40"
              >
                <div className="bg-[#0049DB] text-white flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-md">
                  <IoLogoWhatsapp className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-foreground group-hover:text-[#0049DB] text-sm font-bold transition-colors">
                    Enterprise Solutions Desk
                  </span>
                  <span className="text-muted-foreground text-xs leading-relaxed">
                    Direct architecture inquiry & Meta Cloud API onboarding
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* 3 Link Groups */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10">
              
              {/* Group 1 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-foreground text-xs font-bold uppercase tracking-wider">
                  {linkGroup1.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {linkGroup1.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-[#0049DB] text-sm font-medium transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Group 2 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-foreground text-xs font-bold uppercase tracking-wider">
                  {linkGroup2.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {linkGroup2.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-[#0049DB] text-sm font-medium transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Group 3 */}
              <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                <h4 className="text-foreground text-xs font-bold uppercase tracking-wider">
                  {linkGroup3.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {linkGroup3.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-[#0049DB] text-sm font-medium transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 3. Text-Only Watermark Section Placed AFTER Main Content */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 md:px-12 pt-2 pb-20 md:pb-24">
        
        {/* footer-watermark-text-only SVG Container */}
        <div className="relative overflow-hidden w-full flex justify-center select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 972.80 288.00"
            role="img"
            aria-label="OBISS HUB watermark text"
            className="w-full h-auto max-h-56 md:max-h-72 opacity-70 transition-opacity hover:opacity-90"
          >
            <text
              x="50%"
              y="62%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#0049DB"
              opacity="0.10"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              fontWeight="900"
              fontSize="155"
              letterSpacing="6"
            >
              OBISS HUB
            </text>
          </svg>

          {/* Fade Gradient to background at bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* 4. Copyright & Legal Links Placed Over The Text-Only Watermark At The Very End */}
        <div className="absolute bottom-4 inset-x-0 z-10 mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 px-6 md:px-12 text-xs font-medium text-muted-foreground">
          <p className="text-center sm:text-left">
            Copyright © {new Date().getFullYear()} ObisHub — intelligent infrastructure for the modern business ecosystem. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0049DB] transition-colors underline-offset-4 hover:underline flex items-center gap-1"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
