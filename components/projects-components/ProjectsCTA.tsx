"use client";

export default function ProjectsCTA() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-white uppercase mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="font-inter text-gray-400 text-lg mb-8">
          Let's discuss how we can bring your vision to life with our expertise.
        </p>
        <button className="bg-orange-500 text-black font-inter font-bold text-lg uppercase px-8 py-4 rounded-none hover:bg-white transition-all duration-300">
          Get In Touch
        </button>
      </div>
    </section>
  );
}
