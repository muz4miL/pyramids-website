// components/icons/WaterSupplyIcon.tsx
export const WaterSupplyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <defs>
      {/* Clean Water Blue */}
      <linearGradient id="Water_Clean" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>

      {/* Water Highlight */}
      <linearGradient id="Water_Highlight" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Main Water Droplet */}
    <path
      fill="url(#Water_Clean)"
      d="M12 2C8 6 4 8 4 14c0 5 3.582 8 8 8s8-3 8-8c0-6-4-8-8-12z"
      stroke="#1D4ED8"
      strokeWidth="0.5"
    />

    {/* Water Droplet Highlight */}
    <path
      fill="url(#Water_Highlight)"
      d="M8 8c2-2 4-4 4-6 0 2 2 4 4 6 1 2 2 4 2 6 0 4-2 6-6 6s-6-2-6-6c0-2 1-4 2-6z"
    />

    {/* Water Flow Lines */}
    <path
      stroke="#FFFFFF"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeOpacity="0.7"
      d="M10 12l2 2 2-2"
    />
    <path
      stroke="#FFFFFF"
      strokeWidth="0.8"
      strokeLinecap="round"
      strokeOpacity="0.6"
      d="M9 15l3 3 3-3"
    />

    {/* Small Bubbles */}
    <circle cx="9" cy="10" r="0.8" fill="#FFFFFF" opacity="0.8">
      <animate
        attributeName="cy"
        values="10;9;10"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="15" cy="11" r="0.6" fill="#FFFFFF" opacity="0.7">
      <animate
        attributeName="cy"
        values="11;10;11"
        dur="1.8s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Water Ripple Effect */}
    <circle
      cx="12"
      cy="18"
      r="1.5"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="0.5"
      strokeOpacity="0.4"
    >
      <animate
        attributeName="r"
        values="1.5;2.5;1.5"
        dur="2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.4;0.2;0.4"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);
