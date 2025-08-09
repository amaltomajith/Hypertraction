import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  headline = "Outbound systems built to scale",
  subheadline = "ICP never out of sight. Revenue always in sight.",
  ctaText = "Request a call",
  onCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    {
      name: "Our Services",
      hasDropdown: false,
      onClick: () => scrollToSection("services"),
    },
    {
      name: "Results",
      hasDropdown: false,
      onClick: () => scrollToSection("results"),
    },
    {
      name: "About Us",
      hasDropdown: false,
      onClick: () => scrollToSection("about"),
    },
    {
      name: "Contact",
      hasDropdown: false,
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#111] text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/HZzLkTgMCSE?autoplay=1&mute=1&loop=1&playlist=HZzLkTgMCSE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0"
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
            width: "177.77vh",
            height: "56.25vw",
          }}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          title="Background Video"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black bg-opacity-60 pointer-events-none" />

      {/* Navigation */}
      <header className="relative z-10 w-full">
        <nav className="flex items-center justify-between px-4 md:px-16 pt-8">
          <div className="flex items-center gap-4 md:gap-12 w-full">
            <a
              href="#"
              className="text-xl md:text-2xl font-black text-white no-underline tracking-tight transition-all duration-300"
            >
              hypertraction
            </a>
            <div className="flex items-center gap-4 md:gap-8 relative z-[10000] ml-auto">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className="text-white no-underline font-medium text-sm md:text-lg relative py-2 cursor-pointer inline-block transition-colors duration-200 hover:text-[#ff5a00]"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="relative z-[1]">
        <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1
              className="text-4xl md:text-7xl font-black leading-tight mb-5 text-white tracking-tight hero-title"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              {headline}
            </h1>

            <p
              className="text-lg md:text-xl font-normal mb-9 text-gray-200"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
            >
              {subheadline}
            </p>

            <Button
              onClick={onCtaClick}
              className="bg-[#ff5a00] hover:bg-[#e14a00] text-white border-none rounded-[20px] px-6 py-3 text-base font-bold cursor-pointer shadow-sm transition-colors duration-200"
            >
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
