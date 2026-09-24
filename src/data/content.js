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
    "Full-stack developer & DevOps enthusiast — building web applications, exploring cloud technologies, and learning how to ship better software.",
  bio1:
    "I'm a full-stack developer with hands-on experience building web applications using React, Node.js, Express, and MongoDB. I've also worked with Docker, GitHub Actions, AWS, and CI/CD while deploying and managing applications.",
  bio2:
    "Currently focused on DevOps and cloud technologies while continuing to build with the MERN stack. I enjoy understanding how applications work end-to-end — from development and containerization to automated deployment.",
};

export const NAV_LINKS = [
  { num: "01", label: "Home",    href: "#home" },
  { num: "02", label: "Work",    href: "#work" },
  { num: "03", label: "About",   href: "#about" },
  { num: "04", label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "5+",  label: "Projects built" },
  { value: "8+",  label: "Technologies"   },
  { value: "7.1", label: "Current SGPA"   },
];

export const PROJECTS = [
  {
    company:     "Full-Stack · 2026",
    title:       "The Third Lens",
    description:
      "Built a news aggregator that brings articles from different sources into one simple interface. Developed with React.js and Node.js, with search, filtering, and category-based browsing. Worked with APIs, environment variables, and production deployment.",
    tags:        ["React", "Node.js", "APIs"],
    color:       "#dce8f5",
    image:       "/thirdlens-preview.png",
    link:        "https://thirdlens.vercel.app/",
    detailKey:   "third-lens",
  },
  {
    company:     "DevOps · 2026",
    title:       "Chattr",
    description:
      "Built a real-time chat application and deployed it using Docker, GitHub Actions, and AWS EC2. Created separate production containers for the frontend and backend, automated image builds and Docker Hub pushes, and configured CI/CD deployment over SSH with post-deployment health checks.",
    tags:        ["React", "Node.js", "Docker", "GitHub Actions", "AWS"],
    color:       "#f0ece4",
    image:       "/chattr-preview.png",
    link:        "https://chatapp-ivory-eta.vercel.app/",
    detailKey:   "chattr",
  },
  {
    company:     "Full-Stack · 2026",
    title:       "Bharat Through Time",
    description:
      "Built an interactive platform to explore Indian history through maps, rulers, places, events, and historical polities. Developed with React.js, Vite, MapLibre GL JS, Node.js, and Express.js, with Wikidata/SPARQL for historical data and MongoDB for storage.",
    tags:        ["React", "Vite", "MapLibre", "Node.js", "MongoDB"],
    color:       "#e8e0d5",
    image:       "/bharat-preview.png",
    link:        "https://bharat-through-time.vercel.app/",
    detailKey:   "bharat-through-time",
  },
];

export const SKILLS = [
  { category: "Languages", items: "Java · C · C++ · JavaScript"          },
  { category: "Frontend",  items: "HTML5 · CSS3 · React.js · TailwindCSS" },
  { category: "Backend",   items: "Node.js · Express.js · REST APIs"     },
  { category: "Database",  items: "MongoDB · MySQL · SQL · DBMS"         },
  { category: "Tools",     items: "Git · GitHub · VS Code · Postman · Vercel" },
];

export const DEVOPS_CLOUD = [
  {
    category: "Cloud Infrastructure",
    items: "AWS · EC2 · VPC · IAM · S3",
  },
  {
    category: "CI/CD & Containers",
    items: "Docker · GitHub Actions · Jenkins · Kubernetes",
  },
  {
    category: "Systems & Networking",
    items: "Linux · Nginx · Networking",
  },
];

export const EXPERIENCE = [
  {
    role:    "Technical Team Member",
    company: "DRIFKO — Ghaziabad",
    period:  "June 2025 – Sept 2025",
    bullets: [
      "Started as a Technical Team Member and gained hands-on DevOps exposure during a 3-month internship.",
      "Containerized 1 production application using Docker, managing 4 containers across environment configurations.",
      "This experience sparked my interest in DevOps and led me to shift my focus from MERN toward DevOps.",
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

console.log("updated");