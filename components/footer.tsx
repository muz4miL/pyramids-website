"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      "Architectural Design",
      "Structural Engineering",
      "Urban Planning",
      "Green Building",
    ],
    Company: ["About Us", "Our Team", "Careers", "Blog"],
    Resources: ["Portfolio", "Case Studies", "News", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-serif text-lg font-bold">
                  P
                </span>
              </div>
              <div>
                <p className="text-sm font-bold">PYRAMIDS</p>
                <p className="text-xs opacity-75">ENGINEERS & ARCHITECTS</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Designing the future with precision and innovation.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-4 text-yellow-400">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm opacity-75 hover:opacity-100 hover:text-yellow-400 transition-all"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm opacity-75">
            © {currentYear} Pyramids Consulting Engineers & Architects. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all"
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
