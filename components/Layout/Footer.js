import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
              <p className="font-medium  dark:text-white">Contact</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <div className="transition hover:opacity-75 dark:text-gray-200">
                    Ventures LLP 1804, Sector 33 D <br /> Chandigarh, India
                  </div>
                </li>

                <li>
                  <a
                    href="mailto:gg@artofattitude.com"
                    className="transition hover:opacity-75 dark:text-gray-200"
                  >
                    gg@artofattitude.com
                  </a>
                </li>

                <li>
                  <div className="transition hover:opacity-75 dark:text-gray-200">
                    +91 88604 26504
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium   dark:text-white">Expertise</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <div className="   transition hover:opacity-75 capitalize dark:text-gray-200">
                    design and development
                  </div>
                </li>{" "}
                <li>
                  <div className="   transition hover:opacity-75 capitalize dark:text-gray-200">
                    web 3.0
                  </div>
                </li>{" "}
                <li>
                  <div className="   transition hover:opacity-75 capitalize dark:text-gray-200">
                    Virtual in-match events
                  </div>
                </li>{" "}
                <li>
                  <div className="   transition hover:opacity-75 capitalize dark:text-gray-200">
                    immersive overlays
                  </div>
                </li>{" "}
                <li>
                  <div className="   transition hover:opacity-75 capitalize dark:text-gray-200">
                    vR experiences
                  </div>
                </li>{" "}
                <li>
                  <div className="   transition hover:opacity-75 capitalize dark:text-gray-200">
                    Immersive engagement
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium   dark:text-white">Pages</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="   transition hover:opacity-75 dark:text-gray-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="   transition hover:opacity-75 dark:text-gray-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* <div>
              <p className="font-medium   dark:text-white">Social Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="   transition hover:opacity-75 dark:text-gray-200"
                  >
                    Linkedin
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="   transition hover:opacity-75 dark:text-gray-200"
                  >
                    Twitter 
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="   transition hover:opacity-75 dark:text-gray-200"
                  >
                    Facebook
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="   transition hover:opacity-75 dark:text-gray-200"
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
            <span>
              <Dialog>
                <DialogTrigger>Privacy Policy</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-3xl">
                      Privacy Policy
                    </DialogTitle>
                    <DialogDescription>
                      <div className=" text-white p-2">
                        <p className="mb-4">
                          At <strong>Art of Attitude</strong> we your privacy is
                          a priority. This Privacy Policy explains how we
                          collect, use, and protect your information when you
                          visit our website.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                          1. Information We Collect
                        </h2>
                        <ul className="list-disc ml-6 mb-4">
                          <li>
                            Personal Information: Name, email address, phone
                            number, etc.
                          </li>
                          <li>
                            Non-Personal Information: IP address, browser type,
                            pages visited, etc.
                          </li>
                        </ul>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                          2. How We Use Your Information
                        </h2>
                        <p className="mb-4">
                          We use your information to provide, maintain, and
                          improve our services, respond to inquiries, and comply
                          with legal obligations.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                          3. Data Security
                        </h2>
                        <p className="mb-4">
                          We implement reasonable measures to protect your data.
                          However, no system is completely secure.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                          4. Contact Us
                        </h2>
                        <p>
                          If you have any questions, contact us at:
                          <br />
                          <strong>Email:</strong> contact@artofattitude.com
                          <br />
                          <strong>Phone:</strong> +1 234 567 890
                        </p>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </span>
            <span>
              <Dialog>
                <DialogTrigger> Terms & Conditions</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-3xl">
                    Terms and Conditions
                    </DialogTitle>
                    <DialogDescription>
                      <div className="text-white p-2">
                        <p className="mb-4">
                          Welcome to <strong>Art of Attitude</strong> we. By accessing our website, you agree
                          to these Terms and Conditions. If you disagree, please
                          do not use our services.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                          1. Use of the Site
                        </h2>
                        <ul className="list-disc ml-6 mb-4">
                          <li>
                            You must be at least 18 years old or have parental
                            consent to use the Site.
                          </li>
                          <li>
                            Prohibited activities include hacking, fraud, and
                            violating laws.
                          </li>
                        </ul>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                          2. Intellectual Property
                        </h2>
                        <p className="mb-4">
                          All content, including text, images, and software, is
                          owned by <strong>Art of Attitude</strong>.
                          Reproduction or redistribution is prohibited without
                          our consent.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                          3. Limitation of Liability
                        </h2>
                        <p className="mb-4">
                          We are not liable for any damages resulting from the
                          use of the Site, to the fullest extent permitted by
                          law.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                          4. Contact Us
                        </h2>
                        <p>
                          If you have any questions, contact us at:
                          <br />
                          <strong>Email:</strong> contact@artofattitude.com
                          <br />
                          <strong>Phone:</strong> +1 234 567 890
                        </p>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>{" "}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
