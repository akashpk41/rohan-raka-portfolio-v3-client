import React, { useState, useEffect } from "react";

const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredChat, setHoveredChat] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Abu Daud",
      role: "Director of Ideal Nursing College",
      avatar: "https://i.ibb.co.com/MxCSqckT/abu-daud-sir.jpg",
      message:
        "One of the most sincere and dedicated students I've taught. Bright future ahead!",
      position: "start",
      color: {
        bubble: "from-blue-500/20 to-sky-500/20",
        border: "border-blue-500/50",
        glow: "from-blue-500 to-sky-500",
        glowVars: { "--glow-from": "#3b82f6", "--glow-to": "#0ea5e9" },
      },
      link: "https://www.facebook.com/Abudaud1987",
      delay: 200,
    },
    {
      id: 2,
      name: "Farzana Rahman",
      role: "Instructor",
      avatar: "https://i.ibb.co.com/k2h4hTsY/medam-1.png",
      message:
        "He is sincere and capable. My guidance is strict only because I expect the best from him.",
      position: "end",
      color: {
        bubble: "from-teal-500/20 to-emerald-500/20",
        border: "border-teal-500/50",
        glow: "from-teal-500 to-emerald-500",
        glowVars: { "--glow-from": "#14b8a6", "--glow-to": "#10b981" },
      },
      delay: 300,
    },
    {
      id: 3,
      name: "Faysal Ahmed",
      role: "Instructor",
      avatar: "https://i.ibb.co.com/FL06MJVC/faysal-sir.jpg",
      message:
        "A disciplined, respectful, and academically strong student with great potential to excel in the healthcare field.",
      position: "start",
      color: {
        bubble: "from-yellow-500/20 to-amber-500/20",
        border: "border-yellow-500/50",
        glow: "from-yellow-500 to-amber-500",
        glowVars: { "--glow-from": "#eab308", "--glow-to": "#f59e0b" },
      },
      link: "https://www.facebook.com/na.i.ma.955486",
      delay: 400,
    },
    {
      id: 4,
      name: "Rokeya Khatun",
      role: "Instructor",
      avatar: "https://i.ibb.co.com/SXcmBpcS/medam-2.png",
      message:
        "A calm and courteous presence stands out — maintaining focus will lead to lasting success.",
      position: "end",
      color: {
        bubble: "from-pink-500/20 to-rose-500/20",
        border: "border-pink-500/50",
        glow: "from-pink-500 to-rose-500",
        glowVars: { "--glow-from": "#ec4899", "--glow-to": "#f43f5e" },
      },
      delay: 500,
    },
    {
      id: 5,
      name: "Nayeem Islam",
      role: "Senior",
      avatar: "https://i.ibb.co.com/VWGr8zyh/nayeem-senior.jpg",
      message:
        "ভালো করিস, এটা জানি — শুধু নেতামিটা একটু কমালে আরও সুন্দর হতো সবকিছু।",
      position: "start",
      color: {
        bubble: "from-indigo-500/20 to-purple-500/20",
        border: "border-indigo-500/50",
        glow: "from-indigo-500 to-purple-500",
        glowVars: { "--glow-from": "#6366f1", "--glow-to": "#8b5cf6" },
      },
      link: "https://www.facebook.com/nayeem.islam.290954",
      delay: 600,
    },
    {
      id: 6,
      name: "Sohag Sohag Sohag",
      role: "Senior",
      avatar: "https://i.ibb.co.com/hFr9GdVF/sohag-senior.jpg",
      message:
        "তুই ভালো ছাত্র, এটা কেউ অস্বীকার করবে না — কিন্তু নেতামিটা একটু ছাড়তে পারলে পুরাই লেজেন্ড হতি রে!",
      position: "end",
      color: {
        bubble: "from-purple-500/20 to-violet-500/20",
        border: "border-purple-500/50",
        glow: "from-purple-500 to-violet-500",
        glowVars: { "--glow-from": "#8b5cf6", "--glow-to": "#7c3aed" },
      },
      link: "https://www.facebook.com/sohag.sohag.sohag.880620",
      delay: 700,
    },
    {
      id: 7,
      name: "Sohan Islam Nayeem",
      role: "Dulavaiya",
      avatar: "https://i.ibb.co.com/4ZtyRZ3z/nayeem-vai.jpg",
      message:
        "শোনো, আগে মন দিয়ে পড়াশোনা করো। সারাক্ষণ এখানে-সেখানে ঘুরে সময় নষ্ট কোরো না। এখন শেখার সময়—এটা নষ্ট করলে পরে আফসোস হবে। আমি চাই তুমি জীবনে ভালো কিছু করো, নিজের একটা অবস্থান তৈরি করো। সফল হতে চাইলে পড়ালেখাটাকে সিরিয়াসলি নাও।",
      position: "start",
      color: {
        bubble: "from-green-500/20 to-emerald-500/20",
        border: "border-green-500/50",
        glow: "from-green-500 to-emerald-500",
        glowVars: { "--glow-from": "#22c55e", "--glow-to": "#10b981" },
      },
      link: "https://www.facebook.com/sohanislam95",
      delay: 800,
    },
    {
      id: 8,
      name: "Afsana Mimi",
      role: "Boro Apu",
      avatar: "https://i.ibb.co.com/YF3cP5Vk/afsana-apu.jpg",
      message:
        "খালি প্রেম করিস... বই-পুস্তক মনে নেই একদম! মাথায় ঢোকে কিছু? 🙄 এইটা কয় নম্বর রে? তিন না চার? নাকি তুই নিজেই গুনতি ভুলে গেছিস! এইটাই আবার তোর 'রিয়েল লাভ'? 🤨 কিন্তু ভাইরে, একটু হলেও পড়াশোনার দিকে মন দে। তোর বড় বোন হিসেবে বকা দিই ঠিকই, কিন্তু চিন্তাও যে করি..❤️️",
      position: "end",
      color: {
        bubble: "from-cyan-500/20 to-blue-500/20",
        border: "border-cyan-500/50",
        glow: "from-cyan-500 to-blue-500",
        glowVars: { "--glow-from": "#06b6d4", "--glow-to": "#3b82f6" },
      },

      delay: 900,
    },
    {
      id: 9,
      name: "Akash PK",
      role: "Purai Kharap",
      avatar: "https://i.ibb.co.com/0VtjbfDw/ahnaf-tazwar1.jpg",
      message:
        "জীবনে সবচেয়ে কঠিন কাজগুলোর একটি হলো—সিদ্ধান্ত গ্রহণ। নার্সিং শুধু একটা পেশা নয়, এটা মানুষের সেবার সবচেয়ে পবিত্র মাধ্যম। হার্ডওয়ার্ক, ডেডিকেশন আর মন-প্রাণ দিয়ে ১০০% দিয়ে যা। ইনশাআল্লাহ, কষ্ট কখনো বৃথা যাবে না। লেগে থাক, থেমে যাস না! 🤍💉",
      position: "start",
      color: {
        bubble: "from-orange-500/20 to-red-500/20",
        border: "border-orange-500/50",
        glow: "from-orange-500 to-red-500",
        glowVars: { "--glow-from": "#f97316", "--glow-to": "#ef4444" },
      },
      link: "https://www.facebook.com/atapk41/",
      time: "Oct 2024",
      online: true,
      delay: 1000,
    },
    {
      id: 10,
      name: "ShaWon Hossain",
      role: "Dada",
      avatar: "https://i.ibb.co.com/sdVmv1qc/shawon.jpg",
      message:
        "বড় কিছু করে দেখাও, যেন একদিন তোমার গল্পে মানুষ অনুপ্রেরণা খুঁজে পায়। পাশে আছি সবসময়—দোয়া রইলো।",
      position: "end",
      color: {
        bubble: "from-rose-500/20 to-pink-500/20",
        border: "border-rose-500/50",
        glow: "from-rose-500 to-pink-500",
        glowVars: { "--glow-from": "#f43f5e", "--glow-to": "#ec4899" },
      },
      link: "https://www.facebook.com/muhammadshawonhossain34",
      delay: 1100,
    },
    {
      id: 11,
      name: "Azizul Islam Sagor",
      role: "কলা",
      avatar: "https://i.ibb.co.com/3mZhPxZj/shagor.jpg",
      message:
        "কিরে ব্রাজিল! নেইমার তো খেলতেই পারেনা, মাঠে গিয়ে শুধু নাটক করে। আর মেসি একদম আলাদা লেভেলের খেলোয়াড়, বল পেলে সবাইকে অবাক করে দেয়।",
      position: "start",
      color: {
        bubble: "from-emerald-500/20 to-green-500/20",
        border: "border-emerald-500/50",
        glow: "from-emerald-500 to-green-500",
        glowVars: { "--glow-from": "#10b981", "--glow-to": "#22c55e" },
      },
      link: "https://www.facebook.com/azizul.islam.sagor.2024",
      delay: 1200,
    },
    {
      id: 12,
      name: "Yâsh Ahâmêd Tãñzîd",
      role: "Black Mamba",
      avatar: "https://i.ibb.co.com/bg0LLtVh/shawon2.jpg",
      message:
        "Tor bandopi pakhi take Dilei hbi, Tor bandopi pakhi k vabi kobu onno meyk kois k",
      position: "end",
      color: {
        bubble: "from-fuchsia-500/20 to-pink-500/20",
        border: "border-fuchsia-500/50",
        glow: "from-fuchsia-500 to-pink-500",
        glowVars: { "--glow-from": "#d946ef", "--glow-to": "#ec4899" },
      },
      link: "https://www.facebook.com/ostanzid.khan",
      delay: 1300,
    },
    {
      id: 13,
      name: "Prabhas",
      role: "Tea Stall Friend",
      avatar: "https://i.ibb.co.com/845Db0m5/prabhas.jpg",
      message: "প্রতিদিন সন্ধ্যায় ব্যাপারীর দোকানে আড্ডা না দিলে তো দিনই শেষ হতো না!",
      position: "start",
      color: {
        bubble: "from-lime-500/20 to-green-500/20",
        border: "border-lime-500/50",
        glow: "from-lime-500 to-green-500",
        glowVars: { "--glow-from": "#84cc16", "--glow-to": "#22c55e" },
      },
      link: "https://www.facebook.com/ActorPrabhas",
      online: true,
      delay: 1400,
    },
    {
      id: 14,
      name: "Ahnaf Tazwar",
      role: "Purai Shoitan",
      avatar: "https://i.ibb.co.com/k2dkych2/ahnaf-tazwar.jpg",
      message:
        "চাটামটা একটু কম মারিস ভাই—হিরোইজম দেখালেই প্রভাস হওয়া যায় না! 😆 প্রভাস কবে তোর ফ্রেন্ড হইলি শুনি? ভালো হয়ে যাইস, না হলে 'বাহুবলী ৩' তোর লাইফেই শুট করে দিবো! 🎬 \"Ja Ga🤞\"",
      position: "end",
      color: {
        bubble: "from-rose-500/20 to-red-500/20",
        border: "border-rose-500/50",
        glow: "from-rose-500 to-red-500",
        glowVars: { "--glow-from": "#f43f5e", "--glow-to": "#ef4444" },
      },
      link: "https://www.facebook.com/atapk41/",
      time: "4:30 PM",
      online: true,
      delay: 1500,
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes floatBubble {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        @keyframes avatarPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes avatarGlow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1.05);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.15);
          }
        }

        @keyframes avatarBlink {
          0%, 80%, 100% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.3;
          }
        }

        @keyframes avatarRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes onlineStatus {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes bounceGentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>

      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          {/* Large Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Chat Bubble Particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400/60 to-purple-400/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            />
          ))}

          {/* Floating Speech Bubbles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`bubble-${i}`}
              className="absolute opacity-10"
              style={{
                left: `${5 + i * 12}%`,
                top: `${10 + ((i * 15) % 70)}%`,
                animationDelay: `${i * 0.8}s`,
                animation: `floatBubble 4s ease-in-out infinite`,
              }}
            >
              <div className="w-8 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full relative">
                <div className="absolute -bottom-1 left-2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-cyan-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          {/* Section Title */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6">
              "Voices That Shaped My Journey"
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mx-auto mb-8" />

            {/* Subtitle */}
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                "ভাইদের ভাই, এলাকার ভদ্র ছেলে! এক কথায় সবার আদরের! তাই আমাকে
                নিয়ে সবারই কিছু না কিছু মন্তব্য আছে, তার মাঝে কিছু্‌,,"
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex ${
                  testimonial.position === "end" ? "justify-end" : "justify-start"
                } transform transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${testimonial.delay}ms` }}
                onMouseEnter={() => setHoveredChat(testimonial.id)}
                onMouseLeave={() => setHoveredChat(null)}
              >
                <div
                  className={`flex items-start space-x-3 max-w-md lg:max-w-lg ${
                    testimonial.position === "end"
                      ? "flex-row-reverse space-x-reverse"
                      : ""
                  }`}
                >
                  {/* Enhanced Avatar Section */}
                  <div className="flex-shrink-0 z-50 relative group">
                    {/* Outer Pulsing Ring */}
                    <div
                      className="absolute -inset-6 rounded-full"
                      style={{
                        animation: `avatarPulse 3s ease-in-out infinite`,
                        background: `linear-gradient(45deg, ${testimonial.color.glowVars["--glow-from"]}, ${testimonial.color.glowVars["--glow-to"]})`,
                        filter: 'blur(20px)',
                        opacity: 0.4
                      }}
                    />

                    {/* Middle Glowing Ring */}
                    <div
                      className="absolute -inset-4 rounded-full"
                      style={{
                        animation: `avatarGlow 3s ease-in-out infinite`,
                        background: `linear-gradient(45deg, ${testimonial.color.glowVars["--glow-from"]}, ${testimonial.color.glowVars["--glow-to"]})`,
                        filter: 'blur(12px)',
                        opacity: 0.6
                      }}
                    />

                    {/* Inner Blinking Ring */}
                    <div
                      className="absolute  -inset-3 rounded-full"
                      style={{
                        animation: `avatarBlink 1s ease-in-out infinite`,
                        background: `linear-gradient(45deg, ${testimonial.color.glowVars["--glow-from"]}, ${testimonial.color.glowVars["--glow-to"]})`,
                        filter: 'blur(8px)'
                      }}
                    />

                    {/* Online Status Ring for Online Users */}
                    {testimonial.online && (
                      <div
                        className="absolute -inset-2 rounded-full"
                        style={{
                          animation: `onlineStatus 2s ease-in-out infinite`,
                          background: 'linear-gradient(45deg, #10b981, #34d399)',
                          filter: 'blur(4px)'
                        }}
                      />
                    )}

                    {/* Main Avatar Container */}
                    <div className="relative">
                      <a
                        href={testimonial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {/* Avatar Border Ring */}
                        <div
                          className="absolute -inset-1 rounded-full p-0.5"
                          style={{
                            background: `linear-gradient(45deg, ${testimonial.color.glowVars["--glow-from"]}, ${testimonial.color.glowVars["--glow-to"]})`,
                            animation: `avatarRotate 4s linear infinite`
                          }}
                        >
                          <div className="w-full h-full bg-gray-900 rounded-full" />
                        </div>

                        {/* Avatar Image */}
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover border-2 border-gray-800 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 z-10"
                          style={{
                            boxShadow: `0 0 20px ${testimonial.color.glowVars["--glow-from"]}80`,
                          }}
                        />
                      </a>

                      {/* Online Indicator */}
                      {testimonial.online && (
                        <div
                          className="absolute -bottom-1 -right-1 z-10 w-5 h-5 bg-green-400 border-2 border-gray-900 rounded-full"
                          style={{ animation: `heartbeat 2.5s ease-in-out infinite` }}
                        >
                          <div className="absolute inset-1 bg-green-300 rounded-full animate-pulse" />
                        </div>
                      )}

                      {/* Floating Sparkles */}
                      <div className="absolute  inset-0 pointer-events-none">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-70"
                            style={{
                              left: `${10 + i * 25}%`,
                              top: `${5 + ((i * 30) % 80)}%`,
                              animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                              animationDelay: `${i * 0.5}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Chat Content */}
                  <div
                    className={`flex flex-col ${
                      testimonial.position === "end" ? "items-end" : "items-start"
                    }`}
                  >
                    {/* Header */}
                    <div
                      className={`flex items-center space-x-2 mb-2 ${
                        testimonial.position === "end"
                          ? "flex-row-reverse space-x-reverse"
                          : ""
                      }`}
                    >
                      <span className="font-semibold text-white text-base md:text-xl">
                        {testimonial.name}
                      </span>
                      <span
                        className="text-xs md:text-sm px-2 py-1 rounded-full text-white font-medium animate-pulse"
                        style={{
                          background: `linear-gradient(45deg, ${testimonial.color.glowVars["--glow-from"]}, ${testimonial.color.glowVars["--glow-to"]})`,
                        }}
                      >
                        {testimonial.role}
                      </span>
                      {testimonial.time && (
                        <span className="text-xs text-gray-200">
                          {testimonial.time}
                        </span>
                      )}
                    </div>

                    {/* Chat Bubble */}
                    <div className="group relative">
                      {/* Always glowing background effect */}
                      <div
                        className="absolute -inset-2 rounded-3xl blur-xl opacity-50 group-hover:opacity-60 transition-all duration-5000"
                        style={{
                          background: `linear-gradient(45deg, ${testimonial.color.glowVars["--glow-from"]}, ${testimonial.color.glowVars["--glow-to"]})`,
                          animation: 'glowPulse 4s ease-in-out infinite'
                        }}
                      />

                      {/* Main Chat Bubble */}
                      <div
                        className={`relative backdrop-blur-2xl bg-gradient-to-br ${testimonial.color.bubble} border ${testimonial.color.border} rounded-3xl px-6 py-4 shadow-2xl transform transition-all duration-500 group-hover:scale-105 cursor-pointer shadow-xl`}
                      >
                        {/* Message Text */}
                        <p className="text-gray-200 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                          {testimonial.message}
                        </p>

                        {/* Chat Tail */}
                        <div
                          className={`absolute top-6 ${
                            testimonial.position === "end"
                              ? "-right-2"
                              : "-left-2"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 bg-gradient-to-br ${
                              testimonial.color.bubble
                            } border-l ${
                              testimonial.color.border
                            } border-b transform rotate-45 ${
                              testimonial.position === "end"
                                ? "border-l-0 border-t"
                                : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Particles for Hovered Chat */}
                  {hoveredChat === testimonial.id && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 rounded-full opacity-80 animate-ping"
                          style={{
                            left: `${10 + i * 12}%`,
                            top: `${15 + ((i * 15) % 70)}%`,
                            background: `linear-gradient(45deg, ${testimonial.color.glowVars["--glow-from"]}, ${testimonial.color.glowVars["--glow-to"]})`,
                            animationDelay: `${i * 0.15}s`,
                            animationDuration: "1s",
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Closing Message */}
          <div
            className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl px-6 pb-6 pt-12 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div
                  className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  style={{ animation: 'bounceGentle 2s ease-in-out infinite' }}
                >
                  <span className="text-white text-2xl">💬</span>
                </div>
              </div>

              <p className="text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
                "সবার মতামত তো আর এক লেখায় শেষ করা যাবে না! তবুও কিছু কথা চুপি
                চুপি শেয়ার করলাম। আসলে আপনাদের জানিয়ে দিয়েও কোনো লাভ নেই—আপনারা
                তো আগেই অনেক কিছু জানেন! 😉"
              </p>
              <p className="text-cyan-400 font-semibold mt-4">
                ধন্যবাদ, এতক্ষণ মনোযোগ দিয়ে পড়ার জন্য!😊
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;