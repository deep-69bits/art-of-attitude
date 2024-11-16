"use client";
import TeamSection from "@/components/About/TeamSection";
import Layout from "@/components/Layout/Layout";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Container from "@/components/Container";

const ParallaxContainer = ({ children }) => {
  return (
    <div className="mt-20 lg:block hidden">
      <Parallax
        easing="easeInOut"
        shouldAlwaysCompleteAnimation={true}
        translateY={["-100px", "100px"]}
        opacity={[1, 0]}
        speed={-15}
      >
        {children}
      </Parallax>
    </div>
  );
};
const page = () => {
  return (
    <Layout>
      <ParallaxContainer>
        <Image
          src={"/about/ground.svg"}
          alt="Parallax Effect"
          className="w-full"
          width={800}
          height={200}
        />
      </ParallaxContainer>
      <Image
        src={"/about/Rectangle 27.svg"}
        alt="Parallax Effect"
        className="w-full lg:hidden block"
        width={800}
        height={200}
      />
      <Container>
        <h2 className="font-bold lg:text-6xl text-4xl capitalize">about us</h2>
        <p className="lg:text-5xl text-3xl mt-6 font-light mb-8 leading-relaxed">
          We are boutique agency that works at intersection of technology,
          sports, entertainment, monetisation. AoA works with talent, IP owners
          to build narrative and immersive experiences around popular culture.
        </p>
      </Container>
      <ParallaxContainer>
        <Image
          src={"/about/football.svg"}
          alt="Parallax Effect"
          className="w-full"
          width={800}
          height={200}
        />
      </ParallaxContainer>
      <Image
        src={"/about/Rectangle 28.svg"}
        alt="Parallax Effect"
        className="w-full lg:hidden block"
        width={800}
        height={200}
      />
      <TeamSection />
    </Layout>
  );
};

export default page;
