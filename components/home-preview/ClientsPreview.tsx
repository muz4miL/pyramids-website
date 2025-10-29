"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ClientsPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const clientLogos = [
    {
      name: "Danish Red Cross",
      logo: "/clients/danish.png",
      type: "horizontal",
    },
    {
      name: "Saif Associates",
      logo: "/clients/saifLogo.png",
      type: "vertical",
    },
    {
      name: "Rabbani Associates",
      logo: "/clients/rabani-logo.png",
      type: "horizontal",
    },
    {
      name: "Canadian Red Cross",
      logo: "/clients/canadian-logo.png",
      type: "horizontal",
    },
    {
      name: "German Red Cross",
      logo: "/clients/germanLogo.png",
      type: "horizontal",
    },
    {
      name: "DHA Peshawar",
      logo: "/clients/Dha-logo.png",
      type: "vertical",
    },
    {
      name: "Reachout to Asia",
      logo: "/clients/asia-logo.png",
      type: "horizontal",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      id="clients"
      className="py-24 sm:py-28 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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

        {/* Premium Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Enhanced Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white to-transparent z-10" />

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="overflow-hidden py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-12" // Optimal spacing
              animate={{
                x: [0, -1960], // Adjusted for 7 logos
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Smooth speed
                  ease: "linear",
                },
              }}
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {duplicatedLogos.map((client, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Larger Logo Container */}
                  <div
                    className={`
                    bg-white rounded-xl border-2 border-gray-200 
                    flex items-center justify-center p-6 
                    hover:border-yellow-400 hover:shadow-xl 
                    transition-all duration-500
                    ${
                      client.type === "vertical" ? "w-48 h-40" : "w-56 h-32"
                    } // Larger containers
                  `}
                  >
                    <div
                      className={`
                      relative
                      ${
                        client.type === "vertical" ? "w-32 h-28" : "w-40 h-20"
                      } // Much larger image containers
                    `}
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain opacity-90 group-hover:opacity-100 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        quality={100}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Premium Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {[
            {
              number: "50+",
              label: "Satisfied Clients",
              description: "Long-term partnerships built on trust",
            },
            {
              number: "100%",
              label: "Client Retention",
              description: "Repeat business through excellence",
            },
            {
              number: "25+",
              label: "International Partners",
              description: "Global collaborations and projects",
            },
            {
              number: "15+",
              label: "Government Agencies",
              description: "Trusted by public sector institutions",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group text-center p-8 bg-gradient-to-br from-white to-gray-50/80 rounded-xl border-2 border-gray-100 hover:border-yellow-400 hover:shadow-xl transition-all duration-500"
            >
              <div className="text-4xl font-bold text-black mb-3 group-hover:text-yellow-400 transition-colors duration-500">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </div>
              {/* Animated underline */}
              <div className="w-0 group-hover:w-12 h-0.5 bg-yellow-400 mx-auto mt-4 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-6 bg-black text-white px-10 py-5 rounded-xl border-2 border-yellow-400 shadow-2xl">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-base font-bold tracking-widest uppercase">
              Trusted Since 2006 • PEC Certified • ISO Standards
            </span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
