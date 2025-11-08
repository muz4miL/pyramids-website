"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SatisfiedClientsIcon from "@/components/icons/SatisfiedClientsIcon";
import ClientRetentionIcon from "@/components/icons/ClientRetentionIcon";
import InternationalPartnersIcon from "@/components/icons/InternationalPartnersIcon";
import GovernmentAgenciesIcon from "@/components/icons/GovernmentAgenciesIcon";

interface ClientStat {
  number: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function StatsPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clientStats: ClientStat[] = [
    {
      number: "50+",
      label: "Satisfied Clients",
      description: "Long-term partnerships built on trust and excellence",
      icon: SatisfiedClientsIcon,
    },
    {
      number: "100%",
      label: "Client Retention",
      description: "Repeat business through consistent delivery",
      icon: ClientRetentionIcon,
    },
    {
      number: "25+",
      label: "International Partners",
      description: "Global collaborations and cross-border projects",
      icon: InternationalPartnersIcon,
    },
    {
      number: "15+",
      label: "Government Agencies",
      description: "Trusted by public sector institutions nationwide",
      icon: GovernmentAgenciesIcon,
    },
  ];

  return (
    <section className="py-16 lg:py-28 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* PREMIUM HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
            <span className="text-xs lg:text-sm font-bold text-orange-500 tracking-widest uppercase font-heading">
              By The Numbers
            </span>
            <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight font-heading mb-6">
            Engineering <span className="text-orange-500">Excellence</span> in
            Numbers
          </h2>

          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-6"></div>

          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-sans">
            Quantifying our impact through years of dedicated service and
            successful project delivery.
          </p>
        </motion.div>

        {/* STATS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {clientStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.7 + index * 0.15 }}
                className="group p-6 bg-white border border-gray-200 rounded-none
                           transition-all duration-500 ease-in-out
                           hover:-translate-y-1 hover:scale-[1.02] 
                           hover:border-orange-500 
                           hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="text-center">
                  {/* Custom Icon */}
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-orange-500" />
                  </div>

                  {/* Stat Number */}
                  <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-3 font-heading">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-black mb-3 font-heading uppercase">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-gray-600 leading-relaxed font-sans">
                    {stat.description}
                  </div>

                  {/* Orange Accent Line on Hover */}
                  <div className="w-0 group-hover:w-12 h-0.5 bg-orange-500 mx-auto mt-4 transition-all duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
