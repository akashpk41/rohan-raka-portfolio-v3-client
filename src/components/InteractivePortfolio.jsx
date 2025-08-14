import React, { useState, useEffect } from "react";

const InteractivePortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const portfolioData = [
    {
      id: 1,
      title: "Patient Care Excellence",
      category: "clinical",
      description:
        "Comprehensive patient care during clinical rotations at Pabna Sadar Hospital, focusing on compassionate nursing care and medical procedures.",
      image:
        "https://i.ibb.co.com/v6gcB8rV/image-12.jpg",
      technologies: [
        "Patient Care",
        "Medical Assessment",
        "Medication Administration",
        "Documentation",
      ],
      achievements: [
        "95% Patient Satisfaction",
        "Zero Medical Errors",
        "Team Leadership",
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
      glowColor: "from-green-500 to-emerald-500",
      icon: "🏥",
      duration: "6 Months",
      role: "Student Nurse",
    },
    {
      id: 2,
      title: "Emergency Response Training",
      category: "training",
      description:
        "Advanced emergency response and first aid training program, including CPR certification and critical care procedures.",
      image:
        "https://images.unsplash.com/photo-1625258111307-3e929842d9b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["CPR", "First Aid", "Emergency Medicine", "Critical Care"],
      achievements: [
        "CPR Certified",
        "First Aid Expert",
        "Emergency Response Team",
      ],
      gradient: "from-red-500/20 to-rose-500/20",
      glowColor: "from-red-500 to-rose-500",
      icon: "🚑",
      duration: "3 Months",
      role: "Trainee",
    },
    {
      id: 3,
      title: "Community Health Program",
      category: "community",
      description:
        "Led community health awareness campaigns focusing on maternal health, vaccination drives, and health education in rural areas.",
      image:
        "https://images.unsplash.com/photo-1659353888357-75e5858a5bc5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: [
        "Health Education",
        "Community Outreach",
        "Vaccination",
        "Maternal Care",
      ],
      achievements: [
        "500+ People Reached",
        "Community Leader",
        "Health Advocate",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      glowColor: "from-blue-500 to-cyan-500",
      icon: "🤝",
      duration: "4 Months",
      role: "Health Educator",
    },
    {
      id: 4,
      title: "Medical Research Project",
      category: "research",
      description:
        "Conducted research on nursing intervention effectiveness in post-operative care, contributing to evidence-based nursing practices.",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      technologies: [
        "Research Methodology",
        "Data Analysis",
        "Evidence-Based Practice",
        "Academic Writing",
      ],
      achievements: [
        "Published Research",
        "Academic Excellence",
        "Innovation Award",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      glowColor: "from-purple-500 to-pink-500",
      icon: "🔬",
      duration: "8 Months",
      role: "Researcher",
    },
    {
      id: 5,
      title: "Digital Health Initiative",
      category: "technology",
      description:
        "Developed digital health solutions for patient monitoring and telemedicine consultations during COVID-19 pandemic.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      technologies: [
        "Telemedicine",
        "Digital Health",
        "Patient Monitoring",
        "Health Tech",
      ],
      achievements: ["Tech Innovation", "COVID-19 Response", "Digital Pioneer"],
      gradient: "from-indigo-500/20 to-violet-500/20",
      glowColor: "from-indigo-500 to-violet-500",
      icon: "💻",
      duration: "5 Months",
      role: "Digital Health Coordinator",
    },
    {
      id: 6,
      title: "Pediatric Nursing Specialization",
      category: "clinical",
      description:
        "Specialized pediatric nursing care including child development assessment, family education, and pediatric emergency procedures.",
      image:
        "https://images.unsplash.com/photo-1681505512385-8b9d567a56c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: [
        "Pediatric Care",
        "Child Development",
        "Family Education",
        "Pediatric Emergency",
      ],
      achievements: [
        "Pediatric Certification",
        "Child Care Expert",
        "Family Favorite",
      ],
      gradient: "from-yellow-500/20 to-orange-500/20",
      glowColor: "from-yellow-500 to-orange-500",
      icon: "👶",
      duration: "4 Months",
      role: "Pediatric Nurse",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: portfolioData.length },
    {
      id: "clinical",
      name: "Clinical Work",
      count: portfolioData.filter((p) => p.category === "clinical").length,
    },
    {
      id: "training",
      name: "Training",
      count: portfolioData.filter((p) => p.category === "training").length,
    },
    {
      id: "community",
      name: "Community",
      count: portfolioData.filter((p) => p.category === "community").length,
    },
    {
      id: "research",
      name: "Research",
      count: portfolioData.filter((p) => p.category === "research").length,
    },
    {
      id: "technology",
      name: "Technology",
      count: portfolioData.filter((p) => p.category === "technology").length,
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((project) => project.category === activeCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating Portfolio Icons */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            {i % 4 === 0 && <div className="text-2xl">🏥</div>}
            {i % 4 === 1 && <div className="text-2xl">🚑</div>}
            {i % 4 === 2 && <div className="text-2xl">🔬</div>}
            {i % 4 === 3 && <div className="text-2xl">💻</div>}
          </div>
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-60 animate-pulse" />
              <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Portfolio Showcase
            </h2>
          </div>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my journey in healthcare through interactive case studies,
            clinical experiences, and innovative projects
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-4 md:px-6 py-2 md:py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "backdrop-blur-xl bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.name}
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    activeCategory === category.id
                      ? "bg-white/20"
                      : "bg-purple-500/20"
                  }`}
                >
                  {category.count}
                </span>
              </span>
              {activeCategory !== category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transform transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* 3D Card Container */}
              <div className="relative perspective-1000">
                {/* Glowing Effect */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${project.glowColor} rounded-3xl blur-xl opacity-60 group-hover:opacity-70 transition-all duration-500 animate-pulse`}
                />

                {/* Main Card */}
                <div
                  className={`relative backdrop-blur-2xl bg-gradient-to-br ${project.gradient} border border-white/20 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-y-12 cursor-pointer`}
                  onClick={() => openProjectModal(project)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                      loading="lazy"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Project Icon */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${project.glowColor} rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
                      >
                        <span className="text-2xl filter drop-shadow-lg">
                          {project.icon}
                        </span>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${project.gradient.replace(
                          "/20",
                          "/80"
                        )} backdrop-blur-sm rounded-full text-white text-xs font-semibold uppercase tracking-wide`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* View Details Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                        <svg
                          className="w-6 h-6 text-white"
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
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Project Meta */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        {project.role}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 17L4.7 13.11l1.42-1.42L10.59 16l8.3-8.29 1.42 1.42L10.59 19z" />
                        </svg>
                        {project.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {project.description.substring(0, 120)}...
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-lg backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg backdrop-blur-sm">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-6 h-6 border-2 border-white rounded-full" />
                    <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full animate-ping" />
                  </div>
                </div>

                {/* Floating Particles for Hovered Project */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${project.glowColor} rounded-full animate-ping`}
                        style={{
                          left: `${10 + i * 12}%`,
                          top: `${10 + ((i * 20) % 80)}%`,
                          animationDelay: `${i * 0.15}s`,
                          animationDuration: "1.5s",
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

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[6000] flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeProjectModal}
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${selectedProject.glowColor} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-3xl filter drop-shadow-lg">
                      {selectedProject.icon}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${selectedProject.gradient.replace(
                      "/20",
                      "/80"
                    )} rounded-full text-white text-sm font-semibold uppercase tracking-wide`}
                  >
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-4 mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-400 mb-4">
                    <span>{selectedProject.role}</span>
                    <span>•</span>
                    <span>{selectedProject.duration}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-2 bg-gradient-to-r ${selectedProject.gradient} border border-white/20 text-white text-sm rounded-lg backdrop-blur-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${selectedProject.glowColor} rounded-full`}
                        />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.6;
          }
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
      `}</style>
    </section>
  );
};

export default InteractivePortfolio;
