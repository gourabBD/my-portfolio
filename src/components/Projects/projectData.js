const projectsData = [
  {
    _id: "reseller",
    title: "Reseller Marketplace",
    description:
      "A three-panel marketplace for buying and selling used mobile phones, with dedicated Buyer, Seller, and Admin experiences covering listings, wishlists, order tracking, and platform-wide oversight.",
    img: "/reseller.png",
    img2:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    img3:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    gitClient: "https://github.com/gourabBD/reseller-client",
    gitServer: "https://github.com/gourabBD/reseller-server",
    liveSite: "https://reseller-client-main.vercel.app/",
    frontEnd:
      "React.js, Context API & Hooks, Tailwind CSS, Firebase Authentication, React Photoviewer",
    backEnd:
      "Node.js, Express, MongoDB, REST APIs, CORS-secured endpoints",
    highlights: [
      "Built three distinct panels — Buyer, Seller, and Admin — each with role-based permissions.",
      "Implemented product listings, wishlists, and order tracking for buyers and sellers.",
      "Integrated Firebase authentication and deployed the client to production on Vercel.",
    ],
  },
  {
    _id: "the-lecturer",
    title: "The Lecturer",
    description:
      "A dual-panel blogging and examination platform where admins publish and manage course content and quizzes, and viewers read blog material and take quizzes after logging in.",
    img: "/lecturer.png",
    img2:
      "https://images.unsplash.com/photo-1499961368507-0c6f7b66c4d8?auto=format&fit=crop&w=1200&q=80",
    img3:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    gitClient: "https://github.com/gourabBD/the-lecturer-client",
    gitServer: "https://github.com/gourabBD/the-lecturer-server",
    liveSite: "https://the-lecturer-3d2e4.web.app/",
    frontEnd:
      "React.js, Tailwind CSS, DaisyUI, React-Quill rich text editor, React Router DOM, Firebase Authentication",
    backEnd:
      "Node.js, Express, MongoDB, environment-based configuration with dotenv",
    highlights: [
      "Built an admin panel for full blog lifecycle management and quiz creation.",
      "Delivered a viewer experience for reading blog content and completing quizzes after login.",
      "Added role-based user administration to promote or remove platform users.",
    ],
  },
  {
    _id: "service-desk",
    title: "Service Desk",
    description:
      "An ITIL-aligned IT service management platform for support and ticketing workflows, built full-stack on the Next.js App Router with secure, session-based authentication.",
    img: "/servicedesk.png",
    img2:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    img3:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    gitClient: "https://github.com/gourabBD/servicedesk",
    gitServer: "",
    liveSite: "https://servicedesk-1-mk1g.onrender.com/login",
    frontEnd:
      "Next.js (App Router), React, Geist font, PostCSS",
    backEnd:
      "Next.js API routes, NextAuth.js authentication, MongoDB",
    highlights: [
      "Built a full-stack ITSM-style support platform using the Next.js App Router.",
      "Implemented secure authentication and session handling with NextAuth.js.",
      "Structured MongoDB-backed data models for tickets and users, deployed on Render.",
    ],
  },
];

export default projectsData;
