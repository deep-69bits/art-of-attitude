"use client";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function HeroSection() {
  return (
    <div>
      {/* Parallax Background */}
      <Parallax
       easing="easeInOut"
        opacity={[1, 0]}
        speed={-10} // Adjust speed for the parallax effect
        className="bg-cover bg-center h-screen absolute  w-full"
        style={{
          backgroundImage: "url('/home/hero.svg')",
        }}
      />
       
      {/* Content Positioned at the Bottom */}
      <div  className="h-screen  flex items-end justify-center relative">
        <h1 className="font-bold lg:text-9xl text-4xl  capitalize text-center translate-y-[-100px]">
          Innovate. Perform. Win.
        </h1>
      </div>
    </div>
  );
}
