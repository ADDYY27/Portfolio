
export const PROJECT_DETAILS = {
  "third-lens": {
    title:     "The Third Lens",
    subtitle:  "Full-Stack News Aggregator & Opinion Platform",
    liveLink:  "https://thirdlens.vercel.app/",
    accentColor: "#dce8f5",

    sections: [
      {
        num:   "01",
        label: "The Introduction",
        heading: "News is broken. We built a fix.",
        body: [
          "The Third Lens is a full-stack web platform that aggregates live news, detects bias, and gives readers a space to form and share their own informed opinions — all in one place.",
          "In an era of algorithmic echo chambers and sensationalist headlines, most people never encounter a story from more than one angle. The Third Lens was built to change that — presenting multiple perspectives on every story and letting users contribute their own voice through structured opinion and comment threads.",
        ],
      },
      {
        num:   "02",
        label: "The Problem Statement",
        heading: "Readers are trapped in a single lens.",
        body: [
          "Modern news consumption is deeply fragmented. Readers get their news from a single source — often filtered by an algorithm designed to maximise engagement, not understanding. This creates blind spots, hardens biases, and erodes informed discourse.",
          "There was no single platform that combined live news aggregation, transparent bias labelling, structured opinion writing, and real-time community discussion. Users had to jump between Twitter, Reddit, and news sites just to get a full picture. The Third Lens solves all of this in one cohesive experience.",
        ],
      },
      {
        num:   "03",
        label: "The Unique Angle",
        heading: "Opinion meets intelligence — in real time.",
        body: [
          "Unlike standard news aggregators, The Third Lens layers a structured opinion system on top of live news. Every article can have multiple opinion pieces written by users — each tagged with a stance — so readers see the full spectrum of thought on any topic.",
          "The platform also implements real-time comment threads with nested replies, bias tagging on articles, and a Firebase-powered live sync so discussions update instantly without page refresh. The dark editorial UI is intentionally designed to reduce distraction and keep focus on the content.",
        ],
        highlights: [
          "Live news aggregation with bias labels",
          "Structured opinion writing per article",
          "Nested real-time comment threads",
          "Firebase Authentication for secure user profiles",
          "Firestore schema supporting opinions, replies & likes",
        ],
      },
      {
        num:   "04",
        label: "The Technology Stack",
        heading: "Built for speed, scale, and real-time sync.",
        stack: [
          { layer: "Frontend",    tech: "React.js, TailwindCSS, React Router" },
          { layer: "Backend",     tech: "Firebase Cloud Functions, RESTful architecture" },
          { layer: "Database",    tech: "Firebase Firestore (NoSQL, real-time)" },
          { layer: "Auth",        tech: "Firebase Authentication (email + OAuth)" },
          { layer: "Storage",     tech: "Firebase Storage for media assets" },
          { layer: "Deployment",  tech: "Vercel (frontend), Firebase (backend)" },
        ],
      },
      {
        num:   "05",
        label: "The Impact",
        heading: "Real performance. Real users. Real conversations.",
        body: [
          "The platform handles live news ingestion, multi-user concurrent comment threads, and opinion CRUD operations — all with sub-second Firestore sync latency. The architecture is designed to scale horizontally without any backend re-engineering.",
          "Users can read, react, and contribute opinions within seconds of an article going live. The structured opinion format encourages thoughtful writing over hot-takes, resulting in higher quality discourse than typical comment sections.",
        ],
        highlights: [
          "Sub-second real-time sync via Firestore listeners",
          "Scalable NoSQL schema — no migration needed as data grows",
          "Full CRUD on opinions, comments, likes, and user profiles",
          "Fully responsive — works seamlessly on mobile and desktop",
        ],
      },
      {
        num:   "06",
        label: "Challenges & Learnings",
        heading: "Hard problems make the best teachers.",
        body: [
          "The biggest technical challenge was designing a Firestore schema that could support deeply nested data — opinions with threaded comments, each with likes and author references — without hitting Firestore's read/write limits or creating expensive queries.",
          "Solving this required careful denormalisation of data and strategic use of Firestore's collection group queries. I also learned to implement optimistic UI updates so the interface feels instant even before the database confirms a write — a pattern that dramatically improved perceived performance.",
        ],
        highlights: [
          "Designed a denormalised Firestore schema for nested threads",
          "Implemented optimistic UI updates for instant feedback",
          "Integrated Firebase Auth with protected routes in React Router",
          "Learned to batch Firestore writes to reduce billing costs",
        ],
      },
    ],
  },

  // ── Add more projects here following the same shape ──
};
