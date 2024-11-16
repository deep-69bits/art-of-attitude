"use client";
import { Parallax } from "react-scroll-parallax";

export default function HeroSection() {
  const words = ["Innovate.", "Perform.", "Win.","Innovate.", "Perform.", "Win.","Innovate.", "Perform.", "Win.","Innovate.", "Perform."];

  return (
    <div className="relative h-screen bg-gray-900 text-white overflow-hidden">
      {/* Parallax Background */}
      <Parallax
        easing="easeInOut"
        opacity={[1, 0]}
        speed={-10}
        className="bg-cover bg-center h-full absolute w-full"
        style={{
          backgroundImage: "url('/home/hero.svg')",
        }}
      />

      {/* Sliding Text */}
      <div className="slider h-screen flex flex-col pb-10 justify-end">
        <div className="slide-track mt-80 text-[160px]">
          {/* Duplicate the words array twice to create a seamless loop */}
          {[...words, ...words].map((word, index) => (
            <span key={index} className="slide pb-10">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
