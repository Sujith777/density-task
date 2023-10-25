import Image from "next/image";
import React from "react";

const Card = ({ emoji, title, text, color }) => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center gap-2 p-4 rounded-lg h-full"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <span role="img" className="text-xl">
        {String.fromCodePoint([emoji])}
      </span>
      <span className="font-bold text-md">{title}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default Card;
