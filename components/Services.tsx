"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  MonitorIcon,
  CableIcon,
  WifiIcon,
} from "./HardwareIcons";
import { Bot, ClipboardCheck, Cog, Database } from "lucide-react";

const services = [
  {
    icon: Bot,
    tag: "01",
    title: "AI-First Vision",
    desc: "AI-led solutions that turn complex information into clearer decisions, smarter workflows, and measurable growth.",
    highlights: ["AI strategy & planning", "Intelligent workflows", "Data-led decisions"],
    image: "https://www.csm.tech/storage/uploads/images/5026AI2.jpg",
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
    icon: Database,
    tag: "03",
    title: "ERP Solutions",
    desc: "Connected ERP systems that bring finance, inventory, operations, and reporting into one clear view.",
    highlights: ["ERP setup & configuration", "Process visibility", "Business reporting"],
    image: "https://www.mechanicalpower.net/wp-content/uploads/2023/07/Enterprise-Resource-Planning.jpg",
  },
  {
    icon: CableIcon,
    tag: "04",
    title: "Structured Cabling",
    desc: "Cat6/Cat6a runs, patch panels, and cable management done to a standard that survives audits.",
    highlights: ["Cat6A certified runs", "Patch panel labeling", "Audit-ready docs"],
    image: "/images/structured-cabling.jpg",
  },
  {
    icon: Cog,
    tag: "05",
    title: "IT Automation",
    desc: "Automated workflows for onboarding, support, backups, reporting, and routine IT operations.",
    highlights: ["Workflow automation", "Scheduled operations", "Fewer manual tasks"],
    image: "https://t4.ftcdn.net/jpg/03/34/24/51/360_F_334245117_44IfoeWPh85LGEd7AwAE0LbBvTzJkkZe.jpg",
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
    icon: Bot,
    tag: "07",
    title: "AI Solutions",
    desc: "Useful AI systems that reduce manual work, surface better insights, and help teams make faster decisions.",
    highlights: ["AI workflow planning", "Smart reporting", "Assisted operations"],
    image: "https://www.ntu.edu.sg/media/images/innovationlibraries/tech-portal/tech-offer/artificial-intelligence-architecture.jpg?sfvrsn=c609e65b_8",
  },
  {
    icon: ClipboardCheck,
    tag: "08",
    title: "IT Audit",
    desc: "Structured audits that reveal technology risks, control gaps, and clear priorities for improvement.",
    highlights: ["Asset & access review", "Risk assessment", "Audit-ready reports"],
    image: "https://t3.ftcdn.net/jpg/21/19/34/40/360_F_2119344023_id84HNYGtBiExjbFaLrlBsub9GKvALAD.jpg",
  },
  {
    icon: Database,
    tag: "09",
    title: "Digital Transformation Consulting",
    desc: "A practical roadmap for modernizing systems, connecting teams, and moving the business forward with confidence.",
    highlights: ["Digital strategy", "System modernization", "Transformation roadmap"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdl20uwpTHtUhBYwIUpOzR-37rxQD61LtdNTMWPHvn71MzkpS2f1RkJNc&s=10",
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
            9
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
                From the wire in the wall to intelligent business systems — we plan, install, and
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
                <div className="font-display font-extrabold text-2xl text-signal-cyan">9</div>
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
