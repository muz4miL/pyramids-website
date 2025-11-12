"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LeadershipTeamSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "ENGR. ABDUL REHMAN",
      position: "PRINCIPAL ENGINEER & FOUNDER",
      description:
        "With over 25 years of experience in structural engineering and project management, Engr. Abdul Rehman provides strategic leadership and technical oversight for all major projects.",
    },
    {
      name: "ENGR. MUHAMMAD ALI",
      position: "SENIOR PROJECT DIRECTOR",
      description:
        "Specializing in high-rise structures and complex architectural designs, Engr. Muhammad Ali ensures precision engineering and innovative solutions for our most challenging projects.",
    },
    {
      name: "ARCH. SARA AHMED",
      position: "LEAD ARCHITECT",
      description:
        "Bringing creative vision and technical expertise, Arch. Sara Ahmed leads our architectural team in designing spaces that blend aesthetic appeal with functional excellence.",
    },
  ];

  return (
    <section ref={ref} className="w-full bg-black text-white py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-orange-500 mr-3" />
            <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
              LEADERSHIP TEAM
            </span>
          </div>

          <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-white leading-tight mb-6">
            EXPERIENCED LEADERS
            <br />
            DRIVING EXCELLENCE
          </h2>

          <p className="font-inter text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our leadership team brings decades of combined experience in
            engineering and architecture, ensuring every project benefits from
            seasoned expertise and innovative thinking.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                  },
                },
              }}
              className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-1 bg-orange-500 mb-4"></div>
                <h3 className="font-oswald text-2xl font-medium text-white uppercase mb-2">
                  {member.name}
                </h3>
                <p className="font-inter text-orange-500 text-sm uppercase tracking-wider mb-4">
                  {member.position}
                </p>
              </div>

              <p className="font-inter text-gray-300 leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- Trust Indicator Section REMOVED as requested --- */}
      </div>
    </section>
  );
}
