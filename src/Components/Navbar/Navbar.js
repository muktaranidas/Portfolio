import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
        <a href="#projects">Projects</a>
      </li>
      <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
        <a href="#skills">Skills</a>
        {/* <Link to="/about">Skills</Link> */}
      </li>
      <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
        <a href="#about">About</a>
        {/* <Link to="/about">About</Link> */}
      </li>
      <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
        {/* <a href="#blog">Blog</a> */}
        <Link to="/blog">Blogs</Link>
      </li>
      <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
        <a href="#contact">Contact</a>
        {/* <Link to="/contact">Contact Us</Link> */}
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar flex justify-between text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Portfolio
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
      >
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
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
