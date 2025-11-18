"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Variants } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { developments } from "@/data/developmentsData";
import { useRouter } from "next/navigation";
import { X, Check, Calendar, Download } from "lucide-react";

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

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: (typeof developments)[0] | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<"overview" | "investment">(
    "overview"
  );
  const router = useRouter();

  // PREVENT BACKGROUND SCROLL WHEN MODAL IS OPEN
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  const handleScheduleVisit = () => {
    onClose();
    router.push("/contact");
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/Brochure.pdf";
    link.download = `Pyramids-${project.title.replace(
      /\s+/g,
      "-"
    )}-Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm ${
        isOpen ? "flex" : "hidden"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-full sm:max-w-4xl h-full sm:h-auto sm:max-h-[85vh] border border-gray-300 relative sm:my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Fixed Close Button - Mobile Optimized */}
        <div className="relative h-48 sm:h-64 bg-gray-900 flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* MOBILE OPTIMIZED CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[99999] w-10 h-10 sm:w-12 sm:h-12 bg-black/90 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-300 group border border-white/20"
            aria-label="Close modal"
            title="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
            <h2 className="font-oswald text-2xl sm:text-3xl md:text-4xl uppercase mb-2">
              {project.title}
            </h2>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:items-center sm:gap-4">
                <span className="font-inter text-gray-300 text-xs sm:text-sm">
                  {project.location}
                </span>
                <span className="font-inter text-orange-400 text-xs sm:text-sm">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs - Mobile Optimized */}
        <div className="flex border-b border-gray-200 flex-shrink-0">
          {[
            { id: "overview" as const, label: "Overview" },
            { id: "investment" as const, label: "Investment" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 sm:py-4 font-inter text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-orange-500 border-b-2 border-orange-500 font-semibold"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* MAIN CONTENT AREA - Mobile Optimized */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6">
            {activeTab === "overview" && (
              <div className="space-y-4 sm:space-y-6">
                <p className="font-inter text-gray-700 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-oswald text-lg uppercase text-gray-900 mb-3 sm:mb-4">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                          <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <span className="font-inter text-gray-600 text-xs sm:text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "investment" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 p-4 sm:p-6 border border-orange-500/20">
                  <h4 className="font-oswald text-lg uppercase text-gray-900 mb-2 sm:mb-3">
                    Investment Details
                  </h4>
                  <p className="font-oswald text-xl sm:text-2xl text-orange-500 mb-2">
                    {project.price}
                  </p>
                  <p className="font-inter text-gray-600 text-xs sm:text-sm">
                    Competitive pricing with exceptional value proposition
                  </p>
                </div>

                <div>
                  <h4 className="font-oswald text-lg uppercase text-gray-900 mb-3 sm:mb-4">
                    Investment Benefits
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    {project.investment.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                          <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                        </div>
                        <span className="font-inter text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* BUTTONS - Mobile Optimized */}
        <div className="flex flex-col gap-2 sm:gap-3 p-4 sm:p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
          <motion.button
            onClick={handleScheduleVisit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-orange-500 text-white font-bold uppercase py-3 sm:py-4 font-inter text-xs sm:text-sm border-2 border-orange-500 hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            Schedule Site Visit
          </motion.button>

          <motion.button
            onClick={handleDownloadBrochure}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-transparent text-gray-700 font-bold uppercase py-3 sm:py-4 font-inter text-xs sm:text-sm border-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
            Download Brochure
          </motion.button>
        </div>
      </div>
    </div>
  );
};

// Rest of your component remains exactly the same...
const ProjectShowcaseSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<
    (typeof developments)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: (typeof developments)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
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
              FEATURED DEVELOPMENTS
            </span>
          </div>

          <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-gray-900 leading-tight mb-6">
            Current
            <br />
            <span className="text-orange-500">Projects</span>
          </h2>

          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium real estate developments that combine luxury
            living with exceptional investment potential.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developments.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn(0.2 + index * 0.2)}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Card */}
              <div className="bg-white border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-orange-500/30">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-oswald text-2xl uppercase mb-2">
                      {project.title}
                    </h3>
                    <p className="font-inter text-gray-300 text-sm">
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="font-inter text-orange-500 text-sm uppercase tracking-wider">
                        {project.category}
                      </span>
                      <p className="font-oswald text-lg text-gray-900 mt-1">
                        {project.price}
                      </p>
                    </div>
                  </div>

                  <p className="font-inter text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-inter"
                        >
                          {feature}
                        </span>
                      ))}
                  </div>

                  {/* Button */}
                  <button className="w-full py-3 border border-gray-300 text-gray-700 font-inter text-sm uppercase tracking-wider hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300">
                    View Project Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default ProjectShowcaseSection;
