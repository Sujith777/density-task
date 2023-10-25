import React from "react";
import Carousel from "./Carousel";

const Features = () => {
  return (
    <div className="w-full h-screen mb-10 flex flex-col gap-32 relative py-16 px-32">
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
      <div className="flex flex-col gap-8">
        <h2 className="text-6xl font-bold my-5">Does this sound familiar...</h2>
        <Carousel />
      </div>
    </div>
  );
};

export default Features;
