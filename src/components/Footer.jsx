import { PERSONAL } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-8 py-8 border-t border-[#1e1d1a] flex items-center justify-between flex-wrap gap-4">
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-[11px] text-[#4a4538] uppercase tracking-widest"
      >
        © 2025 Adarsh Kumar Dubey
      </p>

      <div className="flex gap-6">
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noreferrer"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-[11px] text-[#4a4538] hover:text-[#c8b99a] transition-colors"
        >
          GitHub
        </a>
        <a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noreferrer"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-[11px] text-[#4a4538] hover:text-[#c8b99a] transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${PERSONAL.email}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-[11px] text-[#4a4538] hover:text-[#c8b99a] transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
