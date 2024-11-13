import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

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

  const navLinks = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/technology", name: "Technology" },
    { link: "/nontechspace", name: "Non-Tech Space" },
    { link: "/ourip", name: "Our IP's" },
    { link: "/contact", name: "Contact" },
  ];

  const pathname = usePathname()
  console.log(pathname)
  return (
    <header
      className={`transition-all duration-300 bg-[#011627] bg-opacity-60 backdrop-blur-lg shadow-md z-10 ${
        isSticky ? "sticky top-0" : "absolute top-6 w-full"
      }`}
    >
      <nav className="flex justify-between items-center py-4 px-6 md:px-10 text-white">
        <Image
          src="/aoa_final_logo_red.svg"
          alt="logo"
          width={200}
          height={100}
        />

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
          {navLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link} className={pathname==item.link? "text-lg font-medium hover:text-darkRed text-darkRed": "text-lg font-medium hover:text-darkRed"}>
                  {item.name}
                </Link>
              </li>
            );
          })}
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
            {navLinks.map((item, index) => {
              return (
                <li>
                  <Link
                    href={item.link}
                    key={index}
                    className={pathname==item.link? "text-lg font-medium hover:text-darkRed text-darkRed": "text-lg font-medium hover:text-darkRed"}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
