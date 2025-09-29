import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simple loading animation without WebGL
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div id="Home" className="relative pb-44 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* CSS-based Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated particles using CSS */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className={`absolute opacity-20 animate-float-${i % 3}`}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + ((i * 7) % 60)}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {i % 4 === 0 && (
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg transform rotate-45" />
              )}
              {i % 4 === 1 && (
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full" />
              )}
              {i % 4 === 2 && (
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-purple-400" />
              )}
              {i % 4 === 3 && (
                <div
                  className="w-7 h-7 bg-gradient-to-br from-pink-400 to-purple-400 transform rotate-12"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />


{/* <Navbar /> */}

      {/* Hero Section - Added padding-top for navbar */}
      <main className="relative z-10 flex items-center justify-center  px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Profile Image - Shows only on mobile - Fixed positioning */}
          <div
            className={`md:hidden mb-12 mt-6 flex justify-center transform transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Floating Elements Around Mobile Profile */}
              <div className="absolute -top-2 left-2 z-5 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-xl backdrop-blur-sm border border-cyan-400/30 animate-float" />
              <div className="absolute -bottom-22 right-1 w-24 h-24 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full backdrop-blur-sm border border-green-400/30 animate-pulse" />

              {/* Mobile Profile Container - Made bigger */}
              <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 w- to-white/5 border border-white/20 rounded-3xl  p-2 shadow-2xl">
                <div className="relative  w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-green-400/20 rounded-2xl blur-3xl" />
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl border border-white/20 flex items-center justify-center overflow-hidden">
                    {/* Sample Profile Image */}
                    <img
                      src="https://i.ibb.co.com/0pBPRq6x/rohan-raka.png"
                      alt="Rohan Raka"
                      className="w-full h-full object-cover rounded-2xl"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
                  </div>
                </div>

                {/* Mobile Profile Info */}
                <div className="mt-4 pb-2 text-center">
                  {/* Greeting */}
                  <div className="space-y-2">
                    <h2 className="text-4xl mb-2 md:text-3xl font-light text-blue-400">
                      Hi! I am
                    </h2>
                  </div>

                  {/* Main Title */}
                  <div className="space-y-4">
                    <h1 className="text-5xl hero-title md:text-6xl lg:text-8xl font-black leading-none">
                      <span className="text-white">ROHAN </span>
                      <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                        RAKA
                      </span>
                    </h1>

                    <div className="w-48 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Mobile Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              {/* Greeting */}
              <div className="space-y-2">
                <div className=" text-center text-lg md:hidden mx-auto px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full">
                  <span className="text-cyan-400 font-medium">
                    ✨ Welcome to my portfolio
                  </span>
                </div>

                <h2 className="text-2xl hidden md:block md:text-3xl font-light text-blue-400">
                  Hi! I am
                </h2>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-4xl hidden md:block md:text-6xl lg:text-8xl font-black leading-none">
                  <span className="text-white">ROHAN </span>
                  <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    RAKA
                  </span>
                </h1>

                <div className="w-48 h-1 mx-auto md:mx-0 bg-gradient-to-r from-green-500 to-purple-400 rounded-full" />
              </div>

              {/* Description */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
                <p className="text-lg md:text-lg text-white leading-relaxed">
                  I'm studying at{" "}
                  <span className="text-cyan-400 font-semibold">
                    Pabna Ideal Nursing College
                  </span>
                  , one of the best nursing colleges in Bangladesh. Known for
                  quality education, skilled faculty, and{" "}
                  <span className="text-cyan-400 font-semibold">
                    supportive environment,
                  </span>{" "}
                  I feel proud to be preparing for a career in  <span className="text-cyan-400 font-semibold">
                   healthcare.
                  </span>
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center justify-center gap-2">
                    Download Resume
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                </button>

                <button className="group cursor-pointer px-8 py-4 backdrop-blur-xl bg-whit0e/10 border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    Contact Me
                    <svg
                      className="w-5 h-5 transform group-hover:rotate-12 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Desktop Profile Area - Made bigger */}
            <div
              className={`hidden md:block relative transform transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <div className="relative">
                {/* Floating Elements Around Profile */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl backdrop-blur-sm border border-cyan-400/30 animate-float" />
                <div className="absolute -bottom-12 -right-12 w-20 h-20 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full backdrop-blur-sm border border-green-400/30 animate-pulse" />
                <div className="absolute top-1/2 -right-20 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg backdrop-blur-sm border border-purple-400/30 animate-pulse" />

                {/* Main Profile Container - Made bigger */}
                <div className="relative  backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  {/* Profile Image - Made bigger */}
                  <div className="relative cursor-pointer w-96 h-[500px] mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-green-400/20 rounded-3xl blur-3xl" />
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-3xl border border-white/20 flex items-center justify-center overflow-hidden">
                      {/* Professional Photo */}
                      <img
                        src="https://i.ibb.co.com/0pBPRq6x/rohan-raka.png"
                        alt="Rohan Raka - Professional Photo"
                        className="w-full h-full object-cover rounded-3xl"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />


                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="mt-10 text-center">
                     {/* Professional Badge */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                              </svg>
                            </div>
                            <div>
                              <p className="text-white text-base font-semibold">
                               Nursing Student
                              </p>
                              <p className="text-green-400 text-base font-bold">
                                Pabna Ideal Nursing College
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                {/* Decorative Elements - Made bigger */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Scroll Indicator */}
      <div
        className={`absolute cursor-move bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 z-0 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center space-y-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 shadow-xl">
          <p className="text-base font-medium text-gray-300">Scroll to explore</p>
          <div className="w-6 h-12 border-2 border-white/40 rounded-full flex justify-center relative">
            <div className="w-1.5 h-4 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse shadow-lg" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(90deg);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg);
          }
          50% {
            transform: translateY(-30px) rotateX(180deg);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotateY(0deg);
          }
          50% {
            transform: translateY(-20px) rotateY(180deg);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-0 {
          animation: float-0 20s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 20s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;
