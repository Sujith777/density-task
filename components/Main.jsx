import Image from "next/image";
import React from "react";
import { FaApple, FaStar } from "react-icons/fa";

const Main = () => {
  return (
    <div className="relative flex items-center mx-8 justify-between bg-[url('https://images.unsplash.com/photo-1512149673953-1e251807ec7c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] rounded-2xl mt-20">
      <div className="flex h-full basis-1/2 px-16 py-2 flex-col text-white p-4 gap-4">
        <p className="text-md">Ahead app</p>
        <h1 className="text-6xl tracking-wider w-[80%] leading-normal">
          Master your life by mastering emotions.
        </h1>
        <div className="flex gap-16 items-center">
          <button className="flex bg-white text-black p-2 font-semibold rounded-md gap-2 items-center ">
            <FaApple className="text-2xl" />
            <div className="flex flex-col">
              <span className="text-xs">Download on</span>
              <span>App Store</span>
            </div>
          </button>
          <div className="flex justify-between gap-2 flex-col">
            <div className="flex gap-2 text-yellow-600">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>100+ Appstore reviews</p>
          </div>
        </div>
      </div>
      <div className="flex basis-1/2 justify-center items-center overflow-hidden w-full">
        <Image
          className="w-full h-full object-cover rounded-r-2xl"
          src="/ahead-bg.png"
          alt="bg-image"
          height={300}
          width={200}
        />
      </div>
    </div>
  );
};

export default Main;
