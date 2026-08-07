import React from "react";
import { Link } from "react-router-dom";
import sign from '../../signature  .png';

const Navbar = () => {
  return (
    <header className="navbar sticky top-0 z-50 border-b border-slate-800/60 bg-[#020617]/95 shadow-sm backdrop-blur-lg px-4 py-4">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-3">
          <img className="h-12 w-auto" src={sign} alt="Gourab Roy signature" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-slate-200">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/#aboutme">About Me</a>
          </li>
          <li>
            <a href="/#experienceID">Experience</a>
          </li>
          <li>
            <a href="/#projectsID">Projects</a>
          </li>
          <li>
            <a href="/#contactMeID">Contact</a>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end lg:hidden">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-square btn-ghost text-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <ul className="dropdown-content menu rounded-box mt-3 w-52 bg-[#020617] p-3 shadow-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#aboutme">About Me</a>
            </li>
            <li>
              <a href="/#projectsID">Projects</a>
            </li>
            <li>
              <a href="/#contactMeID">Contact</a>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </details>
      </div>
    </header>
  );
};

export default Navbar;
