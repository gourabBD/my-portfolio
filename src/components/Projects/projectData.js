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
    gitClient: "https://github.com/gourabBD/tuitionMe_Nextjs",
    gitServer: "",
    liveSite: "https://tuition-me-nextjs.vercel.app/",
    frontEnd:
      "Next.js 16 (App Router, Server Components), React 19, Bootstrap 5 / React-Bootstrap, react-hot-toast, react-icons, react-photo-view, deployed on Vercel",
    backEnd:
      "Next.js Route Handlers & Server Actions, Auth.js (NextAuth v5) with the MongoDB adapter, MongoDB (native driver, Atlas-hosted), bcryptjs password hashing, jose for JWTs, Zod schema validation, Stripe Checkout for payments",
    highlights: [
      "Rebuilt the original CRA client and Express server as a single full-stack Next.js App Router application.",
      "Implemented server-side content gating — paid course content is excluded via projection until enrollment is verified.",
      "Integrated Stripe Checkout with verify-on-return handling instead of relying on webhooks.",
      "Handled authentication with Auth.js (NextAuth v5) over the MongoDB adapter, with bcryptjs-hashed credentials.",
      "Validated all inbound payloads with Zod schemas shared between server actions and route handlers.",
    ],
  },
  {
    _id: "paperlite",
    title: "Paperlite",
    description:
      "An in-house approval management system for Radiant Pharmaceuticals, used across multiple departments to replace manual, paper-based approval workflows with structured digital requests, multi-step routing, and full status visibility.",
    img: "/paperlite-placeholder.svg",
    img2: "",
    img3: "",
    gitClient: "",
    gitServer: "",
    liveSite: "",
    frontEnd:
      "ASP.NET MVC (Razor views) for the internal web application UI",
    backEnd:
      "ASP.NET Web APIs, MSSQL-backed services, deployed on IIS and cloud infrastructure for company-wide access",
    highlights: [
      "Designed and built an approval management system adopted across multiple departments company-wide.",
      "Replaced manual, paper-based approval workflows with structured digital request submissions.",
      "Implemented multi-step approval routing across departments and roles, with live status tracking.",
      "Maintained an auditable record of every request and approval decision.",
      "Deployed and maintained the system on IIS and cloud infrastructure as a business-critical internal tool.",
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
