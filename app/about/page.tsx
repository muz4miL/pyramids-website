"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutPreview from "@/components/home-preview/AboutPreview";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <OurJourneySection />
      {/* <AboutPreview />  */}
      <LeadershipTeamSection />
      <AccreditationSection />
      <AboutCTASection />
      <Footer />
    </main>
  );
}

function AboutHero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-black overflow-hidden min-h-[60vh] md:min-h-[80vh]">
      {/* === PYRAMID LINE ART BACKGROUND (VISIBILITY FIXED) === */}
      {/* FIX 1: Increased opacity from opacity-50 to opacity-75
        FIX 2: Changed line color from gray-700 to a brighter gray-600
      */}
      <div className="absolute inset-0 opacity-75" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          {/* Faint Grid (Kept subtle) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Pyramid Wireframe (Brighter Lines) */}
          {/* Main Outer Lines (from Apex) */}
          <div className="absolute top-1/4 left-1/2 w-px h-[60vh] bg-gray-600 transform origin-top rotate-[-20deg]" />
          <div className="absolute top-1/4 left-1/2 w-px h-[60vh] bg-gray-600 transform origin-top rotate-[20deg]" />

          {/* Inner "3D" Lines (from Apex) */}
          <div className="absolute top-1/4 left-1/2 w-px h-[50vh] bg-gray-600 transform origin-top rotate-[-12deg]" />
          <div className="absolute top-1/4 left-1/2 w-px h-[50vh] bg-gray-600 transform origin-top rotate-[12deg]" />

          {/* Central Vertical Line */}
          <div className="absolute top-1/4 left-1/2 w-px h-[50vh] bg-gray-600" />

          {/* Horizontal Cross-Lines */}
          <div className="absolute top-1/2 left-1/2 w-[25%] h-px bg-gray-600 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-2/3 left-1/2 w-[40%] h-px bg-gray-600 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-3/4 left-1/2 w-[55%] h-px bg-gray-600 -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>
      {/* === END OF PYRAMID ART === */}

      {/* === MAIN CONTENT (Unchanged) === */}
      {/* Main Content Container */}
      <div className="absolute inset-0">
        {/* Left Side - Headline */}
        <div className="absolute top-4 left-4 md:top-[120px] md:left-[80px]">
          {/* ABOUT PYRAMIDS label */}
          <div className="flex items-center mb-2 md:mb-3">
            <div className="w-3 h-3 bg-[#facc15] md:w-2 md:h-2 mr-3" />
            <span className="text-[#facc15] font-bold text-sm tracking-widest uppercase font-montserrat-alternates md:text-base md:tracking-wide">
              ABOUT PYRAMIDS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-2xl md:text-6xl font-black uppercase leading-tight font-montserrat-alternates">
            DYNAMIC,
            <br />
            MULTIDIMENSIONAL
            <br />& PROVEN
          </h1>
        </div>

        {/* Right Side - Descriptive Text - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block absolute bottom-16 right-8 md:bottom-20 md:right-30">
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs md:max-w-sm font-normal text-left">
            Established in 2006, Pyramids is a dynamic, fast-growing
            organization providing multidimensional engineering and
            architectural services, from preliminary planning to detailed
            execution.
          </p>
        </div>
      </div>

      {/* Mobile Descriptive Text - Below the image */}
      <div className="md:hidden bg-gray-900 p-6 absolute bottom-0 left-0 right-0 border-t border-gray-800">
        <p className="text-gray-300 text-sm leading-relaxed font-normal text-left">
          Established in 2006, Pyramids is a dynamic, fast-growing organization
          providing multidimensional engineering and architectural services,
          from preliminary planning to detailed execution.
        </p>
      </div>
    </section>
  );
}

function LeadershipTeamSection() {
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

function AccreditationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    { name: "DHA Peshawar" },
    { name: "Danish Red Cross" },
    { name: "Canadian Red Cross" },
    { name: "German Red Cross" },
    { name: "Rabbani Associates" },
    { name: "Saif Associates" },
    { name: "Medair" },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-24">
      {/* === Background Architectural Lines - FIXED (Full Scale) === */}
      {/* This uses the same, large-scale art from the perfected AboutHero */}
      <div className="absolute inset-0 opacity-75" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          {/* Faint Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Pyramid Wireframe (Brighter & Larger) */}
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
      {/* === END OF BACKGROUND ART === */}

      {/* Content Container (Now sits on top of the art) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Official Accreditation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-extrabold text-white mb-6">
                OFFICIAL ACCREDITATION
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#facc15] mb-4">
                    Pakistan Engineering Council
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-300">
                      <strong className="text-white">Registration:</strong>{" "}
                      CONSULT/1205
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">
                        Year of Registration:
                      </strong>{" "}
                      2006
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">CEO:</strong> Mr. Imran
                      Siddique
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Status:</strong> Active
                      Member
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Specialization:</strong>{" "}
                      Multidisciplinary Engineering Services
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Our Valued Clients */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-extrabold text-white mb-6">
                OUR VALUED CLIENTS
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300 flex items-center justify-center min-h-[100px]"
                  >
                    <span className="text-gray-700 font-semibold text-center">
                      {client.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutCTASection() {
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

// OurJourneySection function component - Add this to your app/about/page.tsx
function OurJourneySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      year: "2000",
      title: "FOUNDATION OF PYRAMIDS",
      description:
        "Established as a multidisciplinary engineering and architectural consultancy, driven by a commitment to quality.",
    },
    {
      year: "2005",
      title: "DIVERSIFIED PORTFOLIO",
      description:
        "Successfully expanded into major infrastructure projects, including early water supply and bridge designs.",
    },
    {
      year: "2010",
      title: "PEC REGISTRATION & GROWTH",
      description:
        "Achieved Pakistan Engineering Council (PEC) registration (CONSULT/1205), solidifying our professionalism.",
    },
    {
      year: "2015",
      title: "LANDMARK BUILDING ACHIEVEMENTS",
      description:
        "Completed significant high-rise commercial and residential projects, reshaping urban landscapes.",
    },
    {
      year: "2020",
      title: "EXPANDING HORIZONS",
      description:
        "Further diversified into hydro power and comprehensive town planning.",
    },
    {
      year: "TODAY",
      title: "CONTINUOUS INNOVATION",
      description:
        "Leading the industry with sustainable practices and cutting-edge design solutions for a brighter future.",
    },
  ];

  const statisticsData = [
    { value: "300+", label: "Projects Completed" },
    { value: "25+", label: "Years Experience" },
    { value: "15+", label: "Skilled Professionals" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "6+", label: "Sectors Served" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block - Fixed Alignment */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16 lg:mb-20"
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

            {/* Right Side - Description - Fixed Alignment */}
            <div className="flex items-start">
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

        {/* Horizontal Timeline Section */}
        <div className="max-w-6xl mx-auto mb-16 lg:mb-20">
          {/* Timeline Container */}
          <div className="relative">
            {/* Continuous Solid Connector Line */}
            <div className="absolute left-0 right-0 top-4 h-px bg-gray-300 z-0 hidden md:block" />

            {/* Timeline Items Container - NO SCROLLBARS */}
            <div className="flex md:flex-nowrap md:justify-between gap-8 md:gap-4 relative z-10 px-4 md:px-0 overflow-hidden">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-full md:w-auto md:flex-1 flex flex-col items-center"
                >
                  {/* Year Label with Solid Dot */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-3 h-3 bg-gray-700 rounded-full mb-2 border-4 border-white" />
                    <div className="text-lg font-bold text-gray-400 tracking-wide">
                      {event.year}
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 w-full max-w-xs min-h-[180px] hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300 flex flex-col mx-auto"
                  >
                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 leading-tight">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* === MODIFIED STATISTICS BAR (Monochromatic & COMPACT) === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          // CHANGED: Reduced padding from py-10/12 to py-8
          className="w-full bg-black py-8"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {statisticsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  {/* Large Number - CHANGED: Reduced font size */}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                    {stat.value}
                  </div>

                  {/* Label - CHANGED: Reduced font size and lighter weight */}
                  <div className="text-xs md:text-sm font-light uppercase text-gray-300 tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
