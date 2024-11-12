"use client";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function HeroSection() {
  const words = ["Innovate.", "Perform.", "Win."];

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: i * 0.5 },
    }),
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
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
      <div className="h-screen  flex items-end justify-center relative">
        <motion.h1
          className="font-bold lg:text-9xl text-4xl capitalize text-center translate-y-[-100px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2" // Adjust spacing between words as needed
              variants={wordAnimation}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
}
