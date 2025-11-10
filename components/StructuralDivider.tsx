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

  // Enhanced animations for longer, more visible beams
  const constructionProgress = useTransform(
    scrollYProgress,
    [0, 0.9], // Extended range for much longer visibility
    [150, 0] // Increased from 120 for slower animation
  );
  const sectionReveal = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Enhanced structural elements - MUCH more prominent
  const beamOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const beamGlow = useTransform(scrollYProgress, [0.1, 0.6], [0, 0.9]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.05]);

  const isBlackToWhite = direction === "black-to-white";
  const bgColor = isBlackToWhite ? "bg-black" : "bg-white";
  const nextBgColor = isBlackToWhite ? "white" : "black";
  const points = isBlackToWhite ? "0,0 100,0 100,100" : "0,0 100,0 0,100";

  return (
    <div
      ref={ref}
      className={`relative h-20 md:h-28 lg:h-36 z-30 overflow-hidden ${bgColor} ${className}`}
    >
      {/* SUBTLE STRUCTURAL ENGINEERING GRID */}
      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 structural-grid"
      />

      {/* MAIN STRUCTURAL CONTAINER */}
      <motion.div
        style={{ opacity: sectionReveal }}
        className="relative h-full w-full"
      >
        {/* HIGHLY VISIBLE ENGINEERING BEAM ANIMATION */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          style={{ opacity: beamOpacity }}
        >
          {/* PRIMARY STRUCTURAL BEAM - CLEAN AND VISIBLE */}
          <motion.path
            d={isBlackToWhite ? "M0,0 L100,100" : "M100,0 L0,100"}
            stroke="rgb(255, 115, 0)" // Brighter orange
            strokeWidth="3"
            fill="none"
            strokeDasharray="141"
            strokeDashoffset={constructionProgress}
            style={{
              filter: "drop-shadow(0 0 8px rgb(255, 115, 0, 0.8))",
            }}
          />

          {/* SECONDARY GLOW BEAM - MORE PROMINENT */}
          <motion.path
            d={isBlackToWhite ? "M0,0 L100,100" : "M100,0 L0,100"}
            stroke="rgb(255, 140, 0)" // Even brighter orange
            strokeWidth="5"
            fill="none"
            strokeDasharray="141"
            strokeDashoffset={constructionProgress}
            style={{
              opacity: beamGlow,
              filter: "blur(3px)",
            }}
          />

          {/* TERTIARY BEAM FOR MAXIMUM VISIBILITY */}
          <motion.path
            d={isBlackToWhite ? "M0,0 L100,100" : "M100,0 L0,100"}
            stroke="rgb(249, 115, 22)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="141"
            strokeDashoffset={constructionProgress}
            style={{
              opacity: 0.6,
            }}
          />
        </motion.svg>

        {/* REMOVED ALL THOSE CHEAP ORANGE CIRCLES - KEEPING ONLY CLEAN BEAMS */}
      </motion.div>

      {/* CLEAN GEOMETRIC DIVIDER */}
      <svg
        className={`absolute inset-0 w-full h-full text-${nextBgColor} pointer-events-none`}
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points={points} fill="currentColor" />
      </svg>

      {/* PREMIUM ADDITION: SUBTLE PULSING GLOW */}
      <motion.div
        style={{ opacity: beamGlow }}
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-orange-500/5 to-transparent" />
      </motion.div>
    </div>
  );
}
