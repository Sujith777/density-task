import Image from "next/image";
import React from "react";

const Meet = () => {
  return (
    <div className="flex h-[80vh] my-10 flex-col gap-16 relative p-16 mx-8 rounded-lg bg-[url('https://images.unsplash.com/photo-1538438253612-287c9fc9217e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="flex flex-col gap-4">
        <p className="text-md">Built out of frustration</p>
        <p className="text-6xl font-bold">Meet the ahead app</p>
      </div>
      <div className="flex items-center">
        <div className="flex basis-1/2 justify-center items-center">
          <Image
            className="object-cover rounded-full"
            src="/ghost.png"
            alt="ghost"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-4 basis-1/2 font-semibold justify-center p-8">
          <p className="text-lg w-[80%]">
            A personalised pocket coach that provides bite-sized,
            scientific-driven tools to boost emotional intelligence.
          </p>
          <p className="text-lg w-[80%]">
            Think of it as a pocket cheerleader towards a better, more
            fulfilling life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meet;
