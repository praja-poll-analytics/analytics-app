"use client";

export default function HomeSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-purple-400">Praja Poll</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Creating meaningful connections through innovative polling solutions. 
            Discover what your audience really thinks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection("about")}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Learn More
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-purple-600 text-purple-400 rounded-lg font-medium hover:bg-purple-900/30 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
