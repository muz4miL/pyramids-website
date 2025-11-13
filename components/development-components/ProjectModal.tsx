// components/developments-components/ProjectModal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
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
  } | null;
}

const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "amenities" | "investment"
  >("overview");

  // Add safe handling for missing project
  if (!project) return null;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const tabs = [
    { id: "overview" as const, label: "Project Overview", icon: "📋" },
    { id: "amenities" as const, label: "Amenities", icon: "⭐" },
    { id: "investment" as const, label: "Investment", icon: "💰" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-64 bg-gray-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Close Button - Fixed with accessibility */}
              <button
                onClick={handleClose}
                aria-label="Close modal"
                title="Close modal"
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Project Title */}
              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="font-oswald text-3xl text-white mb-1">
                  {project.title}
                </h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="font-inter text-gray-300">
                      {project.location}
                    </span>
                    <span className="font-inter text-orange-400">
                      {project.type}
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-inter">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Rest of your modal content remains the same */}
            <div className="p-6">
              {/* Tabs */}
              <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 px-3 rounded-md text-sm font-inter transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-white shadow-sm text-orange-500"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="max-h-96 overflow-y-auto">
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    <p className="font-inter text-gray-700 leading-relaxed">
                      {project.detailedDescription || project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4">
                      {project.stats.map((stat, index) => (
                        <div
                          key={index}
                          className="text-center p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="font-oswald text-2xl text-orange-500 mb-1">
                            {stat.value}
                          </div>
                          <div className="font-inter text-xs text-gray-600 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-oswald text-lg uppercase text-gray-900 mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                            <span className="font-inter text-gray-600 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "amenities" && (
                  <div className="space-y-4">
                    <h4 className="font-oswald text-lg uppercase text-gray-900">
                      World-Class Amenities
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {(project.amenities || project.features).map(
                        (amenity, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-orange-500/10 rounded flex items-center justify-center mr-3">
                              <svg
                                className="w-4 h-4 text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="font-inter text-gray-700">
                              {amenity}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "investment" && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-xl p-6 border border-orange-500/20">
                      <h4 className="font-oswald text-xl uppercase text-gray-900 mb-3">
                        Investment Highlights
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="font-inter text-gray-600">
                            Price per SqFt
                          </span>
                          <span className="font-oswald text-orange-500 text-lg">
                            {project.id === "lavita"
                              ? "PKR 18,000"
                              : "To be announced"}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="font-inter text-gray-600">
                            Payment Plans
                          </span>
                          <span className="font-inter text-gray-900">
                            Flexible Options
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="font-inter text-gray-600">
                            ROI Potential
                          </span>
                          <span className="font-inter text-green-600 font-medium">
                            High
                          </span>
                        </div>
                      </div>
                    </div>

                    {project.id === "lavita" && (
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h5 className="font-oswald text-lg uppercase text-gray-900 mb-2">
                          Special Offer
                        </h5>
                        <p className="font-inter text-gray-700">
                          Get <strong>10% discount</strong> on 100% payment.
                          Limited time offer!
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-orange-500 text-black font-bold uppercase py-3 rounded-lg font-inter text-sm border-2 border-orange-500 hover:bg-white transition-all duration-300"
                >
                  Schedule Site Visit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gray-900 text-white font-bold uppercase py-3 rounded-lg font-inter text-sm border-2 border-gray-900 hover:bg-gray-700 transition-all duration-300"
                >
                  Download Brochure
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
