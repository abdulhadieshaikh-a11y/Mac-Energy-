"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight, ChevronRight } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#lab", label: "Computer Lab" },
  { href: "#process", label: "Process" },
  { href: "#team", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const PHONE_DISPLAY = "0332-101955";
export const PHONE_TEL = "tel:0332101955";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative">
        <svg width="36" height="36" viewBox="0 0 30 30" className="shrink-0">
          <circle cx="15" cy="6" r="3.4" stroke="#3ED8E0" strokeWidth="1.8" fill="#0B0F16" />
          <circle cx="6" cy="24" r="3.4" stroke="#4C8DFF" strokeWidth="1.8" fill="#0B0F16" />
          <circle cx="24" cy="24" r="3.4" stroke="#4C8DFF" strokeWidth="1.8" fill="#0B0F16" />
          <path d="M15 9.4 L6 20.6 M15 9.4 L24 20.6 M8.8 24 H21.2" stroke="#22303C" strokeWidth="1.4" />
          <circle cx="15" cy="6" r="1.4" fill="#3ED8E0" className="animate-pulseDot" />
        </svg>
        <div className="absolute -inset-1 rounded-full bg-signal-cyan/10 blur-sm group-hover:bg-signal-cyan/15 transition-colors" />
      </div>
      <span className="flex flex-col leading-none">
        <span className="font-display font-extrabold tracking-tight text-[18px] text-ink-100">
          MAC <span className="text-signal-cyan">ENERGY</span>
        </span>
        <span className="mono-tag text-[8.5px] text-ink-500 mt-0.5 tracking-[0.12em]">NETWORK &amp; SYSTEMS TEAM</span>
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
          ? "bg-base-950/90 backdrop-blur-xl border-b border-line/40 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 mono-tag text-[12px] text-ink-400 hover:text-ink-100 transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 mono-tag text-[12px] text-ink-300 hover:text-signal-cyan transition-colors px-3 py-2 rounded-lg hover:bg-white/[0.04]"
          >
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulseDot" />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#contact"
            className="group mono-tag text-[11px] px-5 py-2.5 rounded-lg bg-signal-cyan text-base-950 font-bold hover:bg-signal-cyan/85 transition-all duration-300 flex items-center gap-1.5 hover:gap-2.5 hover:shadow-lg hover:shadow-signal-cyan/15"
          >
            GET A QUOTE
            <ArrowRight size={13} className="transition-transform" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-ink-100 p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-base-950/95 backdrop-blur-xl border-t border-line/40 px-5 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between mono-tag text-sm text-ink-300 hover:text-signal-cyan py-3 px-3 rounded-lg hover:bg-white/[0.04] transition-all"
            >
              {l.label}
              <ChevronRight size={14} className="text-ink-500" />
            </a>
          ))}
          <div className="border-t border-line/40 mt-3 pt-4 flex flex-col gap-3">
            <a href={PHONE_TEL} className="flex items-center gap-3 text-sm text-signal-green px-3 py-2">
              <span className="w-2 h-2 rounded-full bg-signal-green animate-pulseDot" />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mono-tag text-sm text-center px-4 py-3 rounded-lg bg-signal-cyan text-base-950 font-bold flex items-center justify-center gap-2"
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
