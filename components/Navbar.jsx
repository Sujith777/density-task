import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full sticky py-4 px-20 flex items-center justify-between">
      <div className="flex justify-center items-center">
        <Image
          className="rounded-lg overflow-hidden object-cover"
          src="/favicon-32x32.png"
          alt="logo"
          height={50}
          width={50}
        />
      </div>
      <div className="flex gap-8">
        <span className="cursor-pointer text-black">Emotions</span>
        <span className="cursor-pointer text-black">Manifesto</span>
        <span className="cursor-pointer text-black">Self-awareness test</span>
        <span className="cursor-pointer text-black">Work with us</span>
      </div>
      <div>
        <button className="bg-black text-white rounded-full p-4">
          Download app
        </button>
      </div>
    </div>
  );
};

export default Navbar;
