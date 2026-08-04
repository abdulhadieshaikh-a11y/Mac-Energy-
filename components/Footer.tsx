"use client";

import { useState } from "react";
import { Logo } from "./Navbar";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
} from "./Navbar";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  Check,
  ShieldCheck,
} from "lucide-react";

const serviceLinks = [
  { label: "Network Infrastructure", href: "#services" },
  { label: "Computer Lab Setup", href: "#services" },
  { label: "Hardware & Devices", href: "#services" },
  { label: "API & Integration", href: "#services" },
  { label: "Structured Cabling", href: "#services" },
  { label: "Network Security", href: "#services" },
];

const companyLinks = [
  { label: "About Jawed Shaikh", href: "#team" },
  { label: "Our Process", href: "#process" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Network Ops", href: "#lab" },
  { label: "Contact Us", href: "#contact" },
];

const supportLinks = [
  { label: "Request a Site Visit", href: "#contact" },
  { label: "Get a Quote", href: "#contact" },
  { label: "Emergency Support", href: PHONE_TEL },
  { label: "Service Coverage", href: "#contact" },
  { label: "Response Times", href: "#contact" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative border-t border-line bg-base-950 overflow-hidden">
      {/* subtle top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-signal-blue/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10">
        {/* ── Main grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 lg:gap-10">
          {/* Brand + subscribe */}
          <div>
            <Logo />
            <p className="text-ink-500 text-[13.5px] leading-relaxed mt-5 max-w-sm">
              A professional networking team that builds dependable cabling, secure Wi-Fi,
              and server infrastructure for offices, labs, and modern workspaces across Pakistan.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg border border-line bg-base-900 flex items-center justify-center text-ink-500 hover:text-signal-cyan hover:border-signal-cyan/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>

            {/* Subscribe */}
            <div className="mt-8 rounded-2xl border border-line bg-base-900/70 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="mono-tag text-[10px] text-signal-cyan tracking-widest">STAY UPDATED</span>
              </div>
              <p className="text-ink-500 text-[12.5px] leading-relaxed mb-4">
                Network tips, deployment notes, and maintenance alerts — straight to your inbox.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2.5 text-signal-green text-[13px] font-medium">
                  <span className="w-6 h-6 rounded-full bg-signal-green/15 border border-signal-green/40 flex items-center justify-center">
                    <Check size={13} />
                  </span>
                  You&apos;re subscribed. Welcome aboard!
                </div>
              ) : (
                <form
                  className="flex items-center gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) setSubscribed(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="flex-1 min-w-0 bg-base-850 border border-line rounded-lg px-3.5 py-2.5 text-[13px] outline-none focus:border-signal-cyan/60 transition-colors placeholder:text-ink-500"
                  />
                  <button
                    type="submit"
                    className="shrink-0 inline-flex items-center gap-1.5 bg-signal-cyan text-base-950 font-bold text-[12px] px-4 py-2.5 rounded-lg hover:brightness-110 transition-all duration-300"
                  >
                    Subscribe
                    <ArrowRight size={13} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mono-tag text-[10px] text-ink-500 mb-4">SERVICES</h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-ink-300 text-[13.5px] hover:text-signal-cyan transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mono-tag text-[10px] text-ink-500 mb-4">COMPANY</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-ink-300 text-[13.5px] hover:text-signal-cyan transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mono-tag text-[10px] text-ink-500 mb-4">SUPPORT</h4>
            <ul className="space-y-3">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-ink-300 text-[13.5px] hover:text-signal-cyan transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="mt-6 space-y-3 border-t border-line/40 pt-5">
              <a href={PHONE_TEL} className="flex items-center gap-2.5 text-[13px] text-ink-300 hover:text-signal-cyan transition-colors">
                <Phone size={14} className="text-signal-green shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <a href="mailto:info@macenergy.pk" className="flex items-center gap-2.5 text-[13px] text-ink-300 hover:text-signal-cyan transition-colors">
                <Mail size={14} className="text-signal-blue shrink-0" />
                info@macenergy.pk
              </a>
              <div className="flex items-center gap-2.5 text-[13px] text-ink-500">
                <MapPin size={14} className="text-signal-cyan shrink-0" />
                On-site &amp; remote — Pakistan
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-ink-500">
                <Clock size={14} className="text-signal-amber shrink-0" />
                Mon–Sat, 9AM – 8PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-500 text-[12px] mono-tag">
            &copy; {new Date().getFullYear()} MAC ENERGY. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[12px] text-ink-500 mono-tag">
              <ShieldCheck size={12} className="text-signal-green" />
              STATUS: ALL SYSTEMS ONLINE
            </span>
            <a href="#top" className="text-[12px] text-ink-500 mono-tag hover:text-signal-cyan transition-colors">
              PRIVACY
            </a>
            <a href="#top" className="text-[12px] text-ink-500 mono-tag hover:text-signal-cyan transition-colors">
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
