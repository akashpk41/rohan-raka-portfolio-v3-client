import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: "https://i.ibb.co.com/RGB7yPQK/image-1.jpg",
      alt: "With Director",
      caption:
        "With our honorable Director of Ideal Nursing College — a true inspiration to us all.",
      category: "College",
      color: "from-blue-500/20 to-cyan-500/20",
      delay: 100,
    },
    {
      id: 2,
      src: "https://i.ibb.co.com/67NPmjXC/image-2.jpg",
      alt: "With Teachers",
      caption:
        "With our respected teachers and wonderful classmates — a moment to cherish forever.",
      category: "College",
      color: "from-green-500/20 to-emerald-500/20",
      delay: 200,
    },
    {
      id: 3,
      src: "https://i.ibb.co.com/DHKqy1KF/image-3.jpg",
      alt: "With Teacher",
      caption: "Guided by a great Teacher, surrounded by smiles.",
      category: "College",
      color: "from-purple-500/20 to-pink-500/20",
      delay: 300,
    },
    {
      id: 4,
      src: "https://i.ibb.co.com/35NTmXpK/image-4.jpg",
      alt: "With Seniors",
      caption: "Learning, leading, and celebrating — with our Seniors.",
      category: "College",
      color: "from-orange-500/20 to-red-500/20",
      delay: 400,
    },
    {
      id: 5,
      src: "https://i.ibb.co.com/gLg3CBBf/image-5.jpg",
      alt: "Protest",
      caption: "We stand, we protest, we demand justice.",
      category: "Events",
      color: "from-red-500/20 to-rose-500/20",
      delay: 500,
    },
    {
      id: 6,
      src: "https://i.ibb.co.com/Z6cxSdCs/image-6.jpg",
      alt: "Fresher's Welcome",
      caption:
        "Fresher's Welcome & Farewell 2025 — A day to cherish forever. 🌸",
      category: "Events",
      color: "from-pink-500/20 to-fuchsia-500/20",
      delay: 600,
    },

    {
      id: 7,
      src: "https://i.ibb.co.com/LXn3qr8B/image-7.jpg",
      alt: "Friends",
      caption:
        "Chilling with the best — Seniors & friends who feel like family.",
      category: "Friends",
      color: "from-teal-500/20 to-cyan-500/20",
      delay: 700,
    },
    {
      id: 8,
      src: "https://i.ibb.co.com/Q7Qx0Tnp/image-8.jpg",
      alt: "Ideal Squad",
      caption: "Made memories with the best — my Ideal squad!",
      category: "Friends",
      color: "from-indigo-500/20 to-blue-500/20",
      delay: 800,
    },
    {
      id: 9,
      src: "https://i.ibb.co.com/DgKYLmhk/image-9.jpg",
      alt: "Rooftop Friends",
      caption: "From schoolyards to rooftops — some friendships never change.",
      category: "Friends",
      color: "from-yellow-500/20 to-orange-500/20",
      delay: 900,
    },
    {
      id: 10,
      src: "https://i.ibb.co.com/C5j7BQB3/image-10.jpg",
      alt: "Nostalgic",
      caption: "Nostalgic days, golden memories.",
      category: "Memories",
      color: "from-amber-500/20 to-yellow-500/20",
      delay: 1000,
    },
    {
      id: 11,
      src: "https://i.ibb.co.com/35TPvMjF/image-11.jpg",
      alt: "Hospital Duty",
      caption:
        "Hospital duty vibes — teamwork, laughter, and a bottle of chill! 🩺🥤",
      category: "Hospital",
      color: "from-green-500/20 to-teal-500/20",
      delay: 1100,
    },
    {
      id: 12,
      src: "https://i.ibb.co.com/LXb0PfqY/image-12.jpg",
      alt: "Ideal Friends",
      caption:
        "With ideal friends at Ideal Nursing College — moments we'll never forget.",
      category: "College",
      color: "from-violet-500/20 to-purple-500/20",
      delay: 1200,
    },
  ];

  const categories = [
    "All",
    "College",
    "Friends",
    "Events",
    "Hospital",
    "Memories",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section
      id="gallery"
      className="relative py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Camera/Photo Particles */}
        {[...Array(20)].map((_, i) => (
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
              className="w-4 h-4 text-cyan-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 15.2c1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2-3.2 1.4-3.2 3.2 1.4 3.2 3.2 3.2zm0-5.5c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z" />
              <path d="M20 4h-3.2l-1.3-2c-.2-.3-.5-.5-.9-.5H9.4c-.4 0-.7.2-.9.5L7.2 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 18H4V6h4.1l1.3-2h5.3l1.3 2H20v12z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-lg opacity-60" />
              <div className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 15.2c1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2-3.2 1.4-3.2 3.2 1.4 3.2 3.2 3.2zm0-5.5c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z" />
                  <path d="M20 4h-3.2l-1.3-2c-.2-.3-.5-.5-.9-.5H9.4c-.4 0-.7.2-.9.5L7.2 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 18H4V6h4.1l1.3-2h5.3l1.3 2H20v12z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent">
              My Gallery
            </h2>
          </div>
          <div className="w-40 h-1 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 cursor-pointer md:px-6 py-2 md:py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg shadow-green-500/25"
                  : "backdrop-blur-xl bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative transform transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${image.delay}ms` }}
              onMouseEnter={() => setHoveredCard(image.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* 3D Card Container */}
              <div className="relative perspective-1000">
                {/* Glowing Effect */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${image.color.replace(
                    "/20",
                    "/40"
                  )} rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse`}
                />

                {/* Main Card */}
                <div
                  className={`relative cursor-pointer backdrop-blur-2xl bg-gradient-to-br ${image.color} border border-white/20 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-y-12 cursor-pointer`}
                  onClick={() => openLightbox(image)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-4">
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {image.caption}
                    </p>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${image.color.replace(
                        "/20",
                        "/80"
                      )} backdrop-blur-sm rounded-full text-white text-xs font-semibold`}
                    >
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* Floating Particles for Hovered Card */}
                {hoveredCard === image.id && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${image.color.replace(
                          "/20",
                          ""
                        )} rounded-full animate-ping`}
                        style={{
                          left: `${10 + i * 12}%`,
                          top: `${10 + ((i * 20) % 80)}%`,
                          animationDelay: `${i * 0.15}s`,
                          animationDuration: "1.5s",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
          >
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
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
          >
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
          </button>

          {/* Image Container */}
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.8;
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </section>
  );
};

export default Gallery;
