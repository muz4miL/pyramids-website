"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-black leading-tight mb-6">
                ARCHITECTURAL VISION MEETS ENGINEERING PRECISION
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pyramids Consulting Engineers & Architects delivers exceptional
                design and structural solutions that redefine spaces and inspire
                communities.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-left"
            >
              <p className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
                TRANSFORMING VISIONS INTO ENDURING ARCHITECTURE
              </p>
            </motion.div>
          </motion.div>

          {/* Right Stats Box - Now using your PNG image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center -mr-50 mb-40"
          >
            {/* Container for the image and overlay text */}
            <div className="relative w-full max-w-lg">
              {/* Your transparent PNG */}
              <img
                src="/blackbox-removebg-preview.png"
                alt="Engineering Excellence"
                className="w-full h-auto"
              />

              {/* Text overlay positioned on top of the image */}
              <div className="absolute inset-0 flex flex-col justify-center items-end text-white p-8 ml-32 mt-10">
                <h3 className="text-4xl font-extrabold mb-8 text-center font-serif font-montserrat ">
                  ENGINEERING EXCELLENCE:
                  <br /> OUR LEGACY
                </h3>
                <div className="grid grid-cols-2 gap-6 w-full mt-12 mr-16">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-white font-serif">
                      250+
                    </p>
                    <p className="text-sm text-gray-200 mt-2">
                      Architectural Projects
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-6xl font-bold text-white font-serif">
                      25+
                    </p>
                    <p className="text-sm text-gray-200 mt-2">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
