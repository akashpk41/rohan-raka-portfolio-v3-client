import React, { useState, useEffect } from 'react';

const InstituteSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const accordionData = [
    {
      id: 1,
      title: "১. এখানে পড়লে ভবিষ্যতে ক্যারিয়ার গড়ার সুযোগ কেমন?",
      content: "এই কলেজের স্নাতকরা দেশ-বিদেশের স্বনামধন্য হাসপাতাল ও স্বাস্থ্য প্রতিষ্ঠানে কাজ করার সুযোগ পাচ্ছেন। কলেজটির পড়াশোনার মান ও প্রশিক্ষণ আন্তর্জাতিক মানসম্পন্ন হওয়ায় শিক্ষার্থীরা বিদেশে নার্স হিসেবে চাকরি পাওয়ার জন্য প্রস্তুত হয়ে ওঠে। বিসিএস নার্সিং সহ অন্যান্য সরকারি ও বেসরকারি চাকরির ক্ষেত্রে এখানকার শিক্ষার্থীরা বরাবরই ভালো করছে।"
    },
    {
      id: 2,
      title: "২. এই কলেজে শিক্ষার পাশাপাশি আরও কী ধরনের সুযোগ-সুবিধা রয়েছে?",
      content: "পাবনা আইডিয়াল নার্সিং কলেজে রয়েছে আধুনিক শ্রেণিকক্ষ, ল্যাব, লাইব্রেরি, কম্পিউটার সুবিধা, এবং স্বাস্থ্যসম্মত আবাসন ব্যবস্থা। পাশাপাশি, শিক্ষার্থীদের মানসিক উন্নয়ন ও নেতৃত্ব গঠনের জন্য রয়েছে বিভিন্ন সহশিক্ষা কার্যক্রম, বিতর্ক ক্লাব, স্বাস্থ্য সচেতনতা ক্যাম্প এবং কমিউনিটি হেলথ প্রজেক্ট।"
    },
    {
      id: 3,
      title: "৩. কেনো পাবনা আইডিয়াল নার্সিং কলেজকে বেছে নেবো অন্যান্য কলেজের তুলনায়?",
      content: "পাবনা আইডিয়াল নার্সিং কলেজ শিক্ষার মান, ক্লিনিক্যাল প্রশিক্ষণ এবং দক্ষ শিক্ষকগণের দিক থেকে অনন্য। এখানে ছাত্রছাত্রীরা শুধু বইয়ের জ্ঞানই নয়, বাস্তবিক অভিজ্ঞতার মধ্য দিয়ে একজন পরিপূর্ণ নার্স হিসেবে গড়ে ওঠে। কলেজটি নিয়মিতভাবে হাসপাতালে ইন্টার্নশিপ, সেমিনার ও ওয়ার্কশপের ব্যবস্থা করে থাকে।"
    }
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section id="institute"  className="relative  py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Background Effects - Same as other sections */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(40)].map((_, i) => (
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

        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute opacity-20 animate-float-${i % 3}`}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + ((i * 10) % 60)}%`,
              animationDelay: `${i * 0.7}s`
            }}
          >
            {i % 3 === 0 && (
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg transform rotate-45" />
            )}
            {i % 3 === 1 && (
              <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full" />
            )}
            {i % 3 === 2 && (
              <div className="w-5 h-5 bg-gradient-to-br from-pink-400 to-purple-400 transform rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            )}
          </div>
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-60" />
              <div className="relative w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                  <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z" clipRule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              About My Institute
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Institute Banner */}
        <div className={`relative mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-0 md:p-12 shadow-2xl overflow-hidden">

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl" />

            <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* College Image */}
              <div className="relative cursor-pointer mb-8 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative">
                  <img
                    src="https://i.ibb.co.com/Nn1zbFg6/pabna-ideal.jpg"
                    alt="Pabna Ideal Nursing College"
                    className="w-full max-w-2xl rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500  "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
                </div>
              </div>

<div className='px-4 py-6 md:px-0 md:py-0' >

              {/* College Title */}
              <h1 className="text-2xl md:text-5xl font-black text-white mb-4 tracking-wide">
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  PABNA IDEAL NURSING COLLEGE
                </span>

              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl">
                Pabna Ideal Nursing College is one of the top nursing colleges in Bangladesh, known for its quality education, skilled faculty, and strong clinical training. With modern facilities and a focus on both academic excellence and hands-on experience, it prepares students to become confident, compassionate healthcare professionals ready to serve locally and globally.
              </p>

              {/* CTA Button */}
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0L15.22 6.75m5.94 2.28L18.88 15" />
                  </svg>
                </span>
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`transform  transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              আমি কেন পাবনা আইডিয়াল নার্সিং কলেজে পড়ি?
            </span>
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {accordionData.map((item, index) => (
              <div
                key={item.id}
                className={`relative group transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Glowing effect on hover */}
                <div className="absolute cursor-pointer -inset-1 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-60 transition-all duration-500" />

                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl shadow-xl overflow-hidden">

                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full cursor-pointer px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors pr-4">
                      {item.title}
                    </h3>
                    <div className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-300 ${activeAccordion === item.id ? 'rotate-180' : ''}`}>
                      <svg className="w-full h-full text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
                      <p className="text-white text-base md:text-lg leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(90deg); }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-30px) rotateX(180deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-20px) rotateY(180deg); }
        }

        .animate-float-0 {
          animation: float-0 4s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 5s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default InstituteSection;