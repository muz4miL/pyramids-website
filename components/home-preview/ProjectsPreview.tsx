"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredProjects = [
    {
      name: "Saif Mall & Residency",
      location: "Peshawar",
      stories: "18 Stories",
      area: "525,000 Sq.ft",
      status: "Design Completed",
      cost: "1,680 Million",
      image: "/SiafMall.PNG",
      progress: "Top super progress",
      aspect: "850/545",
      progressValue: 85,
      featured: true,
    },
    {
      name: "Diamond Mall",
      location: "Peshawar",
      stories: "19 Stories",
      area: "449,537 Sq.ft",
      status: "Design Completed",
      cost: "2,078 Million",
      image: "/DiamondMall-2.PNG",
      progress: "Top super progress",
      aspect: "850/545",
      progressValue: 80,
      featured: true,
    },
    {
      name: "Capital Grand Heights",
      location: "Islamabad",
      stories: "17 Stories",
      area: "600,000 Sq.ft",
      status: "Design Completed",
      cost: "1,200 Million",
      image: "/CapitalHeights.PNG",
      progress: "Top super progress",
      aspect: "850/545",
      progressValue: 75,
      featured: true,
    },
  ];

  const projectStats = [
    { number: "250+", label: "Projects Completed" },
    { number: "20", label: "Stories Highest" },
    { number: "650K", label: "Largest Area (Sq.ft)" },
    { number: "2.5B", label: "Largest Project Cost" },
  ];

  return (
    <section id="projects" className="py-24 sm:py-28 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-0.5 bg-yellow-400"></div>
            <span className="text-sm font-bold text-yellow-400 tracking-widest uppercase">
              Featured Projects
            </span>
            <div className="w-8 h-0.5 bg-yellow-400"></div>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Engineering <span className="text-yellow-400">Excellence</span> in
            Action
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-yellow-400 mx-auto mb-8"
          ></motion.div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From commercial malls to residential towers, discover our portfolio
            of landmark projects that redefine Pakistan's skyline with
            structural precision and architectural innovation.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {projectStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:border-yellow-400 transition-all duration-500"
            >
              <div className="text-4xl font-bold text-black mb-3">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group bg-white rounded-xl border border-gray-200 hover:border-yellow-400 transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2"
            >
              {/* Project Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: project.aspect }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold bg-yellow-400 text-black px-3 py-1.5 rounded-full border border-yellow-300">
                    FEATURED
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black mb-2 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                    {project.location}
                  </p>
                </div>

                {/* Project Metrics */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Area</span>
                    <span className="font-semibold text-black">
                      {project.area}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Stories</span>
                    <span className="font-semibold text-black">
                      {project.stories}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Cost</span>
                    <span className="font-semibold text-black">
                      {project.cost}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-semibold text-yellow-400">
                      {project.progressValue}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-yellow-400 h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: `${project.progressValue}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold text-lg rounded-none hover:bg-yellow-400 hover:text-black transition-all duration-300 border-2 border-black"
            >
              Explore Full Project Portfolio
              <span className="text-lg">→</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
