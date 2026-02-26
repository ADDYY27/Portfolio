// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDIT THIS FILE to update everything on the site.
//     All components pull their data from here — you never need to touch them.
// ─────────────────────────────────────────────────────────────────────────────

export const PERSONAL = {
  name:      "Adarsh Kumar Dubey",
  initials:  "A.K.D.",
  email:     "adarshdubey1805@gmail.com",
  phone:     "+91 7070867333",
  github:    "https://github.com/ADDYY27",
  linkedin:  "https://www.linkedin.com/in/adarsh-dubey-653154297/",
  twitter:   "https://x.com/aDyyy_27?t=WDcceYDvc2IC8FwhkzQJtA&s=08",
  instagram: "https://www.instagram.com/r3bel.18?igsh=dXQ5Y3kzbHZia2w3",
  cv:        "/AdarshDubeyResume.pdf",
  heroDesc:
    "Full-stack developer & ML enthusiast — building responsive, scalable web applications and exploring AI-driven systems. B.Tech CS (Data Science) student at ABES Institute of Technology.",
  bio1:
    "I'm a passionate and driven learner with strong programming skills in Java, C, and C++. Hands-on experience with React.js, JavaScript, and Firebase enables me to build responsive, dynamic, and scalable web applications.",
  bio2:
    "Currently pursuing Machine Learning through NVIDIA AI Ventures and trained at NIT Kurukshetra, deepening my interest in AI and data-driven systems.",
};

export const NAV_LINKS = [
  { num: "01", label: "Home",    href: "#home" },
  { num: "02", label: "Work",    href: "#work" },
  { num: "03", label: "About",   href: "#about" },
  { num: "04", label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "2+",  label: "Projects built" },
  { value: "5+",  label: "Tech stacks"    },
  { value: "7.1", label: "Current SGPA"   },
];

export const PROJECTS = [
  {
    company:     "Full-Stack · 2026",
    title:       "The Third Lens",
    description:
      "A full-stack news aggregator & opinion platform with live news aggregation, bias analysis, opinion sections, and real-time comments — built with React, Firebase & Firestore.",
    tags:  ["React", "Firebase", "Firestore"],
    color: "#dce8f5",
    image: "/thirdlens-preview.png",
    link:  "https://thirdlens.vercel.app/",
    detailKey: "third-lens",
  },
  {
    company:     "Personal · 2025",
    title:       "Portfolio Website",
    description:
      "Responsive personal portfolio built with React, featuring reusable components, client-side routing, resume download, and cross-browser optimised performance.",
    tags:  ["React", "TailwindCSS", "Vercel"],
    color: "#f0ece4",
    link:  "#",
  },
];

export const SKILLS = [
  { category: "Languages", items: "Java, C, C++, JavaScript"          },
  { category: "Frontend",  items: "HTML5, CSS3, React.js, TailwindCSS" },
  { category: "Backend",   items: "Node.js, RESTful API"               },
  { category: "Database",  items: "MySQL, SQL, DBMS"                   },
  { category: "Tools",     items: "Git, GitHub, VS Code, Postman, Vercel" },
];

export const EXPERIENCE = [
  {
    role:    "Research & Development Intern",
    company: "TECHMATE Gzb.",
    period:  "Jun 2024 – Sep 2024",
    bullets: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
      "Improved application performance and enhanced UI responsiveness.",
      "Collaborated with team using Git version control workflow.",
    ],
  },
  {
    role:    "Student Mentor",
    company: "Light De Literacy (LDL), Noida",
    period:  "Dec 2023 – Jun 2024",
    bullets: [
      "Volunteered as an NGO mentor, teaching academic and technical subjects to underprivileged students.",
      "Strengthened students' foundational concepts and promoted digital literacy.",
    ],
  },
];

export const EDUCATION = {
  institution: "ABES Institute of Technology, Ghaziabad",
  degree:      "B.Tech · Computer Science & Engineering (Data Science)",
  period:      "2023 – 2027",
  sgpa:        "7.1 (till Semester V)",
};

export const CERTIFICATIONS = [
  "Applied Machine Learning using Python — NIT Kurukshetra",
  "Database Management System — Infosys Springboard, Oct 2025",
];
