"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BridgeIcon } from "@/components/icons/BridgeIcon";
import { LightningIcon } from "@/components/icons/LightningIcon";
import { ModernBuildingIcon } from "@/components/icons/ModernBuildingIcon";
import { TownPlanningIcon } from "@/components/icons/TownPlanningIcon";
import { WaterSupplyIcon } from "@/components/icons/WaterSupplyIcon";
import { RenewableEnergyIcon } from "@/components/icons/RenewableEnergyIcon";

export default function ExpertisePreview({
  showHeadline = true,
  showCTA = true,
}: {
  showHeadline?: boolean;
  showCTA?: boolean;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertiseAreas = [
    {
      icon: BridgeIcon,
      title: "Bridge Engineering",
      description:
        "Design and construction of bridges up to 40m spans with structural excellence and precision engineering.",
      projects: "25+ Bridge Projects",
      highlight: "40M Longest Span",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
    {
      icon: LightningIcon,
      title: "Hydro Power",
      description:
        "Renewable energy solutions with expertise up to 145MW hydro power capacity and grid integration.",
      projects: "15+ Power Projects",
      highlight: "145MW Capacity",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
    {
      icon: ModernBuildingIcon,
      title: "Modern Architecture",
      description:
        "Innovative architectural designs for commercial, residential, and institutional complexes.",
      projects: "180+ Building Projects",
      highlight: "20 Stories Highest",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
    {
      icon: RenewableEnergyIcon,
      title: "Renewable Energy",
      description:
        "Sustainable energy solutions including solar, hydro, and alternative power generation systems.",
      projects: "22+ Energy Projects",
      highlight: "Clean Energy Focus",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
    {
      icon: TownPlanningIcon,
      title: "Town Planning",
      description:
        "Comprehensive urban planning, infrastructure development, and sustainable city solutions.",
      projects: "12+ Planning Projects",
      highlight: "Master Planning",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
    {
      icon: WaterSupplyIcon,
      title: "Water Supply Systems",
      description:
        "Sustainable water management, treatment plants, and supply infrastructure development.",
      projects: "18+ Water Projects",
      highlight: "Clean Water Solutions",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#facc15_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header - Conditional */}
        {showHeadline && (
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
                Our Core Expertise
              </span>
              <div className="w-8 h-0.5 bg-yellow-400"></div>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Engineering <span className="text-yellow-400">Excellence</span>{" "}
              Across Disciplines
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-yellow-400 mx-auto mb-8"
            ></motion.div>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Specialized multidisciplinary engineering services delivering
              innovative solutions across Pakistan's infrastructure landscape
              with 25+ years of proven expertise and 250+ successful projects.
            </p>
          </motion.div>
        )}

        {/* Expertise Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseAreas.map((expertise, index) => {
            const IconComponent = expertise.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group relative bg-[#111111] rounded-2xl border border-gray-800 hover:border-yellow-400/60 p-8 hover:shadow-[0_0_30px_-8px_rgba(250,204,21,0.4)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${expertise.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <IconComponent className="w-8 h-8 text-black" />
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {expertise.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                  {expertise.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700 mt-6">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Projects
                    </div>
                    <div className="text-sm font-bold text-white">
                      {expertise.projects}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Highlight
                    </div>
                    <div className="text-sm font-bold text-yellow-400">
                      {expertise.highlight}
                    </div>
                  </div>
                </div>

                {/* Accent glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA - Conditional */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-lg p-12 text-white relative overflow-hidden">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Engineer Your Vision?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Leverage our multidisciplinary expertise for your next
                engineering challenge. From concept to completion, we deliver
                excellence across all project phases.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-none hover:bg-white hover:text-black transition-all duration-300 border-2 border-yellow-400 transform hover:scale-105">
                  Consult Our Experts
                </button>
                <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-none hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  View Full Services
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
