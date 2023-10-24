import Image from "next/image";
import React from "react";

const Card = ({ emoji, title, text, color }) => {
  return (
    <div
      className="flex flex-col gap-2 p-4 rounded-lg col-span-1 h-full"
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
