// components/developments-components/ProjectShowcaseSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Variants } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
  features: string[];
  status: string;
  detailedDescription?: string;
  amenities?: string[];
  investment?: {
    price: string;
    paymentPlan: string;
    roi: string;
  };
}

const ProjectShowcaseSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "lavita",
      title: "LaVita Malam Jabba",
      location: "Swat, Pakistan",
      type: "Luxury Hotel Apartments",
      description:
        "The region's only fully serviced luxury hotel apartments in Swat's premier tourist destination. Powered by Shelton's Rezidor Group of Hotels.",
      detailedDescription:
        "LaVita Malam Jabba represents the pinnacle of luxury mountain living. This exclusive development offers fully serviced hotel apartments with world-class amenities, set against the breathtaking backdrop of Swat's majestic mountains. Each suite is meticulously designed to offer panoramic views, premium finishes, and access to exceptional facilities including a stargazing observatory, wellness club, and adventure sports.",
      image: "/expertise-images/Lavita.png",
      stats: [
        { value: "PKR 18K", label: "Per SqFt" },
        { value: "7 Floors", label: "Luxury Tower" },
        { value: "50+ Suites", label: "Hotel Apartments" },
      ],
      features: [
        "Stargazing Observatory",
        "Wellness Club & Spa",
        "Panorama Restaurant",
        "Adventure Sports Access",
        "Fitness Centre",
        "Kids Play Area",
      ],
      amenities: [
        "Stargazing Observatory",
        "Wellness Club & Spa",
        "Panorama Restaurant",
        "Vertical Garden",
        "Mini Museum",
        "Indoor Sports",
        "Kids Play Area",
        "Swat Traditional Centre",
        "Fitness Centre",
        "Outdoor Multipurpose Space",
      ],
      status: "Under Development",
      investment: {
        price: "PKR 18,000 per SqFt",
        paymentPlan: "Flexible installment plans available",
        roi: "High return potential with professional management",
      },
    },
    {
      id: "landmark",
      title: "Landmark Peshawar",
      location: "Peshawar, Pakistan",
      type: "Commercial & Residential",
      description:
        "A landmark mixed-use development combining premium commercial spaces with luxury residential units in the heart of Peshawar.",
      detailedDescription:
        "Landmark Peshawar is set to redefine urban living in the heart of the city. This mixed-use development seamlessly integrates premium commercial spaces with luxury residential units, creating a vibrant community hub. Featuring state-of-the-art amenities, secure environment, and strategic location, Landmark Peshawar offers unparalleled convenience and luxury for both living and business.",
      image: "/expertise-images/saifMall.png",
      stats: [
        { value: "Mixed-Use", label: "Development" },
        { value: "Premium", label: "Location" },
        { value: "Coming Soon", label: "Launch" },
      ],
      features: [
        "Commercial Complex",
        "Luxury Apartments",
        "Retail Spaces",
        "Premium Amenities",
        "Secure Parking",
        "24/7 Security",
      ],
      amenities: [
        "Commercial Plaza",
        "Luxury Residential Towers",
        "Retail Shopping",
        "Food Court",
        "Business Center",
        "Fitness Club",
        "Swimming Pool",
        "Children's Play Area",
        "Underground Parking",
        "24/7 Security & CCTV",
      ],
      status: "Coming Soon",
      investment: {
        price: "To be announced",
        paymentPlan: "Flexible options available",
        roi: "Prime location with high appreciation potential",
      },
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <section
        ref={ref}
        className="relative w-full bg-white text-black overflow-hidden py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0)}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-4 h-4 bg-orange-500 mr-3" />
              <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
                PORTFOLIO
              </span>
            </div>

            <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-gray-900 leading-tight mb-6">
              Featured
              <br />
              <span className="text-orange-500">Developments</span>
            </h2>

            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our premier real estate developments, each designed with
              precision, built with excellence, and crafted for lasting value.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn(0.2 + index * 0.1)}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${
                          project.status === "Under Development"
                            ? "bg-orange-500 text-white"
                            : "bg-gray-800 text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-4"
                      >
                        <svg
                          className="w-6 h-6 text-orange-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    {/* Project Header */}
                    <div className="mb-4">
                      <h3 className="font-oswald text-2xl lg:text-3xl uppercase text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-600 font-inter text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {project.location}
                      </div>
                      <p className="font-inter text-orange-500 font-medium text-sm mt-1">
                        {project.type}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-inter text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="font-oswald text-xl font-medium text-gray-900">
                            {stat.value}
                          </div>
                          <div className="font-inter text-xs text-gray-500 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-oswald text-sm uppercase text-gray-900 mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center"
                            >
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                              <span className="font-inter text-gray-600 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gray-900 text-white font-inter font-medium py-3 rounded-lg hover:bg-orange-500 transition-all duration-300 flex items-center justify-center space-x-2"
                      onClick={() => handleProjectClick(project)}
                    >
                      <span>View Project Details</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.6)}
          >
            <p className="font-inter text-gray-600 mb-6">
              Interested in our upcoming projects or investment opportunities?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-orange-500 text-black font-bold uppercase px-8 py-4 rounded-lg font-inter text-sm border-2 border-orange-500 hover:bg-white transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
};

export default ProjectShowcaseSection;
