import FloatingCube from "@/app/components/FloatingCube";
import About from "./components/sections/About";
import Hero from "@/app/components/sections/Hero";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-[var(--primary-bg)] text-[var(--text-color)] w-full min-h-screen">
      {/* Floating Cube - Stays fixed */}
      <FloatingCube />

      {/* Hero Section with Background Image */}
      <section
        className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-[center_top_20%]"
        style={{
          backgroundImage: "url('/cloud3.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center">
          <Hero />
        </div>
      </section>

      {/* About Section (Now full width and centered) */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <About />
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-8">
          <Contact />
        </div>
      </section>
    </main>
  );
}
