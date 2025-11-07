"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building, Trees, GalleryVerticalEnd, Map } from "lucide-react";

const services = [
  {
    title: "Architecture",
    description:
      "Development of innovative and functional architectural designs.",
    icon: Building,
  },
  {
    title: "Landscape Design",
    description:
      "Creative and sustainable site landscaping and urban planning.",
    icon: Trees,
  },
  {
    title: "Exterior Design",
    description: "Detailed facade planning and exterior aesthetic design.",
    icon: GalleryVerticalEnd,
  },
  {
    title: "Site Planning",
    description: "Comprehensive site work planning and service integration.",
    icon: Map,
  },
];

export default function SpecializationPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Specialization
          </h2>

          {/* Orange Accent Line */}
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            We strive to develop an organization having a strong team of
            dedicated professionals with up to date and state of art techniques.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900 rounded-none shadow-md p-6 flex flex-col items-center text-center border border-gray-800 hover:-translate-y-1 hover:bg-gray-800 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 aspect-square"
              >
                {/* Icon */}
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-orange-500" />
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
