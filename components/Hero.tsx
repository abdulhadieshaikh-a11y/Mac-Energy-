"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Zap, Server, Wifi, Activity, MonitorDot } from "lucide-react";
import NetworkGraph from "./NetworkGraph";
import { PHONE_DISPLAY, PHONE_TEL } from "./Navbar";

const stats = [
  { label: "AVG. LATENCY", value: "8ms", color: "text-signal-cyan" },
  { label: "NETWORK UPTIME", value: "99.9%", color: "text-signal-green" },
  { label: "DEVICES MANAGED", value: "1,200+", color: "text-signal-amber" },
];

const floatingIcons = [
  { icon: Wifi, x: "78%", y: "18%", delay: 0.5, size: 20 },
  { icon: Activity, x: "85%", y: "55%", delay: 1.2, size: 18 },
  { icon: MonitorDot, x: "92%", y: "35%", delay: 0.8, size: 22 },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const charVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const line1 = "We build the networks";
const line2 = "your systems run on.";

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden min-h-[95vh] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-[1] bg-base-900/60" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-base-950/95 via-base-950/70 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-base-950 via-base-950/30 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_30%_40%,black,transparent)]" />
      {/* Accent glows */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-signal-cyan/[0.06] blur-[120px] z-[1]" />
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] rounded-full bg-signal-blue/[0.05] blur-[100px] z-[1]" />

      {/* Floating icons on right (desktop) */}
      {floatingIcons.map((fi, i) => (
        <motion.div
          key={i}
          className="absolute z-[2] hidden lg:block"
          style={{ left: fi.x, top: fi.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: fi.delay, duration: 0.6, ease: "backOut" }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <fi.icon size={fi.size} className="text-signal-cyan" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          {/* Status badge with stagger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="inline-flex items-center gap-2 mono-tag text-[11px] text-signal-cyan border border-signal-cyan/30 bg-signal-cyan/[0.08] rounded-full px-4 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-cyan" />
            </span>
            ALL SYSTEMS OPERATIONAL
          </motion.div>

          {/* Heading with blur-reveal */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold text-[36px] leading-[1.08] sm:text-[50px] lg:text-[64px] text-balance tracking-tight"
          >
            <span className="block">
              {line1.split("").map((ch, i) => (
                <motion.span key={i} variants={charVariant} className="inline-block">
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </span>
            <span className="block mt-1">
              {line2.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  variants={charVariant}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-cyan bg-[length:200%_auto] animate-shimmer"
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-ink-300 text-[16px] leading-relaxed max-w-lg"
          >
            Mac Energy is a hands-on networking team — we design, wire, and maintain
            everything from routers and switches to full computer labs, workstations,
            and the APIs that connect them. One team, every layer of your infrastructure.
          </motion.p>

          {/* Trust badges with stagger */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 1 } } }}
            className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 text-[12px] text-ink-500"
          >
            {[
              { icon: Shield, text: "Certified Engineers", color: "text-signal-green" },
              { icon: Zap, text: "Same-Day Response", color: "text-signal-amber" },
              { icon: Server, text: "500+ Devices Deployed", color: "text-signal-blue" },
            ].map((b, i) => (
              <motion.span
                key={b.text}
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
                className={`flex items-center gap-1.5 ${i === 2 ? "hidden sm:flex" : ""}`}
              >
                <b.icon size={14} className={b.color} />
                {b.text}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons with entrance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
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

          {/* Stats with counter-like animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md border-t border-line/50 pt-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.15, duration: 0.5 }}
              >
                <div className={`font-display font-extrabold text-xl sm:text-2xl ${s.color}`}>{s.value}</div>
                <div className="mono-tag text-[8px] sm:text-[9.5px] text-ink-500 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Network topology card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-2xl border border-line/50 bg-base-900/60 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-black/50 hidden lg:block"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal-green animate-pulseDot" />
              <span className="mono-tag text-[10px] text-ink-500">TOPOLOGY // LIVE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="mono-tag text-[9px] text-signal-green px-2 py-0.5 rounded border border-signal-green/20 bg-signal-green/[0.06]">
                CONNECTED
              </span>
            </div>
          </div>
          <NetworkGraph />
          {/* Bottom status bar */}
          <div className="flex items-center justify-between mt-3 px-1 border-t border-line/30 pt-3">
            <span className="mono-tag text-[8px] text-ink-500">GATEWAY: 10.0.0.1</span>
            <span className="mono-tag text-[8px] text-signal-cyan/60">REFRESH: 2.4s</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
