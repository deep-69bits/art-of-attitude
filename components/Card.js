import Image from "next/image";
import React from "react";

const Card = ({ image, title, subtitle ,description }) => {
  return (
    <div className="overflow">
      <Image className="w-full  object-cover" src={image} alt={title} width={400} height={400}  />
      <div className="p-6">
        <h2 className="font-light text-4xl mb-2">{title}</h2>
        <h3 className="my-4 text-darkRed">{subtitle}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
