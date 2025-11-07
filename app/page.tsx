// app/page.tsx - UPDATED WITH STICKY SCROLL AND REMOVED SECTIONS
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroPreview from "@/components/home-preview/HeroPreview";
import SpecializationPreview from "@/components/home-preview/SpecializationPreview";
import ProjectsPreview from "@/components/home-preview/ProjectsPreview";
import ClientsPreview from "@/components/home-preview/ClientsPreview";
import ContactPreview from "@/components/home-preview/ContactPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky Hero Section - Bottom Layer */}
      <div className="sticky top-0 h-screen">
        <HeroPreview />
      </div>

      {/* Scrollable Content - Top Layer */}
      <div className="relative z-10 -mt-screen">
        <SpecializationPreview />
        <ProjectsPreview />
        <ClientsPreview />
        <ContactPreview />
        <Footer />
      </div>
    </main>
  );
}
