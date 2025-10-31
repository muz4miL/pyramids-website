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
      <TeamSection />
      <EnhancedCTASection />
      <Footer />
    </main>
  );
}

function ExpertiseHero() {
  return (
    <section className="relative bg-black overflow-hidden md:mt-20">
      {/* Hero Image - Responsive */}
      <img
        src="/expertiseImage.png"
        alt="Our Engineering Expertise"
        className="w-full h-auto object-cover md:h-full"
      />

      {/* Main Content Container */}
      <div className="absolute inset-0">
        {/* Left Side - Headline */}
        <div className="absolute top-4 left-4 md:top-[120px] md:left-[80px]">
          {/* OUR EXPERTISE label */}
          <div className="flex items-center mb-2 md:mb-3">
            <div className="w-3 h-3 bg-yellow-400 md:w-2 md:h-2 mr-3"></div>
            <span className="text-yellow-400 font-bold text-sm tracking-widest uppercase font-montserrat-alternates md:text-base md:tracking-wide">
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

        {/* Right Side - Descriptive Text - Hidden on mobile, shown on desktop */}
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

      {/* Mobile Descriptive Text - Below the image */}
      <div className="md:hidden bg-gray-900 p-6">
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

// 4. Team Section
function TeamSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Imran Siddique",
      title: "Chief Executive Officer",
      detail: "25 Years Experience",
    },
    {
      name: "Dr. Qaiser Ali",
      title: "Structure Engineer",
      detail: "25 Years Experience",
    },
    {
      name: "Yasar Durani",
      title: "Chief Architect",
      detail: "10 Years Experience",
    },
    {
      name: "Ajaz Shah",
      title: "Chief Surveyor",
      detail: "32 Years Experience",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Aligned with other sections */}
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
              {/* OUR COLLECTIVE EXPERTISE label with square - GRAY COLOR */}
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-gray-500 md:w-2 md:h-2 mr-3"></div>
                <span className="text-gray-500 font-bold text-sm tracking-widest uppercase font-montserrat-alternates md:text-base md:tracking-wide">
                  OUR COLLECTIVE EXPERTISE
                </span>
              </div>

              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                MEET OUR
                <br />
                LEADERSHIP TEAM
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="flex items-start md:ml-42 md:mt-10">
              <p className="text-[#545454] text-sm leading-relaxed max-w-md font-normal text-left md:mt-4">
                Our strength is our team of 15+ dedicated professionals. Led by
                CEO Imran Siddique (25 Yrs Exp) and a core group of PhD-level
                structural engineers, chief architects, and surveyors, we bring
                decades of combined experience to your project.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="max-w-6xl mx-auto md:ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Profile Content */}
              <div className="text-center">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 bg-yellow-400/20 text-yellow-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A1.875 1.875 0 0 1 18.126 22.5H5.874a1.875 1.875 0 0 1-1.373-2.382Z"
                    />
                  </svg>
                </div>

                {/* Name - Updated styling */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>

                {/* Title - Updated styling */}
                <p className="text-base text-gray-600 mb-3">{member.title}</p>

                {/* Detail - Yellow Accent */}
                <p className="text-yellow-500 font-bold text-lg">
                  {member.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// 5. Enhanced CTA Section (FINAL VERSION)
function EnhancedCTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative overflow-hidden bg-black">
      {/* === LAYER 1: NEW Custom Background Image (Bottom) === */}
      {/* !!! IMPORTANT !!!
        REPLACE THE 'src' BELOW WITH YOUR NEW FILENAME
      */}
      <img
        src="/ctaExpertise.png" // <-- PASTE YOUR NEW FILENAME HERE
        alt="Pyramids architectural background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* === LAYER 2: Abstract Line Art (Watermark) === */}

      <img
        src="/expertiseImage.png"
        alt="Pyramids expertise"
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-20" // Watermark opacity
      />

      {/* === LAYER 3: Content (Top) === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center py-20 lg:py-28" // Added padding here
        >
          {/* Pre-title with dimmed lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-0.5 bg-yellow-400/50"></div>{" "}
            {/* Dimmed line */}
            <span className="text-sm font-bold text-yellow-400 tracking-widest uppercase">
              GET IN TOUCH
            </span>
            <div className="w-12 h-0.5 bg-yellow-400/50"></div>{" "}
            {/* Dimmed line */}
          </motion.div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
            READY TO START YOUR PROJECT?
          </h2>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl font-bold text-gray-300 uppercase mt-4 mb-10">
            CONTACT US FOR EXPERT SOLUTIONS
          </p>

          {/* Single Button - Updated to match navbar */}
          <div className="flex justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-yellow-400 text-[#333] font-medium whitespace-nowrap rounded-none hover:bg-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-poppins"
            >
              Get Started
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// OurJourneySection function component - Add this to your app/about/page.tsx
function OurJourneySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statisticsData = [
    { value: "300+", label: "Projects Completed" },
    { value: "25+", label: "Years Experience" },
    { value: "75+", label: "Skilled Professionals" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "6+", label: "Sectors Served" },
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
              {/* OUR JOURNEY label with square - GRAY COLOR */}
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-gray-500 md:w-2 md:h-2 mr-3"></div>
                <span className="text-gray-500 font-bold text-sm tracking-widest uppercase font-montserrat-alternates md:text-base md:tracking-wide">
                  OUR JOURNEY
                </span>
              </div>

              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                OVER 25 YEARS OF
                <br />
                ENGINEERING EXCELLENCE
                <br />
                AND INNOVATION
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="flex items-start md:ml-42 md:mt-10">
              <p className="text-[#545454] text-sm leading-relaxed max-w-md font-normal text-left">
                Our legacy is defined by over two decades of unwavering
                dedication, technical prowess, and a relentless pursuit of
                engineering perfection. From initial concept to project
                completion, we consistently deliver solutions that stand the
                test of time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Statistics Grid - 3 columns */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : {}}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="max-w-6xl mx-auto md:ml-20 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12"
        >
          {statisticsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-center"
            >
              {/* Large Number - Yellow Accent */}
              <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-yellow-500 mb-4">
                {stat.value}
              </div>

              {/* Statistic Label */}
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-gray-900 mb-3">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
