"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// 1. Define the Team Member data structure
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string; // Placeholder for Affan to replace
  category: "Leadership" | "Engineering" | "Architecture" | "Staff";
}

// 2. Create the master team list
const allTeamMembers: TeamMember[] = [
  // Leadership
  {
    id: 1,
    name: "Imran Siddique",
    position: "Chief Executive Officer",
    image: "/team/imran-siddique.jpg", // Placeholder path
    category: "Leadership",
  },
  {
    id: 2,
    name: "Hassan Munir Khan",
    position: "Director Business Development",
    image: "/team/hassan-munir.jpg", // Placeholder path
    category: "Leadership",
  },
  // Architecture
  {
    id: 3,
    name: "Yasar Durani",
    position: "Chief Architect",
    image: "/team/yasar-durani.jpg", // Placeholder path
    category: "Architecture",
  },
  {
    id: 4,
    name: "Anwar ul Haq",
    position: "Assistant Architect",
    image: "/team/anwar-ul-haq.jpg", // Placeholder path
    category: "Architecture",
  },
  {
    id: 5,
    name: "Hafiz Talha Mustafa",
    position: "3-D Visualizer",
    image: "/team/hafiz-talha.jpg", // Placeholder path
    category: "Architecture",
  },
  // Engineering
  {
    id: 6,
    name: "Dr. Qaiser Ali",
    position: "Structure Engineer",
    image: "/team/dr-qaiser.jpg", // Placeholder path
    category: "Engineering",
  },
  {
    id: 7,
    name: "Asad Khan",
    position: "Structural Engineer",
    image: "/team/asad-khan.jpg", // Placeholder path
    category: "Engineering",
  },
  {
    id: 8,
    name: "Nowsherawan Naeem",
    position: "Highway Engineer",
    image: "/team/nowsherawan-naeem.jpg", // Placeholder path
    category: "Engineering",
  },
  {
    id: 9,
    name: "Junaid Khan",
    position: "Electrical Engineer",
    image: "/team/junaid-khan.jpg", // Placeholder path
    category: "Engineering",
  },
  // Staff
  {
    id: 10,
    name: "Ajaz Shah",
    position: "Chief Surveyor",
    image: "/team/ajaz-shah.jpg", // Placeholder path
    category: "Staff",
  },
  {
    id: 11,
    name: "Kamran Khan",
    position: "Quantity Surveyor",
    image: "/team/kamran-khan.jpg", // Placeholder path
    category: "Staff",
  },
  {
    id: 12,
    name: "Salman Zia",
    position: "Finance Manager",
    image: "/team/salman-zia.jpg", // Placeholder path
    category: "Staff",
  },
  {
    id: 13,
    name: "Shahid Bashir Awan",
    position: "Draftsman",
    image: "/team/shahid-bashir.jpg", // Placeholder path
    category: "Staff",
  },
  {
    id: 14,
    name: "Ashfaq Ur Rehman",
    position: "Draftsman",
    image: "/team/ashfaq-ur-rehman.jpg", // Placeholder path
    category: "Staff",
  },
  {
    id: 15,
    name: "Arsalan Khan",
    position: "Admin",
    image: "/team/arsalan-khan.jpg", // Placeholder path
    category: "Staff",
  },
];

// Define the filter categories
type FilterCategory =
  | "All"
  | "Leadership"
  | "Architecture"
  | "Engineering"
  | "Staff";
const filters: FilterCategory[] = [
  "All",
  "Leadership",
  "Architecture",
  "Engineering",
  "Staff",
];

export default function TeamShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  // Filter logic
  const filteredTeam =
    activeFilter === "All"
      ? allTeamMembers
      : allTeamMembers.filter((member) => member.category === activeFilter);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 lg:mb-16"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-5 py-2 font-inter font-medium text-sm md:text-base uppercase tracking-wider
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-orange-500 text-black shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredTeam.map((member, i) => (
            <motion.div
              layout
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={i}
            >
              {/* Image */}
              <div className="relative w-full aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-oswald text-xl font-bold text-gray-900 uppercase">
                  {member.name}
                </h3>
                <p className="font-inter text-orange-500 text-sm uppercase tracking-wider mt-1">
                  {member.position}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
