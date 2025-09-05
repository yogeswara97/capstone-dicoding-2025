"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FancyButton from "./ui/FancyButton";
import { Menu, X } from "lucide-react"; // <- lucide-react

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setScrolled(window.scrollY > 50);
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
  }, [pathname]);

  const bgClass =
    pathname === "/" ? (scrolled ? "bg-white/90 backdrop-blur shadow-md" : "bg-transparent") : "bg-white shadow-md";
  const textClass =
    pathname === "/" ? (scrolled ? "text-black" : "text-white") : "text-gray-800";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgClass}`}>
      <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className={`text-lg md:text-xl font-bold transition ${textClass}`}>
          PneumoCare
        </Link>

        {/* Desktop nav */}
        <nav className={`hidden md:flex gap-4 md:gap-6 text-sm md:text-base transition ${textClass}`}>
          <Link href="/" className="hover:text-blue-500 transition">Home</Link>
          <Link href="/articles" className="hover:text-blue-500 transition">Articles</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <FancyButton />
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-md focus:outline-none ${textClass}`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur shadow-md w-full absolute top-full left-0 transition-all">
          <nav className="flex flex-col gap-3 p-4">
            <Link href="/" className="hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/articles" className="hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>
              Articles
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
