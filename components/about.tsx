"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    {
      label: "WHO WE ARE",
      title: "SHAPING FUTURE LANDSCAPES",
      description:
        "Pyramids is dedicated to creating innovative, sustainable, and impactful solutions.",
    },
    {
      label: "OUR MISSION",
      title: "BUILDING BEYOND EXPECTATIONS",
      description:
        "We aim to exceed client expectations by reliable construction projects with precision.",
    },
    {
      label: "OUR VALUE",
      title: "INTEGRITY AND INNOVATION",
      description:
        "Our core values are trust, quality, and innovation, driving excellence in every project we undertake.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="space-y-6"
            >
              {/* Yellow accent square */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400" />
                <span className="text-sm font-bold text-yellow-400 tracking-wider">
                  {section.label}
                </span>
              </div>

              <h3 className="text-3xl font-serif font-bold leading-tight">
                {section.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {section.description}
              </p>

              <motion.button
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-white border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                Learn More
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
