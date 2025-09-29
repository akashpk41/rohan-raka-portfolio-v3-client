import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const SingleBlogPost = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll for related posts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % relatedPosts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("main-article");
      if (article) {
        const rect = article.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(
            100,
            ((window.innerHeight - rect.top) /
              (rect.height + window.innerHeight)) *
              100
          )
        );
        setReadingProgress(progress);
        setIsReading(progress > 10 && progress < 90);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainBlogPost = {
    id: 1,
    title: "নার্সিং পেশায় আধুনিক প্রযুক্তির ব্যবহার",
    excerpt:
      "আজকের যুগে নার্সিং পেশায় কিভাবে প্রযুক্তি আমাদের রোগী সেবাকে আরো উন্নত করে তুলছে তার বিস্তারিত আলোচনা।",
    category: "Nursing",
    author: "Rohan Raka",
    date: "১১ আগস্ট, ২০২৫",
    readTime: "৫ মিনিট",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Healthcare", "Technology", "Nursing"],
    likes: 142,
    comments: 23,
    views: 2847,
    shares: 45,
    content: `
      <p>আধুনিক যুগে স্বাস্থ্যসেবা ক্ষেত্রে প্রযুক্তির অগ্রগতি নার্সিং পেশায় এক বিপ্লবীয় পরিবর্তন এনেছে। একজন পেশাদার নার্স হিসেবে আমি প্রতিদিন দেখতে পাই কিভাবে আধুনিক প্রযুক্তি আমাদের কাজকে আরো সহজ, কার্যকর এবং নির্ভুল করে তুলেছে।</p>

      <h2>ইলেকট্রনিক হেলথ রেকর্ড (EHR) সিস্টেম</h2>
      <p>ইলেকট্রনিক হেলথ রেকর্ড সিস্টেম আমাদের রোগীর তথ্য সংরক্ষণ এবং পরিচালনায় এক নতুন মাত্রা এনেছে। এই সিস্টেমের মাধ্যমে আমরা:</p>
      <ul>
        <li>রোগীর সম্পূর্ণ চিকিৎসার ইতিহাস তাৎক্ষণিক পেতে পারি</li>
        <li>ওষুধের পার্শ্বপ্রতিক্রিয়া এবং এলার্জি সম্পর্কে সতর্ক হতে পারি</li>
        <li>চিকিৎসা টিমের সাথে সহজে তথ্য শেয়ার করতে পারি</li>
      </ul>

      <h2>স্মার্ট মনিটরিং সিস্টেম</h2>
      <p>আধুনিক মনিটরিং ডিভাইসগুলি রোগীর জীবনীশক্তির লক্ষণগুলি ২৪/৭ পর্যবেক্ষণ করে। এই সিস্টেমগুলি:</p>
      <ul>
        <li>রিয়েল-টাইমে রোগীর অবস্থার পরিবর্তন সনাক্ত করে</li>
        <li>জরুরি অবস্থায় তাৎক্ষণিক সতর্কবার্তা প্রদান করে</li>
        <li>ডেটা বিশ্লেষণের মাধ্যমে চিকিৎসা পরিকল্পনায় সহায়তা করে</li>
      </ul>

      <h2>টেলিহেলথ এবং দূরবর্তী পরিচর্যা</h2>
      <p>কোভিড-১৯ মহামারীর পর টেলিহেলথ সেবা আরো জনপ্রিয় হয়েছে। এই প্রযুক্তির মাধ্যমে আমরা:</p>
      <ul>
        <li>দূরবর্তী এলাকার রোগীদের সেবা প্রদান করতে পারি</li>
        <li>নিয়মিত ফলো-আপ এবং পরামর্শ দিতে পারি</li>
        <li>রোগীর ভ্রমণ খরচ এবং সময় সাশ্রয় করতে সহায়তা করি</li>
      </ul>

      <h2>কৃত্রিম বুদ্ধিমত্তা এবং মেশিন লার্নিং</h2>
      <p>AI এবং ML প্রযুক্তি নার্সিং পেশায় নিম্নলিখিত ক্ষেত্রে সহায়তা করছে:</p>
      <ul>
        <li>রোগ নির্ণয়ে সহায়তা প্রদান</li>
        <li>ওষুধের ডোজ নির্ধারণে নির্ভুলতা বৃদ্ধি</li>
        <li>রোগীর পূর্বাভাস এবং ঝুঁকি মূল্যায়ন</li>
      </ul>

      <h2>ভবিষ্যতের সম্ভাবনা</h2>
      <p>প্রযুক্তির অগ্রগতি নার্সিং পেশায় আরো অনেক সম্ভাবনার দ্বার খুলে দিয়েছে। রোবোটিক্স, ভার্চুয়াল রিয়েলিটি, এবং IoT ডিভাইসগুলি ভবিষ্যতে আমাদের কাজকে আরো উন্নত করবে।</p>

      <p>তবে মনে রাখতে হবে, প্রযুক্তি শুধুমাত্র একটি হাতিয়ার। আসল শক্তি হলো মানবিক স্পর্শ এবং যত্নশীল পরিচর্যা, যা কোনো প্রযুক্তিই প্রতিস্থাপন করতে পারে না।</p>
    `,
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Medical Emergency: প্রাথমিক চিকিৎসার গুরুত্ব",
      excerpt: "জরুরি অবস্থায় কিভাবে প্রাথমিক চিকিৎসা প্রদান করতে হয়...",
      category: "First Aid",
      image:
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
      readTime: "৭ মিনিট",
      views: 5923,
    },
    {
      id: 3,
      title: "স্বাস্থ্যকর জীবনযাত্রা: একজন নার্সের দৃষ্টিভঙ্গি",
      excerpt:
        "একজন পেশাদার নার্স হিসেবে স্বাস্থ্যকর জীবনযাত্রার জন্য আমার কিছু পরামর্শ...",
      category: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readTime: "৬ মিনিট",
      views: 32410,
    },
    {
      id: 4,
      title: "নার্সিং ক্যারিয়ার: সফলতার পথ",
      excerpt: "নার্সিং পেশায় কিভাবে একটি সফল ক্যারিয়ার গড়া যায়...",
      category: "Career",
      image:
        "https://plus.unsplash.com/premium_photo-1683134019752-70aa026fe3b0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      readTime: "৮ মিনিট",
      views: 1847,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-[4000]">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating Reading Indicator */}
      <div
        className={`fixed top-20 right-6 z-50 transition-all duration-500 ${
          isReading ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="px-4  py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-full">
          <span className="text-cyan-400 text-sm font-medium flex items-center gap-2">
            <svg
              className="w-4 h-4 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Reading...
          </span>
        </div>
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div
        className={`relative pt-24 pb-16 transform transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-base text-gray-400">
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link
                to="/blogs"
                className="hover:text-cyan-400 transition-colors"
              >
                Blogs
              </Link>
              <span>›</span>
              <span className="text-cyan-400 text-lg">
                {mainBlogPost.category}
              </span>
            </nav>
          </div>

          {/* Article Header */}
          <div className="text-center  mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-6">
              <span className="text-purple-400 text-lg font-medium">
                {mainBlogPost.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {mainBlogPost.title}
            </h1>

            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {mainBlogPost.excerpt}
            </p>
            {/* Author & Post Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8 text-center">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">R</span>
                </div>
                <div>
                  <p className="text-cyan-400 text-3xl font-semibold">
                    {mainBlogPost.author}
                  </p>
                  <p className="text-gray-300  text-base">Professional Nurse</p>
                </div>
              </div>

              {/* Post Details */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xl md:gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{mainBlogPost.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{mainBlogPost.readTime}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{mainBlogPost.views} views</span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-red-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="text-xl font-semibold">
                  {mainBlogPost.likes}
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="text-xl font-semibold">
                  {mainBlogPost.comments}
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                <span className="text-xl font-semibold">
                  {mainBlogPost.shares}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={mainBlogPost.image}
              alt={mainBlogPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="relative">
        <div className="max-w-4xl mx-auto px-2">
          <article
            id="main-article"
            className={`backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl transform transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {mainBlogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm hover:bg-cyan-500/30 transition-all duration-300 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div
              className="prose  prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: mainBlogPost.content }}
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#e5e7eb",
              }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Share This Post
                  </h3>
                  <p className="text-gray-300">Spread knowledge with others</p>
                </div>
                <div className="flex items-center gap-3">
                  {["facebook", "twitter", "linkedin", "whatsapp"].map(
                    (platform, index) => (
                      <button
                        key={platform}
                        className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center hover:from-cyan-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 transform hover:scale-110"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                        </svg>
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Related Posts Carousel */}
      <div
        className={`relative py-16 transform transition-all duration-1000 delay-500 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Read More Blogs
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto" />
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {relatedPosts.map((post, index) => (
                <div key={post.id} className="w-full flex-shrink-0 px-0">
                  <div className="backdrop-blur-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                    <div className="md:flex md:items-center">
                      <div className="md:w-1/2">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-4">
                          <span className="text-purple-400 text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight hover:text-cyan-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <button className="px-6 cursor-pointer py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-white hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-base">
                            Read
                          </button>
                          <div className="flex items-center gap-4 text-gray-300 text-sm">
                            <span>{post.readTime}</span>
                            <span>{post.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {relatedPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-gradient-to-r from-cyan-400 to-purple-400 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .prose h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #22d3ee;
          margin-top: 2rem;
          margin-bottom: 1rem;
          position: relative;
        }

        .prose h2:after {
          content: "";
          display: block;
          width: 50px;
          height: 3px;
          background: linear-gradient(to right, #22d3ee, #a855f7);
          margin-top: 0.5rem;
          border-radius: 2px;
        }

        .prose p {
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .prose ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }

        .prose li {
          margin-bottom: 0.75rem;
          position: relative;
        }

        .prose li:before {
          content: "▸";
          color: #22d3ee;
          font-weight: bold;
          position: absolute;
          left: -1.25rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        //    .prose > * {
        //      animation: fadeInUp 0.6s ease-out forwards;
        //    }

        .prose > *:nth-child(1) {
          animation-delay: 0.1s;
        }
        .prose > *:nth-child(2) {
          animation-delay: 0.2s;
        }
        .prose > *:nth-child(3) {
          animation-delay: 0.3s;
        }
        .prose > *:nth-child(4) {
          animation-delay: 0.4s;
        }
        .prose > *:nth-child(5) {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default SingleBlogPost;
