import React, { useState, useEffect, useRef } from 'react';

const MockupPhone = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);




const carouselImages = [
  { src: "https://i.ibb.co.com/8ndKBwR5/carousel-3.jpg", alt: "Memory 1" },
  { src: "https://i.ibb.co.com/SXHM3ZCd/carousel-4.jpg", alt: "Memory 2" },
  { src: "https://i.ibb.co.com/3mNV3kWR/carousel-5.jpg", alt: "Memory 3" },
  { src: "https://i.ibb.co.com/1tJj4wFv/carousel-6.jpg", alt: "Memory 4" },
  { src: "https://i.ibb.co.com/5gqvSDML/carousel-7.jpg", alt: "Memory 5" },
  { src: "https://i.ibb.co.com/B5Z6t6qz/carousel-8.jpg", alt: "Memory 6" },
  { src: "https://i.ibb.co.com/kgydsr2V/carousel-9.jpg", alt: "Memory 7" },
  { src: "https://i.ibb.co.com/mVvC2WQ2/carousel-10.jpg", alt: "Memory 8" },
  { src: "https://i.ibb.co.com/x87r5JYt/carousel-11.jpg", alt: "Memory 9" },
  { src: "https://i.ibb.co.com/9zT3PFs/carousel-2.jpg", alt: "Memory 10" },
  { src: "https://i.ibb.co.com/BVNLcT2j/carousel-1.jpg", alt: "Memory 11" },
  { src: "https://i.ibb.co.com/wF06WJDT/carousel-15.jpg", alt: "Memory 12" },
  { src: "https://i.ibb.co.com/0ynfPgRZ/carousel-12.jpg", alt: "Memory 13" },
  { src: "https://i.ibb.co.com/svZPRR6V/carousel-13.jpg", alt: "Memory 14" },
  { src: "https://i.ibb.co.com/N0zYSYX/carousel-14.jpg", alt: "Memory 15" },
  { src: "https://i.ibb.co.com/tPZRcsRd/carousel-16.jpg", alt: "Memory 16" },
];

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScrolling && scrollRef.current) {
        const nextIndex = (currentImage + 1) % carouselImages.length;
        setCurrentImage(nextIndex);
        scrollRef.current.scrollTo({
          top: nextIndex * 650,
          behavior: 'smooth'
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage, isScrolling, carouselImages.length]);

  const handleScroll = () => {
    if (scrollRef.current) {
      setIsScrolling(true);
      const scrollTop = scrollRef.current.scrollTop;
      const imageHeight = 650;
      const newCurrentImage = Math.round(scrollTop / imageHeight);
      setCurrentImage(newCurrentImage);

      // Reset scrolling state after a delay
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  return (
    <section id="mockup-phone" className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating Phone Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4zm10 16H7v-2h10v2z"/>
            </svg>
          </div>
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      <div className="relative cursor-pointer z-10 max-w-6xl mx-auto px-4">

        {/* Phone Container */}
        <div className={`flex cursor-pointer items-center justify-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

          {/* 3D Phone Mockup */}
          <div className="relative group perspective-1000">

            {/* Massive Glowing Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-[80px] blur-3xl opacity-60 group-hover:opacity-80 transition-all duration-700 animate-pulse" />

            {/* Phone Shadow */}
            <div className="absolute top-8 left-4 w-[320px] h-[650px] bg-black/50 rounded-[50px] blur-2xl transform rotate-2" />

            {/* Main Phone Container */}
            <div className="relative cursor-grab w-[320px] h-[650px] rounded-[50px] bg-gradient-to-br from-gray-800 via-gray-900 to-black p-[4px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transform transition-all duration-700 hover:scale-105 hover:rotate-y-12 group-hover:shadow-[0_30px_80px_rgba(138,43,226,0.3)]">

              {/* Premium Glass Shine Effect */}
              <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-[50px]">
                <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-white/20 via-white/5 to-transparent rotate-12 blur-xl animate-shine" />
              </div>

              {/* Side Buttons */}
              <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-700 rounded-l-full" />
              <div className="absolute -left-1 top-32 w-1 h-12 bg-gray-700 rounded-l-full" />
              <div className="absolute -left-1 top-48 w-1 h-12 bg-gray-700 rounded-l-full" />
              <div className="absolute -right-1 top-28 w-1 h-20 bg-gray-700 rounded-r-full" />

              {/* Inner Screen Bezel */}
              <div className="w-full h-full rounded-[45px] bg-black p-[3px] relative overflow-hidden">

                {/* Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-[92px] h-[28px] bg-black/95 rounded-[20px] z-20 backdrop-blur-sm shadow-lg border border-gray-800 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
                  <div className="w-16 h-1 bg-gray-800 rounded-full" />
                </div>

                {/* Screen Content with Custom Scrollbar */}
                <div
                  ref={scrollRef}
                  className="h-full w-full rounded-[40px] bg-black overflow-y-auto scroll-snap-y snap-mandatory scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800"
                  onScroll={handleScroll}
                >
                  {carouselImages.map((image, index) => (
                    <div key={index} className="w-full h-[650px] snap-start relative group/img">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-all duration-500 group-hover/img:scale-110"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />

                      {/* Image Counter */}
                      <div className="absolute top-4 right-4 backdrop-blur-xl bg-black/30 text-white text-xs px-2 py-1 rounded-full border border-white/20">
                        {index + 1}/{carouselImages.length}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20" />
              </div>

              {/* Screen Reflection */}
              <div className="absolute inset-0 rounded-[50px] bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>

            {/* Floating Particles Around Phone */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-60"
                  style={{
                    left: `${10 + (i * 12)}%`,
                    top: `${20 + ((i * 15) % 60)}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className={`flex justify-center mt-8 space-x-2 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {carouselImages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? 'bg-purple-400 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Bottom Message */}
        <div className={`flex items-center justify-center gap-3 mt-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-8 py-4 shadow-xl">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
            </div>

            <div className="flex items-center gap-3">
              <p className="text-base md:text-xl font-bold text-white">
                Stay tuned. The best is yet to come..
              </p>
              <div className="text-2xl animate-pulse">🚀</div>
              <div className="w-18 h-18 rounded-full overflow-hidden border-2 border-blue-400 animate-pulse">
                <img
                  src="https://i.ibb.co.com/wF06WJDT/carousel-15.jpg"
                  alt="Smile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(12deg); }
          100% { transform: translateX(200%) translateY(200%) rotate(12deg); }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.3;
          }
        }

        .animate-shine {
          animation: shine 8s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-12 {
          transform: rotateY(12deg);
        }

        /* Custom Scrollbar */
        .scrollbar-thin {
          scrollbar-width: thin;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #8b5cf6;
          border-radius: 10px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #a78bfa;
        }
      `}</style>
    </section>
  );
};

export default MockupPhone;