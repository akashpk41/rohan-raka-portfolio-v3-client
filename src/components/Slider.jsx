import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Load Swiper dynamically
  useEffect(() => {
    const loadSwiper = async () => {
      // Add Swiper CSS
      const swiperCSS = document.createElement("link");
      swiperCSS.rel = "stylesheet";
      swiperCSS.href =
        "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css";
      document.head.appendChild(swiperCSS);

      // Load Swiper JS
      const swiperScript = document.createElement("script");
      swiperScript.src =
        "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
      swiperScript.onload = () => {
        initializeSwiper();
      };
      document.head.appendChild(swiperScript);
    };

    const initializeSwiper = () => {
      if (window.Swiper) {
        // Initialize thumbnail swiper first
        const thumbSwiper = new window.Swiper(".thumbSwiper", {
          spaceBetween: 10,
          slidesPerView: 8,
          freeMode: true,
          watchSlidesProgress: true,
          breakpoints: {
            320: { slidesPerView: 4 },
            640: { slidesPerView: 6 },
            768: { slidesPerView: 8 },
          },
        });

        // Initialize main swiper
        const mainSwiper = new window.Swiper(".mainSwiper", {
          spaceBetween: 10,
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 1,
          coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
          },
          thumbs: {
            swiper: thumbSwiper,
          },
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          on: {
            slideChange: function () {
              setActiveSlide(this.activeIndex);
            },
          },
        });

        mainSwiperRef.current = mainSwiper;
        thumbSwiperRef.current = thumbSwiper;
      }
    };

    loadSwiper();

    return () => {
      if (mainSwiperRef.current) mainSwiperRef.current.destroy();
      if (thumbSwiperRef.current) thumbSwiperRef.current.destroy();
    };
  }, []);

  const sliderImages = [
    {
      id: 1,
      src: "https://i.ibb.co.com/8ndKBwR5/carousel-3.jpg",
      date: "23-April-2025",
      gradient: "from-blue-500/30 to-cyan-500/30",
    },
    {
      id: 2,
      src: "https://i.ibb.co.com/SXHM3ZCd/carousel-4.jpg",
      date: "07-March-2025",
      gradient: "from-green-500/30 to-emerald-500/30",
    },
    {
      id: 3,
      src: "https://i.ibb.co.com/3mNV3kWR/carousel-5.jpg",
      date: "21-February-2025",
      gradient: "from-purple-500/30 to-pink-500/30",
    },
    {
      id: 4,
      src: "https://i.ibb.co.com/1tJj4wFv/carousel-6.jpg",
      date: "13-September-2024",
      gradient: "from-orange-500/30 to-red-500/30",
    },
    {
      id: 5,
      src: "https://i.ibb.co.com/5gqvSDML/carousel-7.jpg",
      date: "31-March-2025",
      gradient: "from-red-500/30 to-rose-500/30",
    },

    {
      id: 6,
      src: "https://i.ibb.co.com/B5Z6t6qz/carousel-8.jpg",
      date: "10-January-2025",
      gradient: "from-pink-500/30 to-fuchsia-500/30",
    },
    {
      id: 7,
      src: "https://i.ibb.co.com/kgydsr2V/carousel-9.jpg",
      date: "16-January-2025",
      gradient: "from-teal-500/30 to-cyan-500/30",
    },
    {
      id: 8,
      src: "https://i.ibb.co.com/mVvC2WQ2/carousel-10.jpg",
      date: "27-October-2024",
      gradient: "from-indigo-500/30 to-blue-500/30",
    },
    {
      id: 9,
      src: "https://i.ibb.co.com/x87r5JYt/carousel-11.jpg",
      date: "07-March-2025",
      gradient: "from-yellow-500/30 to-orange-500/30",
    },
    {
      id: 10,
      src: "https://i.ibb.co.com/9zT3PFs/carousel-2.jpg",
      date: "05-January-2025",
      gradient: "from-amber-500/30 to-yellow-500/30",
    },

    {
      id: 11,
      src: "https://i.ibb.co.com/BVNLcT2j/carousel-1.jpg",
      date: "12-December-2024",
      gradient: "from-green-500/30 to-teal-500/30",
    },
    {
      id: 12,
      src: "https://i.ibb.co.com/wF06WJDT/carousel-15.jpg",
      date: "18-October-2024",
      gradient: "from-violet-500/30 to-purple-500/30",
    },

    //

    //
    //
    //
    //

    {
      id: 13,
      src: "https://i.ibb.co.com/0ynfPgRZ/carousel-12.jpg",
      date: "23-April-2025",
      gradient: "from-cyan-500/30 to-blue-500/30",
    },
    {
      id: 14,
      src: "https://i.ibb.co.com/svZPRR6V/carousel-13.jpg",
      date: "24-January-2025",
      gradient: "from-rose-500/30 to-pink-500/30",
    },
    {
      id: 15,
      src: "https://i.ibb.co.com/N0zYSYX/carousel-14.jpg",
      date: "24-February-2025",
      gradient: "from-emerald-500/30 to-green-500/30",
    },
    {
      id: 16,
      src: "https://i.ibb.co.com/tPZRcsRd/carousel-16.jpg",
      date: "28-July-2025",
      gradient: "from-yellow-500/30 to-orange-500/30",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating Image Icons */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <svg
              className="w-5 h-5 text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM19 19H5V5h14v14zm-5-9.5c0-.83-.67-1.5-1.5-1.5S11 8.67 11 9.5s.67 1.5 1.5 1.5S14 10.33 14 9.5zM7 17.5l2.5-3.01L11.5 17l2.5-3.5L19 17.5H7z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-lg opacity-60 animate-pulse" />
              <div className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM19 19H5V5h14v14zm-5-9.5c0-.83-.67-1.5-1.5-1.5S11 8.67 11 9.5s.67 1.5 1.5 1.5S14 10.33 14 9.5zM7 17.5l2.5-3.01L11.5 17l2.5-3.5L19 17.5H7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-6xl font-black bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent">
              More Memories
            </h2>
          </div>
          <div className="w-40 h-1 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Premium Slider Container */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Main Swiper */}
          <div className="relative mb-8">
            {/* Glowing Container */}
            <div
              className={`absolute -inset-4 bg-gradient-to-r ${
                sliderImages[activeSlide]?.gradient ||
                "from-purple-500/30 to-cyan-500/30"
              } rounded-3xl blur-2xl opacity-60 animate-pulse`}
            />

            <div className="swiper mainSwiper relative backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="swiper-wrapper">
                {sliderImages.map((image, index) => (
                  <div key={image.id} className="swiper-slide relative">
                    <div className="relative h-96 md:h-[500px] overflow-hidden">
                      <img
                        src={image.src}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full md:object-contain object-cover transform hover:scale-105 transition-transform duration-700"
                      />

                      {/* Date Badge */}
                      <div className="absolute bottom-2 left-6 md:bottom-6 md:left-6">
                        <div
                          className={`backdrop-blur-xl bg-gradient-to-r ${image.gradient.replace(
                            "/30",
                            "/80"
                          )} border border-white/30 rounded-2xl px-2 py-1 md:px-1  md:py-3 shadow-xl`}
                        >
                          <div className="flex items-center space-x-3">
                            <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM19 7h-2V5h2v2zM15 7h-2V5h2v2zM11 7H9V5h2v2zM7 7H5V5h2v2zM5 9h14v10H5V9z" />
                            </svg>
                            <span className="text-white font-bold text-lg tracking-wide">
                              {image.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Image Counter */}
                      <div className="absolute top-1 right-2 md:top-6  md:right-6">
                        <div className="backdrop-blur-xl bg-black/30 border border-white/20 rounded-full  md:px-4 px-2   md:py-2">
                          <span className="text-white font-semibold text-sm">
                            {index + 1} / {sliderImages.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium Navigation Buttons */}
              <div className="swiper-button-prev !w-12 !h-12 !mt-0 !top-1/2 !-translate-y-1/2 !left-4 !text-white backdrop-blur-xl !bg-white/20 !border !border-white/30 !rounded-full hover:!bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="swiper-button-next !w-12 !h-12 !mt-0 !top-1/2 !-translate-y-1/2 !right-4 !text-white backdrop-blur-xl !bg-white/20 !border !border-white/30 !rounded-full hover:!bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* Custom Pagination */}
              <div className="swiper-pagination !bottom-4" />
            </div>
          </div>

          {/* Thumbnail Swiper */}
          <div className="relative">
            <div className="swiper thumbSwiper px-4">
              <div className="swiper-wrapper pb-4">
                {sliderImages.map((image, index) => (
                  <div
                    key={`thumb-${image.id}`}
                    className="swiper-slide !w-20 !h-20 relative group cursor-pointer"
                  >
                    {/* Glowing Effect for Active Thumbnail */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${image.gradient.replace(
                        "/30",
                        ""
                      )} rounded-xl blur opacity-70 group-hover:opacity-60 transition-all duration-300 ${
                        activeSlide === index ? "opacity-60 animate-pulse" : ""
                      }`}
                    />

                    <div
                      className={`relative w-full h-full rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        activeSlide === index
                          ? "border-red-600 shadow-lg scale-110"
                          : "border-white/30 hover:border-white/60 hover:scale-105"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />

                      {/* Active Overlay */}
                      {activeSlide === index && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Custom Swiper Styles */
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
        }

        .swiper-pagination-bullet-active {
          background: white !important;
          transform: scale(1.2);
        }

        .swiper-slide-thumb-active .thumb-glow {
          opacity: 1;
        }

        .swiper {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default Slider;
