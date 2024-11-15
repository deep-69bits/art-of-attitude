"use client";
import Container from "@/components/Container";
import { Form } from "@/components/Home/FormSection";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Layout>
      <Container>
        <div className="grid grid-flow-row lg:grid-cols-2 grid-cols-1 mt-20 gap-10">
          <div>
            <div className="font leading-[5rem] text-6xl capitalize">
              Get in touch <br /> with us & <br />{" "}
              <span className="text-darkRed">
                we will get <br /> you started
              </span>
            </div>

            <div className="flex flex-col items-start mt-8 gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/contact/mail-fill.svg"
                  width={40}
                  height={40}
                  alt="building fill"
                />
                <div className="text-2xl">
                  <a
                    href="mailto:gg@artofattitude.com"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    gg@artofattitude.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <Image
                  src="/contact/mobile.svg"
                  className="translate-x-2"
                  width={20}
                  height={30}
                  alt="building fill"
                />
                <div className="text-2xl">+91 88604 26504</div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/contact/building-fill.svg"
                  width={40}
                  height={40}
                  alt="building fill"
                />
                <div className="text-2xl">
                  Ventures LLP 1804, Sector 33 D <br /> Chandigarh, India
                </div>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </Container>
    </Layout>
  );
};

export default page;
