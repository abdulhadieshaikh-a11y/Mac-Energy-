"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#lab", label: "Network Ops" },
  { href: "#process", label: "Process" },
  { href: "#team", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const PHONE_DISPLAY = "03332101955";
export const PHONE_TEL = "tel:03332101955";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative shrink-0">
        <svg width="44" height="44" viewBox="0 0 44 44" className="shrink-0">
          <rect x="2" y="2" width="40" height="40" rx="12" fill="rgba(34,211,238,0.1)" />
          <path d="M13 33V15h5l5 9 5-9h5v18" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 23h18" stroke="#3d7eff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="22" cy="14" r="2.5" fill="#93c5fd" />
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3d7eff" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-signal-cyan/10 via-transparent to-signal-blue/5 blur-xl opacity-80" />
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
  const [active, setActive] = useState("#top");
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // track active section on scroll
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // calculate underline position
  const getUnderlineStyle = () => {
    if (hoverIdx !== null) {
      const el = linkRefs.current[hoverIdx];
      if (el) {
        return { left: el.offsetLeft, width: el.offsetWidth, opacity: 1 };
      }
    }
    const idx = links.findIndex((l) => l.href === active);
    if (idx >= 0) {
      const el = linkRefs.current[idx];
      if (el) {
        return { left: el.offsetLeft, width: el.offsetWidth, opacity: 1 };
      }
    }
    return { left: 0, width: 0, opacity: 0 };
  };

  const underlineStyle = getUnderlineStyle();

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
        <nav ref={navRef} className="hidden lg:flex items-center gap-0.5 relative">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              ref={(el) => { linkRefs.current[i] = el; }}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              className={`relative px-4 py-2 font-body text-[13px] font-medium transition-all duration-200 rounded-lg ${
                active === l.href
                  ? "text-ink-100"
                  : "text-ink-400 hover:text-ink-100 hover:bg-white/[0.05]"
              }`}
            >
              {l.label}
            </a>
          ))}
          {/* animated underline */}
          <motion.div
            className="absolute bottom-0 h-[2px] rounded-full bg-signal-cyan"
            animate={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              opacity: underlineStyle.opacity,
            }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
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
              className={`flex items-center justify-between font-body text-[14px] font-medium py-3.5 px-4 rounded-xl transition-all ${
                active === l.href
                  ? "text-signal-cyan bg-signal-cyan/[0.06] border-l-2 border-signal-cyan"
                  : "text-ink-300 hover:text-signal-cyan hover:bg-white/[0.04]"
              }`}
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
