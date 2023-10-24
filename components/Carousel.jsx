import { cardItems } from "@/utils/card-items";
import React from "react";
import Card from "./Card";

const Carousel = () => {
  return (
    <div className="w-full grid grid-cols-4 grid-flow-row justify-center items-center h-full relative gap-8">
      {cardItems.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          color={item.color}
          text={item.text}
          emoji={item.emoji}
        />
      ))}
    </div>
  );
};

export default Carousel;
