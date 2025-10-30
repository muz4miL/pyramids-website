// app/page.tsx - CORRECT
import Navbar from "@/components/navbar";
import HeroPreview from "@/components/home-preview/HeroPreview";
import AboutPreview from "@/components/home-preview/AboutPreview";
import ExpertisePreview from "@/components/home-preview/ExpertisePreview";
import ProjectsPreview from "@/components/home-preview/ProjectsPreview";
import ClientsPreview from "@/components/home-preview/ClientsPreview"; // Only one import
import Footer from "@/components/footer";
import ContactPreview from "@/components/home-preview/ContactPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroPreview />
      <AboutPreview />
      <ExpertisePreview />
      <ClientsPreview />
      <ProjectsPreview />
      <ContactPreview />
      <Footer />
    </main>
  );
}
