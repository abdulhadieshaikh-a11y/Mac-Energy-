"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Phone, Shield, Zap, Server, Wifi, Activity, MonitorDot, ChevronRight } from "lucide-react";
import NetworkGraph from "./NetworkGraph";
import { PHONE_DISPLAY, PHONE_TEL } from "./Navbar";

const floatingIcons = [
  { icon: Wifi, x: "78%", y: "15%", size: 22 },
  { icon: Activity, x: "88%", y: "52%", size: 18 },
  { icon: MonitorDot, x: "93%", y: "30%", size: 24 },
];

/* ── animated counter hook ── */
function useCountUp(target: number, suffix = "", duration = 1800, startDelay = 0) {
  const [val, setVal] = useState("0" + suffix);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const pct = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - pct, 3);
        const current = Math.round(eased * target);
        setVal(current.toLocaleString() + suffix);
        if (pct < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [inView, target, suffix, duration, startDelay]);

  return { val, ref };
}

/* ── glitch text on hover ── */
function GlitchWord({ word, className }: { word: string; className?: string }) {
  const [glitch, setGlitch] = useState(false);
  return (
    <span
      className={`inline-block relative cursor-default ${className ?? ""}`}
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
    >
      <span className="relative z-10">{word}</span>
      {glitch && (
        <>
          <span className="absolute inset-0 text-signal-cyan/60 z-20" style={{ clipPath: "inset(20% 0 40% 0)", transform: "translateX(-2px)" }}>{word}</span>
          <span className="absolute inset-0 text-signal-amber/40 z-20" style={{ clipPath: "inset(60% 0 10% 0)", transform: "translateX(2px)" }}>{word}</span>
        </>
      )}
    </span>
  );
}

const stats = [
  { label: "AVG. LATENCY", target: 8, suffix: "ms", color: "text-signal-cyan", glow: "shadow-signal-cyan/20" },
  { label: "NETWORK UPTIME", target: 99, suffix: ".9%", color: "text-signal-green", glow: "shadow-signal-green/20" },
  { label: "DEVICES MANAGED", target: 1200, suffix: "+", color: "text-signal-amber", glow: "shadow-signal-amber/20" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const graphY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section ref={sectionRef} id="top" className="relative pt-40 pb-24 md:pt-48 md:pb-32 min-h-[95vh] flex items-center overflow-hidden">
      {/* ── clipped background layer ── */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY, scale: bgScale, backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-base-900/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-base-950/95 via-base-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-950" />
        <div className="absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_30%_40%,black,transparent)]" />
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-signal-cyan/[0.07] blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-[350px] h-[350px] rounded-full bg-signal-blue/[0.06] blur-[100px]" />
      </div>

      {/* ── animated scan line ── */}
      <motion.div
        className="absolute left-0 right-0 h-px z-[2] bg-gradient-to-r from-transparent via-signal-cyan/40 to-transparent"
        initial={{ top: "10%" }}
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* ── floating orbiting icons ── */}
      {floatingIcons.map((fi, i) => (
        <motion.div
          key={i}
          className="absolute z-[2] hidden lg:block"
          style={{ left: fi.x, top: fi.y }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.12, scale: 1, rotate: 0 }}
          transition={{ delay: 1 + i * 0.3, duration: 0.8, type: "spring", stiffness: 120 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <fi.icon size={fi.size} className="text-signal-cyan" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div style={{ y: textY }}>
          {/* ── status badge ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 150, damping: 15 }}
            className="inline-flex items-center gap-2 mono-tag text-[11px] text-signal-cyan border border-signal-cyan/30 bg-signal-cyan/[0.08] rounded-full px-4 py-1.5 mb-8 relative overflow-hidden"
          >
            {/* shimmer sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-signal-cyan/15 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-cyan" />
            </span>
            <span className="relative">ALL SYSTEMS OPERATIONAL</span>
          </motion.div>

          {/* ── heading: word-by-word wipe reveal ── */}
          <motion.h1
            className="font-display font-extrabold text-[38px] leading-[1.12] sm:text-[52px] lg:text-[68px] text-balance tracking-tight"
          >
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              >
                We build <GlitchWord word="the" className="text-ink-100" /> networks
              </motion.span>
            </span>
            <span className="block mt-1 overflow-hidden">
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-amber bg-[length:300%_auto] animate-shimmer"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.33, 1, 0.68, 1] }}
              >
                your systems run on.
              </motion.span>
            </span>
          </motion.h1>

          {/* ── typewriter paragraph ── */}
          <TypewriterText
            text="Mac Energy is a hands-on networking team — we design, wire, and maintain everything from routers and switches to full computer labs, workstations, and the APIs that connect them. One team, every layer of your infrastructure."
            delay={1200}
          />

          {/* ── trust badges ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 1.6 } } }}
            className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 text-[12px] text-ink-500"
          >
            {[
              { icon: Shield, text: "Certified Engineers", color: "text-signal-green" },
              { icon: Zap, text: "Same-Day Response", color: "text-signal-amber" },
              { icon: Server, text: "500+ Devices Deployed", color: "text-signal-blue" },
            ].map((b, i) => (
              <motion.span
                key={b.text}
                variants={{ hidden: { opacity: 0, x: -12, filter: "blur(4px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)" } }}
                transition={{ duration: 0.5 }}
                className={`flex items-center gap-1.5 ${i === 2 ? "hidden sm:flex" : ""}`}
              >
                <b.icon size={14} className={b.color} />
                {b.text}
              </motion.span>
            ))}
          </motion.div>

          {/* ── CTA buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8, ease: [0.33, 1, 0.68, 1] }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(0,212,170,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2.5 bg-signal-cyan text-base-950 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-signal-cyan/20"
            >
              Request a Site Visit
              <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.a>
            <motion.a
              href={PHONE_TEL}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2.5 bg-signal-green/10 border-2 border-signal-green/40 px-7 py-3.5 rounded-xl text-signal-green font-bold hover:bg-signal-green/20 hover:border-signal-green/60 transition-all duration-300 animate-pulseGlow"
            >
              <Phone size={18} className="group-hover:animate-bounce" />
              <span>Call Now</span>
              <span className="text-signal-green/70 font-mono text-[13px]">{PHONE_DISPLAY}</span>
            </motion.a>
          </motion.div>

          {/* ── animated stats ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md border-t border-line/50 pt-6"
          >
            {stats.map((s, i) => (
              <StatCounter key={s.label} {...s} index={i} />
            ))}
          </motion.div>
        </motion.div>

        {/* ── network topology card ── */}
        <motion.div
          style={{ y: graphY }}
          initial={{ opacity: 0, scale: 0.88, x: 60, rotateY: -8 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-2xl border border-line/50 bg-base-900/60 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-black/50 hidden lg:block"
        >
          {/* animated border glow */}
          <motion.div
            className="absolute -inset-px rounded-2xl z-0"
            style={{ background: "linear-gradient(135deg, rgba(0,212,170,0.15), transparent 40%, transparent 60%, rgba(59,130,246,0.15))" }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-green animate-pulseDot" />
                <span className="mono-tag text-[10px] text-ink-500">TOPOLOGY // LIVE</span>
              </div>
              <span className="mono-tag text-[9px] text-signal-green px-2 py-0.5 rounded border border-signal-green/20 bg-signal-green/[0.06]">
                CONNECTED
              </span>
            </div>
            <NetworkGraph />
            <div className="flex items-center justify-between mt-3 px-1 border-t border-line/30 pt-3">
              <span className="mono-tag text-[8px] text-ink-500">GATEWAY: 10.0.0.1</span>
              <span className="mono-tag text-[8px] text-signal-cyan/60">REFRESH: 2.4s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── sub-components ── */

function TypewriterText({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 14);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className="mt-6 text-ink-300 text-[16px] leading-relaxed max-w-lg min-h-[72px]"
    >
      {displayed}
      {started && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-signal-cyan ml-0.5 align-middle animate-blink" />
      )}
    </motion.p>
  );
}

function StatCounter({ target, suffix, label, color, glow, index }: {
  target: number; suffix: string; label: string; color: string; glow: string; index: number;
}) {
  const { val, ref } = useCountUp(target, suffix, 1800, 2000 + index * 200);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2.2 + index * 0.15, duration: 0.6, type: "spring", stiffness: 120 }}
      className={`group cursor-default`}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`font-display font-extrabold text-xl sm:text-2xl ${color}`}
      >
        {val}
      </motion.div>
      <div className="mono-tag text-[8px] sm:text-[9.5px] text-ink-500 mt-1">{label}</div>
      {/* underline accent */}
      <motion.div
        className={`h-0.5 rounded-full mt-2 ${color.replace("text-", "bg-")}/30`}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 2.5 + index * 0.15, duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
}
