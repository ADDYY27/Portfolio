import { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL } from "../data/content";

function NavLink({ num, label, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="flex items-baseline gap-1.5 text-sm tracking-wide text-[#c8c0b0] hover:text-[#f5f0e8] transition-colors duration-300"
    >
      <span className="text-[10px] text-[#7a7060]">{num}</span>
      <span className="relative overflow-hidden flex flex-col" style={{ height: "1.1em", lineHeight: "1.1em" }}>
        <span style={{ transform: hovered ? "translateY(-100%)" : "translateY(0)", transition: "transform 0.35s cubic-bezier(0.76, 0, 0.24, 1)" }}>
          {label}
        </span>
        <span className="absolute top-full text-[#f5f0e8]" style={{ transform: hovered ? "translateY(-100%)" : "translateY(0)", transition: "transform 0.35s cubic-bezier(0.76, 0, 0.24, 1)" }}>
          {label}
        </span>
      </span>
    </a>
  );
}

/* ── CV icon ── */
function CVIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="1" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M5 5h5M5 7.5h5M5 10h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M10 12l1.5 1.5L14 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── LinkedIn icon ── */
function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="13" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M4 6.5V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="4" cy="4.5" r="0.8" fill="currentColor"/>
      <path d="M7 11V8.5C7 7.4 7.9 6.5 9 6.5C10.1 6.5 11 7.4 11 8.5V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
      style={{
        background:     scrolled ? "rgba(15,14,11,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)"           : "none",
        borderBottom:   scrolled ? "1px solid rgba(255,255,255,0.04)" : "none",
        transition:     "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", letterSpacing: "0.06em" }}
        className="text-[#f5f0e8]"
      >
        {PERSONAL.initials}
      </a>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => <NavLink key={l.num} {...l} />)}
      </div>

      {/* Right side: CV + LinkedIn icons + Hire me */}
      <div className="flex items-center gap-4">

        {/* CV download icon */}
        <a
          href={PERSONAL.cv}
          download
          title="Download CV"
          className="text-[#7a7060] hover:text-[#c8b99a] transition-colors duration-300"
          style={{
            width: "34px", height: "34px",
            border: "1px solid #2a2820",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "#c8b99a";
            e.currentTarget.style.color = "#c8b99a";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "#2a2820";
            e.currentTarget.style.color = "#7a7060";
          }}
        >
          <CVIcon />
        </a>

        {/* LinkedIn icon */}
        <a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          style={{
            width: "34px", height: "34px",
            border: "1px solid #2a2820",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#7a7060",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "#c8b99a";
            e.currentTarget.style.color = "#c8b99a";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "#2a2820";
            e.currentTarget.style.color = "#7a7060";
          }}
        >
          <LinkedInIcon />
        </a>

        {/* Hire me CTA */}
        <a
          href={`mailto:${PERSONAL.email}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="hidden sm:block text-[11px] uppercase tracking-widest text-[#0f0e0b] bg-[#c8b99a] hover:bg-[#d4c8aa] px-4 py-2 rounded-full transition-colors duration-300"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}
