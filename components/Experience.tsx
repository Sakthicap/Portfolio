'use client';
import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
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
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 2s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 2s ease-out forwards;
        }
        .gradient-animated {
          background: linear-gradient(
            to right,
            #00aaa7,
            #7e42a7,
            #6600c5,
            #6070fd,
            #2a46ff,
            #0099ff,
            #008ead
          );
          background-size: 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: animate-gradient 2.5s linear infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="experience"
        className="px-6 py-20 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-screen"
      >
        {/* Text Section */}
        <div
          className={`w-full lg:w-[700px] text-white ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h1 className="text-4xl font-bold font-['Times_New_Roman'] mb-4 bg-gradient-animated ml-[480px]">
            Experience
          </h1>

          <div className="p-6 rounded-lg shadow-lg bg-black bg-opacity-40">
            <h2 className="text-2xl font-semibold">
              Web Developer – Velam Innovation Pvt. Ltd
            </h2>
            <p className="text-gray-400 mb-2">
              April 2024 – April 2025 (6-month Internship + 6-month Full-Time)
            </p>

            <ul className="list-disc list-inside text-lg leading-8">
              <li>
                Built and maintained responsive web applications using modern
                frontend and backend technologies.
              </li>
              <li>
                Improved user interfaces and implemented new features to enhance
                usability and performance.
              </li>
              <li>
                Collaborated with the development team to troubleshoot and resolve
                bugs efficiently.
              </li>
            </ul>
          </div>
        </div>

        {/* Video Section */}
        <div
          className={`w-[400px] h-[400px] ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0'
          }`}
        >
          <video
            className="w-full h-full object-contain rounded-xl shadow-lg"
            src="/videos/glob.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>
    </>
  );
};

export default Experience;
