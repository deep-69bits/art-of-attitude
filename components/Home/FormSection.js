import React from "react";
import Container from "../Container";
import Image from "next/image";

export const Form = () => {
  return (
    <div className="flex flex-col text-black justify-between">
      <div className="capitalize text-white text-6xl mb-10 font-light">
        please fill the form and we will contact you
      </div>
      <input
        placeholder="name"
        type="text"
        className="w-full mt-4  bg-white border-none px-4 py-3 placeholder:text-[#7E7E7E] focus:outline-none "
      />
      <input
        placeholder="company name"
        type="text"
        className="w-full mt-8 bg-white border-none px-4 py-3 placeholder:text-[#7E7E7E] focus:outline-none "
      />
      <input
        placeholder="email"
        type="email"
        className="w-full mt-8 bg-white border-none px-4 py-3 placeholder:text-[#7E7E7E] focus:outline-none "
      />
      <input
        placeholder="mobile number"
        type="number"
        className="w-full mt-8 bg-white border-none px-4 py-3 placeholder:text-[#7E7E7E] focus:outline-none "
      />
      <div className="mt-8">
        <label className="text-sm opacity-80">
          Some details about your project
        </label>
        <textarea
          rows={6}
          placeholder="delivery date, goal of your project and other details "
          className="w-full  bg-white border-none px-4 py-3 placeholder:text-[#7E7E7E] focus:outline-none "
        ></textarea>
      </div>
      <div className="mt-8 flex items-center gap-2">
        <input type="checkbox" className="w-5 h-5 border-none"></input>
        <div className="text-sm opacity-80">
          I agree with terms of Privacy Policy
        </div>
      </div>
      <button className="w-full  mt-8 border-none bg-darkRed py-3 text-center rounded-full font-semibold">
        Get started today
      </button>
    </div>
  );
};
const FormSection = () => {
  return (
    <Container>
      <div className="grid grid-flow-row lg:grid-cols-2 gap-10 grid-cols-1">
        <div>
          <Image
            alt="form image"
            className="w-[100%]"
            width={400}
            height={400}
            src={"/home/formImage.svg"}
          />
        </div>
       <Form/>
      </div>
    </Container>
  );
};

export default FormSection;
