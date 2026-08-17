"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi2";
import { Sparkles } from "lucide-react";

interface HeaderAnnouncementProps {
  onOpenWaitlist: () => void;
}

export function HeaderAnnouncement({ onOpenWaitlist }: HeaderAnnouncementProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 w-full bg-[#060D1E] border-b border-[#0049DB]/20 text-white px-4 py-2 text-xs sm:text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4 text-center">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="inline-flex items-center justify-center rounded-full bg-[#0049DB]/30 px-2 py-0.5 text-[11px] font-semibold text-[#579BFF] border border-[#579BFF]/30">
              <Sparkles className="mr-1 h-3 w-3 inline" /> UPDATE
            </span>
            <span className="text-zinc-200">
              Office Business Intelligence Suite is here — Join the exclusive wait list.
            </span>
          </div>

          <Button
            size="sm"
            onClick={onOpenWaitlist}
            className="h-7 rounded-full bg-[#0049DB] px-3.5 text-xs font-semibold text-white hover:bg-[#003bb3] transition-all flex items-center gap-1 shadow-sm"
          >
            <span>Join Waitlist</span>
            <HiArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-zinc-400 hover:text-white p-1 transition-colors rounded"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
