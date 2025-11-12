"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

// 1. Define the Client Data Structure
interface ClientProject {
  id: number;
  name: string;
  logoUrl: string; // Path to the client's logo
  projectImageUrl: string; // Path to a representative project image
  info: string; // The "bit of info" you wanted
  services: string[]; // List of services your company provided
}

// 2. Populate the Data
const featuredClientData: ClientProject[] = [
  {
    id: 1,
    name: "DHA Peshawar",
    logoUrl: "/clients/Dha-logo.png",
    // --- URGENT: REPLACE THIS PLACEHOLDER ---
    projectImageUrl: "/projects/dha-project-image.jpg", // Example: "[https://placehold.co/600x400/](https://placehold.co/600x400/)..."
    info: "A leading residential and commercial real estate developer in Pakistan, known for large-scale, master-planned communities.",
    services: [
      "Structural Engineering",
      "Master Planning Supervision",
      "Infrastructure Design",
    ],
  },
  {
    id: 2,
    name: "Danish Red Cross",
    logoUrl: "/clients/danish.png",
    // --- URGENT: REPLACE THIS PLACEHOLDER ---
    projectImageUrl: "/projects/red-cross-project.jpg", // Example: "[https://placehold.co/600x400/](https://placehold.co/600x400/)..."
    info: "Part of the global Red Cross network, providing humanitarian aid, disaster response, and community health services worldwide.",
    services: [
      "Humanitarian Architecture",
      "Warehouse/Logistics Design",
      "Project Management",
    ],
  },
  {
    id: 3,
    name: "Saif Associates",
    logoUrl: "/clients/saifLogo.png",
    // --- URGENT: REPLACE THIS PLACEHOLDER ---
    projectImageUrl: "/projects/saif-project.jpg", // Example: "[https://placehold.co/600x400/](https://placehold.co/600x400/)..."
    info: "A prominent Pakistani consultancy firm specializing in engineering, architecture, and project management for major infrastructure.",
    services: [
      "Collaborative Engineering",
      "Structural Peer Review",
      "Joint Venture Projects",
    ],
  },
  {
    id: 4,
    name: "Rabbani Associates",
    logoUrl: "/clients/rabani-logo.png",
    // --- URGENT: REPLACE THIS PLACEHOLDER ---
    projectImageUrl: "/projects/rabbani-project.jpg", // Example: "[https://placehold.co/600x400/](https://placehold.co/600x400/)..."
    info: "An award-winning architectural and design firm based in Pakistan, recognized for its innovative and contemporary building designs.",
    services: [
      "Structural Consultation",
      "Architectural Partnership",
      "Feasibility Studies",
    ],
  },
];

// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function FeaturedClients() {
  return (
    // 3. Main Section --- FIX 1: ADDED DEPTH ---
    <section className="py-16 lg:py-24 bg-neutral-50">
      {" "}
      {/* CHANGED from bg-white */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-xs lg:text-sm font-bold text-orange-500 tracking-widest uppercase font-oswald">
            A CLOSER LOOK
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight font-oswald mt-4">
            Featured Client Projects
          </h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-inter mt-6">
            We're proud to have partnered with industry leaders. Here's a
            detailed look at the scope and services we provided for some of our
            key clients.
          </p>
        </motion.div>

        {/* 4. Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredClientData.map((client, index) => (
            <motion.div
              key={client.id}
              // --- FIX 2: ADDED 'group' FOR HOVER EFFECT ---
              className="group flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              {/* Project Image --- FIX 2: ADDED 'overflow-hidden' --- */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <img
                  src={client.projectImageUrl}
                  alt={`${client.name} Project`}
                  // --- FIX 2: ADDED IMAGE ZOOM EFFECT ---
                  className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Client Logo & Name */}
                <div className="flex items-center mb-4">
                  <div className="relative w-24 h-12 mr-4 flex-shrink-0">
                    <img
                      src={client.logoUrl}
                      alt={`${client.name} Logo`}
                      className="object-contain object-left w-full h-full absolute inset-0"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-oswald text-xl font-bold text-gray-900">
                    {client.name}
                  </h3>
                </div>

                {/* Client Info */}
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                  {client.info}
                </p>

                {/* Services Provided */}
                <div>
                  <h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">
                    Services Provided
                  </h4>
                  <ul className="space-y-2">
                    {client.services.map((service, i) => (
                      <li key={i} className="flex items-center">
                        <Check
                          size={16}
                          className="text-orange-500 mr-2 flex-shrink-0"
                        />
                        <span className="font-inter text-sm text-gray-700">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
