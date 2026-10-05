"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#lab", label: "Network Ops" },
  { href: "#process", label: "Process" },
  { href: "#team", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const PHONE_DISPLAY = "+92 333 2101955";
export const PHONE_TEL = "tel:+923332101955";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/images/logo.png"
        alt="MacEnergy"
        className="h-14 w-auto bg-transparent"
      />
          <span className="text-2xl font-bold tracking-wide whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-amber">
        Mac Energy
      </span>
    </div>
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base-950/92 backdrop-blur-2xl border-b border-line/30 shadow-xl shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-5 md:px-8 h-16 lg:h-[76px] flex items-center justify-between gap-3 w-full min-w-0">
        <Logo className="scale-[0.72] origin-left sm:scale-[0.82] lg:scale-100 shrink-0" />

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
              <span classname="font-bold tracking-wide text-[20px]"><span classname="font-bold tracking-wide text-[20px]">{l.label}</span></span>
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
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="lg:hidden relative z-[70] text-ink-100 p-2 rounded-lg hover:bg-white/[0.06] transition-colors border border-line/30 shrink-0"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu box — height capped to viewport so it fits small phones */}
      <div
        id="mobile-navigation"
        className="lg:hidden fixed inset-x-0 top-16 z-[60] overflow-y-auto bg-base-950/98 backdrop-blur-2xl border-t border-line/30 shadow-2xl shadow-black/50 w-full"
        style={{
          display: open ? "block" : "none",
          maxHeight: "calc(100dvh - 64px)",
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-0.5 w-full max-w-full box-border">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between font-body text-[14px] font-medium py-3 px-4 rounded-xl transition-all ${
                active === l.href
                  ? "text-signal-cyan bg-signal-cyan/[0.06] border-l-2 border-signal-cyan"
                  : "text-ink-300 hover:text-signal-cyan hover:bg-white/[0.04]"
              }`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span classname="font-bold tracking-wide text-[20px]">{l.label}</span>
              <ChevronRight size={14} className="text-ink-500 shrink-0" />
            </a>
          ))}
          <div className="border-t border-line/30 mt-2 pt-3 flex flex-col gap-2.5">
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
