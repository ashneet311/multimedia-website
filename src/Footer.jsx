import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative">

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-[#2D2A88] to-[#D6249F] text-white py-12 px-4 sm:px-8">

        <div className="container mx-auto text-center">

          {/* Social Media Section */}
          <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
          <h3 className="text-4xl font-extrabold mb-6">STAY CONNECTED</h3>

          <div className="flex justify-center space-x-4 sm:space-x-6 mb-10">
            {[
              { icon: <FaFacebookF size={28} />, url: 'https://facebook.com', label: 'Facebook' },
              { icon: <FaInstagram size={28} />, url: 'https://instagram.com', label: 'Instagram' },
              { icon: <FaYoutube size={28} />, url: 'https://youtube.com', label: 'YouTube' },
              { icon: <FaLinkedinIn size={28} />, url: 'https://linkedin.com', label: 'LinkedIn' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="bg-white bg-opacity-20 p-4 rounded-full hover:bg-opacity-40 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Logo Section */}
          <div className="mb-6">
            <img src="/logo.png" alt="Brilliko Logo" className="mx-auto w-24" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-sm mb-4">
            {['Home', 'About', 'Students Works', 'Courses', 'Blog', 'Career', 'Contact'].map((link, idx) => (
              <a
                key={idx}
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-yellow-300 transition"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-300 mt-4">
            Copyright ©2024 Eventen. All Rights Reserved
          </p>
        </div>
      </footer>

      {/* Floating Call Button */}
      <div className="fixed bottom-4 left-4 bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 transition">
        <a href="tel:18005725501" className="text-white text-lg flex items-center">
          <FaPhoneAlt className="h-6 w-6" />
        </a>
      </div>

    </div>
  );
};

export default Footer;
