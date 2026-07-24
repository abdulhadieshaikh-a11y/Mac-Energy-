"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Shield, Zap, Server, Wifi, Activity, MonitorDot, Globe, Lock, Cpu } from "lucide-react";
import NetworkOpsDashboard from "./NetworkOpsDashboard";
import { PHONE_DISPLAY, PHONE_TEL } from "./Navbar";

const heroSlides = [
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85",
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=85",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=85",
];

const floatingIcons = [
  { icon: Globe, x: "76%", y: "12%", size: 20, delay: 0 },
  { icon: Lock, x: "90%", y: "22%", size: 16, delay: 0.4 },
  { icon: Cpu, x: "94%", y: "48%", size: 22, delay: 0.8 },
  { icon: Wifi, x: "82%", y: "62%", size: 18, delay: 1.2 },
];

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 10,
  duration: 8 + Math.random() * 12,
  size: 1 + Math.random() * 2.5,
  opacity: 0.1 + Math.random() * 0.3,
  color: ["#00d4aa", "#3b82f6", "#f59e0b"][Math.floor(Math.random() * 3)],
}));

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

function GlitchWord({ word, className }: { word: string; className?: string }) {
  const [glitch, setGlitch] = useState(false);
  return (
    <span
      className={`inline-block relative cursor-default ${className ?? ""}`}
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
    >
      <span className="relative z-10">{word}</span>
      <AnimatePresence>
        {glitch && (
          <>
            <motion.span
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 0.6, x: -3 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute inset-0 text-signal-cyan z-20"
              style={{ clipPath: "inset(15% 0 45% 0)" }}
            >
              {word}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 0.4, x: 3 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.1, delay: 0.04 }}
              className="absolute inset-0 text-signal-amber z-20"
              style={{ clipPath: "inset(55% 0 15% 0)" }}
            >
              {word}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 0.3, x: 1, y: -1 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.1, delay: 0.08 }}
              className="absolute inset-0 text-signal-blue z-20"
              style={{ clipPath: "inset(35% 0 30% 0)" }}
            >
              {word}
            </motion.span>
          </>
        )}
      </AnimatePresence>
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
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const graphY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    heroSlides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative pt-40 pb-14 md:pt-48 md:pb-20 min-h-[95vh] flex items-center overflow-hidden">
      {/* ── Background Slideshow ── */}
      <div className="hero-slideshow">
        {heroSlides.map((src, i) => (
          <motion.div
            key={i}
            className={`hero-slideshow-image ${i === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url('${src}')`,
              y: bgY,
              scale: bgScale,
            }}
          />
        ))}
        {/* Slide progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] z-10 bg-base-950/40">
          <motion.div
            key={currentSlide}
            className="h-full bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-cyan"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </div>
        {/* Slide indicator dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="group relative p-1"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-500 ${
                  i === currentSlide
                    ? "w-8 h-2 bg-signal-cyan shadow-lg shadow-signal-cyan/40"
                    : "w-2 h-2 bg-white/25 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Dark Overlays ── */}
      <div className="absolute inset-0 z-[1] bg-base-900/50" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-base-950/98 via-base-950/75 to-base-950/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-base-950/20 via-transparent to-base-950" />

      {/* ── Animated Glowing Orbs ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-[15%] w-[600px] h-[600px] rounded-full bg-signal-cyan/[0.06] blur-[140px] animate-orb1" />
        <div className="absolute bottom-10 right-[5%] w-[400px] h-[400px] rounded-full bg-signal-blue/[0.05] blur-[120px] animate-orb2" />
        <div className="absolute top-[40%] left-[55%] w-[350px] h-[350px] rounded-full bg-signal-amber/[0.03] blur-[100px] animate-orb3" />
      </div>

      {/* ── Animated Grid Overlay ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,170,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse_70%_60%_at_50%_50%, black, transparent)",
        }}
      />

      {/* ── Dot Grid ── */}
      <div className="absolute inset-0 z-[1] bg-dot-grid opacity-20 [mask-image:radial-gradient(ellipse_80%_80%_at_30%_40%,black,transparent)]" />

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left,
              bottom: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.opacity,
              animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Animated Scan Line ── */}
      <motion.div
        className="absolute left-0 right-0 h-px z-[2] bg-gradient-to-r from-transparent via-signal-cyan/30 to-transparent"
        initial={{ top: "5%", opacity: 0 }}
        animate={{ top: ["5%", "95%", "5%"], opacity: [0, 0.8, 0.8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Floating Orbiting Icons ── */}
      {floatingIcons.map((fi, i) => (
        <motion.div
          key={i}
          className="absolute z-[2] hidden lg:block"
          style={{ left: fi.x, top: fi.y }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.12, scale: 1, rotate: 0 }}
          transition={{ delay: 1.5 + fi.delay, duration: 1.2, type: "spring", stiffness: 80 }}
        >
          <motion.div
            animate={{
              y: [0, -16, 4, -10, 0],
              x: [0, 4, -2, 6, 0],
              rotate: [0, 10, -6, 8, 0],
            }}
            transition={{ duration: 7 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative">
              <fi.icon size={fi.size} className="text-signal-cyan" />
              <div className="absolute inset-0 blur-lg bg-signal-cyan/15 rounded-full scale-150" />
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* ── Main Content ── */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
        <div>
          {/* ── Status Badge ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, x: -40, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, type: "spring", stiffness: 100, damping: 14 }}
            className="inline-flex items-center gap-2.5 mono-tag text-[11px] text-signal-cyan border border-signal-cyan/25 bg-signal-cyan/[0.06] rounded-full px-4 py-1.5 mb-8 relative overflow-hidden backdrop-blur-md"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-signal-cyan/10 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-cyan" />
            </span>
            <span className="relative">ALL SYSTEMS OPERATIONAL</span>
          </motion.div>

          {/* ── Heading ── */}
          <motion.h1 className="font-display font-extrabold text-[36px] leading-[1.1] sm:text-[50px] lg:text-[66px] text-balance tracking-tight">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "115%", rotateX: 20 }}
                animate={{ y: "0%", rotateX: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              >
                We build <GlitchWord word="the" className="text-ink-100" /> networks
              </motion.span>
            </span>
            <span className="block mt-1 overflow-hidden">
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-amber bg-[length:300%_auto] animate-shimmer"
                initial={{ y: "115%", rotateX: 20 }}
                animate={{ y: "0%", rotateX: 0 }}
                transition={{ duration: 1, delay: 0.45, ease: [0.33, 1, 0.68, 1] }}
              >
                your systems run on.
              </motion.span>
            </span>
          </motion.h1>

          {/* ── Typewriter Paragraph ── */}
          <TypewriterText
            text="Mac Energy is a hands-on networking team — we design, wire, and maintain everything from routers and switches to full computer labs, workstations, and the APIs that connect them. One team, every layer of your infrastructure."
            delay={1400}
          />

          {/* ── Trust Badges ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 2 } } }}
            className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-[12px] text-ink-500"
          >
            {[
              { icon: Shield, text: "Certified Engineers", color: "text-signal-green" },
              { icon: Zap, text: "Same-Day Response", color: "text-signal-amber" },
              { icon: Server, text: "500+ Devices Deployed", color: "text-signal-blue" },
            ].map((b, i) => (
              <motion.span
                key={b.text}
                variants={{
                  hidden: { opacity: 0, x: -20, filter: "blur(8px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex items-center gap-1.5 ${i === 2 ? "hidden sm:flex" : ""}`}
              >
                <b.icon size={14} className={b.color} />
                {b.text}
              </motion.span>
            ))}
          </motion.div>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.2, ease: [0.33, 1, 0.68, 1] }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(0,212,170,0.4), 0 0 100px rgba(0,212,170,0.12)" }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-2.5 bg-signal-cyan text-base-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-signal-cyan/25 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />
              <span className="relative">Request a Site Visit</span>
              <ArrowRight size={17} className="relative group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.a>
            <motion.a
              href={PHONE_TEL}
              whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(16,185,129,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-2.5 bg-signal-green/10 border-2 border-signal-green/40 px-8 py-4 rounded-xl text-signal-green font-bold hover:bg-signal-green/15 hover:border-signal-green/60 transition-all duration-300 animate-pulseGlow overflow-hidden"
            >
              <Phone size={18} className="group-hover:animate-bounce relative" />
              <span className="relative">Call Now</span>
              <span className="relative text-signal-green/70 font-mono text-[13px]">{PHONE_DISPLAY}</span>
            </motion.a>
          </motion.div>

          {/* ── Animated Stats ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md border-t border-line/40 pt-6"
          >
            {stats.map((s, i) => (
              <StatCounter key={s.label} {...s} index={i} />
            ))}
          </motion.div>
        </div>

        {/* ── Network Operations Dashboard Card ── */}
        <motion.div
          style={{ y: graphY }}
          initial={{ opacity: 0, scale: 0.82, x: 80, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-2xl border border-line/40 bg-base-900/70 backdrop-blur-2xl p-4 sm:p-5 shadow-2xl shadow-black/60 hidden lg:block group"
        >
          {/* Animated border glow */}
          <div className="absolute -inset-px rounded-2xl z-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(0,212,170,0.15), transparent 50%, rgba(59,130,246,0.15))",
                  "linear-gradient(90deg, rgba(59,130,246,0.15), transparent 50%, rgba(0,212,170,0.15))",
                  "linear-gradient(180deg, rgba(0,212,170,0.15), transparent 50%, rgba(245,158,11,0.1))",
                  "linear-gradient(270deg, rgba(245,158,11,0.1), transparent 50%, rgba(0,212,170,0.15))",
                  "linear-gradient(360deg, rgba(0,212,170,0.15), transparent 50%, rgba(59,130,246,0.15))",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Hover glow */}
          <div className="absolute -inset-px rounded-2xl z-0 bg-signal-cyan/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signal-green" />
                </span>
                <span className="mono-tag text-[10px] text-ink-300 tracking-widest">NETWORK OPS CENTER</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="mono-tag text-[8px] text-signal-green px-2 py-0.5 rounded border border-signal-green/20 bg-signal-green/[0.06]"
                >
                  ALL SYSTEMS GO
                </motion.span>
              </div>
            </div>

            {/* Dashboard Content */}
            <NetworkOpsDashboard />

            {/* Footer */}
            <div className="flex items-center justify-between mt-3 px-1 border-t border-line/20 pt-3">
              <span className="mono-tag text-[8px] text-ink-500/50">GATEWAY: 10.0.0.1</span>
              <span className="mono-tag text-[8px] text-ink-500/50">REFRESH: 2.4s</span>
              <span className="mono-tag text-[8px] text-signal-cyan/40">v3.2.1</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── Sub-components ── */

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
    }, 12);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="mt-6 text-ink-300 text-[16px] leading-relaxed max-w-lg min-h-[72px]"
    >
      {displayed}
      {started && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-signal-cyan ml-0.5 align-middle animate-cursor" />
      )}
    </motion.p>
  );
}

function StatCounter({
  target,
  suffix,
  label,
  color,
  glow,
  index,
}: {
  target: number;
  suffix: string;
  label: string;
  color: string;
  glow: string;
  index: number;
}) {
  const { val, ref } = useCountUp(target, suffix, 1800, 2200 + index * 200);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 2.7 + index * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 12,
      }}
      className="group cursor-default"
    >
      <motion.div
        whileHover={{ scale: 1.15, y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`font-display font-extrabold text-xl sm:text-2xl ${color}`}
      >
        {val}
      </motion.div>
      <div className="mono-tag text-[8px] sm:text-[9.5px] text-ink-500 mt-1">{label}</div>
      <motion.div
        className={`h-0.5 rounded-full mt-2 ${color.replace("text-", "bg-")}/30`}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 3.1 + index * 0.15, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </motion.div>
  );
}
