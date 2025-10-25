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
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#expertise", label: "Expertise" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const otherLinks = [
    { href: "#clients", label: "Clients" },
    { href: "#team", label: "Team" },
    { href: "#future", label: "Future" },
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

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 nav-border-fade-top-bottom mt-px">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="group -ml-8">
              <img
                src="/logo.png"
                alt="Pyramids Logo"
                className="h-26 w-auto"
              />
            </Link>
            <div className="h-20 w-px bg-gray-300 ml-6"></div>
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
                  className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[120px] z-50"
                >
                  {otherLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 hover:text-blue-400 transition-colors font-poppins"
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
            <button className="px-6 py-2.5 bg-accent text-[#333] font-medium whitespace-nowrap rounded-none hover:bg-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-poppins ml-4">
              Get Started
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-poppins"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-poppins"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button className="w-full px-6 py-2.5 bg-accent text-[#333] font-medium rounded-none hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-poppins">
              Get Started
              <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
