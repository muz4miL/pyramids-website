import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Expertise from "@/components/expertise";
import Projects from "@/components/projects";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
