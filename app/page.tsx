import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroPreview from "@/components/home-preview/HeroPreview";
import SpecializationPreview from "@/components/home-preview/SpecializationPreview";
import ProjectsPreview from "@/components/home-preview/ProjectsPreview";
import ClientsPreview from "@/components/home-preview/ClientsPreview";
import ContactPreview from "@/components/home-preview/ContactPreview";
import ArchitecturalDivider from "@/components/StructuralDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen z-0">
        <HeroPreview />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 bg-transparent">
        {/* Black background container */}
        <div className="bg-black">
          <SpecializationPreview />
        </div>

        {/* --- ARCHITECTURAL MASTERPIECE DIVIDER 1 --- */}
        <ArchitecturalDivider direction="black-to-white" />

        {/* Projects Section (White) */}
        <ProjectsPreview />

        {/* --- ARCHITECTURAL MASTERPIECE DIVIDER 2 --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* Clients Section (Black) */}
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
