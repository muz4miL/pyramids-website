import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutPreview from "@/components/home-preview/AboutPreview";
import ExpertisePreview from "@/components/home-preview/ExpertisePreview";
import ProjectsPreview from "@/components/home-preview/ProjectsPreview";
import ClientsPreview from "@/components/home-preview/ClientsPreview";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutPreview />
      <ExpertisePreview />
      <ClientsPreview />
      <ProjectsPreview />
      <Footer />
    </main>
  );
}
