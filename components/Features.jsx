import React from "react";
import Carousel from "./Carousel";

const Features = () => {
  return (
    <div className="w-full flex flex-col gap-16 relative mt-20 py-16 p-32">
      <div className="flex gap-8">
        <div className="flex basis-1/3">
          <p className="text-2xl font-bold">EQ beats IQ</p>
        </div>
        <div className="flex basis-1/3 w-[60%]">
          <p className="text-lg text-gray-700">
            People with high emotional intelligence(EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className="flex basis-1/3">
          <p className="text-lg text-gray-700">
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29k a year.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-10 gap-4">
        <h2 className="text-4xl font-bold">Does this sound familiar...</h2>
        <Carousel />
      </div>
    </div>
  );
};

export default Features;
