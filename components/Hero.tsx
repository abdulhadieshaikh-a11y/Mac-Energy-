"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Shield,
  Zap,
  Server,
  Router,
  Cable,
  Wifi,
  Braces,
  Activity,
  ChevronDown,
} from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "./Navbar";

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1920&q=85",
    alt: "Enterprise router hardware close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=85",
    alt: "Network switch with structured cables — deployment in progress",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=85",
    alt: "Modern data center server room",
  },
];

const features = [
  { icon: Router, label: "Router & Switch Deployment" },
  { icon: Cable, label: "Structured Cat6A Cabling" },
  { icon: Server, label: "Server Room Build-Out" },
  { icon: Wifi, label: "Wi-Fi & AP Deployment" },
  { icon: Braces, label: "API & System Integration" },
  { icon: Activity, label: "24/7 Monitoring & Support" },
];

const stats = [
  { value: "8ms", label: "AVG. LATENCY" },
  { value: "99.9%", label: "NETWORK UPTIME" },
  { value: "1,200+", label: "DEVICES MANAGED" },
  { value: "10+", label: "YEARS EXPERIENCE" },
];

const trustBadges = [
  { icon: Shield, text: "Certified Engineers", color: "text-signal-green" },
  { icon: Zap, text: "Same-Day Response", color: "text-signal-amber" },
  { icon: Server, text: "500+ Devices Deployed", color: "text-signal-blue" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loaded = 0;
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.onload = () => {
        loaded++;
        if (loaded >= heroSlides.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded >= heroSlides.length) setImagesLoaded(true);
      };
      img.src = slide.src;
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <section id="top" className="relative pt-40 pb-16 md:pt-48 md:pb-24 min-h-[95vh] flex items-center overflow-hidden">
      {/* ── Background Slideshow ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={heroSlides[currentSlide].src}
            alt={heroSlides[currentSlide].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" },
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* ── Overlays (light, so slideshow stays visible) ── */}
      <div className="absolute inset-0 z-[1] bg-base-950/35" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-base-950/80 via-base-950/40 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-base-950/30 via-transparent to-base-950" />

      {/* ── Static Dot Grid ── */}
      <div className="absolute inset-0 z-[1] bg-dot-grid opacity-[0.06] [mask-image:radial-gradient(ellipse_70%_70%_at_35%_45%,black,transparent)]" />

      {/* ── Progress Bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-[3] bg-base-950/60">
        <motion.div
          key={currentSlide}
          className="h-full bg-gradient-to-r from-signal-cyan/80 via-signal-blue to-signal-cyan/80"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>

      {/* ── Slide Dots ── */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[3] flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className="group relative p-1" aria-label={`Slide ${i + 1}`}>
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

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">
        <div className="max-w-3xl">
          {/* ── Status Badge ── */}
          <div className="inline-flex items-center gap-2 mono-tag text-[11px] text-signal-cyan/90 border border-signal-cyan/20 bg-signal-cyan/[0.05] rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-cyan" />
            </span>
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>

          {/* ── Heading ── */}
          <h1 className="font-display font-extrabold text-[38px] leading-[1.1] sm:text-[52px] lg:text-[68px] text-balance tracking-tight">
            <span className="block">
              We build the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-amber">
                networks
              </span>
            </span>
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-amber">
              your systems run on.
            </span>
          </h1>

          {/* ── Paragraph ── */}
          <p className="mt-6 text-ink-300 text-[16px] leading-relaxed max-w-xl">
            Mac Energy is a hands-on networking team — we design, wire, and maintain
            everything from routers and switches to full computer labs, workstations, and
            the APIs that connect them. One team, every layer of your infrastructure.
          </p>

          {/* ── Feature Chips ── */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-2xl">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2.5 rounded-lg border border-line/70 bg-base-850/50 backdrop-blur-sm px-3.5 py-2.5 hover:border-signal-cyan/40 hover:bg-base-850 transition-all duration-300"
              >
                <f.icon size={15} className="text-signal-cyan shrink-0" />
                <span className="text-[12px] leading-tight text-ink-300">{f.label}</span>
              </div>
            ))}
          </div>

          {/* ── CTA Buttons ── */}
          <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 bg-signal-cyan text-base-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-signal-cyan/20 hover:shadow-signal-cyan/35 hover:brightness-110"
            >
              <span>Request a Site Visit</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href={PHONE_TEL}
              className="group inline-flex items-center justify-center gap-2.5 bg-signal-green/10 border border-signal-green/30 px-8 py-4 rounded-xl text-signal-green font-bold hover:bg-signal-green/15 hover:border-signal-green/50 transition-all duration-300"
            >
              <Phone size={17} />
              <span>Call Now</span>
              <span className="text-signal-green/60 font-mono text-[12px]">{PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* ── Trust Badges ── */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-5 text-[12px] text-ink-500">
            {trustBadges.map((b) => (
              <span key={b.text} className="flex items-center gap-1.5">
                <b.icon size={14} className={b.color} />
                {b.text}
              </span>
            ))}
          </div>

          {/* ── Stats ── */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl border-t border-line/30 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="group cursor-default">
                <div className="font-display font-bold text-2xl sm:text-[26px] text-signal-cyan group-hover:scale-105 transition-transform origin-left">
                  {s.value}
                </div>
                <div className="mono-tag text-[9px] text-ink-500/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <a
        href="#services"
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5 mono-tag text-[9px] text-ink-500/60 tracking-[0.2em] hover:text-signal-cyan transition-colors"
      >
        SCROLL
        <ChevronDown size={14} />
      </a>
    </section>
  );
}
