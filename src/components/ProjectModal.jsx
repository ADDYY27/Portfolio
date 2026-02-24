import { useEffect } from "react";
import { PROJECT_DETAILS } from "../data/Projectdetails";

/* ── Small fade-in for modal sections (CSS-only, no hook needed) ── */
function Section({ children, delay = 0 }) {
  return (
    <div
      style={{
        animation: `modalFadeUp 0.6s ease ${delay}ms both`,
      }}
    >
      {children}
    </div>
  );
}

export default function ProjectModal({ detailKey, onClose }) {
  const data = PROJECT_DETAILS[detailKey];

  /* Lock body scroll while modal is open */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* Close on Escape key */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!data) return null;

  return (
    <>
      {/* ── Animation keyframe injected once ── */}
      <style>{`
        @keyframes modalFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalSlideIn {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Backdrop ── */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(10,9,7,0.85)",
          backdropFilter: "blur(8px)",
          zIndex: 100,
          animation: "modalFadeUp 0.3s ease both",
        }}
      />

      {/* ── Modal panel ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 101,
          overflowY: "auto",
          animation: "modalSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            background: "#0f0e0b",
            maxWidth: "860px",
            margin: "0 auto",
            padding: "0 0 80px 0",
            borderLeft: "1px solid #1e1d1a",
            borderRight: "1px solid #1e1d1a",
          }}
        >
          {/* ── Top bar ── */}
          <div
            style={{
              position: "sticky", top: 0, zIndex: 10,
              background: "rgba(15,14,11,0.92)",
              backdropFilter: "blur(14px)",
              borderBottom: "1px solid #1e1d1a",
              padding: "18px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5448" }}>
              Case Study
            </p>
            <button
              onClick={onClose}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#7a7060",
                background: "none",
                border: "1px solid #2a2820",
                borderRadius: "999px",
                padding: "6px 16px",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => { e.target.style.color = "#f5f0e8"; e.target.style.borderColor = "#c8b99a"; }}
              onMouseLeave={e => { e.target.style.color = "#7a7060"; e.target.style.borderColor = "#2a2820"; }}
            >
              ✕ Close
            </button>
          </div>

          {/* ── Hero block ── */}
          <Section delay={80}>
            <div style={{ padding: "60px 40px 40px" }}>
              {/* Accent colour strip */}
              <div style={{ width: "40px", height: "3px", background: "#c8b99a", borderRadius: "2px", marginBottom: "28px" }} />

              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a7060", marginBottom: "14px" }}>
                {data.subtitle}
              </p>
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: "1.08",
                fontWeight: 400,
                color: "#f5f0e8",
                marginBottom: "28px",
              }}>
                {data.title}
              </h1>

              {/* Live link */}
              <a
                href={data.liveLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#0f0e0b",
                  background: "#c8b99a",
                  borderRadius: "999px",
                  padding: "10px 22px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "background 0.25s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#d4c8aa"}
                onMouseLeave={e => e.currentTarget.style.background = "#c8b99a"}
              >
                View Live Project
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M1 5.5h9M5.5 1l4.5 4.5L5.5 10" stroke="#0f0e0b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </Section>

          {/* Divider */}
          <div style={{ height: "1px", background: "#1e1d1a", margin: "0 40px" }} />

          {/* ── Sections ── */}
          {data.sections.map((sec, i) => (
            <Section key={sec.num} delay={120 + i * 80}>
              <div style={{ padding: "48px 40px 0" }}>

                {/* Section label */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5448" }}>
                    {sec.num}
                  </span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#5a5448" }}>
                    {sec.label}
                  </span>
                </div>

                {/* Section heading */}
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 400,
                  color: "#f5f0e8",
                  marginBottom: "20px",
                  lineHeight: "1.3",
                }}>
                  {sec.heading}
                </h2>

                {/* Body paragraphs */}
                {sec.body && sec.body.map((para, j) => (
                  <p key={j} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "#8a8070",
                    lineHeight: "1.85",
                    fontWeight: 300,
                    marginBottom: "14px",
                  }}>
                    {para}
                  </p>
                ))}

                {/* Tech stack table */}
                {sec.stack && (
                  <div style={{ marginTop: "8px" }}>
                    {sec.stack.map((row) => (
                      <div
                        key={row.layer}
                        style={{
                          display: "flex",
                          gap: "20px",
                          borderBottom: "1px solid #1e1d1a",
                          padding: "14px 0",
                          alignItems: "baseline",
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = "#3a3528"}
                        onMouseLeave={e => e.currentTarget.style.borderColor = "#1e1d1a"}
                      >
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "10px",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#5a5448",
                          minWidth: "90px",
                          flexShrink: 0,
                        }}>
                          {row.layer}
                        </span>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          color: "#c8c0b0",
                          lineHeight: "1.6",
                        }}>
                          {row.tech}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlight bullets */}
                {sec.highlights && (
                  <ul style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {sec.highlights.map((h) => (
                      <li key={h} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ color: "#c8b99a", flexShrink: 0, marginTop: "2px", fontSize: "12px" }}>✦</span>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          color: "#8a8070",
                          lineHeight: "1.7",
                        }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Section bottom rule */}
                {i < data.sections.length - 1 && (
                  <div style={{ height: "1px", background: "#1e1d1a", marginTop: "48px" }} />
                )}
              </div>
            </Section>
          ))}

          {/* ── Bottom CTA ── */}
          <Section delay={600}>
            <div style={{
              margin: "60px 40px 0",
              padding: "36px",
              border: "1px solid #2a2820",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#f5f0e8", fontWeight: 400 }}>
                  Want to collaborate?
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#5a5448", marginTop: "6px" }}>
                  Open to internships, freelance & full-time roles.
                </p>
              </div>
              <a
                href="mailto:adarshdubey1805@gmail.com"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#0f0e0b",
                  background: "#c8b99a",
                  borderRadius: "999px",
                  padding: "12px 24px",
                  textDecoration: "none",
                  transition: "background 0.25s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#d4c8aa"}
                onMouseLeave={e => e.currentTarget.style.background = "#c8b99a"}
              >
                Get in touch →
              </a>
            </div>
          </Section>

        </div>
      </div>
    </>
  );
}
