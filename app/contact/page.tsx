"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// --- 1. IMPORT THE NEW ICONS ---
import { Building2, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToMap = () => {
    document
      .getElementById("office-map")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - ONLY HEADER */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Headline */}
            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-6">
              Start Your
              <br />
              <span className="text-orange-500">Project</span>
            </h1>

            {/* Description */}
            <p className="font-inter text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Let's discuss your project
              with our architectural and engineering experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Column 1: Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-oswald text-3xl font-bold uppercase text-gray-900 mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-inter text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-inter text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-inter text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-inter text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-inter text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-inter text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-vertical"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-500 text-black font-inter font-bold text-lg uppercase py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Column 2: Contact Information - PREMIUM CARD */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <h2 className="font-oswald text-3xl font-bold uppercase text-gray-900 mb-8">
                  Get In Touch
                </h2>

                {/* Our Offices */}
                <div className="mb-8">
                  <h3 className="font-oswald text-xl font-bold uppercase text-gray-900 mb-4">
                    Our Offices
                  </h3>

                  <div className="space-y-4">
                    {/* --- 2. UPDATED ICON (ISLAMABAD) --- */}
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 flex-shrink-0">
                        <Building2 size={24} className="text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold text-gray-900">
                          Islamabad (Head Office)
                        </h4>
                        <button
                          onClick={scrollToMap}
                          className="font-inter text-gray-600 hover:text-orange-500 transition-colors duration-300 text-left"
                        >
                          Office No.30, 2nd Floor, Aslam Business Square,
                          E-11/2, Islamabad
                        </button>
                      </div>
                    </div>

                    {/* --- 3. UPDATED ICON (PESHAWAR) --- */}
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 flex-shrink-0">
                        <Building2 size={24} className="text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold text-gray-900">
                          Peshawar Office
                        </h4>
                        <p className="font-inter text-gray-600">
                          LG 25, Town Heights, Old Bara Road, Peshawar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="mb-8">
                  <h3 className="font-oswald text-xl font-bold uppercase text-gray-900 mb-4">
                    Contact Details
                  </h3>

                  <div className="space-y-4">
                    {/* --- 4. UPDATED ICON (PHONE) --- */}
                    <div className="flex items-center">
                      <div className="mr-4 flex-shrink-0">
                        <Phone size={24} className="text-orange-500" />
                      </div>
                      <div>
                        <p className="font-inter text-gray-600">
                          0334-514-8335
                        </p>
                        <p className="font-inter text-gray-600">051-230-5537</p>
                      </div>
                    </div>

                    {/* --- 5. UPDATED ICON (EMAIL) --- */}
                    <div className="flex items-center">
                      <div className="mr-4 flex-shrink-0">
                        <Mail size={24} className="text-orange-500" />
                      </div>
                      <div>
                        <p className="font-inter text-gray-600">
                          imran514@hotmail.com
                        </p>
                        <div className="flex items-center mt-1">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                          <p className="font-inter text-sm text-orange-500 font-semibold">
                            Professional email recommended: info@pyramids.pk
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="font-oswald text-xl font-bold uppercase text-gray-900 mb-4">
                    Business Hours
                  </h3>

                  {/* --- 6. UPDATED ICON (HOURS) --- */}
                  <div className="flex items-center">
                    <div className="mr-4 flex-shrink-0">
                      <Clock size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-inter text-gray-600">
                        Monday - Friday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section - NO HEADER */}
      <section id="office-map" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.552391328333!2d73.03121527533824!3d33.68444037331807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfb2bfc1dafd%3A0x5a1b583b641e6f1e!2sE-11%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698765432107!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pyramids Head Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
