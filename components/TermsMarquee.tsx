const terms = [
  "TCP/IP",
  "DNS",
  "DHCP",
  "VLAN",
  "FIBER OPTIC",
  "ETHERNET CAT6",
  "WI-FI 6E",
  "FIREWALL",
  "API GATEWAY",
  "LOAD BALANCER",
  "VPN",
  "SUBNETTING",
  "QoS",
  "BGP",
  "PATCH PANEL",
];

export default function TermsMarquee() {
  const row = [...terms, ...terms];
  return (
    <div className="relative border-y border-line bg-base-850/60 overflow-hidden py-4">
      <div className="flex w-max animate-marquee">
        {row.map((t, i) => (
          <div key={i} className="flex items-center mono-tag text-[12px] text-ink-500 px-6 whitespace-nowrap">
            {t}
            <span className="ml-6 w-1 h-1 rounded-full bg-signal-cyan/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
