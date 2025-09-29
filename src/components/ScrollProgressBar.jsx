// components/ScrollProgressBar.jsx
import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Custom Scroll Bar Styles */}
      <style jsx global>{`
        /* Custom Scrollbar for Webkit browsers */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(139, 92, 246, 0.08);
          border-radius: 8px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #ec4899, #f97316, #8b5cf6, #06b6d4);
          border-radius: 8px;
          border: 1px solid rgba(139, 92, 246, 0.1);
          box-shadow: 0 0 12px rgba(236, 72, 153, 0.3);
          transition: all 0.3s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #eab308, #facc15);
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.6);
          transform: scale(1.1);
        }

        ::-webkit-scrollbar-thumb:active {
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #eab308, #facc15);
          box-shadow: 0 0 25px rgba(251, 191, 36, 0.8);
        }

        /* For Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #ec4899 rgba(139, 92, 246, 0.08);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          ::-webkit-scrollbar {
            width: 8px;
          }
        }
      `}</style>

      {/* Progress Counter next to Rohan Raka */}
      <div className="fixed top-4 left-44 z-[5000] sm:left-48 md:left-42 md:top-1.5  xl:left-64 2xl:left-72">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border border-white/10 rounded-full px-2 py-1 ">
          <div className="flex items-center gap-1 lg:gap-1.5">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm md:text-xs font-medium bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent whitespace-nowrap">
              {scrollProgress.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar - Fixed positioning for all devices */}
      <div
        className="fixed left-0 right-0 z-[5000] h-1 md:h-1"
        style={{
          top: 'var(--navbar-height, 70px)', // CSS variable for flexibility
          pointerEvents: 'none'
        }}
      >
        {/* Background track */}
        <div className="w-full h-full bg-gradient-to-r from-slate-900/20 via-purple-900/20 to-slate-900/20">
          {/* Progress fill */}
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-500 to-emerald-500 transition-all duration-200 ease-out relative overflow-hidden"
            style={{
              width: `${scrollProgress}%`,
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(139, 92, 246, 0.2)'
            }}
          >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 animate-pulse"></div>

            {/* Moving light effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12"
              style={{
                animation: 'slideLight 3s ease-in-out infinite'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* CSS for better mobile experience and animations */}
      <style jsx>{`
        @keyframes slideLight {
          0% {
            transform: translateX(-100%) skewX(-12deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
            opacity: 0;
          }
        }

        /* Mobile specific styles */
        @media (max-width: 768px) {
          .fixed {
            position: fixed !important;
          }
        }

        /* Ensure proper layering */
        .z-\\[9997\\] {
          z-index: 9997 !important;
        }

        .z-\\[9998\\] {
          z-index: 9998 !important;
        }
      `}</style>

      {/* Additional inline styles for mobile compatibility */}
      <style dangerouslySetInnerHTML={{
        __html: `
          :root {
            --navbar-height: 85px;
          }

          @media (max-width: 768px) {
            :root {
              --navbar-height: 70px;
            }
          }

          @media (max-width: 480px) {
            :root {
              --navbar-height: 65px;
            }
          }
        `
      }} />
    </>
  );
};

export default ScrollProgressBar;