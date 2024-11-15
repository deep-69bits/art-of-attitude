"use client";
import React, { useState } from "react";
import Container from "../Container";

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M19.9997 3.33301C29.1997 3.33301 36.6663 10.7997 36.6663 19.9997C36.6663 29.1997 29.1997 36.6663 19.9997 36.6663C10.7997 36.6663 3.33301 29.1997 3.33301 19.9997C3.33301 10.7997 10.7997 3.33301 19.9997 3.33301ZM21.6663 19.9997V13.333H18.333V19.9997H13.333L19.9997 26.6663L26.6663 19.9997H21.6663Z"
        fill="#DC2447"
      />
    </svg>
  );
};

const FAQData = [
  {
    question: "Build IP’s",
    answer: [
      "Build new properties for your business requirements",
      "Fan engagement, Employee engagement, Monetization, Brand awareness.",
      "We ideate, build and operate custom properties to establish and supersede your objective "
    ]
  },
  {
    question: "Immersive + Interactive Tech ",
    answer: [
      "Craft mobile apps, metaverse,NFTs, customised video games, AR/VR",
      "Gamification",
      "On-site fan experience"
    ]
  },
  {
    question: "Sponsorship + Brand Integrations",
    answer: [
      "Build opportunities for brand integrations",
      "Provide more to your sponsor with engaged and ever increasing fan base ",
      "Consult teams / leagues on impactful new sponsorship opportunities",
      "Advise brands on value and opportunities in sponsorship in sports, e-sports"
    ]
  },
  {
    question: "Media Rights & Licensing",
    answer: [
      "Drive revenue via targeted media rights deals.",
      "Expand reach with exclusive content licensing.",
      "Boost fan engagement through strategic media partnerships."
    ]
  },
  {
    question: "Content Management & Production",
    answer: [
      "Create high-impact content for multi-platform engagement.",
      "Streamline production to deliver quality and consistency.",
      "Tailor content to boost fan connection and brand loyalty."
    ]
  },
  
];

const FAQSection = () => {
  const [question, setQuestion] = useState(-1);
  return (
    <Container>
      <h2 className="font-bold text-6xl capitalize">How do we do it?</h2>
      <p className="text-5xl font-light mt-4 leading-relaxed">
        Dedicated to leveraging cutting-edge technology and creative solutions
        to engage fans with their favourite sports in exciting and unique ways.
      </p>

      <div className="mt-20 flex flex-col gap-6">
        {FAQData.map((item, index) => {
          return (
            <div
            key={index}
              onClick={() => {
                if (index == question) {
                  setQuestion(-1);
                } else setQuestion(index);
              }}
              className="cursor-pointer "
            >
              <div className="text-5xl font-light mt-4 flex items-center justify-between">
                <span>{item.question}</span>
                <span className={question==index?"rotate-180":""}>
                  <Arrow />
                </span>
              </div>
              {question == index ? (
                <div className="text-4xl lg:w-[95%] pt-4 flex flex-col gap-4 w-full font-light mt-4  items-start justify-between">
                  {item.answer.map((it,ind)=>{
                    return <li className="decoration-none list-none" key={ind}>{it}</li>
                  })}
                </div>
              ) : null}
              <hr className="border-[0.5px] opacity-65 mt-4 border-darkRed text-darkRed bg-darkRed"></hr>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default FAQSection;
