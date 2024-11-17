import React,{useState} from "react";
import Container from "../Container";
import Image from "next/image";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobileNumber: "",
    projectDetails: "",
    agree: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please agree to the Privacy Policy.");
      return;
    }

    // EmailJS configuration
    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const userID = "your_public_key";

    // emailjs
    //   .send(serviceID, templateID, formData, userID)
    //   .then(
    //     (response) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //       setStatus("Form submitted successfully!");
          
    //     },
    //     (error) => {
    //       console.log("FAILED...", error);
    //       setStatus("Failed to submit the form. Please try again.");
    //     }
    //   );
    setFormData({
      name: "",
      companyName: "",
      email: "",
      mobileNumber: "",
      projectDetails: "",
      agree: true,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col text-black justify-between"
    >
      <div className="capitalize text-white lg:text-6xl  text-4xl mb-10 font-light">
        please fill the contact form and we will connect with you
      </div>
      <input
        placeholder="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full mt-4 bg-white border-none px-4 py-3 placeholder:text-[#7E7E7E] focus:outline-none"
        required
      />
      <input
        placeholder="company name"
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        className="w-full mt-8 bg-white border-none px-4 py-3 placeholder:text-[#7E7E7E] focus:outline-none"
        required
      />
      <input
        placeholder="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full mt-8 bg-white border-none px-4 py-3 placeholder:text-[#7E7E7E] focus:outline-none"
        required
      />
      <input
        placeholder="mobile number"
        type="number"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        className="w-full mt-8 bg-white border-none px-4 py-3 placeholder:text-[#7E7E7E] focus:outline-none"
        required
      />
      <div className="mt-8">
        <label className="text-sm opacity-80 text-white">
          Some details about your project
        </label>
        <textarea
          rows={6}
          placeholder="delivery date, goal of your project and other details"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          className="w-full bg-white border-none px-4 py-3 placeholder:text-[#7E7E7E] focus:outline-none"
          required
        ></textarea>
      </div>
      <div className="mt-8 flex items-center gap-2">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="w-5 h-5 border-none"
        />
        <div className="text-sm text-white opacity-80">
          I agree with terms of Privacy Policy
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-white mt-8 border-none bg-darkRed py-3 text-center rounded-full font-semibold"
      >
        Get started today
      </button>
      {status && <div className="mt-4 text-white">{status}</div>}
    </form>
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
