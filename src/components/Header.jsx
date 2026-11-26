import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // 1. Import NavLink
import {
  Menu,
  X,
  Home,
  Info,
  Images,
  Users,
  Mail,
} from "lucide-react";
import Logo from "./Logo";

const links = [
  { id: "home", path: "/", label: "Home", Icon: Home },
  { id: "information", path: "/information", label: "Information", Icon: Info },
  { id: "design", path: "/design", label: "Design", Icon: Images },
  { id: "about", path: "/about", label: "About", Icon: Users },
  { id: "contact", path: "/contact", label: "Contact", Icon: Mail },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <span>Our family serving yours since 1956</span>
        <div className="topbar-contact">
          <a href="tel:5803237513">(580) 323-7513</a>
          <a href="mailto:nicholsonmonument@sbcglobal.net">
            nicholsonmonument@sbcglobal.net
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav
            className={menuOpen ? "nav nav--open" : "nav"}
            aria-label="Main navigation"
          >
            {links.map(({ id, path, label, Icon }) => (
              <NavLink
                key={id}
                to={path}
                end={path === "/"}
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={16} />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="mobile-toggle"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
