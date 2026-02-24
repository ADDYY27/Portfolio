import { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL } from "../data/content";

/* ── Single nav link with slide-up hover effect ── */
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

      {/* Two copies stacked — CSS slides them on hover */}
      <span
        className="relative overflow-hidden flex flex-col"
        style={{ height: "1.1em", lineHeight: "1.1em" }}
      >
        {/* Default (visible) */}
        <span
          style={{
            transform:  hovered ? "translateY(-100%)" : "translateY(0)",
            transition: "transform 0.35s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {label}
        </span>
        {/* Hover copy (slides up from below) */}
        <span
          className="absolute top-full text-[#f5f0e8]"
          style={{
            transform:  hovered ? "translateY(-100%)" : "translateY(0)",
            transition: "transform 0.35s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {label}
        </span>
      </span>
    </a>
  );
}

/* ── Navbar ── */
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

      {/* Links — hidden on small screens */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <NavLink key={l.num} {...l} />
        ))}
      </div>

      {/* Hire me CTA */}
      <a
        href={`mailto:${PERSONAL.email}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-[11px] uppercase tracking-widest text-[#0f0e0b] bg-[#c8b99a] hover:bg-[#d4c8aa] px-4 py-2 rounded-full transition-colors duration-300"
      >
        Hire me
      </a>
    </nav>
  );
}
