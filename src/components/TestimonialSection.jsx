import React, { useState, useEffect } from 'react';

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
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      message: "One of the most sincere and dedicated students I've taught. Bright future ahead!",
      position: "start",
      color: {
        bubble: "from-blue-500/20 to-sky-500/20",
        border: "border-blue-500/50",
        glow: "from-blue-500 to-sky-500"
      },
      link: "https://www.facebook.com/Abudaud1987",
      delay: 200
    },
    {
      id: 2,
      name: "Farzana Rahman",
      role: "Instructor",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c64b1e78?w=150&h=150&fit=crop&crop=face",
      message: "He is sincere and capable. My guidance is strict only because I expect the best from him.",
      position: "end",
      color: {
        bubble: "from-teal-500/20 to-emerald-500/20",
        border: "border-teal-500/50",
        glow: "from-teal-500 to-emerald-500"
      },
      delay: 300
    },
    {
      id: 3,
      name: "Faysal Ahmed",
      role: "Instructor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      message: "A disciplined, respectful, and academically strong student with great potential to excel in the healthcare field.",
      position: "start",
      color: {
        bubble: "from-pink-500/20 to-rose-500/20",
        border: "border-pink-500/50",
        glow: "from-pink-500 to-rose-500"
      },
      link: "https://www.facebook.com/na.i.ma.955486",
      delay: 400
    },
    {
      id: 4,
      name: "Rokeya Khatun",
      role: "Instructor",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      message: "A calm and courteous presence stands out — maintaining focus will lead to lasting success.",
      position: "end",
      color: {
        bubble: "from-yellow-500/20 to-amber-500/20",
        border: "border-yellow-500/50",
        glow: "from-yellow-500 to-amber-500"
      },
      delay: 500
    },
    {
      id: 5,
      name: "Nayeem Islam",
      role: "Senior",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      message: "ভালো করিস, এটা জানি — শুধু নেতামিটা একটু কমালে আরও সুন্দর হতো সবকিছু।",
      position: "start",
      color: {
        bubble: "from-indigo-500/20 to-purple-500/20",
        border: "border-indigo-500/50",
        glow: "from-indigo-500 to-purple-500"
      },
      link: "https://www.facebook.com/nayeem.islam.290954",
      delay: 600
    },
    {
      id: 6,
      name: "Sohag Sohag Sohag",
      role: "Senior",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
      message: "তুই ভালো ছাত্র, এটা কেউ অস্বীকার করবে না — কিন্তু নেতামিটা একটু ছাড়তে পারলে পুরাই লেজেন্ড হতি রে!",
      position: "end",
      color: {
        bubble: "from-purple-500/20 to-violet-500/20",
        border: "border-purple-500/50",
        glow: "from-purple-500 to-violet-500"
      },
      link: "https://www.facebook.com/sohag.sohag.sohag.880620",
      delay: 700
    },
    {
      id: 7,
      name: "Sohan Islam Nayeem",
      role: "Dulavaiya",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      message: "শোনো, আগে মন দিয়ে পড়াশোনা করো। সারাক্ষণ এখানে-সেখানে ঘুরে সময় নষ্ট কোরো না। এখন শেখার সময়—এটা নষ্ট করলে পরে আফসোস হবে। আমি চাই তুমি জীবনে ভালো কিছু করো, নিজের একটা অবস্থান তৈরি করো। সফল হতে চাইলে পড়ালেখাটাকে সিরিয়াসলি নাও।",
      position: "start",
      color: {
        bubble: "from-green-500/20 to-emerald-500/20",
        border: "border-green-500/50",
        glow: "from-green-500 to-emerald-500"
      },
      link: "https://www.facebook.com/sohanislam95",
      delay: 800
    },
    {
      id: 8,
      name: "Afsana Mimi",
      role: "Boro Apu",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      message: "খালি প্রেম করিস... বই-পুস্তক মনে নেই একদম! মাথায় ঢোকে কিছু? 🙄 এইটা কয় নম্বর রে? তিন না চার? নাকি তুই নিজেই গুনতি ভুলে গেছিস! এইটাই আবার তোর 'রিয়েল লাভ'? 🤨 কিন্তু ভাইরে, একটু হলেও পড়াশোনার দিকে মন দে। তোর বড় বোন হিসেবে বকা দিই ঠিকই, কিন্তু চিন্তাও যে করি..❤️️",
      position: "end",
      color: {
        bubble: "from-orange-500/20 to-red-500/20",
        border: "border-orange-500/50",
        glow: "from-orange-500 to-red-500"
      },
      delay: 900
    },
    {
      id: 9,
      name: "Akash PK",
      role: "Purai Kharap",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
      message: "জীবনে সবচেয়ে কঠিন কাজগুলোর একটি হলো—সিদ্ধান্ত গ্রহণ। নার্সিং শুধু একটা পেশা নয়, এটা মানুষের সেবার সবচেয়ে পবিত্র মাধ্যম। হার্ডওয়ার্ক, ডেডিকেশন আর মন-প্রাণ দিয়ে ১০০% দিয়ে যা। ইনশাআল্লাহ, কষ্ট কখনো বৃথা যাবে না। লেগে থাক, থেমে যাস না! 🤍💉",
      position: "start",
      color: {
        bubble: "from-fuchsia-500/20 to-pink-500/20",
        border: "border-fuchsia-500/50",
        glow: "from-fuchsia-500 to-pink-500"
      },
      link: "https://www.facebook.com/atapk41/",
      time: "Oct 2024",
      delay: 1000
    },
    {
      id: 10,
      name: "ShaWon Hossain",
      role: "Dada",
      avatar: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/451286988_1738465066962140_6629423090224411968_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeECBGnD1r1JZ7Bk6XJV9RxHczKrpVvL04JzMqulW8vTggQbJ6xDB_bDlBtNmrjCcrob7Apz0G9zTGofZikNpXl-&_nc_ohc=B_1entiV-U0Q7kNvwFUDSSB&_nc_oc=AdnEd7NBZ5YAJEifIISoTiEe2rza26iX2Ps3FJTpznHr9KCmq7n7_etZh2o-nwRxdjg&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=-6ac4AOdUfOWqClb71lYhA&oh=00_AfXkulTPNlifm3AhwkyvIWHTbU2EA2BwE44c6CgIeLB7Iw&oe=68A0BD98",
      message: "বড় কিছু করে দেখাও, যাতে একদিন তোমার গল্পে মানুষ অনুপ্রেরণা খুঁজে পায়। পাশে আছি সবসময়—দোয়া রইলো।",
      position: "end",
      color: {
        bubble: "from-rose-500/20 to-pink-500/20",
        border: "border-rose-500/50",
        glow: "from-rose-500 to-pink-500"
      },
      link: "https://www.facebook.com/muhammadshawonhossain34",
      delay: 1100
    },
    {
      id: 11,
      name: "Azizul Islam Sagor",
      role: "কলা",
      avatar: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/518990889_4000370450181060_5038077370383234322_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGcQb291pRDmtxQV3CDeASs1mM3I1aYmCLWYzcjVpiYIvxsilCnBeIufQuujLYT1OkGp5dSP85jEy6YJnF0yZAN&_nc_ohc=I75jn-poWmoQ7kNvwHRcG82&_nc_oc=Adl-uiuqZDga2zwi7_cvL2LMbtHRgLX7Y0DJ9nCdkUxcmaEVeGdOVYMziZXtn6HyMhw&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=jLzi45d--J1k7aRMbc_DUw&oh=00_AfUiVEUmjnrvipZWhJGz1Iw18Cne0su5cEZZJpFyJl1MEw&oe=68A0B020",
      message: "কিরে ব্রাজিল! নেইমার তো খেলতেই পারেনা, মাঠে গিয়ে শুধু নাটক করে। আর মেসি একদম আলাদা লেভেলের খেলোয়াড়, বল পেলে সবাইকে অবাক করে দেয়।",
      position: "start",
      color: {
        bubble: "from-emerald-500/20 to-green-500/20",
        border: "border-emerald-500/50",
        glow: "from-emerald-500 to-green-500"
      },
      link: "https://www.facebook.com/azizul.islam.sagor.2024",
      delay: 1200
    },
    {
      id: 12,
      name: "Yâsh Ahâmêd Tãñzîd",
      role: "Black Mamba",
      avatar: "https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/526581238_1913881469446396_109985937924156946_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFz1xvGClPYt9c_i7xOdYrK-hYQX0cL-6H6FhBfRwv7oZxzQilIJouNFyv88w40WArHTYV4iO6mTXXrsVPPImD3&_nc_ohc=6jXPBog5CJkQ7kNvwHPpEaA&_nc_oc=AdkIstjoiM1n86t_2VQzNz6HVcc0bN4wyK0GKHIcUXqLOfbxVfzBlA1XgHZxJMpbPmY&_nc_zt=23&_nc_ht=scontent.fdac27-1.fna&_nc_gid=QrGr-e60A1GhnYqqjYhDsg&oh=00_AfUdsTo9-qGjySSUFrQMunIp-Fk7CaNLZLY4IpCDxB71vQ&oe=68A0C2C1",
      message: "Tor bandopi pakhi take Dilei hbi, Tor bandopi pakhi k vabi kobu onno meyk kois k",
      position: "end",
      color: {
        bubble: "from-cyan-500/20 to-blue-500/20",
        border: "border-cyan-500/50",
        glow: "from-cyan-500 to-blue-500"
      },
      link: "https://www.facebook.com/ostanzid.khan",
      delay: 1300
    },
    {
      id: 13,
      name: "Prabhas",
      role: "Tea Stall Friend",
      avatar: "https://i.pinimg.com/736x/db/e2/ce/dbe2ce9f590e79a09ceb5a4873c2dbd2.jpg",
      message: "প্রতিদিন সন্ধ্যায় আড্ডা না দিলে তো দিনই শেষ হতো না!",
      position: "start",
      color: {
        bubble: "from-lime-500/20 to-green-500/20",
        border: "border-lime-500/50",
        glow: "from-lime-500 to-green-500"
      },
      link: "https://www.facebook.com/ActorPrabhas",
      online: true,
      delay: 1400
    },
    {
      id: 14,
      name: "Ahnaf Tazwar",
      role: "Purai Shoitan",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
      message: "চাটামটা একটু কম মারিস ভাই—হিরোইজম দেখালেই প্রভাস হওয়া যায় না! 😆 প্রভাস কবে তোর ফ্রেন্ড হইলি শুনি? ভালো হয়ে যাইস, না হলে 'বাহুবলী ৩' তোর লাইফেই শুট করে দিবো! 🎬 \"Ja Ga🤞\"",
      position: "end",
      color: {
        bubble: "from-rose-500/20 to-red-500/20",
        border: "border-rose-500/50",
        glow: "from-rose-500 to-red-500"
      },
      link: "https://www.facebook.com/atapk41/",
      time: "4:30 PM",
      online: true,
      delay: 1500
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Chat Bubble Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400/60 to-purple-400/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Floating Speech Bubbles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className={`absolute opacity-10 animate-float-${i % 3}`}
            style={{
              left: `${5 + (i * 12)}%`,
              top: `${10 + ((i * 15) % 70)}%`,
              animationDelay: `${i * 0.8}s`
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
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent mb-6">
            "Voices That Shaped My Journey"
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mx-auto mb-8" />

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              "ভাইদের ভাই, এলাকার ভদ্র ছেলে! এক কথায় সবার আদরের! তাই আমাকে নিয়ে সবারই কিছু না কিছু মন্তব্য আছে, তার মাঝে কিছু্‌,,"
            </p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex ${testimonial.position === 'end' ? 'justify-end' : 'justify-start'} transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${testimonial.delay}ms` }}
              onMouseEnter={() => setHoveredChat(testimonial.id)}
              onMouseLeave={() => setHoveredChat(null)}
            >
              <div className={`flex items-start space-x-3 max-w-md lg:max-w-lg ${testimonial.position === 'end' ? 'flex-row-reverse space-x-reverse' : ''}`}>

                {/* Avatar */}
                <div className="flex-shrink-0 relative group">
                  {/* Glowing Ring Effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${testimonial.color.glow} rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500 ${hoveredChat === testimonial.id ? 'opacity-60 animate-pulse' : ''}`} />

                  {/* Online Status Ring */}
                  {testimonial.online && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
                  )}

                  {/* Avatar Image */}
                  <div className="relative">
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-700 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      />
                    </a>

                    {/* Online Indicator */}
                    {testimonial.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-gray-900 rounded-full animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Chat Content */}
                <div className={`flex flex-col ${testimonial.position === 'end' ? 'items-end' : 'items-start'}`}>

                  {/* Header */}
                  <div className={`flex items-center space-x-2 mb-2 ${testimonial.position === 'end' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <span className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </span>
                    <span className={`text-xs px-2 py-1 bg-gradient-to-r ${testimonial.color.glow} rounded-full text-white font-medium`}>
                      {testimonial.role}
                    </span>
                    {testimonial.time && (
                      <span className="text-xs text-gray-500">
                        {testimonial.time}
                      </span>
                    )}
                  </div>

                  {/* Chat Bubble */}
                  <div className="group relative">
                    {/* Glowing background effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${testimonial.color.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />

                    {/* Main Chat Bubble */}
                    <div className={`relative backdrop-blur-2xl bg-gradient-to-br ${testimonial.color.bubble} border ${testimonial.color.border} rounded-3xl px-6 py-4 shadow-2xl transform transition-all duration-500 group-hover:scale-105 ${
                      hoveredChat === testimonial.id ? 'shadow-2xl shadow-purple-500/25' : ''
                    }`}>

                      {/* Message Text */}
                      <p className="text-gray-200 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                        {testimonial.message}
                      </p>

                      {/* Chat Tail */}
                      <div className={`absolute top-6 ${testimonial.position === 'end' ? '-right-2' : '-left-2'}`}>
                        <div className={`w-4 h-4 bg-gradient-to-br ${testimonial.color.bubble} border-l ${testimonial.color.border} border-b transform rotate-45 ${testimonial.position === 'end' ? 'border-l-0 border-t' : ''}`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Particles for Hovered Chat */}
                {hoveredChat === testimonial.id && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${testimonial.color.glow} rounded-full animate-ping`}
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${20 + ((i * 20) % 60)}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '1.5s'
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
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white">💬</span>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              "সবার মতামত তো আর এক লেখায় শেষ করা যাবে না! তবুও কিছু কথা চুপি চুপি শেয়ার করলাম। আসলে আপনাদের জানিয়ে দিয়েও কোনো লাভ নেই—আপনারা তো আগেই অনেক কিছু জানেন! 😉"
            </p>
            <p className="text-cyan-400 font-semibold mt-4">
              ধন্যবাদ, এতক্ষণ মনোযোগ দিয়ে পড়ার জন্য!😊
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(10deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-12px) rotateY(8deg); }
        }

        .animate-float-0 {
          animation: float-0 4s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 5s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;