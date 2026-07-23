"use client";

import { motion } from "framer-motion";
import { MonitorIcon } from "./HardwareIcons";
import { Check } from "lucide-react";

const rows = 4;
const cols = 6;

const features = [
  "Rows of networked workstations wired for zero packet loss",
  "Shared storage and print servers accessible to every seat",
  "Centralized login and access control for students or staff",
  "Live monitoring so a dead port gets fixed before it's noticed",
];

export default function Lab() {
  return (
    <section id="lab" className="relative py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="mono-tag text-[11px] text-signal-cyan">/ COMPUTER LAB</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-3 text-balance tracking-tight">
            Labs built to stay online through a full day of use
          </h2>
          <p className="text-ink-300 mt-5 leading-relaxed max-w-lg">
            We plan the layout, run the cabling, mount the switches, and set up every
            machine so a room full of computers behaves like one reliable system —
            not forty separate problems.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-signal-cyan/10 border border-signal-cyan/30 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-signal-cyan" />
                </span>
                <p className="text-ink-300 text-[14px] leading-relaxed">{f}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-line pt-6">
            <div>
              <div className="font-display font-extrabold text-2xl">24</div>
              <div className="mono-tag text-[9px] text-ink-500 mt-1">SEATS / LAB</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-2xl">1Gbps</div>
              <div className="mono-tag text-[9px] text-ink-500 mt-1">PER-SEAT LINK</div>
            </div>
            <div>
              <div className="font-display font-extrabold text-2xl">24/7</div>
              <div className="mono-tag text-[9px] text-ink-500 mt-1">MONITORING</div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-line relative"
          >
            <img
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80"
              alt="Computer Lab Setup"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/20 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-line bg-base-850/60 p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="mono-tag text-[10px] text-ink-500">LAB-A // LAYOUT</span>
              <span className="mono-tag text-[10px] text-signal-green flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
                24/24 ONLINE
              </span>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {Array.from({ length: rows * cols }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md border border-line bg-base-900 flex items-center justify-center relative hover:border-signal-cyan/40 transition-colors"
                >
                  <MonitorIcon className="w-5 h-5 text-signal-blue" />
                  <span
                    className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-signal-green"
                    style={{ animationDelay: `${(i % 7) * 0.2}s` }}
                  />
                </div>
              ))}
            </div>
            <p className="mono-tag text-[9.5px] text-ink-500 mt-5 text-center">
              SWITCH: 48-PORT // UPLINK: 1Gbps // VLAN 20
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
