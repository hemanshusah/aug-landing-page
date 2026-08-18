"use client";

import React, { useState } from "react";
import { HeaderAnnouncement } from "@/components/sections/HeaderAnnouncement";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { BentoSection } from "@/components/sections/BentoSection";
import { FrameworkSection } from "@/components/sections/FrameworkSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WaitlistModal } from "@/components/WaitlistModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"waitlist" | "growth_potential" | "demo">("growth_potential");

  const handleOpenModal = (mode: "waitlist" | "growth_potential" | "demo" = "growth_potential") => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-[#0049DB] selection:text-white">
      {/* Top Banner: Announcement */}
      <HeaderAnnouncement onOpenWaitlist={() => handleOpenModal("waitlist")} />

      {/* Navigation */}
      <NavbarSection onOpenWaitlist={(mode) => handleOpenModal(mode || "growth_potential")} />

      {/* Hero Section */}
      <HeroSection onOpenWaitlist={(mode) => handleOpenModal(mode || "growth_potential")} />

      {/* Philosophy: Replacing Manual Friction with Operational Ease */}
      <PhilosophySection />

      {/* Core Capabilities: Multi-Channel Outreach, Cross-Channel BI, Frictionless CRM */}
      <CapabilitiesSection onOpenWaitlist={() => handleOpenModal("demo")} />

      {/* The Suite: 6 Connected Products (WhatsApp, Lead Gen, Smart Forms, Email, CRM, Tasks) */}
      <BentoSection onOpenWaitlist={() => handleOpenModal("waitlist")} />

      {/* The Framework: Steps 01 to 03 */}
      <FrameworkSection onOpenWaitlist={() => handleOpenModal("growth_potential")} />

      {/* We're Different Section: 4 Differentiators & Callout Lines */}
      <DifferentiatorsSection />

      {/* Stats & Enterprise Metrics (stats-4 split layout) */}
      <StatsSection onOpenWaitlist={(mode) => handleOpenModal(mode || "growth_potential")} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Team: People Behind the System */}
      <TeamSection />

      {/* FAQ: 4 Exact Questions & Answers */}
      <FaqSection />

      {/* CTA & Contact Section */}
      <ContactCtaSection onOpenWaitlist={(mode) => handleOpenModal(mode || "waitlist")} />

      {/* Footer */}
      <FooterSection />

      {/* Interactive Modal */}
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultMode={modalMode}
      />
    </main>
  );
}
