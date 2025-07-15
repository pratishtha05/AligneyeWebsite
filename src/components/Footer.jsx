import React, { useState } from "react";
import logo from "../assets/aligneyeFinalLogo.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-10 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="hidden lg:block absolute inset-0 opacity-5 bg-gradient-to-br from-teal-500 via-transparent to-purple-600 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Top: Logo + Intro + CTA */}
        <div className="lg:flex lg:justify-between lg:items-start mb-10 gap-12">
          {/* Left: Logo + Intro + Socials */}
          <div className="text-center lg:text-left lg:w-1/2">
            <img
              src={logo}
              alt="Aligneye Logo"
              className="w-36 mx-auto lg:mx-0 mb-4"
            />
            <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
              Innovative wearable technology for perfect posture and pain-free
              living.
            </p>

            {/* Socials */}
            <div className="flex justify-center lg:justify-start mt-6 space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-neutral-800 p-2 rounded-full hover:bg-teal-600 transition"
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Community CTA */}
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <h3 className="text-lg font-semibold text-white mb-4 text-center lg:text-left">
              Join the AlignEye Community
            </h3>
            <p className="text-gray-400 mb-4 text-sm text-center lg:text-left">
              Be part of a growing movement. Get early access, tips, and
              community-only perks.
            </p>
            <form className="flex flex-col sm:flex-row items-center lg:items-start gap-3 lg:gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-auto flex-grow px-4 py-2 rounded-full bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-medium transition"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>

        {/* Main Links Section */}
        <div className="lg:hidden">
          {/* Mobile Collapsible Sections */}
          {["products", "company", "contact"].map((section) => (
            <div key={section} className="mb-6">
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex justify-between items-center text-white font-semibold text-lg mb-2"
              >
                {section === "products"
                  ? "Products"
                  : section === "company"
                  ? "Company"
                  : "Contact Us"}
                {openSection === section ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {openSection === section && (
                <ul className="text-gray-400 space-y-2 mt-2 text-sm">
                  {section === "products" && (
                    <li>
                      <a href="#" className="hover:text-white transition">
                        Posture Corrector Neckband
                      </a>
                    </li>
                  )}
                  {section === "company" && (
                    <>
                      <li>
                        <a href="#" className="hover:text-white transition">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition">
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition">
                          Blog
                        </a>
                      </li>
                    </>
                  )}
                  {section === "contact" && (
                    <>
                      <li className="flex items-center">
                        <Mail className="mr-2 text-teal-400" size={18} />
                        <a href="mailto:aligneye@gmail.com">
                          aligneye@gmail.com
                        </a>
                      </li>
                      <li className="flex items-center">
                        <Phone className="mr-2 text-teal-400" size={18} />
                        <a href="tel:+916207730209">+91 6207730209</a>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="mr-2 mt-1 text-teal-400" size={18} />
                        <span>Delhi NCR, India</span>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-12 border-t border-neutral-800 pt-10">
          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition flex items-center"
                >
                  Posture Corrector Neckband
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center">
                <Mail className="mr-2 text-teal-400" size={18} />
                <a href="mailto:aligneye@gmail.com">aligneye@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-teal-400" size={18} />
                <a href="tel:+916207730209">+91 6207730209</a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-teal-400" size={18} />
                <span>Delhi NCR, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} AlignEye Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Shipping
            </a>
            <a href="#" className="hover:text-white">
              Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
