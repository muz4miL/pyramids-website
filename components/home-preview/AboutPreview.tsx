"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Background Structural Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1 h-32 bg-orange-500 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-1 h-32 bg-orange-500 opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-orange-500 opacity-5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Premium Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-8 h-0.5 bg-orange-500"></div>
              <span className="text-sm font-bold text-orange-500 tracking-widest uppercase">
                Established 2006
              </span>
              <div className="w-8 h-0.5 bg-orange-500"></div>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              STRUCTURAL <span className="text-orange-500">EXCELLENCE</span>
              <br />
              ENGINEERED TO PERFECTION
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-orange-500 mx-auto mb-10"
            ></motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Premium Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl lg:text-2xl font-light text-gray-800 leading-relaxed">
                A dynamic, fast-growing multidimensional organization providing
                comprehensive
                <span className="font-semibold text-black">
                  {" "}
                  Engineering & Architectural Services
                </span>{" "}
                with a legacy built on precision and innovation.
              </p>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="pt-6"
              >
                <Link href="/about">
                  <button className="group inline-flex items-center gap-4 px-8 py-4 bg-black text-white font-bold text-lg hover:bg-orange-500 hover:text-black transition-all duration-500 border-2 border-black">
                    <span>EXPLORE OUR LEGACY</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Image with Overlay Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative h-full min-h-[300px] lg:min-h-[350px] lg:-mt-8"
            >
              <Image
                src="/blackbox-removebg-preview.png"
                alt="Pyramids Consulting Excellence"
                fill
                className="object-contain"
                priority
              />

              {/* Stats Overlay - Moved text towards bottom */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-6 lg:p-8 pb-12 lg:pb-16">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center font-serif">
                  PYRAMIDS CONSULTING
                </h3>

                <div className="grid grid-cols-2 gap-6 lg:gap-8 w-full max-w-xs">
                  <div className="text-center">
                    <p className="text-3xl lg:text-4xl font-bold text-white font-serif mb-2">
                      250+
                    </p>
                    <p className="text-xs lg:text-sm text-gray-200 uppercase tracking-wider">
                      Architectural Projects
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl lg:text-4xl font-bold text-white font-serif mb-2">
                      25+
                    </p>
                    <p className="text-xs lg:text-sm text-gray-200 uppercase tracking-wider">
                      Years of Excellence
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
