import Image from "next/image";
import React from "react";

const Card = ({ image, title, subtitle, link, description }) => {
  return (
    <div className="overflow">
      <Image
        className="w-full object-cover"
        src={image}
        alt={title}
        width={400}
        height={400}
      />
      <div className="py-6">
        <h2 className="font-light text-4xl mb-2">{title}</h2>
        {link ? (
          <a href={link} className="my-4 block text-darkRed">
            {subtitle}
          </a>
        ) : (
          <h3 className="my-4 text-darkRed">{subtitle}</h3>
        )}
        <div className="text-lg">{description}</div>
      </div>
    </div>
  );
};

export default Card;
