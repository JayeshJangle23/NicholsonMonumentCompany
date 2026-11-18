import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // 1. Import NavLink
import {
  Menu,
  X,
  ChevronDown,
  Palette,
  Home,
  Info,
  Images,
  Users,
  Mail,
  Check,
} from "lucide-react";
import Logo from "./Logo";
import { themes } from "../data/content";

const links = [
  { id: "home", path: "/", label: "Home", Icon: Home },
  { id: "information", path: "/information", label: "Information", Icon: Info },
  { id: "design", path: "/design", label: "Design", Icon: Images },
  { id: "about", path: "/about", label: "About", Icon: Users },
  { id: "contact", path: "/contact", label: "Contact", Icon: Mail },
];

export default function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <span>Our Family Serving Yours Since 1956</span>
        <i />{" "}
        <span>
          “Wherever a beautiful soul has been, there is a trail of beautiful
          memories.”
        </span>
        <b>— Ronald Reagan</b>
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
            {/* 3. Replace <a href={`#${id}`}> with <NavLink to={path}> */}
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
            <div className="theme-wrap">
              <button
                className="theme-trigger"
                onClick={() => setThemeOpen((v) => !v)}
                aria-expanded={themeOpen}
              >
                <Palette size={17} /> Theme <ChevronDown size={15} />
              </button>
              {themeOpen && (
                <div className="theme-menu">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      className={
                        theme === t.id
                          ? "theme-option is-active"
                          : "theme-option"
                      }
                      onClick={() => {
                        setTheme(t.id);
                        setThemeOpen(false);
                      }}
                    >
                      <span
                        className="theme-swatch"
                        style={{
                          background: t.colors[0],
                          borderColor: t.colors[1],
                        }}
                      />
                      {t.name}
                      {theme === t.id && <Check size={15} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
