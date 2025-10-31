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
      <FullTeamSection />
      <CredentialsAndClients />
      <AboutCTASection />
      <Footer />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="relative bg-black overflow-hidden md:mt-20">
      {/* Hero Image - Same as ExpertiseHero */}
      <img
        src="/pyramid-About.png"
        alt="About Pyramids Engineering"
        className="w-full h-[60vh] md:h-[80vh] object-cover"
      />

      {/* Main Content Container - Exact same as ExpertiseHero */}
      <div className="absolute inset-0">
        {/* Left Side - Headline */}
        <div className="absolute top-4 left-4 md:top-[120px] md:left-[80px]">
          {/* ABOUT PYRAMIDS label */}
          <div className="flex items-center mb-2 md:mb-3">
            <div className="w-3 h-3 bg-yellow-400 md:w-2 md:h-2 mr-3"></div>
            <span className="text-yellow-400 font-bold text-sm tracking-widest uppercase font-montserrat-alternates md:text-base md:tracking-wide">
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
      <div className="md:hidden bg-gray-900 p-6">
        <p className="text-gray-300 text-sm leading-relaxed font-normal text-left">
          Established in 2006, Pyramids is a dynamic, fast-growing organization
          providing multidimensional engineering and architectural services,
          from preliminary planning to detailed execution.
        </p>
      </div>
    </section>
  );
}

// Step 3: Full Team Section (White)
function FullTeamSection() {
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
    {
      name: "M. Asif Khan",
      title: "Senior Civil Engineer",
      detail: "15 Years Experience",
    },
    {
      name: "Sara Ahmed",
      title: "Project Manager",
      detail: "8 Years Experience",
    },
    {
      name: "Ali Raza",
      title: "Electrical Engineer",
      detail: "12 Years Experience",
    },
    {
      name: "Fatima Noor",
      title: "Interior Designer",
      detail: "6 Years Experience",
    },
    {
      name: "Bilal Khan",
      title: "Site Engineer",
      detail: "7 Years Experience",
    },
    {
      name: "Zainab Malik",
      title: "Structural Designer",
      detail: "5 Years Experience",
    },
    {
      name: "Omar Farooq",
      title: "MEP Engineer",
      detail: "10 Years Experience",
    },
    {
      name: "Hina Shahid",
      title: "Quantity Surveyor",
      detail: "8 Years Experience",
    },
    {
      name: "Kamran Ali",
      title: "Draftsman",
      detail: "15 Years Experience",
    },
    {
      name: "Ayesha Khan",
      title: "Architectural Designer",
      detail: "4 Years Experience",
    },
    {
      name: "Rashid Mahmood",
      title: "Construction Manager",
      detail: "20 Years Experience",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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
              {/* OUR TEAM label */}
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-gray-500 md:w-4 md:h-4 mr-3"></div>
                <span className="text-gray-500 font-bold text-sm tracking-widest uppercase font-montserrat-alternates md:text-base">
                  OUR TEAM
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                OUR DEDICATED
                <br />
                PROFESSIONALS
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="flex items-start">
              <p className="text-[#545454] text-lg leading-relaxed max-w-md font-normal">
                Our firm's most valuable asset is our team. We engage
                outstanding professionals in all activities to tap the full
                potential of every employee, ensuring excellence across all our
                engineering and architectural projects.
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
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

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>

                {/* Title */}
                <p className="text-gray-600 mb-3 text-sm">{member.title}</p>

                {/* Experience */}
                <p className="text-yellow-500 font-bold text-sm">
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

// Step 4: Credentials & Clients (Dark)
function CredentialsAndClients() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    { name: "DHA Peshawar", logo: "/clients/dha.png" },
    { name: "Danish Red Cross", logo: "/clients/danish-red-cross.png" },
    { name: "Canadian Red Cross", logo: "/clients/canadian-red-cross.png" },
    { name: "German Red Cross", logo: "/clients/german-red-cross.png" },
    { name: "Rabbani Associates", logo: "/clients/rabbani.png" },
    { name: "Saif Associates", logo: "/clients/saif.png" },
    { name: "Medair", logo: "/clients/medair.png" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Credentials */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                OFFICIAL ACCREDITATION
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                    Pakistan Engineering Council
                  </h3>
                  <p className="text-xl text-gray-300 font-semibold">
                    Registration: CONSULT/1205
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      Year of Registration:
                    </span>{" "}
                    2006
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">CEO:</span> Mr.
                    Imran Siddique
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Status:</span>{" "}
                    Active Member
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      Specialization:
                    </span>{" "}
                    Multidisciplinary Engineering Services
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Clients */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                OUR VALUED CLIENTS
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex items-center justify-center h-24 hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-center">
                      <span className="text-gray-300 font-semibold text-sm">
                        {client.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Step 5: Final CTA (Dark)
function AboutCTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="/ctaExpertise.png"
        alt="Pyramids architectural background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Watermark */}
      <img
        src="/pyramid-About.png"
        alt="Pyramids expertise"
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-20"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center py-20 lg:py-28"
        >
          {/* Pre-title with dimmed lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-0.5 bg-yellow-400/50"></div>
            <span className="text-sm font-bold text-yellow-400 tracking-widest uppercase">
              GET IN TOUCH
            </span>
            <div className="w-12 h-0.5 bg-yellow-400/50"></div>
          </motion.div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
            READY TO START YOUR PROJECT?
          </h2>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl font-bold text-gray-300 uppercase mt-4 mb-10">
            CONTACT US FOR EXPERT SOLUTIONS
          </p>

          {/* Single Button */}
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
    { value: "75+", label: "Skilled Professionals" },
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

        {/* Enhanced Statistics Bar Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full bg-gray-900 rounded-2xl py-12 lg:py-16"
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
                  {/* Large Number - Enhanced Typography */}
                  <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 mb-2">
                    {stat.value}
                  </div>

                  {/* Label - Enhanced Typography */}
                  <div className="text-base md:text-lg font-extrabold uppercase text-white tracking-wide">
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
