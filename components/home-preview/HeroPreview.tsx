"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldUseFallback, setShouldUseFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Vercel & Cross-Platform Optimized Video Setup
    const optimizeVideo = () => {
      video.playsInline = true;
      video.muted = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("preload", "auto"); // More aggressive for instant load
      video.setAttribute("crossOrigin", "anonymous"); // Critical for Vercel CDN

      // Force immediate loading
      video.load();
    };

    optimizeVideo();

    // Event Handlers for Perfect Playback
    const handleCanPlayThrough = () => {
      // Video can play without interruption
      console.log("Video ready to play through");
      setIsVideoLoaded(true);
      setShouldUseFallback(false);

      // Force play on all devices
      video.play().catch((e) => {
        console.log("Autoplay blocked but video ready");
        setIsVideoLoaded(true);
      });
    };

    const handleLoadedData = () => {
      // Initial data loaded - good sign
      console.log("Video data loaded");
      setIsVideoLoaded(true);
    };

    const handleWaiting = () => {
      // Buffering detected
      console.log("Video buffering");
      setShouldUseFallback(true);
    };

    const handlePlaying = () => {
      // Smooth playback achieved
      console.log("Video playing smoothly");
      setShouldUseFallback(false);
      setIsVideoLoaded(true);
    };

    const handleError = () => {
      // Fallback to image on error
      console.error("Video failed to load");
      setShouldUseFallback(true);
    };

    const handleStalled = () => {
      // Network issues
      console.log("Video stalled, using fallback");
      setShouldUseFallback(true);
    };

    // Add all performance event listeners
    video.addEventListener("canplaythrough", handleCanPlayThrough);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("error", handleError);
    video.addEventListener("stalled", handleStalled);

    // Progressive loading check
    const checkBufferProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const currentTime = video.currentTime;

        // If we have sufficient buffer, we're good
        if (bufferedEnd - currentTime > 2) {
          setShouldUseFallback(false);
        }
      }
    };

    video.addEventListener("progress", checkBufferProgress);

    // Smart timeout - different strategies for different scenarios
    const loadTimeout = setTimeout(() => {
      if (!isVideoLoaded) {
        console.log(
          "Smart timeout: Video taking too long, optimizing experience"
        );
        setShouldUseFallback(true);

        // Still try to play if possible
        video.play().catch(() => {
          // If it fails, we already have fallback active
        });
      }
    }, 2500); // Reduced timeout for faster fallback

    return () => {
      // Cleanup all event listeners
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("error", handleError);
      video.removeEventListener("stalled", handleStalled);
      video.removeEventListener("progress", checkBufferProgress);
      clearTimeout(loadTimeout);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* ULTRA-OPTIMIZED VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        poster="/hero-fallback.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: 1000,
          willChange: "transform",
        }}
      >
        <source src="/heroPreview.mp4" type="video/mp4" />
        {/* Consider adding WebM format for even better performance */}
        {/* <source src="/heroPreview.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      {/* SMART FALLBACK SYSTEM */}
      {(shouldUseFallback || !isVideoLoaded) && (
        <div
          className="absolute inset-0 w-full h-full object-cover z-5 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/hero-fallback.jpg")',
            // Ensure fallback is also hardware accelerated
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        />
      )}

      {/* OPTIMIZED GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-br from-black/85 via-black/45 to-black/25"
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      />

      {/* CONTENT - Optimized for all screen sizes */}
      <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-4 sm:space-y-5 md:space-y-6"
        >
          {/* Tagline - Responsive */}
          <div className="flex items-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 mr-2 sm:mr-3" />
            <span className="font-inter text-orange-500 font-medium text-xs sm:text-sm tracking-widest uppercase">
              ENGINEERING EXCELLENCE
            </span>
          </div>

          {/* Main Headline - Perfectly Responsive */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-oswald text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight text-white"
          >
            BUILDING
            <br />
            <span className="text-orange-500">THE FUTURE</span>
          </motion.h1>

          {/* Description - Responsive text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-inter text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-full"
          >
            A dynamic, fast-growing and multidimensional organization providing
            comprehensive services in architecture, engineering, and
            construction.
          </motion.p>

          {/* CTA Button - Responsive sizing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-orange-500 text-black font-bold text-base sm:text-lg rounded-none uppercase tracking-wider transition-all duration-300 hover:bg-white flex items-center justify-center gap-2 font-inter border-2 border-orange-500 hover:border-white"
            >
              Get In Touch
              <ArrowRight size={16} className="sm:w-18" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-xs sm:text-sm font-inter text-center"
        >
          SCROLL TO EXPLORE
        </motion.div>
      </div>

      {/* Performance Monitor (Development only) */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-4 right-4 z-30 bg-black/70 text-white text-xs p-2 rounded">
          Video: {isVideoLoaded ? "✅ Loaded" : "🔄 Loading"}
          <br />
          Fallback: {shouldUseFallback ? "✅ Active" : "❌ Inactive"}
        </div>
      )}
    </section>
  );
}
