"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, HardDrive, Activity, Shield, Zap, Server, Monitor, Router, ArrowUpRight, ArrowDownRight } from "lucide-react";

const servers = [
  { name: "WEB-01", status: "online" as const, load: 42, color: "#00d4aa" },
  { name: "API-02", status: "online" as const, load: 67, color: "#3b82f6" },
  { name: "DB-03", status: "online" as const, load: 31, color: "#00d4aa" },
  { name: "APP-04", status: "warning" as const, load: 89, color: "#f59e0b" },
  { name: "DNS-05", status: "online" as const, load: 15, color: "#00d4aa" },
  { name: "CDN-06", status: "online" as const, load: 53, color: "#00d4aa" },
];

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

const bandwidthBars = [
  { label: "ETH0", value: 87, color: "#00d4aa" },
  { label: "ETH1", value: 62, color: "#3b82f6" },
  { label: "ETH2", value: 94, color: "#f59e0b" },
  { label: "ETH3", value: 45, color: "#00d4aa" },
  { label: "ETH4", value: 78, color: "#3b82f6" },
];

function useAnimatedValue(target: number, duration = 2000) {
  const [val, setVal] = useState(0);
  const startRef = useRef<number | null>(null);
  const fromRef = useRef(0);

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

function BandwidthBar({ label, value, color }: { label: string; value: number; color: string }) {
  const animatedVal = useAnimatedValue(value, 1500);
  return (
    <div className="flex items-center gap-2">
      <span className="mono-tag text-[8px] text-ink-500 w-7 shrink-0">{label}</span>
      <div className="flex-1 h-[6px] bg-base-800/80 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
      <span className="mono-tag text-[8px] text-ink-500 w-7 text-right shrink-0">{animatedVal}%</span>
    </div>
  );
}

function ServerGrid() {
  const [loads, setLoads] = useState(servers.map((s) => s.load));

  useEffect(() => {
    const interval = setInterval(() => {
      setLoads((prev) =>
        prev.map((l, i) => {
          const delta = (Math.random() - 0.5) * 8;
          return Math.max(10, Math.min(95, l + delta));
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-1.5">
      {servers.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
          className="bg-base-800/60 border border-line/30 rounded-lg p-1.5 text-center hover:border-signal-cyan/30 transition-colors duration-300"
        >
          <div className="flex items-center justify-center gap-1 mb-1">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                s.status === "online" ? "bg-signal-green" : "bg-signal-amber"
              } animate-pulseDot`}
            />
            <span className="mono-tag text-[7px] text-ink-500">{s.name}</span>
          </div>
          <div className="mono-tag text-[9px] font-bold" style={{ color: loads[i] > 80 ? "#f59e0b" : s.color }}>
            {Math.round(loads[i])}%
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function LiveLog() {
  const [entries, setEntries] = useState(logEntries.slice(0, 4));
  const [idx, setIdx] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntries((prev) => {
        const next = [logEntries[idx % logEntries.length], ...prev];
        return next.slice(0, 4);
      });
      setIdx((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [idx]);

  return (
    <div className="space-y-1">
      <AnimatePresence mode="popLayout">
        {entries.map((e, i) => (
          <motion.div
            key={`${e.time}-${i}`}
            initial={{ opacity: 0, x: -10, height: 0 }}
            animate={{ opacity: 1, x: 0, height: "auto" }}
            exit={{ opacity: 0, x: 10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 overflow-hidden"
          >
            <span className="mono-tag text-[7px] text-ink-500/50 shrink-0">{e.time}</span>
            <span className={`mono-tag text-[8px] ${e.color} truncate`}>{e.msg}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, suffix, color, trend }: {
  icon: React.ElementType; label: string; value: string; suffix: string; color: string; trend: "up" | "down";
}) {
  return (
    <div className="bg-base-800/40 border border-line/20 rounded-lg px-2.5 py-2 flex items-center gap-2">
      <Icon size={14} className={color} />
      <div className="flex-1 min-w-0">
        <div className="mono-tag text-[7px] text-ink-500/60">{label}</div>
        <div className="flex items-center gap-1">
          <span className={`mono-tag text-[11px] font-bold ${color}`}>{value}{suffix}</span>
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

function PulseRing() {
  return (
    <div className="absolute -top-1 -right-1">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-signal-green border border-base-900" />
      </span>
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
      {/* ── Top Metrics Row ── */}
      <div className="grid grid-cols-3 gap-1.5">
        <MetricCard icon={Activity} label="THROUGHPUT" value="8.4" suffix="Gbps" color="text-signal-cyan" trend="up" />
        <MetricCard icon={Shield} label="UPTIME" value={uptime} suffix="%" color="text-signal-green" trend="up" />
        <MetricCard icon={Zap} label="LATENCY" value="3.2" suffix="ms" color="text-signal-amber" trend="down" />
      </div>

      {/* ── Bandwidth Monitor ── */}
      <div className="bg-base-800/40 border border-line/20 rounded-xl p-3">
        <div className="flex items-center justify-between mb-2.5">
          <span className="mono-tag text-[9px] text-ink-500/70">BANDWIDTH MONITOR</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan animate-pulseDot" />
            <span className="mono-tag text-[8px] text-signal-cyan/60">LIVE</span>
          </div>
        </div>
        <div className="space-y-1.5">
          {bandwidthBars.map((b) => (
            <BandwidthBar key={b.label} {...b} />
          ))}
        </div>
      </div>

      {/* ── Server Status Grid ── */}
      <div className="bg-base-800/40 border border-line/20 rounded-xl p-3">
        <div className="flex items-center justify-between mb-2.5">
          <span className="mono-tag text-[9px] text-ink-500/70">SERVER STATUS</span>
          <span className="mono-tag text-[8px] text-signal-green/60">6/6 ONLINE</span>
        </div>
        <ServerGrid />
      </div>

      {/* ── Live Activity Log ── */}
      <div className="bg-base-800/40 border border-line/20 rounded-xl p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="mono-tag text-[9px] text-ink-500/70">ACTIVITY LOG</span>
          <span className="mono-tag text-[8px] text-ink-500/40">AUTO-REFRESH</span>
        </div>
        <LiveLog />
      </div>
    </div>
  );
}
