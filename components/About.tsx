"use client";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slide-in-left {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }
      `}</style>

      <div
        ref={sectionRef}
        id="about"
        className="font-['Times_New_Roman'] ml-14 -mt-16 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-screen"
      >
        {/* Text */}
        <div
          className={`w-full lg:w-[600px] -mt-20 ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <h1 className="text-white font-bold text-5xl mt-2">Sakthivel J</h1>
          <h2 className="text-white font-semibold text-4xl mt-3">
            Web Developer
          </h2>
          <p className="text-white text-2xl mt-3 mb-6">
            Passionate Web Developer with 1 year of experience at Velam
            Innovation Pvt. Ltd (6-month internship + 6-month full-time).
            Proficient in building responsive web applications and scalable
            systems using modern frontend and backend tools.
          </p>
          <a
            href="/images/cv.pdf"
            download
            className="text-white text-2xl p-3 ml-[155px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 transition-all duration-300 border-[1px] border-white shadow-md hover:shadow-[0_0_12px_white]"
          >
            Download CV
          </a>
        </div>

        {/* Video */}
        <div
          className={`w-[700px] h-[500px] bg-transparent -mt-14 ${
            isVisible ? "animate-slide-in-right" : "opacity-0"
          }`}
        >
          <video
            className="w-full h-full object-contain rounded-xl bg-transparent"
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </>
  );
};

export default About;
