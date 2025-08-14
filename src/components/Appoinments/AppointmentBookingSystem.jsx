import React, { useState, useEffect } from 'react';

const AppointmentBookingSystem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [calendarView, setCalendarView] = useState(new Date());
  const [hoveredTimeSlot, setHoveredTimeSlot] = useState(null);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [patientInfo, setPatientInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [paymentStep, setPaymentStep] = useState('method');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Services Data
  const services = [
    {
      id: 1,
      name: "General Health Consultation",
      duration: "30 min",
      price: "৳500",
      description: "Comprehensive health assessment and consultation",
      icon: "🏥",
      gradient: "from-green-500/20 to-emerald-500/20",
      glowColor: "from-green-500 to-emerald-500",
      available: true
    },
    {
      id: 2,
      name: "Home Care Visit",
      duration: "60 min",
      price: "৳1,200",
      description: "Professional nursing care at your home",
      icon: "🏠",
      gradient: "from-blue-500/20 to-cyan-500/20",
      glowColor: "from-blue-500 to-cyan-500",
      available: true
    },
    {
      id: 3,
      name: "Health Education Session",
      duration: "45 min",
      price: "৳800",
      description: "Personalized health education and wellness guidance",
      icon: "📚",
      gradient: "from-purple-500/20 to-pink-500/20",
      glowColor: "from-purple-500 to-pink-500",
      available: true
    },
    {
      id: 4,
      name: "Elderly Care Consultation",
      duration: "45 min",
      price: "৳700",
      description: "Specialized care planning for elderly patients",
      icon: "👴",
      gradient: "from-orange-500/20 to-yellow-500/20",
      glowColor: "from-orange-500 to-yellow-500",
      available: true
    },
    {
      id: 5,
      name: "Post-Surgery Care",
      duration: "40 min",
      price: "৳900",
      description: "Professional post-operative care and monitoring",
      icon: "⚕️",
      gradient: "from-red-500/20 to-rose-500/20",
      glowColor: "from-red-500 to-rose-500",
      available: true
    },
    {
      id: 6,
      name: "Vaccination Service",
      duration: "20 min",
      price: "৳300",
      description: "Safe and professional vaccination administration",
      icon: "💉",
      gradient: "from-indigo-500/20 to-violet-500/20",
      glowColor: "from-indigo-500 to-violet-500",
      available: true
    }
  ];

  // Time Slots
  const timeSlots = [
    { time: "09:00", period: "AM", available: true },
    { time: "09:30", period: "AM", available: true },
    { time: "10:00", period: "AM", available: false },
    { time: "10:30", period: "AM", available: true },
    { time: "11:00", period: "AM", available: true },
    { time: "11:30", period: "AM", available: true },
    { time: "02:00", period: "PM", available: true },
    { time: "02:30", period: "PM", available: true },
    { time: "03:00", period: "PM", available: false },
    { time: "03:30", period: "PM", available: true },
    { time: "04:00", period: "PM", available: true },
    { time: "04:30", period: "PM", available: true },
    { time: "05:00", period: "PM", available: true },
    { time: "05:30", period: "PM", available: true }
  ];

  const steps = [
    { id: 1, title: "Select Service", icon: "🏥" },
    { id: 2, title: "Choose Date", icon: "📅" },
    { id: 3, title: "Pick Time", icon: "⏰" },
    { id: 4, title: "Confirm", icon: "✅" },
    { id: 5, title: "Success", icon: "🎉" }
  ];

  // Payment Methods
  const paymentMethods = [
    {
      id: 'bkash',
      name: 'bKash',
      icon: '📱',
      color: 'from-pink-500 to-red-500',
      description: 'Pay with bKash Mobile Banking'
    },
    {
      id: 'nagad',
      name: 'Nagad',
      icon: '💳',
      color: 'from-orange-500 to-yellow-500',
      description: 'Pay with Nagad Digital Payment'
    },
    {
      id: 'rocket',
      name: 'Rocket',
      icon: '🚀',
      color: 'from-purple-500 to-indigo-500',
      description: 'Pay with Dutch-Bangla Rocket'
    },
    {
      id: 'cash',
      name: 'Cash Payment',
      icon: '💵',
      color: 'from-green-500 to-emerald-500',
      description: 'Pay cash during appointment'
    }
  ];

  // Helper Functions
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      days.push({ date: currentDate, isCurrentMonth: true });
    }

    const totalCells = 42;
    const remainingCells = totalCells - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({ date: nextDate, isCurrentMonth: false });
    }

    return days;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isSelectedDate = (date) => {
    return selectedDate.toDateString() === date.toDateString();
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(calendarView);
    newDate.setMonth(calendarView.getMonth() + direction);
    setCalendarView(newDate);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentStep(2);
  };

  const handleDateSelect = (date) => {
    if (!isDateDisabled(date)) {
      setSelectedDate(date);
      setSelectedTimeSlot(null);
    }
  };

  const handleTimeSlotSelect = (timeSlot) => {
    if (timeSlot.available) {
      setSelectedTimeSlot(timeSlot);
      setCurrentStep(3);
    }
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePatientInfoChange = (field, value) => {
    setPatientInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookAppointment = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    if (method.id === 'cash') {
      setPaymentStep('success');
      setTimeout(() => {
        setCurrentStep(5);
        setIsBookingConfirmed(true);
        setShowPaymentModal(false);
      }, 2000);
    } else {
      setPaymentStep('processing');
      setTimeout(() => {
        setPaymentStep('success');
        setTimeout(() => {
          setCurrentStep(5);
          setIsBookingConfirmed(true);
          setShowPaymentModal(false);
        }, 2000);
      }, 3000);
    }
  };

  const resetBooking = () => {
    setCurrentStep(1);
    setSelectedService(null);
    setSelectedDate(new Date());
    setSelectedTimeSlot(null);
    setIsBookingConfirmed(false);
    setPatientInfo({
      fullName: '',
      phone: '',
      email: '',
      address: '',
      notes: ''
    });
    setShowPaymentModal(false);
    setSelectedPaymentMethod(null);
    setPaymentStep('method');
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating Medical Icons */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {i % 5 === 0 && <div className="text-2xl">📅</div>}
            {i % 5 === 1 && <div className="text-2xl">⏰</div>}
            {i % 5 === 2 && <div className="text-2xl">🏥</div>}
            {i % 5 === 3 && <div className="text-2xl">💊</div>}
            {i % 5 === 4 && <div className="text-2xl">⚕️</div>}
          </div>
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-60 animate-pulse" />
              <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Book Appointment
            </h2>
          </div>
          <div className="w-40 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Schedule your consultation with professional nursing care services
          </p>
        </div>

        {/* Progress Steps */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                  currentStep >= step.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-400 border border-white/20'
                }`}>
                  <span className="text-lg">{step.icon}</span>
                  {currentStep >= step.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping opacity-30" />
                  )}
                </div>
                <div className="ml-3 hidden md:block">
                  <div className={`text-sm font-semibold ${
                    currentStep >= step.id ? 'text-white' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden md:block w-16 h-0.5 mx-4 transition-all duration-500 ${
                    currentStep > step.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                      : 'bg-white/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Select Your Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`group relative cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                      selectedService?.id === service.id ? 'scale-105' : ''
                    }`}
                    onClick={() => handleServiceSelect(service)}
                  >
                    <div className={`absolute -inset-2 bg-gradient-to-r ${service.glowColor} rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 ${
                      selectedService?.id === service.id ? 'opacity-100' : ''
                    }`} />

                    <div className={`relative backdrop-blur-xl bg-gradient-to-br ${service.gradient} border border-white/20 rounded-2xl p-6 shadow-xl`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.glowColor} rounded-xl flex items-center justify-center shadow-lg`}>
                          <span className="text-2xl">{service.icon}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-sm text-gray-300">{service.duration}</div>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>

                      {service.available && (
                        <div className="mt-4 flex items-center text-green-400 text-sm">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                          Available
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date Selection */}
          {currentStep === 2 && (
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Choose Date</h3>
                <div className="text-gray-300">
                  Selected: <span className="text-cyan-400 font-semibold">{selectedService?.name}</span>
                </div>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <h4 className="text-xl font-semibold text-white">
                    {calendarView.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h4>

                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-gray-400 font-semibold py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {getDaysInMonth(calendarView).map((dayInfo, index) => (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(dayInfo.date)}
                      disabled={isDateDisabled(dayInfo.date)}
                      className={`aspect-square p-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        !dayInfo.isCurrentMonth
                          ? 'text-gray-600 cursor-default'
                          : isDateDisabled(dayInfo.date)
                          ? 'text-gray-600 cursor-not-allowed'
                          : isSelectedDate(dayInfo.date)
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-110'
                          : 'text-white hover:bg-white/20 hover:scale-105 border border-white/20'
                      }`}
                    >
                      {dayInfo.date.getDate()}
                    </button>
                  ))}
                </div>

                {selectedDate && (
                  <div className="mt-6 p-4 bg-cyan-500/20 backdrop-blur-sm rounded-2xl border border-cyan-500/30">
                    <div className="text-center">
                      <div className="text-cyan-400 font-semibold">Selected Date</div>
                      <div className="text-white text-lg">{formatDate(selectedDate)}</div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!selectedDate}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedDate
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Time Slot Selection */}
          {currentStep === 3 && (
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Select Time Slot</h3>
                <div className="text-gray-300 text-right">
                  <div>Service: <span className="text-cyan-400 font-semibold">{selectedService?.name}</span></div>
                  <div>Date: <span className="text-cyan-400 font-semibold">{selectedDate?.toDateString()}</span></div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">🌅</span>
                    Morning Slots
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {timeSlots.filter(slot => slot.period === 'AM').map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => handleTimeSlotSelect(slot)}
                        disabled={!slot.available}
                        className={`relative p-4 rounded-xl text-center font-semibold transition-all duration-300 ${
                          selectedTimeSlot === slot
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                            : slot.available
                            ? 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-105 border border-white/20'
                            : 'bg-gray-800/50 text-gray-600 cursor-not-allowed border border-gray-700'
                        }`}
                      >
                        <div className="text-lg">{slot.time}</div>
                        <div className="text-sm opacity-80">{slot.period}</div>
                        {!slot.available && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-0.5 bg-red-500 rotate-45 absolute" />
                            <div className="w-8 h-0.5 bg-red-500 -rotate-45 absolute" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-2xl">☀️</span>
                    Afternoon Slots
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {timeSlots.filter(slot => slot.period === 'PM').map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => handleTimeSlotSelect(slot)}
                        disabled={!slot.available}
                        className={`relative p-4 rounded-xl text-center font-semibold transition-all duration-300 ${
                          selectedTimeSlot === slot
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                            : slot.available
                            ? 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-105 border border-white/20'
                            : 'bg-gray-800/50 text-gray-600 cursor-not-allowed border border-gray-700'
                        }`}
                      >
                        <div className="text-lg">{slot.time}</div>
                        <div className="text-sm opacity-80">{slot.period}</div>
                        {!slot.available && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-0.5 bg-red-500 rotate-45 absolute" />
                            <div className="w-8 h-0.5 bg-red-500 -rotate-45 absolute" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!selectedTimeSlot}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedTimeSlot
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Confirm Your Appointment</h3>

              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-6 border border-cyan-500/30 mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Service:</span>
                      <span className="text-white font-semibold">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Date:</span>
                      <span className="text-white font-semibold">{formatDate(selectedDate)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Time:</span>
                      <span className="text-white font-semibold">{selectedTimeSlot?.time} {selectedTimeSlot?.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Duration:</span>
                      <span className="text-white font-semibold">{selectedService?.duration}</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Total Fee:</span>
                      <span className="text-2xl font-bold text-cyan-400">{selectedService?.price}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                    <span className="text-xl">👤</span>
                    Patient Information
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={patientInfo.fullName}
                        onChange={(e) => handlePatientInfoChange('fullName', e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={patientInfo.phone}
                        onChange={(e) => handlePatientInfoChange('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                        placeholder="+880 1xxx-xxxxxx"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={patientInfo.email}
                      onChange={(e) => handlePatientInfoChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-medium mb-2">Address</label>
                    <textarea
                      rows={3}
                      value={patientInfo.address}
                      onChange={(e) => handlePatientInfoChange('address', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Your complete address"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Special Notes (Optional)</label>
                    <textarea
                      rows={3}
                      value={patientInfo.notes}
                      onChange={(e) => handlePatientInfoChange('notes', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Any special requirements or health conditions to mention..."
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30 mb-8">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-5 h-5 bg-white/10 border border-white/20 rounded text-cyan-500 focus:ring-cyan-500 focus:ring-2"
                    />
                    <label htmlFor="terms" className="text-gray-300 text-sm leading-relaxed">
                      I agree to the <span className="text-cyan-400 cursor-pointer hover:underline">Terms & Conditions</span> and <span className="text-cyan-400 cursor-pointer hover:underline">Privacy Policy</span>. I understand the consultation fee is payable during the appointment.
                    </label>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Previous
                  </button>

                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-300">
                      📞 Call to Confirm
                    </button>
                    <button
                      onClick={handleBookAppointment}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
                    >
                      ✅ Book Appointment
                    </button>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="text-gray-400 text-sm mb-2">For immediate assistance, call us at:</div>
                  <div className="text-cyan-400 text-lg font-semibold">+880 1234-567890</div>
                  <div className="text-gray-400 text-sm mt-2">Available 24/7 for emergency consultations</div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Success Confirmation */}
          {currentStep === 5 && isBookingConfirmed && (
            <div className="p-8">
              <div className="max-w-2xl mx-auto text-center">
                <div className="mb-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-2xl opacity-60 animate-pulse" />
                    <div className="relative w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <span className="text-4xl">🎉</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Appointment Confirmed Successfully! 🎊
                </h3>

                <p className="text-xl text-gray-300 mb-8">
                  আপনার appointment সফলভাবে book হয়ে গেছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                </p>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-3xl p-6 border border-green-500/30 mb-8">
                  <h4 className="text-xl font-semibold text-white mb-6 flex items-center justify-center gap-2">
                    <span className="text-2xl">📋</span>
                    Booking Details
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Patient:</span>
                        <span className="text-white font-semibold">{patientInfo.fullName || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Phone:</span>
                        <span className="text-white font-semibold">{patientInfo.phone || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Service:</span>
                        <span className="text-white font-semibold">{selectedService?.name}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Date:</span>
                        <span className="text-white font-semibold">{selectedDate?.toDateString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Time:</span>
                        <span className="text-white font-semibold">{selectedTimeSlot?.time} {selectedTimeSlot?.period}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Fee:</span>
                        <span className="text-green-400 font-bold text-xl">{selectedService?.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-4 border border-cyan-500/30 mb-8">
                  <div className="text-cyan-400 text-sm mb-1">Booking ID</div>
                  <div className="text-white text-xl font-mono font-bold">
                    APT-{Date.now().toString().slice(-8)}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    Please save this ID for future reference
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetBooking}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
                  >
                    📅 Book Another Appointment
                  </button>

                  <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-300">
                    💾 Download Confirmation
                  </button>
                </div>

                <div className="mt-8">
                  <p className="text-gray-400 italic">
                    "স্বাস্থ্য সেবায় আমাদের বিশ্বাস করার জন্য ধন্যবাদ। আমরা আপনাকে সর্বোত্তম care প্রদান করার জন্য প্রতিশ্রুতিবদ্ধ।"
                  </p>
                  <div className="text-cyan-400 font-semibold mt-2">- Professional Nursing Care Team</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900/95 to-purple-900/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">

            {paymentStep === 'method' && (
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                  <span className="text-2xl">💳</span>
                  Select Payment Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                      onClick={() => handlePaymentMethodSelect(method)}
                    >
                      <div className={`absolute -inset-2 bg-gradient-to-r ${method.color} rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500`} />

                      <div className={`relative backdrop-blur-xl bg-gradient-to-br ${method.color}/20 border border-white/20 rounded-2xl p-6 shadow-xl`}>
                        <div className="flex items-center justify-center mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <span className="text-3xl">{method.icon}</span>
                          </div>
                        </div>

                        <h4 className="text-xl font-semibold text-white mb-2 text-center">{method.name}</h4>
                        <p className="text-gray-300 text-sm text-center leading-relaxed">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowPaymentModal(false)}
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {paymentStep === 'processing' && (
              <div className="p-8 text-center">
                <div className="mb-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-60 animate-pulse" />
                    <div className="relative w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto animate-spin">
                      <span className="text-3xl">💳</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Processing Payment...
                </h3>

                <p className="text-gray-300 mb-8">
                  আপনার payment process হচ্ছে। অনুগ্রহ করে অপেক্ষা করুন।
                </p>
              </div>
            )}

            {paymentStep === 'success' && (
              <div className="p-8 text-center">
                <div className="mb-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-2xl opacity-60 animate-pulse" />
                    <div className="relative w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <span className="text-3xl">✅</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Payment Successful! 🎉
                </h3>

                <p className="text-gray-300 mb-8">
                  আপনার payment সফল হয়েছে। আমরা এখন appointment confirm করছি।
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-60 animate-pulse" />
          <button className="relative w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0.2;
            }
            50% {
              transform: translateY(-15px) rotate(180deg);
              opacity: 0.6;
            }
          }

          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translate3d(0, 0, 0);
            }
            40%, 43% {
              transform: translate3d(0, -30px, 0);
            }
            70% {
              transform: translate3d(0, -15px, 0);
            }
            90% {
              transform: translate3d(0, -4px, 0);
            }
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          .animate-bounce {
            animation: bounce 1s infinite;
          }

          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          .animate-spin {
            animation: spin 1s linear infinite;
          }

          .animate-ping {
            animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          }

          input[type="checkbox"]:checked {
            background-color: rgb(6 182 212);
            border-color: rgb(6 182 212);
          }

          *::-webkit-scrollbar {
            width: 8px;
          }

          *::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }

          *::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, #06b6d4, #3b82f6);
            border-radius: 4px;
          }

          *::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(45deg, #0891b2, #2563eb);
          }
        `
      }} />
    </section>
  );
};

export default AppointmentBookingSystem;