import React, { useState, useEffect } from 'react';

const PremiumInteractiveMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [mapView, setMapView] = useState('2D');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const locations = [
    {
      id: 1,
      name: "Pabna Ideal Nursing College",
      type: "College",
      category: "Education",
      address: "Hospital Road, Pabna Sadar, Pabna",
      coordinates: { lat: 24.02037, lng: 89.2445008 },
      description: "আমার অধ্যয়নরত কলেজ - উন্নত নার্সিং শিক্ষার জন্য বিখ্যাত",
      services: ["Nursing Education", "Clinical Training", "Health Sciences"],
      contact: "+880 1799-818188",
      established: "2008",
      students: "500+",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-2 0h-4m-2 0h-2" />
        </svg>
      ),
      featured: true
    },
    {
      id: 2,
      name: "Pabna General Hospital",
      type: "Hospital",
      category: "Healthcare",
      address: "Medical College Road, Pabna",
      coordinates: { lat: 24.0186, lng: 89.2397 },
      description: "পাবনার প্রধান সরকারি হাসপাতাল - সব ধরনের চিকিৎসা সেবা",
      services: ["Emergency Care", "Surgery", "ICU", "Maternity"],
      contact: "+880 731-64401",
      beds: "500+",
      departments: "25+",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-500/10 to-orange-500/10",
      borderColor: "border-red-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ),
      featured: false
    },
    {
      id: 3,
      name: "Ibn Sina Hospital Pabna",
      type: "Hospital",
      category: "Healthcare",
      address: "Bharara Road, Pabna",
      coordinates: { lat: 24.0145, lng: 89.2456 },
      description: "আধুনিক বেসরকারি হাসপাতাল - উন্নত চিকিৎসা সেবা",
      services: ["Cardiology", "Neurology", "Orthopedics", "Diagnostics"],
      contact: "+880 731-66745",
      beds: "100+",
      departments: "15+",
      color: "from-green-500 to-cyan-500",
      bgColor: "from-green-500/10 to-cyan-500/10",
      borderColor: "border-green-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      featured: false
    },
    {
      id: 4,
      name: "Pabna Mental Hospital",
      type: "Specialized Hospital",
      category: "Mental Health",
      address: "Hemayetpur, Pabna",
      coordinates: { lat: 24.0089, lng: 89.2512 },
      description: "মানসিক স্বাস্থ্য বিশেষায়িত হাসপাতাল - জাতীয় পর্যায়ের সেবা",
      services: ["Psychiatry", "Psychology", "Counseling", "Rehabilitation"],
      contact: "+880 731-64201",
      beds: "800+",
      departments: "12+",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      featured: false
    },
    {
      id: 5,
      name: "Popular Diagnostic Center",
      type: "Diagnostic Center",
      category: "Diagnostics",
      address: "Town Hall Road, Pabna",
      coordinates: { lat: 24.0198, lng: 89.2423 },
      description: "আধুনিক ডায়াগনস্টিক সেবা - সকল ধরনের পরীক্ষা-নিরীক্ষা",
      services: ["Blood Test", "X-Ray", "CT Scan", "MRI", "Ultrasound"],
      contact: "+880 731-62345",
      tests: "200+",
      departments: "8+",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-500/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      featured: false
    }
  ];

  const serviceAreas = [
    { name: "Pabna Sadar", population: "250,000+", coverage: "Primary Healthcare" },
    { name: "Ishwardi", population: "180,000+", coverage: "Secondary Care" },
    { name: "Bera", population: "120,000+", coverage: "Basic Healthcare" },
    { name: "Atgharia", population: "95,000+", coverage: "Emergency Services" }
  ];

  const categories = ['All', 'College', 'Hospital', 'Specialized Hospital', 'Diagnostic Center'];

  const filteredLocations = activeCategory === 'All'
    ? locations
    : locations.filter(location => location.type === activeCategory);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const closeModal = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`map-shape-${i}`}
              className="absolute opacity-10 animate-float"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${15 + ((i * 10) % 70)}%`,
                animationDelay: `${i * 0.7}s`
              }}
            >
              {i % 4 === 0 && (
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-lg transform rotate-12" />
              )}
              {i % 4 === 1 && (
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full" />
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
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-400 font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Healthcare Mapping
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">INTERACTIVE </span>
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                MAP
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-8" />

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              পাবনা অঞ্চলের হাসপাতাল, ক্লিনিক এবং স্বাস্থ্যসেবা কেন্দ্রসমূহের ইন্টারেক্টিভ মানচিত্র।
              <br />
              <span className="text-cyan-400">আপনার কাছের চিকিৎসা সেবা খুঁজে নিন।</span>
            </p>
          </div>

          {/* Control Panel */}
          <div className={`mb-12 transform transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">

              {/* Category Filters */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filter Locations
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category, index) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4  cursor-pointer py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm ${
                        activeCategory === category
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                          : 'backdrop-blur-xl bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Map View Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <span className="text-white font-semibold">Map View:</span>
                  <div className="flex bg-gray-700 rounded-lg overflow-hidden">
                    {['2D', '3D'].map(view => (
                      <button
                        key={view}
                        onClick={() => setMapView(view)}
                        className={`px-4 cursor-pointer py-2 text-sm font-semibold transition-all duration-300 ${
                          mapView === view
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {view}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-gray-300 mt-10 md:mt-0 text-sm">
                  Showing {filteredLocations.length} locations
                </div>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className={`grid lg:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

            {/* Map Area */}
            <div className="lg:col-span-2">
              <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

                {/* Map Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Pabna Healthcare</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xl font-medium">Live Map</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Map */}
                <div className="relative h-96 lg:h-[600px] bg-gradient-to-br from-gray-800 to-gray-900">

                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29208.566564892635!2d89.22452079999999!3d24.019370000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84cad714942b%3A0xdb4a027622247b3d!2sPabna%20Ideal%20Nursing%20College!5e0!3m2!1sen!2sbd!4v1720784692002!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl opacity-90"
                  />

                  {/* Map Overlay with Markers */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="relative w-full h-full">
                      {filteredLocations.map((location, index) => (
                        <div
                          key={location.id}
                          className="absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                          style={{
                            left: `${20 + (index * 15) % 60}%`,
                            top: `${30 + (index * 12) % 40}%`
                          }}
                          onClick={() => handleLocationClick(location)}
                          onMouseEnter={() => setHoveredMarker(location.id)}
                          onMouseLeave={() => setHoveredMarker(null)}
                        >
                          {/* Marker */}
                          <div className={`w-10 h-10 bg-gradient-to-r ${location.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ${location.featured ? 'ring-4 ring-yellow-400/50' : ''}`}>
                            <div className="text-white">
                              {location.icon}
                            </div>
                          </div>

                          {/* Pulse Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${location.color} rounded-full opacity-30 animate-ping`} />

                          {/* Hover Tooltip */}
                          {hoveredMarker === location.id && (
                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-48 p-3 backdrop-blur-xl bg-black/80 border border-white/20 rounded-xl shadow-2xl">
                              <h4 className="text-white font-semibold text-sm mb-1">{location.name}</h4>
                              <p className="text-gray-300 text-xs">{location.type}</p>
                              <div className="mt-2 flex justify-between text-xs">
                                <span className="text-cyan-400">Click for details</span>
                                {location.featured && <span className="text-yellow-400">★ Featured</span>}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <button className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Location List Sidebar */}
            <div className="space-y-4">

              {/* Service Areas Summary */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl">
                <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Service Areas
                </h3>
                <div className="space-y-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="p-3 bg-white/5 border border-white/10 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-white font-semibold text-base">{area.name}</h4>
                        <span className="text-cyan-400 text-sm">{area.population}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{area.coverage}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Cards */}
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {filteredLocations.map((location, index) => (
                  <div
                    key={location.id}
                    onClick={() => handleLocationClick(location)}
                    className={`backdrop-blur-xl bg-gradient-to-br ${location.bgColor} border ${location.borderColor} rounded-2xl p-4 shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 group`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Featured Badge */}
                    {location.featured && (
                      <div className="flex items-center justify-between mb-8">
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm  font-bold text-white">
                          ★ Featured
                        </span>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${location.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {location.icon}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-xl mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                          {location.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">{location.type}</p>
                        <p className="text-gray-300 text-base leading-relaxed line-clamp-2">
                          {location.description}
                        </p>

                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-cyan-400 text-sm font-medium">
                            {location.services.length} Services
                          </span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className={`grid md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              {
                label: 'Total Locations',
                value: locations.length,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                ),
                color: 'from-blue-500 to-cyan-500'
              },
              {
                label: 'Hospitals',
                value: locations.filter(l => l.type.includes('Hospital')).length,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                ),
                color: 'from-red-500 to-pink-500'
              },
              {
                label: 'Service Areas',
                value: serviceAreas.length,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                color: 'from-green-500 to-emerald-500'
              },
              {
                label: 'Population Served',
                value: '645K+',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                color: 'from-purple-500 to-pink-500'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="backdrop-blur-xl cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl text-center group hover:bg-white/10 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Detail Modal */}
      {selectedLocation && (
      <div className="fixed inset-0 z-[7000] flex items-center justify-center p-4 md:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

          <div className={`relative max-w-2xl w-full max-h-[90vh] md:max-h-[85vh] backdrop-blur-2xl bg-gradient-to-br ${selectedLocation.bgColor} border ${selectedLocation.borderColor} rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 scale-100 my-4`}>

            {/* Modal Header */}
            <div className="relative p-6 md:p-8 border-b border-white/10">
              {selectedLocation.featured && (
                <div className="absolute mb-2 top-4 left-4">
                  <div className="px-3  py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                    <span className="text-white font-bold text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      Featured
                    </span>
                  </div>
                </div>
              )}

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-start gap-4 mt-8">
                <div className={`w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r ${selectedLocation.color} rounded-2xl flex items-center justify-center shrink-0`}>
                  <div className="text-white">
                    {selectedLocation.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl md:text-2xl font-bold text-white mb-2">{selectedLocation.name}</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 bg-gradient-to-r ${selectedLocation.color} rounded-full text-white text-xs font-semibold`}>
                      {selectedLocation.type}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-base md:text-base">{selectedLocation.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-6 md:p-8 space-y-6 max-h-[60vh] md:max-h-96 overflow-y-auto">

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-white text-xl font-bold flex items-center gap-2">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Contact Information
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-base">Address</p>
                        <p className="text-white text-sm font-medium">{selectedLocation.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-base">Phone</p>
                        <p className="text-white text-sm font-medium">{selectedLocation.contact}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Quick Stats
                  </h3>

                  <div className="space-y-3">
                    {selectedLocation.beds && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Beds</span>
                        <span className="text-white text-sm font-semibold">{selectedLocation.beds}</span>
                      </div>
                    )}
                    {selectedLocation.departments && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Departments</span>
                        <span className="text-white text-sm font-semibold">{selectedLocation.departments}</span>
                      </div>
                    )}
                    {selectedLocation.students && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Students</span>
                        <span className="text-white text-sm font-semibold">{selectedLocation.students}</span>
                      </div>
                    )}
                    {selectedLocation.established && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Established</span>
                        <span className="text-white text-sm font-semibold">{selectedLocation.established}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Services Available
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedLocation.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 py-4 md:pb-10">
                <button className="flex-1 group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    Get Directions
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </span>
                </button>

                <button className="flex-1 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl px-6 py-3 font-semibold text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span className="flex items-center justify-center gap-2">
                    Call Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
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

export default PremiumInteractiveMap;