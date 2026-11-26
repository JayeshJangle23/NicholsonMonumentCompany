import React from "react"
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <Logo compact />
        <div className="footer-quote">
          <strong>Our Family Serving Yours Since 1956</strong>
          <p>
            “Wherever a beautiful soul has been, there is a trail of beautiful
            memories.”
          </p>
          <small>— Ronald Reagan</small>
        </div>
        <div className="footer-links">
          <Link to="/information">Information</Link>
          <Link to="/design">Design galleries</Link>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <a href="tel:+15803237513">(580) 323-7513</a>
          <a href="mailto:nicholsonmonument@sbcglobal.net">Email our team</a>
          <span>Clinton · Hobart · Hennessey, OK</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Nicholson Monument Company. All rights
          reserved.
        </span>
        <span>Crafted with care. Remembered for generations.</span>
        <Link to="/">Back to top ↑</Link>
      </div>
    </footer>
  );
}