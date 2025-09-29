import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
  FaInfoCircle,
  FaHeart,
  FaCode,
  FaRocket,
  FaArrowDown,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import DeveloperProfile from "./DeveloperProfile";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const rohanSocialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61579133308737",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-600/20",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/8801403331656?text=Hello%20I%20am%20interested",
      color: "hover:text-green-500",
      bg: "hover:bg-green-500/20",
    },
    {
      icon: FaFacebookMessenger,
      href: "https://www.messenger.com/t/61579133308737",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/20",
    },
    {
      icon: FaGithub,
      href: "https://github.com/rohan-raka",
      color: "hover:text-gray-400",
      bg: "hover:bg-gray-400/20",
    },
  ];

  const akashSocialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/atapk41/",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/8801405700935?text=Hello%20I%20am%20interested",
      color: "text-green-500 hover:text-green-600",
    },
    {
      icon: FaFacebookMessenger,
      href: "https://m.me/atapk41",
      color: "text-blue-500 hover:text-blue-600",
    },
    {
      icon: FaGithub,
      href: "https://github.com/akashpk41",
      color: "text-gray-700 hover:text-gray-800",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/akashpk41",
      color: "text-blue-700 hover:text-blue-800",
    },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-bl from-gray-900 via-purple-900 to-gray-800  overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-purple-900/20 to-transparent" />
        </div>

        <div className="relative z-10 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Top Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Brand Section */}
                <div className="text-center md:text-left space-y-6">
                  <div>
                    <h3 className="text-xl text-white font-bold mb-2">
                      <span>&copy; 2025 </span>
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Rohan Raka
                      </span>{" "}
                      <span>— All rights Reserved</span>
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Professional Nurse & Healthcare Advocate
                      <br />
                      <span className="text-cyan-400">
                        Dedicated to better healthcare for all
                      </span>
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 text-base text-gray-300">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <MdLocationOn className="text-cyan-400 text-lg" />
                      <span>Pabna, Rajshahi Division, BD</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <MdPhone className="text-green-400 text-lg" />
                      <span>+880 1403-331656</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <BiWorld className="text-purple-400 text-lg" />
                      <span>Healthcare Professional</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="text-center hidden md:block space-y-6">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Quick Links
                  </h4>
                  <div className="space-y-3">
                    {["Home", "About", "Services", "Blog", "Contact"].map(
                      (link, index) => (
                        <div key={link}>
                          <a
                            href={`#${link.toLowerCase()}`}
                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-base block transform hover:translate-x-1"
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            {link}
                          </a>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Social & Newsletter */}
                <div className="text-center md:text-right space-y-6">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Stay Connected
                  </h4>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-end gap-3 ">
                    {rohanSocialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group w-12 h-12 p-3 backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl text-gray-300 ${social.color} ${social.bg} transition-all duration-300 transform hover:scale-110 shadow-lg  shadow-cyan-500/25`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <Icon className="text-lg animate-pulse" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8" />

              {/* Bottom Section */}
              <div className="flex flex-col  items-center justify-center gap-2">
                {/* Developer Credit */}
                <div className="flex flex-col items-center gap-0">
                  <p className=" text-xl md:text-4xl text-gray-300">
                    Developed by{" "}
                    <FaHeart className="text-red-600 inline animate-pulse mx-1" />{" "}

                    <button
                      onClick={openModal}
                      className="ml-1 cursor-pointer font-semibold text-cyan-400 hover:text-cyan-300 underline decoration-wavy hover:no-underline transition-all duration-300"
                    >
                      Akash PK
                    </button>
                  </p>


<div className="-mx-6 -mt-8 ">

<DeveloperProfile />


</div>


                </div>

                {/* Old Version */}
                <a
                  href="https://rohan-raka.github.io/my-portfolio/"
                  target="_blank"
                  className="group flex cursor-pointer items-center gap-2 px-4 my-5 py-2 backdrop-blur-xl  border border-white/20 rounded-xl  text-white bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-base">Visit Old Version 1.0</span>
                  <FaArrowDown className="group-hover:-translate-y-1 transition-transform" />
                </a>

                {/* Go to Top */}
                <button
                  onClick={scrollToTop}
                  className="group flex cursor-pointer items-center gap-2 px-4  py-2 backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-base">Go To Top</span>
                  <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Premium Developer Modal */}
      {isModalOpen && (
       <div className="fixed inset-0 z-[5000] overflow-y-auto bg-black/10 backdrop-blur-sm">
  <div className="flex items-center justify-center   py-2">
    <div
      className="relative w-full max-w-md transform transition-all duration-300 scale-100 opacity-100"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/90 to-gray-100/90 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-400/20 to-blue-500/20 rounded-full blur-2xl transform -translate-x-8 translate-y-8" />
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute cursor-pointer top-4 right-4 z-20 p-2 backdrop-blur-xl bg-black/10 hover:bg-black/20 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
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

              <div className="relative z-10 p-4   text-center">
                {/* Profile Section */}
                <div className="relative mb-6">
                  <div className="relative w-56 h-56 mx-auto mb-4">
                    <img
                      src="https://i.ibb.co.com/GhZWtVc/1740218980929.jpg"
                      alt="Akash PK"
                      className="w-full h-full rounded-full object-cover border-4 border-purple-600 shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-full " />

                    {/* Status Indicator */}
                    <div className="absolute bottom-2 right-8 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Name & Title */}
                  <h2 className="text-4xl font-bold text-gray-800 mb-1">
                    Akash PK
                  </h2>
                  <div className="flex items-center justify-center gap-2 text-cyan-600 text-lg font-semibold mb-2">
                    <FaCode className="animate-pulse" />
                    <span>MERN Stack Developer</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-base font-medium text-gray-700">
                    <FaRocket className="text-purple-500" />
                    <span>Since 2021</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4 space-y-3">
                  <p className="text-gray-600 text-base leading-relaxed">
                    Professional MERN stack developer building full-stack web
                    applications with
                    <span className="font-semibold text-gray-800">
                      {" "}
                      MongoDB, Express.js, React, and Node.js
                    </span>
                    .
                  </p>

                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl border border-purple-500/20">
                    <p className="text-purple-700 text-base font-medium flex items-center justify-center gap-2">
                      <FaRocket className=" text-purple-500 animate-pulse" />
                      Working towards launching a software startup — very soon,
                      InshaAllah.
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mb-6">
                  <p className="text-gray-500 text-xs mb-3">Connect with me</p>
                  <div className="flex justify-center gap-3">
                    {akashSocialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 backdrop-blur-xl bg-white/30 hover:bg-white/50 border border-white/30 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <Icon className="text-lg" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="w-full py-3 bg-gradient-to-r from-gray-500/20 to-gray-600/20 backdrop-blur-xl border border-gray-500/30 rounded-xl text-gray-700 font-semibold hover:from-gray-500 hover:to-gray-600 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
    </div>
  </div>
</div>

      )}

      {/* Custom Styles */}
      <style jsx>{`
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </>
  );
};

export default Footer;
