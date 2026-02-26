import { PERSONAL } from "../data/content";

/* ── Twitter / X icon ── */
function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1l4.8 6.4L1 13h1.5l3.5-4 2.8 4H13L8 6.4 12.8 1h-1.5L7.3 4.8 4.5 1H1z" fill="currentColor"/>
    </svg>
  );
}

/* ── Instagram icon ── */
function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="10.2" cy="3.8" r="0.7" fill="currentColor"/>
    </svg>
  );
}

/* ── GitHub icon ── */
function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 0.5C3.41 0.5 0.5 3.41 0.5 7c0 2.87 1.86 5.3 4.44 6.16.32.06.44-.14.44-.3v-1.05c-1.8.39-2.18-.87-2.18-.87-.3-.75-.72-0.95-.72-.95-.59-.4.04-.4.04-.4.65.05 1 .67 1 .67.58 1 1.53.71 1.9.54.06-.42.23-.71.41-.87-1.44-.16-2.95-.72-2.95-3.2 0-.71.25-1.29.67-1.74-.07-.16-.29-.82.06-1.71 0 0 .55-.18 1.8.67A6.27 6.27 0 017 3.96c.56 0 1.12.07 1.65.22 1.24-.85 1.79-.67 1.79-.67.35.89.13 1.55.06 1.71.42.45.67 1.03.67 1.74 0 2.49-1.52 3.04-2.96 3.2.23.2.44.59.44 1.19v1.76c0 .17.11.37.44.3A6.5 6.5 0 0013.5 7C13.5 3.41 10.59.5 7 .5z" fill="currentColor"/>
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href:  (p) => p.github,
    icon:  <GitHubIcon />,
  },
  {
    label: "Twitter",
    href:  (p) => p.twitter,
    icon:  <TwitterIcon />,
  },
  {
    label: "Instagram",
    href:  (p) => p.instagram,
    icon:  <InstagramIcon />,
  },
];

export default function Footer() {
  return (
    <footer className="px-8 py-8 border-t border-[#1e1d1a] flex items-center justify-between flex-wrap gap-4">
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-[11px] text-[#4a4538] uppercase tracking-widest"
      >
        © 2025 Adarsh Kumar Dubey
      </p>

      <div className="flex items-center gap-5">
        {SOCIAL_LINKS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href(PERSONAL)}
            target="_blank"
            rel="noreferrer"
            title={label}
            style={{
              width: "30px", height: "30px",
              border: "1px solid #2a2820",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#4a4538",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#c8b99a";
              e.currentTarget.style.color = "#c8b99a";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#2a2820";
              e.currentTarget.style.color = "#4a4538";
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
