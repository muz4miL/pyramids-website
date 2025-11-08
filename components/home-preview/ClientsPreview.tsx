"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState, useEffect } from "react";

// Define TypeScript interfaces
interface ClientLogo {
  name: string;
  logo: string;
  type: "horizontal" | "vertical";
  featured?: boolean;
}

export default function ClientsPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
  ];

  // Filter featured clients and duplicate for seamless loop
  const featuredClients = clientLogos.filter((client) => client.featured);
  const duplicatedLogos = [
    ...featuredClients,
    ...featuredClients,
    ...featuredClients,
  ];

  return (
    <section
      id="clients"
      className="py-16 lg:py-24 bg-black overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* PREMIUM HEADER - SHORTER SECTION */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
            <span className="text-xs lg:text-sm font-bold text-orange-500 tracking-widest uppercase font-heading">
              Trusted Partnerships
            </span>
            <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight font-heading mb-6">
            Our <span className="text-orange-500">Prestigious</span> Clients
          </h2>

          {/* Thin Orange Accent Line */}
          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-6"></div>

          <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Trusted by leading organizations and institutions across Pakistan
            and internationally.
          </p>
        </motion.div>

        {/* INFINITE MARQUEE - PREMIUM CSS ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Black gradient overlays */}
          <div className="absolute left-0 top-0 w-20 lg:w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 lg:w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

          {/* Marquee Container */}
          <div className="overflow-hidden py-4">
            <div className="flex animate-marquee-fast">
              {duplicatedLogos.map((client, index) => (
                <div key={index} className="flex-shrink-0 group mx-4 lg:mx-6">
                  <div
                    className={`
                    flex items-center justify-center p-4 lg:p-6 
                    bg-neutral-900 border border-neutral-800 rounded-none
                    transition-all duration-500 ease-out
                    hover:border-orange-500 hover:bg-neutral-800
                    group-hover:shadow-lg group-hover:shadow-orange-500/20
                    ${isMobile ? "w-28 h-16" : "w-40 h-20"}
                  `}
                  >
                    {/* Logo Container - Centered */}
                    <div
                      className={`relative ${
                        isMobile ? "w-20 h-10" : "w-32 h-12"
                      } grayscale group-hover:grayscale-0 transition-all duration-500`}
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                        sizes="(max-width: 768px) 80px, 120px"
                        quality={100}
                        priority={index < 4}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
