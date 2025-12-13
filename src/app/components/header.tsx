"use client";
import React, { useState } from "react";
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-teal-700 tracking-tight">
          Mary Adhiambo
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-gray-600 font-medium text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-teal-600 hover:underline underline-offset-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-teal-600 hover:underline underline-offset-4"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#samples"
                className="hover:text-teal-600 hover:underline underline-offset-4"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="px-4 py-6 space-y-4 text-gray-700 font-medium">
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="block hover:text-teal-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="block hover:text-teal-600"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#samples"
                onClick={() => setOpen(false)}
                className="block hover:text-teal-600"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
