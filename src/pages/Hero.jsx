import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ThreeMemorial from "../components/ThreeMemorial.jsx";
import "../styles/home.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Upright Monuments",
    description:
      "Traditional single and double monuments thoughtfully designed to honor a lifetime of memories.",
    image:
      'https://static.wixstatic.com/media/b243ab_7e78cb8a20fa47d087654f87b95d3232~mv2.gif/v1/fill/w_426,h_424,q_90,enc_avif,quality_auto/b243ab_7e78cb8a20fa47d087654f87b95d3232~mv2.gif',
    link: "/designs",
  },
  {
    number: "02",
    title: "Stone Markers",
    description:
      "Beautifully crafted granite markers that create a lasting place of remembrance.",
    image:
      'https://static.wixstatic.com/media/b243ab_14c68462839246d6a9072b9931f79f55~mv2.gif/v1/fit/w_504,h_360,q_90,enc_avif,quality_auto/b243ab_14c68462839246d6a9072b9931f79f55~mv2.gif',
    link: "/designs",
  },
  {
    number: "03",
    title: "Custom Etchings",
    description:
      "Personalized artwork, portraits, and meaningful details that tell an individual's story.",
    image:
      'https://static.wixstatic.com/media/b243ab_de2a727d3a2b48e99dcf6b48250cc2d8~mv2.gif/v1/fit/w_360,h_503,q_90,enc_avif,quality_auto/b243ab_de2a727d3a2b48e99dcf6b48250cc2d8~mv2.gif',
    link: "/designs",
  },
  {
    number: "04",
    title: "Cremation Memorials",
    description:
      "Thoughtful memorial options designed to preserve precious memories for generations.",
    image:
      'https://static.wixstatic.com/media/b243ab_f8a093d77f124b37b6fa1585a01cbfe0~mv2.gif/v1/fit/w_504,h_360,q_90,enc_avif,quality_auto/b243ab_f8a093d77f124b37b6fa1585a01cbfe0~mv2.gif',
    link: "/designs",
  },
  {
    number: "05",
    title: "Memorial Restoration",
    description:
      "Stone straightening, refurbishing, engraving, and restoration to preserve existing monuments.",
    image:
      'https://static.wixstatic.com/media/b243ab_2491b583c7b346c6a6eec543d3b66ec8~mv2.jpeg/v1/fit/w_1790,h_1164,q_90,enc_avif,quality_auto/b243ab_2491b583c7b346c6a6eec543d3b66ec8~mv2.jpeg',
    link: "/about",
  },
  {
    number: "06",
    title: "Memorial Accessories",
    description:
      "Personal touches including vases, benches, bronze plaques, and porcelain photo medallions.",
    image:
      'https://static.wixstatic.com/media/b243ab_e603afca42a54b969308121320f5e68e~mv2.jpeg/v1/fit/w_1790,h_1164,q_90,enc_avif,quality_auto/b243ab_e603afca42a54b969308121320f5e68e~mv2.jpeg',
    link: "/designs",
  },
];

const features = [
  {
    icon: "✧",
    title: "Since 1956",
    description:
      "A family tradition built on generations of experience, dedication, and service.",
  },
  {
    icon: "◇",
    title: "Personalized Designs",
    description:
      "Every memorial is thoughtfully designed to reflect a unique life and story.",
  },
  {
    icon: "✥",
    title: "Quality Craftsmanship",
    description:
      "Careful attention to granite selection, engraving, finishing, and every detail.",
  },
  {
    icon: "⌂",
    title: "Complete Guidance",
    description:
      "We guide families through design, artwork approval, production, and installation.",
  },
];

const process = [
  {
    number: "01",
    title: "Let's Talk",
    description:
      "Share your ideas, requirements, preferences, and budget with our team.",
  },
  {
    number: "02",
    title: "Choose Your Design",
    description:
      "Explore granite colors, monument styles, sizes, lettering, and artwork.",
  },
  {
    number: "03",
    title: "Approve Your Proof",
    description:
      "Review your scaled memorial drawing and approve all details before carving.",
  },
  {
    number: "04",
    title: "Craft & Installation",
    description:
      "Our craftsmen complete the memorial and coordinate its cemetery installation.",
  },
];

export default function Hero({ theme }) {
  const homeRef = useRef(null);

  useEffect(() => {
    const root = homeRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero animation
      // gsap.from(".hero-content > *", {
      //   opacity: 0,
      //   y: 35,
      //   duration: 1,
      //   stagger: 0.2,
      //   ease: "power3.out",
      // });

      const heroTimeline = gsap.timeline();

heroTimeline.fromTo(
  ".hero-eyebrow",
  {
    opacity: 0,
    y: 25,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  }
);

heroTimeline.fromTo(
  ".hero-content h1",
  {
    opacity: 0,
    y: 35,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  },
  "-=0.4"
);

heroTimeline.fromTo(
  ".hero-quote",
  {
    opacity: 0,
    y: 25,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  },
  "-=0.5"
);

heroTimeline.fromTo(
  ".home-primary-btn",
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    clearProps: "opacity,visibility",
  },
  "-=0.3"
);

      // Section headings
      gsap.utils.toArray(".home-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 45,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Legacy image reveal
      gsap.from(".legacy-image", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".legacy-section",
          start: "top 75%",
          once: true,
        },
      });

      // Service cards
      gsap.from(".service-card", {
        opacity: 0,
        y: 55,
        duration: 0.8,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 82%",
          once: true,
        },
      });

      // Feature cards
      gsap.from(".feature-card", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 85%",
          once: true,
        },
      });

      // Process timeline
      gsap.from(".process-item", {
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 85%",
          once: true,
        },
      });

      // Parallax image
      // gsap.to(".legacy-image img", {
      //   yPercent: 12,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".legacy-section",
      //     start: "top bottom",
      //     end: "bottom top",
      //     scrub: 1,
      //   },
      // });
    }, root);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="home-page" ref={homeRef}>
      {/* ==================================
          01. HERO
      ================================== */}

      <section className="home-hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-eyebrow">
            OUR FAMILY SERVING YOURS SINCE 1956
          </span>

          <h1>
            Honoring lives.
            <br />
            <span>Preserving memories.</span>
          </h1>

          <div className="hero-quote">
            <p>
              Wherever a beautiful soul has been,
              <br />
              there is a trail of beautiful memories.
            </p>
            <span>— Ronald Reagan</span>
          </div>

          <button
            className="home-primary-btn"
            onClick={() =>
              document.getElementById("our-legacy")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            DISCOVER OUR STORY <span>↗</span>
          </button>
        </div>

        <div className="hero-bottom-note">
          {/* <span>01 / 07</span> */}
          <span>CRAFTING MEMORIES WITH CARE</span>
        </div>
      </section>

      {/* ==================================
          02. LEGACY
      ================================== */}

      <section className="legacy-section" id="our-legacy">
        <div className="legacy-container">
          <div className="legacy-image">
            <img
              src="https://images.unsplash.com/photo-1603532543917-8ad5e65c763e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Traditional stone craftsmanship"
              loading="lazy"
            />
            <span className="legacy-image-caption">
              A FAMILY TRADITION SINCE 1956
            </span>
          </div>

          <div className="legacy-content home-reveal">
            <span className="section-eyebrow">
              ROOTED IN FAMILY. BUILT ON TRUST.
            </span>

            <h2>
              A Legacy of
              <br />
              <em>Love & Remembrance.</em>
            </h2>

            <div className="gold-divider" />

            <p>
              For generations, Nicholson Monument Company has helped
              families honor the lives of those they love.
            </p>

            <p>
              Established in 1956, our family-owned business combines
              traditional craftsmanship, thoughtful design, and personal
              attention to create meaningful memorials.
            </p>

            <p>
              Every life tells a different story. We believe every memorial
              should reflect that story with dignity, care, and lasting
              beauty.
            </p>

            <Link to="/about" className="text-link">
              DISCOVER OUR HISTORY <span>→</span>
            </Link>

            <div className="legacy-year">
              <strong>1956</strong>
              <span>Where our family story began</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================
          03. SERVICES
      ================================== */}

      <section className="services-section" id="home-services">
        <div className="home-section-heading home-reveal">
          <span className="section-eyebrow">WHAT WE CREATE</span>

          <h2>
            Memorials for Every
            <br />
            <em>Life & Legacy.</em>
          </h2>

          <p>
            Every individual is unique. Explore our memorial services
            and find a meaningful way to celebrate a life remembered.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <Link to={service.link} className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
                <span className="service-number">{service.number}</span>
                <span className="service-arrow">↗</span>
              </Link>

              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link to={service.link} className="service-link">
                  EXPLORE SERVICE <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="services-footer">
          <Link to="/about" className="outline-home-btn">
            VIEW ALL OUR SERVICES <span>↗</span>
          </Link>
        </div>
      </section>

      {/* ==================================
          04. WHY CHOOSE US
      ================================== */}

      <section className="features-section">
        <div className="features-heading home-reveal">
          <span className="section-eyebrow">THE NICHOLSON DIFFERENCE</span>

          <h2>
            Care in Every Detail.
            <br />
            <em>Meaning in Every Memorial.</em>
          </h2>

          <p>
            A memorial is more than stone. It is a lasting tribute to
            a life, a family, and memories that remain.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-icon">{feature.icon}</span>

              <span className="feature-index">
                0{index + 1}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ==================================
          05. INTERACTIVE MEMORIAL STUDIO
      ================================== */}

      <section id="home-memorial-studio">
        <ThreeMemorial theme={theme} />
      </section>

      {/* ==================================
          06. PROCESS
      ================================== */}

      <section className="process-section">
        <div className="home-section-heading home-reveal">
          <span className="section-eyebrow">A THOUGHTFUL JOURNEY</span>

          <h2>
            From Your Vision
            <br />
            <em>To a Lasting Tribute.</em>
          </h2>

          <p>
            We guide you through every step of creating a personalized
            memorial, with care and attention throughout the process.
          </p>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <article className="process-item" key={item.number}>
              <span className="process-number">{item.number}</span>

              <div className="process-line">
                <span />
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="process-note home-reveal">
          <span>✧</span>
          Every monument requires customer approval of its art proof
          before carving begins.
        </div>
      </section>

      {/* ==================================
          07. FINAL CTA
      ================================== */}

      <section className="home-cta">
        <div className="cta-decoration">✧</div>

        <span className="section-eyebrow">
          HERE WHEN YOU NEED US
        </span>

        <h2>
          Let Us Help You
          <br />
          <em>Create a Lasting Memory.</em>
        </h2>

        <p>
          Every story deserves to be remembered. Speak with our family
          about creating a meaningful tribute for yours.
        </p>

        <div className="cta-actions">
          <button className="cta-primary" onClick={scrollToContact}>
            TALK TO OUR TEAM <span>→</span>
          </button>

          <Link to="/designs" className="cta-secondary">
            EXPLORE DESIGNS
          </Link>
        </div>

        <span className="cta-signature">
          Nicholson Monument Company · Serving Families Since 1956
        </span>
      </section>
    </main>
  );
}
