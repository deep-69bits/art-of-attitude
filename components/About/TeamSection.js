import React from "react";
import Card from "../Card";
import Container from "../Container";

const TeamSection = () => {
  return (
    <Container>
      <h2 className="font-bold text-6xl capitalize">expertise & experience</h2>
      <p className="text-5xl mt-6 font-light">
        Founding team comes with diverse experience in playing, managing some of
        the biggest events across the world!
      </p>

      <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-8 mt-10 md:grid-cols-2">
        <Card
          image="/about/image.svg"
          title="Padamjit Sandhu"
          subtitle="linkedin.com/in/padamjitsandhu"
          description="Accomplished Sports Management professional with over 28 years of work experience. Strong exposure across brand, marketing, strategy, international & domestic alliances, sports federations, player management, leagues, projects &... READ MORE"
        />
        <Card
          image="/about/image (1).svg"
          title="Gaurav Gupta"
          subtitle="linkedin.com/in/gaurav-gupta-21829213"
          description="Over 14 years of experience in business operations, business development and overall PnL. Driving growth opportunities and managing strategic partnerships for the organisation, while defining consumer journeys in an ever-evolving Fan ... READ MORE"
        />
        <Card
          image="/about/image (2).svg"
          title="Aman Bhadauria"
          subtitle="linkedin.com/in/amanbhadauria"
          description="Aman is a trained Architect and Industrial
Designer by educational background. He has
had entrepreneurial stints in the music industry (particularly indie music in India) prior to starting his professional career working as a Sr. UX Designer at Sprinklr. With hi... READ MORE"
        />
      </div>
    </Container>
  );
};

export default TeamSection;
