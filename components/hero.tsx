"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen py-24 lg:py-32 flex items-center justify-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-black leading-tight tracking-tight uppercase">
                <span className="block">BUILDING FUTURES</span>
                <span className="block">WITH STRUCTURAL</span>
                <span className="block">EXCELLENCE</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We are your trusted partners in construction and engineering
                consultancy — delivering smart, sustainable, and cost-effective
                solutions for every project.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <p className="font-bold text-base lg:text-lg text-black leading-snug uppercase text-center sm:text-left">
                START YOUR <br />
                PROJECT TODAY <br />
                WITH US
              </p>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-xs text-center sm:text-left">
                We are a <br /> professional <br /> solution for every <br />
                build.
              </p>

              <button className="px-6 py-3 lg:px-8 lg:py-4 bg-yellow-400 text-black font-medium rounded-none hover:bg-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 whitespace-nowrap">
                Get Started
                <ArrowRight size={18} className="lg:w-5 lg:h-5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Stats Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center lg:-mr-50"
          >
            <div className="relative w-full max-w-sm lg:max-w-lg">
              <img
                src="/blackbox-removebg-preview.png"
                alt="Engineering Excellence"
                className="w-full h-auto"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-end text-white p-6 lg:p-8 lg:ml-32 lg:mt-10">
                <h3 className="text-lg sm:text-xl lg:text-4xl font-extrabold mb-4 lg:mb-8 text-center font-serif">
                  ENGINEERING EXCELLENCE:
                  <br /> OUR LEGACY
                </h3>
                <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full max-w-xs lg:max-w-none mt-6 lg:mt-12 lg:mr-16">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white font-serif">
                      250+
                    </p>
                    <p className="text-xs sm:text-sm text-gray-200 mt-2">
                      Architectural Projects
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white font-serif">
                      25+
                    </p>
                    <p className="text-xs sm:text-sm text-gray-200 mt-2">
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
