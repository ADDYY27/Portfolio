import { useRef, useState } from "react";
import useInView from "../hooks/useInView";

export default function ProjectCard({ project, index, onOpenDetail }) {
  const ref     = useRef(null);
  const visible = useInView(ref);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (project.detailKey) onOpenDetail(project.detailKey);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${index * 140}ms, transform 0.7s ease ${index * 140}ms`,
        cursor: project.detailKey ? "pointer" : "default",
      }}
    >
      {/* ── Card visual ── */}
      <div
        className="w-full rounded-2xl mb-5 overflow-hidden"
        style={{
          aspectRatio: "4/3",
          position:    "relative",
          transition:  "transform 0.5s ease",
          transform:   hovered ? "scale(1.02)" : "scale(1)",
          background:  project.color,
        }}
      >
        {/* Real screenshot if available */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
          />
        ) : null}

        {/* Dark overlay on hover */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "rgba(10,9,7,0.55)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        />

        {/* "Read Case Study" label — appears on hover */}
        {project.detailKey && (
          <div
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: hovered
                ? "translate(-50%, -50%)"
                : "translate(-50%, calc(-50% + 10px))",
              opacity: hovered ? 1 : 0,
              transition: "all 0.35s ease",
              background: "rgba(15,14,11,0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "999px",
              padding: "10px 22px",
              whiteSpace: "nowrap",
              border: "1px solid rgba(200,185,154,0.3)",
            }}
          >
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c8b99a",
            }}>
              Read Case Study ↗
            </span>
          </div>
        )}

        {/* Arrow button (bottom-right) */}
        <div
          style={{
            position: "absolute", bottom: "16px", right: "16px",
            width: "36px", height: "36px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: hovered ? "scale(1.15) rotate(-45deg)" : "scale(1) rotate(0deg)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M6 1l5 5-5 5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── Text ── */}
      <p style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-[11px] uppercase tracking-[0.15em] text-[#7a7060] mb-1">
        {project.company}
      </p>
      <h3 style={{ fontFamily: "'Playfair Display', serif" }}
        className="text-xl text-[#f5f0e8] mb-2 font-normal">
        {project.title}
      </h3>
      <p style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-sm text-[#8a8070] leading-relaxed">
        {project.description}
      </p>

      {/* ── Tags ── */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {project.tags.map((t) => (
          <span key={t}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[10px] uppercase tracking-widest text-[#6a6050] border border-[#3a3528] px-2.5 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
