import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-300 bg-[#011627] bg-opacity-60 backdrop-blur-lg shadow-md z-10 ${
        isSticky ? "sticky top-0" : "absolute top-6 w-full"
      }`}
    >
      <nav className="flex justify-between items-center py-4 px-6 md:px-10 text-white">
        <Image src="/aoa_final_logo_red.svg" alt="logo" width={200} height={100} />

        {/* Menu button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {/* Toggle Icon */}
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg">
              About
            </Link>
          </li>
          <li>
            <a href="/services" className="text-lg">
              Technology
            </a>
          </li>
          <li>
            <a href="/contact" className="text-lg">
              Non-Tech Space
            </a>
          </li>
          <li>
            <a href="/contact" className="text-lg">
              Our IP&#39;s
            </a>
          </li>
          <li>
            <a href="/contact" className="text-lg">
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={() => {
            window.location.replace("/contact");
          }}
          className="hidden md:block w-48 lg:w-64 border-none bg-darkRed py-2 text-center rounded-full font-semibold"
        >
          Request a call back
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="absolute top-20 left-0 w-full bg-[#011627] bg-opacity-90 p-5 flex flex-col space-y-4 md:hidden">
            <li>
              <Link href="/" className="text-lg" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <a href="/services" className="text-lg" onClick={() => setMenuOpen(false)}>
                Technology
              </a>
            </li>
            <li>
              <a href="/contact" className="text-lg" onClick={() => setMenuOpen(false)}>
                Non-Tech Space
              </a>
            </li>
            <li>
              <a href="/contact" className="text-lg" onClick={() => setMenuOpen(false)}>
                Our IP&#39;s
              </a>
            </li>
            <li>
              <a href="/contact" className="text-lg" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  window.location.replace("/contact");
                }}
                className="w-full bg-darkRed py-2 text-center rounded-full font-semibold"
              >
                Request a call back
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
