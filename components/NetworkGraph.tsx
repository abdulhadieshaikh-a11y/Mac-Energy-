"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "gw", x: 300, y: 210, r: 22, label: "GATEWAY", ip: "10.0.0.1" },
  { id: "n1", x: 90, y: 90, r: 13, label: "LAPTOP", ip: "10.0.0.14" },
  { id: "n2", x: 300, y: 40, r: 13, label: "SERVER", ip: "10.0.0.2" },
  { id: "n3", x: 510, y: 90, r: 13, label: "AP-01", ip: "10.0.0.22" },
  { id: "n4", x: 70, y: 330, r: 13, label: "WORKSTN", ip: "10.0.0.31" },
  { id: "n5", x: 300, y: 385, r: 13, label: "PRINTER", ip: "10.0.0.40" },
  { id: "n6", x: 530, y: 330, r: 13, label: "IOT-HUB", ip: "10.0.0.51" },
];

const edges = [
  ["gw", "n1"],
  ["gw", "n2"],
  ["gw", "n3"],
  ["gw", "n4"],
  ["gw", "n5"],
  ["gw", "n6"],
];

const findNode = (id: string) => nodes.find((n) => n.id === id)!;

export default function NetworkGraph() {
  return (
    <svg viewBox="0 0 600 430" className="w-full h-full" role="img" aria-label="Network topology diagram">
      <defs>
        <radialGradient id="gwGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3ED8E0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3ED8E0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const from = findNode(a);
        const to = findNode(b);
        return (
          <g key={i}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#22303C"
              strokeWidth="1.5"
            />
            <motion.circle
              r="3"
              fill="#3ED8E0"
              initial={{ opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          </g>
        );
      })}

      <circle cx={findNode("gw").x} cy={findNode("gw").y} r="70" fill="url(#gwGlow)" />

      {nodes.map((n) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="#0F141C"
            stroke={n.id === "gw" ? "#3ED8E0" : "#4C8DFF"}
            strokeWidth={n.id === "gw" ? 2.5 : 2}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r="2.2"
            fill={n.id === "gw" ? "#3ED8E0" : "#4C8DFF"}
            className="animate-pulseDot"
          />
          <text
            x={n.x}
            y={n.y + n.r + 14}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="0.05em"
            fill="#7C8B98"
          >
            {n.label}
          </text>
          <text
            x={n.x}
            y={n.y + n.r + 25}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill="#3ED8E0"
            opacity="0.7"
          >
            {n.ip}
          </text>
        </g>
      ))}
    </svg>
  );
}
