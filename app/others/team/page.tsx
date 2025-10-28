import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-8">Our Team</h1>
          <p className="text-lg text-gray-600">
            Team page content coming soon...
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
