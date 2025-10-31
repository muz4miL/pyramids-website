"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Building, Award, Users } from "lucide-react";
import Link from "next/link";
export default function AboutPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Background Structural Elements (Unchanged) */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1 h-32 bg-yellow-400 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-1 h-32 bg-yellow-400 opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-yellow-400 opacity-5 rounded-full"></div>
      </div>

      {/* === MODIFICATION: Reduced vertical padding py-24/32 to py-16/20 === */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Premium Header - === MODIFICATION: Reduced mb-20 to mb-12 === */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-8 h-0.5 bg-yellow-400"></div>
              <span className="text-sm font-bold text-yellow-400 tracking-widest uppercase">
                Established 2006
              </span>
              <div className="w-8 h-0.5 bg-yellow-400"></div>
            </motion.div>

            {/* === MODIFICATION: Reduced font size from 6xl to 5xl === */}
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              STRUCTURAL <span className="text-yellow-400">EXCELLENCE</span>
              <br />
              ENGINEERED TO PERFECTION
            </h2>

            {/* === MODIFICATION: Reduced mb-8 to mb-10 (slight adjust) === */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-yellow-400 mx-auto mb-10"
            ></motion.div>
          </div>

          {/* Main Content Grid - === MODIFICATION: Reduced gap-16 to gap-12 === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Premium Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              // === MODIFICATION: Reduced space-y-8 to space-y-6 ===
              className="space-y-6"
            >
              {/* === MODIFICATION: Reduced font size from 3xl to 2xl === */}
              <p className="text-xl lg:text-2xl font-light text-gray-800 leading-relaxed">
                A dynamic, fast-growing multidimensional organization providing
                comprehensive
                <span className="font-semibold text-black">
                  {" "}
                  Engineering & Architectural Services
                </span>{" "}
                with a legacy built on precision and innovation.
              </p>

              {/* === MODIFICATION: Reduced space-y-6 to space-y-5 === */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Building className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-black text-lg mb-2">
                      250+ Architectural Projects
                    </h4>
                    <p className="text-gray-600">
                      From 18-story commercial complexes to innovative
                      residential designs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-black text-lg mb-2">
                      PEC Registered Excellence
                    </h4>
                    <p className="text-gray-600">
                      CONSULT/1206 - Regulating engineering profession with
                      certified standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-black text-lg mb-2">
                      Expert Leadership
                    </h4>
                    <p className="text-gray-600">
                      Mr. Imran Siddique (CEO, 25+ years) & Mr. Hassan Munir
                      (Director Business Development)
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                // === MODIFICATION: Reduced pt-8 to pt-6 ===
                className="pt-6"
              >
                <Link href="/about">
                  <button className="group inline-flex items-center gap-4 px-8 py-4 bg-black text-white font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-500 border-2 border-black">
                    <span>EXPLORE OUR LEGACY</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Premium Stats Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              // === MODIFICATION: Reduced padding p-12 to p-8 lg:p-10 ===
              className="bg-black text-white p-8 lg:p-10 relative overflow-hidden"
            >
              {/* Accent Corner (Unchanged) */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 transform translate-x-12 -translate-y-12 rotate-45"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 text-white">
                  PYRAMIDS CONSULTING
                </h3>

                {/* === MODIFICATION: Reduced space-y-8 to space-y-6 === */}
                <div className="space-y-6">
                  {/* === MODIFICATION: Reduced pb-6 to pb-4 === */}
                  <div className="border-b border-gray-700 pb-4">
                    {/* === MODIFICATION: Reduced font size from 5xl to 4xl/5xl === */}
                    <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                      18+
                    </div>
                    {/* === MODIFICATION: Reduced font size from lg to base === */}
                    <p className="text-gray-300 text-base">
                      Story Commercial Complexes
                    </p>
                  </div>

                  <div className="border-b border-gray-700 pb-4">
                    <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                      84 MW
                    </div>
                    <p className="text-gray-300 text-base">
                      Hydro Power Capacity
                    </p>
                  </div>

                  <div className="border-b border-gray-700 pb-4">
                    <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                      40M
                    </div>
                    <p className="text-gray-300 text-base">
                      Bridge Span Expertise
                    </p>
                  </div>

                  <div>
                    <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                      25+
                    </div>
                    <p className="text-gray-300 text-base">
                      Years Engineering Excellence
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
