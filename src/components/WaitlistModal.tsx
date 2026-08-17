"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ObissLogo } from "@/components/ObissLogo";
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "waitlist" | "growth_potential" | "demo";
}

export function WaitlistModal({
  isOpen,
  onClose,
  defaultMode = "growth_potential",
}: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [volume, setVolume] = useState("10,000 - 50,000");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail("");
    setCompany("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleReset()}>
      <DialogContent className="sm:max-w-[540px] border-[#0049DB]/20 bg-background/95 backdrop-blur-xl p-6 sm:p-8">
        {!submitted ? (
          <>
            <DialogHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ObissLogo variant="blue" className="h-7 w-auto" />
                </div>
                <Badge variant="brand" className="text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="mr-1 h-3 w-3 inline" /> Early Access 2026
                </Badge>
              </div>

              <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                {defaultMode === "growth_potential"
                  ? "Calculate Your Growth Potential"
                  : defaultMode === "waitlist"
                  ? "Join the ObisHub Priority Waitlist"
                  : "Request Enterprise Intelligence Demo"}
              </DialogTitle>

              <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                Connect with our automated revenue architecture. Automate complex sales outreach and eliminate manual CRM friction across your entire pipeline.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Work Email <span className="text-primary">*</span>
                </label>
                <Input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-lg border-border bg-muted/40 focus-visible:ring-[#0049DB]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Acme Enterprise"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="h-11 rounded-lg border-border bg-muted/40 focus-visible:ring-[#0049DB]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Monthly Lead Volume
                  </label>
                  <select
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="flex h-11 w-full rounded-lg border border-input bg-muted/40 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0049DB]"
                  >
                    <option value="1,000 - 10,000">1,000 - 10,000 leads/mo</option>
                    <option value="10,000 - 50,000">10,000 - 50,000 leads/mo</option>
                    <option value="50,000 - 250,000">50,000 - 250,000 leads/mo</option>
                    <option value="250,000+">250,000+ leads/mo (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div className="rounded-lg border border-primary/15 bg-primary/5 p-3 text-xs text-muted-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#0049DB] shrink-0" />
                <span>Enterprise encryption & WhatsApp Business API compliance guaranteed.</span>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold bg-[#0049DB] hover:bg-[#003bb3] text-white shadow-lg shadow-[#0049DB]/25 transition-all group"
              >
                <span>Unlock Growth Potential</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0049DB]/10 text-[#0049DB]">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <DialogTitle className="text-2xl font-bold text-foreground">
              You&apos;re on the Priority List!
            </DialogTitle>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              We received your submission for <span className="font-semibold text-foreground">{email}</span>. Our enterprise solutions team is configuring your intelligence workspace blueprint and will reach out shortly.
            </p>
            <div className="pt-2">
              <Button
                onClick={handleReset}
                variant="outline"
                className="rounded-full px-6"
              >
                Back to ObisHub Overview
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
