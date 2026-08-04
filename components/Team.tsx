"use client";

import { motion } from "framer-motion";
import { Award, Wrench, Network, Server, Shield, Phone, Mail, MapPin } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "./Navbar";

const expertise = [
  { icon: Network, label: "Network Architecture", desc: "Enterprise-grade router, switch & gateway deployments" },
  { icon: Server, label: "Server Infrastructure", desc: "Rack builds, server provisioning & hardware lifecycle" },
  { icon: Wrench, label: "Computer Lab Setup", desc: "Complete lab wiring, workstation imaging & maintenance" },
  { icon: Shield, label: "Network Security", desc: "Firewalls, VLAN segmentation & access control systems" },
];

const stats = [
  { value: "10+", label: "YEARS EXPERIENCE" },
  { value: "500+", label: "DEVICES DEPLOYED" },
  { value: "99.9%", label: "UPTIME DELIVERED" },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl border border-line bg-base-850/60 backdrop-blur-sm overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-cyan" />

            <div className="p-8">
              {/* Avatar + name */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-signal-cyan/20 to-signal-blue/20 border border-signal-cyan/30 flex items-center justify-center">
                  <span className="font-display font-bold text-signal-cyan text-2xl">JS</span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-ink-100 tracking-tight">Jawed Shaikh</h3>
                  <p className="mono-tag text-[11px] text-signal-cyan mt-1">FOUNDER & LEAD ENGINEER</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-ink-300 text-[15px] leading-relaxed mb-6">
                The founder and lead engineer behind Mac Energy. With over a decade of
                hands-on experience in network infrastructure, Jawed leads every project
                from initial site assessment through final deployment — ensuring every
                cable, switch, and API is built to stay online.
              </p>
              <p className="text-ink-300 text-[15px] leading-relaxed mb-6">
                From small office setups to large-scale computer labs with hundreds of
                workstations, Jawed and the Mac Energy team deliver infrastructure that
                businesses depend on daily.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 border-t border-line pt-6 mb-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-2xl text-signal-cyan">{s.value}</div>
                    <div className="mono-tag text-[9px] text-ink-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <a href={PHONE_TEL} className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-lg bg-signal-cyan/10 border border-signal-cyan/30 flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-signal-cyan" />
                  </span>
                  <span className="text-[14px] group-hover:text-signal-cyan transition-colors">{PHONE_DISPLAY}</span>
                </a>
                <a href="mailto:info@macenergy.pk" className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-lg bg-signal-blue/10 border border-signal-blue/30 flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-signal-blue" />
                  </span>
                  <span className="text-[14px] group-hover:text-signal-cyan transition-colors">info@macenergy.pk</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-base-900 border border-line flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-ink-500" />
                  </span>
                  <span className="text-[14px] text-ink-300">On-site & remote support across Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expertise Grid */}
        <div>
          <span className="mono-tag text-[11px] text-signal-cyan">/ THE ENGINEER</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-3 text-balance tracking-tight">
            Every layer of the network, handled by one expert
          </h2>
          <p className="text-ink-300 mt-4 leading-relaxed max-w-lg">
            Jawed Shaikh leads Mac Energy with deep expertise across the full infrastructure stack —
            from physical cabling and structured Wi-Fi to secure server rooms and API-powered integrations.
          </p>
          <p className="text-ink-300 mt-4 leading-relaxed max-w-lg">
            With a career built on working inside offices, labs, schools, and small data centers, Jawed brings practical experience tuning real networks for performance, reliability, and future growth.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {expertise.map((e, i) => (
              <motion.div
                key={e.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-xl border border-line bg-base-850/50 p-6 hover:border-signal-cyan/40 transition-all duration-300 hover:bg-base-850"
              >
                <e.icon className="w-10 h-10 text-signal-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display font-semibold text-[15px]">{e.label}</h3>
                <p className="text-ink-500 text-[13px] leading-relaxed mt-2">{e.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 grid sm:grid-cols-3 gap-4"
          >
            {[
              { icon: Award, title: "Trusted Performance", desc: "Reliable infrastructure built to reduce downtime and support growth." },
              { icon: Network, title: "Hands-on Delivery", desc: "From rack to desk, every connection is tested and documented." },
              { icon: Shield, title: "Secure by design", desc: "VLANs, firewalls, and access controls designed for safe everyday use." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-base-850/50 p-5 hover:border-signal-cyan/40 transition-all duration-300">
                <item.icon className="w-10 h-10 text-signal-cyan mb-4" />
                <h3 className="font-display font-semibold text-base text-ink-100">{item.title}</h3>
                <p className="text-ink-500 text-[14px] mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
