import React, { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      id: 1,
      badge: "Nursing",
      title: "নার্সিংয়ে প্রতিশ্রুতি",
      description: "আমি একজন নিবেদিত নার্সিং শিক্ষার্থী। রোগীসেবা, ওষুধ প্রদান ও স্বাস্থ্য পরীক্ষা কাজে আমার হাতে-কলমে অভিজ্ঞতা রয়েছে এবং মানসম্পন্ন স্বাস্থ্যসেবা দিতে আমি প্রতিশ্রুতিবদ্ধ।",
      gradient: "from-violet-400/80 via-fuchsia-400/80 to-pink-400/80",
      bgGradient: "from-violet-500/10 to-fuchsia-500/10",
      icon: "🏥",
      delay: 100
    },
    {
      id: 2,
      badge: "First Aid",
      title: "জরুরি সেবায় দক্ষতা",
      description: "প্রাথমিক চিকিৎসা ও জরুরি সেবা প্রদানে আমি প্রশিক্ষিত। সংকটময় পরিস্থিতিতে তাৎক্ষণিক চিকিৎসা দিতে পারি, যেমন CPR, ক্ষত পরিষ্কার এবং জীবন রক্ষাকারী মৌলিক সহায়তা।",
      gradient: "from-orange-400/80 via-rose-400/80 to-red-400/80",
      bgGradient: "from-orange-500/10 to-rose-500/10",
      icon: "🚑",
      delay: 200
    },
    {
      id: 3,
      badge: "Medical Knowledge",
      title: "চিকিৎসা জ্ঞানে আত্মবিশ্বাস",
      description: "চিকিৎসাবিষয়ক জ্ঞান রয়েছে দৃঢ় ও সুসংগঠিত ভিত্তির উপর, যার মধ্যে অ্যানাটমি, ফিজিওলজি এবং ফার্মাকোলজির স্পষ্ট ধারণা অন্তর্ভুক্ত। এ জ্ঞান রোগীর অবস্থা বিশ্লেষণ ও যথাযথ চিকিৎসা প্রদানে সহায়তা করে।",
      gradient: "from-blue-400/80 via-sky-400/80 to-cyan-400/80",
      bgGradient: "from-blue-500/10 to-sky-500/10",
      icon: "🔬",
      delay: 300
    },
    {
      id: 4,
      badge: "Communication",
      title: "যোগাযোগ ও সহানুভূতি",
      description: "স্বাস্থ্যসেবার পরিবেশে রোগী, সহকর্মী ও বন্ধুদের সঙ্গে আন্তরিক ও কার্যকর সম্পর্ক বজায় রাখতে সক্ষম। সহজভাবে কথা বলা ও সহানুভূতিশীল আচরণের মাধ্যমে বিশ্বাস অর্জন করা যায়।",
      gradient: "from-green-400/80 via-teal-400/80 to-emerald-400/80",
      bgGradient: "from-green-500/10 to-teal-500/10",
      icon: "💬",
      delay: 400
    },
    {
      id: 5,
      badge: "Teamwork",
      title: "বিচক্ষণতা ও দ্রুত প্রতিক্রিয়া",
      description: "যুক্তিভিত্তিক চিন্তাশক্তিতে দক্ষতা রয়েছে, যা রোগীর অবস্থা বিশ্লেষণ, সঠিক সিদ্ধান্ত গ্রহণ এবং উপযুক্ত চিকিৎসা প্রদানে সহায়তা করে। পরিস্থিতি মূল্যায়ন করে দ্রুত ও কার্যকরভাবে প্রতিক্রিয়া জানাতে সক্ষম।",
      gradient: "from-pink-400/80 via-purple-400/80 to-indigo-400/80",
      bgGradient: "from-pink-500/10 to-purple-500/10",
      icon: "🤝",
      delay: 500
    },
    {
      id: 6,
      badge: "Time Management",
      title: "দায়িত্বে ভারসাম্য ও শৃঙ্খলা",
      description: "শিক্ষা, প্রশিক্ষণ ও ব্যক্তিগত জীবনে সময় ব্যবস্থাপনায় দক্ষ। প্রতিটি দায়িত্ব সময়মতো সম্পন্ন করতে কাজের অগ্রাধিকার নির্ধারণে পারদর্শী।",
      gradient: "from-yellow-400/80 via-orange-400/80 to-amber-400/80",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      icon: "⏰",
      delay: 600
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Unique Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/40 to-purple-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10 backdrop-blur-[0.5px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-lg opacity-60" />
              <div className="relative w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              My Technical Skills
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`group relative transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${skill.delay}ms` }}
              onMouseEnter={() => setHoveredCard(skill.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with 3D Effect */}
              <div className="relative">
                {/* Glowing border effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${skill.gradient} rounded-3xl blur-xl opacity-70 group-hover:opacity-60 transition-all duration-500  `} />

                {/* Main Card */}
                <div className={`cursor-pointer mt-4 relative backdrop-blur-2xl bg-gradient-to-br ${skill.bgGradient} border border-white/20 rounded-3xl p-8 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 ${hoveredCard === skill.id ? 'shadow-2xl shadow-purple-500/25' : ''}`}>

                  {/* Floating Icon */}
                  <div className="absolute -top-6 -right-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-500 shadow-lg`}>
                      <span className="text-3xl filter drop-shadow-lg">{skill.icon}</span>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${skill.gradient} rounded-full mb-4 shadow-lg`}>
                    <span className="text-white font-bold text-sm">{skill.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {skill.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-8 h-8 border-2 border-white rounded-full" />
                    <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full animate-ping" />
                  </div>
                </div>

                {/* Floating particles around hovered card */}
                {hoveredCard === skill.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping"
                        style={{
                          left: `${10 + (i * 10)}%`,
                          top: `${20 + ((i * 15) % 60)}%`,
                          animationDelay: `${i * 0.2}s`
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

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;