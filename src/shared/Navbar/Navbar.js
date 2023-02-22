import React from "react";
import { Link } from "react-router-dom";
import sign from '../../Gourab_Roy_cocosign (1).png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100  rounded-lg  ">
    
      <div className="navbar-start ">
      <img className="w-auto h-auto hidden lg:block mx-2" src={sign} alt="" />
        <div className="dropdown lg:invisible">
        
          <label tabIndex={0} className="btn btn-ghost btn-circle">
         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
          <img className="w-auto h-auto" src={sign} alt="" />
          <li>
            <Link to={'/'}>Home</Link>
          </li>
           <li>
            <a href="/#aboutme"> About Me</a>
          </li>
            <li>
            <a href="/#projectsID"> Projects</a>
            </li>

            <li>
            <a href="/#contactMeID">Contact Me</a>
            </li>
            <li>
            <Link to={'/blogs'}>Blogs</Link>
          </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex mx-10 p-3">
        <ul className="menu menu-horizontal px-1">
        
        <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <a href="/#aboutme"> About Me</a>
          </li>
          <li>
            <a href="/#projectsID"> Projects</a>
          </li>

          <li>
            <a href="/#contactMeID">Contact Me</a>
          </li>
          <li>
            <Link to={'/blogs'}>Blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
