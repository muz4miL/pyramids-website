"use client";

import { useState } from "react";

const categories = [
  "All",
  "Buildings & Architecture",
  "Hydro Power",
  "Bridges",
  "Town Planning",
];

export default function ProjectsFilterTabs() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-3 font-oswald text-lg uppercase transition-all duration-300 ${
            activeCategory === category
              ? "bg-orange-500 text-black"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
