// components/home-preview/ProjectsPreview.tsx
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
      progressValue: 85, // For progress bar
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <span className="text-sm font-bold text-yellow-400 tracking-wider uppercase">
              Featured Projects
            </span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Engineering <span className="text-yellow-400">Excellence</span> in
            Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From commercial malls to residential towers, discover our portfolio
            of landmark projects that redefine Pakistan's skyline with
            structural precision and architectural innovation.
          </p>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {projectStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-yellow-400/30 transition-all duration-300 group"
            >
              <div className="text-2xl lg:text-3xl font-bold text-black mb-2 group-hover:text-yellow-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200/80 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2"
            >
              {/* Enhanced Project Image */}
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

                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Premium Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1.5 rounded-full shadow-lg border border-yellow-300">
                    ⭐ FEATURED
                  </span>
                </div>

                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium bg-black/80 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    {project.stories.split(" ")[0]}+ STORIES
                  </span>
                </div>
              </div>

              {/* Enhanced Project Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-yellow-400 transition-colors mb-2 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                    {project.location}
                  </p>
                </div>

                {/* Enhanced Project Metrics */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium">Area</span>
                    <span className="font-bold text-black">{project.area}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium">
                      Project Cost
                    </span>
                    <span className="font-bold text-green-600">
                      {project.cost}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-gray-500">
                        Construction Progress
                      </span>
                      <span className="font-bold text-yellow-400">
                        {project.progressValue}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${project.progressValue}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced CTA */}
                <div className="pt-4 border-t border-gray-100/80">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 group-hover:text-yellow-400 transition-colors">
                      Explore Project
                    </span>
                    <div className="w-8 h-8 bg-black group-hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
                      <span className="text-white group-hover:text-black text-sm font-bold transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link href="/projects">
            <button className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg hover:shadow-yellow-400/20 border-2 border-black hover:border-yellow-400">
              Explore Full Project Portfolio
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
