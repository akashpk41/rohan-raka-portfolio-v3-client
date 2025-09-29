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

const DeveloperProfile = () => {
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
    <div className=" inset-0 z-50 mt-14 overflow-y-auto bg-black/10 backdrop-blur-sm">
      <div className="flex items-center justify-center   py-2">
        <div
          className=" w-full max-w-md transform transition-all duration-300 scale-100 opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/90 to-gray-100/90 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-400/20 to-blue-500/20 rounded-full blur-2xl transform -translate-x-8 translate-y-8" />
            </div>

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
                <h2 className="text-5xl font-bold text-gray-800 mb-1">
                  Akash PK
                </h2>
                <div className="flex items-center justify-center gap-2 text-cyan-600 text-2xl font-semibold mb-2">
                  <FaCode className="animate-pulse" />
                  <span>MERN Stack Developer</span>
                </div>

                {/* Experience Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-lg font-medium text-gray-700">
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
                <p className="text-gray-500 text-base mb-3">Connect with me</p>
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
                        <Icon className="text-3xl" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
