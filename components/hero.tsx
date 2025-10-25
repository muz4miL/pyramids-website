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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-tight tracking-tight uppercase">
                <span className="whitespace-nowrap">BUILDING FUTURES WITH</span>
                <br />
                STRUCTURAL EXCELLENCE
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                We are your trusted partners in construction and engineering
                consultancy — delivering smart, sustainable, and cost-effective
                solutions for every project.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
            >
              {/* Left Text Block */}
              <p className="font-bold text-lg text-black leading-snug uppercase text-left whitespace-nowrap">
                START YOUR <br />
                PROJECT TODAY <br />
                WITH US
              </p>

              {/* Middle Paragraph */}
              <p className="text-gray-600 text-base leading-relaxed max-w-xs text-left">
                We are a <br /> professional <br /> solution for every <br />
                build.
              </p>

              {/* Right Button */}
              <button className="px-8 py-4 bg-yellow-400 text-black font-medium rounded-none hover:bg-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 whitespace-nowrap">
                Get Started
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Stats Box - Your custom box stays exactly the same */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center -mr-50 mb-40"
          >
            <div className="relative w-full max-w-lg">
              <img
                src="/blackbox-removebg-preview.png"
                alt="Engineering Excellence"
                className="w-full h-auto"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-end text-white p-8 ml-32 mt-10">
                <h3 className="text-4xl font-extrabold mb-8 text-center font-serif font-montserrat">
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
