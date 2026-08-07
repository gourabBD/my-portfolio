const projectsData = [
  {
    _id: "reseller",
    title: "Reseller Marketplace",
    description:
      "A three-panel marketplace for buying and selling used mobile phones, with dedicated Buyer, Seller, and Admin experiences covering listings, wishlists, order tracking, and platform-wide oversight.",
    img: "/reseller.png",
    img2: "",
    img3: "",
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
    img2: "",
    img3: "",
    gitClient: "https://github.com/gourabBD/the-lecturer-client",
    gitServer: "https://github.com/gourabBD/the-lecturer-server",
    liveSite: "https://the-lecturer-3d2e4.firebaseapp.com/",
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
    img2: "",
    img3: "",
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
  {
    _id: "tuition-me",
    title: "TuitionMe",
    description:
      "A modern, Udemy-style course marketplace where students can browse tutoring services, read verified reviews, and enroll — and instructors can list their own courses.",
    img: "/tuitionme.png",
    img2: "",
    img3: "",
    gitClient: "https://github.com/gourabBD/tuition-me-client",
    gitServer: "https://github.com/gourabBD/tuition-me-server",
    liveSite: "https://tuition-me.firebaseapp.com/",
    frontEnd:
      "React 18, React Router v6.4 (data routers with loaders & errorElement), Firebase Authentication, Bootstrap 5 / React-Bootstrap, react-hot-toast, a custom light/dark theme system, deployed on Firebase Hosting",
    backEnd:
      "Node.js, Express 4, MongoDB (native driver, Atlas-hosted), Stripe Checkout for payments, Helmet, express-rate-limit, Morgan, CORS, deployed as serverless functions on Vercel",
    highlights: [
      "Built a lazy, memoized MongoDB connection tuned for serverless cold starts.",
      "Implemented server-side content gating — paid course content is excluded via projection until enrollment is verified.",
      "Integrated Stripe Checkout with verify-on-return handling instead of relying on webhooks.",
      "Built a client-side fetch wrapper with timeout and automatic retry on transient network failures.",
    ],
  },
  {
    _id: "radius",
    title: "Radius",
    description:
      "An internal utility suite for day-to-day office operations — meeting room reservations, a company address book, meal management, and task tracking — built to simplify everyday workflows across the business.",
    img: "/radius-placeholder.svg",
    img2: "",
    img3: "",
    gitClient: "",
    gitServer: "",
    liveSite: "",
    frontEnd:
      "ASP.NET MVC (Razor views) for the internal web application UI",
    backEnd:
      "ASP.NET Web APIs, MSSQL-backed services, deployed on IIS for internal company access",
    highlights: [
      "Built a meeting room reservation module to manage shared space bookings company-wide.",
      "Delivered a company-wide address book directory of people and departments.",
      "Added meal management for daily meal planning and headcount tracking.",
      "Built a task tracker for assigning, tracking, and closing day-to-day team tasks.",
      "Built with ASP.NET — both REST APIs and the MVC web application.",
    ],
  },
];

export default projectsData;
