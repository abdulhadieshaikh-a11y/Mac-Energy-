"use client";

import { motion } from "framer-motion";
import { Check, Clock, ArrowRight, Wrench, Eye, Layers, MonitorCheck } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Assess",
    icon: Eye,
    image: "/images/process-assess.jpg",
    color: "signal-cyan",
    desc: "We walk the site, survey existing wiring and Wi-Fi, and map every device already on the network.",
    details: [
      "Physical site walkthrough & documentation",
      "Existing network topology mapping",
      "Wi-Fi signal strength & dead zone analysis",
      "Device inventory & performance audit",
    ],
    duration: "1–2 Days",
  },
  {
    n: "02",
    title: "Design",
    icon: Layers,
    image: "/images/process-design.jpg",
    color: "signal-blue",
    desc: "A topology is drawn up — routers, switches, VLANs, and cable runs — sized for current and future load.",
    details: [
      "Network topology & IP schema design",
      "Switch port mapping & VLAN planning",
      "Cable run paths & patch panel layout",
      "Scalability roadmap for future growth",
    ],
    duration: "2–3 Days",
  },
  {
    n: "03",
    title: "Deploy",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    color: "signal-green",
    desc: "Cabling, hardware, and endpoints go in. Every port, IP, and device gets labeled and documented.",
    details: [
      "Cat6A structured cabling & patch panels",
      "Router, switch & AP installation",
      "Endpoint imaging, enrollment & testing",
      "Full documentation & as-built diagrams",
    ],
    duration: "3–7 Days",
  },
  {
    n: "04",
    title: "Monitor",
    icon: MonitorCheck,
    image: "/images/process-monitor.jpg",
    color: "signal-amber",
    desc: "Uptime, latency, and device health are tracked continuously, with support on call to respond fast.",
    details: [
      "Real-time uptime & latency dashboards",
      "Automated alerting on device failures",
      "Monthly health reports & optimization",
      "24/7 emergency support hotline",
    ],
    duration: "Ongoing",
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; solid: string }> = {
  "signal-cyan": { border: "border-signal-cyan/40", bg: "bg-signal-cyan/10", text: "text-signal-cyan", solid: "bg-signal-cyan" },
  "signal-blue": { border: "border-signal-blue/40", bg: "bg-signal-blue/10", text: "text-signal-blue", solid: "bg-signal-blue" },
  "signal-green": { border: "border-signal-green/40", bg: "bg-signal-green/10", text: "text-signal-green", solid: "bg-signal-green" },
  "signal-amber": { border: "border-signal-amber/40", bg: "bg-signal-amber/10", text: "text-signal-amber", solid: "bg-signal-amber" },
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-base-850/50 border-y border-line">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-signal-cyan/[0.03] blur-[150px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="mono-tag text-[11px] text-signal-cyan">/ HOW WE WORK</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-3 text-balance tracking-tight">
            A four-stage rollout, every time
          </h2>
          <p className="text-ink-300 mt-5 text-[16px] leading-relaxed max-w-xl mx-auto">
            Every project follows the same proven process — from initial assessment
            to long-term monitoring. No shortcuts, no guesswork.
          </p>
        </div>

        {/* Vertical connecting line */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-line/50" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => {
              const c = colorMap[s.color];
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative"
                >
                  {/* Center dot on timeline */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
                    <div className={`w-5 h-5 rounded-full ${c.solid} flex items-center justify-center`}>
                      <div className="w-2 h-2 rounded-full bg-base-950" />
                    </div>
                  </div>

                  <div className={`md:grid md:grid-cols-2 md:gap-16 items-start ${isEven ? "" : "md:[direction:rtl]"}`}>
                    {/* Image side */}
                    <div className={`${isEven ? "" : "md:[direction:ltr]"}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                        className="relative rounded-2xl overflow-hidden border border-line group shadow-2xl shadow-black/40"
                      >
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full h-64 sm:h-80 md:h-[380px] object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-base-950/90 via-base-950/20 to-transparent" />

                        {/* Step badge */}
                        <div className="absolute top-5 left-5">
                          <span className={`mono-tag text-[11px] ${c.text} ${c.bg} border ${c.border} rounded-full px-3 py-1 backdrop-blur-sm`}>
                            STEP {s.n}
                          </span>
                        </div>

                        {/* Duration */}
                        <div className="absolute top-5 right-5">
                          <span className="mono-tag text-[10px] text-ink-300 bg-base-950/70 backdrop-blur-sm border border-line/50 rounded-full px-3 py-1 flex items-center gap-1.5">
                            <Clock size={11} />
                            {s.duration}
                          </span>
                        </div>

                        {/* Title overlay */}
                        <div className="absolute bottom-5 left-5 right-5">
                          <div className="flex items-center gap-3">
                            <span className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                              <s.icon size={20} className={c.text} />
                            </span>
                            <div>
                              <h3 className="font-display font-extrabold text-2xl text-ink-100">{s.title}</h3>
                              <p className="text-ink-400 text-[13px] mt-0.5 line-clamp-1">{s.desc}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Detail side */}
                    <div className={`mt-8 md:mt-0 space-y-6 ${isEven ? "" : "md:[direction:ltr]"}`}>
                      {/* Step number + title */}
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`font-display font-extrabold text-5xl ${c.text} opacity-30 leading-none`}>{s.n}</span>
                          <div>
                            <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight">{s.title}</h3>
                            <span className={`mono-tag text-[10px] ${c.text}`}>PHASE {s.n} OF 04</span>
                          </div>
                        </div>
                        <p className="text-ink-300 text-[15px] leading-relaxed">{s.desc}</p>
                      </div>

                      {/* Checklist card */}
                      <div className="rounded-xl border border-line bg-base-900/50 p-5">
                        <span className="mono-tag text-[10px] text-ink-500 block mb-3">WHAT HAPPENS IN THIS PHASE</span>
                        <div className="space-y-3">
                          {s.details.map((d, di) => (
                            <motion.div
                              key={di}
                              initial={{ opacity: 0, x: -12 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + di * 0.1, duration: 0.4 }}
                              className="flex items-start gap-3"
                            >
                              <span className={`mt-0.5 w-5 h-5 rounded-md ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
                                <Check size={11} className={c.text} />
                              </span>
                              <span className="text-ink-300 text-[13.5px] leading-relaxed">{d}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Progress */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="mono-tag text-[9px] text-ink-500">PHASE PROGRESS</span>
                          <span className={`mono-tag text-[9px] ${c.text}`}>{((i + 1) / 4) * 100}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-base-800 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${c.solid}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${((i + 1) / 4) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-signal-cyan text-base-950 font-bold px-8 py-4 rounded-xl hover:bg-signal-cyan/85 transition-all duration-300 shadow-lg shadow-signal-cyan/20 hover:shadow-signal-cyan/30 hover:scale-[1.02]"
          >
            Start Your Project
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-ink-500 text-[13px] mt-4">Free initial site assessment for new clients</p>
        </motion.div>
      </div>
    </section>
  );
}
