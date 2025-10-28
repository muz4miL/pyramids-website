// components/home-preview/AboutPreview.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Award, Users, Target, Star } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const heritageStats = [
    {
      number: "2006",
      label: "Established",
      icon: Target,
      description: "Trusted since 2006 with 25+ years legacy",
    },
    {
      number: "PEC/1206",
      label: "Certified",
      icon: Award,
      description: "Pakistan Engineering Council Registered",
    },
    {
      number: "145MW",
      label: "Hydro Power",
      icon: Star,
      description: "Largest hydro power project capacity",
    },
    {
      number: "40M",
      label: "Bridge Span",
      icon: Users,
      description: "Longest bridge span engineering",
    },
  ];

  const highlights = [
    "Established in 2006 with 25+ years of engineering excellence",
    "250+ successful architectural and engineering projects completed",
    "PEC Registered Consultants (CONSULT/1206) - Government Certified",
    "Multidimensional services from planning to execution with maximum efficiency",
    "Hydro power expertise up to 145MW - Largest in portfolio",
    "International collaborations with Red Cross and global organizations",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content - Enhanced */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="text-sm font-bold text-yellow-400 tracking-wider uppercase">
                  Our Heritage Since 2006
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Engineering Excellence{" "}
                <span className="text-yellow-400">Since 2006</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed font-light">
                A dynamic, fast-growing multidimensional organization providing
                comprehensive
                <span className="font-semibold text-black">
                  {" "}
                  Engineering & Architectural Services
                </span>{" "}
                with a legacy of 250+ successful projects and 25+ years of
                excellence across Pakistan and internationally.
              </p>
            </div>

            {/* Enhanced Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-transparent rounded-lg border-l-4 border-yellow-400"
                >
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-black rounded-full" />
                  </div>
                  <p className="text-gray-700 font-medium">{highlight}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <motion.button
                whileHover={{ x: 5, scale: 1.02 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-yellow-400/20 border-2 border-black"
              >
                Discover Our Legacy
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>

          {/* Enhanced Right Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Heritage Stats */}
            <div className="grid grid-cols-2 gap-6">
              {heritageStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 group text-center"
                  >
                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div className="text-2xl font-bold text-black mb-2 group-hover:text-yellow-400 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-gray-600 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Achievement Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-black rounded-2xl p-6 text-center"
            >
              <h3 className="text-white font-bold text-lg mb-3">
                Professional Certifications
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-bold">
                  PEC Registered
                </div>
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-bold">
                  CONSULT/1206
                </div>
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-bold">
                  ISO Certified
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Quick Stats Bar */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "250+", label: "Projects Completed" },
            { number: "25+", label: "Years Experience" },
            { number: "15+", label: "Expert Team Members" },
            { number: "84 MW", label: "Hydro Power Capacity" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-yellow-400 transition-all duration-300 group"
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
    </section>
  );
}
