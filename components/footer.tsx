"use client";

import { motion } from "framer-motion";
import Link from "next/link"; // Re-enabled for proper navigation
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

// --- 1. DEFINE LINK INTERFACE ---
interface FooterLink {
  name: string;
  href: string;
}

// --- 2. UPDATE LINKS OBJECT WITH ALL PAGES ---
const footerLinks: { [key: string]: FooterLink[] } = {
  Services: [
    { name: "Architectural Design", href: "/expertise" },
    { name: "Structural Engineering", href: "/expertise" },
    { name: "Urban Planning", href: "/expertise" },
    { name: "Construction Management", href: "/expertise" },
  ],
  Expertise: [
    { name: "Sustainable Architecture", href: "/expertise" },
    { name: "Interior Design", href: "/expertise" },
    { name: "Project Oversight", href: "/expertise" },
    { name: "Technical Consulting", href: "/expertise" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/others/team" },
    { name: "Projects", href: "/projects" },
    { name: "Clients", href: "/others/clients" },
    { name: "Gallery", href: "/others/gallery" },
    { name: "Careers", href: "/contact" }, // Changed to "Careers" to match your text
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
        >
          {/* Brand - PREMIUM VERSION */}
          <div className="lg:col-span-1">
            {/* --- 3. REPLACED 'P' BLOCK WITH LOGO IMAGE --- */}
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/logo.png"
                alt="Pyramids Logo"
                className="h-14 w-auto" // Sized for the footer
              />
              <div>
                <p className="text-base font-bold font-heading tracking-wide">
                  PYRAMIDS
                </p>
                <p className="text-xs opacity-75 font-sans">
                  ENGINEERS & ARCHITECTS
                </p>
              </div>
            </Link>
            <p className="text-sm opacity-75 leading-relaxed font-sans">
              Engineering excellence and architectural innovation for spaces
              that inspire.
            </p>
          </div>

          {/* Links - B/W/O THEME */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-4 text-orange-500 font-heading uppercase tracking-wide text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {/* --- 4. CHANGED <a> to <Link> --- */}
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-75 hover:opacity-100 hover:text-orange-500 transition-all duration-300 font-sans"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Divider - ORANGE ACCENT */}
        <div className="border-t border-orange-500/20 my-8" />

        {/* Bottom - PREMIUM STYLING */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm opacity-75 font-sans">
            © {currentYear} Pyramids Consulting Engineers & Architects. All
            rights reserved.
          </p>

          {/* Social Links - SQUARISH DESIGN */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* --- 4. CHANGED <a> to <Link> --- */}
                  <Link
                    href={social.href}
                    className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-none flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group"
                  >
                    <Icon
                      size={18}
                      className="text-white group-hover:text-black"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Professional Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-4 bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-none">
            <div className="w-2 h-2 bg-orange-500 rounded-none"></div>
            <span className="text-xs font-bold text-white tracking-widest uppercase font-heading">
              PEC Certified • ISO Standards • Trusted Since 2006
            </span>
            <div className="w-2 h-2 bg-orange-500 rounded-none"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
