import React, { useState, useEffect } from 'react';

const TimeSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate time left until end of year
  useEffect(() => {
    const now = new Date();
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
    const difference = endOfYear - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  }, [currentTime]);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Format time
  const formatTime = (time) => {
    return time.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Get day name
  const getDayName = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  const currentYear = currentTime.getFullYear();

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden py-16">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Clock-themed particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Floating time-themed shapes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`clock-${i}`}
              className="absolute opacity-10 animate-float"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + ((i * 10) % 60)}%`,
                animationDelay: `${i * 1}s`
              }}
            >
              {i % 3 === 0 && (
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full border-2 border-white/20" />
              )}
              {i % 3 === 1 && (
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-cyan-400 rounded-sm transform rotate-45" />
              )}
              {i % 3 === 2 && (
                <div className="w-10 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform rotate-12" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="relative z-10 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header Section */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-400 font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Time is Precious
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">LIVE </span>
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                TIME
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-8" />

            {/* Steve Jobs Quote */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 max-w-2xl mx-auto shadow-2xl">
              <blockquote className="text-lg md:text-xl text-gray-300 italic leading-relaxed">
                <span className="text-4xl text-cyan-400">"</span>
                Your time is limited, don't waste it.
                <span className="text-3xl text-cyan-400">"</span>
              </blockquote>
              <cite className="block mt-2 text-right text-purple-400 font-semibold ">
                — Steve Jobs
              </cite>
            </div>
          </div>

          {/* Live Time Display */}
          <div className={`mb-16 transform transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl text-center relative overflow-hidden">

              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 rounded-3xl blur-xl animate-pulse" />

              <div className="relative z-10">
                {/* Current Time */}
                <div className="mb-6">
                  <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-green-400 to-red-400 bg-clip-text text-transparent mb-2 font-mono">
                    {formatTime(currentTime)}
                  </h2>
                  <p className="text-xl md:text-2xl text-white font-semibold">
                    Today is <span className="text-cyan-400">{getDayName(currentTime)}</span>
                  </p>
                </div>

                {/* Bangladesh Time Zone */}
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-full">
                  <span className="text-green-400 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Bangladesh Standard Time
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Motivational Quote */}
          <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 text-center shadow-2xl">
              <p className="text-lg md:text-xl text-purple-300 font-medium">
                This year will pass quickly if you don't work hard toward your goals.
              </p>
            </div>
          </div>

          {/* Year End Countdown */}
          <div className={`mb-16 transform transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Countdown Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Year End Countdown
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mx-auto" />
            </div>

            {/* Countdown Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                {
                  value: timeLeft.days,
                  label: 'Days',
                  color: 'from-red-400 to-pink-500',
                  bgGradient: 'from-red-500/10 to-pink-500/10',
                  borderColor: 'border-red-500/30',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  value: timeLeft.hours,
                  label: 'Hours',
                  color: 'from-blue-400 to-cyan-500',
                  bgGradient: 'from-blue-500/10 to-cyan-500/10',
                  borderColor: 'border-blue-500/30',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  value: timeLeft.minutes,
                  label: 'Minutes',
                  color: 'from-green-400 to-emerald-500',
                  bgGradient: 'from-green-500/10 to-emerald-500/10',
                  borderColor: 'border-green-500/30',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  value: timeLeft.seconds,
                  label: 'Seconds',
                  color: 'from-purple-400 to-violet-500',
                  bgGradient: 'from-purple-500/10 to-violet-500/10',
                  borderColor: 'border-purple-500/30',
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div
                  key={item.label}
                  className={`backdrop-blur-xl bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} rounded-2xl p-6 shadow-2xl text-center group hover:scale-105 transform transition-all duration-300`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-white font-semibold text-sm md:text-base">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Year Left Summary */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 shadow-2xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">Time Remaining</h4>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Only <span className="text-cyan-400 font-bold">{timeLeft.days}</span> days left to end <span className="text-purple-400 font-bold">{currentYear}</span> — stay honest, work hard, and success will be yours, <span className="text-green-400 font-semibold">In shaa Allah</span> 🤗
              </p>
            </div>
          </div>

          {/* Inspirational Quote in Bangla */}
          <div className={`transform transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 shadow-2xl">

              {/* Quote Header */}
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-full mb-4">
                  <span className="text-green-400 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Words of Wisdom
                  </span>
                </div>
                <h3 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  জীবনের প্রেরণা
                </h3>
              </div>

              {/* Bangla Quote */}
              <blockquote className="text-xl md:text-lg text-white leading-relaxed text-center max-w-4xl mx-auto">
                <span className="text-4xl text-cyan-400 block mb-2">"</span>

                <p className="mb-6">
                  প্রত্যেক মানুষের মাঝেই কোনো না কোনো <span className="text-cyan-400 font-semibold">বিশেষ প্রতিভা</span> থাকে। কেউ সেই প্রতিভাকে চিনে নিয়ে সময়কে সঠিকভাবে কাজে লাগিয়ে নিজের জীবনকে <span className="text-green-400 font-semibold">উন্নতির পথে</span> এগিয়ে নিয়ে যায়। আবার অনেকেই থাকে, যারা অন্যের কথায় প্রভাবিত হয়ে নিজের লক্ষ্য থেকে বিচ্যুত হয়ে পড়ে।
                </p>

                <p>
                  তবে মনে রাখবেন—আপনার জীবনে যদি কোনো <span className="text-purple-400 font-semibold">সৎ লক্ষ্য</span> থাকে, আর আপনি যদি <span className="text-yellow-400 font-semibold">সততা ও কঠোর পরিশ্রমের</span> মাধ্যমে সেই লক্ষ্য অর্জনের চেষ্টা করে যান, তাহলে <span className="text-green-400 font-semibold">ইনশাআল্লাহ সফলতা</span> একদিন অবশ্যই আসবে।
                </p>

                <span className="text-4xl text-cyan-400 block mt-4">"</span>
              </blockquote>

              {/* Decorative Elements */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-18 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="w-18 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TimeSection;