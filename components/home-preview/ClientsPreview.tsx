"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import SatisfiedClientsIcon from "@/components/icons/SatisfiedClientsIcon";
import ClientRetentionIcon from "@/components/icons/ClientRetentionIcon";
import InternationalPartnersIcon from "@/components/icons/InternationalPartnersIcon";
import GovernmentAgenciesIcon from "@/components/icons/GovernmentAgenciesIcon";

export default function ClientsPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🎯 ENHANCED SIZE CONTROL WITH MOBILE OPTIMIZATION
  const sizeOption = "xl";

  const sizeConfig = {
    sm: {
      container: { horizontal: "w-32 h-20", vertical: "w-28 h-24" },
      image: { horizontal: "w-24 h-12", vertical: "w-20 h-16" },
      mobile: { container: "w-28 h-16", image: "w-20 h-10" },
    },
    md: {
      container: { horizontal: "w-40 h-24", vertical: "w-36 h-28" },
      image: { horizontal: "w-32 h-16", vertical: "w-28 h-20" },
      mobile: { container: "w-36 h-20", image: "w-28 h-14" },
    },
    lg: {
      container: { horizontal: "w-48 h-28", vertical: "w-40 h-32" },
      image: { horizontal: "w-40 h-20", vertical: "w-32 h-24" },
      mobile: { container: "w-44 h-24", image: "w-36 h-18" },
    },
    xl: {
      container: { horizontal: "w-56 h-32", vertical: "w-48 h-36" },
      image: { horizontal: "w-48 h-24", vertical: "w-40 h-28" },
      mobile: { container: "w-52 h-28", image: "w-44 h-22" },
    },
    xxl: {
      container: { horizontal: "w-64 h-36", vertical: "w-56 h-40" },
      image: { horizontal: "w-56 h-28", vertical: "w-48 h-32" },
      mobile: { container: "w-60 h-32", image: "w-52 h-26" },
    },
  };

  const sizes = sizeConfig[sizeOption];

  const clientLogos = [
    {
      name: "Danish Red Cross",
      logo: "/clients/danish.png",
      type: "horizontal",
      featured: true,
    },
    {
      name: "Saif Associates",
      logo: "/clients/saifLogo.png",
      type: "vertical",
      featured: true,
    },
    {
      name: "Rabbani Associates",
      logo: "/clients/rabani-logo.png",
      type: "horizontal",
      featured: true,
    },
    {
      name: "Canadian Red Cross",
      logo: "/clients/canadian-logo.png",
      type: "horizontal",
      featured: false,
    },
    {
      name: "German Red Cross",
      logo: "/clients/germanLogo.png",
      type: "horizontal",
      featured: true,
    },
    {
      name: "DHA Peshawar",
      logo: "/clients/Dha-logo.png",
      type: "vertical",
      featured: true,
    },
    {
      name: "Reachout to Asia",
      logo: "/clients/asia-logo.png",
      type: "horizontal",
      featured: false,
    },
    {
      name: "UN Agencies",
      logo: "/clients/un-logo.png",
      type: "horizontal",
      featured: true,
    },
    {
      name: "Punjab Government",
      logo: "/clients/punjab-govt.png",
      type: "vertical",
      featured: true,
    },
  ];

  // Filter featured clients for better mobile experience
  const featuredClients = clientLogos.filter((client) => client.featured);
  const duplicatedLogos = [...featuredClients, ...featuredClients];

  // 🎯 PREMIUM STATS DATA WITH CUSTOM ICONS
  const clientStats = [
    {
      number: "50+",
      label: "Satisfied Clients",
      description: "Long-term partnerships built on trust",
      icon: SatisfiedClientsIcon,
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      number: "100%",
      label: "Client Retention",
      description: "Repeat business through excellence",
      icon: ClientRetentionIcon,
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      number: "25+",
      label: "International Partners",
      description: "Global collaborations and projects",
      icon: InternationalPartnersIcon,
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      number: "15+",
      label: "Government Agencies",
      description: "Trusted by public sector institutions",
      icon: GovernmentAgenciesIcon,
      gradient: "from-orange-500/10 to-red-500/10",
    },
  ];

  // 🎯 MOBILE-OPTIMIZED CAROUSEL CONFIG
  const carouselConfig = {
    desktop: {
      gap: 14,
      duration: 40,
      travelDistance: -1750,
    },
    mobile: {
      gap: 8,
      duration: 30,
      travelDistance: -1200,
    },
  };

  const config = isMobile ? carouselConfig.mobile : carouselConfig.desktop;

  return (
    <section
      id="clients"
      className="py-24 sm:py-28 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100/50 overflow-hidden relative"
    >
      {/* 🎯 ENHANCED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-black/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Premium Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-0.5 bg-yellow-400"></div>
            <span className="text-sm font-bold text-yellow-400 tracking-widest uppercase">
              Trusted Partnerships
            </span>
            <div className="w-8 h-0.5 bg-yellow-400"></div>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Our <span className="text-yellow-400">Prestigious</span> Clients
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-yellow-400 mx-auto mb-8"
          ></motion.div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Building lasting relationships with leading organizations and
            institutions across Pakistan and internationally, delivering
            engineering excellence in every collaboration.
          </p>
        </motion.div>

        {/* 🎯 ENHANCED GLASS MORPHISM CAROUSEL WITH MOBILE FIXES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Premium Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 lg:w-32 h-full bg-gradient-to-r from-white/95 via-white/40 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 lg:w-32 h-full bg-gradient-to-l from-white/95 via-white/40 to-transparent z-10" />

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden py-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-8 lg:gap-14"
              animate={{
                x: [0, config.travelDistance],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: config.duration,
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {duplicatedLogos.map((client, index) => {
                const containerSize = isMobile
                  ? sizes.mobile.container
                  : sizes.container[client.type];
                const imageSize = isMobile
                  ? sizes.mobile.image
                  : sizes.image[client.type];

                return (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 group"
                    whileHover={{
                      scale: isMobile ? 1 : 1.08,
                      y: isMobile ? 0 : -5,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className={`
                      bg-white/95 backdrop-blur-2xl rounded-3xl 
                      border border-white/70 
                      shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)]
                      flex items-center justify-center p-4 lg:p-8
                      hover:border-yellow-400/80 hover:shadow-[0_25px_80px_-12px_rgba(250,204,21,0.3)]
                      transition-all duration-700 ease-out
                      relative overflow-hidden
                      ${containerSize}
                    `}
                    >
                      {/* 🎯 ENHANCED GLASS MORPHISM EFFECT */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 pointer-events-none"></div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/5 transition-all duration-500 rounded-3xl"></div>

                      <div className={`relative ${imageSize} z-10`}>
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="object-contain opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                          quality={100}
                          priority={index < 4}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* 🎯 MOBILE INDICATOR */}
          {isMobile && (
            <div className="flex justify-center mt-6 lg:hidden">
              <div className="flex items-center gap-2 bg-black/80 text-white px-4 py-2 rounded-full backdrop-blur-xl">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">Swipe to explore</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* 🎯 ENHANCED PREMIUM STATS WITH GRADIENTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-20 lg:mt-24"
        >
          {clientStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.7 + index * 0.15 }}
                className="group text-center p-6 lg:p-8 rounded-3xl backdrop-blur-2xl bg-white/80 border border-white/60 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.12)] transition-all duration-700 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* 🎯 ANIMATED GRADIENT BACKGROUND */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl`}
                ></div>

                <div className="relative z-10">
                  {/* 🎯 ENHANCED ICON CONTAINER */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white/90 rounded-2xl border border-gray-200/70 group-hover:border-white/80 group-hover:bg-white/95 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold text-black mb-3 group-hover:text-gray-900 transition-colors duration-500">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-xl font-bold text-gray-800 mb-4 group-hover:text-black transition-colors duration-500">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                    {stat.description}
                  </div>

                  {/* Enhanced animated underline */}
                  <div className="w-0 group-hover:w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-6 transition-all duration-700 rounded-full shadow-lg shadow-yellow-400/30"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 🎯 ENHANCED PREMIUM TRUST BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex items-center gap-4 lg:gap-6 bg-black/95 backdrop-blur-2xl text-white px-6 lg:px-10 py-4 lg:py-5 rounded-2xl lg:rounded-3xl border-2 border-yellow-400/80 shadow-2xl hover:shadow-[0_25px_80px_-15px_rgba(250,204,21,0.4)] transition-all duration-500 hover:scale-105 group">
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50 group-hover:scale-125 transition-transform duration-500"></div>
            <span className="text-sm lg:text-base font-bold tracking-widest uppercase">
              Trusted Since 2006 • PEC Certified • ISO Standards
            </span>
            <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50 group-hover:scale-125 transition-transform duration-500"></div>
          </div>

          {/* 🎯 ADDITIONAL CLIENT TESTIMONIAL BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-6"
          >
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl text-gray-800 px-5 py-3 rounded-2xl border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full border-2 border-white shadow-lg"
                  ></div>
                ))}
              </div>
              <span className="text-sm font-semibold">
                250+ Projects Delivered
              </span>
              <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
