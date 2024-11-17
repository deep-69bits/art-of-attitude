import React from "react";
import Card from "../Card";
import Container from "../Container";

const TeamSection = () => {
  return (
    <Container>
      <h2 className="font-bold lg:text-6xl text-4xl capitalize my-10">
        expertise & experience
      </h2>
      <p className="lg:text-5xl text-3xl mt-6 font-light leading-relaxed">
        The founding team comes with years of experience in sports, technology,
        design in leadership position.
      </p>

      <div className="grid grid-flow-row lg:grid-cols-2 grid-cols-1 gap-8 mt-10 md:grid-cols-2">
        <Card
          image="/about/img1.svg"
          link={"https://linkedin.com/in/padamjitsandhu"}
          title="Padamjit Sandhu"
          subtitle="linkedin.com/in/padamjitsandhu"
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: `Accomplished Sports Management professional with over 28 years of work experience. Strong exposure across brand, marketing strategy, international & domestic alliances, sports federations, player management, leagues, projects & concepts, and P&L. As Director PGTI, Professional Golf Tour of India, credited with building, consolidating and growing domestic and international golf in India by over 500 percent.<br /> <br />Proven track record in strategic marketing and sponsorships, media planning and handling, public relations, creative brand & marketing concepts and special event formats & cross promotional activation’s with the ability and skill to provide creative, innovative and forward thinking leadership.`,
              }}
            />
          }
        />

        <Card
          image="/about/img2.svg"
          title="Gaurav Gupta"
          link={"https://linkedin.com/in/gaurav-gupta-21829213"}
          subtitle="linkedin.com/in/gaurav-gupta-21829213"
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: `Over 14 years of experience in business
operations, business development and overall
PnL. Driving growth opportunities and managing
strategic partnerships for the organisation,
while defining consumer journeys in an everevolving Fan Engagement with technology and
media broadcast ecosystem with a creative and
strategic inclination towards all aspects of a
business. <br/> <br/>
Have an in-depth understanding of media and
emerging tech, content and media rights across
sports, media and entertainment industries`,
              }}
            />
          }
        />
        {/* <Card
          image="/about/image (2).svg"
          title="Aman Bhadauria"
          subtitle="linkedin.com/in/amanbhadauria"
          description="Aman is a trained Architect and Industrial
Designer by educational background. He has
had entrepreneurial stints in the music industry (particularly indie music in India) prior to starting his professional career working as a Sr. UX Designer at Sprinklr. With hi... READ MORE"
        /> */}
      </div>
    </Container>
  );
};

export default TeamSection;
