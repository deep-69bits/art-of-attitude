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
        className="bg-cover bg-center lg:block hidden h-full absolute w-full"
        style={{
          backgroundImage: "url('/home/hero.svg')",
        }}
      />
      <div 
       className="bg-cover bg-center block lg:hidden h-full absolute w-full"
       style={{
         backgroundImage: "url('/home/hero.svg')",
       }}>

      </div>

      {/* Sliding Text */}
      <div className="slider h-screen flex flex-col pb-10 justify-end">
        <div className="slide-track mt-80 lg:text-[160px] text-[80px]">
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
