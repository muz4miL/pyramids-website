"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPreview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MINIMAL HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
            <span className="text-xs lg:text-sm font-bold text-orange-500 tracking-widest uppercase font-heading">
              Contact
            </span>
            <div className="w-6 lg:w-8 h-0.5 bg-orange-500"></div>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-black leading-tight font-heading mb-6">
            Start Your <span className="text-orange-500">Project</span>
          </h2>

          <div className="w-20 h-0.5 bg-orange-500 mx-auto mb-6"></div>

          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto font-sans">
            Ready to bring your vision to life? Let's discuss your project.
          </p>
        </motion.div>

        {/* CLEAN 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT - MINIMAL CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6 font-heading">
                Get In Touch
              </h3>

              {/* MINIMAL CONTACT ITEMS */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "contact@pyramids.com",
                    description: "Send us your project details",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+1 (555) 123-4567",
                    description: "Direct consultation",
                  },
                  {
                    icon: MapPin,
                    title: "Studio",
                    value: "Design District",
                    description: "Visit our office",
                  },
                ].map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-orange-500 rounded-none flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-black font-semibold font-heading uppercase text-sm tracking-wide">
                          {contact.title}
                        </p>
                        <p className="text-orange-500 font-medium font-sans">
                          {contact.value}
                        </p>
                        <p className="text-gray-500 text-sm font-sans mt-1">
                          {contact.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT - CLEAN FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-orange-500 text-black placeholder-gray-500 font-sans transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-orange-500 text-black placeholder-gray-500 font-sans transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-orange-500 text-black placeholder-gray-500 font-sans resize-none transition-all duration-300"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-black text-white font-bold text-lg rounded-none uppercase tracking-wider hover:bg-orange-500 transition-all duration-300 flex items-center justify-center gap-3 font-heading"
              >
                Send Message
                <ArrowRight size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* MINIMAL FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-gray-500 text-sm font-sans">
            We respond within 24 hours • Professional consultation guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
