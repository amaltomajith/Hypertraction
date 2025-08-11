import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover"
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
            width: "177.77vh",
            height: "56.25vw",
          }}
        >
          <source
            src="https://raw.githubusercontent.com/amaltomajith/Hypertraction/main/img/videoplayback%20(online-video-cutter.com).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black bg-opacity-60 pointer-events-none" />

      {/* Navigation */}
      <header className="relative z-10 w-full">
        <nav className="flex items-center justify-between px-4 md:px-16 pt-8">
          <div className="flex items-center gap-4 md:gap-12 w-full">
            <a
              href="#"
              className="flex items-center gap-3 no-underline transition-all duration-300"
            >
              <img
                src="/logo.png"
                alt="Hypertraction Logo"
                className="h-10 md:h-12 w-auto"
              />
              <span className="text-xl md:text-2xl font-black text-white tracking-tight">
                hypertraction
              </span>
            </a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 md:gap-8 relative z-[10000] ml-auto">
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

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden ml-auto relative z-[10000]">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-[#ff5a00] hover:bg-transparent p-2"
              >
                <Menu className="h-6 w-6" />
              </Button>
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

      {/* Mobile Menu Sheet */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent
          side="right"
          className="bg-primary border-none w-80 p-0 transition-all duration-300 ease-in-out"
        >
          <SheetHeader className="flex items-center justify-between p-6 border-b border-white/10">
            <SheetTitle className="text-white text-xl font-bold">
              Menu
            </SheetTitle>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-gray-200 hover:bg-white/10 p-2 transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </Button>
            </SheetClose>
          </SheetHeader>
          <div className="flex flex-col gap-2 p-6">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => {
                  // Close menu first for smooth transition
                  setIsMobileMenuOpen(false);
                  // Small delay to allow menu to close before scrolling
                  setTimeout(() => {
                    item.onClick();
                  }, 300);
                }}
                className="text-white text-left text-lg font-medium py-4 px-4 rounded-lg border-b border-white/10 last:border-b-0 transition-all duration-200 hover:bg-white/10 hover:text-gray-100 active:bg-white/20"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default HeroSection;
