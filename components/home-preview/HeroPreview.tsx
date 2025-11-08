"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Nuclear option - just make the fucking video play
  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // If it fails, try again after a short delay
          setTimeout(() => {
            videoRef.current?.play();
          }, 500);
        });
      }
    };

    // Try immediately
    playVideo();

    // Try again when page becomes visible
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        playVideo();
      }
    });

    // Try on any user interaction
    const handleUserInteraction = () => {
      playVideo();
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* NO PLAY BUTTONS, NO MOBILE DETECTION, JUST THE FUCKING VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/heroPreview.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-md lg:max-w-lg space-y-6"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight font-heading uppercase">
            PYRAMIDS CONSULTING ENGINEERS & ARCHITECTS
          </h1>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans">
            A dynamic, fast-growing and multidimensional organization providing
            Engineering & Architectural Services.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-orange-500 text-white font-bold text-lg rounded-none uppercase tracking-wider transform transition-all duration-300 hover:bg-orange-600 flex items-center gap-2 font-heading"
          >
            Get In Touch
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
