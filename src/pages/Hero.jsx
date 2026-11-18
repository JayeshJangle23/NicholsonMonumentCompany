import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
function SectionEyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
      <span />
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 28,
        opacity: 0,
        duration: 1,
        stagger: 0.13,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.to(".hero-image", {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      if (
        video &&
        videoReady &&
        Number.isFinite(video.duration) &&
        video.duration > 0
      ) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=115%",
          pin: true,
          anticipatePin: 1,
          scrub: true,
          onUpdate: (self) => {
            if (
              videoReady &&
              Number.isFinite(video.duration) &&
              video.duration > 0
            ) {
              const target = self.progress * video.duration;
              if (Math.abs(video.currentTime - target) > 0.08)
                video.currentTime = target;
            }
          },
        });
      }
    }, section);
    return () => ctx.revert();
  }, [videoReady]);
  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero-media">
        <img
          className="hero-image"
          src="/images/memorial-story.jpg"
          alt="A peaceful memorial garden at sunset"
        />
        <video
          ref={videoRef}
          className={videoReady ? "hero-video hero-video--ready" : "hero-video"}
          muted
          playsInline
          preload="metadata"
          onLoadedMetadata={() => setVideoReady(true)}
          onError={() => setVideoError(true)}
        >
          <source src="/videos/memorial-story.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
      </div>
      <div className="hero-content">
        <SectionEyebrow>Nicholson Monument Company</SectionEyebrow>
        <p className="hero-kicker">Our Family Serving Yours Since 1956</p>
        <h1>
          Honoring lives.
          <br />
          <em>Preserving memories.</em>
        </h1>
        <blockquote>
          “Wherever a beautiful soul has been,
          <br className="desktop-only" /> there is a trail of beautiful
          memories.”<cite>— Ronald Reagan</cite>
        </blockquote>
        <a className="btn btn--gold" href="#information">
          Explore Our Services <ArrowRight size={17} />
        </a>
        <span className="hero-caption">
          {videoError
            ? "A story shaped by generations"
            : "Scroll to experience our story"}
        </span>
      </div>
      <div className="hero-scroll">
        <span />
        SCROLL TO EXPLORE
      </div>
      <div className="hero-stamp">
        <span>EST.</span>
        <strong>1956</strong>
        <small>WESTERN OKLAHOMA</small>
      </div>
    </section>
  );
}
