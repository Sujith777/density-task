import { BsSunFill } from "react-icons/bs";
import React from "react";

const Ratings = () => {
  return (
    <div className="h-screen relative w-full">
      <div className="flex flex-col gap-16 mx-8 py-16 bg-blue-50 rounded-lg px-32">
        <div className="flex flex-col gap-2 text-center p-2">
          <p className="text-lg">
            Let your friends, family and coworkers (anonymously) rate your
            social skills.
          </p>
          <p className="text-4xl font-bold tracking-wider">
            Ever wondered what others think of you?
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center gap-2 text-orange-600 text-xl font-bold">
            <BsSunFill className="text-6xl text-orange-600" />
            --------------------------------
            <BsSunFill className="text-6xl text-orange-600" />
            --------------------------------
            <BsSunFill className="text-6xl text-orange-600" />
          </div>
          <div className="flex gap-4 justify-center items-center">
            <p className="text-sm text-center w-[30%]">
              Answer questions about your social skills.
            </p>
            <p className="text-sm text-center w-[30%]">
              Let anonymously answer the same questions about you.
            </p>
            <p className="text-sm text-center w-[30%]">
              Find out where you and others see things the same way - and where
              not.
            </p>
          </div>
        </div>
        <div className="bg-white relative flex items-center justify-center w-[40%] py-16 px-4 h-full mx-auto rounded-lg">
          <div className="rounded-full bg-blue-700 w-5 h-5" />
          --------
          <div className="rounded-full bg-blue-400 w-5 h-5" />
          ----------------
          <div className="rounded-full bg-orange-400 w-5 h-5" />
          ------------------------
          <div className="rounded-full bg-green-400 w-5 h-5" />
          <div className="absolute -left-8 top-4 rounded-lg bg-blue-700 py-2 px-4 font-semibold text-white">
            You
          </div>
          <div className="absolute left-28 bottom-4 rounded-lg bg-blue-400 py-2 px-4 font-semibold text-white">
            Anonymous-1
          </div>
          <div className="absolute right-24 top-4 rounded-lg bg-orange-400 py-2 px-4 font-semibold text-white">
            Anonymous-2
          </div>
          <div className="absolute -right-24 bottom-4 rounded-lg bg-green-400 py-2 px-4 font-semibold text-white">
            Anonymous-3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
