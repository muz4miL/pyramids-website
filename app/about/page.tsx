import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArchitecturalDivider from "@/components/StructuralDivider";

// Import all the About page components
import AboutHero from "@/components/about-components/AboutHero";
import OurJourneySection from "@/components/about-components/OurJourneySection";
import LeadershipTeamSection from "@/components/about-components/LeadershipTeamSection";
import AccreditationSection from "@/components/about-components/AccreditationSection";
import PhilosophySection from "@/components/about-components/PhilosophySection";
import AboutCTASection from "@/components/about-components/AboutCTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky Hero (z-0) */}
      <div className="sticky top-0 h-screen z-0">
        <AboutHero />
      </div>

      {/* Scrollable Content (z-10) */}
      <div className="relative z-10 bg-transparent">
        {/* SECTION 2: WHITE */}
        <OurJourneySection />

        {/* --- DIVIDER: WHITE-TO-BLACK --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* SECTION 3: BLACK */}
        <div className="bg-black">
          <LeadershipTeamSection />
        </div>

        {/* --- DIVIDER: BLACK-TO-WHITE --- */}
        <ArchitecturalDivider direction="black-to-white" />

        {/* SECTION 4: WHITE */}
        <PhilosophySection />

        {/* --- DIVIDER: WHITE-TO-BLACK --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* SECTION 5: BLACK */}
        <AccreditationSection />

        {/* --- DIVIDER: BLACK-TO-WHITE --- */}
        <ArchitecturalDivider direction="black-to-white" />

        {/* SECTION 6: WHITE - CTA (ONLY ONE!) */}
        <AboutCTASection />

        {/* Footer is already black, so it flows perfectly */}
        <Footer />
      </div>
    </main>
  );
}
