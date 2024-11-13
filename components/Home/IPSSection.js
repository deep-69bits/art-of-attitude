import React from "react";
import Container from "../Container";
import Card from "../Card";
import { Parallax } from "react-scroll-parallax";

const ParallaxContainer = ({ children }) => {
  return (
    <div className="lg:my-40">
      <Parallax
        easing="easeInOut"
        className="hidden lg:block"
        shouldAlwaysCompleteAnimation={true}
        translateY={["-100px", "100px"]}
        opacity={[0, 1]}
        speed={-15}
      >
        {children}
      </Parallax>{" "}
      <div className="block lg:hidden">{children}</div>
    </div>
  );
};
const IPSSection = () => {
  return (
    <Container>
      <h2 className="font-bold text-6xl">Our IPs</h2>
      <p className="text-5xl font-light mt-4">
        See some the best sports IPs that we have delivered.
      </p>

      <div className="grid grid-flow-row lg:grid-cols-2 grid-cols-1 gap-8 mt-8">
        <ParallaxContainer>
          <Card
            image="/home/inverse_cricket.svg"
            title="Invrse Cricket"
            subtitle="VR Cricket Platform"
            description="A VR cricket experience focused on authenticity. Face off in the virtual pitch where you’ll bat, bowl, and run your way to the top of the cricket world."
          />
        </ParallaxContainer>
        <ParallaxContainer>
          <Card
            image="/home/gclverse.svg"
            title="GCLVerse"
            subtitle="Custom Metaverse Platform"
            description="FIDE and Tech Mahindra have joined hands to promote the game of chess through interactive technology-enabled platforms by leveraging next-gen technologies."
          />
        </ParallaxContainer>
      </div>
      <hr className="border-[0.5px] opacity-65 mt-4 border-darkRed text-darkRed bg-darkRed"></hr>
    </Container>
  );
};

export default IPSSection;
