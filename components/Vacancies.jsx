import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Vacancies = () => {
  return (
    <div className="flex h-screen flex-col relative gap-8 py-8 px-32 mx-8">
      <h2 className="text-4xl font-bold">Open Vacancies</h2>
      <div className="grid grid-cols-3">
        <div className="col-span-1 w-[80%] group peer flex bg-orange-100 rounded-md p-8 flex-col gap-2">
          <p className="text-lg font-bold">Senior Full-Stack Engineer</p>
          <ul className="list-disc flex flex-col gap-1 p-2">
            <li className="text-md">Full-time position</li>
            <li className="text-md">Berlin or remote</li>
            <li className="text-md">
              £65-85k, 0.50-1.50% equity share options
            </li>
          </ul>
          <button className="text-white hidden group-hover:block transition ease-in duration-300 bg-black p-4 rounded-full w-[50%]">
            See Details
          </button>
        </div>
        <div className="col-span-1 w-[80%] group flex bg-orange-100 rounded-md p-8 flex-col gap-2">
          <p className="text-lg font-bold">Senior Designer</p>
          <ul className="list-disc flex flex-col gap-1 p-2">
            <li className="text-md">Full-time position</li>
            <li className="text-md">Berlin or remote</li>
            <li className="text-md">
              £40-55k, 0.25-0.50% equity share options
            </li>
          </ul>
          <button className="text-white hidden group-hover:block transition ease-in duration-300 bg-black p-4 rounded-full w-[50%]">
            See Details
          </button>
        </div>
        <div className="col-span-1 w-[80%] group flex bg-orange-100 rounded-md p-8 flex-col gap-2">
          <p className="text-lg font-bold">Superstar Intern</p>
          <ul className="list-disc flex flex-col gap-1 p-2">
            <li className="text-md">Full-time position</li>
            <li className="text-md">Berlin or remote</li>
            <li className="text-md">
              £20-24k, 0.50-1.50% equity share options
            </li>
          </ul>
          <button className="text-white hidden group-hover:block transition ease-in duration-300 bg-black p-4 rounded-full w-[50%]">
            See Details
          </button>
        </div>
      </div>

      <hr className="my-2 font-semibold" />

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="object-cover rounded-lg"
            src="/favicon-32x32.png"
            alt="logo"
            width={100}
            height={100}
          />
          <p className="text-4xl text-violet-600 font-bold">ahead</p>
        </div>
        <div className="flex gap-4">
          <div className="flex justify-center items-center gap-1">
            <FaLocationDot className="text-lg text-green-500" />
            <p className="text-sm">Auguststraße 26, 10117 Berlin</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <HiMail className="text-lg text-green-500" />
            <p className="text-sm">h1@ahead-app.com</p>
          </div>
        </div>
        <button className="flex bg-black text-white p-2 font-semibold rounded-md gap-2 items-center ">
          <FaApple className="text-2xl" />
          <div className="flex flex-col">
            <span className="text-xs">Download on the</span>
            <span>App Store</span>
          </div>
        </button>
        <p className="text-sm text-zinc-600">
          ©2022 Ahead app. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Vacancies;
