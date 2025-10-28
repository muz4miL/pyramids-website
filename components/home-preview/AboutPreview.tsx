// components/home-preview/AboutPreview.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    "Established in 2006 with 25+ years of excellence",
    "250+ architectural projects completed successfully",
    "PEC Registered Consultants (CONSULT/1206)",
    "Multidimensional engineering & architectural services",
    "From planning to execution with maximum efficiency",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-400" />
              <span className="text-sm font-bold text-yellow-400 tracking-wider uppercase">
                About Pyramids
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              Building Excellence Since{" "}
              <span className="text-yellow-400">2006</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              A dynamic, fast-growing multidimensional organization providing
              comprehensive Engineering & Architectural Services with a legacy
              of 250+ successful projects and 25+ years of excellence in the
              industry.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-yellow-400 mt-2 rounded-full flex-shrink-0" />
                  <p className="text-gray-700">{highlight}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <motion.button
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-none hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                Discover Our Story
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>

          {/* Right Stats */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-lg border border-gray-200"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-black mb-2">250+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-black mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-black mb-2">15+</div>
                <div className="text-sm text-gray-600">Expert Team Members</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-black mb-2">84 MW</div>
                <div className="text-sm text-gray-600">
                  Hydro Power Capacity
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
