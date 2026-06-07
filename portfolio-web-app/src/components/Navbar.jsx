import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = ["Home", "About", "Education", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // This dynamically adds colors and active underlines to the current tab
  const getLinkStyle = ({ isActive }) => ({
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.82rem",
    color: isActive ? "#00f5a0" : "#a0aec0",
    textDecoration: "none",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    transition: "color 0.2s",
    padding: "4px 0",
    borderBottom: isActive ? "2px solid #00f5a0" : "2px solid transparent",
  });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,18,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,245,160,0.12)" : "none",
      transition: "all 0.3s ease", padding: "0 5vw",
      display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px",
    }}>
      <span style={{
        fontFamily: "'Orbitron', monospace", fontWeight: 900, fontSize: "1.35rem",
        background: "linear-gradient(135deg, #00f5a0, #00d2ff)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "2px",
      }}>GENIYASH</span>

      {/* Desktop Navigation Links */}
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }} className="nav-desktop">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <NavLink to={link === "Home" ? "/" : `/${link.toLowerCase()}`} style={getLinkStyle}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Icon */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile-btn" style={{ background: "none", border: "none", cursor: "pointer", color: "#00f5a0", fontSize: "1.5rem", display: "none" }}>
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <ul className="nav-mobile-menu" style={{ position: "fixed", top: "64px", left: 0, right: 0, background: "rgba(10,10,18,0.97)", backdropFilter: "blur(16px)", listStyle: "none", margin: 0, padding: "1.5rem 2rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem", borderBottom: "1px solid rgba(0,245,160,0.15)" }}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <NavLink to={link === "Home" ? "/" : `/${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={getLinkStyle}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}