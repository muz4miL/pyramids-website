import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ArchitecturalDivider from "@/components/StructuralDivider";

// Import Projects components
import ProjectsHero from "@/components/projects-components/ProjectsHero";
import ProjectsFilterTabs from "@/components/projects-components/ProjectsFilterTabs";
import ProjectsGrid from "@/components/projects-components/ProjectsGrid";
import ProjectsCTA from "@/components/projects-components/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky Hero (z-0) */}
      <div className="sticky top-0 h-screen z-0">
        <ProjectsHero />
      </div>

      {/* Scrollable Content (z-10) */}
      <div className="relative z-10 bg-transparent">
        {/* SECTION 2: WHITE - Filter & Grid */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Tabs */}
            <ProjectsFilterTabs />

            {/* Projects Grid */}
            <ProjectsGrid />
          </div>
        </section>

        {/* --- DIVIDER: WHITE-TO-BLACK --- */}
        <ArchitecturalDivider direction="white-to-black" />

        {/* SECTION 3: BLACK - CTA */}
        <ProjectsCTA />
      </div>

      <Footer />
    </main>
  );
}
