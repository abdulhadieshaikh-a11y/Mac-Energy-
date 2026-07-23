"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Assess",
    desc: "We walk the site, survey existing wiring and Wi-Fi, and map every device already on the network.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    n: "02",
    title: "Design",
    desc: "A topology is drawn up — routers, switches, VLANs, and cable runs — sized for current and future load.",
    image: "https://images.unsplash.com/photo-1537432376149-e84978e17840?w=600&q=80",
  },
  {
    n: "03",
    title: "Deploy",
    desc: "Cabling, hardware, and endpoints go in. Every port, IP, and device gets labeled and documented.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    n: "04",
    title: "Monitor",
    desc: "Uptime, latency, and device health are tracked continuously, with support on call to respond fast.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-base-850/50 border-y border-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-xl mb-16">
          <span className="mono-tag text-[11px] text-signal-cyan">/ HOW WE WORK</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-3 text-balance tracking-tight">
            A four-stage rollout, every time
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-line" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="w-12 h-12 rounded-full bg-base-900 border border-signal-cyan/40 flex items-center justify-center font-display font-bold text-signal-cyan text-[14px] relative z-10 group-hover:bg-signal-cyan/10 group-hover:border-signal-cyan/60 transition-all duration-300">
                {s.n}
              </div>

              <div className="mt-5 rounded-xl overflow-hidden border border-line h-36 relative">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-900/90 via-base-900/30 to-transparent" />
              </div>

              <h3 className="font-display font-bold text-[16px] mt-5">{s.title}</h3>
              <p className="text-ink-500 text-[13px] leading-relaxed mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
