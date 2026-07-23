import { Logo } from "./Navbar";
import { PHONE_DISPLAY, PHONE_TEL } from "./Navbar";

const cols = [
  {
    title: "SERVICES",
    links: ["Network Infrastructure", "Computer Lab Setup", "Hardware Management", "API Integration", "Wi-Fi Deployment", "Network Security"],
  },
  {
    title: "COMPANY",
    links: ["About Jawed Shaikh", "Process", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base-950">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <Logo />
          <p className="text-ink-500 text-[13.5px] leading-relaxed mt-5 max-w-xs">
            A professional networking team keeping computers, labs, and APIs
            connected and online. Led by Jawed Shaikh.
          </p>
          <a href={PHONE_TEL} className="inline-flex items-center gap-2 mt-5 bg-signal-green/10 border border-signal-green/30 px-4 py-2.5 rounded-lg text-signal-green font-semibold hover:bg-signal-green/20 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-signal-green animate-pulseDot" />
            {PHONE_DISPLAY}
          </a>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mono-tag text-[10px] text-ink-500 mb-4">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-ink-300 text-[13.5px] hover:text-signal-cyan transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ink-500 text-[12px] mono-tag">
            &copy; {new Date().getFullYear()} MAC ENERGY. ALL RIGHTS RESERVED.
          </p>
          <p className="text-ink-500 text-[12px] mono-tag">STATUS: ALL SYSTEMS ONLINE</p>
        </div>
      </div>
    </footer>
  );
}
