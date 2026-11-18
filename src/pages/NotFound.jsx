import React from "react"
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="error-decoration error-decoration--top">
        N
      </div>

      <div className="error-container">

        {/* Decorative Icon */}
        {/* <div className="error-icon">
          <Compass size={32} strokeWidth={1} />
        </div> */}

        {/* Eyebrow */}
        {/* <div className="eyebrow error-eyebrow">
          <span />
          A LITTLE OFF THE PATH
          <span />
        </div> */}

        {/* Error Number */}
        <h1 className="error-number">404</h1>

        {/* Main Heading */}
        <h2>
          This page has <em>passed on.</em>
        </h2>

        <p className="error-description">
          Much like a forgotten path, this page seems to
          have disappeared. The address may be incorrect,
          or the page may have been moved.
        </p>

        {/* Divider */}
        <div className="error-divider">
          <span />
          <div />
          <span />
        </div>

        {/* Buttons */}
        <div className="error-actions">
          <Link to="/" className="btn btn--gold">
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <Link to="/contact" className="btn btn--outline">
            Contact Us
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Bottom Note */}
        <div className="error-bottom">
          <span className="error-bottom-line" />
          <p>
            NICHOLSON MONUMENT COMPANY
          </p>
          <span className="error-bottom-line" />
        </div>

      </div>

      {/* Background Decoration */}
      <div className="error-decoration error-decoration--bottom">
        N
      </div>
    </section>
  );
}