"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statsData = [
  {
    value: "50+",
    label: "Projects Completed",
    description: "Successfully delivered architectural and engineering marvels",
  },
  {
    value: "20+",
    label: "Years Experience",
    description:
      "Established track record in engineering excellence since 2003",
  },
  {
    value: "8+",
    label: "Major Clients",
    description: "Trusted by leading organizations and developers",
  },
  {
    value: "145MW",
    label: "Hydro Capacity",
    description: "Renewable energy expertise in large-scale power projects",
  },
];

const ExpertiseStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      {/* Premium wave accent at top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.15)] hover:border-orange-300"
            >
              {/* Icon-like accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500/20 rounded-full group-hover:scale-150 transition-transform duration-500" />

              {/* Main stat value */}
              <motion.div
                className="font-oswald text-5xl lg:text-6xl font-bold text-orange-500 mb-3"
                initial={{ scale: 0.8 }}
                animate={inView ? { scale: 1 } : { scale: 0.8 }}
                transition={{
                  delay: 0.1 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {stat.value}
              </motion.div>

              {/* Stat label */}
              <h3 className="font-oswald text-xl lg:text-2xl font-medium text-gray-900 uppercase mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="font-inter text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent group-hover:via-orange-500/60 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Premium wave accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  );
};

export default ExpertiseStats;
