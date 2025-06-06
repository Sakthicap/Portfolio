'use client';
import React, { useRef } from 'react';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill'
import Contact from './Contact';

const Main = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden font-['Times_New_Roman']s">
      {/* ✅ Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/videos/galaxy.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ✅ Sticky Nav */}
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-black/30 py-4 font-['Times_New_Roman']">
        <div className="flex justify-center gap-4">
          {[
            { label: 'About', ref: aboutRef },
            { label: 'Projects', ref: projectRef },
            { label: 'Experience', ref: experienceRef },
            { label: 'Skills', ref: skillRef},
            { label: 'Contact', ref: contactRef },
          ].map(({ label, ref }, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(ref)}
              className="text-white text-xl bg-transparent px-5 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:border-white border border-transparent hover:shadow-[0_0_12px_rgba(255,255,255,0.7)]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Page Content */}
      <div className="relative z-10 px-4">
        <div ref={aboutRef} className="py-16">
          <About />
        </div>
        <div ref={projectRef} className="py-16">
          <Project />
        </div>
        <div ref={experienceRef} className="py-16">
          <Experience />
        </div>
        <div ref={skillRef} className="py-16">
          <Skill />
        </div>
        <div ref={contactRef} className="py-16">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;

// 'use client';
// import React, { useState } from 'react';
// import About from './About';
// import Experience from './Experience';
// import Project from './Project';

// const Main = () => {
//   const [activeSection, setActiveSection] = useState<null | 'About' | 'Projects' | 'Experience' | 'Contact'>(null);

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'About':
//         return <About />;
//       case 'Projects':
//         return <Project />;
//       case 'Experience':
//         return <Experience />;
//       case 'Contact':
//         return (
//           <div className="text-white text-3xl font-bold mt-20 text-center">
//             Contact Section Coming Soon
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* ✅ Background Video */}
//       <video
//         className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
//         src="/videos/galaxy.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* ✅ Nav Buttons */}
//       <div className="z-10 mt-8 mb-8 flex justify-center gap-4">
//         {['About', 'Projects', 'Experience', 'Contact'].map((label) => (
//           <button
//             key={label}
//             onClick={() => setActiveSection(label as typeof activeSection)}
//             className={`text-white text-2xl bg-transparent px-5 py-2 rounded-xl transition-all duration-300 transform
//               hover:scale-105 hover:border-white border
//               ${activeSection === label ? 'border-white shadow-[0_0_15px_white]' : 'border-transparent'}
//               hover:shadow-[0_0_12px_rgba(255,255,255,0.7)]`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* ✅ Page Section */}
//       {activeSection && (
//         <div className="relative z-10 px-4 mt-10 transition-all duration-1000 transform animate-fade-in-up">
//           {renderSection()}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Main;

// 'use client';
// import React, { useState } from 'react';
// import About from './About';
// import Experience from './Experience';
// import Project from './Project';

// const Main = () => {
//   const [activeSection, setActiveSection] = useState<'About' | 'Projects' | 'Experience' | 'Contact'>('About');

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'About':
//         return <About />;
//       case 'Projects':
//         return <Project />;
//       case 'Experience':
//         return <Experience />;
//       case 'Contact':
//         return (
//           <div className="text-white text-3xl font-bold mt-20 text-center">
//             Contact Section Coming Soon
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* ✅ Background Video */}
//       <video
//         className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
//         src="/videos/galaxy.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* ✅ Nav Buttons */}
//       <div className="z-10 relative mt-8 flex justify-center gap-4 transition-all duration-1000 transform">
//         {['About', 'Projects', 'Experience', 'Contact'].map((label) => (
//           <button
//             key={label}
//             onClick={() => setActiveSection(label as typeof activeSection)}
//             className={`text-white text-2xl bg-transparent px-5 py-2 rounded-xl transition-all duration-300 transform
//               hover:scale-105 hover:border-white border
//               ${activeSection === label ? 'border-white shadow-[0_0_15px_white]' : 'border-transparent'}
//               hover:shadow-[0_0_12px_rgba(255,255,255,0.7)]`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* ✅ Page Section */}
//       <div className="relative z-10 px-4 mt-10 transition-all duration-1000 transform animate-fade-in-up">
//         {renderSection()}
//       </div>
//     </div>
//   );
// };

// export default Main;

// 'use client';
// import React, { useRef } from 'react';
// import About from './About';
// import Experience from './Experience';
// import Project from './Project';

// const Main = () => {
//   const aboutRef = useRef<HTMLDivElement>(null);
//   const experienceRef = useRef<HTMLDivElement>(null);
//   const projectRef = useRef<HTMLDivElement>(null);
//   const contactRef = useRef<HTMLDivElement>(null);

//   const handleScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* ✅ Background Video */}
//       <video
//         className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
//         src="/videos/galaxy.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* ✅ Nav Buttons */}
//       <div className="z-10 relative mt-4 flex justify-center gap-4 transition-all duration-1000 transform">
//         {[
//           { label: 'About', ref: aboutRef },
//           { label: 'Projects', ref: projectRef },
//           { label: 'Experience', ref: experienceRef },
//           { label: 'Contact', ref: contactRef },
//         ].map((item, index) => (
//           <button
//             key={index}
//             onClick={() => handleScroll(item.ref)}
//             className="text-white text-xl px-5 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:border-white border border-transparent hover:shadow-[0_0_12px_rgba(255,255,255,0.7)]"
//           >
//             {item.label}
//           </button>
//         ))}
//       </div>

//       {/* ✅ Page Sections */}
//       <div className="relative z-10 px-4">
//         <div ref={aboutRef}>
//           <About />
//         </div>
//         <div ref={experienceRef}>
//           <Experience />
//         </div>
//         <div ref={projectRef}>
//           <Project />
//         </div>
//         <div ref={contactRef}>
//           <div className="text-white text-3xl font-bold mt-20 text-center">Contact Section Coming Soon</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
