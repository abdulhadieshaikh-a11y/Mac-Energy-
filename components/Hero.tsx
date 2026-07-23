"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Zap, Server } from "lucide-react";
import NetworkGraph from "./NetworkGraph";
import { PHONE_DISPLAY, PHONE_TEL } from "./Navbar";

const stats = [
  { label: "AVG. LATENCY", value: "8ms" },
  { label: "NETWORK UPTIME", value: "99.9%" },
  { label: "DEVICES MANAGED", value: "1,200+" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden min-h-[95vh] flex items-center">
      {/* Background machine/server image - clearly visible */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Lighter overlay so machine is visible but text still readable */}
      <div className="absolute inset-0 z-[1] bg-base-900/60" />
      {/* Left side darker for text, right side lighter to show machine */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-base-950/95 via-base-950/70 to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-base-950 via-base-950/30 to-transparent" />
      {/* Dot grid */}
      <div className="absolute inset-0 z-[1] bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_30%_40%,black,transparent)]" />
      {/* Glow */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-signal-cyan/[0.06] blur-[120px] z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mono-tag text-[11px] text-signal-cyan border border-signal-cyan/30 bg-signal-cyan/[0.08] rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan animate-pulseDot" />
            ALL SYSTEMS OPERATIONAL
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-[36px] leading-[1.08] sm:text-[50px] lg:text-[64px] text-balance tracking-tight"
          >
            We build the networks
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-cyan bg-[length:200%_auto] animate-shimmer">
              your systems run on.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-ink-300 text-[16px] leading-relaxed max-w-lg"
          >
            Mac Energy is a hands-on networking team — we design, wire, and maintain
            everything from routers and switches to full computer labs, workstations,
            and the APIs that connect them. One team, every layer of your infrastructure.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 text-[12px] text-ink-500"
          >
            <span className="flex items-center gap-1.5">
              <Shield size={14} className="text-signal-green" />
              Certified Engineers
            </span>
            <span className="w-1 h-1 rounded-full bg-ink-500/40" />
            <span className="flex items-center gap-1.5">
              <Zap size={14} className="text-signal-amber" />
              Same-Day Response
            </span>
            <span className="w-1 h-1 rounded-full bg-ink-500/40 hidden sm:block" />
            <span className="flex items-center gap-1.5 hidden sm:flex">
              <Server size={14} className="text-signal-blue" />
              500+ Devices Deployed
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-signal-cyan text-base-950 font-bold px-7 py-3.5 rounded-lg hover:bg-signal-cyan/85 transition-all duration-300 shadow-lg shadow-signal-cyan/20 hover:shadow-signal-cyan/30 hover:scale-[1.02]"
            >
              Request a Site Visit
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={PHONE_TEL}
              className="group inline-flex items-center justify-center gap-2.5 bg-signal-green/10 border-2 border-signal-green/40 px-7 py-3.5 rounded-lg text-signal-green font-bold hover:bg-signal-green/20 hover:border-signal-green/60 transition-all duration-300 hover:scale-[1.02] animate-pulseGlow"
            >
              <Phone size={18} className="group-hover:animate-bounce" />
              <span>Call Now</span>
              <span className="text-signal-green/70 font-mono text-[13px]">{PHONE_DISPLAY}</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md border-t border-line/50 pt-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-extrabold text-xl sm:text-2xl text-ink-100">{s.value}</div>
                <div className="mono-tag text-[8px] sm:text-[9.5px] text-ink-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl border border-line/50 bg-base-900/60 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-black/50 hidden lg:block"
        >
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="mono-tag text-[10px] text-ink-500">TOPOLOGY // LIVE</span>
            <span className="mono-tag text-[10px] text-signal-green flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-green" /> ONLINE
            </span>
          </div>
          <NetworkGraph />
        </motion.div>
      </div>
    </section>
  );
}
