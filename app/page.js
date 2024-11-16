"use client";
import Container from "@/components/Container";
import HeroSection from "@/components/Home/heroSection";
import Layout from "@/components/Layout/Layout";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import FAQSection from "@/components/Home/FAQSection";
import FormSection from "@/components/Home/FormSection";
import IPSSection from "@/components/Home/IPSSection";
import { Fade } from "react-awesome-reveal";

const TextReveal = ({ children }) => (
  <Fade
    direction="up"
    triggerOnce
    fraction={1} // The animation will trigger when 50% of the element is in view
    duration={2000} // Duration of the animation in milliseconds
    damping={0.4} // Optional: Adds a slight delay for a cascade effect
  >
    {children}
  </Fade>
);

const ParallaxContainer = ({ children }) => {
  return (
    <div className="">
      <Parallax
        easing="easeInOut"
        className="hidden lg:block"
        shouldAlwaysCompleteAnimation={true}
        opacity={[1, 0]}
        speed={-10}
      >
        {children}
      </Parallax>
    </div>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setIsVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Layout>
      <HeroSection />

      <Container>
        <h2 className="font-medium italic text-2xl capitalize">
          Creating magic through tech and community!
        </h2>
        <p className="lg:text-6xl text-3xl mt-6 font-light leading-relaxed">
          We consult sports and entertainment companies and make them win by
          creating IP’s, both online and offline. From strategic consulting to
          creating immersive fan experiences, we design tailored solutions that
          drive growth and set new standards across the industry.
        </p>
      </Container>

      <ParallaxContainer>
        <Image
          src={"/home/boxing.svg"}
          alt="Parallax Effect"
          className="w-full"
          width={800}
          height={200}
        />
      </ParallaxContainer>

      <Image
          src={"/home/Rectangle 21.svg"}
          alt="Parallax Effect"
          className="w-full lg:hidden block"
          width={800}
          height={200}
        />

      <Container>
        <TextReveal>
          <h2 className="font-bold lg:text-6xl text-4xl leading-relaxed">
            Expand. Engage.{" "}
          </h2>
        </TextReveal>

        <TextReveal>
          <p className="lg:text-6xl text-3xl font-light mt-4 leading-relaxed">
            Engage with fans with unique IP’s using sports, e-sports,
            gamification, content, celebrities, collectibles.
          </p>

          <br />

          <p className="lg:text-6xl text-3xl font-light">Collect and analyse fan data.</p>
        </TextReveal>
      </Container>

      <ParallaxContainer>
        <Image
          src={"/home/golf.svg"}
          alt="boxing ring"
          width={400}
          height={400}
          className="w-full mb-16" // Add margin to ensure separation
        />
      </ParallaxContainer>

      <Image
          src={"/home/Rectangle 24.svg"}
          alt="Parallax Effect"
          className="w-full lg:hidden block"
          width={800}
          height={200}
        />

      <Container>
        <TextReveal>
          <h2 className="font-bold lg:text-6xl text-4xl">Deliver Brand goals</h2>
        </TextReveal>
        <TextReveal>
          <p className="lg:text-6xl text-3xl font-light mt-4">
            Establish new media touch points. <br /> <br />
            Build new interactive and immersive tech. <br /> <br />
            Storytelling + brand narrative.
          </p>
        </TextReveal>
      </Container>

      <ParallaxContainer>
        <Image
          src={"/home/basket.svg"}
          alt="boxing ring"
          width={400}
          height={400}
          className="w-full h-screen mb-16" // Add margin to ensure separation
        />
      </ParallaxContainer>

      <Image
          src={"/home/Rectangle 23.svg"}
          alt="Parallax Effect"
          className="w-full lg:hidden block"
          width={800}
          height={200}
        />

      <Container>
        <h2 className="font-bold lg:text-6xl text-4xl">Deliver Business Goals</h2>
        <p className="lg:text-6xl text-3xl font-light mt-4 ">
          Build new opportunities to monetise.
          <br /> <br />
          Sponsorships, Brand integrations, Media Rights.
        </p>

        <div className="border-[1px] border-darkRed lg:p-10 p-4 lg:mb-40 mb-10 mt-20 rounded-lg">
          <h2 className="font-bold lg:text-6xl text-3xl">Better Together</h2>
          <div className="grid grid-flow-row grid-cols-3 lg:gap-6 gap-1 mt-12">
            {[...Array(9).keys()].map((i) => {
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate={"visible"}
                  variants={revealVariants}
                  className="overflow-hidden"
                >
                  <TextReveal>
                    <Image
                      src={`/partners/AOA- home ${i + 3}.svg`}
                      alt={`partner ${i + 3}`}
                      width={300}
                      height={300}
                      className="w-full"
                    />
                  </TextReveal>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>

      <ParallaxContainer>
        <Image
          src={"/home/helmets.svg"}
          alt="boxing ring"
          width={400}
          height={400}
          className="w-full mb-16" // Add margin to ensure separation
        />
      </ParallaxContainer>

      <Image
          src={"/home/Rectangle 25.svg"}
          alt="Parallax Effect"
          className="w-full lg:hidden block"
          width={800}
          height={200}
        />

      <FAQSection />

      <ParallaxContainer>
        <Image
          src={"/home/person.svg"}
          alt="boxing ring"
          width={400}
          height={400}
          className="w-full mb-16" // Add margin to ensure separation
        />
      </ParallaxContainer>


      <Image
          src={"/home/Rectangle 26.svg"}
          alt="Parallax Effect"
          className="w-full lg:hidden block"
          width={800}
          height={200}
        />

      <IPSSection />
      <FormSection />
    </Layout>
  );
};

export default Home;
