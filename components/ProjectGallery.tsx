"use client";

import React, { useState } from "react";
import { projects, projectCategories } from "@/data/projectData";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-inter font-medium py-2 px-4 md:px-6 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid - FIXED: Pass project object */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
