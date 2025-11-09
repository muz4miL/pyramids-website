"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force video to play and handle any autoplay restrictions
      const playVideo = async () => {
        try {
          await video.play();
          setIsVideoLoaded(true);
        } catch (error) {
          // If autoplay fails, mute and try again (most browsers allow muted autoplay)
          video.muted = true;
          try {
            await video.play();
            setIsVideoLoaded(true);
          } catch (err) {
            console.log("Autoplay failed, user interaction required");
          }
        }
      };

      // Preload video for better performance
      video.preload = "auto";
      video.load();

      // Try to play when video is ready
      if (video.readyState >= 3) {
        playVideo();
      } else {
        video.addEventListener("loadeddata", playVideo);
      }

      return () => {
        video.removeEventListener("loadeddata", playVideo);
      };
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Optimized Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          // Fallback background while video loads
          backgroundColor: "#000",
        }}
      >
        <source src="/heroPreview.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Fallback image in case video fails */}
      {!isVideoLoaded && (
        <div
          className="absolute inset-0 w-full h-full object-cover z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/hero-fallback.jpg")', // Add a fallback image
          }}
        />
      )}

      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-black/30" />

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

          {/* Main Headline - Matches other pages */}
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

          {/* CTA Button - SQUARISH ARCHITECTURAL STYLE */}
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
