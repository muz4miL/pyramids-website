"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroPreview() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      // In your HeroPreview.tsx - Replace the video section with this:
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none" // Critical - don't preload the video
        poster="/hero-poster.jpg" // Make sure this exists and is optimized
        className="absolute inset-0 w-full h-full object-cover z-0"
        onLoadedData={() => console.log("Video loaded")}
      >
        <source src="/heroPreview.mp4" type="video/mp4" />
      </video>
      {/* Adjusted Gradient Overlay - Stronger on left, lighter in center */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      {/* Text Content - Positioned to avoid the central building */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-md lg:max-w-lg space-y-6"
        >
          {/* Compact Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            PYRAMIDS CONSULTING ENGINEERS & ARCHITECTS
          </h1>

          {/* Compact Sub-headline */}
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            A dynamic, fast-growing and multidimensional organization providing
            Engineering & Architectural Services.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2"
          >
            Get In Touch
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
