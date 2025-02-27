
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPhoneTooltipOpen, setIsPhoneTooltipOpen] = useState(false);

  return (
    <nav className={`sticky top-0 w-full bg-white shadow-md p-4 transition-all duration-300 ${isScrolled ? "bg-white" : "bg-[#044f36]"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-800">Better</div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/about-us" className="hover:text-blue-600">About Us</Link></li>
          <li><Link href="/starter" className="hover:text-blue-600">Start</Link></li>
          <li><Link href="/mortage-calc" className="hover:text-blue-600">Mortgage Calculator</Link></li>
          <li><Link href="/better-plus" className="hover:text-blue-600">Better+</Link></li>
        </ul>

        {/* Right Section - Phone Icon & Sign In */}
        <div className="hidden md:flex items-center gap-6">
          <div
            className="relative flex items-center justify-center w-10 h-10 border rounded-full cursor-pointer transition-all duration-300 text-gray-700 hover:bg-gray-200"
            onMouseEnter={() => setIsPhoneTooltipOpen(true)}
            onMouseLeave={() => setIsPhoneTooltipOpen(false)}
          >
            <FaPhone className="text-lg" />
            {isPhoneTooltipOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-12 right-[-20px] bg-white text-gray-800 text-sm shadow-lg rounded-lg py-2 px-4 whitespace-nowrap"
              >
                Call us: <a href="tel:4155238837" className="text-blue-600 underline">415-523-8837</a>
              </motion.div>
            )}
          </div>
          <button className="text-gray-800 hover:text-blue-600">Sign in</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
            Continue
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden mt-2 p-4 bg-white shadow-md ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-2 text-gray-700">
          <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link href="/about-us" className="hover:text-blue-600">About Us</Link></li>
          <li><Link href="/starter" className="hover:text-blue-600">Start</Link></li>
          <li><Link href="/mortage-calc" className="hover:text-blue-600">Mortgage Calculator</Link></li>
          <li><Link href="/better-plus" className="hover:text-blue-600">Better+</Link></li>
        </ul>
        <div className="mt-4 flex flex-col gap-2">
          <button className="text-gray-800 hover:text-blue-600">Sign in</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">Continue</button>
        </div>
      </div>
    </nav>
  );
}