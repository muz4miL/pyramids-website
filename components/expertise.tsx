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
        "Innovative and sustainable architectural solutions for residential and commercial projects.",
    },
    {
      icon: Hammer,
      title: "Structural Engineering",
      description:
        "Advanced structural design ensuring safety, durability, and aesthetic excellence.",
    },
    {
      icon: Lightbulb,
      title: "Urban Planning",
      description:
        "Strategic urban development and master planning for sustainable communities.",
    },
    {
      icon: Leaf,
      title: "Green Building",
      description:
        "Eco-friendly design practices and LEED-certified sustainable architecture.",
    },
    {
      icon: Users,
      title: "Project Management",
      description:
        "Comprehensive project oversight from conception to completion.",
    },
    {
      icon: Zap,
      title: "Building Systems",
      description: "MEP engineering and smart building technology integration.",
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
            WHO WE ARE
          </span>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-black mt-4 mb-6">
            EXPERT SOLUTIONS FOR EVERY CONSTRUCTION NEED
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Pyramids delivers professional services backed by expertise and
            innovation for superior results.
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
