export const PROJECT_DETAILS = {
  "third-lens": {
    title:      "The Third Lens",
    subtitle:   "Full-Stack News Aggregator & Opinion Platform",
    liveLink:   "https://thirdlens.vercel.app/",
    github:     "https://github.com/ADDYY27/thirdlens",
    image:      "/thirdlens-preview.png",

    sections: [
      {
        num:     "01",
        label:   "The Introduction",
        heading: "News is broken. We built a fix.",
        body: [
          "The Third Lens is a full-stack web platform that aggregates live news, detects bias, and gives readers a space to form and share their own informed opinions — all in one place.",
          "In an era of algorithmic echo chambers and sensationalist headlines, most people never encounter a story from more than one angle. The Third Lens was built to change that — presenting multiple perspectives on every story and letting users contribute their own voice through structured opinion and comment threads.",
        ],
      },
      {
        num:     "02",
        label:   "The Problem Statement",
        heading: "Readers are trapped in a single lens.",
        body: [
          "Modern news consumption is deeply fragmented. Readers get their news from a single source — often filtered by an algorithm designed to maximise engagement, not understanding. This creates blind spots, hardens biases, and erodes informed discourse.",
          "There was no single platform that combined live news aggregation, transparent bias labelling, structured opinion writing, and real-time community discussion. Users had to jump between Twitter, Reddit, and news sites just to get a full picture. The Third Lens solves all of this in one cohesive experience.",
        ],
      },
      {
        num:     "03",
        label:   "The Unique Angle",
        heading: "Opinion meets intelligence — in real time.",
        body: [
          "Unlike standard news aggregators, The Third Lens layers a structured opinion system on top of live news. Every article can have multiple opinion pieces written by users — each tagged with a stance — so readers see the full spectrum of thought on any topic.",
          "The platform also implements real-time comment threads with nested replies, bias tagging on articles, and a Firebase-powered live sync so discussions update instantly without page refresh. The dark editorial UI is intentionally designed to reduce distraction and keep focus on the content.",
        ],
        highlights: [
          "Live news aggregation with bias labels per source",
          "Structured opinion writing attached to each article",
          "Nested real-time comment threads with likes",
          "Firebase Authentication for secure user profiles",
          "Firestore schema supporting opinions, replies & reactions",
        ],
      },
      {
        num:     "04",
        label:   "The Technology Stack",
        heading: "Built for speed, scale, and real-time sync.",
        stack: [
          { layer: "Frontend",   tech: "React.js, TailwindCSS, React Router" },
          { layer: "Backend",    tech: "Firebase Cloud Functions, RESTful architecture" },
          { layer: "Database",   tech: "Firebase Firestore (NoSQL, real-time)" },
          { layer: "Auth",       tech: "Firebase Authentication (email + OAuth)" },
          { layer: "Storage",    tech: "Firebase Storage for media assets" },
          { layer: "Deployment", tech: "Vercel (frontend) · Firebase (backend)" },
        ],
      },
      {
        num:     "05",
        label:   "The Impact",
        heading: "Real performance. Real users. Real conversations.",
        body: [
          "The platform handles live news ingestion, multi-user concurrent comment threads, and full opinion CRUD operations — all with sub-second Firestore sync latency. The architecture is designed to scale horizontally without any backend re-engineering.",
          "Users can read, react, and contribute opinions within seconds of an article going live. The structured opinion format encourages thoughtful writing over hot-takes, resulting in higher quality discourse than a typical comment section.",
        ],
        highlights: [
          "Sub-second real-time sync via Firestore listeners",
          "Scalable NoSQL schema — no migration needed as data grows",
          "Full CRUD on opinions, comments, likes, and user profiles",
          "Fully responsive — works seamlessly on mobile and desktop",
        ],
      },
      {
        num:     "06",
        label:   "Challenges & Learnings",
        heading: "Hard problems make the best teachers.",
        body: [
          "The biggest technical challenge was designing a Firestore schema that could support deeply nested data — opinions with threaded comments, each with likes and author references — without hitting Firestore's read/write limits or creating expensive queries.",
          "Solving this required careful denormalisation of data and strategic use of Firestore's collection group queries. I also learned to implement optimistic UI updates so the interface feels instant even before the database confirms a write — a pattern that dramatically improved perceived performance.",
        ],
        highlights: [
          "Designed a denormalised Firestore schema for nested threads",
          "Implemented optimistic UI updates for instant feedback",
          "Integrated Firebase Auth with protected routes in React Router",
          "Learned to batch Firestore writes to reduce billing and latency",
        ],
      },
    ],
  },

  "chattr": {
    title:      "Chattr",
    subtitle:   "Real-Time Chat Application",
    liveLink:   "https://chatapp-ivory-eta.vercel.app/",
    github:     "https://github.com/ADDYY27/Chatapp",
    image:      "/chattr-preview.png",

    sections: [
      {
        num:     "01",
        label:   "The Introduction",
        heading: "Real-time communication, built for both personal and group conversations.",
        body: [
          "Chattr is a full-stack real-time chat application where users can create accounts, connect with other users, exchange messages instantly, and participate in group conversations.",
          "The application was built to handle the complete chat experience — from authentication and user discovery to real-time messaging, read receipts, unread message counts, and profile management.",
        ],
      },
      {
        num:     "02",
        label:   "The Problem Statement",
        heading: "Conversations should feel instant and connected.",
        body: [
          "Traditional chat implementations can become complex when real-time communication, authentication, group conversations, message states, and user management all need to work together.",
          "Chattr was built as a complete communication platform where users can search for other users, start personal conversations, create groups, and exchange messages without relying on manual refreshes.",
          "The challenge was not just sending messages, but keeping the frontend, backend, database, and real-time socket events synchronized.",
        ],
      },
      {
        num:     "03",
        label:   "The Unique Angle",
        heading: "Real-time messaging meets a complete full-stack architecture.",
        body: [
          "Chattr combines real-time Socket.IO communication with a React-based frontend, Express.js backend, MongoDB database, and Zustand state management.",
          "The application supports both one-to-one and group conversations while handling authentication, read receipts, unread message counts, user search, and profile avatars.",
        ],
        highlights: [
          "One-to-one real-time conversations",
          "Group chat with multiple participants",
          "Read receipts and unread message counts",
          "User search and profile avatars",
          "Authentication and protected communication",
          "Socket.IO-powered real-time messaging",
        ],
      },
      {
        num:     "04",
        label:   "The Technology Stack",
        heading: "Built around real-time communication and scalable deployment.",
        stack: [
          { layer: "Frontend",       tech: "React.js · Vite · Zustand" },
          { layer: "Backend",        tech: "Node.js · Express.js · Socket.IO" },
          { layer: "Database",       tech: "MongoDB" },
          { layer: "Authentication", tech: "User authentication with protected application flows" },
          { layer: "Deployment",     tech: "Docker · Docker Hub · GitHub Actions · AWS EC2 · Nginx" },
          { layer: "CI/CD",          tech: "GitHub Actions pipeline for automated Docker image builds, Docker Hub pushes, and deployment to AWS EC2" },
        ],
      },
      {
        num:     "05",
        label:   "The Impact",
        heading: "From local development to automated production deployment.",
        body: [
          "Chattr is deployed using a containerized frontend and backend architecture, with separate production containers for each application layer.",
          "The deployment workflow uses GitHub Actions to automate the process of building Docker images, pushing them to Docker Hub, and deploying the application to an AWS EC2 server.",
        ],
        highlights: [
          "2 Docker images",
          "2 production containers",
          "1 GitHub Actions CI/CD pipeline",
          "Docker Hub image registry",
          "AWS EC2 production deployment",
          "Nginx used in the production setup",
        ],
      },
      {
        num:     "06",
        label:   "Challenges & Learnings",
        heading: "Real-time systems make every layer matter.",
        body: [
          "One of the main challenges was keeping real-time Socket.IO events synchronized with application state while handling authentication, CORS, and different conversation types.",
          "The deployment process also required understanding how the frontend and backend work together outside the local development environment, including containerization, image management, CI/CD automation, and production server configuration.",
        ],
        highlights: [
          "Worked with Socket.IO events for real-time communication",
          "Handled authentication and CORS configuration",
          "Containerized frontend and backend independently",
          "Built a GitHub Actions CI/CD workflow",
          "Worked with Docker Hub and AWS EC2 deployment",
          "Configured Nginx for production",
        ],
      },
    ],
  },

  "bharat-through-time": {
    title:      "Bharat Through Time",
    subtitle:   "Interactive Historical Map of India",
    liveLink:   "https://bharat-through-time.vercel.app/",
    github:     "https://github.com/ADDYY27/bharat-through-time",
    image:      "/bharat-preview.png",

    sections: [
      {
        num:     "01",
        label:   "The Introduction",
        heading: "Explore India's history through an interactive map.",
        body: [
          "Bharat Through Time is an interactive historical platform designed to make Indian history easier to explore through maps, rulers, territories, places, and events.",
          "Instead of presenting historical information as disconnected lists of text, the platform connects historical entities with geographic exploration, allowing users to discover India's past through an interactive map-based interface.",
        ],
      },
      {
        num:     "02",
        label:   "The Problem Statement",
        heading: "History is rich, but its information is fragmented.",
        body: [
          "Indian history contains a huge amount of information about rulers, territories, historical places, and important events. Finding connections between these different pieces of information can be difficult when they are presented separately.",
          "Bharat Through Time was built to bring these historical entities together in one interactive experience.",
          "The platform uses historical data from Wikidata and connects it with a map interface so users can explore different parts of India's history geographically.",
        ],
      },
      {
        num:     "03",
        label:   "The Unique Angle",
        heading: "Historical data meets interactive exploration.",
        body: [
          "Unlike a traditional history website, Bharat Through Time uses an interactive map as the primary way to explore historical information.",
          "Users can move through the map and discover historical territories, rulers, places, and events while the application connects geographic exploration with structured historical data.",
        ],
        highlights: [
          "Interactive historical map of India",
          "Historical territories and polities",
          "Rulers and historical figures",
          "Historical places and cities",
          "Historical events",
          "Wikidata-powered historical information",
          "Map-based exploration",
        ],
      },
      {
        num:     "04",
        label:   "The Technology Stack",
        heading: "Built around maps, APIs, and structured historical data.",
        stack: [
          { layer: "Frontend",        tech: "React.js · Vite · MapLibre GL JS" },
          { layer: "Backend",         tech: "Node.js · Express.js" },
          { layer: "Database",        tech: "MongoDB" },
          { layer: "Historical Data", tech: "Wikidata · SPARQL" },
          { layer: "Deployment",      tech: "Vercel · Backend Deployment" },
        ],
      },
      {
        num:     "05",
        label:   "The Impact",
        heading: "Turning structured historical data into an explorable experience.",
        body: [
          "The platform transforms historical information from structured data sources into an interactive map experience.",
          "Instead of requiring users to search through separate pages, the application provides a geographic interface for exploring territories, rulers, places, and events.",
        ],
        highlights: [
          "Map-based historical exploration",
          "Wikidata-powered historical information",
          "Structured historical entities",
          "Interactive geographic interface",
          "Separate frontend and backend architecture",
          "Production deployment",
        ],
      },
      {
        num:     "06",
        label:   "Challenges & Learnings",
        heading: "The interesting part was connecting history with geography.",
        body: [
          "One of the biggest challenges was collecting and organizing historical information from Wikidata and making that information usable inside an interactive map.",
          "The project required working with SPARQL queries, structured historical entities, geographic data, backend APIs, and MongoDB while keeping the information organized for frontend exploration.",
        ],
        highlights: [
          "Worked with Wikidata and SPARQL queries",
          "Organized historical entities into structured data",
          "Connected historical data with an interactive map",
          "Worked with MapLibre GL JS",
          "Built frontend and backend communication",
          "Configured environment variables and production deployment",
        ],
      },
    ],
  },
};
