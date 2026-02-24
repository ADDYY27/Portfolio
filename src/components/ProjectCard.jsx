import { useRef, useState } from "react";
import useInView from "../hooks/useInView";

export default function ProjectCard({ project, index, onOpenDetail }) {
  const ref     = useRef(null);
  const visible = useInView(ref);
  const [hovered, setHovered] = useState(false);

  const handleCardClick = () => {
    if (project.detailKey) onOpenDetail(project.detailKey);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardClick}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${index * 140}ms, transform 0.7s ease ${index * 140}ms`,
        cursor: project.detailKey ? "pointer" : "default",
      }}
    >
      {/* ── Coloured card visual ── */}
      <div
        className="w-full rounded-2xl mb-5 overflow-hidden flex items-end p-6"
        style={{
          background:  project.color,
          aspectRatio: "4/3",
          position:    "relative",
          transition:  "transform 0.5s ease",
          transform:   hovered ? "scale(1.02)" : "scale(1)",
        }}
      >
        {/* "Read case study" label — appears on hover if detailKey exists */}
        {project.detailKey && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: hovered ? "translate(-50%, -50%)" : "translate(-50%, calc(-50% + 8px))",
              opacity: hovered ? 1 : 0,
              transition: "all 0.35s ease",
              background: "rgba(15,14,11,0.75)",
              backdropFilter: "blur(8px)",
              borderRadius: "999px",
              padding: "10px 20px",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#f5f0e8" }}>
              Read Case Study
            </span>
          </div>
        )}

        {/* Arrow — external link if no detailKey, otherwise just decorative */}
        <a
          href={project.detailKey ? undefined : project.link}
          target={project.detailKey ? undefined : "_blank"}
          rel="noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            if (project.detailKey) { e.preventDefault(); onOpenDetail(project.detailKey); }
          }}
          className="w-10 h-10 rounded-full border border-black/10 bg-white/60 flex items-center justify-center ml-auto"
          style={{
            position:   "relative",
            zIndex:     2,
            transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform:  hovered ? "scale(1.15) rotate(-45deg)" : "scale(1) rotate(0deg)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path
              d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5"
              stroke="#111"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* ── Text ── */}
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-[11px] uppercase tracking-[0.15em] text-[#7a7060] mb-1"
      >
        {project.company}
      </p>
      <h3
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="text-xl text-[#f5f0e8] mb-2 font-normal"
      >
        {project.title}
      </h3>
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-sm text-[#8a8070] leading-relaxed"
      >
        {project.description}
      </p>

      {/* ── Tags ── */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {project.tags.map((t) => (
          <span
            key={t}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[10px] uppercase tracking-widest text-[#6a6050] border border-[#3a3528] px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
