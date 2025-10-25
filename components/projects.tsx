"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Metropolitan Corporate Tower",
      category: "Commercial Architecture",
      image: "/modern-skyscraper-tower.jpg",
    },
    {
      title: "Riverside Luxury Residences",
      category: "Residential Design",
      image: "/luxury-residential-building.jpg",
    },
    {
      title: "Innovation Technology Hub",
      category: "Mixed-Use Development",
      image: "/modern-office-building.png",
    },
    {
      title: "Contemporary Arts Center",
      category: "Public Architecture",
      image: "/contemporary-cultural-building.jpg",
    },
    {
      title: "Sustainable Tech Campus",
      category: "Corporate Architecture",
      image: "/modern-tech-campus.jpg",
    },
    {
      title: "Wellness & Resort Complex",
      category: "Hospitality Design",
      image: "/luxury-resort-architecture.jpg",
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
            OUR PORTFOLIO
          </span>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-black mt-4 mb-6">
            ARCHITECTURAL EXCELLENCE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover our portfolio of innovative architectural and engineering
            projects that showcase precision design and structural mastery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-lg bg-gray-200 h-80 cursor-pointer"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-yellow-400 font-semibold text-sm mb-4">
                  {project.category}
                </p>
                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Explore Design</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition-all duration-300">
            Explore Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
