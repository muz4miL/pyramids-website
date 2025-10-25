"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
            CONSULT WITH EXPERTS
          </span>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-black mt-4 mb-6">
            Begin Your Architectural Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Ready to transform your vision into exceptional architecture? Our
            team of engineers and architects is prepared to bring precision and
            innovation to your project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {[
            {
              icon: Mail,
              title: "Professional Inquiry",
              value: "contact@pyramidsconsulting.com",
            },
            {
              icon: Phone,
              title: "Project Consultation",
              value: "+1 (555) 123-PYRAMID",
            },
            {
              icon: MapPin,
              title: "Design Studio",
              value: "123 Architecture Avenue, Design District, 10001",
            },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-gray-100 rounded-lg text-center hover:bg-gray-200 transition-colors"
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-black" />
                </div>
                <h3 className="font-bold text-black mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg border border-gray-200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black placeholder-gray-500"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black placeholder-gray-500"
            />
            <textarea
              name="message"
              placeholder="Describe your architectural vision or project requirements..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black placeholder-gray-500 resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Request Professional Consultation
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
