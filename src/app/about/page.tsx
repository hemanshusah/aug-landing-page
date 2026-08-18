"use client";

import React, { useState } from "react";
import { HeaderAnnouncement } from "@/components/sections/HeaderAnnouncement";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutProblemSection } from "@/components/about/AboutProblemSection";
import { AboutPlatformSection } from "@/components/about/AboutPlatformSection";
import { AboutPhilosophySection } from "@/components/about/AboutPhilosophySection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { WaitlistModal } from "@/components/WaitlistModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"waitlist" | "growth_potential" | "demo">("growth_potential");

  const handleOpenModal = (mode: "waitlist" | "growth_potential" | "demo" = "growth_potential") => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-[#0049DB] selection:text-white">
      {/* Top Announcement Banner */}
      <HeaderAnnouncement onOpenWaitlist={() => handleOpenModal("waitlist")} />

      {/* Navigation Bar with About Us & Products */}
      <NavbarSection onOpenWaitlist={(mode) => handleOpenModal(mode || "growth_potential")} />

      {/* 1. HERO SECTION (Watermelon UI Clean Hero for About Page) */}
      <AboutHero onOpenModal={handleOpenModal} />

      {/* 2. TOPIC 1: THE PROBLEM WE SOLVE (Watermelon UI Feature-5 Element) */}
      <AboutProblemSection onOpenModal={handleOpenModal} />

      {/* 3. TOPIC 2: WHAT WE ARE (Watermelon UI Feature-2 Element) */}
      <AboutPlatformSection onOpenModal={handleOpenModal} />

      {/* 4. TOPIC 3: OUR OPERATING PHILOSOPHY (Watermelon UI Split Feature Cards) */}
      <AboutPhilosophySection onOpenModal={handleOpenModal} />

      {/* 5. THE TEAM: People Behind the System */}
      <TeamSection />

      {/* 6. CALL TO ACTION & ARCHITECTURE DESK */}
      <ContactCtaSection onOpenWaitlist={(mode) => handleOpenModal(mode || "waitlist")} />

      {/* 7. GLOBAL FOOTER WITH WATERMARK */}
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
