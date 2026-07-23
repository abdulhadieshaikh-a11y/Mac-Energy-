"use client";

import { motion } from "framer-motion";
import { RouterIcon, SwitchIcon, LaptopIcon, MonitorIcon, ServerRackIcon, CableIcon } from "./HardwareIcons";

const gear = [
  {
    icon: RouterIcon,
    name: "Edge Router",
    meta: "GATEWAY // 10.0.0.1",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    specs: "High-throughput routing with failover support",
  },
  {
    icon: SwitchIcon,
    name: "48-Port Switch",
    meta: "L2/L3 // 1000BASE-T",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    specs: "Full wire-speed switching with VLAN support",
  },
  {
    icon: ServerRackIcon,
    name: "Server Rack",
    meta: "RACK-04 // 42U",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80",
    specs: "42U rack with managed power distribution",
  },
  {
    icon: LaptopIcon,
    name: "Endpoint Laptops",
    meta: "FLEET // 340 UNITS",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    specs: "Imaged and enrolled with centralized management",
  },
  {
    icon: MonitorIcon,
    name: "Workstation Monitors",
    meta: "DISPLAY // 27\" QHD",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
    specs: "Dual-display setups for maximum productivity",
  },
  {
    icon: CableIcon,
    name: "Structured Cabling",
    meta: "CAT6A // PATCH PANEL",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    specs: "Cat6A runs with certified test results",
  },
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="relative py-24 md:py-32 bg-base-850/50 border-y border-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="mono-tag text-[11px] text-signal-cyan">/ WHAT WE WORK WITH</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-3 text-balance tracking-tight">
              Real hardware, mapped and maintained
            </h2>
          </div>
          <p className="text-ink-500 text-[13.5px] max-w-sm leading-relaxed">
            Every device we touch gets logged, labeled, and tracked on the network map —
            so when something goes down, we already know where it is.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gear.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="relative rounded-xl border border-line bg-base-900 overflow-hidden group hover:border-signal-cyan/40 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={g.image}
                  alt={g.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-900/20 to-base-900" />
                <div className="absolute top-3 right-3">
                  <span className="w-2 h-2 rounded-full bg-signal-green animate-pulseDot inline-block" />
                </div>
                <div className="absolute bottom-3 left-3">
                  <g.icon className="w-10 h-10 text-signal-blue/70" />
                </div>
              </div>

              <div className="p-6 relative">
                <h3 className="font-display font-bold text-[16px]">{g.name}</h3>
                <p className="mono-tag text-[10.5px] text-ink-500 mt-2">{g.meta}</p>
                <p className="text-ink-500 text-[12.5px] leading-relaxed mt-2">{g.specs}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
