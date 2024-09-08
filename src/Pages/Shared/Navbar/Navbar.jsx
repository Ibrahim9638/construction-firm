import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/Logo of Mallika Group.jpg';

const Navbar = () => {
  const navLink = <>
  <NavLink to='/'><li><a>Home</a></li></NavLink>
  <NavLink to='/profile'><li><a>ProfileUpdate</a></li></NavLink>
  </>

  return (
    <div className="navbar shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-semibold"
          >
            {navLink}
           
          </ul>
        </div>
        <img className="w-[50px] h-[50px] rounded-full" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {navLink}
          
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login'><button className="btn btn-outline font-bold">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
