"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight, ChevronRight, Zap } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#lab", label: "Network Ops" },
  { href: "#process", label: "Process" },
  { href: "#team", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const PHONE_DISPLAY = "0332-101955";
export const PHONE_TEL = "tel:0332101955";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-3 group ${className}`}>
      {/* Professional hexagonal logo */}
      <div className="relative shrink-0">
        <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0">
          {/* Hexagon background */}
          <path
            d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z"
            fill="url(#logoGrad)"
            stroke="#3ED8E0"
            strokeWidth="1.5"
          />
          {/* Network nodes inside */}
          <circle cx="20" cy="14" r="2.5" fill="#3ED8E0" />
          <circle cx="13" cy="24" r="2" fill="#4C8DFF" />
          <circle cx="27" cy="24" r="2" fill="#4C8DFF" />
          {/* Connection lines */}
          <line x1="20" y1="16.5" x2="13" y2="22" stroke="#3ED8E0" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="16.5" x2="27" y2="22" stroke="#3ED8E0" strokeWidth="1" opacity="0.5" />
          <line x1="13" y1="24" x2="27" y2="24" stroke="#4C8DFF" strokeWidth="1" opacity="0.3" />
          {/* Pulse dot */}
          <circle cx="20" cy="14" r="1" fill="#3ED8E0" className="animate-pulseDot" />
          {/* Gradient def */}
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3ED8E0" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#4C8DFF" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute -inset-1.5 rounded-xl bg-signal-cyan/[0.08] blur-md group-hover:bg-signal-cyan/[0.12] transition-colors duration-500" />
      </div>
      <span className="flex flex-col leading-none">
        <span className="font-display font-extrabold tracking-tight text-[19px] text-ink-100">
          MAC <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan to-signal-blue">ENERGY</span>
        </span>
        <span className="mono-tag text-[8px] text-ink-500 mt-0.5 tracking-[0.15em]">NETWORK &amp; SYSTEMS</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base-950/92 backdrop-blur-2xl border-b border-line/30 shadow-xl shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 font-body text-[13px] font-medium text-ink-400 hover:text-ink-100 transition-all duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2.5 font-body text-[13px] font-medium text-ink-300 hover:text-signal-green transition-all px-4 py-2.5 rounded-xl hover:bg-signal-green/[0.06] border border-transparent hover:border-signal-green/20"
          >
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulseDot" />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="group font-body text-[12px] font-bold px-6 py-2.5 rounded-xl bg-gradient-to-r from-signal-cyan to-signal-blue text-base-950 hover:shadow-lg hover:shadow-signal-cyan/20 transition-all duration-300 flex items-center gap-2 hover:gap-3"
          >
            GET A QUOTE
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-ink-100 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors border border-line/30"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-[550px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-base-950/95 backdrop-blur-2xl border-t border-line/30 px-5 py-6 flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between font-body text-[14px] font-medium text-ink-300 hover:text-signal-cyan py-3.5 px-4 rounded-xl hover:bg-white/[0.04] transition-all"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {l.label}
              <ChevronRight size={14} className="text-ink-500" />
            </a>
          ))}
          <div className="border-t border-line/30 mt-3 pt-4 flex flex-col gap-3">
            <a href={PHONE_TEL} className="flex items-center gap-3 text-[14px] font-medium text-signal-green px-4 py-3 rounded-xl bg-signal-green/[0.06] border border-signal-green/20">
              <span className="w-2 h-2 rounded-full bg-signal-green animate-pulseDot" />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-body text-[13px] font-bold text-center px-4 py-3.5 rounded-xl bg-gradient-to-r from-signal-cyan to-signal-blue text-base-950 flex items-center justify-center gap-2"
            >
              GET A QUOTE
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
