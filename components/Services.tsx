"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  RouterIcon,
  SwitchIcon,
  MonitorIcon,
  ServerRackIcon,
  CableIcon,
  WifiIcon,
  ShieldIcon,
  ApiIcon,
} from "./HardwareIcons";

const services = [
  {
    icon: RouterIcon,
    tag: "01",
    title: "Network Infrastructure",
    desc: "Design and deployment of routers, switches, and gateways that keep traffic moving without bottlenecks.",
    highlights: ["Router & gateway setup", "VLAN configuration", "Failover redundancy"],
    image: "/images/network-infra.jpg",
  },
  {
    icon: MonitorIcon,
    tag: "02",
    title: "Computer Lab Setup",
    desc: "Full lab builds — workstations, monitors, shared storage, and classroom-ready network access.",
    highlights: ["24+ seat labs", "Dual-monitor setups", "Centralized imaging"],
    image: "/images/computer-lab-setup.jpg",
  },
  {
    icon: ServerRackIcon,
    tag: "03",
    title: "Hardware & Devices",
    desc: "Procurement, imaging, and lifecycle support for laptops, desktops, monitors, and peripherals.",
    highlights: ["Bulk procurement", "OS imaging & MDM", "Lifecycle tracking"],
    image: "/images/hardware-devices.jpg",
  },
  {
    icon: ApiIcon,
    tag: "04",
    title: "API & Integration",
    desc: "Connecting internal tools and services through clean, documented, well-monitored APIs.",
    highlights: ["REST & webhook APIs", "Tool interconnection", "Health monitoring"],
    image: "/images/api-integration.jpg",
  },
  {
    icon: CableIcon,
    tag: "05",
    title: "Structured Cabling",
    desc: "Cat6/Cat6a runs, patch panels, and cable management done to a standard that survives audits.",
    highlights: ["Cat6A certified runs", "Patch panel labeling", "Audit-ready docs"],
    image: "/images/structured-cabling.jpg",
  },
  {
    icon: WifiIcon,
    tag: "06",
    title: "Wireless Deployment",
    desc: "Site-surveyed Wi-Fi coverage with access point placement tuned for real-world density.",
    highlights: ["Heat map surveys", "AP density planning", "Zero dead zones"],
    image: "/images/wireless-deployment.jpg",
  },
  {
    icon: ShieldIcon,
    tag: "07",
    title: "Network Security",
    desc: "Firewalls, VLAN segmentation, and access control that keep unwanted traffic out.",
    highlights: ["Firewall rulesets", "VLAN isolation", "Access policies"],
    image: "/images/network-security.jpg",
  },
  {
    icon: SwitchIcon,
    tag: "08",
    title: "Monitoring & Support",
    desc: "24/7 uptime monitoring with a support line that actually picks up when something breaks.",
    highlights: ["Real-time dashboards", "Alert escalation", "24/7 hotline"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative pt-10 pb-24 md:pt-14 md:pb-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* ── heading area ── */}
        <div className="relative mb-16 md:mb-20">
          {/* decorative background number */}
          <div className="absolute -top-6 -left-4 md:-left-8 font-display font-extrabold text-[120px] md:text-[180px] leading-none text-signal-cyan/[0.04] select-none pointer-events-none">
            08
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              {/* tag with animated dot */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mono-tag text-[11px] text-signal-cyan mb-4"
              >
                <span className="w-6 h-px bg-signal-cyan" />
                WHAT WE DO
                <span className="w-6 h-px bg-signal-cyan" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-balance tracking-tight leading-[1.1]"
              >
                Every layer of the network,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-signal-cyan via-signal-blue to-signal-cyan bg-[length:200%_auto] animate-shimmer">
                  handled by one team
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-ink-300 mt-4 leading-relaxed text-[15px]"
              >
                From the wire in the wall to the API in the cloud — we plan, install, and
                maintain the systems that keep computers, labs, and applications talking to
                each other.
              </motion.p>
            </div>

            {/* stat pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 rounded-xl border border-line bg-base-900/60 backdrop-blur-sm px-5 py-3 shrink-0"
            >
              <div>
                <div className="font-display font-extrabold text-2xl text-signal-cyan">8</div>
                <div className="mono-tag text-[8px] text-ink-500">SERVICES</div>
              </div>
              <div className="w-px h-8 bg-line" />
              <div>
                <div className="font-display font-extrabold text-2xl text-signal-green">360°</div>
                <div className="mono-tag text-[8px] text-ink-500">COVERAGE</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── service cards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative rounded-xl border border-line bg-base-900 overflow-hidden hover:border-signal-cyan/40 transition-all duration-500 hover:shadow-xl hover:shadow-signal-cyan/[0.06] hover:-translate-y-1"
            >
              {/* image */}
              <div className="relative h-44 overflow-hidden bg-base-850">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-base-900/10 via-base-900/40 to-base-900" />

                {/* number badge */}
                <div className="absolute top-3 right-3">
                  <span className="mono-tag text-[10px] text-ink-400 bg-base-950/70 backdrop-blur-sm border border-line/50 px-2.5 py-1 rounded-md">
                    {s.tag}
                  </span>
                </div>

                {/* icon badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="w-9 h-9 rounded-lg bg-signal-cyan/10 border border-signal-cyan/30 flex items-center justify-center backdrop-blur-sm">
                    <s.icon className="w-5 h-5 text-signal-cyan" />
                  </span>
                </div>

                {/* hover arrow */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-7 h-7 rounded-full bg-signal-cyan/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowUpRight size={14} className="text-signal-cyan" />
                  </span>
                </div>
              </div>

              {/* content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-[15px] mb-2 group-hover:text-signal-cyan transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-ink-500 text-[12.5px] leading-relaxed mb-3">{s.desc}</p>

                {/* highlights */}
                <div className="space-y-1.5">
                  {s.highlights.map((h, hi) => (
                    <div key={hi} className="flex items-center gap-2 text-[11.5px] text-ink-400">
                      <span className="w-1 h-1 rounded-full bg-signal-cyan/50 shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-signal-cyan to-signal-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
