import FadeIn from "./FadeIn";
import { PERSONAL } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-24 border-t border-[#2a2820]">
      <div className="max-w-4xl">

        <FadeIn>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[10px] uppercase tracking-[0.2em] text-[#5a5448] mb-6"
          >
            04 · Contact
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize:   "clamp(38px, 6vw, 80px)",
              lineHeight: "1.1",
              fontWeight: 400,
            }}
            className="text-[#f5f0e8] mb-10"
          >
            Got an opportunity?
            <br />
            <span style={{ fontStyle: "italic", color: "#c8b99a" }}>
              Let's connect.
            </span>
          </h2>
        </FadeIn>

        {/* Buttons */}
        <FadeIn delay={200} className="flex gap-4 flex-wrap mb-8">
          <a
            href={`mailto:${PERSONAL.email}`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="inline-flex items-center gap-3 text-sm text-[#0f0e0b] bg-[#c8b99a] hover:bg-[#d4c8aa] px-7 py-3.5 rounded-full transition-colors duration-300"
          >
            {PERSONAL.email}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="#0f0e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="inline-flex items-center gap-2 text-sm text-[#8a8070] hover:text-[#c8b99a] border border-[#3a3528] hover:border-[#c8b99a] px-7 py-3.5 rounded-full transition-all duration-300"
          >
            LinkedIn ↗
          </a>

          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="inline-flex items-center gap-2 text-sm text-[#8a8070] hover:text-[#c8b99a] border border-[#3a3528] hover:border-[#c8b99a] px-7 py-3.5 rounded-full transition-all duration-300"
          >
            GitHub ↗
          </a>
        </FadeIn>

        <FadeIn delay={280}>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-sm text-[#5a5448]"
          >
            📞 {PERSONAL.phone}
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
