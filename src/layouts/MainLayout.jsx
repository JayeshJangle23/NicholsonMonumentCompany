
import React,{ useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../components/Header";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function MainLayout({ theme, setTheme }) {
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray(
          [
            ".section-heading",
            ".cost-card",
            ".question-panel",
            ".answer-panel",
            ".prepared",
            ".design-card",
            ".about-copy",
            ".about-image-wrap",
            ".services-block",
            ".final-dates",
            ".contact-heading",
            ".contact-grid > *",
          ].join(",")
        )
        .forEach((el) => {
          gsap.from(el, {
            y: 32,
            opacity: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          });
        });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Header
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        <Outlet context={{ theme, setTheme }}/>
      </main>

      <Footer />
    </div>
  );
}
