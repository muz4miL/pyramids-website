// components/home-preview/ClientsPreview.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function ClientsPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Your client logos - replace with actual paths
  const clientLogos = [
    { name: "Danish Red Cross", logo: "/clients/danish-red-cross.png" },
    { name: "Saif Associates", logo: "/clients/saif-associates.png" },
    { name: "Rabbani Associates", logo: "/clients/rabbani-associates.png" },
    { name: "Canadian Red Cross", logo: "/clients/canadian-red-cross.png" },
    { name: "German Red Cross", logo: "/clients/german-red-cross.png" },
    { name: "DHA Peshawar", logo: "/clients/dha-peshawar.png" },
    { name: "45 Engineers Division", logo: "/clients/45-engineers.png" },
    { name: "JS Builders", logo: "/clients/js-builders.png" },
  ];

  // Duplicate for seamless loop
  const allLogos = [...clientLogos, ...clientLogos];
  const logoCount = clientLogos.length;

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <span className="text-sm font-bold text-yellow-400 tracking-wider uppercase">
              Trusted By
            </span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Our <span className="text-yellow-400">Prestigious</span> Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with leading organizations and institutions
            across Pakistan and internationally, delivering excellence in every
            project.
          </p>
        </motion.div>

        {/* Infinite Scroll Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="flex animate-infinite-scroll hover:pause-animation">
              {allLogos.map((client, index) => (
                <div key={index} className="flex-shrink-0 px-8 group">
                  <div className="w-40 h-20 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-4 group-hover:border-yellow-400 group-hover:shadow-lg transition-all duration-300">
                    <div className="relative w-32 h-12">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Client Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "50+", label: "Satisfied Clients" },
            { number: "100%", label: "Client Retention" },
            { number: "25+", label: "International Partners" },
            { number: "15+", label: "Government Agencies" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-yellow-400 transition-all duration-300 group"
            >
              <div className="text-2xl lg:text-3xl font-bold text-black mb-2 group-hover:text-yellow-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-160px * ${logoCount}));
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          display: flex;
          width: calc(160px * ${allLogos.length});
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
