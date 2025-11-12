"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroPreview from "@/components/home-preview/HeroPreview";
import SpecializationPreview from "@/components/home-preview/SpecializationPreview";
import ProjectsPreview from "@/components/home-preview/ProjectsPreview";
import ClientsPreview from "@/components/home-preview/ClientsPreview";
import ContactPreview from "@/components/home-preview/ContactPreview";
import ArchitecturalDivider from "@/components/StructuralDivider";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Conditional Sticky Hero - Only for Desktop */}
      {!isMobile ? (
        // Desktop: Sticky hero with scroll effect
        <div className="sticky top-0 h-screen z-0">
          <HeroPreview />
        </div>
      ) : (
        // Mobile: Regular hero without sticky
        <div className="h-screen z-0">
          <HeroPreview />
        </div>
      )}

      {/* Scrollable Content */}
      <div className="relative z-10 bg-transparent">
        {/* Black background container - ADD ID HERE */}
        <section id="expertise" className="bg-black">
          <SpecializationPreview />
        </section>

        {/* --- ARCHITECTURAL MASTERPIECE DIVIDER 1 --- */}
        <ArchitecturalDivider direction="black-to-white" />

        {/* Projects Section (White) */}
        <ProjectsPreview />

        {/* --- ARCHITECTURAL MASTERPIECE DIVIDER 2 --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* Clients Section (Black) - NOW INCLUDES TESTIMONIALS */}
        <div className="bg-black">
          <ClientsPreview />
        </div>

        {/* --- ARCHITECTURAL MASTERPIECE DIVIDER 3 --- */}
        <ArchitecturalDivider direction="black-to-white" />

        {/* Rest of sections */}
        <ContactPreview />
        <Footer />
      </div>
    </main>
  );
}
