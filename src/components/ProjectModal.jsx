import { useEffect } from "react";
import { PROJECT_DETAILS } from "../data/projectDetails";

function Section({ children, delay = 0 }) {
  return (
    <div style={{ animation: `modalFadeUp 0.6s ease ${delay}ms both` }}>
      {children}
    </div>
  );
}

export default function ProjectModal({ detailKey, onClose }) {
  const data = PROJECT_DETAILS[detailKey];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!data) return null;

  return (
    <>
      <style>{`
        @keyframes modalFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalSlideIn {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(8,7,5,0.9)",
          backdropFilter: "blur(10px)",
          zIndex: 100,
          animation: "modalFadeUp 0.3s ease both",
        }}
      />

      {/* Modal panel */}
      <div
        style={{
          position: "fixed", inset: 0,
          zIndex: 101,
          overflowY: "auto",
          animation: "modalSlideIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            background: "#0f0e0b",
            maxWidth: "860px",
            margin: "0 auto",
            borderLeft: "1px solid #1e1d1a",
            borderRight: "1px solid #1e1d1a",
            paddingBottom: "100px",
          }}
        >

          {/* ── Sticky top bar ── */}
          <div
            style={{
              position: "sticky", top: 0, zIndex: 10,
              background: "rgba(15,14,11,0.94)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid #1e1d1a",
              padding: "16px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#5a5448",
              }}>
                Case Study
              </span>
              <span style={{ color: "#2a2820" }}>·</span>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "13px",
                color: "#8a8070",
                fontStyle: "italic",
              }}>
                {data.title}
              </span>
            </div>
            <button
              onClick={onClose}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#7a7060",
                background: "none",
                border: "1px solid #2a2820",
                borderRadius: "999px",
                padding: "7px 18px",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                e.target.style.color = "#f5f0e8";
                e.target.style.borderColor = "#c8b99a";
              }}
              onMouseLeave={e => {
                e.target.style.color = "#7a7060";
                e.target.style.borderColor = "#2a2820";
              }}
            >
              ✕ Close
            </button>
          </div>

          {/* ── Hero: Screenshot image ── */}
          <Section delay={60}>
            <div style={{ padding: "40px 40px 0" }}>
              <div style={{
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #2a2820",
                position: "relative",
              }}>
                {data.image && (
                  <img
                    src={data.image}
                    alt={`${data.title} screenshot`}
                    style={{
                      width: "100%",
                      display: "block",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                )}
                {/* Gradient fade at bottom of image */}
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  height: "80px",
                  background: "linear-gradient(to top, #0f0e0b, transparent)",
                }} />
              </div>
            </div>
          </Section>

          {/* ── Title block ── */}
          <Section delay={120}>
            <div style={{ padding: "40px 40px 32px" }}>
              <div style={{
                width: "36px", height: "2px",
                background: "#c8b99a",
                borderRadius: "2px",
                marginBottom: "24px",
              }} />
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#7a7060",
                marginBottom: "12px",
              }}>
                {data.subtitle}
              </p>
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 5vw, 54px)",
                lineHeight: "1.1",
                fontWeight: 400,
                color: "#f5f0e8",
                marginBottom: "28px",
              }}>
                {data.title}
              </h1>

              {/* Live link button */}
              <a
                href={data.liveLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#0f0e0b",
                  background: "#c8b99a",
                  borderRadius: "999px",
                  padding: "11px 24px",
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
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M5 1l4 4-4 4" stroke="#0f0e0b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </Section>

          {/* Divider */}
          <div style={{ height: "1px", background: "#1e1d1a", margin: "0 40px" }} />

          {/* ── Content sections ── */}
          {data.sections.map((sec, i) => (
            <Section key={sec.num} delay={160 + i * 80}>
              <div style={{ padding: "44px 40px 0" }}>

                {/* Label row */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#c8b99a",
                  }}>
                    {sec.num}
                  </span>
                  <span style={{ width: "20px", height: "1px", background: "#3a3528" }} />
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#5a5448",
                  }}>
                    {sec.label}
                  </span>
                </div>

                {/* Section heading */}
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 400,
                  color: "#f5f0e8",
                  marginBottom: "18px",
                  lineHeight: "1.35",
                }}>
                  {sec.heading}
                </h2>

                {/* Body paragraphs */}
                {sec.body && sec.body.map((para, j) => (
                  <p key={j} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "#8a8070",
                    lineHeight: "1.9",
                    fontWeight: 300,
                    marginBottom: "14px",
                  }}>
                    {para}
                  </p>
                ))}

                {/* Tech stack table */}
                {sec.stack && (
                  <div style={{ marginTop: "12px", border: "1px solid #1e1d1a", borderRadius: "12px", overflow: "hidden" }}>
                    {sec.stack.map((row, idx) => (
                      <div
                        key={row.layer}
                        style={{
                          display: "flex",
                          gap: "20px",
                          padding: "14px 20px",
                          borderBottom: idx < sec.stack.length - 1 ? "1px solid #1e1d1a" : "none",
                          alignItems: "center",
                          transition: "background 0.2s ease",
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = "#141310"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
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
                  <ul style={{ marginTop: "18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {sec.highlights.map((h) => (
                      <li key={h} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ color: "#c8b99a", flexShrink: 0, marginTop: "3px", fontSize: "10px" }}>✦</span>
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          color: "#8a8070",
                          lineHeight: "1.75",
                        }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Bottom rule between sections */}
                {i < data.sections.length - 1 && (
                  <div style={{ height: "1px", background: "#1e1d1a", marginTop: "44px" }} />
                )}
              </div>
            </Section>
          ))}

          {/* ── Bottom CTA card ── */}
          <Section delay={680}>
            <div style={{
              margin: "60px 40px 0",
              padding: "32px 36px",
              border: "1px solid #2a2820",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              background: "#0c0b09",
            }}>
              <div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  color: "#f5f0e8",
                  fontWeight: 400,
                  fontStyle: "italic",
                }}>
                  Want to collaborate?
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: "#5a5448",
                  marginTop: "6px",
                  letterSpacing: "0.02em",
                }}>
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
