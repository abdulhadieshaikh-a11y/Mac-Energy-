import React from "react";

type IconProps = { className?: string };

export function RouterIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="6" y="26" width="52" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M20 26 L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 26 L32 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 26 L50 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="10" r="2.4" fill="currentColor" />
      <circle cx="32" cy="8" r="2.4" fill="currentColor" />
      <circle cx="50" cy="10" r="2.4" fill="currentColor" />
      <circle cx="15" cy="36" r="2" fill="currentColor" className="animate-pulseDot" />
      <circle cx="23" cy="36" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="31" cy="36" r="2" fill="currentColor" opacity="0.5" />
      <rect x="42" y="33" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function SwitchIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="4" y="20" width="56" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={i}
          x={10 + i * 6.2}
          y="27"
          width="4"
          height="6"
          rx="0.6"
          fill={i === 2 || i === 5 ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.3"
          className={i === 2 ? "animate-pulseDot" : ""}
        />
      ))}
    </svg>
  );
}

export function LaptopIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="14" y="10" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M14 34 L10 14 M50 34 L54 14" stroke="none" />
      <path d="M6 44 L58 44 L52 34 L12 34 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M25 39 H39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="19" y="15" width="26" height="14" rx="1" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

export function MonitorIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="8" y="10" width="48" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="16" width="36" height="18" fill="currentColor" opacity="0.1" />
      <path d="M32 40 V48" stroke="currentColor" strokeWidth="2" />
      <path d="M22 54 H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 48 L38 48 L40 54 L24 54 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function ServerRackIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="12" y="6" width="40" height="52" rx="2" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 5 }).map((_, i) => (
        <g key={i}>
          <rect x="17" y={12 + i * 9.5} width="30" height="6.5" rx="0.8" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="21" cy={15.2 + i * 9.5} r="1.3" fill="currentColor" className={i === 1 ? "animate-pulseDot" : ""} opacity={i === 1 ? 1 : 0.5} />
        </g>
      ))}
    </svg>
  );
}

export function CableIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path
        d="M8 48 C 20 48, 18 30, 30 30 S 44 12, 56 12"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
      <rect x="4" y="42" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="50" y="6" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function WifiIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path d="M14 28 a26 26 0 0 1 36 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M21 36 a16 16 0 0 1 22 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M28 44 a6 6 0 0 1 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="50" r="2.4" fill="currentColor" className="animate-pulseDot" />
    </svg>
  );
}

export function ShieldIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path
        d="M32 6 L54 14 V30 C54 44 44 54 32 58 C20 54 10 44 10 30 V14 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M22 31 L29 38 L43 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ApiIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="6" y="26" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="42" y="26" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="24" y="14" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <rect x="24" y="38" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M22 32 H42 M32 26 V38" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
    </svg>
  );
}

export function GaugeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path d="M8 40 A24 24 0 0 1 56 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M32 40 L44 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="32" cy="40" r="3" fill="currentColor" />
    </svg>
  );
}
