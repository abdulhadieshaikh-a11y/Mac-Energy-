"use client";

import { motion } from "framer-motion";
import { MonitorIcon } from "./HardwareIcons";
import { Check, Server, Wifi, Shield, Activity } from "lucide-react";

const rows = 4;
const cols = 6;

const capabilities = [
  { icon: Server, label: "Server Room Design", desc: "Complete rack layout, cooling, power redundancy, and cable management for enterprise-grade uptime" },
  { icon: Wifi, label: "Full Wireless Coverage", desc: "Site-surveyed AP placement ensuring zero dead zones across classrooms, offices, and labs" },
  { icon: Shield, label: "Access Control", desc: "Centralized login, VLAN segmentation, and user policies that keep the network secure" },
  { icon: Activity, label: "Live Monitoring", desc: "Real-time dashboards tracking every port, switch, and endpoint — issues fixed before users notice" },
];

export default function Lab() {
  return (
    <section id="lab" className="relative py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-8">
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="mono-tag text-[11px] text-signal-cyan">/ SERVER ROOM & NETWORK OPS</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-3 text-balance tracking-tight">
          Infrastructure that never sleeps
        </h2>
        <p className="text-ink-300 mt-5 text-[17px] leading-relaxed">
          From server rooms to computer labs, we build complete network environments —
          wiring, monitoring, security, and support. Every cable tested, every port labeled,
          every device tracked.
        </p>
      </div>

      {/* Main content: two-column with image grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Server room image grid */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-line relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
              alt="Server Room with rack-mounted networking equipment"
              className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="mono-tag text-[10px] text-signal-green flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
                LIVE MONITORING
              </div>
              <div className="text-[13px] text-ink-300">Server racks with redundant power and cooling systems</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl overflow-hidden border border-line relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80"
                alt="Network switch and router hardware"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <div className="text-[11px] text-ink-300">Router & Switch Deployments</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-xl overflow-hidden border border-line relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                alt="Structured cabling and patch panels"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <div className="text-[11px] text-ink-300">Structured Cabling & Patch Panels</div>
              </div>
            </motion.div>
          </div>

          {/* Lab Grid Monitor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-line bg-base-850/60 p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="mono-tag text-[10px] text-ink-500">LAB-A // LAYOUT</span>
              <span className="mono-tag text-[10px] text-signal-green flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-green" />
                24/24 ONLINE
              </span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: rows * cols }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md border border-line bg-base-900 flex items-center justify-center relative hover:border-signal-cyan/40 transition-colors"
                >
                  <MonitorIcon className="w-4 h-4 text-signal-blue" />
                  <span
                    className="absolute bottom-0.5 right-0.5 w-1 h-1 rounded-full bg-signal-green"
                    style={{ animationDelay: `${(i % 7) * 0.2}s` }}
                  />
                </div>
              ))}
            </div>
            <p className="mono-tag text-[9px] text-ink-500 mt-3 text-center">
              SWITCH: 48-PORT // UPLINK: 1Gbps // VLAN 20
            </p>
          </motion.div>
        </div>

        {/* Right: Capabilities */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl border border-line bg-base-850/40 p-4 text-center">
              <div className="font-display font-extrabold text-3xl text-signal-cyan">24</div>
              <div className="mono-tag text-[9px] text-ink-500 mt-1">SEATS / LAB</div>
            </div>
            <div className="rounded-xl border border-line bg-base-850/40 p-4 text-center">
              <div className="font-display font-extrabold text-3xl text-signal-blue">1Gbps</div>
              <div className="mono-tag text-[9px] text-ink-500 mt-1">PER-SEAT LINK</div>
            </div>
            <div className="rounded-xl border border-line bg-base-850/40 p-4 text-center">
              <div className="font-display font-extrabold text-3xl text-signal-green">24/7</div>
              <div className="mono-tag text-[9px] text-ink-500 mt-1">MONITORING</div>
            </div>
            <div className="rounded-xl border border-line bg-base-850/40 p-4 text-center">
              <div className="font-display font-extrabold text-3xl text-signal-amber">99.9%</div>
              <div className="mono-tag text-[9px] text-ink-500 mt-1">UPTIME</div>
            </div>
          </div>

          {capabilities.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-5 rounded-xl border border-line bg-base-850/30 hover:border-signal-cyan/30 transition-all duration-300 group"
            >
              <span className="w-11 h-11 rounded-lg bg-signal-cyan/10 border border-signal-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-signal-cyan/15 transition-colors">
                <c.icon size={20} className="text-signal-cyan" />
              </span>
              <div>
                <h3 className="font-display font-bold text-[15px]">{c.label}</h3>
                <p className="text-ink-500 text-[13px] leading-relaxed mt-1">{c.desc}</p>
              </div>
            </motion.div>
          ))}

          <div className="rounded-xl border border-signal-green/20 bg-signal-green/5 p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-signal-green/20 flex items-center justify-center shrink-0">
              <Check size={18} className="text-signal-green" />
            </div>
            <div>
              <div className="font-display font-bold text-[14px]">Every setup includes</div>
              <div className="text-ink-500 text-[12px] mt-0.5">Full site assessment, topology design, installation, labeling, documentation, and 30-day support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
