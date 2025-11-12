"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper CSS (important order)
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation"; /* For next/prev arrows */
import "swiper/css/pagination";

// Your global styles (this should include the .hero-swiper bullet overrides)
import "@/app/globals.css";

// Video slide type
interface VideoSlide {
  id: number;
  video: string;
  poster: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function HeroPreview() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Define video slides
  const videoSlides: VideoSlide[] = useMemo(
    () => [
      {
        id: 1,
        video: "/homepage-vids/1.mp4",
        poster: "/homepage-vids/posters/1.png",
        title: "BUILDING",
        subtitle: "THE FUTURE",
        description:
          "A dynamic, fast-growing and multidimensional organization providing comprehensive services in architecture, engineering, and construction.",
      },
      {
        id: 2,
        video: "/homepage-vids/2.mp4",
        poster: "/homepage-vids/posters/2.png",
        title: "ENGINEERING",
        subtitle: "EXCELLENCE",
        description:
          "Delivering innovative solutions with precision engineering and architectural mastery across all project scales.",
      },
      {
        id: 3,
        video: "/homepage-vids/3.mp4",
        poster: "/homepage-vids/posters/3.png",
        title: "DESIGNING",
        subtitle: "LANDMARKS",
        description:
          "Creating iconic structures that define skylines and push the boundaries of modern architecture.",
      },
    ],
    []
  );

  // Optimized video preloading for mobile
  useEffect(() => {
    if (isMobile) {
      // On mobile, only preload the first video initially
      const firstVideo = document.createElement("video");
      firstVideo.src = videoSlides[0].video;
      firstVideo.preload = "metadata"; // Use metadata instead of auto for mobile
      firstVideo.load();
    } else {
      // On desktop, preload all videos
      videoSlides.forEach((slide) => {
        const video = document.createElement("video");
        video.src = slide.video;
        video.preload = "auto";
        video.load();
      });
    }
  }, [videoSlides, isMobile]);

  const handleVideoReady = () => {
    setIsVideoLoaded(true);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.realIndex);

    // Preload next video when slide changes on mobile
    if (isMobile) {
      const nextIndex = (swiper.realIndex + 1) % videoSlides.length;
      const nextVideo = document.createElement("video");
      nextVideo.src = videoSlides[nextIndex].video;
      nextVideo.preload = "metadata";
      nextVideo.load();
    }

    if (isPlaying) {
      videoRefs.current.forEach((video) => {
        if (video) video.play().catch(() => {});
      });
    }
  };

  const addVideoRef = (el: HTMLVideoElement | null, index: number) => {
    if (el) {
      videoRefs.current[index] = el;

      // Optimize video for mobile
      if (isMobile) {
        el.playsInline = true;
        el.muted = true;
        el.preload = "metadata";
      }
    }
  };

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      videoRefs.current.forEach((v) => v?.pause());
      swiperRef.current?.autoplay?.stop();
    } else {
      videoRefs.current.forEach((v) => {
        if (v) {
          v.play().catch((e) => {
            console.log("Video play failed:", e);
            // Fallback: restart swiper autoplay even if video fails
            swiperRef.current?.autoplay?.start();
          });
        }
      });
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("expertise");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">
      {/* --- TEXT SECTION --- */}
      <div className="hero-text-content">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start text-left w-full md:max-w-md lg:max-w-lg space-y-4 sm:space-y-5 md:space-y-6"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-oswald text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight"
          >
            {videoSlides[activeSlide]?.title}
            <br className="hidden md:block" />{" "}
            <span className="text-orange-500">
              {videoSlides[activeSlide]?.subtitle}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-inter text-sm sm:text-base md:text-lg leading-relaxed max-w-full md:max-w-lg"
          >
            {videoSlides[activeSlide]?.description}
          </motion.p>

          {/* CTA Button */}
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

      {/* --- VIDEO SWIPER SECTION --- */}
      <div className="hero-swiper-wrapper">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="hero-swiper"
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          loop={true}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          navigation={true}
          allowTouchMove={false}
          speed={1000}
          onSlideChange={handleSlideChange}
          onInit={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {videoSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className={`video-slide ${
                  isMobile ? "mobile-video-slide" : ""
                }`}
              >
                <video
                  ref={(el) => addVideoRef(el, index)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={isMobile ? "metadata" : "auto"}
                  poster={slide.poster}
                  className={`hero-video ${
                    isMobile ? "object-contain w-full h-full" : "object-cover"
                  }`}
                  onCanPlayThrough={handleVideoReady}
                  onError={() =>
                    console.error(`Video ${index + 1} failed to load`)
                  }
                >
                  <source src={slide.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Play/Pause Button */}
        <div className="video-controls" onClick={togglePlayPause}>
          {isPlaying ? <Pause /> : <Play />}
        </div>

        {/* Desktop-only overlay */}
        <div className="desktop-overlay" />

        {/* Swiper pagination container */}
        <div className="swiper-pagination" />
      </div>
    </div>
  );
}
