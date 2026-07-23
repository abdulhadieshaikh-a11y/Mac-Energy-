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
      {/* Background machine image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Heavy dark overlay for text visibility */}
      <div className="absolute inset-0 z-[1] bg-base-900/[0.88]" />
      {/* Left-to-right gradient for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-base-950/90 via-base-900/70 to-base-900/50" />
      {/* Bottom fade */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-base-950 via-base-950/40 to-transparent" />
      {/* Dot grid overlay */}
      <div className="absolute inset-0 z-[1] bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,black,transparent)]" />
      {/* Cyan glow accent */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-signal-cyan/[0.04] blur-[120px] z-[1]" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-signal-blue/[0.04] blur-[100px] z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mono-tag text-[11px] text-signal-cyan border border-signal-cyan/30 bg-signal-cyan/[0.07] rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan animate-pulseDot" />
            ALL SYSTEMS OPERATIONAL
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-[44px] leading-[1.05] sm:text-[58px] lg:text-[66px] text-balance tracking-tight"
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
            className="mt-7 text-ink-300 text-[17px] leading-relaxed max-w-lg"
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
            className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-ink-500"
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
            <span className="w-1 h-1 rounded-full bg-ink-500/40" />
            <span className="flex items-center gap-1.5">
              <Server size={14} className="text-signal-blue" />
              500+ Devices Deployed
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-signal-cyan text-base-950 font-bold px-8 py-4 rounded-lg hover:bg-signal-cyan/85 transition-all duration-300 shadow-lg shadow-signal-cyan/20 hover:shadow-signal-cyan/30 hover:scale-[1.02]"
            >
              Request a Site Visit
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={PHONE_TEL}
              className="group inline-flex items-center gap-2.5 bg-signal-green/10 border-2 border-signal-green/40 px-8 py-4 rounded-lg text-signal-green font-bold hover:bg-signal-green/20 hover:border-signal-green/60 transition-all duration-300 hover:scale-[1.02] animate-pulseGlow"
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
            className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-line/50 pt-7"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-extrabold text-2xl text-ink-100">{s.value}</div>
                <div className="mono-tag text-[9.5px] text-ink-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl border border-line/50 bg-base-900/60 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-black/50"
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
