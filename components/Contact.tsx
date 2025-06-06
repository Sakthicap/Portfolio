'use client';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-transparent py-16 text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Contact Me</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 mb-12 text-lg text-white max-w-3xl mx-auto">
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-white" />
          <span>+91 7010178082</span>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-white" />
          <span>sakthiveljai99@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-white" />
          <span>Salem, Tamil Nadu</span>
        </div>
      </div>

      <div className="flex justify-center gap-6">
        {/* Social Icons */}
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full transition-all duration-300 border border-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-black"
        >
          <FaInstagram className="text-white group-hover:text-black text-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/sakthivel-j-abb274223/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full transition-all duration-300 border border-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-black"
        >
          <FaLinkedin className="text-white group-hover:text-black text-xl" />
        </a>
        <a
          href="https://github.com/Sakthicap"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full transition-all duration-300 border border-white hover:bg-gradient-to-r hover:from-gray-600 hover:to-black hover:text-black"
        >
          <FaGithub className="text-white group-hover:text-black text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
