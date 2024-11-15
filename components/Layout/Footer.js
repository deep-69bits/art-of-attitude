import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-darkBlue">
      <div className="mx-auto  space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-10">
        <hr className="bg-darkRed text-darkRed border-[1px] border-darkRed"></hr>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600 dark:text-teal-300">
              <Image
                src="/aoa_final_logo_red.svg"
                alt="logo"
                width={200}
                height={100}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Contact
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <div className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    Ventures LLP 1804, Sector 33 D <br /> Chandigarh, India
                  </div>
                </li>

                <li>
                  <a
                    href="mailto:gg@artofattitude.com"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    gg@artofattitude.com
                  </a>
                </li>

                <li>
                  <div className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                    +91 88604 26504
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                Expertise
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <div className="text-gray-700 transition hover:opacity-75 capitalize dark:text-gray-200">
                    design and development
                  </div>
                </li>{" "}
                <li>
                  <div className="text-gray-700 transition hover:opacity-75 capitalize dark:text-gray-200">
                    web 3.0
                  </div>
                </li>{" "}
                <li>
                  <div className="text-gray-700 transition hover:opacity-75 capitalize dark:text-gray-200">
                    Virtual in-match events
                  </div>
                </li>{" "}
                <li>
                  <div className="text-gray-700 transition hover:opacity-75 capitalize dark:text-gray-200">
                    immersive overlays
                  </div>
                </li>{" "}
                <li>
                  <div className="text-gray-700 transition hover:opacity-75 capitalize dark:text-gray-200">
                    vR experiences
                  </div>
                </li>{" "}
                <li>
                  <div className="text-gray-700 transition hover:opacity-75 capitalize dark:text-gray-200">
                    Immersive engagement
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Pages</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div>
              <p className="font-medium text-gray-900 dark:text-white">Social Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Linkedin
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Twitter 
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Facebook
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Instagram
                  </Link>
                </li>

              </ul>
            </div>*/}
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between text-sm items-center">
          <p className="text-white">All rights reserved 2024 © ArtOfAttitude</p>
          <p className="flex items-center gap-4 mt-4 lg:mt-0">
            <span> Privacy Policy </span>
            <span> Terms & Conditions </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
