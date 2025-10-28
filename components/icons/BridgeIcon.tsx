// components/icons/BridgeIcon.tsx
import React from "react";

export const BridgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="13 23 38 22" // <--- zoomed in tighter (previously 8 16 48 32)
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    {...props}
  >
    <defs>
      {/* Premium Metallic Gold */}
      <linearGradient id="Bridge_Gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FBBF24" /> {/* amber-400 */}
        <stop offset="100%" stopColor="#B45309" /> {/* amber-700 */}
      </linearGradient>

      {/* Soft Stone */}
      <linearGradient id="Bridge_Stone" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F3F4F6" />
        <stop offset="100%" stopColor="#9CA3AF" />
      </linearGradient>

      {/* Subtle Warm Reflection */}
      <linearGradient id="Bridge_WarmGlow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="100%" stopColor="#FBBF24" />
      </linearGradient>
    </defs>

    {/* Clouds */}
    <path
      d="M18 26c-2.5 0-4.5 1.8-4.5 4.3s2 4.3 4.5 4.3h8.8c1.8 0 3.2-1.3 3.2-3.3s-1.3-3.3-3.2-3.3H26c-.4-1.8-2-2.8-3.5-2.8H18z"
      fill="url(#Bridge_Stone)"
      stroke="#1F2937"
      strokeWidth="0.9"
      opacity="0.9"
    />
    <path
      d="M40.5 22.5c-2 0-3.5 1.3-3.5 3.3s1.5 3.3 3.5 3.3h6c1.5 0 2.8-1 2.8-2.8s-1.3-2.8-2.8-2.8h-.5c-.3-1.5-1.5-2.3-2.5-2.3h-3z"
      fill="url(#Bridge_Stone)"
      stroke="#1F2937"
      strokeWidth="0.9"
      opacity="0.9"
    />

    {/* Deck */}
    <rect
      x="16"
      y="36"
      width="32"
      height="4.8"
      rx="1"
      fill="url(#Bridge_Stone)"
      stroke="url(#Bridge_Gold)"
      strokeWidth="1.4"
    />

    {/* Towers */}
    <path
      d="M24 22v14M40 22v14"
      stroke="url(#Bridge_Gold)"
      strokeWidth="2.3"
      strokeLinecap="round"
    />

    {/* Suspension Cables */}
    <path
      d="M24 22C30 28 34 28 40 22"
      stroke="#4B5563"
      strokeWidth="1.3"
      fill="none"
      opacity="0.8"
    />
    <path
      d="M24 22C30 27 34 27 40 22"
      stroke="url(#Bridge_Gold)"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      opacity="0.95"
    />

    {/* Warm Glow Waves */}
    <path
      d="M18 44c1.5 0 2.2.9 3.5.9s2-.9 3.5-.9 2 .9 3.5.9 2-.9 3.5-.9 2 .9 3.5.9 2-.9 3.5-.9 2 .9 3.5.9 2-.9 3.5-.9"
      stroke="url(#Bridge_WarmGlow)"
      strokeWidth="1.3"
      fill="none"
      strokeLinecap="round"
      opacity="0.8"
    />

    {/* Supports */}
    <path
      d="M20 40v5M44 40v5"
      stroke="#1F2937"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    {/* Accents */}
    <circle cx="24" cy="28" r="1.1" fill="url(#Bridge_Gold)" />
    <circle cx="40" cy="28" r="1.1" fill="url(#Bridge_Gold)" />
  </svg>
);
