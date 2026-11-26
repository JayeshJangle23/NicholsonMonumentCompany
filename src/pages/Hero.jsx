import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ThreeMemorial from "../components/ThreeMemorial.jsx";
import { designItems } from "../data/content";
import heroImage from "../styles/image.png";
import "../styles/home.css";

gsap.registerPlugin(ScrollTrigger);

const portfolioFilters = [
  "All",
  "Traditional",
  "Personalized",
  "Companion",
  "Marker",
  "Religious",
  "Custom",
];

const process = [
  {
    number: "01",
    title: "A conversation",
    description:
      "We listen to your ideas, preferences, and the details that made your loved one unique.",
  },
  {
    number: "02",
    title: "A considered design",
    description:
      "Together, we choose the stone, shape, lettering, and artwork that feel right for your family.",
  },
  {
    number: "03",
    title: "Your approval",
    description:
      "You review a scaled drawing and approve every detail before any carving begins.",
  },
  {
    number: "04",
    title: "Made to endure",
    description:
      "Our team completes the memorial and coordinates its installation with care.",
  },
];

export default function Hero() {
  const homeRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredDesigns = useMemo(
    () =>
      designItems.filter(
        (item) => activeFilter === "All" || item.type === activeFilter,
      ),
    [activeFilter],
  );

  useEffect(() => {
    const root = homeRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.from(".hero-eyebrow, .hero-content h1, .hero-intro, .hero-actions", {
        opacity: 0,
        y: 22,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "all",
      });

      gsap.utils.toArray(".home-reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div className="home-page" ref={homeRef}>
      <section className="home-hero">
        <div className="hero-overlay" />
        <div className="hero-image-frame">
          <img
            src={heroImage}
            alt="A granite memorial in a peaceful garden at sunset"
            loading="eager"
          />
        </div>
        <span className="hero-image-note">A LASTING PLACE OF REMEMBRANCE</span>
        <div className="hero-content">
          <span className="hero-eyebrow">
            FAMILY-OWNED IN WESTERN OKLAHOMA · SINCE 1956
          </span>
          <h1>
            A life remembered.
            <br />
            <em>A legacy in stone.</em>
          </h1>
          <p className="hero-intro">
            Thoughtfully crafted memorials, made with the families and stories
            they represent.
          </p>
          <div className="hero-actions">
            <Link to="/design" className="home-primary-btn">
              EXPLORE MEMORIALS <span>↗</span>
            </Link>
            <a className="hero-story-link" href="#our-legacy">
              OUR FAMILY STORY <span>↓</span>
            </a>
          </div>
          <div className="hero-facts">
            <div>
              <strong>Since 1956</strong>
              <span>A family tradition</span>
            </div>
            <i />
            <div>
              <strong>Made personal</strong>
              <span>Designed with care</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom-note">
          <span>CLINTON · HOBART · HENNESSEY, OKLAHOMA</span>
        </div>
      </section>

      <section className="legacy-section" id="our-legacy">
        <div className="legacy-container">
          <div className="legacy-image">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85"
              alt="A family walking together outdoors"
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
              A family promise,
              <br />
              <em>kept for generations.</em>
            </h2>
            <div className="gold-divider" />
            <p>
              Since 1956, Nicholson Monument Company has stood beside families
              through some of life&apos;s most difficult moments.
            </p>
            <p>
              From our beginnings in western Oklahoma to the work we do today,
              our purpose remains the same: to make each memorial personal, and
              to make every family feel cared for.
            </p>
            <Link to="/about" className="text-link">
              THE NICHOLSON STORY <span>→</span>
            </Link>
            <div className="legacy-year">
              <strong>1956</strong>
              <span>Our family serving yours</span>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="home-portfolio">
        <div className="portfolio-heading home-reveal">
          <div>
            <span className="section-eyebrow">A GALLERY OF POSSIBILITIES</span>
            <h2>
              Made personal.
              <br />
              <em>Remembered for generations.</em>
            </h2>
          </div>
          <p>
            Begin with a form or style that speaks to you. Each design can be
            shaped around a life, a family, and a story worth remembering.
          </p>
        </div>

        <div className="portfolio-filters" aria-label="Filter memorial designs">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter
                  ? "portfolio-filter is-active"
                  : "portfolio-filter"
              }
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid" aria-live="polite">
          {filteredDesigns.map((item, index) => (
            <Link
              className={`portfolio-item portfolio-item--${index + 1}`}
              to="/design"
              key={item.title}
            >
              <div className="portfolio-image">
                <img src={item.image} alt={`${item.title} memorial`} loading="lazy" />
                <span className="portfolio-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="portfolio-view">VIEW DESIGN ↗</span>
              </div>
              <div className="portfolio-caption">
                <span>{item.type}</span>
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="portfolio-footer">
          <span>Every detail can be made your own.</span>
          <Link to="/design" className="text-link">
            VIEW THE FULL COLLECTION <span>→</span>
          </Link>
        </div>
      </section>

      <section className="craft-note">
        <div className="craft-note-inner home-reveal">
          <span className="section-eyebrow">CARE IN EVERY DETAIL</span>
          <p>
            “Every life tells a different story. Every memorial should, too.”
          </p>
          <span className="craft-note-signature">The Nicholson family</span>
        </div>
      </section>

      <section id="home-memorial-studio">
        <ThreeMemorial />
      </section>

      <section className="process-section">
        <div className="home-section-heading home-reveal">
          <span className="section-eyebrow">HERE FOR EVERY STEP</span>
          <h2>
            Thoughtful from
            <br />
            <em>the very beginning.</em>
          </h2>
          <p>
            We make the process clear and considered, giving your family time
            and space to make the decisions that matter.
          </p>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <article className="process-item home-reveal" key={item.number}>
              <span className="process-number">{item.number}</span>
              <div className="process-line">
                <span />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <p className="process-note home-reveal">
          Every monument requires customer approval of its art proof before
          carving begins.
        </p>
      </section>

      <section className="home-cta">
        <span className="section-eyebrow">WHEN YOU ARE READY, WE ARE HERE</span>
        <h2>
          Let us help you
          <br />
          <em>honor a life well lived.</em>
        </h2>
        <p>
          Speak with our family about creating a thoughtful, lasting tribute for
          yours.
        </p>
        <div className="cta-actions">
          <Link to="/contact" className="cta-primary">
            TALK WITH OUR FAMILY <span>→</span>
          </Link>
          <Link to="/design" className="cta-secondary">
            EXPLORE DESIGNS
          </Link>
        </div>
        <span className="cta-signature">
          Nicholson Monument Company · Serving families since 1956
        </span>
      </section>
    </div>
  );
}
