import React, { useState } from "react";

const ContactForm = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div id="contact-section" className=" bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Floating shapes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute opacity-10 animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + ((i * 10) % 60)}%`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              {i % 3 === 0 && (
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-xl transform rotate-45" />
              )}
              {i % 3 === 1 && (
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full" />
              )}
              {i % 3 === 2 && (
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 transform rotate-12 rounded-lg" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header Section */}
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-400 text-2xl font-medium flex items-center gap-2">
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
                Let's Connect
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-white">GET IN </span>
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                TOUCH
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6" />

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I’m always open to new opportunities and exciting projects.
            </p>
          </div>

          <div className=" mx-auto md:w-1/2">
            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* Form Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Send Message
                  </h2>
                  <p className="text-gray-400 text-base ">
                    Drop me a message and I’ll get back to you shortly.
                  </p>
                </div>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-green-400 font-semibold">
                          Message Sent!
                        </p>
                        <p className="text-green-300 text-sm">
                          Thank you! I will get in touch with you soon.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form */}
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-white text-xl  font-medium flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Your Full Name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-cyan-400 focus:bg-white/10 focus:border-cyan-400/50 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-white text-xl  font-medium flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Your Email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-cyan-400 focus:bg-white/10 focus:border-cyan-400/50 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label className="text-white text-xl font-medium flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Enter The Subject"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-cyan-400 focus:bg-white/10 focus:border-cyan-400/50 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-white text-xl font-medium flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-cyan-400"
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
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here..."
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-cyan-400 focus:bg-white/10 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative text-xl flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
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
      `}</style>
    </div>
  );
};

export default ContactForm;
