"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BridgeIcon } from "@/components/icons/BridgeIcon";
import { LightningIcon } from "@/components/icons/LightningIcon";
import { ModernBuildingIcon } from "@/components/icons/ModernBuildingIcon";
import { TownPlanningIcon } from "@/components/icons/TownPlanningIcon";
import { WaterSupplyIcon } from "@/components/icons/WaterSupplyIcon";
import { RenewableEnergyIcon } from "@/components/icons/RenewableEnergyIcon";
import { ArrowRight } from "lucide-react";

export default function Expertise() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ExpertiseHero />
      <PhilosophySection />
      <EnhancedExpertiseGrid />
      {/* <TeamSection /> */}
      <FullScopeSection />
      <ExpertiseCTASection />
      <Footer />
    </main>
  );
}

function ExpertiseHero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-black overflow-hidden min-h-[60vh] md:min-h-[80vh]">
      {/* === PYRAMID LINE ART BACKGROUND (Copied from perfected AboutHero) === */}
      {/* This is the same, visible art from the perfected AboutHero */}
      <div className="absolute inset-0 opacity-75" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          {/* Faint Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Pyramid Wireframe (Brighter Lines) */}
          <div className="absolute top-1/4 left-1/2 w-px h-[60vh] bg-gray-600 transform origin-top rotate-[-20deg]" />
          <div className="absolute top-1/4 left-1/2 w-px h-[60vh] bg-gray-600 transform origin-top rotate-[20deg]" />
          <div className="absolute top-1/4 left-1/2 w-px h-[50vh] bg-gray-600 transform origin-top rotate-[-12deg]" />
          <div className="absolute top-1/4 left-1/2 w-px h-[50vh] bg-gray-600 transform origin-top rotate-[12deg]" />
          <div className="absolute top-1/4 left-1/2 w-px h-[50vh] bg-gray-600" />
          <div className="absolute top-1/2 left-1/2 w-[25%] h-px bg-gray-600 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-2/3 left-1/2 w-[40%] h-px bg-gray-600 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-3/4 left-1/2 w-[55%] h-px bg-gray-600 -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>
      {/* === END OF PYRAMID ART === */}

      {/* === MAIN CONTENT (This is all from ExpertiseHero) === */}
      {/* Main Content Container */}
      <div className="absolute inset-0">
        {/* Left Side - Headline */}
        <div className="absolute top-4 left-4 md:top-[120px] md:left-[80px]">
          {/* OUR EXPERTISE label */}
          <div className="flex items-center mb-2 md:mb-3">
            <div className="w-3 h-3 bg-[#facc15] md:w-2 md:h-2 mr-3" />
            <span className="text-[#facc15] font-bold text-sm tracking-widest uppercase font-montserrat-alternates md:text-base md:tracking-wide">
              OUR EXPERTISE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-2xl md:text-6xl font-black uppercase leading-tight font-montserrat-alternates">
            COMPREHENSIVE SKILL,
            <br />
            FLAWLESS EXECUTION
          </h1>
        </div>

        {/* Right Side - Descriptive Text */}
        <div className="hidden md:block absolute bottom-16 right-8 md:bottom-20 md:right-30">
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs md:max-w-sm font-normal text-left">
            Experience integrated mastery across all disciplines.
            <br /> We deliver end-to-end solutions managed with{" "}
            <strong className="text-white">accountability</strong>,{" "}
            <strong className="text-white">innovation</strong>, and a relentless
            focus on <strong className="text-white">your success</strong>.
          </p>
        </div>
      </div>

      {/* Mobile Descriptive Text */}
      <div className="md:hidden bg-black p-6 absolute bottom-0 left-0 right-0 border-t border-gray-800">
        <p className="text-gray-300 text-sm leading-relaxed font-normal text-left">
          Experience integrated mastery across all disciplines. We deliver
          end-to-end solutions managed with{" "}
          <strong className="text-white">accountability</strong>,{" "}
          <strong className="text-white">innovation</strong>, and a relentless
          focus on <strong className="text-white">your success</strong>.
        </p>
      </div>
    </section>
  );
}

// 5. Enhanced CTA Section - FIXED VERSION
function ExpertiseCTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-24">
      {/* Background Architectural Lines - Blueprint Border */}
      <div className="absolute inset-0">
        {/* Main Border Frame */}
        <div className="absolute top-8 left-8 right-8 bottom-8 border border-gray-700 rounded-lg" />

        {/* Corner Accents */}
        <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-gray-600" />
        <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-gray-600" />
        <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-gray-600" />
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-gray-600" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-6"
          >
            READY TO ENGINEER YOUR VISION?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Leverage our multidisciplinary expertise for your next engineering
            challenge. From concept to completion, we deliver excellence.
          </motion.p>

          {/* Main Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#facc15] text-black font-extrabold uppercase px-10 py-4 rounded-lg shadow-lg hover:bg-white transition-colors duration-300 cursor-pointer"
            >
              CONSULT OUR EXPERTS
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pillars = [
    {
      number: "01.",
      image: "/efficiencyExpertise.PNG",
      title: "EFFICIENCY",
      description:
        "We leverage proven technical and management skills, staying current with the latest developments to ensure your project runs smoothly, on time, and on budget.",
    },
    {
      number: "02.",
      image: "/commitmentExpertise.PNG",
      title: "COMMITMENT",
      description:
        "We are fully committed to our clients' success. Our hardworking team is dedicated to seeing your vision through from the first concept to the final, completed structure.",
    },
    {
      number: "03.",
      image: "/honestyExpertise.PNG",
      title: "HONESTY",
      description:
        "Our business is built on a foundation of integrity. We operate professionally and honestly, ensuring total transparency and building lasting trust with all our partners.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Aligned with hero left position */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16 lg:mb-20 md:ml-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Headline */}
            <div>
              {/* OUR PHILOSOPHY label with square - GRAY COLOR */}
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-gray-500 md:w-2 md:h-2 mr-3"></div>
                <span className="text-gray-500 font-bold text-sm tracking-widest uppercase font-montserrat-alternates md:text-base md:tracking-wide">
                  OUR PHILOSOPHY
                </span>
              </div>

              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                PRINCIPLES THAT
                <br />
                GUIDE EVERY PROJECT
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="flex items-start md:ml-42 md:mt-10">
              <p className="text-[#545454] text-sm leading-relaxed max-w-md font-normal text-left">
                Our philosophy is built on three core pillars. This foundation
                of efficiency, commitment, and honesty guides every decision we
                make, from initial design to final execution.
              </p>
            </div>
          </div>
        </motion.div>

        {/* === NEW 3-COLUMN GRID SECTION === */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="max-w-6xl mx-auto md:ml-20 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Number */}
              <span className="text-7xl font-bold text-gray-200 mb-4 block">
                {pillar.number}
              </span>

              {/* Image */}
              <div className="mb-6">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Sub-Heading */}
              <h3 className="text-xl font-bold uppercase tracking-wider text-gray-900 mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// 3. Enhanced Expertise Grid - USING THE IMPORTED COMPONENT
function EnhancedExpertiseGrid() {
  const expertiseAreas = [
    {
      icon: BridgeIcon,
      title: "Bridge Engineering",
      description:
        "Design and construction of bridges up to 40m spans with structural excellence and precision engineering.",
      projects: "25+ Bridge Projects",
      highlight: "40M Longest Span",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
    {
      icon: LightningIcon,
      title: "Hydro Power",
      description:
        "Renewable energy solutions with expertise up to 145MW hydro power capacity and grid integration.",
      projects: "15+ Power Projects",
      highlight: "145MW Capacity",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
    {
      icon: ModernBuildingIcon,
      title: "Modern Architecture",
      description:
        "Innovative architectural designs for commercial, residential, and institutional complexes.",
      projects: "180+ Building Projects",
      highlight: "20 Stories Highest",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
    {
      icon: RenewableEnergyIcon,
      title: "Renewable Energy",
      description:
        "Sustainable energy solutions including solar, hydro, and alternative power generation systems.",
      projects: "22+ Energy Projects",
      highlight: "Clean Energy Focus",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
    {
      icon: TownPlanningIcon,
      title: "Town Planning",
      description:
        "Comprehensive urban planning, infrastructure development, and sustainable city solutions.",
      projects: "12+ Planning Projects",
      highlight: "Master Planning",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
    {
      icon: WaterSupplyIcon,
      title: "Water Supply Systems",
      description:
        "Sustainable water management, treatment plants, and supply infrastructure development.",
      projects: "18+ Water Projects",
      highlight: "Clean Water Solutions",
      color: "from-yellow-400/80 to-yellow-500/90",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#facc15_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((expertise, index) => {
            const IconComponent = expertise.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#111111] rounded-2xl border border-gray-800 hover:border-yellow-400/60 p-8 hover:shadow-[0_0_30px_-8px_rgba(250,204,21,0.4)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${expertise.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <IconComponent className="w-8 h-8 text-black" />
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {expertise.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                  {expertise.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700 mt-6">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Projects
                    </div>
                    <div className="text-sm font-bold text-white">
                      {expertise.projects}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Highlight
                    </div>
                    <div className="text-sm font-bold text-yellow-400">
                      {expertise.highlight}
                    </div>
                  </div>
                </div>

                {/* Accent glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FullScopeSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const serviceColumns = [
    {
      title: "Planning & Feasibility",
      items: [
        "Feasibility Studies",
        "PC-1 FORMS Preparation",
        "Social, Financial & Economic Analysis",
        "Site Landscaping & Planning",
        "Base Line Surveys",
      ],
    },
    {
      title: "Design & Engineering",
      items: [
        "Full Architectural Design",
        "Complete Interior Design",
        "3D Visualization & Animation",
        "Structural, HVAC & Electrical Design",
        "Water, Sewerage & Drainage Design",
        "Telecommunication Tower Design",
      ],
    },
    {
      title: "Management & Execution",
      items: [
        "Project & Contract Management",
        "Tender Documentation & Evaluation",
        "Detailed Construction Drawings",
        "Construction Supervision",
        "Quality Control & Assurance",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 uppercase">
            FROM CONCEPT TO COMPLETION
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            A full spectrum of services to ensure your project's success at
            every stage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {serviceColumns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 lg:p-10 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300"
            >
              {/* Column Title */}
              <h3 className="text-2xl font-extrabold text-black mb-4">
                {column.title}
              </h3>

              {/* Services List */}
              <motion.ul
                className="space-y-3"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {column.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-start"
                  >
                    {/* Check Icon */}
                    <svg
                      className="w-5 h-5 text-[#facc15] flex-shrink-0 mr-3 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    {/* Service Text */}
                    <span className="text-base text-gray-700 font-semibold">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
