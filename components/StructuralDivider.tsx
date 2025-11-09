"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface StructuralDividerProps {
  direction: "black-to-white" | "white-to-black";
  className?: string;
}

export default function StructuralDivider({
  direction,
  className = "",
}: StructuralDividerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Enhanced architectural animations - more visible
  const constructionProgress = useTransform(
    scrollYProgress,
    [0, 0.8], // Extended range for longer visibility
    [120, 0]
  );
  const sectionReveal = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Enhanced structural elements - more prominent
  const beamOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const beamGlow = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.8]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.08]);

  const isBlackToWhite = direction === "black-to-white";
  const bgColor = isBlackToWhite ? "bg-black" : "bg-white";
  const nextBgColor = isBlackToWhite ? "white" : "black";
  const points = isBlackToWhite ? "0,0 100,0 100,100" : "0,0 100,0 0,100";

  return (
    <div
      ref={ref}
      className={`relative h-20 md:h-28 lg:h-36 z-30 overflow-hidden ${bgColor} ${className}`}
    >
      {/* ENHANCED STRUCTURAL ENGINEERING GRID */}
      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 structural-grid"
      />

      {/* MAIN STRUCTURAL CONTAINER */}
      <motion.div
        style={{ opacity: sectionReveal }}
        className="relative h-full w-full"
      >
        {/* ENHANCED ENGINEERING BEAM ANIMATION */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          style={{ opacity: beamOpacity }}
        >
          {/* PRIMARY STRUCTURAL BEAM - THICKER AND MORE VISIBLE */}
          <motion.path
            d={isBlackToWhite ? "M0,0 L100,100" : "M100,0 L0,100"}
            stroke="rgb(249, 115, 22)"
            strokeWidth="2.5" // Increased from 1.2
            fill="none"
            strokeDasharray="141"
            strokeDashoffset={constructionProgress}
            style={{
              filter: "drop-shadow(0 0 4px rgb(249, 115, 22, 0.7))",
            }}
          />

          {/* SECONDARY GLOW BEAM FOR MORE IMPACT */}
          <motion.path
            d={isBlackToWhite ? "M0,0 L100,100" : "M100,0 L0,100"}
            stroke="rgb(249, 115, 22)"
            strokeWidth="4" // Glow effect
            fill="none"
            strokeDasharray="141"
            strokeDashoffset={constructionProgress}
            style={{
              opacity: beamGlow,
              filter: "blur(3px)",
            }}
          />
        </motion.svg>

        {/* ENHANCED STRUCTURAL CONNECTION POINTS */}
        <motion.div
          style={{ opacity: beamOpacity }}
          className="absolute top-0 left-0 w-3 h-3 bg-orange-500 transform -translate-x-1.5 -translate-y-1.5 rounded-sm shadow-lg shadow-orange-500/50"
        />

        <motion.div
          style={{ opacity: beamOpacity }}
          className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 transform translate-x-1.5 translate-y-1.5 rounded-sm shadow-lg shadow-orange-500/50"
        />

        {/* ADDITIONAL CONNECTION POINTS FOR MORE VISUAL INTEREST */}
        <motion.div
          style={{ opacity: beamOpacity }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-400 transform -translate-x-1 -translate-y-1 rounded-full"
        />
      </motion.div>

      {/* CLEAN GEOMETRIC DIVIDER */}
      <svg
        className={`absolute inset-0 w-full h-full text-${nextBgColor} pointer-events-none`}
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points={points} fill="currentColor" />
      </svg>
    </div>
  );
}
