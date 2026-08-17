"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, RefreshCw, Terminal, ShieldAlert } from "lucide-react";
import { ObissLogo } from "@/components/ObissLogo";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#060D1E] font-mono text-white selection:bg-[#0049DB]/40 selection:text-white flex flex-col justify-between p-6">
      
      {/* Background Cyber Grid & Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[800px] rounded-full bg-gradient-to-tr from-[#0049DB]/20 via-[#579BFF]/15 to-transparent blur-[140px]" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
      </div>

      {/* Top Header */}
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between z-20">
        <a href="/" className="flex items-center gap-2 group">
          <ObissLogo variant="white" className="h-8 sm:h-9 w-auto transition-transform group-hover:scale-105" />
        </a>
        <div className="flex items-center gap-2 text-xs text-[#579BFF] font-mono bg-[#0049DB]/10 px-3 py-1.5 rounded-full border border-[#579BFF]/20">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
          <span>ERR_ROUTE_UNDEFINED [404]</span>
        </div>
      </div>

      {/* Main error-3 Replicated Block */}
      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center p-4 my-auto">
        <div className="relative z-10 max-w-2xl space-y-8 text-center">
          
          {/* Layered Glitching 404 Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative inline-block"
          >
            {/* Outline 404 */}
            <h1
              className="text-8xl font-black tracking-tighter text-transparent select-none md:text-[11rem] lg:text-[13rem]"
              style={{ WebkitTextStroke: "2px rgba(87, 155, 255, 0.25)" }}
            >
              404
            </h1>

            {/* Top Glitch Slice */}
            <motion.h1
              animate={{ x: [-3, 3, -3], opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="absolute inset-0 text-8xl font-black tracking-tighter text-[#579BFF] mix-blend-screen select-none md:text-[11rem] lg:text-[13rem]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
            >
              404
            </motion.h1>

            {/* Bottom Glitch Slice */}
            <motion.h1
              animate={{ x: [3, -3, 3], opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 0.22,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="absolute inset-0 text-8xl font-black tracking-tighter text-[#0049DB] mix-blend-screen select-none md:text-[11rem] lg:text-[13rem]"
              style={{
                clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              }}
            >
              404
            </motion.h1>

            {/* Solid Foreground 404 */}
            <h1 className="absolute inset-0 text-8xl font-black tracking-tighter text-white select-none md:text-[11rem] lg:text-[13rem]">
              404
            </h1>
          </motion.div>

          {/* Terminal Box Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-[#579BFF]/25 bg-black/60 p-6 sm:p-8 backdrop-blur-md rounded-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#579BFF]" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#579BFF]" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#579BFF]" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#579BFF]" />

            <div className="mb-4 flex items-center justify-center gap-3">
              <ShieldAlert className="h-5 w-5 text-[#579BFF]" />
              <h2 className="text-lg sm:text-xl font-bold tracking-[0.2em] text-[#579BFF] uppercase">
                Connection Severed
              </h2>
            </div>

            <p className="leading-relaxed text-zinc-300 text-sm sm:text-base max-w-lg mx-auto">
              Critical routing failure. The endpoint you requested has been redacted, moved, or never existed in the ObisHub main sequence.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
          >
            <a
              href="/"
              className="group relative overflow-hidden rounded-xl bg-[#0049DB] px-8 py-4 text-xs sm:text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 shadow-lg shadow-[#0049DB]/40"
            >
              <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              <div className="relative flex items-center gap-2 group-hover:text-black transition-colors">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>Initialize Reboot</span>
              </div>
            </a>

            <button
              onClick={() => window.location.reload()}
              className="rounded-xl border border-[#579BFF]/40 px-8 py-4 text-xs sm:text-sm font-bold tracking-widest text-[#579BFF] uppercase transition-all duration-300 hover:bg-[#579BFF] hover:text-black flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Retry Uplink</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto w-full max-w-7xl text-center text-xs text-zinc-500 pt-6">
        Copyright © {new Date().getFullYear()} ObisHub — Intelligent Architecture for the Modern Business Ecosystem. All rights reserved.
      </div>
    </div>
  );
}
