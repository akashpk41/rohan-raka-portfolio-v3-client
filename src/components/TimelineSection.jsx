import React, { useState, useEffect, useRef } from 'react';

// React Scramble Effect Hook
const useScrambleText = (text, isVisible = true, duration = 2000) => {
  const [scrambledText, setScrambledText] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isVisible || !text) return;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setScrambledText(prevText =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1/3;
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, [text, isVisible, duration]);

  return scrambledText || text;
};

const TimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Trigger scramble effect for title
      setTimeout(() => {
        setVisibleItems(prev => ({ ...prev, title: true }));
      }, 500);

      // Trigger scramble effect for each timeline item
      timelineData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => ({ ...prev, [`item-${index}`]: true }));
        }, 1000 + (index * 200));
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Scramble effects for different elements
  const titleScramble = useScrambleText("My Life in Milestones", visibleItems.title);
  const subtitleScramble = useScrambleText("The Story of My Growth", visibleItems.title);

  const timelineData = [
    {
      year: "2014",
      title: "Early School Days",
      description: "Started my journey in school life with fun, friendship, and foundations.",
      icon: "🎓",
      color: {
        primary: "from-purple-500 to-violet-600",
        secondary: "from-purple-500/20 to-violet-500/20",
        text: "text-purple-400",
        border: "border-purple-500/50"
      },
      delay: 100
    },
    {
      year: "2020",
      title: "High School Journey",
      description: "A phase of challenges, discoveries, and preparations for the future.",
      icon: "🏫",
      color: {
        primary: "from-red-500 to-rose-600",
        secondary: "from-red-500/20 to-rose-500/20",
        text: "text-red-400",
        border: "border-red-500/50"
      },
      delay: 200
    },
    {
      year: "2022",
      title: "College Life & HSC",
      description: "New environment, independence, and major academic growth.",
      icon: "📘",
      color: {
        primary: "from-blue-500 to-sky-600",
        secondary: "from-blue-500/20 to-sky-500/20",
        text: "text-blue-400",
        border: "border-blue-500/50"
      },
      delay: 300
    },
    {
      year: "2023",
      title: "Started Nursing Education",
      description: "Entered the field of care, compassion, and science.",
      icon: "🩺",
      color: {
        primary: "from-green-500 to-emerald-600",
        secondary: "from-green-500/20 to-emerald-500/20",
        text: "text-green-400",
        border: "border-green-500/50"
      },
      delay: 400
    },
    {
      year: "2025",
      title: "Clinical Practice",
      description: "Real-world application of nursing skills to make a difference.",
      icon: "🏥",
      color: {
        primary: "from-yellow-500 to-amber-600",
        secondary: "from-yellow-500/20 to-amber-500/20",
        text: "text-yellow-400",
        border: "border-yellow-500/50"
      },
      delay: 500
    },
    {
      year: "Currently",
      title: "Shaping My Future",
      description: "Interning at Pabna Sadar Hospital, I'm planning to grow personally and professionally by enhancing my clinical skills.",
      icon: "🚀",
      color: {
        primary: "from-cyan-500 to-teal-600",
        secondary: "from-cyan-500/20 to-teal-500/20",
        text: "text-cyan-400",
        border: "border-cyan-500/50"
      },
      delay: 600
    }
  ];

  // Generate scramble effects for timeline items
  const itemScrambles = timelineData.map((item, index) => ({
    title: useScrambleText(item.title, visibleItems[`item-${index}`]),
    description: useScrambleText(item.description, visibleItems[`item-${index}`], 1500)
  }));

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Premium Particle Effects */}
      <div className="absolute inset-0">
        {/* Large Floating Orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-green-500/25 to-teal-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Timeline Path Particles */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400/80 to-purple-400/80 rounded-full animate-timeline-float"
            style={{
              left: `${45 + Math.sin(i * 0.5) * 10}%`,
              top: `${10 + (i * 1.3)}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute opacity-30 animate-float-${i % 4}`}
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${15 + ((i * 12) % 70)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {i % 4 === 0 && (
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-400 rounded transform rotate-45" />
            )}
            {i % 4 === 1 && (
              <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full" />
            )}
            {i % 4 === 2 && (
              <div className="w-5 h-5 bg-gradient-to-br from-pink-400 to-purple-400" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            )}
            {i % 4 === 3 && (
              <div className="w-3 h-8 bg-gradient-to-t from-yellow-400 to-orange-400 rounded-full" />
            )}
          </div>
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-lg opacity-60" />
              <div className="relative w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              {titleScramble}
            </h2>
          </div>
          <div className="w-40 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full mx-auto mb-4" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {subtitleScramble}
          </p>
        </div>

        {/* Premium Timeline */}
        <div className="relative">
          {/* Central Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-full" />

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  // Desktop layout (alternating)
                  `hidden md:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`
                } transform transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Desktop Timeline Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="group relative">
                    {/* Glowing border effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${item.color.primary} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

                    {/* Main Card */}
                    <div className={`relative backdrop-blur-2xl bg-gradient-to-br ${item.color.secondary} border ${item.color.border} rounded-3xl p-8 shadow-2xl transform transition-all duration-500 group-hover:scale-105 ${
                      hoveredItem === index ? 'shadow-2xl shadow-purple-500/25' : ''
                    }`}>

                      {/* Year Badge */}
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color.primary} rounded-full mb-4 shadow-lg`}>
                        <span className="text-white font-bold text-sm">{item.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-2xl font-bold text-white mb-3 group-hover:${item.color.text} transition-colors duration-300`}>
                        <span className="mr-2">{item.icon}</span>
                        {itemScrambles[index].title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {itemScrambles[index].description}
                      </p>

                      {/* Decorative Arrow */}
                      <div className={`absolute ${index % 2 === 0 ? '-right-4' : '-left-4'} top-1/2 transform -translate-y-1/2`}>
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.color.primary} rounded-full flex items-center justify-center shadow-lg`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={index % 2 === 0 ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Central Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${item.color.primary} rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-900 transform transition-all duration-300 ${
                    hoveredItem === index ? 'scale-125 rotate-12' : 'hover:scale-110'
                  }`}>
                    <span className="text-2xl filter drop-shadow-lg">{item.icon}</span>

                    {/* Pulsing Ring */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color.primary} animate-ping opacity-30`} />
                  </div>
                </div>

                {/* Empty Space for Opposite Side */}
                <div className="w-5/12" />

                {/* Floating Particles for Hovered Item */}
                {hoveredItem === index && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${item.color.primary} rounded-full animate-ping`}
                        style={{
                          left: `${20 + (i * 8)}%`,
                          top: `${10 + ((i * 15) % 80)}%`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '1s'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Timeline Layout */}
            {timelineData.map((item, index) => (
              <div
                key={`mobile-${index}`}
                className={`md:hidden relative flex items-start space-x-6 transform transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Mobile Timeline Node */}
                <div className="flex-shrink-0 relative">
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${item.color.primary} rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-900 transform transition-all duration-300 ${
                    hoveredItem === index ? 'scale-110 rotate-12' : ''
                  }`}>
                    <span className="text-2xl filter drop-shadow-lg">{item.icon}</span>

                    {/* Pulsing Ring */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color.primary} animate-ping opacity-30`} />
                  </div>
                </div>

                {/* Mobile Timeline Content */}
                <div className="flex-1 min-w-0">
                  <div className="group relative">
                    {/* Glowing border effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${item.color.primary} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

                    {/* Mobile Card - Larger and better spaced */}
                    <div className={`relative backdrop-blur-2xl bg-gradient-to-br ${item.color.secondary} border ${item.color.border} rounded-2xl p-6 shadow-2xl transform transition-all duration-500 group-hover:scale-105`}>

                      {/* Year Badge */}
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color.primary} rounded-full mb-4 shadow-lg`}>
                        <span className="text-white font-bold text-sm">{item.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {itemScrambles[index].title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {itemScrambles[index].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Floating Particles */}
                {hoveredItem === index && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${item.color.primary} rounded-full animate-ping`}
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: `${10 + ((i * 20) % 80)}%`,
                          animationDelay: `${i * 0.15}s`,
                          animationDuration: '1s'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes timeline-float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-25px) rotateX(180deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-15px) rotateY(180deg); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(10px) rotate(90deg); }
        }

        .animate-timeline-float {
          animation: timeline-float 4s ease-in-out infinite;
        }

        .animate-float-0 {
          animation: float-0 6s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 5s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;