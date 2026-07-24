"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Shield, Zap, Server, Wifi, Activity, MonitorDot, Globe, Lock, Cpu } from "lucide-react";
import NetworkOpsDashboard from "./NetworkOpsDashboard";
import { PHONE_DISPLAY, PHONE_TEL } from "./Navbar";

const heroSlides = [
  "https://teletraders.net/wp-content/uploads/2017/10/sell-used-networking-servers.jpg",
  "https://teletraders.net/wp-content/uploads/2022/12/1670524462.png",
  "https://teletraders.net/wp-content/uploads/2017/03/networking-1.jpg",
];

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 12,
  duration: 10 + Math.random() * 15,
  size: 1 + Math.random() * 2,
  opacity: 0.08 + Math.random() * 0.2,
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
              animate={{ opacity: 0.5, x: -2 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.12 }}
              className="absolute inset-0 text-signal-cyan z-20"
              style={{ clipPath: "inset(20% 0 40% 0)" }}
            >
              {word}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 0.3, x: 2 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.12, delay: 0.04 }}
              className="absolute inset-0 text-signal-amber z-20"
              style={{ clipPath: "inset(60% 0 10% 0)" }}
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
  { label: "AVG. LATENCY", target: 8, suffix: "ms", color: "text-signal-cyan" },
  { label: "NETWORK UPTIME", target: 99, suffix: ".9%", color: "text-signal-green" },
  { label: "DEVICES MANAGED", target: 1200, suffix: "+", color: "text-signal-amber" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const graphY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
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
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] z-10 bg-base-950/50">
          <motion.div
            key={currentSlide}
            className="h-full bg-gradient-to-r from-signal-cyan/80 via-signal-cyan to-signal-cyan/80"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </div>
        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="group relative p-1"
              aria-label={`Slide ${i + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-500 ${
                  i === currentSlide
                    ? "w-8 h-1.5 bg-signal-cyan shadow-lg shadow-signal-cyan/30"
                    : "w-1.5 h-1.5 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 z-[1] bg-base-900/45" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-base-950/98 via-base-950/80 to-base-950/40" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-base-950/30 via-transparent to-base-950" />

      {/* ── Glowing Orbs ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-[10%] w-[500px] h-[500px] rounded-full bg-signal-cyan/[0.05] blur-[130px] animate-orb1" />
        <div className="absolute bottom-0 right-[8%] w-[380px] h-[380px] rounded-full bg-signal-blue/[0.04] blur-[110px] animate-orb2" />
        <div className="absolute top-[35%] left-[50%] w-[300px] h-[300px] rounded-full bg-signal-amber/[0.025] blur-[90px] animate-orb3" />
      </div>

      {/* ── Dot Grid ── */}
      <div className="absolute inset-0 z-[1] bg-dot-grid opacity-15 [mask-image:radial-gradient(ellipse_70%_70%_at_35%_45%,black,transparent)]" />

      {/* ── Particles ── */}
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
              opacity: p.opacity,
              animation: `particleFloat ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Scan Line ── */}
      <motion.div
        className="absolute left-0 right-0 h-px z-[2] bg-gradient-to-r from-transparent via-signal-cyan/25 to-transparent"
        animate={{ top: ["5%", "95%", "5%"], opacity: [0, 0.6, 0.6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Main Content ── */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
        <div>
          {/* ── Status Badge ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 mono-tag text-[11px] text-signal-cyan/90 border border-signal-cyan/20 bg-signal-cyan/[0.05] rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-signal-cyan/8 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-cyan opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-cyan" />
            </span>
            <span className="relative">ALL SYSTEMS OPERATIONAL</span>
          </motion.div>

          {/* ── Heading ── */}
          <h1 className="font-display font-extrabold text-[36px] leading-[1.1] sm:text-[50px] lg:text-[66px] text-balance tracking-tight">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              >
                We build <GlitchWord word="the" className="text-ink-100" /> networks
              </motion.span>
            </span>
            <span className="block mt-1 overflow-hidden">
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-amber bg-[length:300%_auto] animate-shimmer"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
              >
                your systems run on.
              </motion.span>
            </span>
          </h1>

          {/* ── Paragraph ── */}
          <TypewriterText
            text="Mac Energy is a hands-on networking team — we design, wire, and maintain everything from routers and switches to full computer labs, workstations, and the APIs that connect them. One team, every layer of your infrastructure."
            delay={1400}
          />

          {/* ── Trust Badges ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 2.2 } } }}
            className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 text-[12px] text-ink-500"
          >
            {[
              { icon: Shield, text: "Certified Engineers", color: "text-signal-green" },
              { icon: Zap, text: "Same-Day Response", color: "text-signal-amber" },
              { icon: Server, text: "500+ Devices Deployed", color: "text-signal-blue" },
            ].map((b, i) => (
              <motion.span
                key={b.text}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
                className={`flex items-center gap-1.5 ${i === 2 ? "hidden sm:flex" : ""}`}
              >
                <b.icon size={14} className={b.color} />
                {b.text}
              </motion.span>
            ))}
          </motion.div>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.4 }}
            className="mt-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0,212,170,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-2.5 bg-signal-cyan text-base-950 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-signal-cyan/20 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />
              <span className="relative">Request a Site Visit</span>
              <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            <motion.a
              href={PHONE_TEL}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2.5 bg-signal-green/10 border border-signal-green/30 px-7 py-3.5 rounded-xl text-signal-green font-bold hover:bg-signal-green/15 hover:border-signal-green/50 transition-all duration-300 animate-pulseGlow"
            >
              <Phone size={17} className="group-hover:animate-bounce" />
              <span>Call Now</span>
              <span className="text-signal-green/60 font-mono text-[12px]">{PHONE_DISPLAY}</span>
            </motion.a>
          </motion.div>

          {/* ── Stats ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md border-t border-line/30 pt-6"
          >
            {stats.map((s, i) => (
              <StatCounter key={s.label} {...s} index={i} />
            ))}
          </motion.div>
        </div>

        {/* ── Network Dashboard ── */}
        <motion.div
          style={{ y: graphY }}
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-2xl border border-line/30 bg-base-900/70 backdrop-blur-2xl p-4 sm:p-5 shadow-2xl shadow-black/50 hidden lg:block group"
        >
          {/* Animated border */}
          <div className="absolute -inset-px rounded-2xl z-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(0,212,170,0.12), transparent 50%, rgba(59,130,246,0.12))",
                  "linear-gradient(90deg, rgba(59,130,246,0.12), transparent 50%, rgba(0,212,170,0.12))",
                  "linear-gradient(180deg, rgba(0,212,170,0.12), transparent 50%, rgba(59,130,246,0.12))",
                  "linear-gradient(270deg, rgba(59,130,246,0.12), transparent 50%, rgba(0,212,170,0.12))",
                  "linear-gradient(360deg, rgba(0,212,170,0.12), transparent 50%, rgba(59,130,246,0.12))",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-green" />
                </span>
                <span className="mono-tag text-[10px] text-ink-300/80 tracking-widest">NETWORK OPS</span>
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.4 }}
                className="mono-tag text-[8px] text-signal-green/70 px-2 py-0.5 rounded border border-signal-green/15 bg-signal-green/[0.04]"
              >
                ALL SYSTEMS GO
              </motion.span>
            </div>

            {/* Dashboard */}
            <NetworkOpsDashboard />

            {/* Footer */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-line/15">
              <span className="mono-tag text-[7px] text-ink-500/35">GATEWAY 10.0.0.1</span>
              <span className="mono-tag text-[7px] text-ink-500/35">REFRESH 2.4s</span>
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      className="mt-5 text-ink-300 text-[15px] leading-relaxed max-w-lg min-h-[72px]"
    >
      {displayed}
      {started && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-signal-cyan/70 ml-0.5 align-middle animate-blink" />
      )}
    </motion.p>
  );
}

function StatCounter({ target, suffix, label, color, index }: {
  target: number; suffix: string; label: string; color: string; index: number;
}) {
  const { val, ref } = useCountUp(target, suffix, 1800, 2400 + index * 200);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.8 + index * 0.12, duration: 0.6 }}
      className="group cursor-default"
    >
      <div className={`font-display font-extrabold text-xl sm:text-2xl ${color} group-hover:scale-105 transition-transform`}>
        {val}
      </div>
      <div className="mono-tag text-[8px] sm:text-[9px] text-ink-500/60 mt-1">{label}</div>
      <div className={`h-0.5 rounded-full mt-2 ${color.replace("text-", "bg-")}/20 w-full`} />
    </motion.div>
  );
}
