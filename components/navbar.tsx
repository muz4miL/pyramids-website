"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/expertise", label: "Expertise" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const otherLinks = [
    { href: "/others/clients", label: "Clients" },
    { href: "/others/team", label: "Team" },
    { href: "/others/future", label: "Future" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOthersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="static md:fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 nav-border-fade-top-bottom">
        <div className="md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center">
              <Link href="/" className="group lg:-ml-8">
                <img
                  src="/logo.png"
                  alt="Pyramids Logo"
                  className="h-20 md:h-26 w-auto"
                />
              </Link>
              <div className="hidden md:block h-20 w-px bg-gray-300 ml-6"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors relative group font-poppins"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              {/* Others Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOthersOpen(!isOthersOpen)}
                  onMouseEnter={() => setIsOthersOpen(true)}
                  className="text-base font-medium text-foreground hover:text-blue-500 transition-colors relative group flex items-center gap-1 font-poppins"
                >
                  Others
                  <ChevronDown size={20} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </button>

                {isOthersOpen && (
                  <div
                    onMouseEnter={() => setIsOthersOpen(true)}
                    onMouseLeave={() => setIsOthersOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-gray-100 border border-gray-300 py-2 w-48 z-50"
                  >
                    {otherLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-3 text-base text-foreground hover:bg-gray-200 transition-colors font-poppins"
                        onClick={() => setIsOthersOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Vertical line and CTA Button */}
            <div className="hidden md:flex items-center gap-6">
              <div className="h-20 w-px bg-gray-300 ml-4"></div>
              <button className="px-6 py-2.5 bg-orange-500 text-white font-medium whitespace-nowrap rounded-none hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-poppins ml-4">
                Get In Touch
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? (
                <X size={28} className="text-gray-800" />
              ) : (
                <Menu size={28} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - MOVED OUTSIDE NAV */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50"
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-center px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-poppins"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Others Section Header */}
            <div className="pt-2">
              <div className="text-center py-2">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Others
                </span>
              </div>
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-poppins"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4">
              <button className="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 font-poppins">
                Get In Touch
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
