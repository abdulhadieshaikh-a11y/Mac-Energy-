"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Shield, Zap, ArrowUpRight, ArrowDownRight, Server, Wifi, HardDrive, Cpu } from "lucide-react";

const logEntries = [
  { time: "14:32:01", msg: "Packet flow optimized → 12Gbps", color: "text-signal-cyan" },
  { time: "14:31:58", msg: "Firewall rule updated → SEC-401", color: "text-signal-green" },
  { time: "14:31:55", msg: "Load balancer synced → 3 nodes", color: "text-signal-blue" },
  { time: "14:31:52", msg: "SSL cert renewed → *.macenergy.pk", color: "text-signal-cyan" },
  { time: "14:31:49", msg: "Bandwidth spike handled → +2.4Gbps", color: "text-signal-amber" },
  { time: "14:31:46", msg: "Backup completed → 99.97% integrity", color: "text-signal-green" },
  { time: "14:31:43", msg: "DNS propagated → 4 nameservers", color: "text-signal-cyan" },
  { time: "14:31:40", msg: "Monitor ping → All endpoints alive", color: "text-signal-green" },
];

function useAnimatedValue(target: number, duration = 2000) {
  const [val, setVal] = useState(0);
  const fromRef = useRef(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    fromRef.current = val;
    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - (startRef.current ?? now);
      const pct = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      setVal(Math.round(fromRef.current + (target - fromRef.current) * eased));
      if (pct < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);

  return val;
}

function ServerRack() {
  const [loads, setLoads] = useState([42, 67, 31, 89, 15, 53, 78, 24]);
  const servers = ["WEB-01", "API-02", "DB-03", "APP-04", "DNS-05", "CDN-06", "LOG-07", "MON-08"];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoads((prev) =>
        prev.map((l) => {
          const delta = (Math.random() - 0.5) * 6;
          return Math.max(8, Math.min(95, l + delta));
        })
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-1">
      {servers.map((name, i) => {
        const load = loads[i];
        const isHigh = load > 80;
        const isMid = load > 50;
        return (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
            className="flex items-center gap-2 group"
          >
            {/* Status LED */}
            <span className="relative shrink-0">
              <span
                className={`block w-1.5 h-1.5 rounded-full ${
                  isHigh ? "bg-signal-amber" : "bg-signal-green"
                }`}
              />
              <span
                className={`absolute inset-0 w-1.5 h-1.5 rounded-full animate-ping ${
                  isHigh ? "bg-signal-amber" : "bg-signal-green"
                } opacity-50`}
              />
            </span>

            {/* Server name */}
            <span className="mono-tag text-[8px] text-ink-500/70 w-12 shrink-0">{name}</span>

            {/* Visual load bar */}
            <div className="flex-1 h-[5px] bg-base-800/80 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: isHigh
                    ? "linear-gradient(90deg, #f59e0b, #ef4444)"
                    : isMid
                    ? "linear-gradient(90deg, #3b82f6, #00d4aa)"
                    : "linear-gradient(90deg, #00d4aa, #10b981)",
                }}
                animate={{ width: `${load}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Load percentage */}
            <span
              className={`mono-tag text-[9px] font-medium w-7 text-right shrink-0 ${
                isHigh ? "text-signal-amber" : "text-signal-cyan/70"
              }`}
            >
              {Math.round(load)}%
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

function LiveLog() {
  const [entries, setEntries] = useState(logEntries.slice(0, 3));
  const [idx, setIdx] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntries((prev) => {
        const next = [logEntries[idx % logEntries.length], ...prev];
        return next.slice(0, 3);
      });
      setIdx((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [idx]);

  return (
    <div className="space-y-1.5">
      <AnimatePresence mode="popLayout">
        {entries.map((e, i) => (
          <motion.div
            key={`${e.time}-${i}-${idx}`}
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 8, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex items-center gap-2 overflow-hidden"
          >
            <span className="w-1 h-1 rounded-full bg-signal-cyan/40 shrink-0" />
            <span className="mono-tag text-[8px] text-ink-500/40 shrink-0">{e.time}</span>
            <span className={`mono-tag text-[8px] ${e.color} truncate`}>{e.msg}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function MetricPill({ icon: Icon, label, value, suffix, color, trend }: {
  icon: React.ElementType; label: string; value: string; suffix: string; color: string; trend: "up" | "down";
}) {
  return (
    <div className="bg-base-800/50 border border-line/20 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
        color === "text-signal-cyan" ? "bg-signal-cyan/10" :
        color === "text-signal-green" ? "bg-signal-green/10" :
        "bg-signal-amber/10"
      }`}>
        <Icon size={14} className={color} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="mono-tag text-[7px] text-ink-500/50 tracking-wider">{label}</div>
        <div className="flex items-center gap-1">
          <span className={`mono-tag text-[12px] font-bold ${color}`}>{value}{suffix}</span>
          {trend === "up" ? (
            <ArrowUpRight size={10} className="text-signal-green" />
          ) : (
            <ArrowDownRight size={10} className="text-signal-cyan" />
          )}
        </div>
      </div>
    </div>
  );
}

export default function NetworkOpsDashboard() {
  const [uptime, setUptime] = useState("99.97");

  useEffect(() => {
    const interval = setInterval(() => {
      const v = 99.95 + Math.random() * 0.04;
      setUptime(v.toFixed(2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-3">
      {/* ── Metrics Row ── */}
      <div className="grid grid-cols-3 gap-2">
        <MetricPill icon={Activity} label="THROUGHPUT" value="8.4" suffix="Gbps" color="text-signal-cyan" trend="up" />
        <MetricPill icon={Shield} label="UPTIME" value={uptime} suffix="%" color="text-signal-green" trend="up" />
        <MetricPill icon={Zap} label="LATENCY" value="3.2" suffix="ms" color="text-signal-amber" trend="down" />
      </div>

      {/* ── Server Rack Visualization ── */}
      <div className="bg-base-800/40 border border-line/20 rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Server size={12} className="text-signal-cyan/60" />
            <span className="mono-tag text-[9px] text-ink-500/70 tracking-wider">SERVER RACK</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulseDot" />
            <span className="mono-tag text-[8px] text-signal-green/60">8/8 ONLINE</span>
          </div>
        </div>
        <ServerRack />
      </div>

      {/* ── Activity Log ── */}
      <div className="bg-base-800/40 border border-line/20 rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <HardDrive size={12} className="text-signal-blue/60" />
            <span className="mono-tag text-[9px] text-ink-500/70 tracking-wider">ACTIVITY LOG</span>
          </div>
          <span className="mono-tag text-[7px] text-ink-500/30">LIVE</span>
        </div>
        <LiveLog />
      </div>
    </div>
  );
}
