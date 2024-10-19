import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="p-4 bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">
      <Link 
        to="/" 
        className="text-2xl font-bold text-white hover:text-black transition duration-300" // White by default, black on hover
      >
        <span>APNAMAT</span>
      </Link>

      <div className="flex items-center justify-between lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-black transition duration-300 focus:outline-none" // White by default, black on hover
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div className={`flex-col lg:flex lg:flex-row lg:items-center ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-[#FF9933] font-bold" : "text-white font-bold"} text-lg mr-5 hover:text-black transition duration-300` // White by default, black on hover
          }
        >
          ABOUT
        </NavLink>
        {/* Add more links here if needed */}
      </div>
    </Navbar>
  );
}
