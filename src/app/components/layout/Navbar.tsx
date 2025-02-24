"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";


interface NavbarProps {
  links: { name: string; href: string }[];
  resumeUrl: string;
}

const Navbar: React.FC<NavbarProps> = ({ links, resumeUrl }) => {
  const [scrolled, setScrolled] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll percentage (0 to 1) and limit max opacity to 0.95
      const scrollTop = window.scrollY;
      const maxScroll = 300; // Adjust this based on how fast you want the effect
      const opacity = Math.min(scrollTop / maxScroll, 0.95);
      setScrolled(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 transition-all"
      style={{
        backgroundColor: `rgba(40, 40, 40, ${scrolled})`, // Adjust based on your color scheme
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-[var(--text-color)] text-2xl font-semibold">Suraj Sharma</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="text-white bg-[#282828] px-4 py-2 rounded-md 
              hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer">
                {link.name}
              </span>
            </Link>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-yellow-500 text-yellow-500 font-semibold rounded-lg 
            bg-[#282828] hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
       
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-2/3 bg-[#1E1E1E] p-6 transition-transform">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-white">
            <HiOutlineX size={28} />
          </button>
          <div className="mt-12 flex flex-col space-y-6">
            {links.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)}>
                <span className="text-white bg-[#282828] px-6 py-3 rounded-md 
                hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer block">
                  {link.name}
                </span>
              </Link>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg 
              bg-[#282828] hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg block"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
