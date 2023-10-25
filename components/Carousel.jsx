import { cardItems } from "@/utils/card-items";
import React from "react";
import Card from "./Card";

const Carousel = () => {
  return (
    <div className="w-full px-12 grid auto-cols-[minmax(360px,_1fr)] grid-cols-[minmax(360px-4rem,_1fr)] grid-flow-col overflow-x-auto items-center h-[250px] relative gap-8">
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
