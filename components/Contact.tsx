"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Clock, MessageSquare, Zap, Headphones, ChevronRight } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "./Navbar";

const quickServices = [
  "Network Infrastructure Design",
  "Computer Lab Setup",
  "Server Room Build-Out",
  "Structured Cabling & Patch Panels",
  "Wi-Fi Deployment & Coverage",
  "Hardware Procurement & Imaging",
  "API & Systems Integration",
  "24/7 Monitoring & Support",
];

const responseStats = [
  {
    icon: Clock,
    value: "< 1hr",
    label: "Response Time",
    color: "text-signal-cyan",
    border: "border-signal-cyan/30",
    bg: "bg-signal-cyan/10",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support Available",
    color: "text-signal-green",
    border: "border-signal-green/30",
    bg: "bg-signal-green/10",
  },
  {
    icon: Zap,
    value: "Same Day",
    label: "Emergency Response",
    color: "text-signal-amber",
    border: "border-signal-amber/30",
    bg: "bg-signal-amber/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-[1] bg-base-900/92 backdrop-blur-[2px]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-base-900 via-base-900/80 to-base-900" />
      <div className="absolute inset-0 z-[1] bg-dot-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-8">
        {/* Top response stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line/50 rounded-2xl border border-line/60 bg-base-900/60 backdrop-blur-md shadow-xl shadow-black/20 overflow-hidden">
            {responseStats.map((s) => (
              <div
                key={s.label}
                className="group flex items-center gap-4 px-6 py-5 hover:bg-base-850/50 transition-colors duration-300"
              >
                <span
                  className={`w-11 h-11 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon size={19} className={s.color} />
                </span>
                <div className="min-w-0">
                  <div className={`font-display font-extrabold text-xl ${s.color}`}>{s.value}</div>
                  <div className="mono-tag text-[9px] text-ink-500 mt-0.5 tracking-wider">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="mono-tag text-[11px] text-signal-cyan">/ GET IN TOUCH</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl mt-4 text-balance leading-tight tracking-tight">
            Let&apos;s get your network
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan to-signal-blue">
              talking.
            </span>
          </h2>
          <p className="text-ink-300 mt-6 text-[17px] leading-relaxed max-w-xl mx-auto">
            Whether you need a complete computer lab build, network infrastructure overhaul,
            or just a quick diagnostic — we&apos;re here to help. Reach out and we&apos;ll
            get back to you within one business day.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Left: Contact Info + Services */}
          <div className="space-y-10">
            {/* Quick Call CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border-2 border-signal-green/30 bg-signal-green/5 p-6 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-12 rounded-xl bg-signal-green/20 border border-signal-green/40 flex items-center justify-center">
                  <Phone size={22} className="text-signal-green" />
                </span>
                <div>
                  <div className="mono-tag text-[10px] text-signal-green/70">FASTEST WAY TO REACH US</div>
                  <div className="font-display font-bold text-2xl text-signal-green">Call Now</div>
                </div>
              </div>
              <a
                href={PHONE_TEL}
                className="block w-full text-center bg-signal-green text-base-950 font-bold text-lg px-6 py-4 rounded-xl hover:bg-signal-green/85 transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-signal-green/20"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-ink-500 text-[13px] mt-3 text-center">
                Available Mon–Sat, 9AM – 8PM | WhatsApp also available
              </p>
            </motion.div>

            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <a href={PHONE_TEL} className="flex items-center gap-4 group rounded-xl border border-line bg-base-850/50 p-5 hover:border-signal-cyan/40 transition-all duration-300">
                <span className="w-12 h-12 rounded-xl bg-signal-cyan/10 border border-signal-cyan/30 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-signal-cyan" />
                </span>
                <div className="flex-1">
                  <div className="mono-tag text-[9.5px] text-ink-500">CALL / WHATSAPP</div>
                  <div className="text-[16px] group-hover:text-signal-cyan transition-colors">{PHONE_DISPLAY}</div>
                </div>
                <ChevronRight size={16} className="text-ink-500 group-hover:text-signal-cyan transition-colors" />
              </a>

              <a href="mailto:info@macenergy.pk" className="flex items-center gap-4 group rounded-xl border border-line bg-base-850/50 p-5 hover:border-signal-blue/40 transition-all duration-300">
                <span className="w-12 h-12 rounded-xl bg-signal-blue/10 border border-signal-blue/30 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-signal-blue" />
                </span>
                <div className="flex-1">
                  <div className="mono-tag text-[9.5px] text-ink-500">EMAIL</div>
                  <div className="text-[16px] group-hover:text-signal-cyan transition-colors">info@macenergy.pk</div>
                </div>
                <ChevronRight size={16} className="text-ink-500 group-hover:text-signal-cyan transition-colors" />
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-line bg-base-850/50 p-5">
                <span className="w-12 h-12 rounded-xl bg-base-900 border border-line flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-ink-500" />
                </span>
                <div>
                  <div className="mono-tag text-[9.5px] text-ink-500">SERVICE AREA</div>
                  <div className="text-[16px]">On-site & remote support across Pakistan</div>
                </div>
              </div>
            </motion.div>

            {/* Services list */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-line bg-base-850/50 p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare size={16} className="text-signal-cyan" />
                <span className="mono-tag text-[11px] text-signal-cyan">WHAT WE CAN HELP WITH</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {quickServices.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-ink-300 text-[13px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan/60 shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-line bg-base-900/80 backdrop-blur-md p-7 sm:p-8 space-y-5"
          >
            <div className="mb-2">
              <h3 className="font-display font-bold text-xl">Send Us a Message</h3>
              <p className="text-ink-500 text-[13px] mt-1">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="mono-tag text-[10px] text-ink-500 block mb-2">NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-base-850 border border-line rounded-md px-4 py-3 text-[14px] outline-none focus:border-signal-cyan/60 transition-colors placeholder:text-ink-500"
                />
              </div>
              <div>
                <label className="mono-tag text-[10px] text-ink-500 block mb-2">PHONE</label>
                <input
                  type="tel"
                  placeholder="03XX-XXXXXXX"
                  className="w-full bg-base-850 border border-line rounded-md px-4 py-3 text-[14px] outline-none focus:border-signal-cyan/60 transition-colors placeholder:text-ink-500"
                />
              </div>
            </div>

            <div>
              <label className="mono-tag text-[10px] text-ink-500 block mb-2">EMAIL (OPTIONAL)</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-base-850 border border-line rounded-md px-4 py-3 text-[14px] outline-none focus:border-signal-cyan/60 transition-colors placeholder:text-ink-500"
              />
            </div>

            <div>
              <label className="mono-tag text-[10px] text-ink-500 block mb-2">WHAT DO YOU NEED?</label>
              <select className="w-full bg-base-850 border border-line rounded-md px-4 py-3 text-[14px] outline-none focus:border-signal-cyan/60 transition-colors text-ink-300">
                <option>Network Infrastructure</option>
                <option>Computer Lab Setup</option>
                <option>Server Room Build-Out</option>
                <option>Hardware &amp; Device Management</option>
                <option>API &amp; Systems Integration</option>
                <option>Wi-Fi Deployment</option>
                <option>Network Security Audit</option>
                <option>Emergency / Troubleshooting</option>
                <option>Something else</option>
              </select>
            </div>

            <div>
              <label className="mono-tag text-[10px] text-ink-500 block mb-2">MESSAGE</label>
              <textarea
                rows={4}
                placeholder="Tell us about your site, number of machines, current setup, or any issues you're facing..."
                className="w-full bg-base-850 border border-line rounded-md px-4 py-3 text-[14px] outline-none focus:border-signal-cyan/60 transition-colors resize-none placeholder:text-ink-500"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-signal-cyan text-base-950 font-semibold px-6 py-4 rounded-md hover:bg-signal-cyan/85 transition-all duration-300 hover:shadow-lg hover:shadow-signal-cyan/20"
            >
              Send Request
              <ArrowRight size={16} />
            </button>

            <p className="text-ink-500 text-[11px] text-center">
              We typically respond within 1 business day. For urgent issues, call us directly.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
