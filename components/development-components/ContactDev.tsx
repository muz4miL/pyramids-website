// components/developments-components/ContactDev.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Variants } from "framer-motion";

const fadeIn = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

const ContactDev = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const offices = [
    {
      city: "PESHAWAR",
      address:
        "Office 333, 3rd floor, Uhad tower, phase 3 chowk, near jaili kabab, Peshawar",
      type: "Main Office",
    },
    {
      city: "SWAT SITE OFFICE",
      address: "LAVITA malam jabba, main malam chowk, malam jabba, Sawat",
      type: "Site Office",
    },
    {
      city: "ISLAMABAD",
      address: "Office 30, 2nd floor, Aslam plaza, E11/2, Islamabad",
      type: "Branch Office",
    },
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Call Us",
      details: ["0335 8080802", "0332 8080806"],
      link: "tel:03358080802",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email Us",
      details: ["info@lavitamalamjabba.com"],
      link: "mailto:info@lavitamalamjabba.com",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full bg-white text-black overflow-hidden py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn(0)}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-orange-500 mr-3" />
            <span className="font-inter text-orange-500 font-medium text-sm tracking-widest uppercase">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="font-oswald text-4xl lg:text-5xl font-medium uppercase text-gray-900 leading-tight mb-6">
            Start Your
            <br />
            <span className="text-orange-500">Investment Journey</span>
          </h2>

          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to explore premium investment opportunities? Contact our team
            for personalized consultations, site visits, and detailed project
            information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.2)}
          >
            <h3 className="font-oswald text-2xl uppercase text-gray-900 mb-8">
              Contact Information
            </h3>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn(0.3 + index * 0.1)}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-orange-500/30 transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <div className="text-orange-500">{contact.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-oswald text-lg uppercase text-gray-900 mb-2">
                      {contact.label}
                    </h4>
                    {contact.details.map((detail, detailIndex) => (
                      <div key={detailIndex}>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            className="font-inter text-gray-600 hover:text-orange-500 transition-colors block"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p className="font-inter text-gray-600">{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Offices */}
            <div>
              <h4 className="font-oswald text-xl uppercase text-gray-900 mb-6">
                Our Offices
              </h4>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeIn(0.5 + index * 0.1)}
                    className="border-l-4 border-orange-500 pl-4 py-2"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-oswald text-lg text-gray-900">
                          {office.city}
                        </h5>
                        <p className="font-inter text-gray-600 text-sm mt-1">
                          {office.address}
                        </p>
                      </div>
                      <span className="font-inter text-orange-500 text-xs uppercase tracking-wider bg-orange-500/10 px-2 py-1 rounded">
                        {office.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn(0.4)}
          >
            <div className="bg-gray-900 rounded-2xl p-8 lg:p-10 text-white h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-oswald text-2xl uppercase text-white mb-2">
                  Ready to Invest?
                </h3>
                <p className="font-inter text-gray-300">
                  Schedule a personalized consultation with our investment
                  specialists
                </p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4 mb-8">
                <motion.a
                  href="tel:03358080802"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full bg-orange-500 text-black font-bold uppercase py-4 rounded-lg font-inter text-sm border-2 border-orange-500 hover:bg-white transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now: 0335 8080802
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full bg-transparent text-white font-bold uppercase py-4 rounded-lg font-inter text-sm border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  Send Message
                </motion.a>
              </div>

              {/* Additional Info */}
              <div className="text-center">
                <p className="font-inter text-gray-400 text-sm mb-4">
                  What you'll get:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {[
                    "Project Brochure",
                    "Payment Plan",
                    "Floor Plans",
                    "Site Visit",
                    "ROI Analysis",
                    "Legal Documentation",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactDev;
