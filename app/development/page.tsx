// app/developments/page.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArchitecturalDivider from "@/components/StructuralDivider";

// Development page components with updated names
("@/components/about-components/AboutHero");
import HeroDevelopment from "@/components/development-components/HeroDevelopment";
import ProjectShowcaseSection from "@/components/development-components/ProjectShowcaseSection";
import InvestAdvantages from "@/components/development-components/InvestAdvantages";
import ContactDev from "@/components/development-components/ContactDev";

export default function DevelopmentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen z-0">
        <HeroDevelopment />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 bg-transparent">
        {/* SECTION 1: WHITE - Projects Showcase */}
        <ProjectShowcaseSection />

        {/* --- DIVIDER: WHITE-TO-BLACK --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* SECTION 2: BLACK - Investment Advantages */}
        <div className="bg-black">
          <InvestAdvantages />
        </div>

        {/* --- DIVIDER: BLACK-TO-WHITE --- */}
        <ArchitecturalDivider direction="black-to-white" />

        {/* SECTION 3: WHITE - Contact CTA */}
        <ContactDev />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
