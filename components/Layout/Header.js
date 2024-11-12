import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

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
      <nav className="flex justify-between items-center py-4 px-10 text-white">
        <Image
          src="/aoa_final_logo_red.svg"
          alt="logo"
          width={200}
          height={100}
        />
        <ul className="flex space-x-6">
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
        <button className="w-64 border-none bg-darkRed py-2 text-center rounded-full font-semibold">
        Request a call back
        </button>
      </nav>
    </header>
  );
}
