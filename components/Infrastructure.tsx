"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ComponentType } from "react";
import { RouterIcon, SwitchIcon, ServerRackIcon, ShieldIcon } from "./HardwareIcons";

type GearItem = {
  icon: ComponentType<{ className?: string }>;
  name: string;
  meta: string;
  image: string;
  fit?: CSSProperties["objectFit"];
  bg?: string;
  specs: string;
};

const gear: GearItem[] = [
  {
    icon: RouterIcon,
    name: "Network Infrastructure",
    meta: "CORE // ROUTERS & SWITCHES",
    image: "/images/network-infra.jpg",
    specs: "Connected routing, switching, and gateway systems built for reliable traffic flow",
  },
  {
    icon: RouterIcon,
    name: "Edge Router",
    meta: "GATEWAY // 10.0.0.1",
    image: "/images/edge-router.jpg",
    specs: "High-throughput routing with failover support",
  },
  {
    icon: ServerRackIcon,
    name: "Data Center",
    meta: "FACILITY // HIGH AVAILABILITY",
    image: "https://www.switch.com/wp-content/uploads/2021/10/21-10_BlgHdr_Kywrd-CarrierNeutralDC_3840x2160.jpeg",
    specs: "Scalable data center environments for secure, resilient business operations",
  },
  {
    icon: SwitchIcon,
    name: "48-Port Switch",
    meta: "L2/L3 // 1000BASE-T",
    image: "/images/switch-48poe.png",
    bg: "bg-white",
    specs: "Full wire-speed switching with VLAN support",
  },
  {
    icon: ServerRackIcon,
    name: "Server Rack",
    meta: "RACK-04 // 42U",
    image: "/images/server-rack.jpg",
    specs: "42U rack with managed power distribution",
  },
  {
    icon: ShieldIcon,
    name: "Cyber Security",
    meta: "SECURITY // PROTECTION & CONTROL",
    image: "https://i0.wp.com/thetac.tech/wp-content/uploads/2025/02/top-cyber-certs.jpg?fit=1860%2C1102&ssl=10_BlgHdr_Kywr",
    specs: "Security controls that protect users, devices, data, and critical systems",
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
              <div className={"relative aspect-[16/9] overflow-hidden " + (g.bg ?? "bg-base-850")}>
                <img
                  src={g.image}
                  alt={g.name}
                  className="w-full h-full object-center group-hover:scale-110 transition-transform duration-700"
                  style={{ objectFit: g.fit ?? "cover" }}
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className={"absolute inset-0 " + (g.bg === "bg-white" ? "bg-gradient-to-b from-transparent via-transparent to-base-900/80" : "bg-gradient-to-b from-transparent via-base-900/20 to-base-900")} />
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
