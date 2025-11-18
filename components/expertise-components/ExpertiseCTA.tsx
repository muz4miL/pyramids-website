"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react"; // Add this import

export default function ExpertiseCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Parallax Background with fixed attachment */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("/cta.png")',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-8 font-oswald leading-tight"
          >
            Ready to Build
            <br />
            <span className="text-orange-500">Something Extraordinary?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-orange-500 text-black font-bold uppercase px-12 py-4 rounded-lg shadow-2xl hover:bg-white transition-all duration-300 cursor-pointer font-inter text-lg border-2 border-orange-500 hover:border-white"
            >
              START YOUR PROJECT
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
