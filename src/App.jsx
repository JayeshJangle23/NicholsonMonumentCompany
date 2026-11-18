// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Check,
//   ChevronRight,
//   Clock3,
//   Gem,
//   HeartHandshake,
//   Mail,
//   MapPin,
//   Menu,
//   Phone,
//   Ruler,
//   Sparkles,
//   Star,
//   Upload,
//   X,
// } from "lucide-react";
// import Header from "./components/Header";
// import Logo from "./components/Logo";
// import { designItems, services } from "./data/content";

// gsap.registerPlugin(ScrollTrigger);


// export default function App() {
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem("nmc-theme") || "classic",
//   );
//   useEffect(() => {
//     document.documentElement.dataset.theme = theme;
//     localStorage.setItem("nmc-theme", theme);
//   }, [theme]);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils
//         .toArray(
//           ".section-heading, .cost-card, .question-panel, .answer-panel, .prepared, .design-card, .about-copy, .about-image-wrap, .services-block, .final-dates, .contact-heading, .contact-grid > *",
//         )
//         .forEach((el) => {
//           gsap.from(el, {
//             y: 32,
//             opacity: 0,
//             duration: 0.75,
//             ease: "power2.out",
//             scrollTrigger: { trigger: el, start: "top 88%", once: true },
//           });
//         });
//     });
//     return () => ctx.revert();
//   }, []);
//   return (
//     <div className="app-shell">
//       <Header theme={theme} setTheme={setTheme} />
//       <main>
//         <Hero />
//         <Information />
//         <Design />
//         <About />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }




import React,{ useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("nmc-theme") || "classic"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("nmc-theme", theme);
  }, [theme]);

  return (
    <AppRoutes
      theme={theme}
      setTheme={setTheme}
    />
  );
}
