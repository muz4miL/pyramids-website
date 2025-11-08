"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building,
  Trees,
  GalleryVerticalEnd,
  Map,
  Cog,
  Home,
} from "lucide-react";

// --- CUSTOM COMPOSITE ICON ---
const ExteriorDesignIcon = (props: { strokeWidth?: number }) => (
  <div className="relative w-12 h-12">
    <Home
      className="absolute top-0 left-0 w-12 h-12 text-white"
      strokeWidth={props.strokeWidth || 1}
    />
    <Cog
      className="absolute bottom-0 right-0 w-6 h-6 bg-neutral-900 text-white"
      strokeWidth={props.strokeWidth || 1}
    />
  </div>
);

// --- DATA ARRAY ---
const specializationData = [
  {
    icon: Building,
    title: "Architecture",
    description:
      "Development of innovative and functional architectural designs.",
  },
  {
    icon: Trees,
    title: "Landscape Design",
    description:
      "Creative and sustainable site landscaping and urban planning.",
  },
  {
    icon: ExteriorDesignIcon,
    title: "Exterior Design",
    description:
      "Detailed facade planning and exterior aesthetic design with structural precision.",
  },
  {
    icon: Map,
    title: "Site Planning",
    description: "Comprehensive site work planning and service integration.",
  },
];

// --- ANIMATION VARIANTS ---
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- COMPONENT ---
export default function SpecializationPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // REMOVED overflow-hidden
    <section className="relative w-full bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          ref={ref}
          variants={fadeIn}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wider mb-12"
        >
          Our Specialization
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {specializationData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeIn}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex flex-col justify-start p-6 
                            bg-neutral-900 rounded-xl 
                            border 
                            ${
                              index === 0
                                ? "border-orange-500"
                                : "border-neutral-800"
                            }
                            transition-all duration-300 ease-in-out
                            hover:-translate-y-1 hover:scale-[1.02] 
                            hover:border-orange-500 
                            hover:shadow-lg hover:shadow-orange-500/20`}
              >
                <IconComponent
                  className="w-12 h-12 text-white"
                  strokeWidth={1}
                />

                <div className="text-left mt-6">
                  <h3 className="text-lg font-semibold text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal text-neutral-400 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* DIVIDER COMPLETELY REMOVED FROM HERE */}
    </section>
  );
}
