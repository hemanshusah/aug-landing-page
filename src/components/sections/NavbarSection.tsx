"use client";

import React, { useState, useRef, useEffect } from "react";
import { ObissLogo } from "@/components/ObissLogo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  ArrowRight,
  ChevronDown,
  Users,
  FileCheck,
  Mail,
  Workflow,
  FolderGit2,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

interface NavbarSectionProps {
  onOpenWaitlist: (mode?: "waitlist" | "growth_potential" | "demo") => void;
}

export function NavbarSection({ onOpenWaitlist }: NavbarSectionProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setProductDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const products = [
    {
      icon: IoLogoWhatsapp,
      title: "WhatsApp Systems",
      description: "Official Meta Cloud API broadcasts, chatbots & multi-agent shared inbox.",
      href: "/products/whatsapp",
      badge: "Meta Verified",
    },
    {
      icon: Users,
      title: "Lead Generation & Management",
      description: "Capture, qualify, and auto-route inbound leads with attached context.",
      href: "/#products",
      badge: "Smart Routing",
    },
    {
      icon: FileCheck,
      title: "Smart Forms",
      description: "Interactive forms that immediately trigger downstream automations.",
      href: "/#products",
      badge: "Instant Trigger",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Precision segmentation and deliverability synced with your CRM.",
      href: "/#products",
      badge: "High Inboxing",
    },
    {
      icon: Workflow,
      title: "CRM & Pipeline",
      description: "Visual deal board that moves prospects forward automatically.",
      href: "/#products",
      badge: "Zero Friction",
    },
    {
      icon: FolderGit2,
      title: "Project & Task Tracking",
      description: "Instant handoff from closed-won deal to live client delivery.",
      href: "/#products",
      badge: "Post-Sale",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        
        {/* Left: Brand Logo & Desktop Nav */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-3 group focus:outline-none" aria-label="ObisHub Homepage">
            <ObissLogo variant="blue" className="h-9 sm:h-10 w-auto transition-transform group-hover:scale-[1.02]" />
          </a>

          {/* Desktop Navigation with ONLY Products (The Suite) */}
          <nav className="hidden lg:flex items-center">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setProductDropdownOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all focus:outline-none ${
                  productDropdownOpen
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                aria-expanded={productDropdownOpen}
              >
                <span>Products (The Suite)</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    productDropdownOpen ? "rotate-180 text-foreground" : "text-muted-foreground"
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {productDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-[720px] rounded-2xl border border-border bg-background p-6 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                  
                  {/* Dropdown Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                    <div>
                      <h4 className="text-sm font-bold text-foreground">The ObisHub Suite</h4>
                      <p className="text-xs text-muted-foreground">
                        6 connected revenue operations modules under one unified intelligence layer
                      </p>
                    </div>
                    <Badge className="bg-[#0049DB] text-white text-xs px-3 py-1 font-semibold hover:bg-[#003bb3]">
                      Meta Cloud API
                    </Badge>
                  </div>

                  {/* 6 Products Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {products.map((prod) => (
                      <a
                        key={prod.title}
                        href={prod.href}
                        onClick={() => setProductDropdownOpen(false)}
                        className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0049DB]/10 text-[#0049DB] group-hover:bg-[#0049DB] group-hover:text-white transition-colors">
                          <prod.icon className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-xs font-bold text-foreground group-hover:text-[#0049DB] transition-colors">
                            {prod.title}
                          </span>
                          <span className="text-[11px] text-muted-foreground leading-snug line-clamp-2">
                            {prod.description}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Dropdown Footer Strip */}
                  <div className="mt-4 pt-3 flex items-center justify-between border-t border-border text-xs text-muted-foreground">
                    <span className="font-medium">Zero seat tax • Unlimited team access included</span>
                    <a
                      href="/#products"
                      onClick={() => setProductDropdownOpen(false)}
                      className="font-bold text-[#0049DB] hover:underline flex items-center gap-1"
                    >
                      <span>Explore all 6 products</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>

                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right: CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpenWaitlist("demo")}
            className="text-xs font-semibold text-muted-foreground hover:text-foreground rounded-full px-4 h-10"
          >
            See What&apos;s In It For You
          </Button>

          <Button
            onClick={() => onOpenWaitlist("growth_potential")}
            className="h-11 rounded-full bg-[#0049DB] px-6 text-xs font-bold text-white shadow-md shadow-[#0049DB]/25 hover:bg-[#003bb3] transition-all flex items-center gap-2 group"
          >
            <span>Check Growth Potential</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            size="sm"
            onClick={() => onOpenWaitlist("growth_potential")}
            className="sm:hidden text-xs bg-[#0049DB] text-white px-3.5 py-1.5 h-9 rounded-full font-bold shadow-sm"
          >
            Growth Potential
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[380px] p-6 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <a href="/" onClick={() => setMobileOpen(false)}>
                    <ObissLogo variant="blue" className="h-8 w-auto" />
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="pt-2">
                    <p className="px-3 py-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Products (The Suite)
                    </p>
                    <div className="space-y-1 mt-1">
                      {products.map((prod) => (
                        <a
                          key={prod.title}
                          href={prod.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-[#0049DB] hover:bg-muted/60"
                        >
                          {prod.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <Button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenWaitlist("growth_potential");
                  }}
                  className="w-full h-12 bg-[#0049DB] text-white rounded-full font-bold shadow-md"
                >
                  Check growth potential
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenWaitlist("demo");
                  }}
                  className="w-full h-11 rounded-full font-semibold"
                >
                  See What&apos;s In It For You
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
