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
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
  },
  {
    question: "Immersive + Interactive Tech",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
  },
  {
    question: "Brand Integrations + Sponsorship",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
  },
  {
    question: "Content Management & Production",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
  },
  {
    question: "Media Rights & Licensing",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
  },
];

const FAQSection = () => {
  const [question, setQuestion] = useState(-1);
  return (
    <Container>
      <h2 className="font-bold text-6xl capitalize">How do we do it?</h2>
      <p className="text-5xl font-light mt-4">
        Dedicated to leveraging cutting-edge technology and creative solutions
        to engage fans with their favourite sports in exciting and unique ways.
      </p>

      <div className="mt-20">
        {FAQData.map((item, index) => {
          return (
            <div
            key={index}
              onClick={() => {
                if (index == question) {
                  setQuestion(-1);
                } else setQuestion(index);
              }}
              className="cursor-pointer"
            >
              <div className="text-5xl font-light mt-4 flex items-center justify-between">
                <span>{item.question}</span>
                <span className={question==index?"rotate-180":""}>
                  <Arrow />
                </span>
              </div>
              {question == index ? (
                <div className="text-4xl lg:w-[95%] w-full font-light mt-4 flex items-center justify-between">
                  {item.answer}
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
