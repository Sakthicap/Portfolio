'use client';
import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML', src: '/images/html.png' },
  { name: 'Tailwind CSS', src: '/images/tailwind.png' },
  { name: 'JavaScript', src: '/images/js.png' },
  { name: 'React.js', src: '/images/React.webp' },
  { name: 'Next.js', src: '/images/nextjs.png' },
  { name: 'TypeScript', src: '/images/ts.png' },
  { name: 'SQL', src: '/images/sql1.png' },
  { name: 'Node.js', src: '/images/node.png' },
  { name: 'Express.js', src: '/images/ex.png' },
  { name: 'GitHub', src: '/images/g.png' },
];

const Skill = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-transparent py-16 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="font-['Times_New_Roman'] text-white mb-10 text-center">
        <h1 className="font-bold text-4xl">Skills</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-white transition-transform duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_white] p-4 rounded-lg"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-20 h-20 object-contain mb-3"
            />
            <span className="text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

// import React from 'react';


// const skills = [
//   { name: 'HTML', src: '/images/html.png' },
//   { name: 'Tailwind CSS', src: '/images/tailwind.png' },
//   { name: 'JavaScript', src: '/images/js.png' },
//   { name: 'React.js', src: '/images/React.webp' },
//   { name: 'Next.js', src: '/images/nextjs.png' },
//   { name: 'TypeScript', src: '/images/ts.png' },
//   { name: 'SQL', src: '/images/sql1.png' },
//   { name: 'Node.js', src: '/images/node.png' },
//   { name: 'Express.js', src: '/images/ex.png' },
//   { name: 'GitHub', src: '/images/g.png' },
// ];

// const Skill = () => {
//   return (
//     <div className="bg-transparent py-16">
//       <div className="font-['Times_New_Roman'] text-white mb-10 text-center">
//         <h1 className="font-bold text-4xl">Skills</h1>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-8 max-w-6xl mx-auto">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center text-white transition-transform duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_white] p-4 rounded-lg"
//           >
//             <img
//               src={skill.src}
//               alt={skill.name}
//               className="w-20 h-20 object-contain mb-3"
//             />
//             <span className="text-lg">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skill;
