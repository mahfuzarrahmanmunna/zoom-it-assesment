// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClasses =
    "transition duration-200 ease-in-out px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600";

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/20 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          <img
            src="https://i.ibb.co.com/23kWpy0M/Chat-GPT-Image-Sep-2-2025-12-41-09-AM.png"
            className="w-36"
            alt="ZoomMart Logo"
          />
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }: { isActive: boolean }) =>
                `${
                  isActive
                    ? "text-blue-600 font-semibold underline underline-offset-4"
                    : "text-gray-200"
                } ${linkClasses}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-100 transition"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/90 backdrop-blur-md shadow-sm ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }: { isActive: boolean }) =>
                `${
                  isActive
                    ? "text-blue-600 font-semibold underline underline-offset-4"
                    : "text-gray-800"
                } ${linkClasses}`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
