"use client";

import { motion } from "framer-motion";
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
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  },
  {
    icon: MonitorIcon,
    tag: "02",
    title: "Computer Lab Setup",
    desc: "Full lab builds — workstations, monitors, shared storage, and classroom-ready network access.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    icon: ServerRackIcon,
    tag: "03",
    title: "Hardware & Device Management",
    desc: "Procurement, imaging, and lifecycle support for laptops, desktops, monitors, and peripherals.",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80",
  },
  {
    icon: ApiIcon,
    tag: "04",
    title: "API & Systems Integration",
    desc: "Connecting internal tools and services through clean, documented, well-monitored APIs.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
  },
  {
    icon: CableIcon,
    tag: "05",
    title: "Structured Cabling",
    desc: "Cat6/Cat6a runs, patch panels, and cable management done to a standard that survives audits.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    icon: WifiIcon,
    tag: "06",
    title: "Wireless Deployment",
    desc: "Site-surveyed Wi-Fi coverage with access point placement tuned for real-world density.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
  },
  {
    icon: ShieldIcon,
    tag: "07",
    title: "Network Security",
    desc: "Firewalls, VLAN segmentation, and access control that keep unwanted traffic out.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
  {
    icon: SwitchIcon,
    tag: "08",
    title: "Monitoring & Support",
    desc: "24/7 uptime monitoring with a support line that actually picks up when something breaks.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-8">
      <div className="max-w-2xl mb-16">
        <span className="mono-tag text-[11px] text-signal-cyan">/ SERVICES</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-3 text-balance tracking-tight">
          Every layer of the network, handled by one team
        </h2>
        <p className="text-ink-300 mt-4 leading-relaxed">
          From the wire in the wall to the API in the cloud — we plan, install, and
          maintain the systems that keep computers, labs, and applications talking to
          each other.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="group rounded-xl border border-line bg-base-900 overflow-hidden hover:border-signal-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-signal-cyan/5"
          >
            <div className="relative h-36 overflow-hidden bg-base-850">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-base-900/10 via-base-900/40 to-base-900" />
              <div className="absolute top-3 right-3">
                <span className="mono-tag text-[10px] text-ink-500 bg-base-900/80 backdrop-blur-sm px-2 py-1 rounded">{s.tag}</span>
              </div>
              <div className="absolute bottom-3 left-3">
                <s.icon className="w-7 h-7 text-signal-cyan/80" />
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-display font-bold text-[15px] mb-2">{s.title}</h3>
              <p className="text-ink-500 text-[12.5px] leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
