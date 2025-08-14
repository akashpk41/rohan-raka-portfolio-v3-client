import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  // Function to scroll to top (for logo click and Home link)
  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    setIsMobileMenuOpen(false);
  };

  // Function to handle route navigation and scroll to top
  const handleRouteNavigation = (path) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[40] transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="w-full">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl max-w-7xl mx-auto">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <button
                onClick={scrollToTop}
                className="group cursor-pointer bg-transparent border-none p-0"
              >
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-cyan-400 hover:to-purple-400 transition-all duration-500">
                  Rohan Raka
                </h1>
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500" />
              </button>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                {/* Home - New addition */}
                <div
                  className="group cursor-pointer transform transition-all duration-500 hover:scale-110 opacity-100 translate-y-0"
                  onClick={scrollToTop}
                >
                  <span className="text-white/80 hover:text-white font-medium relative">
                    Home
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                  </span>
                </div>

                {/* My Institute - Scroll to section */}
                <div
                  className="group cursor-pointer transform transition-all duration-500 hover:scale-110 opacity-100 translate-y-0"
                  onClick={() => scrollToSection("institute-section")}
                >
                  <span className="text-white/80 hover:text-white font-medium relative">
                    My Institute
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                  </span>
                </div>

                {/* Gallery - React Router Link */}
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-110 opacity-100 translate-y-0">
                  <button
                    onClick={() => handleRouteNavigation("/gallery")}
                    className="text-white/80 hover:text-white font-medium relative bg-transparent border-none cursor-pointer"
                  >
                    Gallery
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                  </button>
                </div>

                {/* Blogs - React Router Link */}
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-110 opacity-100 translate-y-0">
                  <button
                    onClick={() => handleRouteNavigation("/blogs")}
                    className="text-white/80 hover:text-white font-medium relative bg-transparent border-none cursor-pointer"
                  >
                    Blogs
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                  </button>
                </div>

                {/* Quiz - React Router Link */}
                <div className="group cursor-pointer transform transition-all duration-500 hover:scale-110 opacity-100 translate-y-0">
                  <button
                    onClick={() => handleRouteNavigation("/quiz")}
                    className="text-white/80 hover:text-white font-medium relative bg-transparent border-none cursor-pointer"
                  >
                    Quiz
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                  </button>
                </div>

                {/* Contact Me - Scroll to section */}
                <div
                  className="group cursor-pointer transform transition-all duration-500 hover:scale-110 opacity-100 translate-y-0"
                  onClick={() => scrollToSection("contact-section")}
                >
                  <span className="text-white/80 hover:text-white font-medium relative">
                    Contact Me
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                  </span>
                </div>
              </div>

              {/* Desktop Book Appointment Button */}
              <div
                className={`hidden md:block transform transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <button
                  onClick={() => handleRouteNavigation("/appointment")}
                  className="group relative px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Book Appointment</span>
                </button>
              </div>

              {/* Mobile Hamburger Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="group relative w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl flex flex-col items-center justify-center space-y-1.5 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                >
                  <div
                    className={`w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <div
                    className={`w-5 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <div
                    className={`w-5 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isMobileMenuOpen
                  ? "max-h-[600px] opacity-100 mt-6"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className="pt-4 pb-2 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {/* Home - New addition */}
                  <div
                    className={`transform transition-all duration-500 ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "0ms" }}
                  >
                    <button
                      onClick={scrollToTop}
                      className="block w-full text-left px-4 py-3 text-white/80 hover:text-white font-medium bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-500/10 hover:to-purple-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                    >
                      <span className="relative">
                        Home
                        <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                      </span>
                    </button>
                  </div>

                  {/* My Institute */}
                  <div
                    className={`transform transition-all duration-500 ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "100ms" }}
                  >
                    <button
                      onClick={() => scrollToSection("institute-section")}
                      className="block w-full text-left px-4 py-3 text-white/80 hover:text-white font-medium bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-500/10 hover:to-purple-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                    >
                      <span className="relative">
                        My Institute
                        <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                      </span>
                    </button>
                  </div>

                  {/* Gallery */}
                  <div
                    className={`transform transition-all duration-500 ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <button
                      onClick={() => handleRouteNavigation("/gallery")}
                      className="block w-full text-left px-4 py-3 text-white/80 hover:text-white font-medium bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-500/10 hover:to-purple-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                    >
                      <span className="relative">
                        Gallery
                        <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                      </span>
                    </button>
                  </div>

                  {/* Blogs */}
                  <div
                    className={`transform transition-all duration-500 ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    <button
                      onClick={() => handleRouteNavigation("/blogs")}
                      className="block w-full text-left px-4 py-3 text-white/80 hover:text-white font-medium bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-500/10 hover:to-purple-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                    >
                      <span className="relative">
                        Blogs
                        <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                      </span>
                    </button>
                  </div>

                  {/* Quiz */}
                  <div
                    className={`transform transition-all duration-500 ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <button
                      onClick={() => handleRouteNavigation("/quiz")}
                      className="block w-full text-left px-4 py-3 text-white/80 hover:text-white font-medium bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-500/10 hover:to-purple-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                    >
                      <span className="relative">
                        Quiz
                        <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                      </span>
                    </button>
                  </div>

                  {/* Music - Mobile Only */}
                  <div
                    className={`transform transition-all duration-500 ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  >
                    <button
                      onClick={() => handleRouteNavigation("/music")}
                      className="block w-full text-left px-4 py-3 text-white/80 hover:text-white font-medium bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-500/10 hover:to-purple-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                    >
                      <span className="relative">
                        Music
                        <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                      </span>
                    </button>
                  </div>

                  {/* Developer Info - Mobile Only */}
                  <div
                    className={`transform transition-all duration-500 ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <button
                      onClick={() => handleRouteNavigation("/developer-info")}
                      className="block w-full text-left px-4 py-3 text-white/80 hover:text-white font-medium bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-500/10 hover:to-purple-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                    >
                      <span className="relative">
                        Developer Info
                        <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                      </span>
                    </button>
                  </div>

                  {/* Contact Me */}
                  <div
                    className={`transform transition-all duration-500 ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{ transitionDelay: "700ms" }}
                  >
                    <button
                      onClick={() => scrollToSection("contact-section")}
                      className="block w-full text-left px-4 py-3 text-white/80 hover:text-white font-medium bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-500/10 hover:to-purple-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                    >
                      <span className="relative">
                        Contact Me
                        <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Mobile Book Appointment Button */}
                <div
                  className={`pt-2 transform transition-all duration-500 ${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  <button
                    onClick={() => handleRouteNavigation("/appointment")}
                    className="w-full group relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden block text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      Book Appointment
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;