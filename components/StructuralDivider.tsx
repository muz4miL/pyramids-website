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

  // Professional architectural animations
  const constructionProgress = useTransform(
    scrollYProgress,
    [0, 0.6],
    [100, 0]
  );
  const sectionReveal = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Structural elements
  const beamOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.03]);

  const isBlackToWhite = direction === "black-to-white";
  const bgColor = isBlackToWhite ? "bg-black" : "bg-white";
  const nextBgColor = isBlackToWhite ? "white" : "black";
  const points = isBlackToWhite ? "0,0 100,0 100,100" : "0,0 100,0 0,100";

  return (
    <div
      ref={ref}
      className={`relative h-20 md:h-28 lg:h-36 z-30 overflow-hidden ${bgColor} ${className}`}
    >
      {/* STRUCTURAL ENGINEERING GRID */}
      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 structural-grid"
      />

      {/* MAIN STRUCTURAL CONTAINER */}
      <motion.div
        style={{ opacity: sectionReveal }}
        className="relative h-full w-full"
      >
        {/* ENGINEERING BEAM ANIMATION */}
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          style={{ opacity: beamOpacity }}
        >
          {/* PRIMARY STRUCTURAL BEAM */}
          <motion.path
            d={isBlackToWhite ? "M0,0 L100,100" : "M100,0 L0,100"}
            stroke="rgb(249, 115, 22)"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="141"
            strokeDashoffset={constructionProgress}
            style={{
              filter: "drop-shadow(0 0 2px rgb(249, 115, 22, 0.5))",
            }}
          />
        </motion.svg>

        {/* STRUCTURAL CONNECTION POINTS */}
        <motion.div
          style={{ opacity: beamOpacity }}
          className="absolute top-0 left-0 w-2 h-2 bg-orange-500 transform -translate-x-1 -translate-y-1"
        />

        <motion.div
          style={{ opacity: beamOpacity }}
          className="absolute bottom-0 right-0 w-2 h-2 bg-orange-500 transform translate-x-1 translate-y-1"
        />
      </motion.div>

      {/* CLEAN GEOMETRIC DIVIDER - NO DISTRACTIONS */}
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
