import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <h1 className="text-2xl font-bold text-gray-800">E-Commerce</h1>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1"
                    : "hover:text-indigo-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1"
                    : "hover:text-indigo-600"
                }`
              }
            >
              Product
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1"
                    : "hover:text-indigo-600"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1"
                    : "hover:text-indigo-600"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden sm:block px-5 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition cursor-pointer"
            >
              Login
            </Link>
            <Link
              to="#"
              className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
