import FadeIn from "./FadeIn";
import {
  PERSONAL,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS,
} from "../data/content";

export default function About() {
  return (
    <section id="about" className="px-8 py-24">
      {/* ── Section heading ── */}
      <FadeIn className="flex items-baseline gap-4 mb-14">
        <span
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-[10px] uppercase tracking-[0.2em] text-[#5a5448]"
        >
          03
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize:   "clamp(26px, 3vw, 38px)",
            fontWeight: 400,
          }}
          className="text-[#f5f0e8]"
        >
          About
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl">

        {/* ════════════ LEFT COLUMN ════════════ */}
        <div>

          {/* Bio */}
          <FadeIn delay={100}>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[#8a8070] leading-[1.85] font-light"
            >
              {PERSONAL.bio1}
            </p>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[#8a8070] leading-[1.85] font-light mt-4"
            >
              {PERSONAL.bio2}
            </p>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={180} className="mt-12">
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] uppercase tracking-[0.2em] text-[#5a5448] mb-5"
            >
              Education
            </p>
            <div className="border border-[#2a2820] hover:border-[#3a3528] transition-colors duration-300 rounded-xl p-5">
              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[#f5f0e8] text-base"
              >
                {EDUCATION.institution}
              </p>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs text-[#6a6050] mt-1.5 leading-relaxed"
              >
                {EDUCATION.degree} · {EDUCATION.period}
              </p>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs text-[#c8b99a] mt-2.5 uppercase tracking-widest"
              >
                SGPA: {EDUCATION.sgpa}
              </p>
            </div>
          </FadeIn>

          {/* Experience */}
          <FadeIn delay={240} className="mt-10">
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] uppercase tracking-[0.2em] text-[#5a5448] mb-5"
            >
              Experience
            </p>
            <div className="flex flex-col gap-7">
              {EXPERIENCE.map((exp) => (
                <div key={exp.role} className="border-l border-[#3a3528] pl-5">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <p
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-sm text-[#f5f0e8] font-medium"
                      >
                        {exp.role}
                      </p>
                      <p
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-xs text-[#c8b99a] mt-0.5"
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-[10px] text-[#5a5448] uppercase tracking-widest whitespace-nowrap"
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-xs text-[#6a6050] leading-relaxed flex gap-2"
                      >
                        <span className="text-[#3a3528] flex-shrink-0 mt-0.5">–</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={300} className="mt-10">
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[10px] uppercase tracking-[0.2em] text-[#5a5448] mb-5"
            >
              Certifications
            </p>
            <div className="flex flex-col gap-3">
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-xs text-[#8a8070] flex gap-2.5 items-start"
                >
                  <span className="text-[#c8b99a] flex-shrink-0 mt-0.5">✦</span>
                  {c}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ════════════ RIGHT COLUMN ════════════ */}
        <FadeIn delay={200}>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[10px] uppercase tracking-[0.2em] text-[#5a5448] mb-6"
          >
            Technical Skills
          </p>

          {/* Skills table */}
          <div className="flex flex-col">
            {SKILLS.map((s) => (
              <div
                key={s.category}
                className="flex gap-5 border-b border-[#1e1d1a] py-4 group hover:border-[#3a3528] transition-colors duration-300"
              >
                <span
                  style={{ fontFamily: "'DM Sans', sans-serif", minWidth: "78px" }}
                  className="text-[10px] uppercase tracking-widest text-[#5a5448] group-hover:text-[#7a7060] transition-colors pt-0.5 flex-shrink-0"
                >
                  {s.category}
                </span>
                <span
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-sm text-[#c8c0b0] group-hover:text-[#f5f0e8] transition-colors duration-300 leading-relaxed"
                >
                  {s.items}
                </span>
              </div>
            ))}
          </div>

          {/* NVIDIA badge */}
          <div className="mt-10 border border-[#2a2820] hover:border-[#76b900]/30 transition-colors duration-300 rounded-xl p-5 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#76b900]/10 border border-[#76b900]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[#76b900] text-xs font-bold"
              >
                N
              </span>
            </div>
            <div>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs text-[#f5f0e8] font-medium"
              >
                NVIDIA AI Ventures · ML Program
              </p>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs text-[#5a5448] mt-1 leading-relaxed"
              >
                Applied Machine Learning using Python · Trained at NIT Kurukshetra
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
