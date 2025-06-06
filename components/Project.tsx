'use client';
import React, { useEffect, useRef, useState } from 'react';

const Project = () => {
  const refs = [useRef(null), useRef(null), useRef(null)];
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const observers = refs.map((ref, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          setVisible((prev) => {
            const updated = [...prev];
            updated[index] = entry.isIntersecting; // true on enter, false on exit
            return updated;
          });
        },
        { threshold: 0.3 }
      );
    });

    refs.forEach((ref, index) => {
      if (ref.current) observers[index].observe(ref.current);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const projectData = [
    {
      title: 'BillEase',
      description: 'Developed a web-based billing system allowing users to create, download, and manage invoices seamlessly. Integrated party and purchase data storage to streamline business transactions. Built an interactive dashboard with real-time monthly analytics using pie charts to track bill-to-purchase ratios for better financial insights.Planned and designed scalable architecture for future premium upgrades, enabling advanced features and enhanced performance for enterprise users.',
      className: 'one',
    },
    {
      title: 'Abacus Assignment Creator',
      description: 'Developed a web-based application for abacus teachers to create customized number sequence assignments.Enabled efficient generation of questions with corresponding answers for mental math practice.Designed an intuitive interface that simplifies the creation and management of assignments. Teachers can easily input sequences and preview both questions and automated solutions. Implemented logic to dynamically generate and display answers based on the input sequence. Enhanced accuracy and reduced manual effort in verifying student-facing content.',
      className: 'two',
    },
    {
      title: ' Resume Builder',
      description: ' Project allows users to easily create a professional resume. Variety of pre-designed templates to customize thelook of their resume. Implement a library like jsPDF to convert the generated resume into a PDF format',
      className: 'three',
    },
  ];

  return (
    <div className="p-8 flex flex-col gap-6 mt-[140px] font-['Times_New_Roman']">
      <h1 className='text-white font-bold text-4xl text-center'>Projects</h1>
      {projectData.map((project, index) => {
        const initialTransform = index === 2 ? 'translate-y-20' : 'translate-y-10';
        const finalTransform = 'translate-y-0';

        return (
          <div
            key={index}
            ref={refs[index]}
            className={`transition-all duration-[2000ms] transform
              ${visible[index] ? `opacity-100 ${finalTransform}` : `opacity-0 ${initialTransform}`}
              hover:scale-105 hover:border-white hover:shadow-[0_0_15px_white]
              shadow-lg p-6 rounded-xl border border-gray-300 bg-transparent
              cursor-pointer ${project.className}
            `}
          >
            <h1 className="text-2xl text-white font-bold mb-2">{project.title}</h1>
            <p className="text-white">{project.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
