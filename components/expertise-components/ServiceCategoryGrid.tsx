"use client";

import { BridgeIcon } from "@/components/icons/BridgeIcon";
import { LightningIcon } from "@/components/icons/LightningIcon";
import { ModernBuildingIcon } from "@/components/icons/ModernBuildingIcon";
import { TownPlanningIcon } from "@/components/icons/TownPlanningIcon";
import { WaterSupplyIcon } from "@/components/icons/WaterSupplyIcon";
import { RenewableEnergyIcon } from "@/components/icons/RenewableEnergyIcon";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServiceCategoryGrid() {
  const [isMobile, setIsMobile] = useState(false);

  // Use a more reliable threshold that works on mobile
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.05 : 0.2, // Very low threshold for mobile
    triggerOnce: false,
    rootMargin: isMobile ? "-50px" : "-100px", // Adjust trigger point
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const expertiseAreas = [
    {
      icon: ModernBuildingIcon,
      title: "Modern Architecture",
      description:
        "Innovative architectural designs for commercial, residential, and institutional complexes.",
      projects: "15+ Major Projects",
      highlight: "20 Stories Highest",
      color: "from-orange-400/80 to-orange-500/90",
    },
    {
      icon: BridgeIcon,
      title: "Bridge Engineering",
      description:
        "Design and construction of bridges up to 40m spans with structural excellence and precision engineering.",
      projects: "5+ Bridge Projects",
      highlight: "40M Longest Span",
      color: "from-orange-400/80 to-orange-500/90",
    },
    {
      icon: LightningIcon,
      title: "Hydro Power",
      description:
        "Renewable energy solutions with expertise up to 145MW hydro power capacity and grid integration.",
      projects: "3+ Power Projects",
      highlight: "145MW Capacity",
      color: "from-orange-400/80 to-orange-500/90",
    },
    {
      icon: RenewableEnergyIcon,
      title: "Renewable Energy",
      description:
        "Sustainable energy solutions including solar, hydro, and alternative power generation systems.",
      projects: "13+ Energy Projects",
      highlight: "Clean Energy Focus",
      color: "from-orange-400/80 to-orange-500/90",
    },
    {
      icon: TownPlanningIcon,
      title: "Town Planning",
      description:
        "Comprehensive urban planning, infrastructure development, and sustainable city solutions.",
      projects: "3+ Planning Projects",
      highlight: "Master Planning",
      color: "from-orange-400/80 to-orange-500/90",
    },
    {
      icon: WaterSupplyIcon,
      title: "Water Supply Systems",
      description:
        "Sustainable water management, treatment plants, and supply infrastructure development.",
      projects: "18+ Water Projects",
      highlight: "Clean Water Solutions",
      color: "from-orange-400/80 to-orange-500/90",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-20 relative overflow-hidden transition-all duration-1000 ${
        inView
          ? "bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]"
          : "bg-gradient-to-br from-white via-gray-50 to-gray-100"
      }`}
    >
      {/* Dynamic background accent that flips colors */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          inView
            ? "opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 to-transparent"
            : "opacity-[0.05] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 to-transparent"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADING - With scroll effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div
              className={`w-4 h-4 mr-3 transition-colors duration-1000 ${
                inView ? "bg-orange-500" : "bg-orange-400"
              }`}
            />
            <span
              className={`font-inter font-medium text-sm tracking-widest uppercase transition-colors duration-1000 ${
                inView ? "text-orange-500" : "text-orange-600"
              }`}
            >
              CORE EXPERTISE
            </span>
          </div>

          <h2
            className={`font-oswald text-3xl md:text-4xl lg:text-5xl font-medium uppercase leading-tight transition-colors duration-1000 ${
              inView ? "text-white" : "text-gray-900"
            }`}
          >
            Comprehensive Engineering
            <br className="hidden md:block" />& Architectural Services
          </h2>
        </motion.div>

        {/* Expertise Cards - With scroll effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {expertiseAreas.map((expertise, index) => {
            const IconComponent = expertise.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`group relative rounded-2xl border p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                  inView
                    ? "bg-[#111111] border-gray-700 hover:border-orange-400/40 hover:shadow-[0_0_25px_-10px_rgba(249,115,22,0.3)]"
                    : "bg-white border-gray-300 hover:border-orange-500 hover:shadow-[0_0_25px_-10px_rgba(249,115,22,0.2)]"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${expertise.color} rounded-xl flex items-center justify-center mb-4 md:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>

                {/* Text */}
                <h3
                  className={`font-oswald text-lg md:text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300 ${
                    inView ? "text-white" : "text-gray-900"
                  }`}
                >
                  {expertise.title}
                </h3>

                <p
                  className={`font-inter text-sm leading-relaxed min-h-[60px] ${
                    inView ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {expertise.description}
                </p>

                <div
                  className={`flex items-center justify-between pt-4 border-t mt-4 md:mt-5 ${
                    inView ? "border-gray-600" : "border-gray-200"
                  }`}
                >
                  <div>
                    <div
                      className={`font-inter text-xs uppercase tracking-wide ${
                        inView ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      Projects
                    </div>
                    <div
                      className={`font-oswald text-sm font-bold ${
                        inView ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {expertise.projects}
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`font-inter text-xs uppercase tracking-wide ${
                        inView ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      Highlight
                    </div>
                    <div className="font-oswald text-sm font-bold text-orange-500">
                      {expertise.highlight}
                    </div>
                  </div>
                </div>

                {/* Accent glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/3 to-transparent transition-opacity duration-500 -z-10 ${
                    inView ? "opacity-0 group-hover:opacity-100" : "opacity-0"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
