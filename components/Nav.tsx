// 'use client';
// // import { Button } from "./ui/moving-border";
// import React, { useEffect, useRef, useState } from "react";

// export default function Nav() {
//   const navRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setVisible(entry.isIntersecting),
//       { threshold: 0.3 }
//     );

//     if (navRef.current) observer.observe(navRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={navRef} className="mt-4">
//       <div
//         className={`flex justify-center gap-4 transition-all duration-1000 transform 
//         ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
//       >
//         {["About", "Projects", "Experience", "Skills", "Contact us"].map((label, idx) => (
//           // <Button
//           //   key={idx}
//           //   className="text-white text-2xl bg-transparent px-5 py-2 rounded-xl 
//           //     transition-all duration-300 transform 
//           //     hover:scale-105 
//           //     hover:border-white border border-transparent 
//           //     hover:shadow-[0_0_12px_rgba(255,255,255,0.7)]"
//           // >
//           //   {label}
//           // </Button>
//         ))}
//       </div>
//     </div>
//   );
// }
