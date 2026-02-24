import FadeIn from "./FadeIn";
import { PERSONAL, STATS } from "../data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between pt-28 pb-16 px-8"
    >
      {/* ── Status badge ── */}
      <FadeIn delay={80}>
        <div className="flex items-center gap-3">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#a8c49a] inline-block"
            style={{ animation: "pulse-dot 2s infinite" }}
          />
          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-xs uppercase tracking-[0.2em] text-[#7a7060]"
          >
            Open to opportunities · 2025
          </span>
        </div>
      </FadeIn>

      {/* ── Main headline ── */}
      <div className="flex-1 flex flex-col justify-center">
        <FadeIn delay={180}>
          <h1
            style={{
              fontFamily:    "'Playfair Display', serif",
              fontSize:      "clamp(52px, 8.5vw, 120px)",
              lineHeight:    "1.02",
              letterSpacing: "-0.01em",
              fontWeight:    400,
            }}
            className="text-[#f5f0e8]"
          >
            Adarsh Kumar
            <br />
            <span style={{ fontStyle: "italic", color: "#c8b99a" }}>Dubey</span>
          </h1>
        </FadeIn>

        <FadeIn delay={300} className="mt-6 max-w-md">
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[#8a8070] text-base leading-relaxed font-light"
          >
            {PERSONAL.heroDesc}
          </p>
        </FadeIn>

        {/* ── CTA buttons ── */}
        <FadeIn delay={420} className="mt-8 flex items-center gap-5 flex-wrap">
          <a
            href="#work"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-sm text-[#f5f0e8] border border-[#3a3528] hover:border-[#c8b99a] hover:text-[#c8b99a] px-6 py-3 rounded-full transition-all duration-300"
          >
            View projects
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-sm text-[#6a6050] hover:text-[#c8b99a] transition-colors duration-300"
          >
            GitHub ↗
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-sm text-[#6a6050] hover:text-[#c8b99a] transition-colors duration-300"
          >
            LinkedIn ↗
          </a>
        </FadeIn>
      </div>

      {/* ── Stats row ── */}
      <FadeIn delay={540} className="flex items-end justify-between flex-wrap gap-6">
        <div className="flex gap-10">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px" }}
                className="text-[#f5f0e8]"
              >
                {value}
              </p>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs text-[#6a6050] uppercase tracking-widest mt-0.5"
              >
                {label}
              </p>
            </div>
          ))}
        </div>
        <p
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-xs text-[#4a4538] uppercase tracking-widest"
        >
          Scroll ↓
        </p>
      </FadeIn>
    </section>
  );
}
