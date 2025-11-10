"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile early
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const video = videoRef.current;
    if (video) {
      // CRITICAL: Set video attributes for performance
      video.playsInline = true;
      video.muted = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");

      // Use metadata preload for faster initial load
      video.preload = "metadata";

      const handleCanPlay = () => {
        // Video is ready to play without lag
        setIsVideoLoaded(true);
      };

      const handleLoadedData = () => {
        // Some data is loaded, try to play
        video
          .play()
          .then(() => {
            setIsVideoLoaded(true);
          })
          .catch((error) => {
            // If autoplay fails, still show video (it might play later)
            console.log("Autoplay blocked, but video is loaded");
            setIsVideoLoaded(true);
          });
      };

      const handleWaiting = () => {
        // Video is buffering - show fallback temporarily
        setIsVideoLoaded(false);
      };

      const handlePlaying = () => {
        // Video is playing smoothly
        setIsVideoLoaded(true);
      };

      // Event listeners for smooth playback
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("waiting", handleWaiting);
      video.addEventListener("playing", handlePlaying);

      // Force load the video
      video.load();

      // Fallback timeout - if video takes too long, show fallback
      const loadTimeout = setTimeout(() => {
        if (!isVideoLoaded) {
          console.log("Video loading timeout, using fallback");
        }
      }, 3000);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("waiting", handleWaiting);
        video.removeEventListener("playing", handlePlaying);
        clearTimeout(loadTimeout);
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* LAG-PROOF VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-fallback.jpg" // CRITICAL: Instant visual
        className="absolute inset-0 w-full h-full object-cover z-0"
        // Hardware acceleration for smooth playback
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        <source src="/heroPreview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* INSTANT FALLBACK - Shows immediately while video loads */}
      {!isVideoLoaded && (
        <div
          className="absolute inset-0 w-full h-full object-cover z-5 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/hero-fallback.jpg")',
          }}
        />
      )}

      {/* Performance-optimized gradient overlay */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-br from-black/85 via-black/45 to-black/25"
        style={{
          // Hardware accelerated overlay
          transform: "translateZ(0)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-md lg:max-w-lg space-y-6"
        >
          {/* Tagline */}
          <div className="flex items-center">
            <div className="w-4 h-4 bg-orange-500 mr-3" />
            <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
              ENGINEERING EXCELLENCE
            </span>
          </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight text-white"
          >
            BUILDING
            <br />
            <span className="text-orange-500">THE FUTURE</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-inter text-base md:text-lg text-gray-200 leading-relaxed"
          >
            A dynamic, fast-growing and multidimensional organization providing
            comprehensive services in architecture, engineering, and
            construction.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-black font-bold text-lg rounded-none uppercase tracking-wider transition-all duration-300 hover:bg-white flex items-center gap-2 font-inter border-2 border-orange-500 hover:border-white"
            >
              Get In Touch
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-sm font-inter"
        >
          SCROLL TO EXPLORE
        </motion.div>
      </div>
    </section>
  );
}
