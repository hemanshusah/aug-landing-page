"use client";

import React, { useState } from "react";
import { HeaderAnnouncement } from "@/components/sections/HeaderAnnouncement";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { WhatsAppHero } from "@/components/whatsapp-tool/WhatsAppHero";
import { WhatsAppAbout } from "@/components/whatsapp-tool/WhatsAppAbout";
import { WhatsAppFeaturesBento } from "@/components/whatsapp-tool/WhatsAppFeaturesBento";
import { WhatsAppHowItWorks } from "@/components/whatsapp-tool/WhatsAppHowItWorks";
import { WhatsAppCompliance } from "@/components/whatsapp-tool/WhatsAppCompliance";
import { WhatsAppCta } from "@/components/whatsapp-tool/WhatsAppCta";
import { FooterSection } from "@/components/sections/FooterSection";
import { WaitlistModal } from "@/components/WaitlistModal";

export function WhatsAppToolPageContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"waitlist" | "growth_potential" | "demo">("demo");

  const handleOpenModal = (mode: "waitlist" | "growth_potential" | "demo" = "demo") => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-[#0049DB] selection:text-white">
      {/* Announcement Header */}
      <HeaderAnnouncement onOpenWaitlist={() => handleOpenModal("waitlist")} />

      {/* Spacious Navbar */}
      <NavbarSection onOpenWaitlist={(mode) => handleOpenModal(mode || "growth_potential")} />

      {/* 1. HERO SECTION */}
      <WhatsAppHero onOpenModal={handleOpenModal} />

      {/* 2. ABOUT THE PLATFORM */}
      <WhatsAppAbout />

      {/* 3. CORE FEATURES & PLATFORM SERVICES (BENTO) */}
      <WhatsAppFeaturesBento />

      {/* 4. HOW IT WORKS: THE STEP-BY-STEP PROCESS */}
      <WhatsAppHowItWorks onOpenModal={handleOpenModal} />

      {/* 5. TRUST & OPERATIONAL COMPLIANCE */}
      <WhatsAppCompliance />

      {/* High-impact WhatsApp CTA */}
      <WhatsAppCta onOpenModal={handleOpenModal} />

      {/* Global Brand Footer with text-only watermark */}
      <FooterSection />

      {/* Lead capture / Demo modal */}
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultMode={modalMode}
      />
    </main>
  );
}
