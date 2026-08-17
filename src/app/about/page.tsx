"use client";

import React, { useState } from "react";
import { HeaderAnnouncement } from "@/components/sections/HeaderAnnouncement";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
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
      <HeaderAnnouncement onOpenWaitlist={() => handleOpenModal("waitlist")} />
      <NavbarSection onOpenWaitlist={() => handleOpenModal("growth_potential")} />
      <AboutUsSection />
      <PhilosophySection />
      <TeamSection />
      <ContactCtaSection onOpenWaitlist={(mode) => handleOpenModal(mode || "waitlist")} />
      <FooterSection />
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultMode={modalMode}
      />
    </main>
  );
}
