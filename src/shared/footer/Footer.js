import React from "react";
import { BsGithub, BsLinkedin, BsBehance } from "react-icons/bs";
import { Link } from "react-router-dom";
import sign from "../../signature  .png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/70 bg-[#020617] px-6 py-12 text-slate-300 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <img className="h-10 w-auto opacity-90" src={sign} alt="Gourab Roy signature" />
          <p className="text-sm text-slate-400">
            Gourab Roy — Software Developer.
            <br />
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <Link to="/" className="transition hover:text-primary">
            Home
          </Link>
          <a href="/#aboutme" className="transition hover:text-primary">
            About
          </a>
          <a href="/#projectsID" className="transition hover:text-primary">
            Projects
          </a>
          <a href="/#contactMeID" className="transition hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/gourab-roy-369ab5179/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 text-slate-300 transition hover:border-primary hover:text-primary"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/gourabBD"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 text-slate-300 transition hover:border-primary hover:text-primary"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.behance.net/gourabroy"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 text-slate-300 transition hover:border-primary hover:text-primary"
          >
            <BsBehance />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
