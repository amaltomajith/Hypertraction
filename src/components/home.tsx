import React from "react";
import HeroSection from "./HeroSection";
import ServicesPanel from "./ServicesPanel";
import ResultsShowcase from "./ResultsShowcase";
import LeadCaptureForm from "./LeadCaptureForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <section
        id="about"
        className="content-section py-20 px-6 md:px-16 bg-[#111]"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            About Us
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              The two of us have generated a total pipeline of $6M. We've closed
              over $2M in total pipeline out of this $6M.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              But then again, HyperTraction wasn't built to just scale revenue.
              It was built and designed to find ICP. To understand and find
              nuances we would otherwise miss during outbound.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              HyperTraction is for the founders neck deep in perfecting the
              product.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Our message has always been this - You build the perfect product,
              we scale it.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              To know more about how we can work together, fill out the form
              below and one of us will get in touch. See ya : )
            </p>
          </div>
        </div>
      </section>

      {/* Services Panel */}
      <div id="services" className="content-section">
        <ServicesPanel />
      </div>

      {/* Results Showcase */}
      <div id="results" className="content-section">
        <ResultsShowcase />
      </div>

      {/* Lead Capture Form */}
      <section
        id="contact"
        className="content-section py-20 px-6 md:px-8 bg-[#111]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to scale your outbound efforts? Let's discuss how we can help
            you reach your revenue goals.
          </p>
          <LeadCaptureForm
            googleScriptUrl={import.meta.env.VITE_GOOGLE_SCRIPT_URL || ""}
            title=""
            description=""
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="content-section bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Hypertraction.co
              </h3>
              <p className="text-gray-400 text-lg">
                Outbound systems built to scale
              </p>
            </div>
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Hypertraction. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
