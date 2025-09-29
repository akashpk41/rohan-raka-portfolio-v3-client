import React, { useState, useEffect } from "react";

const CollegeSummaryLocation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate active card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Floating shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute opacity-10 animate-float"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + ((i * 8) % 60)}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              {i % 4 === 0 && (
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-xl transform rotate-45" />
              )}
              {i % 4 === 1 && (
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full" />
              )}
              {i % 4 === 2 && (
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 transform rotate-12 rounded-lg" />
              )}
              {i % 4 === 3 && (
                <div className="w-7 h-7 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      {/* Summary Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-400 text-xl font-medium flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                More About Our Institution
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="text-white">COLLEGE </span>
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SUMMARY
              </span>
            </h2>

            <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto" />
          </div>

          {/* Summary Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">


            {/* Right Content - College Image & Stats */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              {/* College Image */}
              <div className="relative   mb-8">
                <div className="absolute  inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-green-400/20 rounded-3xl blur-3xl" />
                <div className="relative  backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl">
                  <div className="w-full cursor-pointer  bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.ibb.co.com/Mx5KwX7p/484902849-1181587677088783-1855977639421893296-n.jpg"
                      alt="Pabna Ideal Nursing College"
                      className="w-full h-full object-contain rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
                  </div>

                  {/* College Badge */}
                  <div className="mt-4 p-4 text-center">
                    <h3 className="text-white font-bold text-2xl">
                      পাবনা আইডিয়াল নার্সিং কলেজ
                    </h3>
                    <p className="text-cyan-400 text-lg">
                      Excellence in Healthcare Education
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid cursor-pointer grid-cols-3 gap-3">
                {[
                  {
                    number: "5500+",
                    label: "Students",
                    color: "from-green-400 to-cyan-400",
                  },
                  {
                    number: "50+",
                    label: "Faculty",
                    color: "from-cyan-400 to-purple-400",
                  },
                  {
                    number: "15+",
                    label: "Years",
                    color: "from-purple-400 to-pink-400",
                  },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 text-center shadow-lg transform transition-all duration-500 hover:scale-105 ${
                      index === activeCard ? "ring-2 ring-cyan-400/50 scale-105" : ""
                    }`}
                    style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                  >
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-gray-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              {/* Main Summary Card */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
                <div className="space-y-4 text-gray-100 leading-relaxed">
                  <p className="text-xl mb-6">
                    <span className="text-cyan-400 font-semibold">
                      Pabna Ideal Nursing College
                    </span>{" "}
                    is dedicated to nurturing the next generation of
                    compassionate and skilled nurses. Our mission is to provide
                    a comprehensive education that combines theoretical
                    knowledge with practical experience, ensuring our students
                    are well-prepared for the challenges of modern healthcare.
                  </p>

                  <p className="text-lg mb-6">
                    We believe in the power of{" "}
                    <span className="text-purple-400 font-semibold">
                      empathy, professionalism, and continuous learning
                    </span>
                    . Our faculty is committed to mentoring students, fostering
                    a supportive environment where they can thrive academically
                    and personally.
                  </p>

                  <p className="text-lg">
                    Join us in our journey to make a positive impact on
                    healthcare and society. Together, we can shape the future of
                    nursing with{" "}
                    <span className="text-green-400 font-semibold">
                      excellence and integrity
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    ),
                    title: "Innovative Teaching",
                    description: "আধুনিক শিক্ষাদান পদ্ধতি",
                  },
                  {
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    ),
                    title: "Expert Faculty",
                    description: "অভিজ্ঞ এবং দক্ষ শিক্ষক মণ্ডলী",
                  },
                  {
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    ),
                    title: "Modern Facilities",
                    description: "অত্যাধুনিক ল্যাব এবং সুবিধা",
                  },
                ].map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${
                      isLoaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-cyan-400 font-semibold text-2xl">
                          {feature.title}
                        </h4>
                        <p className="text-gray-200 text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Location Section */}
          <div
            className={`transform  transition-all duration-1000 delay-600 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            {/* Location Header */}
            <div id="location" className="text-center mb-12">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-sm text-2xl border border-green-500/30 rounded-full mb-6">
                <span className="text-green-400 font-medium flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Find Us Here
                </span>
              </div>

              <h2  className="text-4xl md:text-5xl font-black mb-4">
                <span className="text-white">COLLEGE </span>
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  LOCATION
                </span>
              </h2>

              <div className="w-48 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mx-auto" />
            </div>

            {/* Map Container */}
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl  shadow-2xl">
              {/* Map */}
              <div className="relative  w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-green-400/10 z-10 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.893746992159!2d89.2445008!3d24.02037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84cad714942b%3A0xdb4a027622247b3d!2sPabna%20Ideal%20Nursing%20College!5e0!3m2!1sen!2sbd!4v1720784692002!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>

              {/* Location Info Cards */}
              <div className="grid p-4 md:grid-cols-3 gap-6">
                {/* Address Card */}
                <a href="https://www.facebook.com/pabnaidealnc" target="_blank"  className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-xl p-6 text-center group hover:from-green-500/20 hover:to-cyan-500/20 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-2 0h-4m-2 0h-2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-2">Visit Us</h3>
                  <p className="text-green-400 text-xl font-semibold">
                    Pabna Ideal Nursing College
                  </p>
                  <p className="text-gray-200 text-base">
                    Hospital Road, Pabna Sadar
                  </p>
                </a>

                {/* Contact Card */}
                <div className="backdrop-blur-xl  bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-6 text-center group hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-2">Call Us</h3>
                  <p className="text-cyan-400 text-xl font-semibold">
                    +880 1799-818188
                  </p>
                  <p className="text-gray-200 text-base">Available 24/7</p>
                </div>

                {/* Direction Card */}
                <a href="#location" className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 text-center group hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-2">Directions</h3>
                  <button className="text-purple-400 font-semibold text-xl hover:text-purple-300 transition-colors">
                    Get Directions
                  </button>
                  <p className="text-gray-200 text-base">Via Google Maps</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CollegeSummaryLocation;
