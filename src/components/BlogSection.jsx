import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const BlogSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const blogPosts = [
    {
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
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      id: 2,
      title: "Medical Emergency: প্রাথমিক চিকিৎসার গুরুত্ব",
      excerpt:
        "জরুরি অবস্থায় কিভাবে প্রাথমিক চিকিৎসা প্রদান করতে হয় এবং কেন এটি এত গুরুত্বপূর্ণ - সবকিছু জানুন।",
      category: "First Aid",
      author: "Rohan Raka",
      date: "১২ আগস্ট, ২০২৫",
      readTime: "৭ মিনিট",
      image:

        "https://images.unsplash.com/photo-1600091474842-83bb9c05a723?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Emergency", "First Aid", "Medical"],
      likes: 490,
      comments: 241,
      views: 5923,
      featured: false,
      gradient: "from-green-500 to-cyan-500",
      bgGradient: "from-green-500/10 to-cyan-500/10",
      borderColor: "border-green-500/30",
    },
    {
      id: 3,
      title: "স্বাস্থ্যকর জীবনযাত্রা: একজন নার্সের দৃষ্টিভঙ্গি",
      excerpt:
        "একজন পেশাদার নার্স হিসেবে স্বাস্থ্যকর জীবনযাত্রার জন্য আমার কিছু পরামর্শ এবং অভিজ্ঞতা।",
      category: "Healthcare",
      author: "Rohan Raka",
      date: "১৩ আগস্ট, ২০২৫",
      readTime: "৬ মিনিট",
      image:
        "https://images.unsplash.com/photo-1574706472779-9b257f717490?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Lifestyle", "Health", "Wellness"],
      likes: 15613,
      comments: 761,
      views: 32410,
      featured: false,
      gradient: "from-blue-500 to-teal-500",
      bgGradient: "from-blue-500/10 to-teal-500/10",
      borderColor: "border-blue-500/30",
    },
  ];

  const categories = [
    "All",
    "Nursing",
    "First Aid",
    "Healthcare",
    "Medical Knowledge",
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((blog) => blog.category === selectedCategory);

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden py-16">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Blog-themed particles */}
        <div className="absolute inset-0">
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Floating blog-themed shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`blog-shape-${i}`}
              className="absolute opacity-10 animate-pulse"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + ((i * 10) % 70)}%`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              {i % 4 === 0 && (
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg transform rotate-12" />
              )}
              {i % 4 === 1 && (
                <div className="w-6 h-8 bg-gradient-to-br from-green-400 to-cyan-400 rounded-sm" />
              )}
              {i % 4 === 2 && (
                <div className="w-10 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
              )}
              {i % 4 === 3 && (
                <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl transform rotate-45" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="relative z-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-400 font-medium flex items-center gap-2">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Knowledge Sharing
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">MY </span>
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                BLOGS
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-8" />

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              স্বাস্থ্যসেবা, নার্সিং এবং প্রাথমিক চিকিৎসা বিষয়ে আমার অভিজ্ঞতা
              এবং জ্ঞান শেয়ার করি।
              <br />
              <span className="text-cyan-400">
                আপনার স্বাস্থ্য সচেতনতা বৃদ্ধির জন্য।
              </span>
            </p>
          </div>

          {/* Category Filter */}
          <div
            className={`mb-12 transform transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                      : "backdrop-blur-xl bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-8 mb-16">
            {filteredBlogs.map((blog, index) => (
              <div
                key={blog.id}
                onMouseEnter={() => setHoveredBlog(blog.id)}
                onMouseLeave={() => setHoveredBlog(null)}
                className={`group transform transition-all duration-700 hover:scale-105 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                <article
                  className={`relative backdrop-blur-2xl bg-gradient-to-br ${blog.bgGradient} border ${blog.borderColor} rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500`}
                >
                  {/* Featured Badge */}
                  {blog.featured && (
                    <div className="absolute top-6 left-6 z-20">
                      <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg">
                        <span className="text-white font-bold text-sm flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                          Featured
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Mobile Layout */}
                  <div className="block md:hidden">
                    {/* Mobile Blog Image */}
                    <div className="relative overflow-hidden">
                      <div className="relative rounded-2xl h-48">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full rounded-2xl h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Category Badge on Image */}
                        <div className="absolute bottom-3 left-3">
                          <div
                            className={`px-3 py-1 bg-gradient-to-r ${blog.gradient} rounded-full backdrop-blur-sm`}
                          >
                            <span className="text-white font-semibold text-xs">
                              {blog.category}
                            </span>
                          </div>
                        </div>

                        {/* Stats Overlay - Mobile */}
                        <div className="absolute top-3 right-3 space-y-2">
                          <div className="flex items-center gap-1 px-2 py-1 backdrop-blur-xl bg-black/30 rounded-full">
                            <svg
                              className="w-5 h-5 text-red-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span className="text-white text-base font-medium">
                              {blog.likes}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 px-2 py-1 backdrop-blur-xl bg-black/30 rounded-full">
                            <svg
                              className="w-5 h-5 text-blue-400"
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
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                            <span className="text-white text-base font-medium">
                              {blog.views}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Content */}
                    <div className="p-4">
                      {/* Mobile Meta Info */}
                      <div className="space-y-2 mb-3">
                        {/* Author Row */}
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              R
                            </span>
                          </div>
                          <span className="text-gray-100 text-base font-medium">
                            {blog.author}
                          </span>
                        </div>

                        {/* Date and Time Row */}
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
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
                            <span>{blog.date}</span>
                          </div>

                          <div className="flex items-center gap-1">
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
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Title */}
                      <h2 className="text-2xl font-bold text-cyan-400 my-4 leading-tight group-hover:text-cyan-500 transition-colors duration-300">
                        {blog.title}
                      </h2>

                      {/* Mobile Excerpt */}
                      <p className="text-gray-300 text-base mb-4 leading-relaxed line-clamp-2">
                        {blog.excerpt}
                      </p>

                      {/* Mobile Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/5 border border-white/20 rounded-full text-sm text-cyan-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Mobile Footer */}
                      <div className="flex mt-4 items-center justify-between">
                        <button
                          onClick={() => navigate("/blog-post")}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                        >
                          Read More
                        </button>
                        <div className="flex items-center gap-3 text-gray-300 text-base">
                          <span className="flex items-center gap-1">
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
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            {blog.likes}
                          </span>
                          <span className="flex items-center gap-1">
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
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                            {blog.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex md:items-center">
                    {/* Desktop Blog Image */}
                    <div className="md:w-1/2 lg:w-2/5">
                      <div className="relative overflow-hidden">
                        <div className="relative  rounded-2xl h-64 lg:h-80">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full rounded-2xl h-full object-cover transition-transform duration-700 hover:rounded-3xl group-hover:scale-110"
                          />

                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          {/* Category Badge on Image */}
                          <div className="absolute bottom-4 left-4">
                            <div
                              className={`px-3 py-1 bg-gradient-to-r ${blog.gradient} rounded-full backdrop-blur-sm`}
                            >
                              <span className="text-white font-semibold text-sm">
                                {blog.category}
                              </span>
                            </div>
                          </div>

                          {/* Stats Overlay - Desktop */}
                          <div className="absolute top-4 right-4 space-y-2">
                            <div className="flex items-center gap-1 px-3 py-1 backdrop-blur-xl bg-black/30 rounded-full">
                              <svg
                                className="w-4 h-4 text-red-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                              <span className="text-white text-sm font-medium">
                                {blog.likes}
                              </span>
                            </div>

                            <div className="flex items-center gap-1 px-3 py-1 backdrop-blur-xl bg-black/30 rounded-full">
                              <svg
                                className="w-4 h-4 text-blue-400"
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
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                              <span className="text-white text-sm font-medium">
                                {blog.views}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Blog Content */}
                    <div className="md:w-1/2 lg:w-3/5 p-8">
                      {/* Desktop Meta Info */}
                      <div className="space-y-3 mb-4">
                        {/* Author Row */}
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              R
                            </span>
                          </div>
                          <span className="text-gray-300 text-base font-semibold">
                            {blog.author}
                          </span>
                        </div>

                        {/* Date and Time Row */}
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
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
                            <span>{blog.date}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
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
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Title */}
                      <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                        {blog.title}
                      </h2>

                      {/* Desktop Excerpt */}
                      <p className="text-gray-300 mb-6 leading-relaxed text-base lg:text-lg">
                        {blog.excerpt}
                      </p>

                      {/* Desktop Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {blog.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-xs text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Desktop Footer */}
                      <div className="flex items-center justify-between">
                        {/* Desktop Read More Button */}
                        <button onClick={() => navigate("/blog-post")}  className="group/btn cursor-pointer relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          <span className="relative flex items-center gap-2">
                            Read More
                            <svg
                              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        </button>

                        {/* Desktop Engagement Stats */}
                        <div className="flex items-center gap-4 text-gray-400">
                          <button className="flex cursor-pointer items-center gap-1 hover:text-red-400 transition-colors duration-300 group/like">
                            <svg
                              className="w-5 cursor-pointer h-5 group-hover/like:scale-110 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            <span className="text-base cursor-pointer">
                              {blog.likes}
                            </span>
                          </button>

                          <button className="flex cursor-pointer items-center gap-1 hover:text-blue-400 transition-colors duration-300 group/comment">
                            <svg
                              className="w-5 cursor-pointer h-5 group-hover/comment:scale-110 transition-transform"
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
                            <span className="text-base ">{blog.comments}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div
            className={`text-center transform transition-all duration-1000 delay-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl font-semibold text-white hover:from-cyan-500 hover:to-purple-500 hover:border-transparent transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 group-hover:animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Load More Blogs
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogSection;
