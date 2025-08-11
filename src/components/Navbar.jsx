import React, { useState } from 'react';

const Navbar = ({ isLoaded = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <div className="mx-4 mt-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="group cursor-pointer">
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-cyan-400 hover:to-purple-400 transition-all duration-500">
                  Rohan Raka
                </h1>
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500" />
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                {['My Institute', 'Gallery', 'Blogs', 'Contact Me'].map((item, index) => (
                  <div key={item} className={`group cursor-pointer transform transition-all duration-500 hover:scale-110 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                    <span className="text-white/80 hover:text-white font-medium relative">
                      {item}
                      <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                    </span>
                  </div>
                ))}
              </div>

              {/* Desktop Login Button */}
              <div className={`hidden md:block transform transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <button className="group relative px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">Login</span>
                </button>
              </div>

              {/* Mobile Hamburger Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="group relative w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl flex flex-col items-center justify-center space-y-1.5 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                >
                  <div className={`w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <div className={`w-5 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <div className={`w-5 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
              <div className="pt-4 pb-2 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {['My Institute', 'Gallery', 'Blogs', 'Contact Me'].map((item, index) => (
                    <div
                      key={item}
                      className={`transform transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <a
                        href="#"
                        className="block px-4 py-3 text-white/80 hover:text-white font-medium bg-gradient-to-r from-white/5 to-white/10 hover:from-cyan-500/10 hover:to-purple-500/10 border border-white/10 hover:border-cyan-500/30 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                      >
                        <span className="relative">
                          {item}
                          <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300" />
                        </span>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Mobile Login Button */}
                <div className={`pt-2 transform transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                  <button className="w-full group relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      Login
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
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