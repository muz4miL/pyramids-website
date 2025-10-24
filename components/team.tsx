"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin, Mail } from "lucide-react";

export default function Team() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Principal Architect",
      image: "/professional-woman-architect.jpg",
    },
    {
      name: "James Chen",
      role: "Lead Structural Engineer",
      image: "/professional-man-engineer.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Urban Planner",
      image: "/professional-woman-planner.jpg",
    },
    {
      name: "Michael Thompson",
      role: "Project Director",
      image: "/professional-man-director.jpg",
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
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-black mt-4 mb-6">
            Meet Our Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Talented professionals dedicated to delivering exceptional
            architectural solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-lg h-64 bg-gray-200">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <button className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors">
                    <Linkedin size={20} className="text-white" />
                  </button>
                  <button className="p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors">
                    <Mail size={20} className="text-white" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black">{member.name}</h3>
              <p className="text-yellow-400 font-semibold mt-1">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
