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
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-black leading-tight mb-6">
                WHERE INNOVATION MEETS CONSTRUCTION EXCELLENCE
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a professional solutions for every build.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
                Get Started
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
              <p className="text-sm font-bold text-black mb-4">
                START YOUR PROJECT TODAY WITH US
              </p>
            </motion.div>
          </motion.div>

          {/* Right Stats Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-black text-white p-12 rounded-3xl transform skew-y-3 lg:skew-y-0 lg:skew-x-3">
              <h3 className="text-2xl font-bold mb-12 text-center">
                PYRAMIDS IN NUMBERS: PROVEN TRACK RECORD
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-white mb-2">500+</p>
                  <p className="text-sm text-gray-300">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-white mb-2">20+</p>
                  <p className="text-sm text-gray-300">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
