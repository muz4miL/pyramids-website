"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Hammer, Lightbulb, Leaf, Users, Zap } from "lucide-react";

export default function Expertise() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description:
        "Creative vision meets structural integrity in bespoke residential, commercial, and institutional architectural solutions.",
    },
    {
      icon: Hammer,
      title: "Structural Engineering",
      description:
        "Precision engineering ensuring structural safety, efficiency, and compliance with international building standards.",
    },
    {
      icon: Lightbulb,
      title: "Urban Planning & Development",
      description:
        "Comprehensive master planning for sustainable cities, infrastructure, and community-focused urban environments.",
    },
    {
      icon: Leaf,
      title: "Sustainable Architecture",
      description:
        "LEED-certified green building design integrating energy efficiency and environmental stewardship.",
    },
    {
      icon: Users,
      title: "Construction Management",
      description:
        "End-to-end project oversight ensuring quality, timeline adherence, and budget optimization.",
    },
    {
      icon: Zap,
      title: "Interior Architecture",
      description:
        "Functional and aesthetic interior spaces that reflect brand identity and enhance user experience.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
            OUR EXPERTISE
          </span>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-black mt-4 mb-6">
            INTEGRATED DESIGN & ENGINEERING SOLUTIONS
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Pyramids Consulting delivers comprehensive architectural and
            engineering services, blending innovative design with technical
            precision for exceptional project outcomes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
